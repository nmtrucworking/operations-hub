import { Injectable } from "@nestjs/common";
import { AuditAction, AuditResult } from "@operations-hub/shared";
import { PrismaService } from "../prisma/prisma.service";

export type AuditInput = {
  tenantId?: string;
  actorId?: string;
  action: AuditAction;
  result?: AuditResult;
  entityType?: string;
  entityId?: string;
  message?: string;
  before?: unknown;
  after?: unknown;
  correlationId?: string;
  ipAddress?: string;
};

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  write(input: AuditInput) {
    return this.prisma.auditLog.create({
      data: {
        tenantId: input.tenantId,
        actorId: input.actorId,
        action: input.action,
        result: input.result ?? AuditResult.Success,
        entityType: input.entityType,
        entityId: input.entityId,
        message: input.message,
        before: input.before === undefined ? undefined : (input.before as object),
        after: input.after === undefined ? undefined : (input.after as object),
        correlationId: input.correlationId,
        ipAddress: input.ipAddress
      }
    });
  }
}
