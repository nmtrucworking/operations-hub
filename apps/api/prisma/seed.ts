import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import { MODULES, PERMISSIONS } from "@operations-hub/shared";

const prisma = new PrismaClient();

async function main() {
  await prisma.auditLog.deleteMany();
  await prisma.financeTransaction.deleteMany();
  await prisma.financeAccount.deleteMany();
  await prisma.requestApproval.deleteMany();
  await prisma.request.deleteMany();
  await prisma.requestType.deleteMany();
  await prisma.membershipRole.deleteMany();
  await prisma.rolePermission.deleteMany();
  await prisma.permission.deleteMany();
  await prisma.memberProfile.deleteMany();
  await prisma.membership.deleteMany();
  await prisma.session.deleteMany();
  await prisma.unit.deleteMany();
  await prisma.tenantModule.deleteMany();
  await prisma.role.deleteMany();
  await prisma.dashboardMetric.deleteMany();
  await prisma.tenant.deleteMany();
  await prisma.user.deleteMany();

  const permissionRows = await Promise.all(
    Object.values(PERMISSIONS).map((code) =>
      prisma.permission.create({
        data: { code, description: code.replace(":", " ") }
      })
    )
  );
  const permissionByCode = new Map(permissionRows.map((permission) => [permission.code, permission]));
  const passwordHash = await bcrypt.hash("Password123!", 12);

  const demo = await createTenant({
    name: "Demo Operations",
    slug: "demo",
    brandColor: "#2563eb",
    ownerEmail: "owner@demo.example",
    financeEmail: "finance@demo.example",
    memberEmail: "member@demo.example",
    passwordHash,
    permissionByCode
  });

  await createTenant({
    name: "Green Student Club",
    slug: "green",
    brandColor: "#16a34a",
    ownerEmail: "owner@green.example",
    financeEmail: "finance@green.example",
    memberEmail: "member@green.example",
    passwordHash,
    permissionByCode
  });

  const requestType = await prisma.requestType.create({
    data: { tenantId: demo.tenant.id, name: "General request", schema: { fields: ["title", "description"] } }
  });
  await prisma.request.createMany({
    data: [
      {
        tenantId: demo.tenant.id,
        typeId: requestType.id,
        creatorId: demo.member.id,
        title: "Room booking for workshop",
        description: "Need room A for the member onboarding workshop.",
        status: "SUBMITTED"
      },
      {
        tenantId: demo.tenant.id,
        typeId: requestType.id,
        creatorId: demo.finance.id,
        title: "Reimburse event materials",
        description: "Receipt attached in offline archive.",
        status: "IN_REVIEW"
      }
    ]
  });

  await prisma.financeTransaction.create({
    data: {
      tenantId: demo.tenant.id,
      accountId: demo.account.id,
      createdById: demo.finance.id,
      type: "EXPENSE",
      status: "PENDING_APPROVAL",
      amount: 1500000,
      category: "Event",
      description: "Workshop materials"
    }
  });

  await prisma.dashboardMetric.createMany({
    data: [
      { tenantId: demo.tenant.id, key: "budgetUsage", label: "Budget usage", value: 42, unit: "%" },
      { tenantId: demo.tenant.id, key: "requestSla", label: "Request SLA", value: 86, unit: "%" }
    ]
  });
}

async function createTenant(input: {
  name: string;
  slug: string;
  brandColor: string;
  ownerEmail: string;
  financeEmail: string;
  memberEmail: string;
  passwordHash: string;
  permissionByCode: Map<string, { id: string; code: string }>;
}) {
  const tenant = await prisma.tenant.create({
    data: {
      name: input.name,
      slug: input.slug,
      brandColor: input.brandColor,
      modules: {
        create: MODULES.map((module) => ({ key: module.key, isEnabled: true }))
      }
    }
  });
  const unit = await prisma.unit.create({ data: { tenantId: tenant.id, name: "Executive Board" } });
  const account = await prisma.financeAccount.create({
    data: { tenantId: tenant.id, name: "Main Fund", currency: "VND", balance: 10000000 }
  });

  const [owner, finance, member] = await Promise.all([
    prisma.user.create({
      data: { email: input.ownerEmail, fullName: `${input.name} Owner`, passwordHash: input.passwordHash }
    }),
    prisma.user.create({
      data: { email: input.financeEmail, fullName: `${input.name} Finance`, passwordHash: input.passwordHash }
    }),
    prisma.user.create({
      data: { email: input.memberEmail, fullName: `${input.name} Member`, passwordHash: input.passwordHash }
    })
  ]);

  const ownerRole = await createRoleWithPermissions(tenant.id, "Owner", Object.values(PERMISSIONS), input.permissionByCode);
  const financeRole = await createRoleWithPermissions(
    tenant.id,
    "Finance Officer",
    [
      PERMISSIONS.tenantRead,
      PERMISSIONS.memberRead,
      PERMISSIONS.requestRead,
      PERMISSIONS.financeRead,
      PERMISSIONS.financeManage,
      PERMISSIONS.dashboardRead,
      PERMISSIONS.auditRead
    ],
    input.permissionByCode
  );
  const memberRole = await createRoleWithPermissions(
    tenant.id,
    "Member",
    [
      PERMISSIONS.tenantRead,
      PERMISSIONS.memberRead,
      PERMISSIONS.requestRead,
      PERMISSIONS.requestManage,
      PERMISSIONS.dashboardRead
    ],
    input.permissionByCode
  );

  const ownerMembership = await createMembership(owner.id, tenant.id, unit.id, "Owner", ownerRole.id);
  await createMembership(finance.id, tenant.id, unit.id, "Finance Officer", financeRole.id);
  await createMembership(member.id, tenant.id, unit.id, "Member", memberRole.id);

  await prisma.auditLog.create({
    data: {
      tenantId: tenant.id,
      actorId: owner.id,
      action: "CREATE",
      result: "SUCCESS",
      entityType: "Tenant",
      entityId: tenant.id,
      message: "Tenant seeded"
    }
  });

  return { tenant, owner, finance, member, account, ownerMembership };
}

async function createRoleWithPermissions(
  tenantId: string,
  name: string,
  permissions: string[],
  permissionByCode: Map<string, { id: string; code: string }>
) {
  return prisma.role.create({
    data: {
      tenantId,
      name,
      isSystem: true,
      permissions: {
        create: permissions.map((code) => ({
          permissionId: permissionByCode.get(code)!.id
        }))
      }
    }
  });
}

async function createMembership(userId: string, tenantId: string, unitId: string, title: string, roleId: string) {
  return prisma.membership.create({
    data: {
      userId,
      tenantId,
      status: "ACTIVE",
      title,
      joinedAt: new Date(),
      profile: { create: { tenantId, unitId } },
      roles: { create: { roleId } }
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
