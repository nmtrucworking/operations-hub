import { Controller, Get, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PERMISSIONS } from "@operations-hub/shared";
import { PrismaService } from "../prisma/prisma.service";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";

@ApiBearerAuth()
@ApiTags("audit")
@Controller("audit-logs")
export class AuditController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Permissions(PERMISSIONS.auditRead)
  async list(@TenantId() tenantId: string, @Query("page") page = "1", @Query("limit") limit = "20") {
    const take = Math.min(Number(limit) || 20, 100);
    const skip = Math.max((Number(page) || 1) - 1, 0) * take;
    const [items, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where: { tenantId },
        orderBy: { createdAt: "desc" },
        skip,
        take
      }),
      this.prisma.auditLog.count({ where: { tenantId } })
    ]);
    return { data: items, meta: { page: Number(page) || 1, limit: take, total } };
  }
}
