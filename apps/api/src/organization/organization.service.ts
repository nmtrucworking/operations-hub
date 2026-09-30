import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { AuditAction } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateOrganizationUnitDto } from "./dto/create-unit.dto";
import { CreatePositionDto, UpdatePositionDto } from "./dto/position.dto";
import { UpdateOrganizationProfileDto } from "./dto/profile.dto";
import { ReorderOrganizationUnitDto } from "./dto/reorder-unit.dto";
import { UpdateOrganizationUnitDto } from "./dto/update-unit.dto";

@Injectable()
export class OrganizationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  async getProfile(tenantId: string) {
    const existing = await this.prisma.organizationProfile.findUnique({ where: { tenantId } });
    if (existing) return existing;
    const tenant = await this.prisma.tenant.findUnique({ where: { id: tenantId }, select: { name: true } });
    if (!tenant) throw new NotFoundException("Tenant not found");
    return {
      id: null,
      tenantId,
      displayName: tenant.name,
      shortName: null,
      code: null,
      organizationType: null,
      description: null,
      logoUrl: null,
      establishedAt: null,
      contactEmail: null,
      websiteUrl: null,
      socialLinks: null,
      parentOrganization: null,
      address: null,
      status: "ACTIVE",
      metadata: null,
      createdAt: null,
      updatedAt: null
    };
  }

  async updateProfile(
    tenantId: string,
    actorId: string,
    dto: UpdateOrganizationProfileDto,
    correlationId?: string
  ) {
    const before = await this.prisma.organizationProfile.findUnique({ where: { tenantId } });
    const tenant = before
      ? null
      : await this.prisma.tenant.findUnique({ where: { id: tenantId }, select: { name: true } });
    if (!before && !tenant) throw new NotFoundException("Tenant not found");

    const socialLinks =
      dto.socialLinks === undefined ? undefined : dto.socialLinks === null ? Prisma.DbNull : dto.socialLinks;
    const data = {
      displayName: dto.displayName === undefined ? undefined : this.requiredText(dto.displayName, "Display name"),
      shortName: this.optionalText(dto.shortName),
      code: this.optionalCode(dto.code),
      organizationType: this.optionalText(dto.organizationType),
      description: this.optionalText(dto.description),
      logoUrl: this.optionalText(dto.logoUrl),
      establishedAt:
        dto.establishedAt === undefined ? undefined : dto.establishedAt === null ? null : new Date(dto.establishedAt),
      contactEmail: this.optionalText(dto.contactEmail),
      websiteUrl: this.optionalText(dto.websiteUrl),
      socialLinks,
      parentOrganization: this.optionalText(dto.parentOrganization),
      address: this.optionalText(dto.address),
      status: dto.status
    };

    const updated = await this.prisma.organizationProfile.upsert({
      where: { tenantId },
      create: {
        tenantId,
        displayName: data.displayName ?? tenant!.name,
        shortName: data.shortName,
        code: data.code,
        organizationType: data.organizationType,
        description: data.description,
        logoUrl: data.logoUrl,
        establishedAt: data.establishedAt,
        contactEmail: data.contactEmail,
        websiteUrl: data.websiteUrl,
        socialLinks: data.socialLinks,
        parentOrganization: data.parentOrganization,
        address: data.address,
        status: data.status
      },
      update: data
    });

    await this.audit.write({
      tenantId,
      actorId,
      action: before ? AuditAction.Update : AuditAction.Create,
      entityType: "OrganizationProfile",
      entityId: updated.id,
      before,
      after: updated,
      correlationId
    });
    return updated;
  }

  async listUnits(tenantId: string) {
    const units = await this.prisma.organizationUnit.findMany({
      where: { tenantId },
      include: {
        _count: { select: { membershipUnits: { where: { effectiveTo: null } } } },
        positions: {
          where: { status: "ACTIVE" },
          orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
          include: {
            membershipPositions: {
              where: { effectiveTo: null },
              include: {
                membership: { include: { user: { select: { id: true, fullName: true, email: true } } } }
              }
            }
          }
        }
      },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }]
    });
    return units.map(({ _count, ...unit }) => ({ ...unit, memberCount: _count.membershipUnits }));
  }

  async createUnit(
    tenantId: string,
    actorId: string,
    dto: CreateOrganizationUnitDto,
    correlationId?: string
  ) {
    await this.assertParent(tenantId, dto.parentId);
    try {
      const unit = await this.prisma.organizationUnit.create({
        data: {
          tenantId,
          code: this.normalizeCode(dto.code),
          name: this.requiredText(dto.name, "Organization unit name"),
          description: this.optionalText(dto.description),
          parentId: dto.parentId,
          sortOrder: dto.sortOrder ?? 0
        }
      });
      await this.audit.write({
        tenantId,
        actorId,
        action: AuditAction.Create,
        entityType: "OrganizationUnit",
        entityId: unit.id,
        after: unit,
        correlationId
      });
      return unit;
    } catch (error) {
      if (this.isUniqueConstraint(error)) throw new ConflictException("Organization unit code already exists");
      throw error;
    }
  }

  async updateUnit(
    tenantId: string,
    actorId: string,
    id: string,
    dto: UpdateOrganizationUnitDto,
    correlationId?: string
  ) {
    const before = await this.prisma.organizationUnit.findFirst({ where: { id, tenantId } });
    if (!before) throw new NotFoundException("Organization unit not found");
    if (dto.parentId === id) throw new BadRequestException("Organization unit cannot be its own parent");
    if (dto.parentId !== undefined) {
      await this.assertParent(tenantId, dto.parentId);
      await this.assertNoCycle(tenantId, id, dto.parentId);
    }

    try {
      const updated = await this.prisma.organizationUnit.update({
        where: { id },
        data: {
          code: dto.code === undefined ? undefined : this.normalizeCode(dto.code),
          name: dto.name === undefined ? undefined : this.requiredText(dto.name, "Organization unit name"),
          description: this.optionalText(dto.description),
          parentId: dto.parentId,
          sortOrder: dto.sortOrder
        }
      });
      await this.audit.write({
        tenantId,
        actorId,
        action: AuditAction.Update,
        entityType: "OrganizationUnit",
        entityId: id,
        before,
        after: updated,
        correlationId
      });
      return updated;
    } catch (error) {
      if (this.isUniqueConstraint(error)) throw new ConflictException("Organization unit code already exists");
      throw error;
    }
  }

  reorderUnit(
    tenantId: string,
    actorId: string,
    id: string,
    dto: ReorderOrganizationUnitDto,
    correlationId?: string
  ) {
    return this.updateUnit(tenantId, actorId, id, dto, correlationId);
  }

  async deactivateUnit(tenantId: string, actorId: string, id: string, correlationId?: string) {
    const before = await this.prisma.organizationUnit.findFirst({ where: { id, tenantId } });
    if (!before) throw new NotFoundException("Organization unit not found");
    if (before.status === "INACTIVE") return before;

    const activeChildren = await this.prisma.organizationUnit.count({
      where: { tenantId, parentId: id, status: "ACTIVE" }
    });
    if (activeChildren > 0) throw new BadRequestException("Deactivate child units before deactivating this unit");

    const positionIds = (
      await this.prisma.position.findMany({ where: { tenantId, unitId: id }, select: { id: true } })
    ).map((position) => position.id);
    const now = new Date();
    const updated = await this.prisma.$transaction(async (tx) => {
      await tx.membershipUnit.updateMany({
        where: { unitId: id, effectiveTo: null },
        data: { effectiveTo: now, isPrimary: false }
      });
      if (positionIds.length > 0) {
        await tx.membershipPosition.updateMany({
          where: { positionId: { in: positionIds }, effectiveTo: null },
          data: { effectiveTo: now }
        });
        await tx.position.updateMany({ where: { id: { in: positionIds } }, data: { status: "INACTIVE" } });
      }
      return tx.organizationUnit.update({ where: { id }, data: { status: "INACTIVE" } });
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: "OrganizationUnit",
      entityId: id,
      before,
      after: updated,
      correlationId
    });
    return updated;
  }

  listPositions(tenantId: string) {
    return this.prisma.position.findMany({
      where: { tenantId },
      include: {
        unit: { select: { id: true, code: true, name: true, status: true } },
        _count: { select: { membershipPositions: { where: { effectiveTo: null } } } }
      },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }]
    });
  }

  async createPosition(tenantId: string, actorId: string, dto: CreatePositionDto, correlationId?: string) {
    await this.assertUnit(tenantId, dto.unitId);
    try {
      const position = await this.prisma.position.create({
        data: {
          tenantId,
          unitId: dto.unitId,
          code: this.normalizeCode(dto.code),
          name: this.requiredText(dto.name, "Position name"),
          description: this.optionalText(dto.description),
          sortOrder: dto.sortOrder ?? 0
        }
      });
      await this.audit.write({
        tenantId,
        actorId,
        action: AuditAction.Create,
        entityType: "Position",
        entityId: position.id,
        after: position,
        correlationId
      });
      return position;
    } catch (error) {
      if (this.isUniqueConstraint(error)) throw new ConflictException("Position code already exists");
      throw error;
    }
  }

  async updatePosition(
    tenantId: string,
    actorId: string,
    id: string,
    dto: UpdatePositionDto,
    correlationId?: string
  ) {
    const before = await this.prisma.position.findFirst({ where: { id, tenantId } });
    if (!before) throw new NotFoundException("Position not found");
    if (dto.unitId !== undefined) {
      await this.assertUnit(tenantId, dto.unitId);
      if (dto.unitId !== before.unitId) {
        const activeAssignments = await this.prisma.membershipPosition.count({ where: { positionId: id, effectiveTo: null } });
        if (activeAssignments > 0) {
          throw new BadRequestException("End active position assignments before moving the position to another unit");
        }
      }
    }

    try {
      const updated = await this.prisma.position.update({
        where: { id },
        data: {
          unitId: dto.unitId,
          code: dto.code === undefined ? undefined : this.normalizeCode(dto.code),
          name: dto.name === undefined ? undefined : this.requiredText(dto.name, "Position name"),
          description: this.optionalText(dto.description),
          status: dto.status,
          sortOrder: dto.sortOrder
        }
      });
      await this.audit.write({
        tenantId,
        actorId,
        action: AuditAction.Update,
        entityType: "Position",
        entityId: id,
        before,
        after: updated,
        correlationId
      });
      return updated;
    } catch (error) {
      if (this.isUniqueConstraint(error)) throw new ConflictException("Position code already exists");
      throw error;
    }
  }

  async deactivatePosition(tenantId: string, actorId: string, id: string, correlationId?: string) {
    const before = await this.prisma.position.findFirst({ where: { id, tenantId } });
    if (!before) throw new NotFoundException("Position not found");
    if (before.status === "INACTIVE") return before;
    const now = new Date();
    const updated = await this.prisma.$transaction(async (tx) => {
      await tx.membershipPosition.updateMany({ where: { positionId: id, effectiveTo: null }, data: { effectiveTo: now } });
      return tx.position.update({ where: { id }, data: { status: "INACTIVE" } });
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: "Position",
      entityId: id,
      before,
      after: updated,
      correlationId
    });
    return updated;
  }

  private async assertParent(tenantId: string, parentId?: string | null) {
    if (!parentId) return;
    const parent = await this.prisma.organizationUnit.findFirst({ where: { id: parentId, tenantId, status: "ACTIVE" } });
    if (!parent) throw new BadRequestException("Parent organization unit must be active and belong to the current tenant");
  }

  private async assertUnit(tenantId: string, unitId?: string | null) {
    if (!unitId) return;
    const unit = await this.prisma.organizationUnit.findFirst({ where: { id: unitId, tenantId, status: "ACTIVE" } });
    if (!unit) throw new BadRequestException("Organization unit must be active and belong to the current tenant");
  }

  private async assertNoCycle(tenantId: string, unitId: string, parentId?: string | null) {
    let cursor = parentId ?? null;
    const visited = new Set<string>();
    while (cursor) {
      if (cursor === unitId) throw new BadRequestException("Organization unit hierarchy cannot contain a cycle");
      if (visited.has(cursor)) throw new BadRequestException("Organization unit hierarchy is already cyclic");
      visited.add(cursor);
      const parent = await this.prisma.organizationUnit.findFirst({
        where: { id: cursor, tenantId },
        select: { parentId: true }
      });
      if (!parent) throw new BadRequestException("Parent organization unit must belong to the current tenant");
      cursor = parent.parentId;
    }
  }

  private normalizeCode(value: string) {
    const code = value.trim().toUpperCase().replace(/\s+/g, "_");
    if (!code) throw new BadRequestException("Code is required");
    return code;
  }

  private requiredText(value: string, label: string) {
    const normalized = value.trim();
    if (!normalized) throw new BadRequestException(`${label} is required`);
    return normalized;
  }

  private optionalCode(value?: string | null) {
    if (value === undefined) return undefined;
    if (value === null || !value.trim()) return null;
    return value.trim().toUpperCase().replace(/\s+/g, "_");
  }

  private optionalText(value?: string | null) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    const normalized = value.trim();
    return normalized || null;
  }

  private isUniqueConstraint(error: unknown) {
    return Boolean(error && typeof error === "object" && "code" in error && (error as { code?: string }).code === "P2002");
  }
}
