import { Injectable, ServiceUnavailableException } from "@nestjs/common";
import { resolveTxt } from "node:dns/promises";

@Injectable()
export class DnsVerificationProvider {
  async hasTxtRecord(recordName: string, expectedValue: string) {
    try {
      const records = await resolveTxt(recordName);
      return records.some((parts) => parts.join("") === expectedValue);
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code;
      if (code === "ENODATA" || code === "ENOTFOUND" || code === "ESERVFAIL") return false;
      throw new ServiceUnavailableException("DNS verification service is temporarily unavailable");
    }
  }
}
