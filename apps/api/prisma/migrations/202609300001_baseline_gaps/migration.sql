DROP INDEX IF EXISTS "TenantRegistration_proposedSlug_key";
CREATE INDEX "TenantRegistration_proposedSlug_idx" ON "TenantRegistration"("proposedSlug");

ALTER TABLE "OrganizationUnit"
ADD COLUMN "sortOrder" INTEGER NOT NULL DEFAULT 0;
