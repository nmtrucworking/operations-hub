# Class Diagram as-is của repository hiện tại

## 1. Nguồn đối chiếu

Sơ đồ này bám theo `apps/api/prisma/schema.prisma` của repository hiện tại. Các lớp chưa xuất hiện trong Prisma schema không được xem là đã hiện thực.

## 2. Class Diagram

```mermaidm
classDiagram
direction TB

class User {
  +String id
  +String email
  +String passwordHash
  +String fullName
  +String avatarUrl
  +Boolean isActive
  +Boolean isVerified
  +String platformRole
  +DateTime createdAt
  +DateTime updatedAt
}

class Session {
  +String id
  +String userId
  +String refreshTokenHash
  +String userAgent
  +String ipAddress
  +DateTime expiresAt
  +DateTime revokedAt
}

class Tenant {
  +String id
  +String name
  +String slug
  +TenantStatus status
  +String brandColor
}

class TenantModule {
  +String id
  +String tenantId
  +String key
  +Boolean isEnabled
  +Json config
}

class Unit {
  +String id
  +String tenantId
  +String name
  +String parentId
}

class Membership {
  +String id
  +String userId
  +String tenantId
  +MembershipStatus status
  +String title
  +DateTime joinedAt
  +DateTime endedAt
}

class MemberProfile {
  +String id
  +String membershipId
  +String tenantId
  +String unitId
  +String studentCode
  +String phone
  +String[] skills
  +String bio
}

class Role {
  +String id
  +String tenantId
  +String name
  +String description
  +Boolean isSystem
}

class Permission {
  +String id
  +String code
  +String description
}

class RolePermission {
  +String roleId
  +String permissionId
}

class MembershipRole {
  +String membershipId
  +String roleId
  +DateTime assignedAt
}

class RequestType {
  +String id
  +String tenantId
  +String name
  +Json schema
  +Boolean isActive
}

class Request {
  +String id
  +String tenantId
  +String typeId
  +String creatorId
  +String title
  +String description
  +RequestStatus status
  +Json payload
}

class RequestApproval {
  +String id
  +String requestId
  +String membershipId
  +ApprovalStatus status
  +String note
  +DateTime decidedAt
}

class FinanceAccount {
  +String id
  +String tenantId
  +String name
  +String currency
  +Decimal balance
  +Boolean isActive
}

class FinanceTransaction {
  +String id
  +String tenantId
  +String accountId
  +String createdById
  +FinanceTransactionType type
  +FinanceTransactionStatus status
  +Decimal amount
  +String currency
  +String category
  +String description
  +DateTime occurredAt
}

class DashboardMetric {
  +String id
  +String tenantId
  +String key
  +String label
  +Decimal value
  +String unit
}

class AuditLog {
  +String id
  +String tenantId
  +String actorId
  +AuditAction action
  +AuditResult result
  +String entityType
  +String entityId
  +Json before
  +Json after
  +String correlationId
  +String ipAddress
}

User "1" *-- "0..*" Session
User "1" --> "0..*" Membership
Tenant "1" --> "0..*" Membership
Tenant "1" --> "0..*" Unit
Unit "0..1" --> "0..*" Unit : parent / children
Membership "1" *-- "0..1" MemberProfile
Unit "0..1" --> "0..*" MemberProfile

Tenant "1" --> "0..*" Role
Role "1" --> "0..*" RolePermission
Permission "1" --> "0..*" RolePermission
Membership "1" --> "0..*" MembershipRole
Role "1" --> "0..*" MembershipRole

Tenant "1" --> "0..*" TenantModule
Tenant "1" --> "0..*" RequestType
Tenant "1" --> "0..*" Request
RequestType "0..1" --> "0..*" Request
User "1" --> "0..*" Request : creates
Request "1" *-- "0..*" RequestApproval
Membership "1" --> "0..*" RequestApproval : approves

Tenant "1" --> "0..*" FinanceAccount
Tenant "1" --> "0..*" FinanceTransaction
FinanceAccount "1" --> "0..*" FinanceTransaction
User "1" --> "0..*" FinanceTransaction : creates

Tenant "1" --> "0..*" DashboardMetric
Tenant "0..1" --> "0..*" AuditLog
User "0..1" --> "0..*" AuditLog : actor
```

## 3. Nhận xét

- Repository hiện tại đã có lõi đa tenant ở mức dữ liệu.
- `Membership` đã được dùng làm lớp trung gian giữa `User` và `Tenant`.
- `RequestApproval` tham chiếu `Membership`, nhưng người tạo `Request` và `FinanceTransaction` vẫn tham chiếu `User`.
- Branding mới chỉ được biểu diễn bởi `Tenant.brandColor`.
- Chưa có lớp cho Document, Asset, Meeting, Discipline, Evaluation, Competition, Notification và AI.
- Nhiều quan hệ có `tenantId` nhưng chưa có composite relation để cơ sở dữ liệu tự ngăn liên kết chéo tenant.
