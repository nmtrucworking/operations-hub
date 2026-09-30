import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { MembershipStatus, TenantStatus, TenantSupportRequestStatus } from "@prisma/client";
import { MODULE_KEY } from "../decorators/module.decorator";
import { PERMISSIONS_KEY } from "../decorators/permissions.decorator";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";
import { AppRequest } from "../request-context";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (isPublic) return true;

    const req = context.switchToHttp().getRequest<AppRequest>();
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    const requiredModule = this.reflector.getAllAndOverride<string>(MODULE_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    const tenantRequired = Boolean(requiredPermissions?.length || requiredModule);

    // Global authenticated routes (for example /auth/select-tenant, /tenants,
    // /tenant-registrations) must remain usable even when the access token was
    // previously scoped to a tenant that has since been suspended/archived.
    // A stale tenant context must not trap a platform user inside that tenant.
    if (!tenantRequired) return true;

    const headerTenantId = req.header("x-tenant-id");
    if (req.user?.tenantId && headerTenantId && headerTenantId !== req.user.tenantId) {
      throw new ForbiddenException("Tenant header does not match the scoped access token");
    }

    const candidateTenantId = req.user?.tenantId ?? headerTenantId;
    if (!candidateTenantId) throw new ForbiddenException("Tenant context is required");

    const membership = await this.prisma.membership.findFirst({
      where: {
        userId: req.user?.userId,
        tenantId: candidateTenantId,
        status: MembershipStatus.ACTIVE,
        tenant: { status: TenantStatus.ACTIVE }
      },
      select: { id: true, tenantId: true }
    });
    if (!membership) {
      const now = new Date();
      const supportGrant = await this.prisma.tenantSupportGrant.findFirst({
        where: {
          tenantId: candidateTenantId,
          platformUserId: req.user?.userId,
          revokedAt: null,
          startsAt: { lte: now },
          expiresAt: { gt: now },
          request: { status: TenantSupportRequestStatus.APPROVED },
          tenant: { status: { in: [TenantStatus.ACTIVE, TenantStatus.SUSPENDED] } }
        },
        select: { id: true, tenantId: true, scopes: true },
        orderBy: { expiresAt: "desc" }
      });
      if (!supportGrant) throw new ForbiddenException("Tenant membership or active support grant is required");

      req.tenantId = supportGrant.tenantId;
      req.membershipId = undefined;
      req.supportGrantId = supportGrant.id;
      req.supportScopes = supportGrant.scopes;
      return true;
    }

    req.tenantId = membership.tenantId;
    req.membershipId = membership.id;
    req.supportGrantId = undefined;
    req.supportScopes = undefined;
    return true;
  }
}
