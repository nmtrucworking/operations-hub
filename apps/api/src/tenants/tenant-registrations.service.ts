import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { TenantRegistrationStatus } from "@prisma/client";
import { AuditAction, AuditResult } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateTenantRegistrationDto } from "./dto/create-tenant-registration.dto";

@Injectable()
export class TenantRegistrationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  async create(
    userId: string,
    dto: CreateTenantRegistrationDto,
    meta: { correlationId?: string; ipAddress?: string }
  ) {
    const proposedName = dto.proposedName.trim();
    const proposedSlug = this.normalizeSlug(dto.proposedSlug);
    if (proposedSlug.length < 2) {
      throw new BadRequestException("Slug must contain at least two valid characters");
    }

    const [tenantWithSlug, registrationWithSlug] = await Promise.all([
      this.prisma.tenant.findUnique({ where: { slug: proposedSlug }, select: { id: true } }),
      this.prisma.tenantRegistration.findUnique({ where: { proposedSlug }, select: { id: true, status: true } })
    ]);

    if (tenantWithSlug) throw new ConflictException("Slug is already used by an existing tenant");
    if (registrationWithSlug) {
      throw new ConflictException(`Slug is already reserved by a ${registrationWithSlug.status.toLowerCase()} registration`);
    }

    const registration = await this.prisma.tenantRegistration.create({
      data: {
        applicantUserId: userId,
        proposedName,
        proposedSlug,
        status: TenantRegistrationStatus.SUBMITTED,
        metadata: {
          contactEmail: dto.contactEmail.trim().toLowerCase(),
          purpose: dto.purpose.trim(),
          representativeName: dto.representativeName?.trim() || null,
          websiteOrReference: dto.websiteOrReference?.trim() || null
        }
      }
    });

    await this.audit.write({
      actorId: userId,
      action: AuditAction.Create,
      result: AuditResult.Success,
      entityType: "TenantRegistration",
      entityId: registration.id,
      message: "Tenant registration submitted",
      after: { proposedName, proposedSlug, status: registration.status },
      correlationId: meta.correlationId,
      ipAddress: meta.ipAddress
    });

    return this.toResponse(registration);
  }

  async listMine(userId: string) {
    const registrations = await this.prisma.tenantRegistration.findMany({
      where: { applicantUserId: userId },
      orderBy: { createdAt: "desc" }
    });
    return registrations.map((registration) => this.toResponse(registration));
  }

  async getMine(userId: string, id: string) {
    const registration = await this.prisma.tenantRegistration.findFirst({
      where: { id, applicantUserId: userId }
    });
    if (!registration) throw new NotFoundException("Tenant registration was not found");
    return this.toResponse(registration);
  }

  async withdraw(
    userId: string,
    id: string,
    meta: { correlationId?: string; ipAddress?: string }
  ) {
    const registration = await this.prisma.tenantRegistration.findFirst({
      where: { id, applicantUserId: userId }
    });
    if (!registration) throw new NotFoundException("Tenant registration was not found");

    const allowed = new Set<TenantRegistrationStatus>([
      TenantRegistrationStatus.DRAFT,
      TenantRegistrationStatus.SUBMITTED,
      TenantRegistrationStatus.IN_REVIEW
    ]);
    if (!allowed.has(registration.status)) {
      throw new BadRequestException(`Registration in ${registration.status} state cannot be withdrawn`);
    }

    const updated = await this.prisma.tenantRegistration.update({
      where: { id: registration.id },
      data: { status: TenantRegistrationStatus.WITHDRAWN }
    });

    await this.audit.write({
      actorId: userId,
      action: AuditAction.Update,
      result: AuditResult.Success,
      entityType: "TenantRegistration",
      entityId: registration.id,
      message: "Tenant registration withdrawn",
      before: { status: registration.status },
      after: { status: updated.status },
      correlationId: meta.correlationId,
      ipAddress: meta.ipAddress
    });

    return this.toResponse(updated);
  }

  private normalizeSlug(value: string) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-{2,}/g, "-");
  }

  private toResponse(registration: {
    id: string;
    proposedName: string;
    proposedSlug: string;
    status: TenantRegistrationStatus;
    submittedAt: Date;
    reviewedAt: Date | null;
    createdTenantId: string | null;
    reviewNote: string | null;
    metadata: unknown;
    createdAt: Date;
    updatedAt: Date;
  }) {
    return {
      id: registration.id,
      proposedName: registration.proposedName,
      proposedSlug: registration.proposedSlug,
      status: registration.status,
      submittedAt: registration.submittedAt,
      reviewedAt: registration.reviewedAt,
      createdTenantId: registration.createdTenantId,
      reviewNote: registration.reviewNote,
      metadata: registration.metadata,
      createdAt: registration.createdAt,
      updatedAt: registration.updatedAt
    };
  }
}
