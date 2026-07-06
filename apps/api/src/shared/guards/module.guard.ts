import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { MODULE_KEY } from "../decorators/module.decorator";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";
import { AppRequest } from "../request-context";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class ModuleGuard implements CanActivate {
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

    const requiredModule = this.reflector.getAllAndOverride<string>(MODULE_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (!requiredModule) return true;

    const req = context.switchToHttp().getRequest<AppRequest>();
    const tenantId = req.tenantId;
    if (!tenantId) throw new ForbiddenException("Tenant context is required");

    const tenantModule = await this.prisma.tenantModule.findUnique({
      where: { tenantId_key: { tenantId, key: requiredModule } },
      select: { isEnabled: true }
    });
    if (!tenantModule?.isEnabled) throw new ForbiddenException("Module is disabled for this tenant");
    return true;
  }
}
