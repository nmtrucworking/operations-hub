import { Body, Controller, Get, Param, Patch, Post, Query, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ModuleKey, PERMISSIONS } from "@operations-hub/shared";
import { RequireModule } from "../shared/decorators/module.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import { CreateRequestDto, UpdateRequestDto } from "./dto";
import { RequestsService } from "./requests.service";

@ApiBearerAuth()
@ApiTags("requests")
@Controller("requests")
@RequireModule(ModuleKey.Requests)
export class RequestsController {
  constructor(private readonly requests: RequestsService) {}

  @Get()
  @Permissions(PERMISSIONS.requestRead)
  list(@TenantId() tenantId: string, @Query("page") page = "1", @Query("limit") limit = "20") {
    return this.requests.list(tenantId, Number(page) || 1, Number(limit) || 20);
  }

  @Post()
  @Permissions(PERMISSIONS.requestManage)
  create(@TenantId() tenantId: string, @Body() dto: CreateRequestDto, @Req() req: AppRequest) {
    return this.requests.create(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Patch(":id")
  @Permissions(PERMISSIONS.requestManage)
  update(@TenantId() tenantId: string, @Param("id") id: string, @Body() dto: UpdateRequestDto, @Req() req: AppRequest) {
    return this.requests.update(tenantId, req.user!.userId, id, dto, req.correlationId);
  }
}
