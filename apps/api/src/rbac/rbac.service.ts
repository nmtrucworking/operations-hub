import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { AuditAction, PERMISSIONS } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class RbacService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  async hasAllPermissions(membershipId: string, permissions: string[]) {
    const rows = await this.prisma.membershipRole.findMany({
      where: { membershipId },
      select: {
        role: {
          select: {
            permissions: {
              select: { permission: { select: { code: true } } }
            }
          }
        }
      }
    });
    const effective = new Set(rows.flatMap((row) => row.role.permissions.map((rp) => rp.permission.code)));
    return permissions.every((permission) => effective.has(permission));
  }

  listRoles(tenantId: string) {
    return this.prisma.role.findMany({
      where: { tenantId },
      include: { permissions: { include: { permission: true } } },
      orderBy: { name: "asc" }
    });
  }

  async createRole(tenantId: string, actorId: string, dto: { name: string; description?: string }, correlationId?: string) {
    const role = await this.prisma.role.create({
      data: { tenantId, name: dto.name, description: dto.description },
      include: { permissions: { include: { permission: true } } }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: "Role",
      entityId: role.id,
      after: role,
      correlationId
    });
    return role;
  }

  async setRolePermissions(tenantId: string, actorId: string, roleId: string, codes: string[], correlationId?: string) {
    const invalid = codes.filter((code) => !Object.values(PERMISSIONS).includes(code as never));
    if (invalid.length) throw new BadRequestException(`Unknown permissions: ${invalid.join(", ")}`);
    const role = await this.prisma.role.findFirst({ where: { id: roleId, tenantId } });
    if (!role) throw new NotFoundException("Role not found");
    const permissions = await this.prisma.permission.findMany({ where: { code: { in: codes } } });
    await this.prisma.$transaction([
      this.prisma.rolePermission.deleteMany({ where: { roleId } }),
      ...permissions.map((permission) =>
        this.prisma.rolePermission.create({ data: { roleId, permissionId: permission.id } })
      )
    ]);
    const updated = await this.prisma.role.findUniqueOrThrow({
      where: { id: roleId },
      include: { permissions: { include: { permission: true } } }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: "Role",
      entityId: roleId,
      after: updated,
      correlationId
    });
    return updated;
  }

  async assignRole(tenantId: string, actorId: string, membershipId: string, roleId: string, correlationId?: string) {
    const [membership, role] = await Promise.all([
      this.prisma.membership.findFirst({ where: { id: membershipId, tenantId } }),
      this.prisma.role.findFirst({ where: { id: roleId, tenantId } })
    ]);
    if (!membership) throw new NotFoundException("Membership not found");
    if (!role) throw new NotFoundException("Role not found");
    const assignment = await this.prisma.membershipRole.upsert({
      where: { membershipId_roleId: { membershipId, roleId } },
      create: { membershipId, roleId },
      update: {}
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: "MembershipRole",
      entityId: `${membershipId}:${roleId}`,
      after: assignment,
      correlationId
    });
    return assignment;
  }
}
