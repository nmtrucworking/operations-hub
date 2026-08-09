import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CurrentUser } from "../shared/decorators/current-user.decorator";
import { AppRequest, AuthUser } from "../shared/request-context";
import { CreateTenantRegistrationDto } from "./dto/create-tenant-registration.dto";
import { TenantRegistrationsService } from "./tenant-registrations.service";

@ApiBearerAuth()
@ApiTags("tenant-registrations")
@Controller("tenant-registrations")
export class TenantRegistrationsController {
  constructor(private readonly registrations: TenantRegistrationsService) {}

  @Post()
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateTenantRegistrationDto, @Req() req: AppRequest) {
    return this.registrations.create(user.userId, dto, {
      correlationId: req.correlationId,
      ipAddress: req.ip
    });
  }

  @Get("mine")
  listMine(@CurrentUser() user: AuthUser) {
    return this.registrations.listMine(user.userId);
  }

  @Get("mine/:id")
  getMine(@CurrentUser() user: AuthUser, @Param("id") id: string) {
    return this.registrations.getMine(user.userId, id);
  }

  @Post("mine/:id/withdraw")
  withdraw(@CurrentUser() user: AuthUser, @Param("id") id: string, @Req() req: AppRequest) {
    return this.registrations.withdraw(user.userId, id, {
      correlationId: req.correlationId,
      ipAddress: req.ip
    });
  }
}
