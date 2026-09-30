import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import {
  AccountStatus,
  AuditAction as PrismaAuditAction,
  DomainVerificationChallengeStatus,
  MembershipStatus
} from "@prisma/client";
import { AuditAction } from "@operations-hub/shared";
import { randomUUID } from "node:crypto";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { DnsVerificationProvider } from "./dns-verification.provider";
import { CreateCustomDomainDto, UpdateBrandingDto } from "./dto/manage-tenant.dto";

@Injectable()
export class TenantManagementService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly dns: DnsVerificationProvider
  ) {}

  async listForUser(userId: string) {
    const memberships = await this.prisma.membership.findMany({
      where: { userId, status: MembershipStatus.ACTIVE, tenant: { status: "ACTIVE" } },
      include: { tenant: { include: { tenantBranding: true } } },
      orderBy: { tenant: { name: "asc" } }
    });
    return memberships.map((membership) => ({
      membershipId: membership.id,
      tenant: this.withBrandingProjection(membership.tenant),
      status: membership.status
    }));
  }

  async current(tenantId: string) {
    const tenant = await this.prisma.tenant.findUniqueOrThrow({
      where: { id: tenantId },
      include: { modules: true, tenantBranding: true }
    });
    return this.withBrandingProjection(tenant);
  }

  async listOwners(tenantId: string) {
    const assignments = await this.prisma.ownershipAssignment.findMany({
      where: {
        tenantId,
        effectiveTo: null,
        membership: {
          status: MembershipStatus.ACTIVE,
          user: { isActive: true, accountStatus: AccountStatus.ACTIVE }
        }
      },
      include: {
        membership: {
          include: {
            user: { select: { id: true, email: true, fullName: true } }
          }
        }
      },
      orderBy: { effectiveFrom: "asc" }
    });
    return assignments.map((assignment) => ({
      id: assignment.id,
      membershipId: assignment.membershipId,
      effectiveFrom: assignment.effectiveFrom,
      user: assignment.membership.user,
      title: assignment.membership.title
    }));
  }

  async addOwner(tenantId: string, actorId: string, membershipId: string, correlationId?: string) {
    return this.prisma.$transaction(async (tx) => {
      const membership = await tx.membership.findFirst({
        where: {
          id: membershipId,
          tenantId,
          status: MembershipStatus.ACTIVE,
          user: { isActive: true, accountStatus: AccountStatus.ACTIVE }
        }
      });
      if (!membership) throw new NotFoundException("Active membership was not found in this tenant");

      const existing = await tx.ownershipAssignment.findFirst({
        where: { tenantId, membershipId, effectiveTo: null }
      });
      if (existing) throw new ConflictException("Membership is already an active owner");

      const ownerRole = await this.findOwnerRole(tx, tenantId);
      const assignment = await tx.ownershipAssignment.create({ data: { tenantId, membershipId } });
      await tx.membershipRole.upsert({
        where: { membershipId_roleId: { membershipId, roleId: ownerRole.id } },
        create: { membershipId, roleId: ownerRole.id },
        update: {}
      });
      await tx.auditLog.create({
        data: {
          tenantId,
          actorId,
          action: PrismaAuditAction.UPDATE,
          entityType: "OwnershipAssignment",
          entityId: assignment.id,
          message: "Tenant owner added",
          after: { membershipId },
          correlationId
        }
      });
      return assignment;
    });
  }

  async revokeOwner(tenantId: string, actorId: string, membershipId: string, correlationId?: string) {
    return this.prisma.$transaction(async (tx) => {
      const current = await tx.ownershipAssignment.findFirst({
        where: { tenantId, membershipId, effectiveTo: null }
      });
      if (!current) throw new NotFoundException("Active owner assignment was not found");

      const activeOwners = await this.countActiveOwners(tx, tenantId);
      if (activeOwners <= 1) throw new BadRequestException("The last active owner cannot be revoked");

      const ownerRole = await this.findOwnerRole(tx, tenantId);
      const updated = await tx.ownershipAssignment.update({
        where: { id: current.id },
        data: { effectiveTo: new Date() }
      });
      await tx.membershipRole.deleteMany({ where: { membershipId, roleId: ownerRole.id } });
      await tx.auditLog.create({
        data: {
          tenantId,
          actorId,
          action: PrismaAuditAction.UPDATE,
          entityType: "OwnershipAssignment",
          entityId: current.id,
          message: "Tenant owner revoked",
          before: { membershipId, effectiveTo: null },
          after: { membershipId, effectiveTo: updated.effectiveTo },
          correlationId
        }
      });
      return updated;
    });
  }

  async transferOwnership(
    tenantId: string,
    actorId: string,
    actorMembershipId: string,
    toMembershipId: string,
    correlationId?: string
  ) {
    if (actorMembershipId === toMembershipId) throw new BadRequestException("Target membership must be different");
    return this.prisma.$transaction(async (tx) => {
      const [sourceOwner, targetMembership] = await Promise.all([
        tx.ownershipAssignment.findFirst({
          where: { tenantId, membershipId: actorMembershipId, effectiveTo: null }
        }),
        tx.membership.findFirst({
          where: {
            id: toMembershipId,
            tenantId,
            status: MembershipStatus.ACTIVE,
            user: { isActive: true, accountStatus: AccountStatus.ACTIVE }
          }
        })
      ]);
      if (!sourceOwner) throw new BadRequestException("Current membership is not an active owner");
      if (!targetMembership) throw new NotFoundException("Target active membership was not found in this tenant");

      const existingTargetOwner = await tx.ownershipAssignment.findFirst({
        where: { tenantId, membershipId: toMembershipId, effectiveTo: null }
      });
      if (existingTargetOwner) throw new ConflictException("Target membership is already an owner");

      const ownerRole = await this.findOwnerRole(tx, tenantId);
      const targetOwner = await tx.ownershipAssignment.create({
        data: { tenantId, membershipId: toMembershipId }
      });
      await tx.membershipRole.upsert({
        where: { membershipId_roleId: { membershipId: toMembershipId, roleId: ownerRole.id } },
        create: { membershipId: toMembershipId, roleId: ownerRole.id },
        update: {}
      });
      await tx.ownershipAssignment.update({ where: { id: sourceOwner.id }, data: { effectiveTo: new Date() } });
      await tx.membershipRole.deleteMany({ where: { membershipId: actorMembershipId, roleId: ownerRole.id } });
      await tx.auditLog.create({
        data: {
          tenantId,
          actorId,
          action: PrismaAuditAction.UPDATE,
          entityType: "OwnershipAssignment",
          entityId: targetOwner.id,
          message: "Tenant ownership transferred",
          before: { membershipId: actorMembershipId },
          after: { membershipId: toMembershipId },
          correlationId
        }
      });
      return { fromMembershipId: actorMembershipId, toMembershipId, assignment: targetOwner };
    });
  }

  async getBranding(tenantId: string) {
    const branding = await this.prisma.tenantBranding.findUnique({ where: { tenantId } });
    if (branding) return branding;
    const tenant = await this.prisma.tenant.findUniqueOrThrow({ where: { id: tenantId } });
    return {
      id: null,
      tenantId,
      displayName: tenant.name,
      primaryColor: tenant.brandColor,
      secondaryColor: null,
      logoAssetId: null,
      faviconAssetId: null,
      status: "ACTIVE"
    };
  }

  async updateBranding(tenantId: string, actorId: string, dto: UpdateBrandingDto, correlationId?: string) {
    const current = await this.getBranding(tenantId);
    const displayName = dto.displayName?.trim() || current.displayName;
    const primaryColor = dto.primaryColor ?? current.primaryColor ?? "#2563eb";
    const secondaryColor = dto.secondaryColor ?? current.secondaryColor;
    const branding = await this.prisma.$transaction(async (tx) => {
      const updated = await tx.tenantBranding.upsert({
        where: { tenantId },
        create: { tenantId, displayName, primaryColor, secondaryColor, status: "ACTIVE" },
        update: { displayName, primaryColor, secondaryColor, status: "ACTIVE" }
      });
      await tx.tenant.update({ where: { id: tenantId }, data: { brandColor: primaryColor } });
      return updated;
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: "TenantBranding",
      entityId: branding.id,
      before: current,
      after: branding,
      correlationId
    });
    return branding;
  }

  listDomains(tenantId: string) {
    return this.prisma.customDomain.findMany({
      where: { tenantId },
      include: {
        verificationChallenges: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: {
            id: true,
            recordName: true,
            expectedValue: true,
            status: true,
            expiresAt: true,
            verifiedAt: true,
            createdAt: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });
  }

  async createDomain(tenantId: string, actorId: string, dto: CreateCustomDomainDto, correlationId?: string) {
    const hostname = this.normalizeHostname(dto.hostname);
    const existing = await this.prisma.customDomain.findUnique({ where: { hostname } });
    if (existing) throw new ConflictException("Hostname is already registered");
    const domain = await this.prisma.customDomain.create({ data: { tenantId, hostname, verificationStatus: "PENDING" } });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: "CustomDomain",
      entityId: domain.id,
      after: domain,
      correlationId
    });
    return domain;
  }

  async issueDomainChallenge(tenantId: string, actorId: string, id: string, correlationId?: string) {
    return this.prisma.$transaction(async (tx) => {
      const domain = await tx.customDomain.findFirst({ where: { id, tenantId } });
      if (!domain) throw new NotFoundException("Custom domain was not found");
      if (domain.verificationStatus === "VERIFIED") {
        throw new BadRequestException("Custom domain is already verified");
      }

      await tx.domainVerificationChallenge.updateMany({
        where: { customDomainId: id, status: DomainVerificationChallengeStatus.PENDING },
        data: { status: DomainVerificationChallengeStatus.REVOKED }
      });
      const expectedValue = `operations-hub-domain-verification=${randomUUID()}`;
      const challenge = await tx.domainVerificationChallenge.create({
        data: {
          customDomainId: id,
          recordName: `_operations-hub.${domain.hostname}`,
          expectedValue,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
        }
      });
      await tx.customDomain.update({
        where: { id },
        data: { verificationStatus: "PENDING", verifiedAt: null }
      });
      await tx.auditLog.create({
        data: {
          tenantId,
          actorId,
          action: PrismaAuditAction.UPDATE,
          entityType: "CustomDomain",
          entityId: id,
          message: "DNS verification challenge issued",
          after: { challengeId: challenge.id, recordName: challenge.recordName, expiresAt: challenge.expiresAt },
          correlationId
        }
      });
      return {
        id: challenge.id,
        recordName: challenge.recordName,
        expectedValue: challenge.expectedValue,
        status: challenge.status,
        expiresAt: challenge.expiresAt
      };
    });
  }

  async verifyDomain(tenantId: string, actorId: string, id: string, correlationId?: string) {
    const domain = await this.prisma.customDomain.findFirst({ where: { id, tenantId } });
    if (!domain) throw new NotFoundException("Custom domain was not found");
    if (domain.verificationStatus === "VERIFIED") return { verified: true, domain };

    const challenge = await this.prisma.domainVerificationChallenge.findFirst({
      where: { customDomainId: id, status: DomainVerificationChallengeStatus.PENDING },
      orderBy: { createdAt: "desc" }
    });
    if (!challenge) throw new BadRequestException("No pending DNS verification challenge exists");
    if (challenge.expiresAt <= new Date()) {
      await this.prisma.domainVerificationChallenge.update({
        where: { id: challenge.id },
        data: { status: DomainVerificationChallengeStatus.EXPIRED }
      });
      throw new BadRequestException("DNS verification challenge has expired");
    }

    const verified = await this.dns.hasTxtRecord(challenge.recordName, challenge.expectedValue);
    if (!verified) return { verified: false, status: "PENDING", recordName: challenge.recordName };

    const result = await this.prisma.$transaction(async (tx) => {
      const verifiedAt = new Date();
      const updatedChallenge = await tx.domainVerificationChallenge.update({
        where: { id: challenge.id },
        data: { status: DomainVerificationChallengeStatus.VERIFIED, verifiedAt }
      });
      const updatedDomain = await tx.customDomain.update({
        where: { id },
        data: { verificationStatus: "VERIFIED", verifiedAt }
      });
      await tx.auditLog.create({
        data: {
          tenantId,
          actorId,
          action: PrismaAuditAction.UPDATE,
          entityType: "CustomDomain",
          entityId: id,
          message: "Custom domain ownership verified through DNS TXT",
          before: { verificationStatus: domain.verificationStatus },
          after: { verificationStatus: "VERIFIED", challengeId: updatedChallenge.id, verifiedAt },
          correlationId
        }
      });
      return updatedDomain;
    });
    return { verified: true, domain: result };
  }

  async revokeDomain(tenantId: string, actorId: string, id: string, correlationId?: string) {
    const domain = await this.prisma.customDomain.findFirst({ where: { id, tenantId } });
    if (!domain) throw new NotFoundException("Custom domain was not found");
    await this.prisma.customDomain.delete({ where: { id } });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Delete,
      entityType: "CustomDomain",
      entityId: id,
      before: domain,
      correlationId
    });
    return { revoked: true, id };
  }

  private normalizeHostname(value: string) {
    const hostname = value.trim().toLowerCase().replace(/\.$/, "");
    if (
      hostname.includes("://") ||
      hostname.includes("/") ||
      !/^(?=.{4,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/.test(hostname)
    ) {
      throw new BadRequestException("Hostname must be a valid domain name without protocol or path");
    }
    return hostname;
  }

  private withBrandingProjection<T extends { brandColor: string; tenantBranding: { primaryColor: string | null } | null }>(tenant: T) {
    return { ...tenant, brandColor: tenant.tenantBranding?.primaryColor ?? tenant.brandColor };
  }

  private async findOwnerRole(tx: Parameters<Parameters<PrismaService["$transaction"]>[0]>[0], tenantId: string) {
    const role = await tx.role.findFirst({ where: { tenantId, OR: [{ code: "OWNER" }, { name: "Owner" }] } });
    if (!role) throw new BadRequestException("Tenant owner role is not configured");
    return role;
  }

  private countActiveOwners(tx: Parameters<Parameters<PrismaService["$transaction"]>[0]>[0], tenantId: string) {
    return tx.ownershipAssignment.count({
      where: {
        tenantId,
        effectiveTo: null,
        membership: {
          status: MembershipStatus.ACTIVE,
          user: { isActive: true, accountStatus: AccountStatus.ACTIVE }
        }
      }
    });
  }
}
