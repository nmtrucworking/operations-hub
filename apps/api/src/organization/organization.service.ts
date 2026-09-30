import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { AuditAction } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateOrganizationUnitDto } from "./dto/create-unit.dto";
import { ReorderOrganizationUnitDto } from "./dto/reorder-unit.dto";
import { UpdateOrganizationUnitDto } from "./dto/update-unit.dto";

@Injectable()
export class OrganizationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  listUnits(tenantId: string) {
    return this.prisma.organizationUnit.findMany({
      where: { tenantId },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }]
    });
  }

  async createUnit(
    tenantId: string,
    actorId: string,
    dto: CreateOrganizationUnitDto,
    correlationId?: string
  ) {
    await this.assertParent(tenantId, dto.parentId);
    const code = this.normalizeCode(dto.code);
    try {
      const unit = await this.prisma.organizationUnit.create({
        data: {
          tenantId,
          code,
          name: dto.name.trim(),
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
          name: dto.name === undefined ? undefined : dto.name.trim(),
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

    const updated = await this.prisma.organizationUnit.update({ where: { id }, data: { status: "INACTIVE" } });
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

  private async assertParent(tenantId: string, parentId?: string | null) {
    if (!parentId) return;
    const parent = await this.prisma.organizationUnit.findFirst({ where: { id: parentId, tenantId } });
    if (!parent) throw new BadRequestException("Parent organization unit must belong to the current tenant");
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
    const code = value.trim().toUpperCase();
    if (!code) throw new BadRequestException("Organization unit code is required");
    return code;
  }

  private isUniqueConstraint(error: unknown) {
    return Boolean(error && typeof error === "object" && "code" in error && (error as { code?: string }).code === "P2002");
  }
}
