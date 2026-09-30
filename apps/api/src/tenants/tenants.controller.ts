import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PERMISSIONS } from "@operations-hub/shared";
import { CurrentUser } from "../shared/decorators/current-user.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest, AuthUser } from "../shared/request-context";
import { AddOwnerDto, CreateCustomDomainDto, TransferOwnershipDto, UpdateBrandingDto } from "./dto/manage-tenant.dto";
import {
  CreateClosureRequestDto,
  CreateDataExportRequestDto,
  CreateSupportRequestDto,
  UpdateServiceContactsDto
} from "./dto/tenant-governance.dto";
import { TenantManagementService } from "./tenant-management.service";
import { TenantGovernanceService } from "./tenant-governance.service";

@ApiBearerAuth()
@ApiTags("tenants")
@Controller("tenants")
export class TenantsController {
  constructor(
    private readonly tenants: TenantManagementService,
    private readonly governance: TenantGovernanceService
  ) {}

  @Get()
  async list(@CurrentUser() user: AuthUser) {
    return this.tenants.listForUser(user.userId);
  }

  @Get("current")
  @Permissions(PERMISSIONS.tenantRead)
  current(@TenantId() tenantId: string) {
    return this.tenants.current(tenantId);
  }

  @Get("current/owners")
  @Permissions(PERMISSIONS.ownershipRead)
  owners(@TenantId() tenantId: string) {
    return this.tenants.listOwners(tenantId);
  }

  @Post("current/owners")
  @Permissions(PERMISSIONS.ownershipManage)
  addOwner(@TenantId() tenantId: string, @Body() dto: AddOwnerDto, @Req() req: AppRequest) {
    return this.tenants.addOwner(tenantId, req.user!.userId, dto.membershipId, req.correlationId);
  }

  @Delete("current/owners/:membershipId")
  @Permissions(PERMISSIONS.ownershipManage)
  revokeOwner(@TenantId() tenantId: string, @Param("membershipId") membershipId: string, @Req() req: AppRequest) {
    return this.tenants.revokeOwner(tenantId, req.user!.userId, membershipId, req.correlationId);
  }

  @Post("current/ownership/transfer")
  @Permissions(PERMISSIONS.ownershipManage)
  transferOwnership(@TenantId() tenantId: string, @Body() dto: TransferOwnershipDto, @Req() req: AppRequest) {
    return this.tenants.transferOwnership(
      tenantId,
      req.user!.userId,
      req.membershipId!,
      dto.toMembershipId,
      req.correlationId
    );
  }

  @Get("current/branding")
  @Permissions(PERMISSIONS.brandingRead)
  branding(@TenantId() tenantId: string) {
    return this.tenants.getBranding(tenantId);
  }

  @Patch("current/branding")
  @Permissions(PERMISSIONS.brandingManage)
  updateBranding(@TenantId() tenantId: string, @Body() dto: UpdateBrandingDto, @Req() req: AppRequest) {
    return this.tenants.updateBranding(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Get("current/domains")
  @Permissions(PERMISSIONS.domainRead)
  domains(@TenantId() tenantId: string) {
    return this.tenants.listDomains(tenantId);
  }

  @Post("current/domains")
  @Permissions(PERMISSIONS.domainManage)
  createDomain(@TenantId() tenantId: string, @Body() dto: CreateCustomDomainDto, @Req() req: AppRequest) {
    return this.tenants.createDomain(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Delete("current/domains/:id")
  @Permissions(PERMISSIONS.domainManage)
  revokeDomain(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.tenants.revokeDomain(tenantId, req.user!.userId, id, req.correlationId);
  }

  @Post("current/domains/:id/challenge")
  @Permissions(PERMISSIONS.domainManage)
  issueDomainChallenge(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.tenants.issueDomainChallenge(tenantId, req.user!.userId, id, req.correlationId);
  }

  @Post("current/domains/:id/verify")
  @Permissions(PERMISSIONS.domainManage)
  verifyDomain(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.tenants.verifyDomain(tenantId, req.user!.userId, id, req.correlationId);
  }

  @Get("service-plans")
  @Permissions(PERMISSIONS.serviceRead)
  servicePlans() {
    return this.governance.listServicePlans();
  }

  @Get("current/service")
  @Permissions(PERMISSIONS.serviceRead)
  service(@TenantId() tenantId: string) {
    return this.governance.serviceOverview(tenantId);
  }

  @Patch("current/service/contacts")
  @Permissions(PERMISSIONS.serviceManage)
  updateServiceContacts(@TenantId() tenantId: string, @Body() dto: UpdateServiceContactsDto, @Req() req: AppRequest) {
    return this.governance.updateServiceContacts(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Get("current/retention")
  @Permissions(PERMISSIONS.closureRead)
  retention(@TenantId() tenantId: string) {
    return this.governance.getRetentionPolicy(tenantId);
  }

  @Get("current/closure-requests")
  @Permissions(PERMISSIONS.closureRead)
  closureRequests(@TenantId() tenantId: string) {
    return this.governance.listClosureRequests(tenantId);
  }

  @Post("current/closure-requests")
  @Permissions(PERMISSIONS.closureManage)
  requestClosure(@TenantId() tenantId: string, @Body() dto: CreateClosureRequestDto, @Req() req: AppRequest) {
    return this.governance.requestClosure(tenantId, req.membershipId!, req.user!.userId, dto.reason, req.correlationId);
  }

  @Post("current/closure-requests/:id/cancel")
  @Permissions(PERMISSIONS.closureManage)
  cancelClosure(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.governance.cancelClosure(tenantId, id, req.membershipId!, req.user!.userId, req.correlationId);
  }

  @Get("current/data-exports")
  @Permissions(PERMISSIONS.closureRead)
  dataExports(@TenantId() tenantId: string) {
    return this.governance.listDataExports(tenantId);
  }

  @Post("current/data-exports")
  @Permissions(PERMISSIONS.closureManage)
  requestDataExport(@TenantId() tenantId: string, @Body() dto: CreateDataExportRequestDto, @Req() req: AppRequest) {
    return this.governance.requestDataExport(
      tenantId,
      req.membershipId!,
      req.user!.userId,
      dto,
      req.correlationId
    );
  }

  @Get("current/support-requests")
  @Permissions(PERMISSIONS.supportRead)
  supportRequests(@TenantId() tenantId: string) {
    return this.governance.listSupportRequests(tenantId);
  }

  @Post("current/support-requests")
  @Permissions(PERMISSIONS.supportManage)
  createSupportRequest(@TenantId() tenantId: string, @Body() dto: CreateSupportRequestDto, @Req() req: AppRequest) {
    return this.governance.createSupportRequest(
      tenantId,
      req.membershipId!,
      req.user!.userId,
      dto,
      req.correlationId
    );
  }
}
