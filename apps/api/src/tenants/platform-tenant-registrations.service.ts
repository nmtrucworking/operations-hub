import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import {
  AuditAction as PrismaAuditAction,
  AuditResult as PrismaAuditResult,
  MembershipStatus,
  TenantModuleStatus,
  TenantRegistrationStatus
} from "@prisma/client";
import { AuditAction, MODULES, PERMISSIONS } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";

export type ProvisioningFaultStage = "after-tenant" | "after-membership" | "before-owner-assignment";

@Injectable()
export class PlatformTenantRegistrationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  list(status?: TenantRegistrationStatus) {
    return this.prisma.tenantRegistration.findMany({
      where: status ? { status } : undefined,
      include: {
        applicant: { select: { id: true, email: true, fullName: true } },
        reviewer: { select: { id: true, email: true, fullName: true } }
      },
      orderBy: { submittedAt: "asc" }
    });
  }

  async get(id: string) {
    const registration = await this.prisma.tenantRegistration.findUnique({
      where: { id },
      include: {
        applicant: { select: { id: true, email: true, fullName: true } },
        reviewer: { select: { id: true, email: true, fullName: true } },
        createdTenant: true
      }
    });
    if (!registration) throw new NotFoundException("Tenant registration was not found");
    return registration;
  }

  requestChanges(
    id: string,
    reviewerId: string,
    reviewNote: string | undefined,
    meta: { correlationId?: string; ipAddress?: string }
  ) {
    return this.review(id, reviewerId, TenantRegistrationStatus.IN_REVIEW, reviewNote, "Changes requested", meta);
  }

  reject(
    id: string,
    reviewerId: string,
    reviewNote: string | undefined,
    meta: { correlationId?: string; ipAddress?: string }
  ) {
    return this.review(id, reviewerId, TenantRegistrationStatus.REJECTED, reviewNote, "Tenant registration rejected", meta);
  }

  async approve(
    id: string,
    reviewerId: string,
    reviewNote: string | undefined,
    meta: { correlationId?: string; ipAddress?: string; testFaultAt?: ProvisioningFaultStage }
  ) {
    return this.prisma.$transaction(
      async (tx) => {
        const registration = await tx.tenantRegistration.findUnique({ where: { id } });
        if (!registration) throw new NotFoundException("Tenant registration was not found");
        this.assertReviewable(registration.status);

        const existingTenant = await tx.tenant.findUnique({ where: { slug: registration.proposedSlug }, select: { id: true } });
        if (existingTenant) throw new ConflictException("Slug is already used by an existing tenant");

        const permissionRows = await Promise.all(
          Object.values(PERMISSIONS).map((code) =>
            tx.permission.upsert({
              where: { code },
              create: { code, description: code.replace(":", " ") },
              update: {}
            })
          )
        );

        const tenant = await tx.tenant.create({
          data: {
            name: registration.proposedName,
            slug: registration.proposedSlug,
            organizationProfile: { create: { displayName: registration.proposedName } },
            tenantBranding: {
              create: {
                displayName: registration.proposedName,
                primaryColor: "#2563eb",
                status: "ACTIVE"
              }
            },
            retentionPolicy: { create: {} },
            modules: {
              create: MODULES.map((module) => ({
                key: module.key,
                status: TenantModuleStatus.ENABLED,
                isEnabled: true,
                enabledAt: new Date()
              }))
            }
          }
        });
        this.testCheckpoint(meta.testFaultAt, "after-tenant");

        const ownerRole = await tx.role.create({
          data: {
            tenantId: tenant.id,
            code: "OWNER",
            name: "Owner",
            description: "System owner role projected from the active ownership assignment",
            isSystem: true,
            permissions: {
              create: permissionRows.map((permission) => ({ permissionId: permission.id }))
            }
          }
        });

        const membership = await tx.membership.create({
          data: {
            userId: registration.applicantUserId,
            tenantId: tenant.id,
            status: MembershipStatus.ACTIVE,
            title: "Owner",
            joinedAt: new Date(),
            roles: { create: { roleId: ownerRole.id } }
          }
        });
        this.testCheckpoint(meta.testFaultAt, "after-membership");
        this.testCheckpoint(meta.testFaultAt, "before-owner-assignment");

        const ownership = await tx.ownershipAssignment.create({
          data: { tenantId: tenant.id, membershipId: membership.id }
        });

        const updatedRegistration = await tx.tenantRegistration.update({
          where: { id },
          data: {
            status: TenantRegistrationStatus.APPROVED,
            reviewedAt: new Date(),
            reviewedById: reviewerId,
            reviewNote: reviewNote?.trim() || null,
            createdTenantId: tenant.id
          }
        });

        await tx.auditLog.create({
          data: {
            tenantId: tenant.id,
            actorId: reviewerId,
            action: PrismaAuditAction.CREATE,
            result: PrismaAuditResult.SUCCESS,
            entityType: "Tenant",
            entityId: tenant.id,
            message: "Tenant provisioned from approved registration",
            after: {
              registrationId: id,
              membershipId: membership.id,
              ownershipAssignmentId: ownership.id,
              ownerRoleId: ownerRole.id
            },
            correlationId: meta.correlationId,
            ipAddress: meta.ipAddress
          }
        });

        await tx.auditLog.create({
          data: {
            actorId: reviewerId,
            action: PrismaAuditAction.UPDATE,
            result: PrismaAuditResult.SUCCESS,
            entityType: "TenantRegistration",
            entityId: id,
            message: "Tenant registration approved",
            before: { status: registration.status },
            after: { status: updatedRegistration.status, createdTenantId: tenant.id },
            correlationId: meta.correlationId,
            ipAddress: meta.ipAddress
          }
        });

        return { registration: updatedRegistration, tenant, membership, ownerRole, ownership };
      },
      { isolationLevel: "Serializable" }
    );
  }

  private async review(
    id: string,
    reviewerId: string,
    status: "IN_REVIEW" | "REJECTED",
    reviewNote: string | undefined,
    message: string,
    meta: { correlationId?: string; ipAddress?: string }
  ) {
    const registration = await this.prisma.tenantRegistration.findUnique({ where: { id } });
    if (!registration) throw new NotFoundException("Tenant registration was not found");
    this.assertReviewable(registration.status);
    if (!reviewNote?.trim()) {
      throw new BadRequestException("Review note is required for request-changes and reject decisions");
    }

    const updated = await this.prisma.tenantRegistration.update({
      where: { id },
      data: {
        status,
        reviewedAt: new Date(),
        reviewedById: reviewerId,
        reviewNote: reviewNote.trim()
      }
    });
    await this.audit.write({
      actorId: reviewerId,
      action: AuditAction.Update,
      entityType: "TenantRegistration",
      entityId: id,
      message,
      before: { status: registration.status },
      after: { status: updated.status, reviewNote: updated.reviewNote },
      correlationId: meta.correlationId,
      ipAddress: meta.ipAddress
    });
    return updated;
  }

  private assertReviewable(status: TenantRegistrationStatus) {
    const reviewable = new Set<TenantRegistrationStatus>([
      TenantRegistrationStatus.SUBMITTED,
      TenantRegistrationStatus.IN_REVIEW
    ]);
    if (!reviewable.has(status)) {
      throw new BadRequestException(`Registration in ${status} state cannot be reviewed`);
    }
  }

  private testCheckpoint(configured: ProvisioningFaultStage | undefined, current: ProvisioningFaultStage) {
    if (process.env.NODE_ENV === "test" && configured === current) {
      throw new Error(`Provisioning fault injected at ${current}`);
    }
  }
}
