import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";
import { AppRequest, AuthUser } from "../request-context";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwt: JwtService,
    private readonly config: ConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (isPublic) return true;

    const req = context.switchToHttp().getRequest<AppRequest>();
    const authHeader = req.header("authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : undefined;
    if (!token) throw new UnauthorizedException("Missing access token");

    try {
      const payload = await this.jwt.verifyAsync<AuthUser>(token, {
        secret: this.config.getOrThrow<string>("JWT_ACCESS_SECRET")
      });
      req.user = payload;
      if (payload.tenantId) req.tenantId = payload.tenantId;
      if (payload.membershipId) req.membershipId = payload.membershipId;
      return true;
    } catch {
      throw new UnauthorizedException("Invalid or expired access token");
    }
  }
}
