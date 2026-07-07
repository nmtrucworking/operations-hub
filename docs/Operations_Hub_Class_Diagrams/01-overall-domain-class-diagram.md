# Class Diagram tổng quát theo miền nghiệp vụ

## 1. Mục tiêu

Sơ đồ này dùng để trình bày cấu trúc miền của toàn bộ Operations Hub mà không đưa toàn bộ thuộc tính của hơn 21 mô-đun vào một hình duy nhất.

## 2. Sơ đồ tổng quát

```mermaid
classDiagram
direction TB

class IdentityContext
class TenantContext
class AccessControlContext
class OrganizationContext
class MemberContext
class WorkflowContext
class DocumentContext
class FinanceContext
class AssetContext
class MeetingContext
class DisciplineContext
class EvaluationContext
class CompetitionContext
class NotificationContext
class ReportingContext
class AiContext
class AuditContext

IdentityContext --> TenantContext : selects tenant
TenantContext --> AccessControlContext : establishes scope
TenantContext --> OrganizationContext : owns structure
TenantContext --> MemberContext : owns memberships
TenantContext --> WorkflowContext : owns requests
TenantContext --> DocumentContext : owns documents
TenantContext --> FinanceContext : owns finance data
TenantContext --> AssetContext : owns assets
TenantContext --> MeetingContext : owns meetings
TenantContext --> DisciplineContext : owns discipline data
TenantContext --> EvaluationContext : owns evaluations
TenantContext --> CompetitionContext : owns competitions
TenantContext --> NotificationContext : owns communications
TenantContext --> ReportingContext : provides metrics
TenantContext --> AiContext : configures AI
TenantContext --> AuditContext : scopes events

AccessControlContext ..> MemberContext : authorizes
AccessControlContext ..> WorkflowContext : authorizes
AccessControlContext ..> DocumentContext : authorizes
AccessControlContext ..> FinanceContext : authorizes
AccessControlContext ..> AssetContext : authorizes
AccessControlContext ..> MeetingContext : authorizes
AccessControlContext ..> DisciplineContext : authorizes
AccessControlContext ..> EvaluationContext : authorizes
AccessControlContext ..> CompetitionContext : authorizes

WorkflowContext --> FinanceContext : may create transaction
WorkflowContext --> DocumentContext : may generate document
MeetingContext --> DisciplineContext : attendance input
MemberContext --> EvaluationContext : evaluation subject
MemberContext --> CompetitionContext : participants
NotificationContext ..> WorkflowContext : sends state changes
ReportingContext ..> MemberContext : reads metrics
ReportingContext ..> FinanceContext : reads metrics
ReportingContext ..> AssetContext : reads metrics
AiContext ..> ReportingContext : generates insight
AuditContext ..> IdentityContext : records actor
AuditContext ..> AccessControlContext : records decisions
```

## 3. Luồng kiểm soát chung

```mermaid
classDiagram
direction LR

class ActorContext {
  +userId
  +tenantId
  +membershipId
  +correlationId
}

class TenantPolicy {
  +ensureTenantActive()
  +ensureSameTenant()
}

class AuthorizationPolicy {
  +requirePermission()
  +requireScope()
  +preventPrivilegeEscalation()
}

class ModulePolicy {
  +ensureModuleEnabled()
  +ensureDependenciesSatisfied()
}

class BusinessInvariantPolicy {
  +validateTransition()
  +validateAggregate()
}

class AuditRecorder {
  +recordSuccess()
  +recordFailure()
}

ActorContext --> TenantPolicy
TenantPolicy --> AuthorizationPolicy
AuthorizationPolicy --> ModulePolicy
ModulePolicy --> BusinessInvariantPolicy
BusinessInvariantPolicy --> AuditRecorder
```

## 4. Nguyên tắc trình bày trong báo cáo

Không nên dùng sơ đồ này để thay thế các sơ đồ chi tiết. Sơ đồ tổng quát chỉ trả lời:

- Có những miền nghiệp vụ nào?
- Miền nào sở hữu dữ liệu?
- Miền nào phụ thuộc hoặc cung cấp dữ liệu cho miền khác?
- Các kiểm soát xuyên suốt được áp dụng ở đâu?
