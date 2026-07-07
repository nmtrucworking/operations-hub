-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ACTIVE', 'DISABLED', 'LOCKED', 'ANONYMIZED');

-- CreateEnum
CREATE TYPE "TenantRegistrationStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'IN_REVIEW', 'APPROVED', 'REJECTED', 'WITHDRAWN');

-- CreateEnum
CREATE TYPE "RolePermissionEffect" AS ENUM ('ALLOW', 'DENY');

-- CreateEnum
CREATE TYPE "ModuleDefinitionStatus" AS ENUM ('DRAFT', 'ACTIVE', 'DEPRECATED', 'RETIRED');

-- CreateEnum
CREATE TYPE "TenantModuleStatus" AS ENUM ('ENABLED', 'DISABLED', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "FinanceAccountStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'CLOSED');

-- CreateEnum
CREATE TYPE "LedgerDirection" AS ENUM ('DEBIT', 'CREDIT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accountStatus" "AccountStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "TenantModule" ADD COLUMN     "disabledAt" TIMESTAMP(3),
ADD COLUMN     "enabledAt" TIMESTAMP(3),
ADD COLUMN     "moduleId" TEXT,
ADD COLUMN     "status" "TenantModuleStatus" NOT NULL DEFAULT 'ENABLED';

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "code" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Permission" ADD COLUMN     "action" TEXT,
ADD COLUMN     "resource" TEXT;

-- AlterTable
ALTER TABLE "RolePermission" ADD COLUMN     "effect" "RolePermissionEffect" NOT NULL DEFAULT 'ALLOW';

-- AlterTable
ALTER TABLE "MembershipRole" ADD COLUMN     "expiresAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "creatorMembershipId" TEXT;

-- AlterTable
ALTER TABLE "RequestApproval" ADD COLUMN     "stepDefinitionId" TEXT;

-- AlterTable
ALTER TABLE "FinanceAccount" ADD COLUMN     "status" "FinanceAccountStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "FinanceTransaction" ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "creatorMembershipId" TEXT;

-- CreateTable
CREATE TABLE "Credential" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "passwordChangedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Credential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordResetToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExternalIdentity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerSubject" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExternalIdentity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "identifier" TEXT NOT NULL,
    "ipAddress" TEXT,
    "result" TEXT NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoginAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "bio" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserContact" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountStatusHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fromStatus" "AccountStatus",
    "toStatus" "AccountStatus" NOT NULL,
    "reason" TEXT,
    "changedBy" TEXT,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AccountStatusHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantRegistration" (
    "id" TEXT NOT NULL,
    "applicantUserId" TEXT NOT NULL,
    "proposedName" TEXT NOT NULL,
    "proposedSlug" TEXT NOT NULL,
    "status" "TenantRegistrationStatus" NOT NULL DEFAULT 'SUBMITTED',
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" TIMESTAMP(3),
    "reviewedById" TEXT,
    "createdTenantId" TEXT,
    "reviewNote" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantLifecycleEvent" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "fromStatus" "TenantStatus",
    "toStatus" "TenantStatus" NOT NULL,
    "reason" TEXT,
    "actorId" TEXT,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TenantLifecycleEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnershipAssignment" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "effectiveFrom" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "effectiveTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OwnershipAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationProfile" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "description" TEXT,
    "contactEmail" TEXT,
    "address" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrganizationProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationUnit" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "parentId" TEXT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrganizationUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "unitId" TEXT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembershipInvitation" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "invitedByMembershipId" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "acceptedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MembershipInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembershipStatusHistory" (
    "id" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "fromStatus" "MembershipStatus",
    "toStatus" "MembershipStatus" NOT NULL,
    "reason" TEXT,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changedByMembershipId" TEXT,

    CONSTRAINT "MembershipStatusHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberSkill" (
    "membershipId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "level" TEXT,
    "evidence" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MemberSkill_pkey" PRIMARY KEY ("membershipId","skillId")
);

-- CreateTable
CREATE TABLE "MembershipUnit" (
    "membershipId" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "effectiveFrom" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "effectiveTo" TIMESTAMP(3),

    CONSTRAINT "MembershipUnit_pkey" PRIMARY KEY ("membershipId","unitId","effectiveFrom")
);

-- CreateTable
CREATE TABLE "MembershipPosition" (
    "membershipId" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "effectiveFrom" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "effectiveTo" TIMESTAMP(3),

    CONSTRAINT "MembershipPosition_pkey" PRIMARY KEY ("membershipId","positionId","effectiveFrom")
);

-- CreateTable
CREATE TABLE "PermissionScope" (
    "id" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "scopeType" TEXT NOT NULL,
    "scopeReferenceId" TEXT NOT NULL,

    CONSTRAINT "PermissionScope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DelegationPolicy" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "grantorRoleId" TEXT NOT NULL,
    "granteeRoleId" TEXT NOT NULL,
    "maxPermissionLevel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DelegationPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleDefinition" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "status" "ModuleDefinitionStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModuleDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleDependency" (
    "moduleId" TEXT NOT NULL,
    "dependsOnModuleId" TEXT NOT NULL,
    "minimumVersion" TEXT,

    CONSTRAINT "ModuleDependency_pkey" PRIMARY KEY ("moduleId","dependsOnModuleId")
);

-- CreateTable
CREATE TABLE "ModuleConfigVersion" (
    "id" TEXT NOT NULL,
    "tenantModuleId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "config" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModuleConfigVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSetting" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'vi',
    "timezone" TEXT NOT NULL DEFAULT 'Asia/Ho_Chi_Minh',
    "appearance" TEXT NOT NULL DEFAULT 'system',
    "dateFormat" TEXT NOT NULL DEFAULT 'dd/MM/yyyy',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantPreference" (
    "id" TEXT NOT NULL,
    "userSettingId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "defaultLandingPage" TEXT,
    "compactMode" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationPreference" (
    "id" TEXT NOT NULL,
    "userSettingId" TEXT,
    "userId" TEXT,
    "tenantId" TEXT,
    "eventType" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "digestMode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotificationPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApprovalPolicy" (
    "id" TEXT NOT NULL,
    "requestTypeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "preventSelfApproval" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApprovalPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApprovalStepDefinition" (
    "id" TEXT NOT NULL,
    "policyId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "requiredRoleId" TEXT,
    "minimumApprovals" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "ApprovalStepDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestAttachment" (
    "id" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "fileObjectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RequestAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestComment" (
    "id" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "authorMembershipId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RequestComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestStatusHistory" (
    "id" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "fromStatus" "RequestStatus",
    "toStatus" "RequestStatus" NOT NULL,
    "changedByMembershipId" TEXT,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RequestStatusHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FileObject" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "storageKey" TEXT NOT NULL,
    "mediaType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "checksum" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FileObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "currentVersionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentVersion" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "versionNumber" INTEGER NOT NULL,
    "fileObjectId" TEXT NOT NULL,
    "createdByMembershipId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DocumentVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentTemplate" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "templateFileId" TEXT NOT NULL,
    "schema" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneratedDocument" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "sourceEntityType" TEXT NOT NULL,
    "sourceEntityId" TEXT NOT NULL,
    "outputFileId" TEXT NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GeneratedDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentApproval" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "approverMembershipId" TEXT NOT NULL,
    "status" "ApprovalStatus" NOT NULL DEFAULT 'PENDING',
    "decidedAt" TIMESTAMP(3),
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DocumentApproval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentTag" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DocumentTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentTagAssignment" (
    "documentId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "DocumentTagAssignment_pkey" PRIMARY KEY ("documentId","tagId")
);

-- CreateTable
CREATE TABLE "TenantBranding" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "logoAssetId" TEXT,
    "faviconAssetId" TEXT,
    "primaryColor" TEXT,
    "secondaryColor" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TenantBranding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandAsset" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "fileObjectId" TEXT NOT NULL,
    "assetType" TEXT NOT NULL,
    "altText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BrandAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThemeToken" (
    "id" TEXT NOT NULL,
    "brandingId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ThemeToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandingVersion" (
    "id" TEXT NOT NULL,
    "brandingId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "snapshot" JSONB NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BrandingVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomDomain" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "verificationStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomDomain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceCategory" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FinanceTransactionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinanceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BudgetLine" (
    "id" TEXT NOT NULL,
    "budgetId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "allocatedAmount" DECIMAL(18,2) NOT NULL DEFAULT 0,
    "spentAmount" DECIMAL(18,2) NOT NULL DEFAULT 0,

    CONSTRAINT "BudgetLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LedgerEntry" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "direction" "LedgerDirection" NOT NULL,
    "amount" DECIMAL(18,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LedgerEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionApproval" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "approverMembershipId" TEXT NOT NULL,
    "status" "ApprovalStatus" NOT NULL DEFAULT 'PENDING',
    "decidedAt" TIMESTAMP(3),
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransactionApproval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceEvidence" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "fileObjectId" TEXT NOT NULL,
    "evidenceType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinanceEvidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetCategory" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "assetCode" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetLocation" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unitId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetItem" (
    "id" TEXT NOT NULL,
    "assetId" TEXT NOT NULL,
    "locationId" TEXT,
    "serialNumber" TEXT,
    "condition" TEXT,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetAssignment" (
    "id" TEXT NOT NULL,
    "assetItemId" TEXT NOT NULL,
    "holderMembershipId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnedAt" TIMESTAMP(3),

    CONSTRAINT "AssetAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetCheckout" (
    "id" TEXT NOT NULL,
    "assetItemId" TEXT NOT NULL,
    "borrowerMembershipId" TEXT NOT NULL,
    "checkoutAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueAt" TIMESTAMP(3),
    "returnedAt" TIMESTAMP(3),

    CONSTRAINT "AssetCheckout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaintenanceRecord" (
    "id" TEXT NOT NULL,
    "assetItemId" TEXT NOT NULL,
    "issue" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "MaintenanceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meeting" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "unitId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meeting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingParticipant" (
    "meetingId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "participantRole" TEXT NOT NULL,
    "invitationStatus" TEXT NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "MeetingParticipant_pkey" PRIMARY KEY ("meetingId","membershipId")
);

-- CreateTable
CREATE TABLE "AttendanceRecord" (
    "id" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "checkInAt" TIMESTAMP(3),
    "checkOutAt" TIMESTAMP(3),
    "note" TEXT,

    CONSTRAINT "AttendanceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgendaItem" (
    "id" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "ownerMembershipId" TEXT,

    CONSTRAINT "AgendaItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingMinute" (
    "id" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "approvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingMinute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingActionItem" (
    "id" TEXT NOT NULL,
    "meetingId" TEXT NOT NULL,
    "assigneeMembershipId" TEXT,
    "title" TEXT NOT NULL,
    "dueAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingActionItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineRule" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DisciplineRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineCase" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "subjectMembershipId" TEXT NOT NULL,
    "ruleId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "DisciplineCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineEvidence" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "fileObjectId" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DisciplineEvidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineAction" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "actionType" TEXT NOT NULL,
    "effectiveFrom" TIMESTAMP(3),
    "effectiveTo" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "DisciplineAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KpiDefinition" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "formula" TEXT,
    "threshold" DECIMAL(18,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KpiDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KpiPeriod" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KpiPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KpiRecord" (
    "id" TEXT NOT NULL,
    "definitionId" TEXT NOT NULL,
    "periodId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "value" DECIMAL(18,2) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KpiRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationCycle" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EvaluationCycle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationCriterion" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "component" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EvaluationCriterion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CriterionVersion" (
    "id" TEXT NOT NULL,
    "criterionId" TEXT NOT NULL,
    "effectiveFrom" TIMESTAMP(3) NOT NULL,
    "effectiveTo" TIMESTAMP(3),
    "maxScore" DECIMAL(18,2) NOT NULL,
    "calculationMethod" TEXT,

    CONSTRAINT "CriterionVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationAssignment" (
    "id" TEXT NOT NULL,
    "cycleId" TEXT NOT NULL,
    "subjectMembershipId" TEXT NOT NULL,
    "evaluatorMembershipId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EvaluationAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationScore" (
    "id" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "criterionVersionId" TEXT NOT NULL,
    "score" DECIMAL(18,2) NOT NULL,
    "note" TEXT,

    CONSTRAINT "EvaluationScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationEvidence" (
    "id" TEXT NOT NULL,
    "scoreId" TEXT NOT NULL,
    "fileObjectId" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "EvaluationEvidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationResult" (
    "id" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "totalScore" DECIMAL(18,2) NOT NULL,
    "classification" TEXT,
    "finalizedAt" TIMESTAMP(3),

    CONSTRAINT "EvaluationResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competition" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "organizer" TEXT,
    "startAt" TIMESTAMP(3),
    "endAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionTeam" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "leaderMembershipId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompetitionTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMember" (
    "teamId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "role" TEXT,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("teamId","membershipId")
);

-- CreateTable
CREATE TABLE "CompetitionParticipation" (
    "id" TEXT NOT NULL,
    "competitionId" TEXT NOT NULL,
    "teamId" TEXT,
    "membershipId" TEXT,
    "participantType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'REGISTERED',
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompetitionParticipation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionSubmission" (
    "id" TEXT NOT NULL,
    "participationId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "fileObjectId" TEXT,
    "submittedAt" TIMESTAMP(3),

    CONSTRAINT "CompetitionSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL,
    "participationId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "level" TEXT,
    "awardedAt" TIMESTAMP(3),

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecognitionAward" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "awardType" TEXT NOT NULL,
    "grantedAt" TIMESTAMP(3),

    CONSTRAINT "RecognitionAward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationTemplate" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "subjectTemplate" TEXT,
    "bodyTemplate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotificationTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "templateId" TEXT,
    "eventType" TEXT NOT NULL,
    "payload" JSONB,
    "priority" TEXT NOT NULL DEFAULT 'NORMAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationRecipient" (
    "id" TEXT NOT NULL,
    "notificationId" TEXT NOT NULL,
    "membershipId" TEXT,
    "userId" TEXT,
    "readAt" TIMESTAMP(3),

    CONSTRAINT "NotificationRecipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationDelivery" (
    "id" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "providerMessageId" TEXT,
    "attemptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NotificationDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "audienceScope" TEXT NOT NULL,
    "publishAt" TIMESTAMP(3),
    "expireAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dashboard" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerMembershipId" TEXT,
    "scope" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DashboardWidget" (
    "id" TEXT NOT NULL,
    "dashboardId" TEXT NOT NULL,
    "widgetType" TEXT NOT NULL,
    "metricDefinitionId" TEXT,
    "position" JSONB NOT NULL,
    "config" JSONB,

    CONSTRAINT "DashboardWidget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricDefinition" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sourceModule" TEXT NOT NULL,
    "calculation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MetricDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricSnapshot" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "metricDefinitionId" TEXT NOT NULL,
    "value" DECIMAL(18,2) NOT NULL,
    "dimension" JSONB,
    "capturedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MetricSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportDefinition" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "queryDefinition" JSONB NOT NULL,
    "format" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReportDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportRun" (
    "id" TEXT NOT NULL,
    "reportDefinitionId" TEXT NOT NULL,
    "requestedByMembershipId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "ReportRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExportFile" (
    "id" TEXT NOT NULL,
    "reportRunId" TEXT NOT NULL,
    "fileObjectId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "ExportFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiProviderConfig" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "secretReference" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiProviderConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiPolicy" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "allowedUseCase" TEXT NOT NULL,
    "dataClassification" TEXT NOT NULL,
    "humanReviewRequired" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiPromptTemplate" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "template" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiPromptTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiRequest" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "requesterMembershipId" TEXT NOT NULL,
    "providerConfigId" TEXT,
    "promptTemplateId" TEXT,
    "purpose" TEXT NOT NULL,
    "inputHash" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiResponse" (
    "id" TEXT NOT NULL,
    "aiRequestId" TEXT NOT NULL,
    "providerRequestId" TEXT,
    "content" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "latencyMs" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiUsageRecord" (
    "id" TEXT NOT NULL,
    "aiRequestId" TEXT NOT NULL,
    "inputTokens" INTEGER NOT NULL DEFAULT 0,
    "outputTokens" INTEGER NOT NULL DEFAULT 0,
    "estimatedCost" DECIMAL(18,6) NOT NULL DEFAULT 0,

    CONSTRAINT "AiUsageRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiFeedback" (
    "id" TEXT NOT NULL,
    "aiResponseId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditEvent" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT,
    "actorUserId" TEXT,
    "actorMembershipId" TEXT,
    "action" TEXT NOT NULL,
    "result" "AuditResult" NOT NULL DEFAULT 'SUCCESS',
    "entityType" TEXT,
    "entityId" TEXT,
    "correlationId" TEXT,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditChange" (
    "id" TEXT NOT NULL,
    "auditEventId" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "beforeValue" JSONB,
    "afterValue" JSONB,

    CONSTRAINT "AuditChange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CorrelationContext" (
    "correlationId" TEXT NOT NULL,
    "requestId" TEXT,
    "traceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CorrelationContext_pkey" PRIMARY KEY ("correlationId")
);

-- CreateTable
CREATE TABLE "SecurityEvent" (
    "id" TEXT NOT NULL,
    "auditEventId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "riskLevel" TEXT NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SecurityEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditRetentionPolicy" (
    "id" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "retentionDays" INTEGER NOT NULL,
    "archiveStrategy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuditRetentionPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credential_userId_key" ON "Credential"("userId");

-- CreateIndex
CREATE INDEX "Credential_userId_idx" ON "Credential"("userId");

-- CreateIndex
CREATE INDEX "RefreshToken_sessionId_idx" ON "RefreshToken"("sessionId");

-- CreateIndex
CREATE INDEX "RefreshToken_expiresAt_idx" ON "RefreshToken"("expiresAt");

-- CreateIndex
CREATE INDEX "VerificationToken_userId_idx" ON "VerificationToken"("userId");

-- CreateIndex
CREATE INDEX "VerificationToken_expiresAt_idx" ON "VerificationToken"("expiresAt");

-- CreateIndex
CREATE INDEX "PasswordResetToken_userId_idx" ON "PasswordResetToken"("userId");

-- CreateIndex
CREATE INDEX "PasswordResetToken_expiresAt_idx" ON "PasswordResetToken"("expiresAt");

-- CreateIndex
CREATE INDEX "ExternalIdentity_userId_idx" ON "ExternalIdentity"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ExternalIdentity_provider_providerSubject_key" ON "ExternalIdentity"("provider", "providerSubject");

-- CreateIndex
CREATE INDEX "LoginAttempt_userId_occurredAt_idx" ON "LoginAttempt"("userId", "occurredAt");

-- CreateIndex
CREATE INDEX "LoginAttempt_identifier_occurredAt_idx" ON "LoginAttempt"("identifier", "occurredAt");

-- CreateIndex
CREATE INDEX "LoginAttempt_ipAddress_occurredAt_idx" ON "LoginAttempt"("ipAddress", "occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE INDEX "UserProfile_userId_idx" ON "UserProfile"("userId");

-- CreateIndex
CREATE INDEX "UserContact_userId_idx" ON "UserContact"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserContact_userId_type_value_key" ON "UserContact"("userId", "type", "value");

-- CreateIndex
CREATE INDEX "AccountStatusHistory_userId_changedAt_idx" ON "AccountStatusHistory"("userId", "changedAt");

-- CreateIndex
CREATE INDEX "AccountStatusHistory_changedBy_changedAt_idx" ON "AccountStatusHistory"("changedBy", "changedAt");

-- CreateIndex
CREATE INDEX "TenantRegistration_applicantUserId_idx" ON "TenantRegistration"("applicantUserId");

-- CreateIndex
CREATE INDEX "TenantRegistration_createdTenantId_idx" ON "TenantRegistration"("createdTenantId");

-- CreateIndex
CREATE INDEX "TenantRegistration_status_submittedAt_idx" ON "TenantRegistration"("status", "submittedAt");

-- CreateIndex
CREATE UNIQUE INDEX "TenantRegistration_proposedSlug_key" ON "TenantRegistration"("proposedSlug");

-- CreateIndex
CREATE INDEX "TenantLifecycleEvent_tenantId_occurredAt_idx" ON "TenantLifecycleEvent"("tenantId", "occurredAt");

-- CreateIndex
CREATE INDEX "TenantLifecycleEvent_actorId_occurredAt_idx" ON "TenantLifecycleEvent"("actorId", "occurredAt");

-- CreateIndex
CREATE INDEX "OwnershipAssignment_tenantId_effectiveFrom_idx" ON "OwnershipAssignment"("tenantId", "effectiveFrom");

-- CreateIndex
CREATE INDEX "OwnershipAssignment_membershipId_idx" ON "OwnershipAssignment"("membershipId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationProfile_tenantId_key" ON "OrganizationProfile"("tenantId");

-- CreateIndex
CREATE INDEX "OrganizationUnit_tenantId_idx" ON "OrganizationUnit"("tenantId");

-- CreateIndex
CREATE INDEX "OrganizationUnit_parentId_idx" ON "OrganizationUnit"("parentId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationUnit_tenantId_code_key" ON "OrganizationUnit"("tenantId", "code");

-- CreateIndex
CREATE INDEX "Position_tenantId_idx" ON "Position"("tenantId");

-- CreateIndex
CREATE INDEX "Position_unitId_idx" ON "Position"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "Position_tenantId_code_key" ON "Position"("tenantId", "code");

-- CreateIndex
CREATE INDEX "MembershipInvitation_tenantId_status_idx" ON "MembershipInvitation"("tenantId", "status");

-- CreateIndex
CREATE INDEX "MembershipInvitation_email_idx" ON "MembershipInvitation"("email");

-- CreateIndex
CREATE INDEX "MembershipInvitation_invitedByMembershipId_idx" ON "MembershipInvitation"("invitedByMembershipId");

-- CreateIndex
CREATE INDEX "MembershipStatusHistory_membershipId_changedAt_idx" ON "MembershipStatusHistory"("membershipId", "changedAt");

-- CreateIndex
CREATE INDEX "MembershipStatusHistory_changedByMembershipId_idx" ON "MembershipStatusHistory"("changedByMembershipId");

-- CreateIndex
CREATE INDEX "Skill_tenantId_idx" ON "Skill"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_tenantId_name_key" ON "Skill"("tenantId", "name");

-- CreateIndex
CREATE INDEX "MemberSkill_skillId_idx" ON "MemberSkill"("skillId");

-- CreateIndex
CREATE INDEX "MembershipUnit_unitId_idx" ON "MembershipUnit"("unitId");

-- CreateIndex
CREATE INDEX "MembershipPosition_positionId_idx" ON "MembershipPosition"("positionId");

-- CreateIndex
CREATE INDEX "PermissionScope_membershipId_roleId_idx" ON "PermissionScope"("membershipId", "roleId");

-- CreateIndex
CREATE INDEX "PermissionScope_scopeType_scopeReferenceId_idx" ON "PermissionScope"("scopeType", "scopeReferenceId");

-- CreateIndex
CREATE INDEX "DelegationPolicy_tenantId_idx" ON "DelegationPolicy"("tenantId");

-- CreateIndex
CREATE INDEX "DelegationPolicy_grantorRoleId_idx" ON "DelegationPolicy"("grantorRoleId");

-- CreateIndex
CREATE INDEX "DelegationPolicy_granteeRoleId_idx" ON "DelegationPolicy"("granteeRoleId");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleDefinition_key_key" ON "ModuleDefinition"("key");

-- CreateIndex
CREATE INDEX "ModuleDependency_dependsOnModuleId_idx" ON "ModuleDependency"("dependsOnModuleId");

-- CreateIndex
CREATE INDEX "ModuleConfigVersion_tenantModuleId_idx" ON "ModuleConfigVersion"("tenantModuleId");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleConfigVersion_tenantModuleId_version_key" ON "ModuleConfigVersion"("tenantModuleId", "version");

-- CreateIndex
CREATE UNIQUE INDEX "UserSetting_userId_key" ON "UserSetting"("userId");

-- CreateIndex
CREATE INDEX "TenantPreference_tenantId_idx" ON "TenantPreference"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantPreference_userSettingId_tenantId_key" ON "TenantPreference"("userSettingId", "tenantId");

-- CreateIndex
CREATE INDEX "NotificationPreference_userSettingId_idx" ON "NotificationPreference"("userSettingId");

-- CreateIndex
CREATE INDEX "NotificationPreference_userId_tenantId_idx" ON "NotificationPreference"("userId", "tenantId");

-- CreateIndex
CREATE INDEX "NotificationPreference_eventType_channel_idx" ON "NotificationPreference"("eventType", "channel");

-- CreateIndex
CREATE INDEX "ApprovalPolicy_requestTypeId_idx" ON "ApprovalPolicy"("requestTypeId");

-- CreateIndex
CREATE INDEX "ApprovalStepDefinition_requiredRoleId_idx" ON "ApprovalStepDefinition"("requiredRoleId");

-- CreateIndex
CREATE UNIQUE INDEX "ApprovalStepDefinition_policyId_sequence_key" ON "ApprovalStepDefinition"("policyId", "sequence");

-- CreateIndex
CREATE INDEX "RequestAttachment_requestId_idx" ON "RequestAttachment"("requestId");

-- CreateIndex
CREATE INDEX "RequestAttachment_fileObjectId_idx" ON "RequestAttachment"("fileObjectId");

-- CreateIndex
CREATE INDEX "RequestComment_requestId_createdAt_idx" ON "RequestComment"("requestId", "createdAt");

-- CreateIndex
CREATE INDEX "RequestComment_authorMembershipId_idx" ON "RequestComment"("authorMembershipId");

-- CreateIndex
CREATE INDEX "RequestStatusHistory_requestId_changedAt_idx" ON "RequestStatusHistory"("requestId", "changedAt");

-- CreateIndex
CREATE INDEX "RequestStatusHistory_changedByMembershipId_idx" ON "RequestStatusHistory"("changedByMembershipId");

-- CreateIndex
CREATE INDEX "FileObject_tenantId_idx" ON "FileObject"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "FileObject_tenantId_storageKey_key" ON "FileObject"("tenantId", "storageKey");

-- CreateIndex
CREATE INDEX "Document_tenantId_status_idx" ON "Document"("tenantId", "status");

-- CreateIndex
CREATE INDEX "Document_currentVersionId_idx" ON "Document"("currentVersionId");

-- CreateIndex
CREATE UNIQUE INDEX "Document_tenantId_code_key" ON "Document"("tenantId", "code");

-- CreateIndex
CREATE INDEX "DocumentVersion_fileObjectId_idx" ON "DocumentVersion"("fileObjectId");

-- CreateIndex
CREATE INDEX "DocumentVersion_createdByMembershipId_idx" ON "DocumentVersion"("createdByMembershipId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentVersion_documentId_versionNumber_key" ON "DocumentVersion"("documentId", "versionNumber");

-- CreateIndex
CREATE INDEX "DocumentTemplate_templateFileId_idx" ON "DocumentTemplate"("templateFileId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentTemplate_tenantId_name_key" ON "DocumentTemplate"("tenantId", "name");

-- CreateIndex
CREATE INDEX "GeneratedDocument_templateId_idx" ON "GeneratedDocument"("templateId");

-- CreateIndex
CREATE INDEX "GeneratedDocument_sourceEntityType_sourceEntityId_idx" ON "GeneratedDocument"("sourceEntityType", "sourceEntityId");

-- CreateIndex
CREATE INDEX "GeneratedDocument_outputFileId_idx" ON "GeneratedDocument"("outputFileId");

-- CreateIndex
CREATE INDEX "DocumentApproval_documentId_idx" ON "DocumentApproval"("documentId");

-- CreateIndex
CREATE INDEX "DocumentApproval_approverMembershipId_idx" ON "DocumentApproval"("approverMembershipId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentTag_tenantId_name_key" ON "DocumentTag"("tenantId", "name");

-- CreateIndex
CREATE INDEX "DocumentTagAssignment_tagId_idx" ON "DocumentTagAssignment"("tagId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantBranding_tenantId_key" ON "TenantBranding"("tenantId");

-- CreateIndex
CREATE INDEX "BrandAsset_tenantId_idx" ON "BrandAsset"("tenantId");

-- CreateIndex
CREATE INDEX "BrandAsset_fileObjectId_idx" ON "BrandAsset"("fileObjectId");

-- CreateIndex
CREATE UNIQUE INDEX "ThemeToken_brandingId_key_key" ON "ThemeToken"("brandingId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "BrandingVersion_brandingId_version_key" ON "BrandingVersion"("brandingId", "version");

-- CreateIndex
CREATE UNIQUE INDEX "CustomDomain_hostname_key" ON "CustomDomain"("hostname");

-- CreateIndex
CREATE INDEX "CustomDomain_tenantId_idx" ON "CustomDomain"("tenantId");

-- CreateIndex
CREATE INDEX "FinanceCategory_tenantId_type_idx" ON "FinanceCategory"("tenantId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "FinanceCategory_tenantId_code_key" ON "FinanceCategory"("tenantId", "code");

-- CreateIndex
CREATE INDEX "Budget_tenantId_status_idx" ON "Budget"("tenantId", "status");

-- CreateIndex
CREATE INDEX "Budget_periodStart_periodEnd_idx" ON "Budget"("periodStart", "periodEnd");

-- CreateIndex
CREATE INDEX "BudgetLine_categoryId_idx" ON "BudgetLine"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "BudgetLine_budgetId_categoryId_key" ON "BudgetLine"("budgetId", "categoryId");

-- CreateIndex
CREATE INDEX "LedgerEntry_transactionId_idx" ON "LedgerEntry"("transactionId");

-- CreateIndex
CREATE INDEX "LedgerEntry_accountId_idx" ON "LedgerEntry"("accountId");

-- CreateIndex
CREATE INDEX "TransactionApproval_transactionId_idx" ON "TransactionApproval"("transactionId");

-- CreateIndex
CREATE INDEX "TransactionApproval_approverMembershipId_idx" ON "TransactionApproval"("approverMembershipId");

-- CreateIndex
CREATE INDEX "FinanceEvidence_transactionId_idx" ON "FinanceEvidence"("transactionId");

-- CreateIndex
CREATE INDEX "FinanceEvidence_fileObjectId_idx" ON "FinanceEvidence"("fileObjectId");

-- CreateIndex
CREATE UNIQUE INDEX "AssetCategory_tenantId_code_key" ON "AssetCategory"("tenantId", "code");

-- CreateIndex
CREATE INDEX "Asset_categoryId_idx" ON "Asset"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Asset_tenantId_assetCode_key" ON "Asset"("tenantId", "assetCode");

-- CreateIndex
CREATE INDEX "AssetLocation_unitId_idx" ON "AssetLocation"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "AssetLocation_tenantId_name_key" ON "AssetLocation"("tenantId", "name");

-- CreateIndex
CREATE INDEX "AssetItem_locationId_idx" ON "AssetItem"("locationId");

-- CreateIndex
CREATE INDEX "AssetItem_status_idx" ON "AssetItem"("status");

-- CreateIndex
CREATE UNIQUE INDEX "AssetItem_assetId_serialNumber_key" ON "AssetItem"("assetId", "serialNumber");

-- CreateIndex
CREATE INDEX "AssetAssignment_assetItemId_idx" ON "AssetAssignment"("assetItemId");

-- CreateIndex
CREATE INDEX "AssetAssignment_holderMembershipId_idx" ON "AssetAssignment"("holderMembershipId");

-- CreateIndex
CREATE INDEX "AssetCheckout_assetItemId_idx" ON "AssetCheckout"("assetItemId");

-- CreateIndex
CREATE INDEX "AssetCheckout_borrowerMembershipId_idx" ON "AssetCheckout"("borrowerMembershipId");

-- CreateIndex
CREATE INDEX "MaintenanceRecord_assetItemId_idx" ON "MaintenanceRecord"("assetItemId");

-- CreateIndex
CREATE INDEX "MaintenanceRecord_status_idx" ON "MaintenanceRecord"("status");

-- CreateIndex
CREATE INDEX "Meeting_tenantId_startAt_idx" ON "Meeting"("tenantId", "startAt");

-- CreateIndex
CREATE INDEX "Meeting_unitId_idx" ON "Meeting"("unitId");

-- CreateIndex
CREATE INDEX "MeetingParticipant_membershipId_idx" ON "MeetingParticipant"("membershipId");

-- CreateIndex
CREATE INDEX "AttendanceRecord_membershipId_idx" ON "AttendanceRecord"("membershipId");

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceRecord_meetingId_membershipId_key" ON "AttendanceRecord"("meetingId", "membershipId");

-- CreateIndex
CREATE INDEX "AgendaItem_ownerMembershipId_idx" ON "AgendaItem"("ownerMembershipId");

-- CreateIndex
CREATE UNIQUE INDEX "AgendaItem_meetingId_sequence_key" ON "AgendaItem"("meetingId", "sequence");

-- CreateIndex
CREATE UNIQUE INDEX "MeetingMinute_meetingId_key" ON "MeetingMinute"("meetingId");

-- CreateIndex
CREATE INDEX "MeetingActionItem_meetingId_idx" ON "MeetingActionItem"("meetingId");

-- CreateIndex
CREATE INDEX "MeetingActionItem_assigneeMembershipId_idx" ON "MeetingActionItem"("assigneeMembershipId");

-- CreateIndex
CREATE UNIQUE INDEX "DisciplineRule_tenantId_code_key" ON "DisciplineRule"("tenantId", "code");

-- CreateIndex
CREATE INDEX "DisciplineCase_tenantId_status_idx" ON "DisciplineCase"("tenantId", "status");

-- CreateIndex
CREATE INDEX "DisciplineCase_subjectMembershipId_idx" ON "DisciplineCase"("subjectMembershipId");

-- CreateIndex
CREATE INDEX "DisciplineCase_ruleId_idx" ON "DisciplineCase"("ruleId");

-- CreateIndex
CREATE INDEX "DisciplineEvidence_caseId_idx" ON "DisciplineEvidence"("caseId");

-- CreateIndex
CREATE INDEX "DisciplineEvidence_fileObjectId_idx" ON "DisciplineEvidence"("fileObjectId");

-- CreateIndex
CREATE INDEX "DisciplineAction_caseId_idx" ON "DisciplineAction"("caseId");

-- CreateIndex
CREATE INDEX "DisciplineAction_status_idx" ON "DisciplineAction"("status");

-- CreateIndex
CREATE UNIQUE INDEX "KpiDefinition_tenantId_code_key" ON "KpiDefinition"("tenantId", "code");

-- CreateIndex
CREATE INDEX "KpiPeriod_startAt_endAt_idx" ON "KpiPeriod"("startAt", "endAt");

-- CreateIndex
CREATE UNIQUE INDEX "KpiPeriod_tenantId_name_key" ON "KpiPeriod"("tenantId", "name");

-- CreateIndex
CREATE INDEX "KpiRecord_membershipId_idx" ON "KpiRecord"("membershipId");

-- CreateIndex
CREATE UNIQUE INDEX "KpiRecord_definitionId_periodId_membershipId_key" ON "KpiRecord"("definitionId", "periodId", "membershipId");

-- CreateIndex
CREATE UNIQUE INDEX "EvaluationCycle_tenantId_code_key" ON "EvaluationCycle"("tenantId", "code");

-- CreateIndex
CREATE UNIQUE INDEX "EvaluationCriterion_tenantId_code_key" ON "EvaluationCriterion"("tenantId", "code");

-- CreateIndex
CREATE INDEX "CriterionVersion_criterionId_idx" ON "CriterionVersion"("criterionId");

-- CreateIndex
CREATE INDEX "EvaluationAssignment_subjectMembershipId_idx" ON "EvaluationAssignment"("subjectMembershipId");

-- CreateIndex
CREATE INDEX "EvaluationAssignment_evaluatorMembershipId_idx" ON "EvaluationAssignment"("evaluatorMembershipId");

-- CreateIndex
CREATE UNIQUE INDEX "EvaluationAssignment_cycleId_subjectMembershipId_evaluatorM_key" ON "EvaluationAssignment"("cycleId", "subjectMembershipId", "evaluatorMembershipId");

-- CreateIndex
CREATE INDEX "EvaluationScore_criterionVersionId_idx" ON "EvaluationScore"("criterionVersionId");

-- CreateIndex
CREATE UNIQUE INDEX "EvaluationScore_assignmentId_criterionVersionId_key" ON "EvaluationScore"("assignmentId", "criterionVersionId");

-- CreateIndex
CREATE INDEX "EvaluationEvidence_scoreId_idx" ON "EvaluationEvidence"("scoreId");

-- CreateIndex
CREATE INDEX "EvaluationEvidence_fileObjectId_idx" ON "EvaluationEvidence"("fileObjectId");

-- CreateIndex
CREATE UNIQUE INDEX "EvaluationResult_assignmentId_key" ON "EvaluationResult"("assignmentId");

-- CreateIndex
CREATE INDEX "Competition_tenantId_status_idx" ON "Competition"("tenantId", "status");

-- CreateIndex
CREATE INDEX "CompetitionTeam_tenantId_idx" ON "CompetitionTeam"("tenantId");

-- CreateIndex
CREATE INDEX "CompetitionTeam_leaderMembershipId_idx" ON "CompetitionTeam"("leaderMembershipId");

-- CreateIndex
CREATE INDEX "TeamMember_membershipId_idx" ON "TeamMember"("membershipId");

-- CreateIndex
CREATE INDEX "CompetitionParticipation_competitionId_idx" ON "CompetitionParticipation"("competitionId");

-- CreateIndex
CREATE INDEX "CompetitionParticipation_teamId_idx" ON "CompetitionParticipation"("teamId");

-- CreateIndex
CREATE INDEX "CompetitionParticipation_membershipId_idx" ON "CompetitionParticipation"("membershipId");

-- CreateIndex
CREATE INDEX "CompetitionSubmission_participationId_idx" ON "CompetitionSubmission"("participationId");

-- CreateIndex
CREATE INDEX "CompetitionSubmission_fileObjectId_idx" ON "CompetitionSubmission"("fileObjectId");

-- CreateIndex
CREATE INDEX "Achievement_participationId_idx" ON "Achievement"("participationId");

-- CreateIndex
CREATE INDEX "RecognitionAward_tenantId_idx" ON "RecognitionAward"("tenantId");

-- CreateIndex
CREATE INDEX "RecognitionAward_achievementId_idx" ON "RecognitionAward"("achievementId");

-- CreateIndex
CREATE UNIQUE INDEX "NotificationTemplate_tenantId_code_channel_key" ON "NotificationTemplate"("tenantId", "code", "channel");

-- CreateIndex
CREATE INDEX "Notification_tenantId_createdAt_idx" ON "Notification"("tenantId", "createdAt");

-- CreateIndex
CREATE INDEX "Notification_templateId_idx" ON "Notification"("templateId");

-- CreateIndex
CREATE INDEX "NotificationRecipient_notificationId_idx" ON "NotificationRecipient"("notificationId");

-- CreateIndex
CREATE INDEX "NotificationRecipient_membershipId_idx" ON "NotificationRecipient"("membershipId");

-- CreateIndex
CREATE INDEX "NotificationRecipient_userId_idx" ON "NotificationRecipient"("userId");

-- CreateIndex
CREATE INDEX "NotificationDelivery_recipientId_idx" ON "NotificationDelivery"("recipientId");

-- CreateIndex
CREATE INDEX "NotificationDelivery_status_attemptedAt_idx" ON "NotificationDelivery"("status", "attemptedAt");

-- CreateIndex
CREATE INDEX "Announcement_tenantId_publishAt_idx" ON "Announcement"("tenantId", "publishAt");

-- CreateIndex
CREATE INDEX "Dashboard_tenantId_idx" ON "Dashboard"("tenantId");

-- CreateIndex
CREATE INDEX "Dashboard_ownerMembershipId_idx" ON "Dashboard"("ownerMembershipId");

-- CreateIndex
CREATE INDEX "DashboardWidget_dashboardId_idx" ON "DashboardWidget"("dashboardId");

-- CreateIndex
CREATE INDEX "DashboardWidget_metricDefinitionId_idx" ON "DashboardWidget"("metricDefinitionId");

-- CreateIndex
CREATE UNIQUE INDEX "MetricDefinition_key_key" ON "MetricDefinition"("key");

-- CreateIndex
CREATE INDEX "MetricSnapshot_tenantId_capturedAt_idx" ON "MetricSnapshot"("tenantId", "capturedAt");

-- CreateIndex
CREATE INDEX "MetricSnapshot_metricDefinitionId_idx" ON "MetricSnapshot"("metricDefinitionId");

-- CreateIndex
CREATE INDEX "ReportDefinition_tenantId_idx" ON "ReportDefinition"("tenantId");

-- CreateIndex
CREATE INDEX "ReportRun_reportDefinitionId_idx" ON "ReportRun"("reportDefinitionId");

-- CreateIndex
CREATE INDEX "ReportRun_requestedByMembershipId_idx" ON "ReportRun"("requestedByMembershipId");

-- CreateIndex
CREATE UNIQUE INDEX "ExportFile_reportRunId_key" ON "ExportFile"("reportRunId");

-- CreateIndex
CREATE INDEX "ExportFile_fileObjectId_idx" ON "ExportFile"("fileObjectId");

-- CreateIndex
CREATE INDEX "AiProviderConfig_tenantId_status_idx" ON "AiProviderConfig"("tenantId", "status");

-- CreateIndex
CREATE INDEX "AiPolicy_tenantId_allowedUseCase_idx" ON "AiPolicy"("tenantId", "allowedUseCase");

-- CreateIndex
CREATE UNIQUE INDEX "AiPromptTemplate_tenantId_code_version_key" ON "AiPromptTemplate"("tenantId", "code", "version");

-- CreateIndex
CREATE INDEX "AiRequest_tenantId_status_idx" ON "AiRequest"("tenantId", "status");

-- CreateIndex
CREATE INDEX "AiRequest_requesterMembershipId_idx" ON "AiRequest"("requesterMembershipId");

-- CreateIndex
CREATE INDEX "AiRequest_providerConfigId_idx" ON "AiRequest"("providerConfigId");

-- CreateIndex
CREATE INDEX "AiRequest_promptTemplateId_idx" ON "AiRequest"("promptTemplateId");

-- CreateIndex
CREATE UNIQUE INDEX "AiResponse_aiRequestId_key" ON "AiResponse"("aiRequestId");

-- CreateIndex
CREATE INDEX "AiResponse_providerRequestId_idx" ON "AiResponse"("providerRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "AiUsageRecord_aiRequestId_key" ON "AiUsageRecord"("aiRequestId");

-- CreateIndex
CREATE INDEX "AiFeedback_aiResponseId_idx" ON "AiFeedback"("aiResponseId");

-- CreateIndex
CREATE INDEX "AiFeedback_membershipId_idx" ON "AiFeedback"("membershipId");

-- CreateIndex
CREATE INDEX "AuditEvent_tenantId_occurredAt_idx" ON "AuditEvent"("tenantId", "occurredAt");

-- CreateIndex
CREATE INDEX "AuditEvent_actorUserId_occurredAt_idx" ON "AuditEvent"("actorUserId", "occurredAt");

-- CreateIndex
CREATE INDEX "AuditEvent_actorMembershipId_occurredAt_idx" ON "AuditEvent"("actorMembershipId", "occurredAt");

-- CreateIndex
CREATE INDEX "AuditEvent_entityType_entityId_idx" ON "AuditEvent"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "AuditEvent_correlationId_idx" ON "AuditEvent"("correlationId");

-- CreateIndex
CREATE INDEX "AuditChange_auditEventId_idx" ON "AuditChange"("auditEventId");

-- CreateIndex
CREATE INDEX "CorrelationContext_requestId_idx" ON "CorrelationContext"("requestId");

-- CreateIndex
CREATE INDEX "CorrelationContext_traceId_idx" ON "CorrelationContext"("traceId");

-- CreateIndex
CREATE UNIQUE INDEX "SecurityEvent_auditEventId_key" ON "SecurityEvent"("auditEventId");

-- CreateIndex
CREATE INDEX "SecurityEvent_eventType_riskLevel_idx" ON "SecurityEvent"("eventType", "riskLevel");

-- CreateIndex
CREATE UNIQUE INDEX "AuditRetentionPolicy_scope_key" ON "AuditRetentionPolicy"("scope");

-- CreateIndex
CREATE INDEX "TenantModule_moduleId_idx" ON "TenantModule"("moduleId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_tenantId_code_key" ON "Role"("tenantId", "code");

-- CreateIndex
CREATE INDEX "Request_creatorMembershipId_idx" ON "Request"("creatorMembershipId");

-- CreateIndex
CREATE INDEX "RequestApproval_stepDefinitionId_idx" ON "RequestApproval"("stepDefinitionId");

-- CreateIndex
CREATE INDEX "FinanceTransaction_categoryId_idx" ON "FinanceTransaction"("categoryId");

-- CreateIndex
CREATE INDEX "FinanceTransaction_creatorMembershipId_idx" ON "FinanceTransaction"("creatorMembershipId");

