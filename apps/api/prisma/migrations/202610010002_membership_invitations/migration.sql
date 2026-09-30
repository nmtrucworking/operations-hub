ALTER TABLE "MembershipInvitation"
ADD COLUMN "fullName" TEXT,
ADD COLUMN "title" TEXT,
ADD COLUMN "studentCode" TEXT,
ADD COLUMN "phone" TEXT,
ADD COLUMN "targetUnitId" TEXT,
ADD COLUMN "targetPositionId" TEXT,
ADD COLUMN "declinedAt" TIMESTAMP(3),
ADD COLUMN "revokedAt" TIMESTAMP(3);

UPDATE "MembershipInvitation"
SET "fullName" = COALESCE(NULLIF(split_part("email", '@', 1), ''), 'Invited member')
WHERE "fullName" IS NULL;

ALTER TABLE "MembershipInvitation" ALTER COLUMN "fullName" SET NOT NULL;

CREATE UNIQUE INDEX "MembershipInvitation_tokenHash_key" ON "MembershipInvitation"("tokenHash");
CREATE INDEX "MembershipInvitation_tenantId_email_status_idx" ON "MembershipInvitation"("tenantId", "email", "status");
