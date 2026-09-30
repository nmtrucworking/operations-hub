import { Body, Controller, Get, Param, Post, Query, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { MembershipStatus, TenantStatus } from "@prisma/client";
import { PlatformRole } from "@operations-hub/shared";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { PrismaService } from "../prisma/prisma.service";
import { PlatformRoles } from "../shared/decorators/platform-roles.decorator";
import { AppRequest } from "../shared/request-context";
import { TransitionTenantDto } from "./dto/manage-tenant.dto";
import { PlatformTenantsService } from "./platform-tenants.service";

class ListPlatformTenantsQueryDto {
  @IsOptional()
  @IsEnum(TenantStatus)
  status?: TenantStatus;

  @IsOptional()
  @IsString()
  q?: string;
}

@ApiBearerAuth()
@ApiTags("platform-tenants")
@Controller("platform/tenants")
@PlatformRoles(PlatformRole.PlatformAdmin, PlatformRole.PlatformReviewer)
export class PlatformTenantsController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tenants: PlatformTenantsService
  ) {}

  @Get()
  async list(@Query() query: ListPlatformTenantsQueryDto) {
    const q = query.q?.trim();
    const tenants = await this.prisma.tenant.findMany({
      where: {
        status: query.status,
        ...(q
          ? {
              OR: [
                { name: { contains: q, mode: "insensitive" } },
                { slug: { contains: q, mode: "insensitive" } }
              ]
            }
          : {})
      },
      select: {
        id: true,
        name: true,
        slug: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        ownershipAssignments: {
          where: {
            effectiveTo: null,
            membership: {
              status: MembershipStatus.ACTIVE,
              user: { isActive: true, accountStatus: "ACTIVE" }
            }
          },
          select: { id: true, membershipId: true }
        }
      },
      orderBy: { createdAt: "desc" },
      take: 100
    });

    return tenants.map(({ ownershipAssignments, ...tenant }) => ({
      ...tenant,
      activeOwnerCount: ownershipAssignments.length
    }));
  }

  @Get(":tenantId/lifecycle")
  lifecycle(@Param("tenantId") tenantId: string) {
    return this.tenants.lifecycle(tenantId);
  }

  @Post(":tenantId/transitions")
  @PlatformRoles(PlatformRole.PlatformAdmin)
  transition(
    @Param("tenantId") tenantId: string,
    @Body() dto: TransitionTenantDto,
    @Req() req: AppRequest
  ) {
    return this.tenants.transition(tenantId, req.user!.userId, dto.toStatus, dto.reason, {
      correlationId: req.correlationId,
      ipAddress: req.ip
    });
  }
}
