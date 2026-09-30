import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { MembershipStatus } from "@prisma/client";
import { AuditAction, ModuleKey } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PasswordService } from "../auth/password.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateMemberDto, UpdateMemberDto } from "./dto";

@Injectable()
export class MembersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwords: PasswordService,
    private readonly audit: AuditService
  ) {}

  async list(tenantId: string, page = 1, limit = 20) {
    const take = Math.min(limit, 100);
    const skip = Math.max(page - 1, 0) * take;
    const where = { tenantId };
    const [items, total] = await Promise.all([
      this.prisma.membership.findMany({
        where,
        include: {
          user: { select: { id: true, email: true, fullName: true, isActive: true } },
          profile: { include: { unit: true } },
          roles: { include: { role: true } }
        },
        orderBy: { createdAt: "desc" },
        skip,
        take
      }),
      this.prisma.membership.count({ where })
    ]);
    return { data: items, meta: { page, limit: take, total } };
  }

  async create(tenantId: string, actorId: string, dto: CreateMemberDto, correlationId?: string) {
    const existingMembership = await this.prisma.membership.findFirst({
      where: { tenantId, user: { email: dto.email.toLowerCase() } }
    });
    if (existingMembership) throw new ConflictException("Membership already exists for this tenant");

    const user = await this.prisma.user.upsert({
      where: { email: dto.email.toLowerCase() },
      create: {
        email: dto.email.toLowerCase(),
        fullName: dto.fullName,
        passwordHash: await this.passwords.hash("Password123!")
      },
      update: { fullName: dto.fullName }
    });
    const membership = await this.prisma.membership.create({
      data: {
        tenantId,
        userId: user.id,
        status: "ACTIVE",
        title: dto.title,
        joinedAt: new Date(),
        profile: { create: { tenantId, unitId: dto.unitId } }
      },
      include: { user: true, profile: true }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: ModuleKey.Members,
      entityId: membership.id,
      after: membership,
      correlationId
    });
    return membership;
  }

  async update(tenantId: string, actorId: string, id: string, dto: UpdateMemberDto, correlationId?: string) {
    const before = await this.prisma.membership.findFirst({ where: { id, tenantId }, include: { profile: true } });
    if (!before) throw new NotFoundException("Membership not found");
    const removesActiveMembership = dto.status !== undefined && dto.status !== MembershipStatus.ACTIVE;
    const activeOwnership = removesActiveMembership
      ? await this.prisma.ownershipAssignment.findFirst({ where: { tenantId, membershipId: id, effectiveTo: null } })
      : null;
    if (activeOwnership) {
      const activeOwnerCount = await this.prisma.ownershipAssignment.count({
        where: { tenantId, effectiveTo: null, membership: { status: MembershipStatus.ACTIVE } }
      });
      if (activeOwnerCount <= 1) {
        throw new BadRequestException("The last active owner cannot be suspended or ended");
      }
    }

    const updated = await this.prisma.$transaction(async (tx) => {
      const membership = await tx.membership.update({
        where: { id },
        data: {
          title: dto.title,
          status: dto.status,
          profile: {
            upsert: {
              create: { tenantId, phone: dto.phone, bio: dto.bio },
              update: { phone: dto.phone, bio: dto.bio }
            }
          }
        },
        include: { user: true, profile: true }
      });
      if (activeOwnership) {
        await tx.ownershipAssignment.update({ where: { id: activeOwnership.id }, data: { effectiveTo: new Date() } });
        const ownerRole = await tx.role.findFirst({ where: { tenantId, OR: [{ code: "OWNER" }, { name: "Owner" }] } });
        if (ownerRole) {
          await tx.membershipRole.deleteMany({ where: { membershipId: id, roleId: ownerRole.id } });
        }
      }
      return membership;
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: ModuleKey.Members,
      entityId: id,
      before,
      after: updated,
      correlationId
    });
    return updated;
  }
}
