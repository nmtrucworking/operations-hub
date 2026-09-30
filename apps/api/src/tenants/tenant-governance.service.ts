import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import {
  AccountStatus,
  AuditAction,
  AuditResult,
  MembershipStatus,
  Prisma,
  ServiceSubscriptionStatus,
  TenantClosureStatus,
  TenantSupportRequestStatus
} from "@prisma/client";
import { PERMISSIONS, PlatformRole } from "@operations-hub/shared";
import { PrismaService } from "../prisma/prisma.service";
import {
  AssignTenantServiceDto,
  CreateDataExportRequestDto,
  CreateServicePlanDto,
  CreateSupportRequestDto,
  DecideClosureRequestDto,
  GrantSupportRequestDto,
  RejectSupportRequestDto,
  SetTenantUsageDto,
  UpdateRetentionPolicyDto,
  UpdateServiceContactsDto,
  UpsertServicePlanLimitDto
} from "./dto/tenant-governance.dto";

const SUPPORT_FORBIDDEN_SCOPES = new Set<string>([
  PERMISSIONS.roleManage,
  PERMISSIONS.ownershipManage,
  PERMISSIONS.serviceManage,
  PERMISSIONS.closureManage,
  PERMISSIONS.supportManage
]);

@Injectable()
export class TenantGovernanceService {
  constructor(private readonly prisma: PrismaService) {}

  listServicePlans() {
    return this.prisma.servicePlan.findMany({
      where: { isActive: true },
      include: { limits: { orderBy: { metricKey: "asc" } } },
      orderBy: { name: "asc" }
    });
  }

  async serviceOverview(tenantId: string) {
    const [subscription, usage] = await Promise.all([
      this.prisma.tenantServiceSubscription.findFirst({
        where: { tenantId, status: { in: [ServiceSubscriptionStatus.ACTIVE, ServiceSubscriptionStatus.SUSPENDED] } },
        include: { plan: { include: { limits: { orderBy: { metricKey: "asc" } } } } },
        orderBy: { startsAt: "desc" }
      }),
      this.prisma.tenantUsageCounter.findMany({ where: { tenantId }, orderBy: [{ metricKey: "asc" }, { periodKey: "asc" }] })
    ]);
    return { subscription, usage };
  }

  async updateServiceContacts(
    tenantId: string,
    actorId: string,
    dto: UpdateServiceContactsDto,
    correlationId?: string
  ) {
    const subscription = await this.prisma.tenantServiceSubscription.findFirst({
      where: { tenantId, status: { in: [ServiceSubscriptionStatus.ACTIVE, ServiceSubscriptionStatus.SUSPENDED] } },
      orderBy: { startsAt: "desc" }
    });
    if (!subscription) throw new NotFoundException("Tenant service subscription was not found");
    const updated = await this.prisma.tenantServiceSubscription.update({
      where: { id: subscription.id },
      data: {
        serviceContactEmail: dto.serviceContactEmail,
        billingContactEmail: dto.billingContactEmail
      }
    });
    await this.writeAudit(this.prisma, {
      tenantId,
      actorId,
      entityType: "TenantServiceSubscription",
      entityId: updated.id,
      action: AuditAction.UPDATE,
      message: "Tenant service contacts updated",
      before: subscription,
      after: updated,
      correlationId
    });
    return updated;
  }

  async getRetentionPolicy(tenantId: string) {
    return this.prisma.tenantRetentionPolicy.upsert({
      where: { tenantId },
      create: { tenantId },
      update: {}
    });
  }

  listClosureRequests(tenantId: string) {
    return this.prisma.tenantClosureRequest.findMany({
      where: { tenantId },
      include: { exportRequests: true },
      orderBy: { requestedAt: "desc" }
    });
  }

  async requestClosure(
    tenantId: string,
    membershipId: string,
    actorId: string,
    reason: string,
    correlationId?: string
  ) {
    const normalizedReason = reason.trim();
    if (!normalizedReason) throw new BadRequestException("Closure reason is required");

    return this.prisma.$transaction(async (tx) => {
      await this.assertActiveMembership(tx, tenantId, membershipId, actorId);
      const existing = await tx.tenantClosureRequest.findFirst({
        where: {
          tenantId,
          status: { in: [TenantClosureStatus.REQUESTED, TenantClosureStatus.APPROVED, TenantClosureStatus.PROCESSING] }
        }
      });
      if (existing) throw new ConflictException("Tenant already has an active closure request");

      const policy = await tx.tenantRetentionPolicy.upsert({ where: { tenantId }, create: { tenantId }, update: {} });
      const scheduledFor = new Date(Date.now() + policy.gracePeriodDays * 24 * 60 * 60 * 1000);
      const closure = await tx.tenantClosureRequest.create({
        data: { tenantId, requestedByMembershipId: membershipId, reason: normalizedReason, scheduledFor }
      });
      await this.writeAudit(tx, {
        tenantId,
        actorId,
        entityType: "TenantClosureRequest",
        entityId: closure.id,
        action: AuditAction.CREATE,
        message: "Tenant closure requested",
        after: { status: closure.status, scheduledFor, retentionPolicyId: policy.id },
        correlationId
      });
      return closure;
    });
  }

  async cancelClosure(
    tenantId: string,
    closureId: string,
    membershipId: string,
    actorId: string,
    correlationId?: string
  ) {
    return this.prisma.$transaction(async (tx) => {
      await this.assertActiveMembership(tx, tenantId, membershipId, actorId);
      const closure = await tx.tenantClosureRequest.findFirst({ where: { id: closureId, tenantId } });
      if (!closure) throw new NotFoundException("Tenant closure request was not found");
      if (closure.status !== TenantClosureStatus.REQUESTED && closure.status !== TenantClosureStatus.APPROVED) {
        throw new BadRequestException("Closure request can no longer be cancelled");
      }
      if (closure.scheduledFor <= new Date()) throw new BadRequestException("Closure grace period has ended");

      const updated = await tx.tenantClosureRequest.update({
        where: { id: closure.id },
        data: {
          status: TenantClosureStatus.CANCELLED,
          cancelledAt: new Date(),
          cancelledByMembershipId: membershipId
        }
      });
      await this.writeAudit(tx, {
        tenantId,
        actorId,
        entityType: "TenantClosureRequest",
        entityId: closure.id,
        action: AuditAction.UPDATE,
        message: "Tenant closure cancelled during grace period",
        before: { status: closure.status },
        after: { status: updated.status, cancelledAt: updated.cancelledAt },
        correlationId
      });
      return updated;
    });
  }

  listDataExports(tenantId: string) {
    return this.prisma.tenantDataExportRequest.findMany({
      where: { tenantId },
      orderBy: { requestedAt: "desc" }
    });
  }

  async requestDataExport(
    tenantId: string,
    membershipId: string,
    actorId: string,
    dto: CreateDataExportRequestDto,
    correlationId?: string
  ) {
    return this.prisma.$transaction(async (tx) => {
      await this.assertActiveMembership(tx, tenantId, membershipId, actorId);
      if (dto.closureRequestId) {
        const closure = await tx.tenantClosureRequest.findFirst({ where: { id: dto.closureRequestId, tenantId } });
        if (!closure) throw new NotFoundException("Tenant closure request was not found");
      }
      const request = await tx.tenantDataExportRequest.create({
        data: {
          tenantId,
          requestedByMembershipId: membershipId,
          closureRequestId: dto.closureRequestId,
          format: dto.format ?? "JSON"
        }
      });
      await this.writeAudit(tx, {
        tenantId,
        actorId,
        entityType: "TenantDataExportRequest",
        entityId: request.id,
        action: AuditAction.EXPORT,
        message: "Tenant data export requested",
        after: request,
        correlationId
      });
      return request;
    });
  }

  listSupportRequests(tenantId: string) {
    return this.prisma.tenantSupportRequest.findMany({
      where: { tenantId },
      include: {
        grant: {
          select: { id: true, platformUserId: true, scopes: true, startsAt: true, expiresAt: true, revokedAt: true }
        }
      },
      orderBy: { createdAt: "desc" }
    });
  }

  async createSupportRequest(
    tenantId: string,
    membershipId: string,
    actorId: string,
    dto: CreateSupportRequestDto,
    correlationId?: string
  ) {
    const scopes = this.validateSupportScopes(dto.scopes);
    return this.prisma.$transaction(async (tx) => {
      await this.assertActiveMembership(tx, tenantId, membershipId, actorId);
      const supportRequest = await tx.tenantSupportRequest.create({
        data: {
          tenantId,
          requestedByMembershipId: membershipId,
          reason: dto.reason.trim(),
          requestedScopes: scopes,
          requestedDurationMinutes: dto.durationMinutes
        }
      });
      await this.writeAudit(tx, {
        tenantId,
        actorId,
        entityType: "TenantSupportRequest",
        entityId: supportRequest.id,
        action: AuditAction.CREATE,
        message: "Controlled tenant support requested",
        after: {
          requestedScopes: supportRequest.requestedScopes,
          requestedDurationMinutes: supportRequest.requestedDurationMinutes
        },
        correlationId
      });
      return supportRequest;
    });
  }

  listAllPlans() {
    return this.prisma.servicePlan.findMany({
      include: { limits: { orderBy: { metricKey: "asc" } } },
      orderBy: { name: "asc" }
    });
  }

  async createPlan(actorId: string, dto: CreateServicePlanDto, correlationId?: string) {
    const code = dto.code.trim().toUpperCase();
    const existing = await this.prisma.servicePlan.findUnique({ where: { code } });
    if (existing) throw new ConflictException("Service plan code already exists");
    const plan = await this.prisma.servicePlan.create({
      data: {
        code,
        name: dto.name.trim(),
        description: dto.description?.trim(),
        currency: dto.currency?.trim().toUpperCase(),
        billingInterval: dto.billingInterval?.trim()
      }
    });
    await this.writeAudit(this.prisma, {
      actorId,
      entityType: "ServicePlan",
      entityId: plan.id,
      action: AuditAction.CREATE,
      message: "Service plan created",
      after: plan,
      correlationId
    });
    return plan;
  }

  async upsertPlanLimit(actorId: string, planId: string, dto: UpsertServicePlanLimitDto, correlationId?: string) {
    const plan = await this.prisma.servicePlan.findUnique({ where: { id: planId } });
    if (!plan) throw new NotFoundException("Service plan was not found");
    const before = await this.prisma.servicePlanLimit.findUnique({
      where: { planId_metricKey: { planId, metricKey: dto.metricKey } }
    });
    const limit = await this.prisma.servicePlanLimit.upsert({
      where: { planId_metricKey: { planId, metricKey: dto.metricKey } },
      create: { planId, metricKey: dto.metricKey, maxValue: dto.maxValue, unit: dto.unit ?? "count" },
      update: { maxValue: dto.maxValue, unit: dto.unit ?? before?.unit ?? "count" }
    });
    await this.writeAudit(this.prisma, {
      actorId,
      entityType: "ServicePlanLimit",
      entityId: limit.id,
      action: before ? AuditAction.UPDATE : AuditAction.CREATE,
      message: "Service plan limit configured",
      before,
      after: limit,
      correlationId
    });
    return limit;
  }

  async assignTenantService(
    tenantId: string,
    actorId: string,
    dto: AssignTenantServiceDto,
    correlationId?: string
  ) {
    return this.prisma.$transaction(async (tx) => {
      const [tenant, plan] = await Promise.all([
        tx.tenant.findUnique({ where: { id: tenantId } }),
        tx.servicePlan.findUnique({ where: { id: dto.planId } })
      ]);
      if (!tenant) throw new NotFoundException("Tenant was not found");
      if (!plan?.isActive) throw new NotFoundException("Active service plan was not found");

      const now = new Date();
      const previous = await tx.tenantServiceSubscription.findMany({
        where: {
          tenantId,
          status: { in: [ServiceSubscriptionStatus.ACTIVE, ServiceSubscriptionStatus.SUSPENDED] }
        }
      });
      if (previous.length) {
        await tx.tenantServiceSubscription.updateMany({
          where: { id: { in: previous.map((item) => item.id) } },
          data: { status: ServiceSubscriptionStatus.CANCELLED, endsAt: now }
        });
      }
      const subscription = await tx.tenantServiceSubscription.create({
        data: {
          tenantId,
          planId: plan.id,
          status: dto.status ?? ServiceSubscriptionStatus.ACTIVE,
          serviceContactEmail: dto.serviceContactEmail,
          billingContactEmail: dto.billingContactEmail,
          startsAt: now
        },
        include: { plan: { include: { limits: true } } }
      });
      await this.writeAudit(tx, {
        tenantId,
        actorId,
        entityType: "TenantServiceSubscription",
        entityId: subscription.id,
        action: AuditAction.UPDATE,
        message: "Tenant service plan assigned",
        before: previous.map((item) => ({ id: item.id, planId: item.planId, status: item.status })),
        after: { id: subscription.id, planId: plan.id, status: subscription.status },
        correlationId
      });
      return subscription;
    });
  }

  async setTenantUsage(tenantId: string, actorId: string, dto: SetTenantUsageDto, correlationId?: string) {
    const tenant = await this.prisma.tenant.findUnique({ where: { id: tenantId }, select: { id: true } });
    if (!tenant) throw new NotFoundException("Tenant was not found");
    const periodKey = dto.periodKey ?? "lifetime";
    const before = await this.prisma.tenantUsageCounter.findUnique({
      where: { tenantId_metricKey_periodKey: { tenantId, metricKey: dto.metricKey, periodKey } }
    });
    const usage = await this.prisma.tenantUsageCounter.upsert({
      where: { tenantId_metricKey_periodKey: { tenantId, metricKey: dto.metricKey, periodKey } },
      create: { tenantId, metricKey: dto.metricKey, periodKey, usedValue: dto.usedValue },
      update: { usedValue: dto.usedValue, measuredAt: new Date() }
    });
    await this.writeAudit(this.prisma, {
      tenantId,
      actorId,
      entityType: "TenantUsageCounter",
      entityId: usage.id,
      action: before ? AuditAction.UPDATE : AuditAction.CREATE,
      message: "Tenant usage counter updated",
      before,
      after: usage,
      correlationId
    });
    return usage;
  }

  async updateRetentionPolicy(
    tenantId: string,
    actorId: string,
    dto: UpdateRetentionPolicyDto,
    correlationId?: string
  ) {
    const tenant = await this.prisma.tenant.findUnique({ where: { id: tenantId }, select: { id: true } });
    if (!tenant) throw new NotFoundException("Tenant was not found");
    const before = await this.prisma.tenantRetentionPolicy.findUnique({ where: { tenantId } });
    const policy = await this.prisma.tenantRetentionPolicy.upsert({
      where: { tenantId },
      create: { tenantId, ...dto },
      update: dto
    });
    await this.writeAudit(this.prisma, {
      tenantId,
      actorId,
      entityType: "TenantRetentionPolicy",
      entityId: policy.id,
      action: before ? AuditAction.UPDATE : AuditAction.CREATE,
      message: "Tenant retention policy updated",
      before,
      after: policy,
      correlationId
    });
    return policy;
  }

  listPlatformClosures(tenantId?: string) {
    return this.prisma.tenantClosureRequest.findMany({
      where: { tenantId },
      include: {
        tenant: { select: { id: true, name: true, slug: true, status: true } },
        requester: { include: { user: { select: { id: true, email: true, fullName: true } } } },
        exportRequests: true
      },
      orderBy: { requestedAt: "desc" },
      take: 200
    });
  }

  async decideClosure(
    tenantId: string,
    closureId: string,
    actorId: string,
    dto: DecideClosureRequestDto,
    correlationId?: string
  ) {
    if (dto.status !== TenantClosureStatus.APPROVED && dto.status !== TenantClosureStatus.REJECTED) {
      throw new BadRequestException("Closure decision must be APPROVED or REJECTED");
    }
    return this.prisma.$transaction(async (tx) => {
      const closure = await tx.tenantClosureRequest.findFirst({ where: { id: closureId, tenantId } });
      if (!closure) throw new NotFoundException("Tenant closure request was not found");
      if (closure.status !== TenantClosureStatus.REQUESTED) {
        throw new BadRequestException("Only a requested closure can be reviewed");
      }
      const updated = await tx.tenantClosureRequest.update({
        where: { id: closure.id },
        data: { status: dto.status, decidedByUserId: actorId, decidedAt: new Date() }
      });
      await this.writeAudit(tx, {
        tenantId,
        actorId,
        entityType: "TenantClosureRequest",
        entityId: closure.id,
        action: AuditAction.UPDATE,
        message: `Tenant closure ${dto.status.toLowerCase()}: ${dto.note.trim()}`,
        before: { status: closure.status },
        after: { status: updated.status, decidedAt: updated.decidedAt },
        correlationId
      });
      return updated;
    });
  }

  listPlatformSupportRequests(tenantId?: string) {
    return this.prisma.tenantSupportRequest.findMany({
      where: { tenantId },
      include: {
        tenant: { select: { id: true, name: true, slug: true } },
        requester: { include: { user: { select: { id: true, email: true, fullName: true } } } },
        reviewer: { select: { id: true, email: true, fullName: true } },
        grant: true
      },
      orderBy: { createdAt: "desc" },
      take: 200
    });
  }

  listSupportPrincipals() {
    return this.prisma.user.findMany({
      where: {
        isActive: true,
        accountStatus: AccountStatus.ACTIVE,
        platformRole: { in: [PlatformRole.PlatformSupport, PlatformRole.PlatformAdmin] }
      },
      select: { id: true, email: true, fullName: true, platformRole: true },
      orderBy: [{ platformRole: "asc" }, { fullName: "asc" }]
    });
  }

  async grantSupport(
    tenantId: string,
    requestId: string,
    actorId: string,
    dto: GrantSupportRequestDto,
    correlationId?: string
  ) {
    const scopes = this.validateSupportScopes(dto.scopes);
    return this.prisma.$transaction(async (tx) => {
      const supportRequest = await tx.tenantSupportRequest.findFirst({ where: { id: requestId, tenantId } });
      if (!supportRequest) throw new NotFoundException("Tenant support request was not found");
      if (supportRequest.status !== TenantSupportRequestStatus.OPEN) {
        throw new BadRequestException("Support request is no longer open");
      }
      if (dto.durationMinutes > supportRequest.requestedDurationMinutes) {
        throw new BadRequestException("Support grant duration exceeds the requested duration");
      }
      const requestedScopeSet = new Set(supportRequest.requestedScopes);
      if (scopes.some((scope) => !requestedScopeSet.has(scope))) {
        throw new BadRequestException("Support grant contains a scope that the tenant did not request");
      }
      const principal = await tx.user.findUnique({ where: { id: dto.platformUserId } });
      if (
        !principal?.isActive ||
        principal.accountStatus !== AccountStatus.ACTIVE ||
        ![PlatformRole.PlatformSupport, PlatformRole.PlatformAdmin].includes(principal.platformRole as PlatformRole)
      ) {
        throw new BadRequestException("Support principal must be an active platform support or platform admin user");
      }

      const startsAt = new Date();
      const expiresAt = new Date(startsAt.getTime() + dto.durationMinutes * 60 * 1000);
      const grant = await tx.tenantSupportGrant.create({
        data: {
          tenantId,
          supportRequestId: supportRequest.id,
          platformUserId: principal.id,
          scopes,
          startsAt,
          expiresAt
        }
      });
      await tx.tenantSupportRequest.update({
        where: { id: supportRequest.id },
        data: {
          status: TenantSupportRequestStatus.APPROVED,
          reviewedByUserId: actorId,
          reviewNote: dto.reviewNote?.trim(),
          reviewedAt: startsAt
        }
      });
      await this.writeAudit(tx, {
        tenantId,
        actorId,
        entityType: "TenantSupportGrant",
        entityId: grant.id,
        action: AuditAction.CREATE,
        message: "Time-boxed tenant support access granted",
        after: { platformUserId: grant.platformUserId, scopes: grant.scopes, startsAt, expiresAt },
        correlationId
      });
      return grant;
    });
  }

  async rejectSupport(
    tenantId: string,
    requestId: string,
    actorId: string,
    dto: RejectSupportRequestDto,
    correlationId?: string
  ) {
    return this.prisma.$transaction(async (tx) => {
      const supportRequest = await tx.tenantSupportRequest.findFirst({ where: { id: requestId, tenantId } });
      if (!supportRequest) throw new NotFoundException("Tenant support request was not found");
      if (supportRequest.status !== TenantSupportRequestStatus.OPEN) {
        throw new BadRequestException("Support request is no longer open");
      }
      const updated = await tx.tenantSupportRequest.update({
        where: { id: supportRequest.id },
        data: {
          status: TenantSupportRequestStatus.REJECTED,
          reviewedByUserId: actorId,
          reviewNote: dto.reviewNote.trim(),
          reviewedAt: new Date()
        }
      });
      await this.writeAudit(tx, {
        tenantId,
        actorId,
        entityType: "TenantSupportRequest",
        entityId: supportRequest.id,
        action: AuditAction.UPDATE,
        message: "Tenant support request rejected",
        before: { status: supportRequest.status },
        after: { status: updated.status },
        correlationId
      });
      return updated;
    });
  }

  async revokeSupportGrant(tenantId: string, grantId: string, actorId: string, correlationId?: string) {
    return this.prisma.$transaction(async (tx) => {
      const grant = await tx.tenantSupportGrant.findFirst({ where: { id: grantId, tenantId } });
      if (!grant) throw new NotFoundException("Tenant support grant was not found");
      if (grant.revokedAt) throw new BadRequestException("Tenant support grant is already revoked");
      const revokedAt = new Date();
      const updated = await tx.tenantSupportGrant.update({
        where: { id: grant.id },
        data: { revokedAt, revokedByUserId: actorId }
      });
      await tx.tenantSupportRequest.update({
        where: { id: grant.supportRequestId },
        data: { status: TenantSupportRequestStatus.CLOSED }
      });
      await this.writeAudit(tx, {
        tenantId,
        actorId,
        entityType: "TenantSupportGrant",
        entityId: grant.id,
        action: AuditAction.UPDATE,
        message: "Tenant support access revoked",
        before: { revokedAt: null, expiresAt: grant.expiresAt },
        after: { revokedAt },
        correlationId
      });
      return updated;
    });
  }

  private validateSupportScopes(scopes: string[]) {
    const normalized = [...new Set(scopes.map((scope) => scope.trim()).filter(Boolean))];
    const known = new Set<string>(Object.values(PERMISSIONS));
    const unknown = normalized.filter((scope) => !known.has(scope));
    if (unknown.length) throw new BadRequestException(`Unknown support scopes: ${unknown.join(", ")}`);
    const forbidden = normalized.filter((scope) => SUPPORT_FORBIDDEN_SCOPES.has(scope));
    if (forbidden.length) {
      throw new ForbiddenException(`Support grants cannot include privileged scopes: ${forbidden.join(", ")}`);
    }
    return normalized;
  }

  private async assertActiveMembership(
    tx: Prisma.TransactionClient,
    tenantId: string,
    membershipId: string,
    userId: string
  ) {
    const membership = await tx.membership.findFirst({
      where: { id: membershipId, tenantId, userId, status: MembershipStatus.ACTIVE },
      select: { id: true }
    });
    if (!membership) throw new ForbiddenException("Active tenant membership is required");
  }

  private writeAudit(
    db: Prisma.TransactionClient | PrismaService,
    input: {
      tenantId?: string;
      actorId?: string;
      action: AuditAction;
      entityType: string;
      entityId: string;
      message: string;
      before?: unknown;
      after?: unknown;
      correlationId?: string;
    }
  ) {
    return db.auditLog.create({
      data: {
        tenantId: input.tenantId,
        actorId: input.actorId,
        action: input.action,
        result: AuditResult.SUCCESS,
        entityType: input.entityType,
        entityId: input.entityId,
        message: input.message,
        before: input.before === undefined ? undefined : (input.before as Prisma.InputJsonValue),
        after: input.after === undefined ? undefined : (input.after as Prisma.InputJsonValue),
        correlationId: input.correlationId
      }
    });
  }
}
