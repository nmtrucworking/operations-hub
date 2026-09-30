import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { MembershipStatus } from "@prisma/client";
import { AuditAction, ModuleKey } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PasswordService } from "../auth/password.service";
import { PrismaService } from "../prisma/prisma.service";
import {
  AssignMembershipPositionDto,
  AssignMembershipUnitDto,
  CreateMemberDto,
  UpdateMemberDto
} from "./dto";

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
          profile: true,
          roles: { include: { role: true } },
          membershipUnits: {
            where: { effectiveTo: null },
            include: { unit: true },
            orderBy: [{ isPrimary: "desc" }, { effectiveFrom: "asc" }]
          },
          membershipPositions: {
            where: { effectiveTo: null },
            include: { position: { include: { unit: true } } },
            orderBy: { effectiveFrom: "asc" }
          }
        },
        orderBy: { createdAt: "desc" },
        skip,
        take
      }),
      this.prisma.membership.count({ where })
    ]);
    return { data: items, meta: { page, limit: take, total } };
  }

  get(tenantId: string, id: string) {
    return this.findMembershipDetail(tenantId, id);
  }

  async create(tenantId: string, actorId: string, dto: CreateMemberDto, correlationId?: string) {
    const existingMembership = await this.prisma.membership.findFirst({
      where: { tenantId, user: { email: dto.email.toLowerCase() } }
    });
    if (existingMembership) throw new ConflictException("Membership already exists for this tenant");

    const position = dto.positionId ? await this.assertPosition(tenantId, dto.positionId) : null;
    const effectiveUnitId = dto.unitId ?? position?.unitId ?? undefined;
    if (effectiveUnitId) await this.assertOrganizationUnit(tenantId, effectiveUnitId);
    if (position?.unitId && effectiveUnitId !== position.unitId) {
      throw new BadRequestException("The selected position belongs to a different organization unit");
    }

    const passwordHash = await this.passwords.hash("Password123!");
    const user = await this.prisma.user.upsert({
      where: { email: dto.email.toLowerCase() },
      create: {
        email: dto.email.toLowerCase(),
        fullName: dto.fullName.trim(),
        passwordHash
      },
      update: {}
    });
    const membership = await this.prisma.membership.create({
      data: {
        tenantId,
        userId: user.id,
        status: "ACTIVE",
        title: dto.title?.trim() || undefined,
        joinedAt: new Date(),
        profile: {
          create: {
            tenantId,
            studentCode: dto.studentCode?.trim() || undefined,
            phone: dto.phone?.trim() || undefined,
            bio: dto.bio?.trim() || undefined
          }
        },
        membershipUnits: effectiveUnitId
          ? { create: { unitId: effectiveUnitId, isPrimary: true } }
          : undefined,
        membershipPositions: position
          ? { create: { positionId: position.id } }
          : undefined
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
    return this.findMembershipDetail(tenantId, membership.id);
  }

  async update(tenantId: string, actorId: string, id: string, dto: UpdateMemberDto, correlationId?: string) {
    const before = await this.prisma.membership.findFirst({
      where: { id, tenantId },
      include: { profile: true, user: true }
    });
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

    const now = new Date();
    const updated = await this.prisma.$transaction(async (tx) => {
      const membership = await tx.membership.update({
        where: { id },
        data: {
          title: dto.title === undefined ? undefined : dto.title.trim() || null,
          status: dto.status,
          endedAt: dto.status === MembershipStatus.ENDED ? now : dto.status === MembershipStatus.ACTIVE ? null : undefined,
          profile: {
            upsert: {
              create: {
                tenantId,
                phone: dto.phone?.trim() || undefined,
                bio: dto.bio?.trim() || undefined,
                studentCode: dto.studentCode?.trim() || undefined
              },
              update: {
                phone: dto.phone === undefined ? undefined : dto.phone.trim() || null,
                bio: dto.bio === undefined ? undefined : dto.bio.trim() || null,
                studentCode: dto.studentCode === undefined ? undefined : dto.studentCode.trim() || null
              }
            }
          }
        }
      });
      if (removesActiveMembership) {
        await tx.membershipUnit.updateMany({
          where: { membershipId: id, effectiveTo: null },
          data: { effectiveTo: now, isPrimary: false }
        });
        await tx.membershipPosition.updateMany({
          where: { membershipId: id, effectiveTo: null },
          data: { effectiveTo: now }
        });
      }
      if (activeOwnership) {
        await tx.ownershipAssignment.update({ where: { id: activeOwnership.id }, data: { effectiveTo: now } });
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
    return this.findMembershipDetail(tenantId, id);
  }

  async assignUnit(
    tenantId: string,
    actorId: string,
    membershipId: string,
    dto: AssignMembershipUnitDto,
    correlationId?: string
  ) {
    await this.assertMembership(tenantId, membershipId);
    await this.assertOrganizationUnit(tenantId, dto.unitId);
    const existing = await this.prisma.membershipUnit.findFirst({
      where: { membershipId, unitId: dto.unitId, effectiveTo: null },
      orderBy: { effectiveFrom: "desc" }
    });
    const isPrimary = dto.isPrimary ?? true;
    const effectiveFrom = dto.effectiveFrom ? new Date(dto.effectiveFrom) : new Date();

    if (existing) {
      if (!isPrimary || existing.isPrimary) throw new ConflictException("Member already has an active assignment to this unit");
      const before = existing;
      const previousPrimaryUnits = await this.prisma.membershipUnit.findMany({
        where: { membershipId, isPrimary: true, effectiveTo: null, unitId: { not: dto.unitId } },
        select: { unitId: true }
      });
      const previousPositionIds = previousPrimaryUnits.length
        ? (
            await this.prisma.position.findMany({
              where: { tenantId, unitId: { in: previousPrimaryUnits.map((item) => item.unitId) } },
              select: { id: true }
            })
          ).map((item) => item.id)
        : [];
      await this.prisma.$transaction(async (tx) => {
        await tx.membershipUnit.updateMany({
          where: { membershipId, isPrimary: true, effectiveTo: null, unitId: { not: dto.unitId } },
          data: { isPrimary: false, effectiveTo: effectiveFrom }
        });
        if (previousPositionIds.length > 0) {
          await tx.membershipPosition.updateMany({
            where: { membershipId, positionId: { in: previousPositionIds }, effectiveTo: null },
            data: { effectiveTo: effectiveFrom }
          });
        }
        await tx.membershipUnit.updateMany({
          where: { membershipId, unitId: dto.unitId, effectiveTo: null },
          data: { isPrimary: true }
        });
      });
      const after = await this.prisma.membershipUnit.findFirst({
        where: { membershipId, unitId: dto.unitId, effectiveTo: null },
        orderBy: { effectiveFrom: "desc" }
      });
      await this.audit.write({
        tenantId,
        actorId,
        action: AuditAction.Update,
        entityType: "MembershipUnit",
        entityId: membershipId,
        before,
        after,
        correlationId
      });
      return after;
    }

    const previousPrimaryUnits = isPrimary
      ? await this.prisma.membershipUnit.findMany({
          where: { membershipId, isPrimary: true, effectiveTo: null },
          select: { unitId: true }
        })
      : [];
    const previousPositionIds = previousPrimaryUnits.length
      ? (
          await this.prisma.position.findMany({
            where: { tenantId, unitId: { in: previousPrimaryUnits.map((item) => item.unitId) } },
            select: { id: true }
          })
        ).map((item) => item.id)
      : [];

    const assignment = await this.prisma.$transaction(async (tx) => {
      if (isPrimary) {
        await tx.membershipUnit.updateMany({
          where: { membershipId, isPrimary: true, effectiveTo: null },
          data: { isPrimary: false, effectiveTo: effectiveFrom }
        });
        if (previousPositionIds.length > 0) {
          await tx.membershipPosition.updateMany({
            where: { membershipId, positionId: { in: previousPositionIds }, effectiveTo: null },
            data: { effectiveTo: effectiveFrom }
          });
        }
      }
      return tx.membershipUnit.create({
        data: { membershipId, unitId: dto.unitId, isPrimary, effectiveFrom },
        include: { unit: true }
      });
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: "MembershipUnit",
      entityId: membershipId,
      after: assignment,
      correlationId
    });
    return assignment;
  }

  async endUnit(
    tenantId: string,
    actorId: string,
    membershipId: string,
    unitId: string,
    correlationId?: string
  ) {
    await this.assertMembership(tenantId, membershipId);
    await this.assertOrganizationUnit(tenantId, unitId, false);
    const before = await this.prisma.membershipUnit.findMany({
      where: { membershipId, unitId, effectiveTo: null }
    });
    if (before.length === 0) throw new NotFoundException("Active unit assignment not found");
    const positionIds = (
      await this.prisma.position.findMany({ where: { tenantId, unitId }, select: { id: true } })
    ).map((position) => position.id);
    const now = new Date();
    await this.prisma.$transaction(async (tx) => {
      await tx.membershipUnit.updateMany({
        where: { membershipId, unitId, effectiveTo: null },
        data: { effectiveTo: now, isPrimary: false }
      });
      if (positionIds.length > 0) {
        await tx.membershipPosition.updateMany({
          where: { membershipId, positionId: { in: positionIds }, effectiveTo: null },
          data: { effectiveTo: now }
        });
      }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: "MembershipUnit",
      entityId: membershipId,
      before,
      after: { effectiveTo: now, unitId },
      correlationId
    });
    return this.findMembershipDetail(tenantId, membershipId);
  }

  async assignPosition(
    tenantId: string,
    actorId: string,
    membershipId: string,
    dto: AssignMembershipPositionDto,
    correlationId?: string
  ) {
    await this.assertMembership(tenantId, membershipId);
    const position = await this.assertPosition(tenantId, dto.positionId);
    if (position.unitId) {
      const activeUnit = await this.prisma.membershipUnit.findFirst({
        where: { membershipId, unitId: position.unitId, effectiveTo: null }
      });
      if (!activeUnit) {
        throw new BadRequestException("Member must have an active assignment to the position's organization unit");
      }
    }
    const existing = await this.prisma.membershipPosition.findFirst({
      where: { membershipId, positionId: dto.positionId, effectiveTo: null }
    });
    if (existing) throw new ConflictException("Member already holds this position");
    const assignment = await this.prisma.membershipPosition.create({
      data: {
        membershipId,
        positionId: dto.positionId,
        effectiveFrom: dto.effectiveFrom ? new Date(dto.effectiveFrom) : new Date()
      },
      include: { position: { include: { unit: true } } }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: "MembershipPosition",
      entityId: membershipId,
      after: assignment,
      correlationId
    });
    return assignment;
  }

  async endPosition(
    tenantId: string,
    actorId: string,
    membershipId: string,
    positionId: string,
    correlationId?: string
  ) {
    await this.assertMembership(tenantId, membershipId);
    await this.assertPosition(tenantId, positionId, false);
    const before = await this.prisma.membershipPosition.findMany({
      where: { membershipId, positionId, effectiveTo: null }
    });
    if (before.length === 0) throw new NotFoundException("Active position assignment not found");
    const now = new Date();
    await this.prisma.membershipPosition.updateMany({
      where: { membershipId, positionId, effectiveTo: null },
      data: { effectiveTo: now }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: "MembershipPosition",
      entityId: membershipId,
      before,
      after: { effectiveTo: now, positionId },
      correlationId
    });
    return this.findMembershipDetail(tenantId, membershipId);
  }

  private async findMembershipDetail(tenantId: string, id: string) {
    const membership = await this.prisma.membership.findFirst({
      where: { id, tenantId },
      include: {
        user: { select: { id: true, email: true, fullName: true, isActive: true } },
        profile: true,
        roles: { include: { role: { include: { permissions: { include: { permission: true } } } } } },
        membershipUnits: {
          include: { unit: true },
          orderBy: { effectiveFrom: "desc" }
        },
        membershipPositions: {
          include: { position: { include: { unit: true } } },
          orderBy: { effectiveFrom: "desc" }
        }
      }
    });
    if (!membership) throw new NotFoundException("Membership not found");
    return membership;
  }

  private async assertMembership(tenantId: string, id: string) {
    const membership = await this.prisma.membership.findFirst({ where: { id, tenantId } });
    if (!membership) throw new NotFoundException("Membership not found");
    if (membership.status !== MembershipStatus.ACTIVE) {
      throw new BadRequestException("Only active memberships can receive organization assignments");
    }
    return membership;
  }

  private async assertOrganizationUnit(tenantId: string, id: string, requireActive = true) {
    const unit = await this.prisma.organizationUnit.findFirst({
      where: { id, tenantId, ...(requireActive ? { status: "ACTIVE" } : {}) }
    });
    if (!unit) throw new BadRequestException("Organization unit does not belong to the current tenant or is inactive");
    return unit;
  }

  private async assertPosition(tenantId: string, id: string, requireActive = true) {
    const position = await this.prisma.position.findFirst({
      where: { id, tenantId, ...(requireActive ? { status: "ACTIVE" } : {}) }
    });
    if (!position) throw new BadRequestException("Position does not belong to the current tenant or is inactive");
    return position;
  }
}
