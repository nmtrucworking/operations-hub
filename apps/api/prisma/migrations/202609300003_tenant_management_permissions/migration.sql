INSERT INTO "Permission" ("id", "code", "description") VALUES
  ('baseline-ownership-read', 'ownership:read', 'ownership read'),
  ('baseline-ownership-manage', 'ownership:manage', 'ownership manage'),
  ('baseline-branding-read', 'branding:read', 'branding read'),
  ('baseline-branding-manage', 'branding:manage', 'branding manage'),
  ('baseline-domain-read', 'domain:read', 'domain read'),
  ('baseline-domain-manage', 'domain:manage', 'domain manage')
ON CONFLICT ("code") DO NOTHING;

INSERT INTO "RolePermission" ("roleId", "permissionId")
SELECT role."id", permission."id"
FROM "Role" role
CROSS JOIN "Permission" permission
WHERE (role."code" = 'OWNER' OR role."name" = 'Owner')
  AND permission."code" IN (
    'ownership:read',
    'ownership:manage',
    'branding:read',
    'branding:manage',
    'domain:read',
    'domain:manage'
  )
ON CONFLICT DO NOTHING;
