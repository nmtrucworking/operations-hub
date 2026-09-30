import { Body, Controller, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ModuleKey, PERMISSIONS } from "@operations-hub/shared";
import { RequireModule } from "../shared/decorators/module.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import { CreateMeetingDto, MarkAttendanceDto, UpdateMeetingDto } from "./dto";
import { MeetingsService } from "./meetings.service";

@ApiBearerAuth()
@ApiTags("meetings")
@Controller("meetings")
@RequireModule(ModuleKey.Meetings)
export class MeetingsController {
  constructor(private readonly meetings: MeetingsService) {}

  @Get()
  @Permissions(PERMISSIONS.meetingRead)
  list(@TenantId() tenantId: string) {
    return this.meetings.list(tenantId);
  }

  @Get(":id")
  @Permissions(PERMISSIONS.meetingRead)
  detail(@TenantId() tenantId: string, @Param("id") id: string) {
    return this.meetings.detail(tenantId, id);
  }

  @Post()
  @Permissions(PERMISSIONS.meetingManage)
  create(@TenantId() tenantId: string, @Body() dto: CreateMeetingDto, @Req() req: AppRequest) {
    return this.meetings.create(tenantId, req.user!.userId, req.membershipId!, dto, req.correlationId);
  }

  @Patch(":id")
  @Permissions(PERMISSIONS.meetingManage)
  update(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: UpdateMeetingDto,
    @Req() req: AppRequest
  ) {
    return this.meetings.update(tenantId, req.user!.userId, id, dto, req.correlationId);
  }

  @Post(":id/schedule")
  @Permissions(PERMISSIONS.meetingManage)
  schedule(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.meetings.schedule(tenantId, req.user!.userId, id, req.correlationId);
  }

  @Post(":id/start")
  @Permissions(PERMISSIONS.meetingManage)
  start(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.meetings.start(tenantId, req.user!.userId, id, req.correlationId);
  }

  @Post(":id/complete")
  @Permissions(PERMISSIONS.meetingManage)
  complete(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.meetings.complete(tenantId, req.user!.userId, id, req.correlationId);
  }

  @Post(":id/cancel")
  @Permissions(PERMISSIONS.meetingManage)
  cancel(@TenantId() tenantId: string, @Param("id") id: string, @Req() req: AppRequest) {
    return this.meetings.cancel(tenantId, req.user!.userId, id, req.correlationId);
  }

  @Patch(":id/attendance/:membershipId")
  @Permissions(PERMISSIONS.meetingManage)
  markAttendance(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Param("membershipId") membershipId: string,
    @Body() dto: MarkAttendanceDto,
    @Req() req: AppRequest
  ) {
    return this.meetings.markAttendance(
      tenantId,
      req.user!.userId,
      req.membershipId!,
      id,
      membershipId,
      dto,
      req.correlationId
    );
  }
}
