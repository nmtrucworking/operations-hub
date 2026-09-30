import { Injectable } from "@nestjs/common";
import { FinanceTransactionStatus, FinanceTransactionType, RequestStatus } from "@prisma/client";
import { ModuleKey } from "@operations-hub/shared";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async summary(tenantId: string) {
    const modules = await this.prisma.tenantModule.findMany({
      where: { tenantId },
      select: { key: true, isEnabled: true }
    });
    const enabled = new Set(modules.filter((module) => module.isEnabled).map((module) => module.key));
    const monthStart = new Date();
    monthStart.setUTCDate(1);
    monthStart.setUTCHours(0, 0, 0, 0);

    const [organization, requests, finance, meetings, recentAudit, metrics] = await Promise.all([
      this.organizationSummary(tenantId),
      enabled.has(ModuleKey.Requests) ? this.requestSummary(tenantId, monthStart) : null,
      enabled.has(ModuleKey.Finance) ? this.financeSummary(tenantId, monthStart) : null,
      enabled.has(ModuleKey.Meetings) ? this.meetingSummary(tenantId, monthStart) : null,
      enabled.has(ModuleKey.Audit)
        ? this.prisma.auditLog.findMany({
            where: { tenantId },
            include: { actor: { select: { id: true, fullName: true, email: true } } },
            orderBy: { createdAt: "desc" },
            take: 8
          })
        : [],
      this.prisma.dashboardMetric.findMany({ where: { tenantId }, orderBy: { label: "asc" } })
    ]);

    const cards = [
      { key: "activeMembers", label: "Active members", value: organization.activeMembers },
      { key: "organizationUnits", label: "Organization units", value: organization.units },
      ...(requests ? [{ key: "pendingRequests", label: "Pending requests", value: requests.pending }] : []),
      ...(finance ? [{ key: "currentBalance", label: "Current balance", value: finance.currentBalance }] : []),
      ...(meetings ? [{ key: "meetingsThisMonth", label: "Meetings this month", value: meetings.count }] : [])
    ];

    return {
      enabledModules: modules.reduce<Record<string, boolean>>((result, module) => {
        result[module.key] = module.isEnabled;
        return result;
      }, {}),
      cards,
      sections: { organization, requests, finance, meetings, recentAudit },
      metrics
    };
  }

  private async organizationSummary(tenantId: string) {
    const [activeMembers, units, positions, pendingInvitations] = await Promise.all([
      this.prisma.membership.count({ where: { tenantId, status: "ACTIVE" } }),
      this.prisma.organizationUnit.count({ where: { tenantId, status: "ACTIVE" } }),
      this.prisma.position.count({ where: { tenantId, status: "ACTIVE" } }),
      this.prisma.membershipInvitation.count({ where: { tenantId, status: "PENDING" } })
    ]);
    return { activeMembers, units, positions, pendingInvitations };
  }

  private async requestSummary(tenantId: string, monthStart: Date) {
    const [pending, approvedThisMonth, rejected, completed] = await Promise.all([
      this.prisma.request.count({
        where: { tenantId, status: { in: [RequestStatus.SUBMITTED, RequestStatus.IN_REVIEW] } }
      }),
      this.prisma.requestStatusHistory.count({
        where: { request: { tenantId }, toStatus: RequestStatus.APPROVED, changedAt: { gte: monthStart } }
      }),
      this.prisma.request.count({ where: { tenantId, status: RequestStatus.REJECTED } }),
      this.prisma.request.findMany({
        where: { tenantId, status: { in: [RequestStatus.APPROVED, RequestStatus.REJECTED] } },
        select: { createdAt: true, updatedAt: true },
        take: 200,
        orderBy: { updatedAt: "desc" }
      })
    ]);
    const averageProcessingHours = completed.length
      ? Math.round(
          (completed.reduce((total, item) => total + (item.updatedAt.getTime() - item.createdAt.getTime()), 0) /
            completed.length /
            3_600_000) *
            10
        ) / 10
      : 0;
    return { pending, approvedThisMonth, rejected, averageProcessingHours };
  }

  private async financeSummary(tenantId: string, monthStart: Date) {
    const finalized = [FinanceTransactionStatus.APPROVED, FinanceTransactionStatus.RECORDED];
    const [balances, income, expense, pendingApproval] = await Promise.all([
      this.prisma.financeAccount.aggregate({ where: { tenantId, isActive: true }, _sum: { balance: true } }),
      this.prisma.financeTransaction.aggregate({
        where: {
          tenantId,
          type: FinanceTransactionType.INCOME,
          status: { in: finalized },
          updatedAt: { gte: monthStart }
        },
        _sum: { amount: true }
      }),
      this.prisma.financeTransaction.aggregate({
        where: {
          tenantId,
          type: FinanceTransactionType.EXPENSE,
          status: { in: finalized },
          updatedAt: { gte: monthStart }
        },
        _sum: { amount: true }
      }),
      this.prisma.financeTransaction.count({
        where: { tenantId, status: FinanceTransactionStatus.PENDING_APPROVAL }
      })
    ]);
    return {
      currentBalance: Number(balances._sum.balance ?? 0),
      incomeThisMonth: Number(income._sum.amount ?? 0),
      expenseThisMonth: Number(expense._sum.amount ?? 0),
      pendingApproval
    };
  }

  private async meetingSummary(tenantId: string, monthStart: Date) {
    const [count, attendance] = await Promise.all([
      this.prisma.meeting.count({ where: { tenantId, startAt: { gte: monthStart } } }),
      this.prisma.attendanceRecord.groupBy({
        by: ["status"],
        where: { meeting: { tenantId, startAt: { gte: monthStart } } },
        _count: { _all: true }
      })
    ]);
    const counts = attendance.reduce<Record<string, number>>((result, row) => {
      result[row.status] = row._count._all;
      return result;
    }, {});
    const total = Object.values(counts).reduce((sum, value) => sum + value, 0);
    const rate = (status: string) => (total ? Math.round(((counts[status] ?? 0) / total) * 1000) / 10 : 0);
    return {
      count,
      attendanceRate: rate("PRESENT"),
      lateRate: rate("LATE"),
      absenceRate: rate("ABSENT"),
      excusedRate: rate("EXCUSED")
    };
  }
}
