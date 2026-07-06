import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { MembershipStatus } from "@prisma/client";
import { randomBytes } from "node:crypto";
import { AuditAction, AuditResult } from "@operations-hub/shared";
import { PrismaService } from "../prisma/prisma.service";
import { AuthUser } from "../shared/request-context";
import { AuditService } from "../audit/audit.service";
import { PasswordService } from "./password.service";
import { LoginDto, RegisterDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly password: PasswordService,
    private readonly audit: AuditService
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });
    if (existing) throw new ConflictException("Email is already registered");
    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase(),
        fullName: dto.fullName,
        passwordHash: await this.password.hash(dto.password)
      },
      select: this.safeUserSelect()
    });
    return user;
  }

  async login(dto: LoginDto, meta: { ip?: string; userAgent?: string; correlationId?: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });
    if (!user || !user.isActive || !(await this.password.verify(dto.password, user.passwordHash))) {
      await this.audit.write({
        action: AuditAction.Login,
        result: AuditResult.Failure,
        message: "Failed login",
        correlationId: meta.correlationId,
        ipAddress: meta.ip
      });
      throw new UnauthorizedException("Invalid credentials");
    }
    const session = await this.createSession(user.id, meta);
    await this.audit.write({
      actorId: user.id,
      action: AuditAction.Login,
      result: AuditResult.Success,
      message: "User logged in",
      correlationId: meta.correlationId,
      ipAddress: meta.ip
    });
    return {
      user: this.toSafeUser(user),
      accessToken: await this.signAccessToken({ userId: user.id, email: user.email }),
      refreshToken: session.refreshToken,
      tenants: await this.listTenants(user.id)
    };
  }

  async refresh(refreshToken: string) {
    const sessions = await this.prisma.session.findMany({
      where: { revokedAt: null, expiresAt: { gt: new Date() } },
      include: { user: true }
    });
    for (const session of sessions) {
      if (await this.password.verify(refreshToken, session.refreshTokenHash)) {
        return {
          accessToken: await this.signAccessToken({ userId: session.user.id, email: session.user.email }),
          user: this.toSafeUser(session.user)
        };
      }
    }
    throw new UnauthorizedException("Invalid refresh token");
  }

  async logout(refreshToken?: string) {
    if (!refreshToken) return { revoked: 0 };
    const sessions = await this.prisma.session.findMany({ where: { revokedAt: null } });
    for (const session of sessions) {
      if (await this.password.verify(refreshToken, session.refreshTokenHash)) {
        await this.prisma.session.update({ where: { id: session.id }, data: { revokedAt: new Date() } });
        return { revoked: 1 };
      }
    }
    return { revoked: 0 };
  }

  async me(userId: string) {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId }, select: this.safeUserSelect() });
    return { user, tenants: await this.listTenants(userId) };
  }

  async selectTenant(user: AuthUser, tenantId: string, meta: { ip?: string; correlationId?: string }) {
    const membership = await this.prisma.membership.findFirst({
      where: { userId: user.userId, tenantId, status: MembershipStatus.ACTIVE, tenant: { status: "ACTIVE" } },
      include: { tenant: true }
    });
    if (!membership) throw new UnauthorizedException("Tenant is not available for this user");
    await this.audit.write({
      tenantId,
      actorId: user.userId,
      action: AuditAction.SelectTenant,
      result: AuditResult.Success,
      entityType: "Tenant",
      entityId: tenantId,
      correlationId: meta.correlationId,
      ipAddress: meta.ip
    });
    return {
      tenant: membership.tenant,
      membershipId: membership.id,
      accessToken: await this.signAccessToken({
        userId: user.userId,
        email: user.email,
        tenantId,
        membershipId: membership.id
      })
    };
  }

  async signAccessToken(payload: AuthUser) {
    return this.jwt.signAsync(payload, {
      secret: this.config.getOrThrow<string>("JWT_ACCESS_SECRET"),
      expiresIn: this.parseTtlSeconds(this.config.get<string>("ACCESS_TOKEN_TTL") ?? "15m")
    });
  }

  async createSession(userId: string, meta: { ip?: string; userAgent?: string }) {
    const refreshToken = randomBytes(48).toString("base64url");
    const days = Number(this.config.get("REFRESH_TOKEN_TTL_DAYS") ?? 30);
    await this.prisma.session.create({
      data: {
        userId,
        refreshTokenHash: await this.password.hash(refreshToken),
        userAgent: meta.userAgent,
        ipAddress: meta.ip,
        expiresAt: new Date(Date.now() + days * 24 * 60 * 60 * 1000)
      }
    });
    return { refreshToken };
  }

  async listTenants(userId: string) {
    const memberships = await this.prisma.membership.findMany({
      where: { userId, status: MembershipStatus.ACTIVE, tenant: { status: "ACTIVE" } },
      include: { tenant: true },
      orderBy: { tenant: { name: "asc" } }
    });
    return memberships.map((membership) => ({
      membershipId: membership.id,
      tenant: membership.tenant,
      status: membership.status
    }));
  }

  private safeUserSelect() {
    return {
      id: true,
      email: true,
      fullName: true,
      avatarUrl: true,
      isActive: true,
      isVerified: true,
      platformRole: true,
      createdAt: true,
      updatedAt: true
    };
  }

  private toSafeUser(user: { id: string; email: string; fullName: string; avatarUrl?: string | null; isActive: boolean; isVerified: boolean; platformRole?: string | null }) {
    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      avatarUrl: user.avatarUrl,
      isActive: user.isActive,
      isVerified: user.isVerified,
      platformRole: user.platformRole
    };
  }

  private parseTtlSeconds(value: string) {
    const match = value.match(/^(\d+)([smhd])?$/);
    if (!match) return 900;
    const amount = Number(match[1]);
    const unit = match[2] ?? "s";
    const multipliers: Record<string, number> = { s: 1, m: 60, h: 3600, d: 86400 };
    return amount * multipliers[unit];
  }
}
