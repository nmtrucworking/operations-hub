import { describe, expect, it } from "vitest";
import { PasswordService } from "../src/auth/password.service";

describe("PasswordService", () => {
  it("hashes passwords without preserving plain text", async () => {
    const service = new PasswordService();
    const hash = await service.hash("Password123!");

    expect(hash).not.toContain("Password123!");
    await expect(service.verify("Password123!", hash)).resolves.toBe(true);
    await expect(service.verify("wrong-password", hash)).resolves.toBe(false);
  });
});
