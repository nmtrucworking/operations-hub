import { Body, Controller, Get, Param, Patch, Post, Query, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ModuleKey, PERMISSIONS } from "@operations-hub/shared";
import { RequireModule } from "../shared/decorators/module.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import { CreateMemberDto, UpdateMemberDto } from "./dto";
import { MembersService } from "./members.service";

@ApiBearerAuth()
@ApiTags("members")
@Controller("members")
@RequireModule(ModuleKey.Members)
export class MembersController {
  constructor(private readonly members: MembersService) {}

  @Get()
  @Permissions(PERMISSIONS.memberRead)
  list(@TenantId() tenantId: string, @Query("page") page = "1", @Query("limit") limit = "20") {
    return this.members.list(tenantId, Number(page) || 1, Number(limit) || 20);
  }

  @Post()
  @Permissions(PERMISSIONS.memberManage)
  create(@TenantId() tenantId: string, @Body() dto: CreateMemberDto, @Req() req: AppRequest) {
    return this.members.create(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Patch(":id")
  @Permissions(PERMISSIONS.memberManage)
  update(@TenantId() tenantId: string, @Param("id") id: string, @Body() dto: UpdateMemberDto, @Req() req: AppRequest) {
    return this.members.update(tenantId, req.user!.userId, id, dto, req.correlationId);
  }
}
