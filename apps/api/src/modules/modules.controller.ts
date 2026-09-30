import { BadRequestException, Body, Controller, Get, Patch, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";
import { AuditAction, MODULES, PERMISSIONS } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";

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
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  @Get()
  @Permissions(PERMISSIONS.moduleRead)
  async list(@TenantId() tenantId: string) {
    const tenantModules = await this.prisma.tenantModule.findMany({ where: { tenantId } });
    return MODULES.map((module) => ({
      ...module,
      isEnabled: tenantModules.find((item) => item.key === module.key)?.isEnabled ?? false
    }));
  }

  @Patch()
  @Permissions(PERMISSIONS.moduleManage)
  async toggle(@TenantId() tenantId: string, @Body() dto: ToggleModuleDto, @Req() req: AppRequest) {
    const moduleDefinition = MODULES.find((module) => module.key === dto.key);
    if (!moduleDefinition) {
      throw new BadRequestException(`Unknown module key: ${dto.key}`);
    }
    const before = await this.prisma.tenantModule.findUnique({
      where: { tenantId_key: { tenantId, key: dto.key } }
    });
    const updated = await this.prisma.tenantModule.upsert({
      where: { tenantId_key: { tenantId, key: dto.key } },
      create: {
        tenantId,
        key: dto.key,
        isEnabled: dto.isEnabled,
        status: dto.isEnabled ? "ENABLED" : "DISABLED",
        enabledAt: dto.isEnabled ? new Date() : null,
        disabledAt: dto.isEnabled ? null : new Date()
      },
      update: {
        isEnabled: dto.isEnabled,
        status: dto.isEnabled ? "ENABLED" : "DISABLED",
        enabledAt: dto.isEnabled ? new Date() : undefined,
        disabledAt: dto.isEnabled ? null : new Date()
      }
    });
    await this.audit.write({
      tenantId,
      actorId: req.user!.userId,
      action: AuditAction.Update,
      entityType: "TenantModule",
      entityId: updated.id,
      before,
      after: updated,
      correlationId: req.correlationId,
      ipAddress: req.ip
    });
    return updated;
  }
}
