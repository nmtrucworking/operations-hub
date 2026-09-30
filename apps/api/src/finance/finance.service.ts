import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { ApprovalStatus, FinanceTransactionStatus, FinanceTransactionType, RequestStatus } from "@prisma/client";
import { AuditAction, ModuleKey } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateFinanceTransactionDto, FinanceDecisionDto, UpdateFinanceTransactionDto } from "./dto";

@Injectable()
export class FinanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  listAccounts(tenantId: string) {
    return this.prisma.financeAccount.findMany({ where: { tenantId, isActive: true }, orderBy: { name: "asc" } });
  }

  async listTransactions(tenantId: string, page = 1, limit = 20) {
    const take = Math.min(Math.max(limit, 1), 100);
    const skip = Math.max(page - 1, 0) * take;
    const where = { tenantId };
    const [items, total] = await Promise.all([
      this.prisma.financeTransaction.findMany({
        where,
        include: {
          account: true,
          createdBy: { select: { id: true, email: true, fullName: true } },
          sourceRequest: { select: { id: true, title: true, status: true } },
          approvals: {
            include: { approverMembership: { include: { user: { select: { id: true, fullName: true, email: true } } } } },
            orderBy: { createdAt: "desc" }
          }
        },
        orderBy: { createdAt: "desc" },
        skip,
        take
      }),
      this.prisma.financeTransaction.count({ where })
    ]);
    return { data: items, meta: { page, limit: take, total } };
  }

  async createTransaction(
    tenantId: string,
    actorId: string,
    membershipId: string,
    dto: CreateFinanceTransactionDto,
    correlationId?: string
  ) {
    const account = await this.prisma.financeAccount.findFirst({ where: { id: dto.accountId, tenantId, isActive: true } });
    if (!account) throw new NotFoundException("Finance account not found");
    if (dto.amount <= 0) throw new BadRequestException("Amount must be greater than zero");
    if (dto.type !== FinanceTransactionType.INCOME && dto.type !== FinanceTransactionType.EXPENSE) {
      throw new BadRequestException("Baseline finance only supports INCOME and EXPENSE transactions");
    }
    if (dto.sourceRequestId) {
      const sourceRequest = await this.prisma.request.findFirst({
        where: { id: dto.sourceRequestId, tenantId, status: RequestStatus.APPROVED },
        select: { id: true }
      });
      if (!sourceRequest) throw new BadRequestException("Source request must be an approved request in this tenant");
    }

    const transaction = await this.prisma.financeTransaction.create({
      data: {
        tenantId,
        accountId: dto.accountId,
        sourceRequestId: dto.sourceRequestId,
        createdById: actorId,
        creatorMembershipId: membershipId,
        type: dto.type,
        amount: dto.amount,
        currency: account.currency,
        category: dto.category,
        description: dto.description,
        occurredAt: dto.occurredAt ? new Date(dto.occurredAt) : undefined,
        status: FinanceTransactionStatus.DRAFT
      }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: ModuleKey.Finance,
      entityId: transaction.id,
      after: transaction,
      correlationId
    });
    return transaction;
  }

  async updateTransaction(
    tenantId: string,
    actorId: string,
    membershipId: string,
    id: string,
    dto: UpdateFinanceTransactionDto,
    correlationId?: string
  ) {
    const before = await this.getTransaction(tenantId, id);
    if (before.status !== FinanceTransactionStatus.DRAFT) {
      throw new BadRequestException("Only draft finance transactions can be edited");
    }
    if (
      (before.creatorMembershipId && before.creatorMembershipId !== membershipId) ||
      (!before.creatorMembershipId && before.createdById !== actorId)
    ) {
      throw new ForbiddenException("Only the transaction creator can edit this draft");
    }
    const updated = await this.prisma.financeTransaction.update({
      where: { id },
      data: {
        description: dto.description,
        category: dto.category,
        occurredAt: dto.occurredAt ? new Date(dto.occurredAt) : undefined
      }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: ModuleKey.Finance,
      entityId: id,
      before,
      after: updated,
      correlationId
    });
    return updated;
  }

  async submit(tenantId: string, actorId: string, membershipId: string, id: string, correlationId?: string) {
    const before = await this.getTransaction(tenantId, id);
    if (before.status !== FinanceTransactionStatus.DRAFT) {
      throw new BadRequestException("Only draft finance transactions can be submitted");
    }
    if (
      (before.creatorMembershipId && before.creatorMembershipId !== membershipId) ||
      (!before.creatorMembershipId && before.createdById !== actorId)
    ) {
      throw new ForbiddenException("Only the transaction creator can submit this transaction");
    }
    const updated = await this.prisma.financeTransaction.update({
      where: { id },
      data: { status: FinanceTransactionStatus.PENDING_APPROVAL }
    });
    await this.auditTransition(tenantId, actorId, before, updated, correlationId);
    return updated;
  }

  async approve(
    tenantId: string,
    actorId: string,
    membershipId: string,
    id: string,
    dto: FinanceDecisionDto,
    correlationId?: string
  ) {
    const before = await this.getTransaction(tenantId, id);
    if (before.status !== FinanceTransactionStatus.PENDING_APPROVAL) {
      throw new BadRequestException("Finance transaction is not awaiting approval");
    }
    this.assertNotSelfApproval(before.creatorMembershipId, membershipId, before.createdById, actorId);

    const updated = await this.prisma.$transaction(async (tx) => {
      const next = await tx.financeTransaction.update({
        where: { id },
        data: { status: FinanceTransactionStatus.APPROVED }
      });
      await tx.transactionApproval.create({
        data: {
          transactionId: id,
          approverMembershipId: membershipId,
          status: ApprovalStatus.APPROVED,
          note: dto.note,
          decidedAt: new Date()
        }
      });
      await tx.financeAccount.update({
        where: { id: before.accountId },
        data: {
          balance:
            before.type === FinanceTransactionType.INCOME
              ? { increment: before.amount }
              : { decrement: before.amount }
        }
      });
      return next;
    });
    await this.auditTransition(tenantId, actorId, before, updated, correlationId);
    return updated;
  }

  async reject(
    tenantId: string,
    actorId: string,
    membershipId: string,
    id: string,
    dto: FinanceDecisionDto,
    correlationId?: string
  ) {
    const before = await this.getTransaction(tenantId, id);
    if (before.status !== FinanceTransactionStatus.PENDING_APPROVAL) {
      throw new BadRequestException("Finance transaction is not awaiting approval");
    }
    this.assertNotSelfApproval(before.creatorMembershipId, membershipId, before.createdById, actorId);
    const updated = await this.prisma.$transaction(async (tx) => {
      const next = await tx.financeTransaction.update({
        where: { id },
        data: { status: FinanceTransactionStatus.REJECTED }
      });
      await tx.transactionApproval.create({
        data: {
          transactionId: id,
          approverMembershipId: membershipId,
          status: ApprovalStatus.REJECTED,
          note: dto.note,
          decidedAt: new Date()
        }
      });
      return next;
    });
    await this.auditTransition(tenantId, actorId, before, updated, correlationId);
    return updated;
  }

  private async getTransaction(tenantId: string, id: string) {
    const transaction = await this.prisma.financeTransaction.findFirst({ where: { id, tenantId } });
    if (!transaction) throw new NotFoundException("Finance transaction not found");
    return transaction;
  }

  private assertNotSelfApproval(
    creatorMembershipId: string | null,
    membershipId: string,
    creatorId: string,
    actorId: string
  ) {
    if ((creatorMembershipId && creatorMembershipId === membershipId) || (!creatorMembershipId && creatorId === actorId)) {
      throw new ForbiddenException("A member cannot approve or reject their own finance transaction");
    }
  }

  private async auditTransition(
    tenantId: string,
    actorId: string,
    before: Awaited<ReturnType<FinanceService["getTransaction"]>>,
    after: Awaited<ReturnType<PrismaService["financeTransaction"]["update"]>>,
    correlationId?: string
  ) {
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: ModuleKey.Finance,
      entityId: before.id,
      message: `${before.status} -> ${after.status}`,
      before,
      after,
      correlationId
    });
  }
}
