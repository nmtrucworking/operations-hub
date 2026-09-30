import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { MembershipStatus } from "@prisma/client";
import { createHash, randomBytes } from "node:crypto";
import { AuditAction, ModuleKey } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PasswordService } from "../auth/password.service";
import { PrismaService } from "../prisma/prisma.service";
import {
  AcceptMemberInvitationDto,
  AssignMembershipPositionDto,
  AssignMembershipUnitDto,
  CreateMemberDto,
  CreateMemberInvitationDto,
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

  async listInvitations(tenantId: string) {
    const invitations = await this.prisma.membershipInvitation.findMany({
      where: { tenantId },
      select: {
        id: true,
        email: true,
        fullName: true,
        title: true,
        studentCode: true,
        phone: true,
        targetUnitId: true,
        targetPositionId: true,
        status: true,
        expiresAt: true,
        acceptedAt: true,
        declinedAt: true,
        revokedAt: true,
        createdAt: true
      },
      orderBy: { createdAt: "desc" }
    });
    return invitations.map((invitation) => ({ ...invitation, state: this.invitationState(invitation) }));
  }

  async create(
    tenantId: string,
    actorId: string,
    actorMembershipId: string | undefined,
    dto: CreateMemberDto,
    correlationId?: string
  ) {
    return this.createInvitation(tenantId, actorId, actorMembershipId, dto, correlationId);
  }

  async createInvitation(
    tenantId: string,
    actorId: string,
    actorMembershipId: string | undefined,
    dto: CreateMemberInvitationDto,
    correlationId?: string
  ) {
    if (!actorMembershipId) throw new ForbiddenException("A tenant membership is required to invite members");
    const email = dto.email.trim().toLowerCase();
    const existingMembership = await this.prisma.membership.findFirst({
      where: { tenantId, user: { email } }
    });
    if (existingMembership) throw new ConflictException("Membership already exists for this tenant");

    const now = new Date();
    const existingInvitation = await this.prisma.membershipInvitation.findFirst({
      where: {
        tenantId,
        email,
        status: "PENDING",
        acceptedAt: null,
        declinedAt: null,
        revokedAt: null,
        expiresAt: { gt: now }
      }
    });
    if (existingInvitation) throw new ConflictException("A pending invitation already exists for this email");

    const position = dto.positionId ? await this.assertPosition(tenantId, dto.positionId) : null;
    const effectiveUnitId = dto.unitId ?? position?.unitId ?? undefined;
    if (effectiveUnitId) await this.assertOrganizationUnit(tenantId, effectiveUnitId);
    if (position?.unitId && effectiveUnitId !== position.unitId) {
      throw new BadRequestException("The selected position belongs to a different organization unit");
    }

    const token = randomBytes(32).toString("base64url");
    const tokenHash = this.hashInvitationToken(token);
    const expiresAt = new Date(now.getTime() + (dto.expiresInDays ?? 7) * 24 * 60 * 60 * 1000);
    const invitation = await this.prisma.membershipInvitation.create({
      data: {
        tenantId,
        email,
        fullName: dto.fullName.trim(),
        title: dto.title?.trim() || undefined,
        studentCode: dto.studentCode?.trim() || undefined,
        phone: dto.phone?.trim() || undefined,
        targetUnitId: effectiveUnitId,
        targetPositionId: position?.id,
        tokenHash,
        invitedByMembershipId: actorMembershipId,
        expiresAt
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        title: true,
        studentCode: true,
        phone: true,
        targetUnitId: true,
        targetPositionId: true,
        status: true,
        expiresAt: true,
        createdAt: true
      }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: "MembershipInvitation",
      entityId: invitation.id,
      after: invitation,
      correlationId
    });
    return { ...invitation, token };
  }

  async getInvitation(token: string) {
    const invitation = await this.findInvitationByToken(token);
    const state = this.invitationState(invitation);
    const [unit, position] = await Promise.all([
      invitation.targetUnitId
        ? this.prisma.organizationUnit.findFirst({ where: { id: invitation.targetUnitId, tenantId: invitation.tenantId }, select: { id: true, name: true, code: true } })
        : null,
      invitation.targetPositionId
        ? this.prisma.position.findFirst({ where: { id: invitation.targetPositionId, tenantId: invitation.tenantId }, select: { id: true, name: true, code: true } })
        : null
    ]);
    return {
      state,
      email: invitation.email,
      fullName: invitation.fullName,
      title: invitation.title,
      expiresAt: invitation.expiresAt,
      tenant: invitation.tenant,
      unit,
      position
    };
  }

  async acceptInvitation(token: string, dto: AcceptMemberInvitationDto, correlationId?: string) {
    const invitation = await this.findInvitationByToken(token);
    const state = this.invitationState(invitation);
    if (state !== "PENDING") throw new BadRequestException(`Invitation is ${state.toLowerCase()}`);

    const existingMembership = await this.prisma.membership.findFirst({
      where: { tenantId: invitation.tenantId, user: { email: invitation.email } }
    });
    if (existingMembership) throw new ConflictException("Membership already exists for this tenant");

    const position = invitation.targetPositionId
      ? await this.assertPosition(invitation.tenantId, invitation.targetPositionId)
      : null;
    const effectiveUnitId = invitation.targetUnitId ?? position?.unitId ?? undefined;
    if (effectiveUnitId) await this.assertOrganizationUnit(invitation.tenantId, effectiveUnitId);
    if (position?.unitId && effectiveUnitId !== position.unitId) {
      throw new BadRequestException("Invitation organization assignment is no longer valid");
    }

    let user = await this.prisma.user.findUnique({ where: { email: invitation.email } });
    if (user) {
      if (!user.isActive || !(await this.passwords.verify(dto.password, user.passwordHash))) {
        throw new UnauthorizedException("Use the existing account password to accept this invitation");
      }
    } else {
      user = await this.prisma.user.create({
        data: {
          email: invitation.email,
          fullName: invitation.fullName,
          passwordHash: await this.passwords.hash(dto.password)
        }
      });
    }

    const acceptedAt = new Date();
    const membership = await this.prisma.$transaction(async (tx) => {
      const created = await tx.membership.create({
        data: {
          tenantId: invitation.tenantId,
          userId: user!.id,
          status: MembershipStatus.ACTIVE,
          title: invitation.title,
          joinedAt: acceptedAt,
          profile: {
            create: {
              tenantId: invitation.tenantId,
              studentCode: invitation.studentCode,
              phone: invitation.phone
            }
          },
          membershipUnits: effectiveUnitId ? { create: { unitId: effectiveUnitId, isPrimary: true, effectiveFrom: acceptedAt } } : undefined,
          membershipPositions: position ? { create: { positionId: position.id, effectiveFrom: acceptedAt } } : undefined,
          statusHistory: { create: { fromStatus: null, toStatus: MembershipStatus.ACTIVE, changedAt: acceptedAt, reason: "Invitation accepted" } }
        }
      });
      await tx.membershipInvitation.update({
        where: { id: invitation.id },
        data: { status: "ACCEPTED", acceptedAt }
      });
      return created;
    });
    await this.audit.write({
      tenantId: invitation.tenantId,
      actorId: user.id,
      action: AuditAction.Create,
      entityType: ModuleKey.Members,
      entityId: membership.id,
      after: { invitationId: invitation.id, acceptedAt },
      correlationId
    });
    return {
      membershipId: membership.id,
      tenant: invitation.tenant,
      user: { id: user.id, email: user.email, fullName: user.fullName }
    };
  }

  async declineInvitation(token: string, correlationId?: string) {
    const invitation = await this.findInvitationByToken(token);
    const state = this.invitationState(invitation);
    if (state !== "PENDING") throw new BadRequestException(`Invitation is ${state.toLowerCase()}`);
    const declinedAt = new Date();
    await this.prisma.membershipInvitation.update({
      where: { id: invitation.id },
      data: { status: "DECLINED", declinedAt }
    });
    await this.audit.write({
      tenantId: invitation.tenantId,
      action: AuditAction.Update,
      entityType: "MembershipInvitation",
      entityId: invitation.id,
      after: { status: "DECLINED", declinedAt },
      correlationId
    });
    return { status: "DECLINED" };
  }

  async revokeInvitation(tenantId: string, actorId: string, id: string, correlationId?: string) {
    const invitation = await this.prisma.membershipInvitation.findFirst({ where: { id, tenantId } });
    if (!invitation) throw new NotFoundException("Invitation not found");
    if (this.invitationState(invitation) !== "PENDING") throw new BadRequestException("Only pending invitations can be revoked");
    const revokedAt = new Date();
    const updated = await this.prisma.membershipInvitation.update({
      where: { id },
      data: { status: "REVOKED", revokedAt }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: "MembershipInvitation",
      entityId: id,
      before: invitation,
      after: updated,
      correlationId
    });
    return { id, status: "REVOKED", revokedAt };
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
    const actorMembership = dto.status !== undefined && dto.status !== before.status
      ? await this.prisma.membership.findFirst({ where: { tenantId, userId: actorId }, select: { id: true } })
      : null;
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
      if (dto.status !== undefined && dto.status !== before.status) {
        await tx.membershipStatusHistory.create({
          data: {
            membershipId: id,
            fromStatus: before.status,
            toStatus: dto.status,
            changedAt: now,
            changedByMembershipId: actorMembership?.id,
            reason: "Administrative status update"
          }
        });
      }
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
        },
        statusHistory: {
          include: { changedByMembership: { include: { user: { select: { fullName: true } } } } },
          orderBy: { changedAt: "desc" }
        }
      }
    });
    if (!membership) throw new NotFoundException("Membership not found");
    return membership;
  }

  private hashInvitationToken(token: string) {
    return createHash("sha256").update(token).digest("hex");
  }

  private async findInvitationByToken(token: string) {
    const tokenHash = this.hashInvitationToken(token);
    const invitation = await this.prisma.membershipInvitation.findUnique({
      where: { tokenHash },
      include: { tenant: { select: { id: true, name: true, slug: true, brandColor: true } } }
    });
    if (!invitation) throw new NotFoundException("Invitation not found");
    return invitation;
  }

  private invitationState(invitation: { status: string; expiresAt: Date; acceptedAt: Date | null; declinedAt: Date | null; revokedAt: Date | null }) {
    if (invitation.acceptedAt || invitation.status === "ACCEPTED") return "ACCEPTED";
    if (invitation.declinedAt || invitation.status === "DECLINED") return "DECLINED";
    if (invitation.revokedAt || invitation.status === "REVOKED") return "REVOKED";
    if (invitation.expiresAt.getTime() <= Date.now()) return "EXPIRED";
    return "PENDING";
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
