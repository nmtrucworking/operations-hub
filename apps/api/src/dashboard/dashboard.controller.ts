import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ModuleKey, PERMISSIONS } from "@operations-hub/shared";
import { RequireModule } from "../shared/decorators/module.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { DashboardService } from "./dashboard.service";

@ApiBearerAuth()
@ApiTags("dashboard")
@Controller("dashboard")
@RequireModule(ModuleKey.Dashboard)
export class DashboardController {
  constructor(private readonly dashboard: DashboardService) {}

  @Get("summary")
  @Permissions(PERMISSIONS.dashboardRead)
  async summary(@TenantId() tenantId: string) {
    return this.dashboard.summary(tenantId);
  }
}
