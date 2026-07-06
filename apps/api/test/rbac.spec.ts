import { describe, expect, it, vi } from "vitest";
import { PERMISSIONS } from "@operations-hub/shared";
import { RbacService } from "../src/rbac/rbac.service";

describe("RbacService", () => {
  it("requires every requested permission to be present", async () => {
    const prisma = {
      membershipRole: {
        findMany: vi.fn().mockResolvedValue([
          {
            role: {
              permissions: [
                { permission: { code: PERMISSIONS.memberRead } },
                { permission: { code: PERMISSIONS.dashboardRead } }
              ]
            }
          }
        ])
      }
    };
    const service = new RbacService(prisma as never, { write: vi.fn() } as never);

    await expect(service.hasAllPermissions("membership-1", [PERMISSIONS.memberRead])).resolves.toBe(true);
    await expect(
      service.hasAllPermissions("membership-1", [PERMISSIONS.memberRead, PERMISSIONS.financeRead])
    ).resolves.toBe(false);
  });
});
