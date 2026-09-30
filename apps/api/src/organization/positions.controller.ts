import { Body, Controller, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PERMISSIONS } from "@operations-hub/shared";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import { CreatePositionDto, UpdatePositionDto } from "./dto/position.dto";
import { OrganizationService } from "./organization.service";

@ApiBearerAuth()
@ApiTags("organization")
@Controller("organization/positions")
export class OrganizationPositionsController {
  constructor(private readonly organization: OrganizationService) {}

  @Get()
  @Permissions(PERMISSIONS.organizationRead)
  list(@TenantId() tenantId: string) {
    return this.organization.listPositions(tenantId);
  }

  @Post()
  @Permissions(PERMISSIONS.organizationManage)
  create(@TenantId() tenantId: string, @Body() dto: CreatePositionDto, @Req() req: AppRequest) {
    return this.organization.createPosition(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Patch(":id")
  @Permissions(PERMISSIONS.organizationManage)
  update(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: UpdatePositionDto,
    @Req() req: AppRequest
  ) {
    return this.organization.updatePosition(tenantId, req.user!.userId, id, dto, req.correlationId);
  }

  @Post(":id/deactivate")
  @Permissions(PERMISSIONS.organizationManage)
  deactivate(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.organization.deactivatePosition(tenantId, req.user!.userId, id, req.correlationId);
  }
}
