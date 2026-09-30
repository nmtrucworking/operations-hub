import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AccountStatus } from "@prisma/client";
import { PlatformRole } from "@operations-hub/shared";
import { PrismaService } from "../../prisma/prisma.service";
import { PLATFORM_ROLES_KEY } from "../decorators/platform-roles.decorator";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";
import { AppRequest } from "../request-context";

@Injectable()
export class PlatformRoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [context.getHandler(), context.getClass()]);
    if (isPublic) return true;

    const roles = this.reflector.getAllAndOverride<PlatformRole[]>(PLATFORM_ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (!roles?.length) return true;

    const req = context.switchToHttp().getRequest<AppRequest>();
    const userId = req.user?.userId;
    if (!userId) throw new ForbiddenException("Platform role is required");

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { isActive: true, accountStatus: true, platformRole: true }
    });
    if (!user?.isActive || user.accountStatus !== AccountStatus.ACTIVE || !user.platformRole) {
      throw new ForbiddenException("Platform role is required");
    }
    if (!roles.includes(user.platformRole as PlatformRole)) {
      throw new ForbiddenException("Platform permission denied");
    }
    return true;
  }
}
