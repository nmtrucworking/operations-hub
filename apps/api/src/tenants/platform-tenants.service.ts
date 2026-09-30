import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { AccountStatus, AuditAction, AuditResult, MembershipStatus, TenantStatus } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PlatformTenantsService {
  constructor(private readonly prisma: PrismaService) {}

  async transition(
    tenantId: string,
    actorId: string,
    toStatus: TenantStatus,
    reason: string,
    meta: { correlationId?: string; ipAddress?: string }
  ) {
    const normalizedReason = reason.trim();
    if (!normalizedReason) throw new BadRequestException("Transition reason is required");

    return this.prisma.$transaction(async (tx) => {
      const tenant = await tx.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) throw new NotFoundException("Tenant was not found");
      this.assertTransition(tenant.status, toStatus);

      if (toStatus === TenantStatus.ACTIVE) {
        const ownerCount = await tx.ownershipAssignment.count({
          where: {
            tenantId,
            effectiveTo: null,
            membership: {
              status: MembershipStatus.ACTIVE,
              user: { isActive: true, accountStatus: AccountStatus.ACTIVE }
            }
          }
        });
        if (ownerCount < 1) throw new BadRequestException("Tenant cannot be activated without an active owner");
      }

      const updated = await tx.tenant.update({ where: { id: tenantId }, data: { status: toStatus } });
      const event = await tx.tenantLifecycleEvent.create({
        data: {
          tenantId,
          fromStatus: tenant.status,
          toStatus,
          reason: normalizedReason,
          actorId
        }
      });
      await tx.auditLog.create({
        data: {
          tenantId,
          actorId,
          action: AuditAction.UPDATE,
          result: AuditResult.SUCCESS,
          entityType: "Tenant",
          entityId: tenantId,
          message: "Tenant lifecycle status changed",
          before: { status: tenant.status },
          after: { status: toStatus, reason: normalizedReason, lifecycleEventId: event.id },
          correlationId: meta.correlationId,
          ipAddress: meta.ipAddress
        }
      });
      return { tenant: updated, event };
    });
  }

  lifecycle(tenantId: string) {
    return this.prisma.tenantLifecycleEvent.findMany({
      where: { tenantId },
      include: { actor: { select: { id: true, email: true, fullName: true } } },
      orderBy: { occurredAt: "desc" },
      take: 100
    });
  }

  private assertTransition(from: TenantStatus, to: TenantStatus) {
    if (from === to) throw new BadRequestException("Tenant is already in the requested state");
    const allowed: Record<TenantStatus, TenantStatus[]> = {
      [TenantStatus.ACTIVE]: [TenantStatus.SUSPENDED, TenantStatus.ARCHIVED],
      [TenantStatus.SUSPENDED]: [TenantStatus.ACTIVE, TenantStatus.ARCHIVED],
      [TenantStatus.ARCHIVED]: [TenantStatus.ACTIVE]
    };
    if (!allowed[from].includes(to)) {
      throw new BadRequestException(`Transition ${from} -> ${to} is not allowed`);
    }
  }
}
