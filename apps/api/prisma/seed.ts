import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import { MODULES, PERMISSIONS, PlatformRole } from "@operations-hub/shared";

const prisma = new PrismaClient();

async function main() {
  await resetDatabase();

  const permissionRows = await Promise.all(
    Object.values(PERMISSIONS).map((code) =>
      prisma.permission.create({
        data: { code, description: code.replace(":", " ") }
      })
    )
  );
  const permissionByCode = new Map(permissionRows.map((permission) => [permission.code, permission]));
  const passwordHash = await bcrypt.hash("Password123!", 12);

  await prisma.user.createMany({
    data: [
      {
        email: "platform.admin@demo.example",
        fullName: "Platform Admin",
        passwordHash,
        platformRole: PlatformRole.PlatformAdmin
      },
      {
        email: "platform.reviewer@demo.example",
        fullName: "Platform Reviewer",
        passwordHash,
        platformRole: PlatformRole.PlatformReviewer
      },
      {
        email: "platform.support@demo.example",
        fullName: "Platform Support",
        passwordHash,
        platformRole: PlatformRole.PlatformSupport
      }
    ]
  });

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
        creatorMembershipId: demo.memberMembership.id,
        title: "Room booking for workshop",
        description: "Need room A for the member onboarding workshop.",
        status: "SUBMITTED"
      },
      {
        tenantId: demo.tenant.id,
        typeId: requestType.id,
        creatorId: demo.finance.id,
        creatorMembershipId: demo.financeMembership.id,
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
      creatorMembershipId: demo.financeMembership.id,
      type: "EXPENSE",
      status: "PENDING_APPROVAL",
      amount: 1500000,
      category: "Event",
      description: "Workshop materials"
    }
  });

  const meeting = await prisma.meeting.create({
    data: {
      tenantId: demo.tenant.id,
      unitId: demo.organizationUnit.id,
      createdByMembershipId: demo.ownerMembership.id,
      type: "MEETING",
      title: "Họp Ban điều hành",
      description: "Cuộc họp mẫu cho luồng Meeting + Attendance.",
      location: "Phòng sinh hoạt CLB",
      startAt: new Date(),
      endAt: new Date(Date.now() + 90 * 60 * 1000),
      status: "ONGOING",
      participants: {
        create: [
          { membershipId: demo.ownerMembership.id, participantRole: "CHAIR", invitationStatus: "ACCEPTED" },
          { membershipId: demo.financeMembership.id, participantRole: "ATTENDEE", invitationStatus: "ACCEPTED" },
          { membershipId: demo.memberMembership.id, participantRole: "ATTENDEE", invitationStatus: "ACCEPTED" }
        ]
      }
    }
  });
  await prisma.attendanceRecord.create({
    data: {
      meetingId: meeting.id,
      membershipId: demo.ownerMembership.id,
      status: "PRESENT",
      checkInAt: new Date(),
      markedByMembershipId: demo.ownerMembership.id
    }
  });

  await prisma.dashboardMetric.createMany({
    data: [
      { tenantId: demo.tenant.id, key: "budgetUsage", label: "Budget usage", value: 42, unit: "%" },
      { tenantId: demo.tenant.id, key: "requestSla", label: "Request SLA", value: 86, unit: "%" }
    ]
  });
}

async function resetDatabase() {
  const tables = await prisma.$queryRawUnsafe<Array<{ tablename: string }>>(
    `SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename <> '_prisma_migrations'`
  );
  if (!tables.length) return;
  const quoted = tables.map(({ tablename }) => `"${tablename.replaceAll('"', '""')}"`).join(", ");
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${quoted} RESTART IDENTITY CASCADE`);
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
      organizationProfile: { create: { displayName: input.name } },
      tenantBranding: {
        create: {
          displayName: input.name,
          primaryColor: input.brandColor,
          status: "ACTIVE"
        }
      },
      retentionPolicy: { create: {} },
      modules: {
        create: MODULES.map((module) => ({ key: module.key, isEnabled: true }))
      }
    }
  });
  const organizationUnit = await prisma.organizationUnit.create({
    data: { tenantId: tenant.id, code: "EXEC", name: "Executive Board", sortOrder: 0 }
  });
  const [ownerPosition, financePosition, memberPosition] = await Promise.all([
    prisma.position.create({
      data: { tenantId: tenant.id, unitId: organizationUnit.id, code: "CHAIR", name: "Chairperson", sortOrder: 0 }
    }),
    prisma.position.create({
      data: { tenantId: tenant.id, unitId: organizationUnit.id, code: "FINANCE_OFFICER", name: "Finance Officer", sortOrder: 10 }
    }),
    prisma.position.create({
      data: { tenantId: tenant.id, unitId: organizationUnit.id, code: "MEMBER", name: "Member", sortOrder: 20 }
    })
  ]);
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

  const ownerRole = await createRoleWithPermissions(tenant.id, "Owner", Object.values(PERMISSIONS), input.permissionByCode, "OWNER");
  const financeRole = await createRoleWithPermissions(
    tenant.id,
    "Finance Officer",
    [
      PERMISSIONS.tenantRead,
      PERMISSIONS.moduleRead,
      PERMISSIONS.organizationRead,
      PERMISSIONS.memberRead,
      PERMISSIONS.requestRead,
      PERMISSIONS.financeRead,
      PERMISSIONS.financeManage,
      PERMISSIONS.financeApprove,
      PERMISSIONS.meetingRead,
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
      PERMISSIONS.moduleRead,
      PERMISSIONS.organizationRead,
      PERMISSIONS.memberRead,
      PERMISSIONS.requestRead,
      PERMISSIONS.requestManage,
      PERMISSIONS.meetingRead,
      PERMISSIONS.dashboardRead
    ],
    input.permissionByCode
  );

  const ownerMembership = await createMembership(
    owner.id,
    tenant.id,
    organizationUnit.id,
    ownerPosition.id,
    "Owner",
    ownerRole.id
  );
  await prisma.ownershipAssignment.create({ data: { tenantId: tenant.id, membershipId: ownerMembership.id } });
  const financeMembership = await createMembership(
    finance.id,
    tenant.id,
    organizationUnit.id,
    financePosition.id,
    "Finance Officer",
    financeRole.id
  );
  const memberMembership = await createMembership(
    member.id,
    tenant.id,
    organizationUnit.id,
    memberPosition.id,
    "Member",
    memberRole.id
  );

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

  return { tenant, owner, finance, member, account, organizationUnit, ownerMembership, financeMembership, memberMembership };
}

async function createRoleWithPermissions(
  tenantId: string,
  name: string,
  permissions: string[],
  permissionByCode: Map<string, { id: string; code: string }>,
  code?: string
) {
  return prisma.role.create({
    data: {
      tenantId,
      code,
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

async function createMembership(
  userId: string,
  tenantId: string,
  unitId: string,
  positionId: string,
  title: string,
  roleId: string
) {
  return prisma.membership.create({
    data: {
      userId,
      tenantId,
      status: "ACTIVE",
      title,
      joinedAt: new Date(),
      profile: { create: { tenantId } },
      membershipUnits: { create: { unitId, isPrimary: true } },
      membershipPositions: { create: { positionId } },
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
