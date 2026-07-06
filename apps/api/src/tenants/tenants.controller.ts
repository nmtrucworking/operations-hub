import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PERMISSIONS } from "@operations-hub/shared";
import { PrismaService } from "../prisma/prisma.service";
import { CurrentUser } from "../shared/decorators/current-user.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AuthUser } from "../shared/request-context";

@ApiBearerAuth()
@ApiTags("tenants")
@Controller("tenants")
export class TenantsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list(@CurrentUser() user: AuthUser) {
    const memberships = await this.prisma.membership.findMany({
      where: { userId: user.userId, status: "ACTIVE", tenant: { status: "ACTIVE" } },
      include: { tenant: true },
      orderBy: { tenant: { name: "asc" } }
    });
    return memberships.map((membership) => ({
      membershipId: membership.id,
      tenant: membership.tenant,
      status: membership.status
    }));
  }

  @Get("current")
  @Permissions(PERMISSIONS.tenantRead)
  current(@TenantId() tenantId: string) {
    return this.prisma.tenant.findUniqueOrThrow({
      where: { id: tenantId },
      include: { modules: true }
    });
  }
}
