CREATE UNIQUE INDEX "OwnershipAssignment_active_owner_key"
ON "OwnershipAssignment"("tenantId", "membershipId")
WHERE "effectiveTo" IS NULL;
