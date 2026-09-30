import { BadRequestException, ForbiddenException, NotFoundException } from "@nestjs/common";
import { FinanceTransactionType, RequestStatus } from "@prisma/client";
import { describe, expect, it, vi } from "vitest";
import { FinanceService } from "../src/finance/finance.service";
import { MeetingsService } from "../src/meetings/meetings.service";
import { RequestsService } from "../src/requests/requests.service";

describe("operations workflow invariants", () => {
  it("prevents a request creator from approving their own request", async () => {
    const prisma = {
      request: {
        findFirst: vi.fn().mockResolvedValue({
          id: "request-1",
          tenantId: "tenant-1",
          creatorId: "user-1",
          creatorMembershipId: "membership-1",
          status: RequestStatus.SUBMITTED
        })
      }
    };
    const service = new RequestsService(prisma as never, { write: vi.fn() } as never);

    await expect(
      service.approve("tenant-1", "user-1", "membership-1", "request-1", {})
    ).rejects.toBeInstanceOf(ForbiddenException);
  });

  it("prevents legacy requests without creatorMembershipId from bypassing self-approval", async () => {
    const prisma = {
      request: {
        findFirst: vi.fn().mockResolvedValue({
          id: "legacy-request",
          tenantId: "tenant-1",
          creatorId: "user-1",
          creatorMembershipId: null,
          status: RequestStatus.SUBMITTED
        })
      }
    };
    const service = new RequestsService(prisma as never, { write: vi.fn() } as never);

    await expect(
      service.approve("tenant-1", "user-1", "membership-1", "legacy-request", {})
    ).rejects.toBeInstanceOf(ForbiddenException);
  });

  it("rejects finance linkage to a request that is not approved in the same tenant", async () => {
    const prisma = {
      financeAccount: {
        findFirst: vi.fn().mockResolvedValue({ id: "account-1", tenantId: "tenant-1", currency: "VND" })
      },
      request: { findFirst: vi.fn().mockResolvedValue(null) },
      financeTransaction: { create: vi.fn() }
    };
    const service = new FinanceService(prisma as never, { write: vi.fn() } as never);

    await expect(
      service.createTransaction(
        "tenant-1",
        "user-1",
        "membership-1",
        {
          accountId: "account-1",
          type: FinanceTransactionType.EXPENSE,
          amount: 100_000,
          category: "Event",
          sourceRequestId: "request-other-tenant"
        }
      )
    ).rejects.toBeInstanceOf(BadRequestException);
    expect(prisma.financeTransaction.create).not.toHaveBeenCalled();
  });

  it("snapshots only active members in the scheduled meeting unit", async () => {
    const tx = {
      meetingParticipant: { createMany: vi.fn() },
      meeting: { update: vi.fn().mockResolvedValue({ id: "meeting-1", status: "SCHEDULED" }) }
    };
    const prisma = {
      meeting: {
        findFirst: vi.fn().mockResolvedValue({ id: "meeting-1", tenantId: "tenant-1", unitId: "unit-1", status: "DRAFT" })
      },
      membership: { findMany: vi.fn().mockResolvedValue([]) },
      $transaction: vi.fn(async (callback: (client: typeof tx) => unknown) => callback(tx))
    };
    const service = new MeetingsService(prisma as never, { write: vi.fn().mockResolvedValue(undefined) } as never);

    await service.schedule("tenant-1", "user-1", "meeting-1");

    expect(prisma.membership.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          tenantId: "tenant-1",
          membershipUnits: { some: { unitId: "unit-1", effectiveTo: null } }
        })
      })
    );
  });

  it("does not allow attendance access through a meeting outside the tenant", async () => {
    const prisma = { meeting: { findFirst: vi.fn().mockResolvedValue(null) } };
    const service = new MeetingsService(prisma as never, { write: vi.fn() } as never);

    await expect(
      service.markAttendance(
        "tenant-a",
        "user-a",
        "marker-membership-a",
        "meeting-b",
        "membership-b",
        { status: "PRESENT" }
      )
    ).rejects.toBeInstanceOf(NotFoundException);
  });
});
