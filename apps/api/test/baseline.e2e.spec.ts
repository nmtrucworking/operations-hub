import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AccountStatus, MembershipStatus, TenantRegistrationStatus, TenantStatus } from "@prisma/client";
import { MODULES, PERMISSIONS, PlatformRole } from "@operations-hub/shared";
import request from "supertest";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import type { AuthService as AuthServiceType } from "../src/auth/auth.service";
import type { PrismaService as PrismaServiceType } from "../src/prisma/prisma.service";
import type {
  PlatformTenantRegistrationsService as PlatformTenantRegistrationsServiceType,
  ProvisioningFaultStage
} from "../src/tenants/platform-tenant-registrations.service";
import type { DnsVerificationProvider as DnsVerificationProviderType } from "../src/tenants/dns-verification.provider";

const { AppModule } = require("../dist/app.module.js") as typeof import("../src/app.module");
const { AuthService } = require("../dist/auth/auth.service.js") as { AuthService: new (...args: never[]) => AuthServiceType };
const { PrismaService } = require("../dist/prisma/prisma.service.js") as {
  PrismaService: new (...args: never[]) => PrismaServiceType;
};
const { PlatformTenantRegistrationsService } = require("../dist/tenants/platform-tenant-registrations.service.js") as {
  PlatformTenantRegistrationsService: new (...args: never[]) => PlatformTenantRegistrationsServiceType;
};
const { DnsVerificationProvider } = require("../dist/tenants/dns-verification.provider.js") as {
  DnsVerificationProvider: new (...args: never[]) => DnsVerificationProviderType;
};

const testDatabaseUrl = process.env.TEST_DATABASE_URL;
const describeDb = testDatabaseUrl ? describe : describe.skip;

describeDb("Operations Hub baseline integration", () => {
  let app: INestApplication;
  let prisma: PrismaServiceType;
  let auth: AuthServiceType;
  let provisioning: PlatformTenantRegistrationsServiceType;

  beforeAll(async () => {
    process.env.DATABASE_URL = testDatabaseUrl!;
    process.env.JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET ?? "operations-hub-test-access-secret";
    process.env.ACCESS_TOKEN_TTL = "1h";

    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(DnsVerificationProvider)
      .useValue({ hasTxtRecord: async () => true })
      .compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }));
    await app.init();

    prisma = app.get(PrismaService);
    auth = app.get(AuthService);
    provisioning = app.get(PlatformTenantRegistrationsService);
  });

  beforeEach(async () => {
    await resetDatabase(prisma);
  });

  afterAll(async () => {
    await app?.close();
  });

  it("TC-TEN-TX-01 provisions Tenant + Membership + Owner atomically and prevents duplicate approval", async () => {
    const applicant = await createUser(prisma, "applicant@example.test");
    const admin = await createUser(prisma, "platform-admin@example.test", PlatformRole.PlatformAdmin);
    const registration = await prisma.tenantRegistration.create({
      data: {
        applicantUserId: applicant.id,
        proposedName: "Provisioned Student Club",
        proposedSlug: "provisioned-club",
        status: TenantRegistrationStatus.SUBMITTED
      }
    });
    const adminToken = await auth.signAccessToken({ userId: admin.id, email: admin.email });

    await request(app.getHttpServer())
      .post(`/platform/tenant-registrations/${registration.id}/approve`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({ reviewNote: "Baseline approved" })
      .expect(201);

    const approved = await prisma.tenantRegistration.findUniqueOrThrow({ where: { id: registration.id } });
    expect(approved.status).toBe(TenantRegistrationStatus.APPROVED);
    expect(approved.createdTenantId).toBeTruthy();

    const membership = await prisma.membership.findUniqueOrThrow({
      where: { userId_tenantId: { userId: applicant.id, tenantId: approved.createdTenantId! } },
      include: { roles: { include: { role: true } } }
    });
    expect(membership.status).toBe(MembershipStatus.ACTIVE);
    expect(membership.roles.some((assignment) => assignment.role.code === "OWNER")).toBe(true);
    await expect(
      prisma.ownershipAssignment.findFirstOrThrow({
        where: { tenantId: approved.createdTenantId!, membershipId: membership.id, effectiveTo: null }
      })
    ).resolves.toBeTruthy();
    expect(await prisma.tenantModule.count({ where: { tenantId: approved.createdTenantId!, isEnabled: true } })).toBe(
      MODULES.length
    );
    expect(await prisma.auditLog.count({ where: { entityType: "TenantRegistration", entityId: registration.id } })).toBe(1);

    const catalog = await request(app.getHttpServer())
      .get("/platform/tenants")
      .set("authorization", `Bearer ${adminToken}`)
      .expect(200);
    expect(catalog.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: approved.createdTenantId, slug: registration.proposedSlug, activeOwnerCount: 1 })
      ])
    );

    await expect(
      auth.selectTenant(
        { userId: applicant.id, email: applicant.email },
        approved.createdTenantId!,
        { correlationId: "test-select-tenant" }
      )
    ).resolves.toMatchObject({ membershipId: membership.id });

    await request(app.getHttpServer())
      .post(`/platform/tenant-registrations/${registration.id}/approve`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({})
      .expect(400);
    expect(await prisma.tenant.count({ where: { slug: registration.proposedSlug } })).toBe(1);
  });

  it("platform reviewer can request changes/reject with audit but cannot approve", async () => {
    const applicant = await createUser(prisma, "review-applicant@example.test");
    const reviewer = await createUser(prisma, "platform-reviewer@example.test", PlatformRole.PlatformReviewer);
    const reviewerToken = await auth.signAccessToken({ userId: reviewer.id, email: reviewer.email });
    const registration = await prisma.tenantRegistration.create({
      data: {
        applicantUserId: applicant.id,
        proposedName: "Review Club",
        proposedSlug: "review-club",
        status: TenantRegistrationStatus.SUBMITTED
      }
    });

    await request(app.getHttpServer())
      .post(`/platform/tenant-registrations/${registration.id}/request-changes`)
      .set("authorization", `Bearer ${reviewerToken}`)
      .send({})
      .expect(400);

    await request(app.getHttpServer())
      .post(`/platform/tenant-registrations/${registration.id}/request-changes`)
      .set("authorization", `Bearer ${reviewerToken}`)
      .send({ reviewNote: "Please add organization evidence" })
      .expect(201);

    await request(app.getHttpServer())
      .post(`/platform/tenant-registrations/${registration.id}/approve`)
      .set("authorization", `Bearer ${reviewerToken}`)
      .send({})
      .expect(403);

    await request(app.getHttpServer())
      .post(`/platform/tenant-registrations/${registration.id}/reject`)
      .set("authorization", `Bearer ${reviewerToken}`)
      .send({ reviewNote: "Evidence remains insufficient" })
      .expect(201);

    expect(await prisma.auditLog.count({ where: { entityType: "TenantRegistration", entityId: registration.id } })).toBe(2);
  });

  it("TC-TEN-TX-01 rolls provisioning back at every required fault checkpoint", async () => {
    const admin = await createUser(prisma, "rollback-admin@example.test", PlatformRole.PlatformAdmin);
    const stages: ProvisioningFaultStage[] = ["after-tenant", "after-membership", "before-owner-assignment"];

    for (const [index, stage] of stages.entries()) {
      const applicant = await createUser(prisma, `rollback-applicant-${index}@example.test`);
      const registration = await prisma.tenantRegistration.create({
        data: {
          applicantUserId: applicant.id,
          proposedName: `Rollback ${index}`,
          proposedSlug: `rollback-${index}`,
          status: TenantRegistrationStatus.SUBMITTED
        }
      });

      await expect(
        provisioning.approve(registration.id, admin.id, undefined, { testFaultAt: stage })
      ).rejects.toThrow(`Provisioning fault injected at ${stage}`);

      expect(await prisma.tenant.count({ where: { slug: registration.proposedSlug } })).toBe(0);
      expect(await prisma.membership.count({ where: { userId: applicant.id } })).toBe(0);
      expect(await prisma.ownershipAssignment.count({ where: { membership: { userId: applicant.id } } })).toBe(0);
      const unchanged = await prisma.tenantRegistration.findUniqueOrThrow({ where: { id: registration.id } });
      expect(unchanged.status).toBe(TenantRegistrationStatus.SUBMITTED);
      expect(unchanged.createdTenantId).toBeNull();
    }
  });

  it("TC-TEN-ISO-01 scopes list/update operations and rejects x-tenant-id token tampering", async () => {
    const user = await createUser(prisma, "isolation-user@example.test");
    const permissions = Object.values(PERMISSIONS);
    const tenantA = await createTenantContext(prisma, auth, user, "iso-a", permissions);
    const tenantB = await createTenantContext(prisma, auth, user, "iso-b", permissions);

    const requestB = await prisma.request.create({
      data: {
        tenantId: tenantB.tenant.id,
        creatorId: user.id,
        title: "Tenant B request",
        status: "SUBMITTED"
      }
    });
    const financeAccountB = await prisma.financeAccount.create({
      data: { tenantId: tenantB.tenant.id, name: "B Fund" }
    });
    const financeB = await prisma.financeTransaction.create({
      data: {
        tenantId: tenantB.tenant.id,
        accountId: financeAccountB.id,
        createdById: user.id,
        type: "EXPENSE",
        amount: 100,
        category: "Test"
      }
    });
    const unitB = await prisma.organizationUnit.create({
      data: { tenantId: tenantB.tenant.id, code: "B", name: "Tenant B Unit" }
    });

    const listResponse = await request(app.getHttpServer())
      .get("/requests")
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .expect(200);
    expect(listResponse.body.data).toEqual([]);

    await request(app.getHttpServer())
      .patch(`/requests/${requestB.id}`)
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({ title: "cross tenant" })
      .expect(404);

    await request(app.getHttpServer())
      .patch(`/finance/transactions/${financeB.id}`)
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({ description: "cross tenant" })
      .expect(404);

    await request(app.getHttpServer())
      .patch(`/organization/units/${unitB.id}`)
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({ name: "cross tenant" })
      .expect(404);

    await request(app.getHttpServer())
      .get("/requests")
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantB.tenant.id)
      .expect(403);
  });

  it("FR-MEM-002 resolves permissions per membership and global disable blocks every tenant", async () => {
    const user = await createUser(prisma, "multi-member@example.test");
    const tenantA = await createTenantContext(prisma, auth, user, "member-a", [
      PERMISSIONS.memberRead,
      PERMISSIONS.memberManage
    ]);
    const tenantB = await createTenantContext(prisma, auth, user, "member-b", [PERMISSIONS.memberRead]);

    await request(app.getHttpServer())
      .post("/members")
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({ email: "created-in-a@example.test", fullName: "Created in A" })
      .expect(201);

    await request(app.getHttpServer())
      .post("/members")
      .set("authorization", `Bearer ${tenantB.token}`)
      .set("x-tenant-id", tenantB.tenant.id)
      .send({ email: "blocked-in-b@example.test", fullName: "Blocked in B" })
      .expect(403);

    await prisma.membership.update({ where: { id: tenantA.membership.id }, data: { status: MembershipStatus.SUSPENDED } });
    await request(app.getHttpServer())
      .get("/members")
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .expect(403);
    await request(app.getHttpServer())
      .get("/members")
      .set("authorization", `Bearer ${tenantB.token}`)
      .set("x-tenant-id", tenantB.tenant.id)
      .expect(200);

    await prisma.user.update({
      where: { id: user.id },
      data: { isActive: false, accountStatus: AccountStatus.DISABLED }
    });
    await request(app.getHttpServer())
      .get("/members")
      .set("authorization", `Bearer ${tenantB.token}`)
      .set("x-tenant-id", tenantB.tenant.id)
      .expect(401);
  });

  it("FR-ORG-002 enforces hierarchy integrity, deactivation history and audit", async () => {
    const user = await createUser(prisma, "org-admin@example.test");
    const tenantA = await createTenantContext(prisma, auth, user, "org-a", [
      PERMISSIONS.organizationRead,
      PERMISSIONS.organizationManage
    ]);
    const tenantB = await createTenantContext(prisma, auth, user, "org-b", [
      PERMISSIONS.organizationRead,
      PERMISSIONS.organizationManage
    ]);

    const rootResponse = await request(app.getHttpServer())
      .post("/organization/units")
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({ code: "ROOT", name: "Root", sortOrder: 1 })
      .expect(201);
    const root = rootResponse.body;

    const childResponse = await request(app.getHttpServer())
      .post("/organization/units")
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({ code: "CHILD", name: "Child", parentId: root.id, sortOrder: 2 })
      .expect(201);
    const child = childResponse.body;

    const foreignParent = await prisma.organizationUnit.create({
      data: { tenantId: tenantB.tenant.id, code: "FOREIGN", name: "Foreign" }
    });
    await request(app.getHttpServer())
      .patch(`/organization/units/${child.id}`)
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({ parentId: foreignParent.id })
      .expect(400);
    await request(app.getHttpServer())
      .patch(`/organization/units/${root.id}`)
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({ parentId: child.id })
      .expect(400);

    await request(app.getHttpServer())
      .post(`/organization/units/${child.id}/deactivate`)
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({})
      .expect(201);
    const deactivated = await prisma.organizationUnit.findUniqueOrThrow({ where: { id: child.id } });
    expect(deactivated.status).toBe("INACTIVE");
    expect(await prisma.auditLog.count({ where: { tenantId: tenantA.tenant.id, entityType: "OrganizationUnit" } })).toBe(3);
  });

  it("FR-MOD-001 isolates module toggles and disabled module endpoints at backend", async () => {
    const user = await createUser(prisma, "module-admin@example.test");
    const permissions = [PERMISSIONS.moduleRead, PERMISSIONS.moduleManage, PERMISSIONS.financeRead];
    const tenantA = await createTenantContext(prisma, auth, user, "module-a", permissions);
    const tenantB = await createTenantContext(prisma, auth, user, "module-b", permissions);

    await request(app.getHttpServer())
      .patch("/modules")
      .set("authorization", `Bearer ${tenantB.token}`)
      .set("x-tenant-id", tenantB.tenant.id)
      .send({ key: "finance", isEnabled: false })
      .expect(200);

    expect(
      (await prisma.tenantModule.findUniqueOrThrow({ where: { tenantId_key: { tenantId: tenantA.tenant.id, key: "finance" } } }))
        .isEnabled
    ).toBe(true);
    expect(
      (await prisma.tenantModule.findUniqueOrThrow({ where: { tenantId_key: { tenantId: tenantB.tenant.id, key: "finance" } } }))
        .isEnabled
    ).toBe(false);

    await request(app.getHttpServer())
      .get("/finance/accounts")
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .expect(200);
    await request(app.getHttpServer())
      .get("/finance/accounts")
      .set("authorization", `Bearer ${tenantB.token}`)
      .set("x-tenant-id", tenantB.tenant.id)
      .expect(403);
    expect(await prisma.auditLog.count({ where: { tenantId: tenantB.tenant.id, entityType: "TenantModule" } })).toBe(1);
  });

  it("UC-TENANT-05 validates lifecycle transitions, owner invariant and platform authorization", async () => {
    const owner = await createUser(prisma, "lifecycle-owner@example.test");
    const admin = await createUser(prisma, "lifecycle-admin@example.test", PlatformRole.PlatformAdmin);
    const reviewer = await createUser(prisma, "lifecycle-reviewer@example.test", PlatformRole.PlatformReviewer);
    const context = await createTenantContext(prisma, auth, owner, "lifecycle", [PERMISSIONS.tenantRead]);
    const ownerRole = await prisma.role.create({
      data: { tenantId: context.tenant.id, code: "OWNER", name: "Owner", isSystem: true }
    });
    await prisma.membershipRole.create({ data: { membershipId: context.membership.id, roleId: ownerRole.id } });
    await prisma.ownershipAssignment.create({ data: { tenantId: context.tenant.id, membershipId: context.membership.id } });
    const adminToken = await auth.signAccessToken({ userId: admin.id, email: admin.email });
    const reviewerToken = await auth.signAccessToken({ userId: reviewer.id, email: reviewer.email });

    await request(app.getHttpServer())
      .post(`/platform/tenants/${context.tenant.id}/transitions`)
      .set("authorization", `Bearer ${reviewerToken}`)
      .send({ toStatus: TenantStatus.SUSPENDED, reason: "Reviewer cannot suspend" })
      .expect(403);

    await request(app.getHttpServer())
      .post(`/platform/tenants/${context.tenant.id}/transitions`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({ toStatus: TenantStatus.SUSPENDED, reason: "Administrative suspension" })
      .expect(201);

    await request(app.getHttpServer())
      .get("/tenants/current")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(403);

    await request(app.getHttpServer())
      .post(`/platform/tenants/${context.tenant.id}/transitions`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({ toStatus: TenantStatus.ACTIVE, reason: "Issue resolved" })
      .expect(201);

    await request(app.getHttpServer())
      .post(`/platform/tenants/${context.tenant.id}/transitions`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({ toStatus: TenantStatus.ACTIVE, reason: "Duplicate transition" })
      .expect(400);

    const lifecycle = await request(app.getHttpServer())
      .get(`/platform/tenants/${context.tenant.id}/lifecycle`)
      .set("authorization", `Bearer ${reviewerToken}`)
      .expect(200);
    expect(lifecycle.body).toHaveLength(2);
    expect(await prisma.auditLog.count({ where: { tenantId: context.tenant.id, entityType: "Tenant" } })).toBe(2);
  });

  it("UC-TENANT-06 keeps OwnershipAssignment as SSOT and protects the last owner", async () => {
    const owner = await createUser(prisma, "ownership-owner@example.test");
    const target = await createUser(prisma, "ownership-target@example.test");
    const third = await createUser(prisma, "ownership-third@example.test");
    const permissions = [
      PERMISSIONS.tenantRead,
      PERMISSIONS.ownershipRead,
      PERMISSIONS.ownershipManage,
      PERMISSIONS.memberRead,
      PERMISSIONS.memberManage
    ];
    const context = await createTenantContext(prisma, auth, owner, "ownership", permissions);
    const ownerRole = await prisma.role.create({
      data: { tenantId: context.tenant.id, code: "OWNER", name: "Owner", isSystem: true }
    });
    await prisma.membershipRole.create({ data: { membershipId: context.membership.id, roleId: ownerRole.id } });
    await prisma.ownershipAssignment.create({ data: { tenantId: context.tenant.id, membershipId: context.membership.id } });
    const targetMembership = await prisma.membership.create({
      data: { tenantId: context.tenant.id, userId: target.id, status: MembershipStatus.ACTIVE, joinedAt: new Date() }
    });
    const thirdMembership = await prisma.membership.create({
      data: { tenantId: context.tenant.id, userId: third.id, status: MembershipStatus.ACTIVE, joinedAt: new Date() }
    });

    await request(app.getHttpServer())
      .delete(`/tenants/current/owners/${context.membership.id}`)
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(400);

    await request(app.getHttpServer())
      .post("/tenants/current/owners")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ membershipId: targetMembership.id })
      .expect(201);

    expect(
      await prisma.membershipRole.count({ where: { membershipId: targetMembership.id, roleId: ownerRole.id } })
    ).toBe(1);

    await request(app.getHttpServer())
      .delete(`/tenants/current/owners/${targetMembership.id}`)
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(200);

    await request(app.getHttpServer())
      .patch(`/members/${context.membership.id}`)
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ status: MembershipStatus.SUSPENDED })
      .expect(400);

    await request(app.getHttpServer())
      .post("/tenants/current/ownership/transfer")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ toMembershipId: thirdMembership.id })
      .expect(201);

    const owners = await request(app.getHttpServer())
      .get("/tenants/current/owners")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(200);
    expect(owners.body).toEqual([
      expect.objectContaining({ membershipId: thirdMembership.id, user: expect.objectContaining({ email: third.email }) })
    ]);
  });

  it("branding SSOT and custom-domain mutations are tenant scoped and audited", async () => {
    const owner = await createUser(prisma, "brand-owner@example.test");
    const context = await createTenantContext(prisma, auth, owner, "brand", [
      PERMISSIONS.tenantRead,
      PERMISSIONS.brandingRead,
      PERMISSIONS.brandingManage,
      PERMISSIONS.domainRead,
      PERMISSIONS.domainManage
    ]);

    await request(app.getHttpServer())
      .patch("/tenants/current/branding")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ displayName: "Brand Tenant", primaryColor: "#123456", secondaryColor: "#abcdef" })
      .expect(200);

    const current = await request(app.getHttpServer())
      .get("/tenants/current")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(200);
    expect(current.body.brandColor).toBe("#123456");
    expect(current.body.tenantBranding.primaryColor).toBe("#123456");

    await request(app.getHttpServer())
      .post("/tenants/current/domains")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ hostname: "https://invalid.example.test/path" })
      .expect(400);

    const domainResponse = await request(app.getHttpServer())
      .post("/tenants/current/domains")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ hostname: "portal.example.test" })
      .expect(201);
    expect(domainResponse.body).toMatchObject({ hostname: "portal.example.test", verificationStatus: "PENDING" });

    await request(app.getHttpServer())
      .delete(`/tenants/current/domains/${domainResponse.body.id}`)
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(200);

    expect(await prisma.auditLog.count({ where: { tenantId: context.tenant.id, entityType: "TenantBranding" } })).toBe(1);
    expect(await prisma.auditLog.count({ where: { tenantId: context.tenant.id, entityType: "CustomDomain" } })).toBe(2);
  });

  it("UC-TENANT-07 establishes plan, limits, contacts and usage without mixing them into RBAC", async () => {
    const owner = await createUser(prisma, "service-owner@example.test");
    const admin = await createUser(prisma, "service-admin@example.test", PlatformRole.PlatformAdmin);
    const context = await createTenantContext(prisma, auth, owner, "service-tenant", [
      PERMISSIONS.serviceRead,
      PERMISSIONS.serviceManage
    ]);
    const adminToken = await auth.signAccessToken({ userId: admin.id, email: admin.email });

    const plan = await request(app.getHttpServer())
      .post("/platform/service-plans")
      .set("authorization", `Bearer ${adminToken}`)
      .send({ code: "STANDARD", name: "Standard" })
      .expect(201);

    await request(app.getHttpServer())
      .put(`/platform/service-plans/${plan.body.id}/limits`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({ metricKey: "members.active", maxValue: 250, unit: "members" })
      .expect(200);

    await request(app.getHttpServer())
      .post(`/platform/tenants/${context.tenant.id}/service`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({ planId: plan.body.id, serviceContactEmail: "ops@example.test" })
      .expect(201);

    await request(app.getHttpServer())
      .put(`/platform/tenants/${context.tenant.id}/usage`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({ metricKey: "members.active", periodKey: "2026-09", usedValue: 42 })
      .expect(200);

    await request(app.getHttpServer())
      .patch("/tenants/current/service/contacts")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ billingContactEmail: "billing@example.test" })
      .expect(200);

    const overview = await request(app.getHttpServer())
      .get("/tenants/current/service")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(200);
    expect(overview.body.subscription.plan).toMatchObject({ code: "STANDARD" });
    expect(overview.body.subscription.plan.limits).toEqual(
      expect.arrayContaining([expect.objectContaining({ metricKey: "members.active", maxValue: 250 })])
    );
    expect(overview.body.subscription.billingContactEmail).toBe("billing@example.test");
    expect(overview.body.usage).toEqual(
      expect.arrayContaining([expect.objectContaining({ metricKey: "members.active", periodKey: "2026-09", usedValue: 42 })])
    );
  });

  it("UC-TENANT-08 issues tenant-bound DNS challenge and verifies through the DNS provider", async () => {
    const user = await createUser(prisma, "dns-owner@example.test");
    const tenantA = await createTenantContext(prisma, auth, user, "dns-a", [PERMISSIONS.domainRead, PERMISSIONS.domainManage]);
    const tenantB = await createTenantContext(prisma, auth, user, "dns-b", [PERMISSIONS.domainRead, PERMISSIONS.domainManage]);

    const domain = await request(app.getHttpServer())
      .post("/tenants/current/domains")
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .send({ hostname: "portal.dns-a.example.test" })
      .expect(201);

    const challenge = await request(app.getHttpServer())
      .post(`/tenants/current/domains/${domain.body.id}/challenge`)
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .expect(201);
    expect(challenge.body.recordName).toBe("_operations-hub.portal.dns-a.example.test");
    expect(challenge.body.expectedValue).toMatch(/^operations-hub-domain-verification=/);

    await request(app.getHttpServer())
      .post(`/tenants/current/domains/${domain.body.id}/verify`)
      .set("authorization", `Bearer ${tenantB.token}`)
      .set("x-tenant-id", tenantB.tenant.id)
      .expect(404);

    const verified = await request(app.getHttpServer())
      .post(`/tenants/current/domains/${domain.body.id}/verify`)
      .set("authorization", `Bearer ${tenantA.token}`)
      .set("x-tenant-id", tenantA.tenant.id)
      .expect(201);
    expect(verified.body).toMatchObject({ verified: true, domain: { verificationStatus: "VERIFIED" } });
  });

  it("UC-TENANT-09 keeps closure soft during grace period and supports export plus cancellation", async () => {
    const owner = await createUser(prisma, "closure-owner@example.test");
    const admin = await createUser(prisma, "closure-admin@example.test", PlatformRole.PlatformAdmin);
    const context = await createTenantContext(prisma, auth, owner, "closure-domain", [
      PERMISSIONS.closureRead,
      PERMISSIONS.closureManage
    ]);
    const adminToken = await auth.signAccessToken({ userId: admin.id, email: admin.email });

    await request(app.getHttpServer())
      .put(`/platform/tenants/${context.tenant.id}/retention`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({ gracePeriodDays: 7, retentionDays: 120, disposition: "ANONYMIZE" })
      .expect(200);

    const closure = await request(app.getHttpServer())
      .post("/tenants/current/closure-requests")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ reason: "Organization is winding down" })
      .expect(201);
    expect(new Date(closure.body.scheduledFor).getTime()).toBeGreaterThan(Date.now());

    await request(app.getHttpServer())
      .post("/tenants/current/data-exports")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ closureRequestId: closure.body.id, format: "JSON" })
      .expect(201);

    expect(await prisma.tenant.findUnique({ where: { id: context.tenant.id } })).toMatchObject({ status: TenantStatus.ACTIVE });

    await request(app.getHttpServer())
      .post(`/tenants/current/closure-requests/${closure.body.id}/cancel`)
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(201);

    expect(await prisma.tenantClosureRequest.findUniqueOrThrow({ where: { id: closure.body.id } })).toMatchObject({
      status: "CANCELLED"
    });
    expect(await prisma.tenantDataExportRequest.count({ where: { tenantId: context.tenant.id } })).toBe(1);
  });

  it("UC-TENANT-10 grants scoped temporary support without creating tenant membership and revokes access", async () => {
    const owner = await createUser(prisma, "support-owner@example.test");
    const admin = await createUser(prisma, "support-admin@example.test", PlatformRole.PlatformAdmin);
    const support = await createUser(prisma, "support-agent@example.test", PlatformRole.PlatformSupport);
    const context = await createTenantContext(prisma, auth, owner, "support-domain", [
      PERMISSIONS.supportRead,
      PERMISSIONS.supportManage,
      PERMISSIONS.memberRead
    ]);
    const adminToken = await auth.signAccessToken({ userId: admin.id, email: admin.email });
    const supportToken = await auth.signAccessToken({ userId: support.id, email: support.email });

    const supportRequest = await request(app.getHttpServer())
      .post("/tenants/current/support-requests")
      .set("authorization", `Bearer ${context.token}`)
      .set("x-tenant-id", context.tenant.id)
      .send({ reason: "Investigate member directory issue", scopes: [PERMISSIONS.memberRead], durationMinutes: 60 })
      .expect(201);

    const grant = await request(app.getHttpServer())
      .post(`/platform/tenants/${context.tenant.id}/support-requests/${supportRequest.body.id}/grant`)
      .set("authorization", `Bearer ${adminToken}`)
      .send({ platformUserId: support.id, scopes: [PERMISSIONS.memberRead], durationMinutes: 30 })
      .expect(201);

    expect(await prisma.membership.count({ where: { userId: support.id, tenantId: context.tenant.id } })).toBe(0);
    expect(await prisma.ownershipAssignment.count({ where: { tenantId: context.tenant.id, membership: { userId: support.id } } })).toBe(0);

    await request(app.getHttpServer())
      .get("/members")
      .set("authorization", `Bearer ${supportToken}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(200);

    await request(app.getHttpServer())
      .get("/tenants/current/service")
      .set("authorization", `Bearer ${supportToken}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(403);

    await request(app.getHttpServer())
      .post(`/platform/tenants/${context.tenant.id}/support-grants/${grant.body.id}/revoke`)
      .set("authorization", `Bearer ${adminToken}`)
      .expect(201);

    await request(app.getHttpServer())
      .get("/members")
      .set("authorization", `Bearer ${supportToken}`)
      .set("x-tenant-id", context.tenant.id)
      .expect(403);
  });
});

async function resetDatabase(prisma: PrismaServiceType) {
  const tables = await prisma.$queryRawUnsafe<Array<{ tablename: string }>>(
    `SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename <> '_prisma_migrations'`
  );
  if (!tables.length) return;
  const quoted = tables.map(({ tablename }) => `"${tablename.replaceAll('"', '""')}"`).join(", ");
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${quoted} RESTART IDENTITY CASCADE`);
}

async function createUser(prisma: PrismaServiceType, email: string, platformRole?: PlatformRole) {
  return prisma.user.create({
    data: {
      email,
      fullName: email.split("@")[0],
      passwordHash: "test-only-password-hash",
      platformRole
    }
  });
}

async function createTenantContext(
  prisma: PrismaServiceType,
  auth: AuthServiceType,
  user: { id: string; email: string },
  slug: string,
  permissionCodes: string[]
) {
  const permissions = await Promise.all(
    permissionCodes.map((code) =>
      prisma.permission.upsert({
        where: { code },
        create: { code },
        update: {}
      })
    )
  );
  const tenant = await prisma.tenant.create({
    data: {
      name: slug,
      slug,
      modules: { create: MODULES.map((module) => ({ key: module.key, isEnabled: true, status: "ENABLED" })) }
    }
  });
  const role = await prisma.role.create({
    data: {
      tenantId: tenant.id,
      code: `ROLE_${slug.toUpperCase().replaceAll("-", "_")}`,
      name: `Role ${slug}`,
      permissions: { create: permissions.map((permission) => ({ permissionId: permission.id })) }
    }
  });
  const membership = await prisma.membership.create({
    data: {
      userId: user.id,
      tenantId: tenant.id,
      status: MembershipStatus.ACTIVE,
      joinedAt: new Date(),
      roles: { create: { roleId: role.id } }
    }
  });
  const token = await auth.signAccessToken({
    userId: user.id,
    email: user.email,
    tenantId: tenant.id,
    membershipId: membership.id
  });
  return { tenant, membership, role, token };
}
