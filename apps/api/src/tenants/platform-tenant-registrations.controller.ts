import { Body, Controller, Get, Param, Post, Query, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PlatformRole } from "@operations-hub/shared";
import { CurrentUser } from "../shared/decorators/current-user.decorator";
import { PlatformRoles } from "../shared/decorators/platform-roles.decorator";
import { AppRequest, AuthUser } from "../shared/request-context";
import { ListTenantRegistrationsQueryDto, ReviewTenantRegistrationDto } from "./dto/review-tenant-registration.dto";
import { PlatformTenantRegistrationsService } from "./platform-tenant-registrations.service";

@ApiBearerAuth()
@ApiTags("platform-tenant-registrations")
@Controller("platform/tenant-registrations")
@PlatformRoles(PlatformRole.PlatformAdmin, PlatformRole.PlatformReviewer)
export class PlatformTenantRegistrationsController {
  constructor(private readonly registrations: PlatformTenantRegistrationsService) {}

  @Get()
  list(@Query() query: ListTenantRegistrationsQueryDto) {
    return this.registrations.list(query.status);
  }

  @Get(":id")
  get(@Param("id") id: string) {
    return this.registrations.get(id);
  }

  @Post(":id/request-changes")
  requestChanges(
    @Param("id") id: string,
    @CurrentUser() user: AuthUser,
    @Body() dto: ReviewTenantRegistrationDto,
    @Req() req: AppRequest
  ) {
    return this.registrations.requestChanges(id, user.userId, dto.reviewNote, {
      correlationId: req.correlationId,
      ipAddress: req.ip
    });
  }

  @Post(":id/reject")
  reject(
    @Param("id") id: string,
    @CurrentUser() user: AuthUser,
    @Body() dto: ReviewTenantRegistrationDto,
    @Req() req: AppRequest
  ) {
    return this.registrations.reject(id, user.userId, dto.reviewNote, {
      correlationId: req.correlationId,
      ipAddress: req.ip
    });
  }

  @Post(":id/approve")
  @PlatformRoles(PlatformRole.PlatformAdmin)
  approve(
    @Param("id") id: string,
    @CurrentUser() user: AuthUser,
    @Body() dto: ReviewTenantRegistrationDto,
    @Req() req: AppRequest
  ) {
    return this.registrations.approve(id, user.userId, dto.reviewNote, {
      correlationId: req.correlationId,
      ipAddress: req.ip
    });
  }
}
