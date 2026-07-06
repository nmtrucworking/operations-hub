# MA TRẬN TRUY VẾT 21 NHÓM USE CASE

## 1. Ma trận tổng hợp

| Use Case | Số UC thành phần | Actor | Phụ thuộc/chức năng dùng chung | Thực thể logic chính | Mức ưu tiên |
|---|---:|---|---|---|---|
| `UC-TENANT` | 50 | ACT-GUEST, ACT-PLATFORM-USER, ACT-ORG-REGISTRANT, ACT-TENANT-OWNER, ACT-PLATFORM-ADMIN, ACT-EXTERNAL-SERVICE | UC-AUTH, UC-USER, UC-RBAC, UC-ORG, UC-MODULE, UC-AUDIT | Tenant, TenantRegistration, Membership, Role | Nền tảng bắt buộc |
| `UC-AUTH` | 36 | ACT-GUEST, ACT-PLATFORM-USER, ACT-EXTERNAL-SERVICE | UC-USER, UC-TENANT, UC-AUDIT | User, Credential, Session, RefreshToken | Nền tảng bắt buộc |
| `UC-USER` | 33 | ACT-PLATFORM-USER, ACT-TENANT-ADMIN, ACT-PLATFORM-ADMIN | UC-AUTH, UC-TENANT, UC-MEMBER, UC-AUDIT | User, UserProfile, UserStatusHistory, Membership | Nền tảng bắt buộc |
| `UC-RBAC` | 38 | ACT-TENANT-ADMIN, ACT-TENANT-OWNER, ACT-UNIT-ADMIN, ACT-PLATFORM-ADMIN | UC-TENANT, UC-ORG, UC-MEMBER, UC-MODULE, UC-AUDIT | Role, Permission, RolePermission, MembershipRole | Nền tảng bắt buộc |
| `UC-ORG` | 34 | ACT-TENANT-ADMIN, ACT-TENANT-OWNER, ACT-UNIT-ADMIN, ACT-ORG-REGISTRANT | UC-TENANT, UC-MEMBER, UC-RBAC, UC-AUDIT | OrganizationProfile, OrganizationUnit, Position, UnitMembership | Nền tảng bắt buộc |
| `UC-BRAND` | 35 | ACT-TENANT-ADMIN, ACT-TENANT-OWNER, ACT-EXTERNAL-SERVICE | UC-TENANT, UC-AUDIT, UC-SETTING | BrandingConfiguration, BrandingVersion, BrandingAsset, ThemeToken | Nền tảng bắt buộc |
| `UC-MODULE` | 36 | ACT-TENANT-ADMIN, ACT-TENANT-OWNER, ACT-PLATFORM-ADMIN | UC-TENANT, UC-RBAC, UC-AUDIT | ModuleCatalog, TenantModule, ModuleDependency, ModuleConfiguration | Nền tảng bắt buộc |
| `UC-SETTING` | 28 | ACT-PLATFORM-USER, ACT-TENANT-MEMBER | UC-AUTH, UC-USER, UC-TENANT, UC-NOTIFICATION | UserSetting, TenantUserSetting, NotificationPreference, AccessibilityPreference | Năng lực dùng chung |
| `UC-MEMBER` | 41 | ACT-TENANT-MEMBER, ACT-UNIT-ADMIN, ACT-MODULE-SPECIALIST, ACT-TENANT-ADMIN | UC-USER, UC-TENANT, UC-ORG, UC-RBAC, UC-NOTIFICATION, UC-AUDIT | Membership, MembershipInvitation, MemberProfile, MembershipStatusHistory | Nền tảng bắt buộc |
| `UC-REQUEST` | 43 | ACT-TENANT-MEMBER, ACT-MODULE-SPECIALIST, ACT-APPROVER | UC-MEMBER, UC-RBAC, UC-DOCUMENT, UC-FINANCE, UC-NOTIFICATION, UC-AUDIT | RequestType, Request, RequestFieldValue, ApprovalWorkflow | Mô-đun vận hành |
| `UC-DOCUMENT` | 46 | ACT-TENANT-MEMBER, ACT-MODULE-SPECIALIST, ACT-APPROVER, ACT-AUDITOR, ACT-EXTERNAL-SERVICE | UC-RBAC, UC-REQUEST, UC-NOTIFICATION, UC-AUDIT | DocumentType, DocumentTemplate, Document, DocumentVersion | Mô-đun vận hành |
| `UC-FINANCE` | 52 | ACT-TENANT-MEMBER, ACT-MODULE-SPECIALIST, ACT-APPROVER, ACT-TENANT-ADMIN, ACT-AUDITOR, ACT-EXTERNAL-SERVICE | UC-REQUEST, UC-DOCUMENT, UC-RBAC, UC-DASHBOARD, UC-AUDIT | Fund, FinancialAccount, Budget, BudgetLine | Mô-đun vận hành |
| `UC-ASSET` | 46 | ACT-TENANT-MEMBER, ACT-MODULE-SPECIALIST, ACT-UNIT-ADMIN | UC-MEMBER, UC-ORG, UC-REQUEST, UC-DOCUMENT, UC-AUDIT | AssetCategory, Asset, AssetItem, InventoryBalance | Mô-đun vận hành |
| `UC-MEETING` | 40 | ACT-TENANT-MEMBER, ACT-MODULE-SPECIALIST, ACT-UNIT-ADMIN | UC-MEMBER, UC-ORG, UC-NOTIFICATION, UC-DOCUMENT, UC-DISCIPLINE, UC-AUDIT | Meeting, MeetingParticipant, AttendanceRecord, CheckInToken | Mô-đun vận hành |
| `UC-DISCIPLINE` | 34 | ACT-TENANT-MEMBER, ACT-MODULE-SPECIALIST, ACT-APPROVER, ACT-AUDITOR | UC-MEMBER, UC-MEETING, UC-DOCUMENT, UC-NOTIFICATION, UC-AUDIT | DisciplineCase, ViolationType, Evidence, Explanation | Mô-đun vận hành |
| `UC-EVALUATION` | 43 | ACT-TENANT-MEMBER, ACT-MODULE-SPECIALIST, ACT-UNIT-ADMIN, ACT-AUDITOR | UC-MEMBER, UC-ORG, UC-RBAC, UC-DOCUMENT, UC-NOTIFICATION, UC-AUDIT | EvaluationCycle, EvaluationCriterion, CriterionVersion, EvaluationAssignment | Mô-đun vận hành |
| `UC-COMPETITION` | 40 | ACT-TENANT-MEMBER, ACT-MODULE-SPECIALIST, ACT-UNIT-ADMIN | UC-MEMBER, UC-DOCUMENT, UC-NOTIFICATION, UC-DASHBOARD, UC-AUDIT | Competition, CompetitionRegistration, CompetitionTeam, TeamMember | Mô-đun vận hành |
| `UC-NOTIFICATION` | 42 | ACT-TENANT-MEMBER, ACT-MODULE-SPECIALIST, ACT-EXTERNAL-SERVICE | UC-MEMBER, UC-SETTING, UC-AUDIT | NotificationTemplate, Notification, NotificationAudience, NotificationRecipient | Năng lực dùng chung |
| `UC-DASHBOARD` | 40 | ACT-TENANT-OWNER, ACT-TENANT-ADMIN, ACT-UNIT-ADMIN, ACT-MODULE-SPECIALIST, ACT-PLATFORM-ADMIN, ACT-AUDITOR | UC-RBAC, UC-MODULE, UC-AUDIT, UC-NOTIFICATION | DashboardDefinition, WidgetDefinition, MetricDefinition, ReportDefinition | Năng lực dùng chung |
| `UC-AI` | 44 | ACT-PLATFORM-USER, ACT-TENANT-ADMIN, ACT-PLATFORM-ADMIN, ACT-EXTERNAL-SERVICE | UC-RBAC, UC-MODULE, UC-DASHBOARD, UC-DOCUMENT, UC-NOTIFICATION, UC-AUDIT | AIProviderConfiguration, AIModel, PromptTemplate, AIRequest | Năng lực mở rộng có kiểm soát |
| `UC-AUDIT` | 40 | ACT-AUDITOR, ACT-TENANT-ADMIN, ACT-TENANT-OWNER, ACT-PLATFORM-ADMIN | UC-TENANT, UC-AUTH, UC-RBAC | AuditEvent, SecurityEvent, CorrelationContext, AuditExport | Nền tảng bắt buộc |

**Tổng số use case thành phần đã nhận diện: 841.**

## 2. Năng lực xuyên suốt

| Năng lực | Nhóm Use Case chịu trách nhiệm chính | Nhóm sử dụng |
|---|---|---|
| Xác thực và phiên | `UC-AUTH` | Toàn bộ use case không công khai |
| Tenant context | `UC-TENANT` | Toàn bộ nghiệp vụ tenant |
| Membership | `UC-MEMBER` | RBAC và các module vận hành |
| Phân quyền | `UC-RBAC` | Toàn bộ hành động được bảo vệ |
| Thông báo | `UC-NOTIFICATION` | Request, Document, Finance, Meeting, Discipline, Evaluation, Competition, Dashboard |
| Tệp và văn bản | `UC-DOCUMENT` | Request, Finance, Meeting, Discipline, Evaluation, Competition |
| Báo cáo | `UC-DASHBOARD` | Toàn bộ module có dữ liệu tổng hợp |
| Audit | `UC-AUDIT` | Toàn bộ hành động quản trị và nghiệp vụ quan trọng |
| AI | `UC-AI` | Năng lực tùy chọn, không phải dependency bắt buộc của nghiệp vụ lõi |

## 3. Rủi ro cần kiểm soát khi phân rã

- Ánh xạ một service kỹ thuật cho mỗi nhóm Use Case là giả định sai; ranh giới service phải theo miền nghiệp vụ và dữ liệu nhất quán.
- Dùng `organization_id` đơn lẻ không đủ bảo đảm cô lập tenant; phải kiểm soát truy vấn, tệp, cache, tác vụ nền và bản xuất.
- Gán role trực tiếp cho User làm sai mô hình đa tổ chức; role phải gắn với Membership.
- Đặc tả Use Case không chứng minh chức năng đã được hiện thực; cần ma trận Requirement–Design–Code–Test riêng.
