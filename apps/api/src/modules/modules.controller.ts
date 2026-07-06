import { Body, Controller, Get, Patch } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";
import { MODULES, PERMISSIONS } from "@operations-hub/shared";
import { PrismaService } from "../prisma/prisma.service";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";

class ToggleModuleDto {
  @IsString()
  key!: string;

  @IsBoolean()
  isEnabled!: boolean;
}

@ApiBearerAuth()
@ApiTags("modules")
@Controller("modules")
export class ModulesController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Permissions(PERMISSIONS.tenantRead)
  async list(@TenantId() tenantId: string) {
    const tenantModules = await this.prisma.tenantModule.findMany({ where: { tenantId } });
    return MODULES.map((module) => ({
      ...module,
      isEnabled: tenantModules.find((item) => item.key === module.key)?.isEnabled ?? false
    }));
  }

  @Patch()
  @Permissions(PERMISSIONS.roleManage)
  toggle(@TenantId() tenantId: string, @Body() dto: ToggleModuleDto) {
    return this.prisma.tenantModule.upsert({
      where: { tenantId_key: { tenantId, key: dto.key } },
      create: { tenantId, key: dto.key, isEnabled: dto.isEnabled },
      update: { isEnabled: dto.isEnabled }
    });
  }
}
