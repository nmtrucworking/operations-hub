import { Body, Controller, Get, Param, Patch, Post, Query, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ModuleKey, PERMISSIONS } from "@operations-hub/shared";
import { RequireModule } from "../shared/decorators/module.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { Public } from "../shared/decorators/public.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import {
  AcceptMemberInvitationDto,
  AssignMembershipPositionDto,
  AssignMembershipUnitDto,
  CreateMemberDto,
  CreateMemberInvitationDto,
  UpdateMemberDto
} from "./dto";
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

  @Get("invitations")
  @Permissions(PERMISSIONS.memberRead)
  listInvitations(@TenantId() tenantId: string) {
    return this.members.listInvitations(tenantId);
  }

  @Post("invitations")
  @Permissions(PERMISSIONS.memberManage)
  invite(@TenantId() tenantId: string, @Body() dto: CreateMemberInvitationDto, @Req() req: AppRequest) {
    return this.members.createInvitation(tenantId, req.user!.userId, req.membershipId, dto, req.correlationId);
  }

  @Post("invitations/:id/revoke")
  @Permissions(PERMISSIONS.memberManage)
  revokeInvitation(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.members.revokeInvitation(tenantId, req.user!.userId, id, req.correlationId);
  }

  @Public()
  @Get("invitations/token/:token")
  getInvitation(@Param("token") token: string) {
    return this.members.getInvitation(token);
  }

  @Public()
  @Post("invitations/token/:token/accept")
  acceptInvitation(@Param("token") token: string, @Body() dto: AcceptMemberInvitationDto, @Req() req: AppRequest) {
    return this.members.acceptInvitation(token, dto, req.correlationId);
  }

  @Public()
  @Post("invitations/token/:token/decline")
  declineInvitation(@Param("token") token: string, @Req() req: AppRequest) {
    return this.members.declineInvitation(token, req.correlationId);
  }

  @Get(":id")
  @Permissions(PERMISSIONS.memberRead)
  get(@TenantId() tenantId: string, @Param("id") id: string) {
    return this.members.get(tenantId, id);
  }

  @Post()
  @Permissions(PERMISSIONS.memberManage)
  create(@TenantId() tenantId: string, @Body() dto: CreateMemberDto, @Req() req: AppRequest) {
    return this.members.create(tenantId, req.user!.userId, req.membershipId, dto, req.correlationId);
  }

  @Patch(":id")
  @Permissions(PERMISSIONS.memberManage)
  update(@TenantId() tenantId: string, @Param("id") id: string, @Body() dto: UpdateMemberDto, @Req() req: AppRequest) {
    return this.members.update(tenantId, req.user!.userId, id, dto, req.correlationId);
  }

  @Post(":id/units")
  @Permissions(PERMISSIONS.memberManage)
  assignUnit(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: AssignMembershipUnitDto,
    @Req() req: AppRequest
  ) {
    return this.members.assignUnit(tenantId, req.user!.userId, id, dto, req.correlationId);
  }

  @Post(":id/units/:unitId/end")
  @Permissions(PERMISSIONS.memberManage)
  endUnit(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Param("unitId") unitId: string,
    @Req() req: AppRequest
  ) {
    return this.members.endUnit(tenantId, req.user!.userId, id, unitId, req.correlationId);
  }

  @Post(":id/positions")
  @Permissions(PERMISSIONS.memberManage)
  assignPosition(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: AssignMembershipPositionDto,
    @Req() req: AppRequest
  ) {
    return this.members.assignPosition(tenantId, req.user!.userId, id, dto, req.correlationId);
  }

  @Post(":id/positions/:positionId/end")
  @Permissions(PERMISSIONS.memberManage)
  endPosition(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Param("positionId") positionId: string,
    @Req() req: AppRequest
  ) {
    return this.members.endPosition(tenantId, req.user!.userId, id, positionId, req.correlationId);
  }
}
