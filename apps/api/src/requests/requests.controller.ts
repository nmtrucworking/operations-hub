import { Body, Controller, Get, Param, Patch, Post, Query, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ModuleKey, PERMISSIONS } from "@operations-hub/shared";
import { RequireModule } from "../shared/decorators/module.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import { CreateRequestDto, CreateRequestTypeDto, RequestDecisionDto, UpdateRequestDto } from "./dto";
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

  @Get("types")
  @Permissions(PERMISSIONS.requestRead)
  listTypes(@TenantId() tenantId: string) {
    return this.requests.listTypes(tenantId);
  }

  @Post("types")
  @Permissions(PERMISSIONS.requestManage)
  createType(@TenantId() tenantId: string, @Body() dto: CreateRequestTypeDto, @Req() req: AppRequest) {
    return this.requests.createType(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Post()
  @Permissions(PERMISSIONS.requestManage)
  create(@TenantId() tenantId: string, @Body() dto: CreateRequestDto, @Req() req: AppRequest) {
    return this.requests.create(tenantId, req.user!.userId, req.membershipId!, dto, req.correlationId);
  }

  @Patch(":id")
  @Permissions(PERMISSIONS.requestManage)
  update(@TenantId() tenantId: string, @Param("id") id: string, @Body() dto: UpdateRequestDto, @Req() req: AppRequest) {
    return this.requests.update(tenantId, req.user!.userId, req.membershipId!, id, dto, req.correlationId);
  }

  @Post(":id/submit")
  @Permissions(PERMISSIONS.requestManage)
  submit(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.requests.submit(tenantId, req.user!.userId, req.membershipId!, id, req.correlationId);
  }

  @Post(":id/review")
  @Permissions(PERMISSIONS.requestApprove)
  review(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.requests.startReview(tenantId, req.user!.userId, req.membershipId!, id, req.correlationId);
  }

  @Post(":id/approve")
  @Permissions(PERMISSIONS.requestApprove)
  approve(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: RequestDecisionDto,
    @Req() req: AppRequest
  ) {
    return this.requests.approve(tenantId, req.user!.userId, req.membershipId!, id, dto, req.correlationId);
  }

  @Post(":id/reject")
  @Permissions(PERMISSIONS.requestApprove)
  reject(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: RequestDecisionDto,
    @Req() req: AppRequest
  ) {
    return this.requests.reject(tenantId, req.user!.userId, req.membershipId!, id, dto, req.correlationId);
  }

  @Post(":id/cancel")
  @Permissions(PERMISSIONS.requestManage)
  cancel(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.requests.cancel(tenantId, req.user!.userId, req.membershipId!, id, req.correlationId);
  }

  @Post(":id/complete")
  @Permissions(PERMISSIONS.requestManage)
  complete(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.requests.complete(tenantId, req.user!.userId, req.membershipId!, id, req.correlationId);
  }
}
