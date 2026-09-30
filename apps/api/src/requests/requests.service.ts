import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { ApprovalStatus, RequestStatus } from "@prisma/client";
import { AuditAction, ModuleKey } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRequestDto, CreateRequestTypeDto, RequestDecisionDto, UpdateRequestDto } from "./dto";

@Injectable()
export class RequestsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  async list(tenantId: string, page = 1, limit = 20) {
    const take = Math.min(Math.max(limit, 1), 100);
    const skip = Math.max(page - 1, 0) * take;
    const where = { tenantId };
    const [items, total] = await Promise.all([
      this.prisma.request.findMany({
        where,
        include: {
          creator: { select: { id: true, email: true, fullName: true } },
          type: true,
          approvals: {
            include: { membership: { include: { user: { select: { id: true, fullName: true, email: true } } } } },
            orderBy: { createdAt: "desc" }
          },
          statusHistory: { orderBy: { changedAt: "asc" } }
        },
        orderBy: { createdAt: "desc" },
        skip,
        take
      }),
      this.prisma.request.count({ where })
    ]);
    return { data: items, meta: { page, limit: take, total } };
  }

  listTypes(tenantId: string) {
    return this.prisma.requestType.findMany({ where: { tenantId, isActive: true }, orderBy: { name: "asc" } });
  }

  async createType(tenantId: string, actorId: string, dto: CreateRequestTypeDto, correlationId?: string) {
    const created = await this.prisma.requestType.create({ data: { tenantId, name: dto.name } });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: "RequestType",
      entityId: created.id,
      after: created,
      correlationId
    });
    return created;
  }

  async create(
    tenantId: string,
    actorId: string,
    membershipId: string,
    dto: CreateRequestDto,
    correlationId?: string
  ) {
    await this.assertTypeBelongsToTenant(tenantId, dto.typeId);
    const request = await this.prisma.request.create({
      data: {
        tenantId,
        creatorId: actorId,
        creatorMembershipId: membershipId,
        title: dto.title,
        description: dto.description,
        typeId: dto.typeId,
        status: RequestStatus.DRAFT,
        statusHistory: { create: { toStatus: RequestStatus.DRAFT, changedByMembershipId: membershipId } }
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

  async update(
    tenantId: string,
    actorId: string,
    membershipId: string,
    id: string,
    dto: UpdateRequestDto,
    correlationId?: string
  ) {
    const before = await this.getRequest(tenantId, id);
    if (before.status !== RequestStatus.DRAFT) throw new BadRequestException("Only draft requests can be edited");
    if (
      (before.creatorMembershipId && before.creatorMembershipId !== membershipId) ||
      (!before.creatorMembershipId && before.creatorId !== actorId)
    ) {
      throw new ForbiddenException("Only the request creator can edit this draft");
    }
    await this.assertTypeBelongsToTenant(tenantId, dto.typeId);
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

  async submit(tenantId: string, actorId: string, membershipId: string, id: string, correlationId?: string) {
    const before = await this.getRequest(tenantId, id);
    if (before.status !== RequestStatus.DRAFT) throw new BadRequestException("Only draft requests can be submitted");
    if (
      (before.creatorMembershipId && before.creatorMembershipId !== membershipId) ||
      (!before.creatorMembershipId && before.creatorId !== actorId)
    ) {
      throw new ForbiddenException("Only the request creator can submit this request");
    }
    return this.transition(tenantId, actorId, membershipId, before, RequestStatus.SUBMITTED, undefined, correlationId);
  }

  async startReview(tenantId: string, actorId: string, membershipId: string, id: string, correlationId?: string) {
    const before = await this.getRequest(tenantId, id);
    if (before.status !== RequestStatus.SUBMITTED) throw new BadRequestException("Only submitted requests can enter review");
    this.assertNotSelfApproval(before.creatorMembershipId, membershipId, before.creatorId, actorId);
    return this.transition(tenantId, actorId, membershipId, before, RequestStatus.IN_REVIEW, undefined, correlationId);
  }

  async approve(
    tenantId: string,
    actorId: string,
    membershipId: string,
    id: string,
    dto: RequestDecisionDto,
    correlationId?: string
  ) {
    const before = await this.getRequest(tenantId, id);
    if (before.status !== RequestStatus.SUBMITTED && before.status !== RequestStatus.IN_REVIEW) {
      throw new BadRequestException("Request is not awaiting approval");
    }
    this.assertNotSelfApproval(before.creatorMembershipId, membershipId, before.creatorId, actorId);
    return this.transition(
      tenantId,
      actorId,
      membershipId,
      before,
      RequestStatus.APPROVED,
      { status: ApprovalStatus.APPROVED, note: dto.note },
      correlationId
    );
  }

  async reject(
    tenantId: string,
    actorId: string,
    membershipId: string,
    id: string,
    dto: RequestDecisionDto,
    correlationId?: string
  ) {
    const before = await this.getRequest(tenantId, id);
    if (before.status !== RequestStatus.SUBMITTED && before.status !== RequestStatus.IN_REVIEW) {
      throw new BadRequestException("Request is not awaiting approval");
    }
    this.assertNotSelfApproval(before.creatorMembershipId, membershipId, before.creatorId, actorId);
    return this.transition(
      tenantId,
      actorId,
      membershipId,
      before,
      RequestStatus.REJECTED,
      { status: ApprovalStatus.REJECTED, note: dto.note },
      correlationId
    );
  }

  async cancel(tenantId: string, actorId: string, membershipId: string, id: string, correlationId?: string) {
    const before = await this.getRequest(tenantId, id);
    if (
      before.status !== RequestStatus.DRAFT &&
      before.status !== RequestStatus.SUBMITTED &&
      before.status !== RequestStatus.IN_REVIEW
    ) {
      throw new BadRequestException("Request can no longer be cancelled");
    }
    if (
      (before.creatorMembershipId && before.creatorMembershipId !== membershipId) ||
      (!before.creatorMembershipId && before.creatorId !== actorId)
    ) {
      throw new ForbiddenException("Only the request creator can cancel this request");
    }
    return this.transition(tenantId, actorId, membershipId, before, RequestStatus.CANCELLED, undefined, correlationId);
  }

  async complete(tenantId: string, actorId: string, membershipId: string, id: string, correlationId?: string) {
    const before = await this.getRequest(tenantId, id);
    if (before.status !== RequestStatus.APPROVED) {
      throw new BadRequestException("Only approved requests can be completed");
    }
    return this.transition(tenantId, actorId, membershipId, before, RequestStatus.COMPLETED, undefined, correlationId);
  }

  private async transition(
    tenantId: string,
    actorId: string,
    membershipId: string,
    before: Awaited<ReturnType<RequestsService["getRequest"]>>,
    toStatus: RequestStatus,
    approval: { status: ApprovalStatus; note?: string } | undefined,
    correlationId?: string
  ) {
    const updated = await this.prisma.$transaction(async (tx) => {
      const next = await tx.request.update({ where: { id: before.id }, data: { status: toStatus } });
      await tx.requestStatusHistory.create({
        data: { requestId: before.id, fromStatus: before.status, toStatus, changedByMembershipId: membershipId }
      });
      if (approval) {
        await tx.requestApproval.create({
          data: {
            requestId: before.id,
            membershipId,
            status: approval.status,
            note: approval.note,
            decidedAt: new Date()
          }
        });
      }
      return next;
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: ModuleKey.Requests,
      entityId: before.id,
      message: `${before.status} -> ${toStatus}`,
      before,
      after: updated,
      correlationId
    });
    return updated;
  }

  private async getRequest(tenantId: string, id: string) {
    const request = await this.prisma.request.findFirst({ where: { id, tenantId } });
    if (!request) throw new NotFoundException("Request not found");
    return request;
  }

  private async assertTypeBelongsToTenant(tenantId: string, typeId?: string) {
    if (!typeId) return;
    const type = await this.prisma.requestType.findFirst({ where: { id: typeId, tenantId, isActive: true } });
    if (!type) throw new NotFoundException("Request type not found");
  }

  private assertNotSelfApproval(
    creatorMembershipId: string | null,
    membershipId: string,
    creatorId: string,
    actorId: string
  ) {
    if ((creatorMembershipId && creatorMembershipId === membershipId) || (!creatorMembershipId && creatorId === actorId)) {
      throw new ForbiddenException("A member cannot approve or reject their own request");
    }
  }
}
