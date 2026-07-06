import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { MembershipStatus, TenantStatus } from "@prisma/client";
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
    const candidateTenantId = req.header("x-tenant-id") ?? req.user?.tenantId;
    const tenantRequired = Boolean(requiredPermissions?.length || requiredModule);
    if (!candidateTenantId) {
      if (tenantRequired) throw new ForbiddenException("Tenant context is required");
      return true;
    }

    const membership = await this.prisma.membership.findFirst({
      where: {
        userId: req.user?.userId,
        tenantId: candidateTenantId,
        status: MembershipStatus.ACTIVE,
        tenant: { status: TenantStatus.ACTIVE }
      },
      select: { id: true, tenantId: true }
    });
    if (!membership) throw new ForbiddenException("Tenant membership is not active or accessible");

    req.tenantId = membership.tenantId;
    req.membershipId = membership.id;
    return true;
  }
}
