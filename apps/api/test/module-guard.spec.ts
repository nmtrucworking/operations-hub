import { ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { describe, expect, it, vi } from "vitest";
import { ModuleKey } from "@operations-hub/shared";
import { MODULE_KEY } from "../src/shared/decorators/module.decorator";
import { ModuleGuard } from "../src/shared/guards/module.guard";

describe("ModuleGuard", () => {
  it("rejects disabled tenant modules", async () => {
    const reflector = {
      getAllAndOverride: vi.fn((key: string) => (key === MODULE_KEY ? ModuleKey.Finance : false))
    } as unknown as Reflector;
    const prisma = {
      tenantModule: {
        findUnique: vi.fn().mockResolvedValue({ isEnabled: false })
      }
    };
    const guard = new ModuleGuard(reflector, prisma as never);
    const context = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: () => ({ getRequest: () => ({ tenantId: "tenant-1" }) })
    } as unknown as ExecutionContext;

    await expect(guard.canActivate(context)).rejects.toBeInstanceOf(ForbiddenException);
  });
});
