ALTER TABLE "OrganizationProfile"
ADD COLUMN "shortName" TEXT,
ADD COLUMN "code" TEXT,
ADD COLUMN "organizationType" TEXT,
ADD COLUMN "logoUrl" TEXT,
ADD COLUMN "establishedAt" TIMESTAMP(3),
ADD COLUMN "websiteUrl" TEXT,
ADD COLUMN "socialLinks" JSONB,
ADD COLUMN "parentOrganization" TEXT,
ADD COLUMN "status" TEXT NOT NULL DEFAULT 'ACTIVE';

ALTER TABLE "OrganizationUnit"
ADD COLUMN "description" TEXT;

ALTER TABLE "Position"
ADD COLUMN "description" TEXT,
ADD COLUMN "status" TEXT NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN "sortOrder" INTEGER NOT NULL DEFAULT 0;

-- Move legacy Unit-based member assignments into the canonical OrganizationUnit graph.
INSERT INTO "OrganizationUnit" ("id", "tenantId", "parentId", "code", "name", "status", "sortOrder", "createdAt", "updatedAt")
SELECT
  u."id",
  u."tenantId",
  NULL,
  'LEGACY_' || UPPER(SUBSTRING(MD5(u."id") FROM 1 FOR 10)),
  u."name",
  'ACTIVE',
  0,
  u."createdAt",
  u."updatedAt"
FROM "Unit" u
WHERE NOT EXISTS (
  SELECT 1
  FROM "OrganizationUnit" ou
  WHERE ou."tenantId" = u."tenantId"
    AND LOWER(ou."name") = LOWER(u."name")
);

UPDATE "OrganizationUnit" child
SET "parentId" = parent_ou."id"
FROM "Unit" legacy_child
JOIN "Unit" legacy_parent ON legacy_parent."id" = legacy_child."parentId"
JOIN "OrganizationUnit" parent_ou
  ON parent_ou."tenantId" = legacy_parent."tenantId"
 AND LOWER(parent_ou."name") = LOWER(legacy_parent."name")
WHERE child."tenantId" = legacy_child."tenantId"
  AND LOWER(child."name") = LOWER(legacy_child."name")
  AND child."id" <> parent_ou."id";

INSERT INTO "MembershipUnit" ("membershipId", "unitId", "isPrimary", "effectiveFrom", "effectiveTo")
SELECT
  mp."membershipId",
  target_unit."id",
  TRUE,
  COALESCE(m."joinedAt", mp."createdAt"),
  NULL
FROM "MemberProfile" mp
JOIN "Membership" m ON m."id" = mp."membershipId"
JOIN "Unit" legacy_unit ON legacy_unit."id" = mp."unitId"
JOIN LATERAL (
  SELECT ou."id"
  FROM "OrganizationUnit" ou
  WHERE ou."tenantId" = mp."tenantId"
    AND LOWER(ou."name") = LOWER(legacy_unit."name")
  ORDER BY ou."createdAt" ASC
  LIMIT 1
) target_unit ON TRUE
WHERE mp."unitId" IS NOT NULL
  AND NOT EXISTS (
    SELECT 1
    FROM "MembershipUnit" mu
    WHERE mu."membershipId" = mp."membershipId"
      AND mu."effectiveTo" IS NULL
  );

ALTER TABLE "MemberProfile" DROP CONSTRAINT IF EXISTS "MemberProfile_unitId_fkey";
ALTER TABLE "MemberProfile" DROP COLUMN IF EXISTS "unitId";
DROP TABLE IF EXISTS "Unit";
