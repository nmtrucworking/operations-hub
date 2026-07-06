import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { PERMISSIONS_KEY } from "../decorators/permissions.decorator";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";
import { AppRequest } from "../request-context";
import { RbacService } from "../../rbac/rbac.service";

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly rbac: RbacService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (isPublic) return true;

    const permissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (!permissions?.length) return true;

    const req = context.switchToHttp().getRequest<AppRequest>();
    if (!req.membershipId || !req.tenantId) throw new ForbiddenException("Tenant context is required");
    const allowed = await this.rbac.hasAllPermissions(req.membershipId, permissions);
    if (!allowed) throw new ForbiddenException("Permission denied");
    return true;
  }
}
