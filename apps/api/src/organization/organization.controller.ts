import { Body, Controller, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PERMISSIONS } from "@operations-hub/shared";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import { CreateOrganizationUnitDto } from "./dto/create-unit.dto";
import { ReorderOrganizationUnitDto } from "./dto/reorder-unit.dto";
import { UpdateOrganizationUnitDto } from "./dto/update-unit.dto";
import { OrganizationService } from "./organization.service";

@ApiBearerAuth()
@ApiTags("organization")
@Controller("organization/units")
export class OrganizationController {
  constructor(private readonly organization: OrganizationService) {}

  @Get()
  @Permissions(PERMISSIONS.organizationRead)
  list(@TenantId() tenantId: string) {
    return this.organization.listUnits(tenantId);
  }

  @Post()
  @Permissions(PERMISSIONS.organizationManage)
  create(@TenantId() tenantId: string, @Body() dto: CreateOrganizationUnitDto, @Req() req: AppRequest) {
    return this.organization.createUnit(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Patch(":id")
  @Permissions(PERMISSIONS.organizationManage)
  update(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: UpdateOrganizationUnitDto,
    @Req() req: AppRequest
  ) {
    return this.organization.updateUnit(tenantId, req.user!.userId, id, dto, req.correlationId);
  }

  @Post(":id/reorder")
  @Permissions(PERMISSIONS.organizationManage)
  reorder(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: ReorderOrganizationUnitDto,
    @Req() req: AppRequest
  ) {
    return this.organization.reorderUnit(tenantId, req.user!.userId, id, dto, req.correlationId);
  }

  @Post(":id/deactivate")
  @Permissions(PERMISSIONS.organizationManage)
  deactivate(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.organization.deactivateUnit(tenantId, req.user!.userId, id, req.correlationId);
  }
}
