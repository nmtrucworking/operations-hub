-- CreateEnum
CREATE TYPE "ServiceSubscriptionStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TenantClosureStatus" AS ENUM ('REQUESTED', 'CANCELLED', 'APPROVED', 'PROCESSING', 'COMPLETED', 'REJECTED');

-- CreateEnum
CREATE TYPE "TenantDataExportStatus" AS ENUM ('REQUESTED', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TenantSupportRequestStatus" AS ENUM ('OPEN', 'APPROVED', 'REJECTED', 'CLOSED');

-- CreateEnum
CREATE TYPE "DomainVerificationChallengeStatus" AS ENUM ('PENDING', 'VERIFIED', 'EXPIRED', 'REVOKED');

-- CreateTable
CREATE TABLE "DomainVerificationChallenge" (
    "id" TEXT NOT NULL,
    "customDomainId" TEXT NOT NULL,
    "recordName" TEXT NOT NULL,
    "expectedValue" TEXT NOT NULL,
    "status" "DomainVerificationChallengeStatus" NOT NULL DEFAULT 'PENDING',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DomainVerificationChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServicePlan" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "priceAmount" DECIMAL(18,2),
    "currency" TEXT,
    "billingInterval" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServicePlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServicePlanLimit" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "metricKey" TEXT NOT NULL,
    "maxValue" INTEGER NOT NULL,
    "unit" TEXT NOT NULL DEFAULT 'count',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServicePlanLimit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantServiceSubscription" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "status" "ServiceSubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
    "serviceContactEmail" TEXT,
    "billingContactEmail" TEXT,
    "startsAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endsAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantServiceSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantUsageCounter" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "metricKey" TEXT NOT NULL,
    "periodKey" TEXT NOT NULL DEFAULT 'lifetime',
    "usedValue" INTEGER NOT NULL DEFAULT 0,
    "measuredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantUsageCounter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantRetentionPolicy" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "gracePeriodDays" INTEGER NOT NULL DEFAULT 30,
    "retentionDays" INTEGER NOT NULL DEFAULT 90,
    "disposition" TEXT NOT NULL DEFAULT 'ANONYMIZE',
    "exportBeforeDisposition" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantRetentionPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantClosureRequest" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "requestedByMembershipId" TEXT NOT NULL,
    "cancelledByMembershipId" TEXT,
    "decidedByUserId" TEXT,
    "status" "TenantClosureStatus" NOT NULL DEFAULT 'REQUESTED',
    "reason" TEXT NOT NULL,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "scheduledFor" TIMESTAMP(3) NOT NULL,
    "cancelledAt" TIMESTAMP(3),
    "decidedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantClosureRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantDataExportRequest" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "requestedByMembershipId" TEXT NOT NULL,
    "closureRequestId" TEXT,
    "status" "TenantDataExportStatus" NOT NULL DEFAULT 'REQUESTED',
    "format" TEXT NOT NULL DEFAULT 'JSON',
    "storageRef" TEXT,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantDataExportRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantSupportRequest" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "requestedByMembershipId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "requestedScopes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "requestedDurationMinutes" INTEGER NOT NULL,
    "status" "TenantSupportRequestStatus" NOT NULL DEFAULT 'OPEN',
    "reviewedByUserId" TEXT,
    "reviewNote" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantSupportRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantSupportGrant" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "supportRequestId" TEXT NOT NULL,
    "platformUserId" TEXT NOT NULL,
    "scopes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "startsAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "revokedByUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantSupportGrant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DomainVerificationChallenge_customDomainId_status_idx" ON "DomainVerificationChallenge"("customDomainId", "status");

-- CreateIndex
CREATE INDEX "DomainVerificationChallenge_expiresAt_idx" ON "DomainVerificationChallenge"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "ServicePlan_code_key" ON "ServicePlan"("code");

-- CreateIndex
CREATE INDEX "ServicePlanLimit_planId_idx" ON "ServicePlanLimit"("planId");

-- CreateIndex
CREATE UNIQUE INDEX "ServicePlanLimit_planId_metricKey_key" ON "ServicePlanLimit"("planId", "metricKey");

-- CreateIndex
CREATE INDEX "TenantServiceSubscription_tenantId_status_idx" ON "TenantServiceSubscription"("tenantId", "status");

-- CreateIndex
CREATE INDEX "TenantServiceSubscription_planId_idx" ON "TenantServiceSubscription"("planId");

-- CreateIndex
CREATE INDEX "TenantUsageCounter_tenantId_idx" ON "TenantUsageCounter"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantUsageCounter_tenantId_metricKey_periodKey_key" ON "TenantUsageCounter"("tenantId", "metricKey", "periodKey");

-- CreateIndex
CREATE UNIQUE INDEX "TenantRetentionPolicy_tenantId_key" ON "TenantRetentionPolicy"("tenantId");

-- CreateIndex
CREATE INDEX "TenantClosureRequest_tenantId_status_idx" ON "TenantClosureRequest"("tenantId", "status");

-- CreateIndex
CREATE INDEX "TenantClosureRequest_scheduledFor_idx" ON "TenantClosureRequest"("scheduledFor");

-- CreateIndex
CREATE INDEX "TenantDataExportRequest_tenantId_status_idx" ON "TenantDataExportRequest"("tenantId", "status");

-- CreateIndex
CREATE INDEX "TenantDataExportRequest_closureRequestId_idx" ON "TenantDataExportRequest"("closureRequestId");

-- CreateIndex
CREATE INDEX "TenantSupportRequest_tenantId_status_idx" ON "TenantSupportRequest"("tenantId", "status");

-- CreateIndex
CREATE INDEX "TenantSupportRequest_reviewedByUserId_idx" ON "TenantSupportRequest"("reviewedByUserId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantSupportGrant_supportRequestId_key" ON "TenantSupportGrant"("supportRequestId");

-- CreateIndex
CREATE INDEX "TenantSupportGrant_tenantId_expiresAt_idx" ON "TenantSupportGrant"("tenantId", "expiresAt");

-- CreateIndex
CREATE INDEX "TenantSupportGrant_platformUserId_expiresAt_idx" ON "TenantSupportGrant"("platformUserId", "expiresAt");

-- AddForeignKey
ALTER TABLE "DomainVerificationChallenge" ADD CONSTRAINT "DomainVerificationChallenge_customDomainId_fkey" FOREIGN KEY ("customDomainId") REFERENCES "CustomDomain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicePlanLimit" ADD CONSTRAINT "ServicePlanLimit_planId_fkey" FOREIGN KEY ("planId") REFERENCES "ServicePlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantServiceSubscription" ADD CONSTRAINT "TenantServiceSubscription_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantServiceSubscription" ADD CONSTRAINT "TenantServiceSubscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "ServicePlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantUsageCounter" ADD CONSTRAINT "TenantUsageCounter_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantRetentionPolicy" ADD CONSTRAINT "TenantRetentionPolicy_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantClosureRequest" ADD CONSTRAINT "TenantClosureRequest_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantClosureRequest" ADD CONSTRAINT "TenantClosureRequest_requestedByMembershipId_fkey" FOREIGN KEY ("requestedByMembershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantClosureRequest" ADD CONSTRAINT "TenantClosureRequest_cancelledByMembershipId_fkey" FOREIGN KEY ("cancelledByMembershipId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantClosureRequest" ADD CONSTRAINT "TenantClosureRequest_decidedByUserId_fkey" FOREIGN KEY ("decidedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantDataExportRequest" ADD CONSTRAINT "TenantDataExportRequest_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantDataExportRequest" ADD CONSTRAINT "TenantDataExportRequest_requestedByMembershipId_fkey" FOREIGN KEY ("requestedByMembershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantDataExportRequest" ADD CONSTRAINT "TenantDataExportRequest_closureRequestId_fkey" FOREIGN KEY ("closureRequestId") REFERENCES "TenantClosureRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantSupportRequest" ADD CONSTRAINT "TenantSupportRequest_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantSupportRequest" ADD CONSTRAINT "TenantSupportRequest_requestedByMembershipId_fkey" FOREIGN KEY ("requestedByMembershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantSupportRequest" ADD CONSTRAINT "TenantSupportRequest_reviewedByUserId_fkey" FOREIGN KEY ("reviewedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantSupportGrant" ADD CONSTRAINT "TenantSupportGrant_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantSupportGrant" ADD CONSTRAINT "TenantSupportGrant_supportRequestId_fkey" FOREIGN KEY ("supportRequestId") REFERENCES "TenantSupportRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantSupportGrant" ADD CONSTRAINT "TenantSupportGrant_platformUserId_fkey" FOREIGN KEY ("platformUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantSupportGrant" ADD CONSTRAINT "TenantSupportGrant_revokedByUserId_fkey" FOREIGN KEY ("revokedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Backfill persisted retention policy for tenants created before this domain existed.
INSERT INTO "TenantRetentionPolicy" (
    "id", "tenantId", "gracePeriodDays", "retentionDays", "disposition", "exportBeforeDisposition", "createdAt", "updatedAt"
)
SELECT
    'retention-' || tenant."id",
    tenant."id",
    30,
    90,
    'ANONYMIZE',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
FROM "Tenant" tenant
ON CONFLICT ("tenantId") DO NOTHING;

-- Tenant-governance permissions are separate from RBAC role-management permissions.
INSERT INTO "Permission" ("id", "code", "description") VALUES
  ('baseline-service-read', 'service:read', 'service read'),
  ('baseline-service-manage', 'service:manage', 'service manage'),
  ('baseline-closure-read', 'closure:read', 'closure read'),
  ('baseline-closure-manage', 'closure:manage', 'closure manage'),
  ('baseline-support-read', 'support:read', 'support read'),
  ('baseline-support-manage', 'support:manage', 'support manage')
ON CONFLICT ("code") DO NOTHING;

INSERT INTO "RolePermission" ("roleId", "permissionId")
SELECT role."id", permission."id"
FROM "Role" role
CROSS JOIN "Permission" permission
WHERE (role."code" = 'OWNER' OR role."name" = 'Owner')
  AND permission."code" IN (
    'service:read',
    'service:manage',
    'closure:read',
    'closure:manage',
    'support:read',
    'support:manage'
  )
ON CONFLICT DO NOTHING;
