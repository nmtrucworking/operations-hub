import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PERMISSIONS } from "@operations-hub/shared";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import { AssignRoleDto, CreateRoleDto, SetRolePermissionsDto } from "./dto";
import { RbacService } from "./rbac.service";

@ApiBearerAuth()
@ApiTags("rbac")
@Controller()
export class RbacController {
  constructor(private readonly rbac: RbacService) {}

  @Get("roles")
  @Permissions(PERMISSIONS.roleRead)
  list(@TenantId() tenantId: string) {
    return this.rbac.listRoles(tenantId);
  }

  @Post("roles")
  @Permissions(PERMISSIONS.roleManage)
  create(@TenantId() tenantId: string, @Body() dto: CreateRoleDto, @Req() req: AppRequest) {
    return this.rbac.createRole(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Post("roles/:id/permissions")
  @Permissions(PERMISSIONS.roleManage)
  setPermissions(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: SetRolePermissionsDto,
    @Req() req: AppRequest
  ) {
    return this.rbac.setRolePermissions(tenantId, req.user!.userId, id, dto.permissions, req.correlationId);
  }

  @Post("members/:id/roles")
  @Permissions(PERMISSIONS.roleManage)
  assignRole(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: AssignRoleDto,
    @Req() req: AppRequest
  ) {
    return this.rbac.assignRole(tenantId, req.user!.userId, id, dto.roleId, req.correlationId);
  }
}
