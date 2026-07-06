import { Controller, Get, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PERMISSIONS } from "@operations-hub/shared";
import { PrismaService } from "../prisma/prisma.service";
import { Permissions } from "../shared/decorators/permissions.decorator";

@ApiBearerAuth()
@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Permissions(PERMISSIONS.userRead)
  async list(@Query("page") page = "1", @Query("limit") limit = "20") {
    const take = Math.min(Number(limit) || 20, 100);
    const skip = Math.max((Number(page) || 1) - 1, 0) * take;
    const select = {
      id: true,
      email: true,
      fullName: true,
      isActive: true,
      isVerified: true,
      platformRole: true,
      createdAt: true
    };
    const [items, total] = await Promise.all([
      this.prisma.user.findMany({ select, orderBy: { createdAt: "desc" }, skip, take }),
      this.prisma.user.count()
    ]);
    return { data: items, meta: { page: Number(page) || 1, limit: take, total } };
  }
}
