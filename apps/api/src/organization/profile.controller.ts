import { Body, Controller, Get, Patch, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PERMISSIONS } from "@operations-hub/shared";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import { UpdateOrganizationProfileDto } from "./dto/profile.dto";
import { OrganizationService } from "./organization.service";

@ApiBearerAuth()
@ApiTags("organization")
@Controller("organization/profile")
export class OrganizationProfileController {
  constructor(private readonly organization: OrganizationService) {}

  @Get()
  @Permissions(PERMISSIONS.organizationRead)
  get(@TenantId() tenantId: string) {
    return this.organization.getProfile(tenantId);
  }

  @Patch()
  @Permissions(PERMISSIONS.organizationManage)
  update(@TenantId() tenantId: string, @Body() dto: UpdateOrganizationProfileDto, @Req() req: AppRequest) {
    return this.organization.updateProfile(tenantId, req.user!.userId, dto, req.correlationId);
  }
}
