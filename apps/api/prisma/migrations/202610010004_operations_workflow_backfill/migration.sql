INSERT INTO "Permission" ("id", "code", "description")
VALUES
  ('perm_' || md5('request:approve'), 'request:approve', 'request approve'),
  ('perm_' || md5('finance:approve'), 'finance:approve', 'finance approve'),
  ('perm_' || md5('meeting:read'), 'meeting:read', 'meeting read'),
  ('perm_' || md5('meeting:manage'), 'meeting:manage', 'meeting manage')
ON CONFLICT ("code") DO NOTHING;

INSERT INTO "TenantModule" (
  "id",
  "tenantId",
  "key",
  "status",
  "isEnabled",
  "enabledAt",
  "createdAt",
  "updatedAt"
)
SELECT
  'tm_' || md5(tenant."id" || ':meetings'),
  tenant."id",
  'meetings',
  'ENABLED'::"TenantModuleStatus",
  true,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
FROM "Tenant" tenant
ON CONFLICT ("tenantId", "key") DO NOTHING;

INSERT INTO "RolePermission" ("roleId", "permissionId", "effect")
SELECT role."id", permission."id", 'ALLOW'::"RolePermissionEffect"
FROM "Role" role
JOIN "Permission" permission
  ON permission."code" IN ('request:approve', 'finance:approve', 'meeting:read', 'meeting:manage')
WHERE role."code" = 'OWNER'
ON CONFLICT ("roleId", "permissionId") DO UPDATE SET "effect" = 'ALLOW'::"RolePermissionEffect";
