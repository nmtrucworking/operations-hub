import { Injectable, NotFoundException } from "@nestjs/common";
import { AuditAction, ModuleKey } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRequestDto, UpdateRequestDto } from "./dto";

@Injectable()
export class RequestsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  async list(tenantId: string, page = 1, limit = 20) {
    const take = Math.min(limit, 100);
    const skip = Math.max(page - 1, 0) * take;
    const where = { tenantId };
    const [items, total] = await Promise.all([
      this.prisma.request.findMany({
        where,
        include: { creator: { select: { id: true, email: true, fullName: true } }, type: true },
        orderBy: { createdAt: "desc" },
        skip,
        take
      }),
      this.prisma.request.count({ where })
    ]);
    return { data: items, meta: { page, limit: take, total } };
  }

  async create(tenantId: string, actorId: string, dto: CreateRequestDto, correlationId?: string) {
    const request = await this.prisma.request.create({
      data: {
        tenantId,
        creatorId: actorId,
        title: dto.title,
        description: dto.description,
        typeId: dto.typeId,
        status: "SUBMITTED"
      }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: ModuleKey.Requests,
      entityId: request.id,
      after: request,
      correlationId
    });
    return request;
  }

  async update(tenantId: string, actorId: string, id: string, dto: UpdateRequestDto, correlationId?: string) {
    const before = await this.prisma.request.findFirst({ where: { id, tenantId } });
    if (!before) throw new NotFoundException("Request not found");
    const updated = await this.prisma.request.update({ where: { id }, data: dto });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: ModuleKey.Requests,
      entityId: id,
      before,
      after: updated,
      correlationId
    });
    return updated;
  }
}
