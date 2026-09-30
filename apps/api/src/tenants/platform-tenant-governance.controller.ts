import { Body, Controller, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PlatformRole } from "@operations-hub/shared";
import { PlatformRoles } from "../shared/decorators/platform-roles.decorator";
import { AppRequest } from "../shared/request-context";
import {
  AssignTenantServiceDto,
  CreateServicePlanDto,
  DecideClosureRequestDto,
  GrantSupportRequestDto,
  RejectSupportRequestDto,
  SetTenantUsageDto,
  UpdateRetentionPolicyDto,
  UpsertServicePlanLimitDto
} from "./dto/tenant-governance.dto";
import { TenantGovernanceService } from "./tenant-governance.service";

@ApiBearerAuth()
@ApiTags("platform-tenant-governance")
@Controller("platform")
@PlatformRoles(PlatformRole.PlatformAdmin)
export class PlatformTenantGovernanceController {
  constructor(private readonly governance: TenantGovernanceService) {}

  @Get("service-plans")
  plans() {
    return this.governance.listAllPlans();
  }

  @Post("service-plans")
  createPlan(@Body() dto: CreateServicePlanDto, @Req() req: AppRequest) {
    return this.governance.createPlan(req.user!.userId, dto, req.correlationId);
  }

  @Put("service-plans/:planId/limits")
  upsertPlanLimit(@Param("planId") planId: string, @Body() dto: UpsertServicePlanLimitDto, @Req() req: AppRequest) {
    return this.governance.upsertPlanLimit(req.user!.userId, planId, dto, req.correlationId);
  }

  @Post("tenants/:tenantId/service")
  assignTenantService(@Param("tenantId") tenantId: string, @Body() dto: AssignTenantServiceDto, @Req() req: AppRequest) {
    return this.governance.assignTenantService(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Put("tenants/:tenantId/usage")
  setTenantUsage(@Param("tenantId") tenantId: string, @Body() dto: SetTenantUsageDto, @Req() req: AppRequest) {
    return this.governance.setTenantUsage(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Put("tenants/:tenantId/retention")
  updateRetention(@Param("tenantId") tenantId: string, @Body() dto: UpdateRetentionPolicyDto, @Req() req: AppRequest) {
    return this.governance.updateRetentionPolicy(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Get("tenant-closures")
  closures(@Query("tenantId") tenantId?: string) {
    return this.governance.listPlatformClosures(tenantId);
  }

  @Post("tenants/:tenantId/closure-requests/:id/decision")
  decideClosure(
    @Param("tenantId") tenantId: string,
    @Param("id") id: string,
    @Body() dto: DecideClosureRequestDto,
    @Req() req: AppRequest
  ) {
    return this.governance.decideClosure(tenantId, id, req.user!.userId, dto, req.correlationId);
  }

  @Get("support-requests")
  supportRequests(@Query("tenantId") tenantId?: string) {
    return this.governance.listPlatformSupportRequests(tenantId);
  }

  @Get("support-principals")
  supportPrincipals() {
    return this.governance.listSupportPrincipals();
  }

  @Post("tenants/:tenantId/support-requests/:id/grant")
  grantSupport(
    @Param("tenantId") tenantId: string,
    @Param("id") id: string,
    @Body() dto: GrantSupportRequestDto,
    @Req() req: AppRequest
  ) {
    return this.governance.grantSupport(tenantId, id, req.user!.userId, dto, req.correlationId);
  }

  @Post("tenants/:tenantId/support-requests/:id/reject")
  rejectSupport(
    @Param("tenantId") tenantId: string,
    @Param("id") id: string,
    @Body() dto: RejectSupportRequestDto,
    @Req() req: AppRequest
  ) {
    return this.governance.rejectSupport(tenantId, id, req.user!.userId, dto, req.correlationId);
  }

  @Post("tenants/:tenantId/support-grants/:id/revoke")
  revokeSupport(@Param("tenantId") tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.governance.revokeSupportGrant(tenantId, id, req.user!.userId, req.correlationId);
  }
}
