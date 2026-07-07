# Ma trận truy vết Use Case – lớp – trạng thái

| Mã Use Case | Aggregate/lớp chính | Trạng thái repo | Ghi chú |
|---|---|---|---|
| `UC-TENANT` | `Tenant`, `TenantRegistration`, `OwnershipAssignment` | Partial | Có `Tenant`; thiếu đăng ký và lịch sử vòng đời |
| `UC-AUTH` | `User`, `Credential`, `Session` | Partial | Có `User`, `Session` |
| `UC-USER` | `User`, `UserProfile`, `UserContact` | Partial | Hồ sơ đang gộp trong `User` |
| `UC-RBAC` | `Role`, `Permission`, `MembershipRole`, `PermissionScope` | Partial | Có quan hệ role/permission; thiếu scope |
| `UC-ORG` | `OrganizationUnit`, `Position`, `MembershipUnit` | Partial | Có `Unit`; thành viên chỉ có một `unitId` |
| `UC-BRAND` | `TenantBranding`, `BrandAsset`, `ThemeToken` | Partial | Mới có `brandColor` |
| `UC-MODULE` | `ModuleDefinition`, `TenantModule`, `ModuleDependency` | Partial | Có `TenantModule`; key tự do |
| `UC-SETTING` | `UserSetting`, `TenantPreference` | Planned | Chưa có model |
| `UC-MEMBER` | `Membership`, `MemberProfile`, `MemberSkill` | Partial | Có lõi membership/profile |
| `UC-REQUEST` | `RequestType`, `Request`, `ApprovalPolicy`, `RequestApproval` | Partial | Có request và approval cơ bản |
| `UC-DOCUMENT` | `Document`, `DocumentVersion`, `DocumentTemplate` | Planned | Chưa có model |
| `UC-FINANCE` | `FinanceAccount`, `FinanceTransaction`, `LedgerEntry` | Partial | Có account/transaction |
| `UC-ASSET` | `Asset`, `AssetItem`, `AssetCheckout` | Planned | Chưa có model |
| `UC-MEETING` | `Meeting`, `AttendanceRecord`, `MeetingMinute` | Planned | Chưa có model |
| `UC-DISCIPLINE` | `DisciplineCase`, `KpiRecord` | Planned | Chưa có model |
| `UC-EVALUATION` | `EvaluationCycle`, `EvaluationScore` | Planned | Chưa có model |
| `UC-COMPETITION` | `Competition`, `CompetitionParticipation`, `Achievement` | Planned | Chưa có model |
| `UC-NOTIFICATION` | `Notification`, `NotificationDelivery` | Planned | Chưa có model |
| `UC-DASHBOARD` | `Dashboard`, `MetricDefinition`, `MetricSnapshot` | Partial | Có `DashboardMetric` |
| `UC-AI` | `AiProviderConfig`, `AiRequest`, `AiResponse` | Planned | Chưa có model |
| `UC-AUDIT` | `AuditEvent`, `AuditChange`, `SecurityEvent` | Partial | Có `AuditLog` cơ bản |

## Quy tắc sử dụng ma trận

- `Partial` không đồng nghĩa use case đã hoàn thành.
- Một lớp mục tiêu chỉ được chuyển thành `Implemented` khi tồn tại trong schema/mã nguồn và có kiểm thử bất biến chính.
- Khi thay đổi model, phải cập nhật đồng thời sơ đồ chi tiết và ma trận này.
