export enum TenantStatus {
  Active = "ACTIVE",
  Suspended = "SUSPENDED",
  Archived = "ARCHIVED"
}

export enum MembershipStatus {
  Pending = "PENDING",
  Active = "ACTIVE",
  Suspended = "SUSPENDED",
  Ended = "ENDED"
}

export enum RequestStatus {
  Draft = "DRAFT",
  Submitted = "SUBMITTED",
  InReview = "IN_REVIEW",
  Approved = "APPROVED",
  Rejected = "REJECTED",
  Cancelled = "CANCELLED"
}

export enum ApprovalStatus {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
  NeedsChanges = "NEEDS_CHANGES"
}

export enum FinanceTransactionStatus {
  Draft = "DRAFT",
  PendingApproval = "PENDING_APPROVAL",
  Approved = "APPROVED",
  Recorded = "RECORDED",
  Void = "VOID"
}

export enum FinanceTransactionType {
  Income = "INCOME",
  Expense = "EXPENSE",
  Transfer = "TRANSFER",
  Adjustment = "ADJUSTMENT"
}

export enum ModuleKey {
  Members = "members",
  Requests = "requests",
  Finance = "finance",
  Dashboard = "dashboard",
  Audit = "audit"
}

export enum AuditAction {
  Create = "CREATE",
  Update = "UPDATE",
  Delete = "DELETE",
  Login = "LOGIN",
  Logout = "LOGOUT",
  SelectTenant = "SELECT_TENANT",
  Export = "EXPORT"
}

export enum AuditResult {
  Success = "SUCCESS",
  Failure = "FAILURE"
}

export const PERMISSIONS = {
  tenantRead: "tenant:read",
  userRead: "user:read",
  roleRead: "role:read",
  roleManage: "role:manage",
  memberRead: "member:read",
  memberManage: "member:manage",
  requestRead: "request:read",
  requestManage: "request:manage",
  financeRead: "finance:read",
  financeManage: "finance:manage",
  dashboardRead: "dashboard:read",
  auditRead: "audit:read"
} as const;

export type PermissionCode = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export const MODULES = [
  { key: ModuleKey.Members, name: "Members", requiredPermissions: [PERMISSIONS.memberRead] },
  { key: ModuleKey.Requests, name: "Requests", requiredPermissions: [PERMISSIONS.requestRead] },
  { key: ModuleKey.Finance, name: "Finance", requiredPermissions: [PERMISSIONS.financeRead] },
  { key: ModuleKey.Dashboard, name: "Dashboard", requiredPermissions: [PERMISSIONS.dashboardRead] },
  { key: ModuleKey.Audit, name: "Audit", requiredPermissions: [PERMISSIONS.auditRead] }
] as const;
