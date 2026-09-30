ALTER TYPE "RequestStatus" ADD VALUE IF NOT EXISTS 'COMPLETED';
ALTER TYPE "FinanceTransactionStatus" ADD VALUE IF NOT EXISTS 'REJECTED';

ALTER TABLE "FinanceTransaction" ADD COLUMN "sourceRequestId" TEXT;
CREATE INDEX "FinanceTransaction_sourceRequestId_idx" ON "FinanceTransaction"("sourceRequestId");
ALTER TABLE "FinanceTransaction"
  ADD CONSTRAINT "FinanceTransaction_sourceRequestId_fkey"
  FOREIGN KEY ("sourceRequestId") REFERENCES "Request"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Meeting"
  ADD COLUMN "description" TEXT,
  ADD COLUMN "location" TEXT,
  ADD COLUMN "createdByMembershipId" TEXT;
CREATE INDEX "Meeting_createdByMembershipId_idx" ON "Meeting"("createdByMembershipId");
ALTER TABLE "Meeting"
  ADD CONSTRAINT "Meeting_createdByMembershipId_fkey"
  FOREIGN KEY ("createdByMembershipId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "AttendanceRecord" ADD COLUMN "markedByMembershipId" TEXT;
CREATE INDEX "AttendanceRecord_markedByMembershipId_idx" ON "AttendanceRecord"("markedByMembershipId");
ALTER TABLE "AttendanceRecord"
  ADD CONSTRAINT "AttendanceRecord_markedByMembershipId_fkey"
  FOREIGN KEY ("markedByMembershipId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;
