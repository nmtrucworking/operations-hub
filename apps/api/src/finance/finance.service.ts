import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { AuditAction, ModuleKey } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateFinanceTransactionDto, UpdateFinanceTransactionDto } from "./dto";

@Injectable()
export class FinanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  async listAccounts(tenantId: string) {
    return this.prisma.financeAccount.findMany({ where: { tenantId, isActive: true }, orderBy: { name: "asc" } });
  }

  async listTransactions(tenantId: string, page = 1, limit = 20) {
    const take = Math.min(limit, 100);
    const skip = Math.max(page - 1, 0) * take;
    const where = { tenantId };
    const [items, total] = await Promise.all([
      this.prisma.financeTransaction.findMany({
        where,
        include: { account: true, createdBy: { select: { id: true, email: true, fullName: true } } },
        orderBy: { createdAt: "desc" },
        skip,
        take
      }),
      this.prisma.financeTransaction.count({ where })
    ]);
    return { data: items, meta: { page, limit: take, total } };
  }

  async createTransaction(tenantId: string, actorId: string, dto: CreateFinanceTransactionDto, correlationId?: string) {
    const account = await this.prisma.financeAccount.findFirst({ where: { id: dto.accountId, tenantId } });
    if (!account) throw new NotFoundException("Finance account not found");
    if (dto.amount <= 0) throw new BadRequestException("Amount must be greater than zero");
    const transaction = await this.prisma.financeTransaction.create({
      data: {
        tenantId,
        accountId: dto.accountId,
        createdById: actorId,
        type: dto.type,
        amount: dto.amount,
        currency: account.currency,
        category: dto.category,
        description: dto.description,
        status: "PENDING_APPROVAL"
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
    id: string,
    dto: UpdateFinanceTransactionDto,
    correlationId?: string
  ) {
    const before = await this.prisma.financeTransaction.findFirst({ where: { id, tenantId } });
    if (!before) throw new NotFoundException("Finance transaction not found");
    const updated = await this.prisma.financeTransaction.update({ where: { id }, data: dto });
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
}
