import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ModuleKey, PERMISSIONS } from "@operations-hub/shared";
import { PrismaService } from "../prisma/prisma.service";
import { RequireModule } from "../shared/decorators/module.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";

@ApiBearerAuth()
@ApiTags("dashboard")
@Controller("dashboard")
@RequireModule(ModuleKey.Dashboard)
export class DashboardController {
  constructor(private readonly prisma: PrismaService) {}

  @Get("summary")
  @Permissions(PERMISSIONS.dashboardRead)
  async summary(@TenantId() tenantId: string) {
    const [members, requests, pendingRequests, financeTransactions, auditEvents, metrics] = await Promise.all([
      this.prisma.membership.count({ where: { tenantId, status: "ACTIVE" } }),
      this.prisma.request.count({ where: { tenantId } }),
      this.prisma.request.count({ where: { tenantId, status: { in: ["SUBMITTED", "IN_REVIEW"] } } }),
      this.prisma.financeTransaction.count({ where: { tenantId } }),
      this.prisma.auditLog.count({ where: { tenantId } }),
      this.prisma.dashboardMetric.findMany({ where: { tenantId }, orderBy: { label: "asc" } })
    ]);
    return {
      cards: [
        { key: "activeMembers", label: "Active members", value: members },
        { key: "requests", label: "Requests", value: requests },
        { key: "pendingRequests", label: "Pending requests", value: pendingRequests },
        { key: "financeTransactions", label: "Finance transactions", value: financeTransactions },
        { key: "auditEvents", label: "Audit events", value: auditEvents }
      ],
      metrics
    };
  }
}
