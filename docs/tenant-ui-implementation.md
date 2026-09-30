# Operations Hub — Tenant UI Implementation Baseline

> **Phạm vi:** `apps/web` và các API tối thiểu cần thiết để UI tenant không tạo trạng thái giả.  
> **Mục tiêu:** hoàn thiện nhóm giao diện liên quan đến tenant theo mô hình đa tổ chức, đồng thời giữ đúng tenant isolation, membership và owner invariants.  
> **Nguồn nghiệp vụ ưu tiên:** tài liệu phân tích yêu cầu/quy tắc nghiệp vụ của đồ án; repository hiện tại là implementation reference và có thể được điều chỉnh khi xung đột với baseline nghiệp vụ.

---

## 1. Nguyên tắc thiết kế

1. **User không đồng nhất với Membership.** Một tài khoản có thể thuộc nhiều tenant và giữ vai trò khác nhau trong từng tenant.
2. **Tenant switch là hành động bảo mật.** Không được chỉ thay `tenantId` trong localStorage; backend phải xác minh membership và phát hành access token chứa tenant/membership context mới.
3. **Không suy đoán dữ liệu.** Owner, plan, domain, support grant, review result hoặc tenant status không được tạo mock trên surface production khi API chưa cung cấp.
4. **Registration status và Tenant status là hai state machine khác nhau.** `SUBMITTED/IN_REVIEW/REJECTED/...` thuộc hồ sơ đăng ký; `ACTIVE/SUSPENDED/ARCHIVED` thuộc tenant đã được provision.
5. **Frontend không phải security boundary.** Menu, button và route visibility chỉ hỗ trợ UX; backend vẫn phải kiểm tra tenant, membership, permission, module và resource scope.
6. **Suspend/archive không phải delete.** UI không dùng ngôn ngữ hoặc action khiến người dùng hiểu rằng tạm khóa/lưu trữ sẽ xóa dữ liệu.
7. **Owner cuối cùng là invariant.** Không bật mutation ownership nếu backend chưa kiểm tra tenant luôn còn ít nhất một Owner Active.
8. **Mọi state đều có UI.** Loading, empty, error, unauthenticated, permission denied, active, suspended, archived, submitted, in-review, approved, rejected và withdrawn phải có trạng thái hiển thị riêng.

---

## 2. Route map sau khi hoàn thiện

```text
/organizations
├── danh sách tenant mà user có Membership Active
└── hồ sơ đăng ký tenant của user

/organizations/new
├── form đăng ký chi tiết
├── local draft rõ ràng là chưa submit
├── /success
├── /pending
└── /rejected

/tenant
├── Tổng quan tenant context
├── Mô-đun
├── Quyền sở hữu
├── Dịch vụ & hạn mức
├── Tên miền
├── Vòng đời & dữ liệu
└── Hỗ trợ có kiểm soát

/platform/tenants
├── Hồ sơ đăng ký
├── Danh mục tenant
├── Provisioning
├── Lifecycle / close-data
└── Support access
```

`/tenant` là surface tenant-scoped. `/platform/tenants` là surface platform-scoped và không được hiểu là quyền đọc toàn bộ dữ liệu nội bộ tenant.

---

## 3. Traceability với UC-TENANT V4

| Use case | Surface | Trạng thái hiện tại | Ghi chú |
|---|---|---|---|
| `UC-TENANT-01` Đăng ký tổ chức | `/organizations/new`, `/organizations` | **Live cơ bản** | POST hồ sơ thật, list hồ sơ của chính user, withdraw; evidence upload chưa có |
| `UC-TENANT-02` Xử lý hồ sơ | `/platform/tenants` → Hồ sơ đăng ký | **Live baseline** | Platform Reviewer review/reject; Platform Admin approve |
| `UC-TENANT-03` Khởi tạo tenant | `/platform/tenants` → Provisioning | **Live baseline** | Server-side Prisma transaction + rollback evidence |
| `UC-TENANT-04` Danh mục tenant | `/platform/tenants` → Danh mục | **Live read-only** | Platform catalog không expose dữ liệu nghiệp vụ tenant |
| `UC-TENANT-05` Vòng đời tenant | `/tenant`, `/platform/tenants` | **Live baseline** | Transition validation + lifecycle event + audit |
| `UC-TENANT-06` Quyền sở hữu tenant | `/tenant` → Quyền sở hữu | **Live baseline** | `OwnershipAssignment` là SSOT; Owner role là projection |
| `UC-TENANT-07` Dịch vụ & hạn mức | `/tenant`, `/platform/tenants` | **Live baseline** | `ServicePlan` → `TenantServiceSubscription` → limit/usage; pricing/billing engine chưa nằm trong phạm vi baseline |
| `UC-TENANT-08` Tên miền tenant | `/tenant` → Tên miền | **Live baseline** | CRUD + DNS TXT challenge + verify qua DNS provider |
| `UC-TENANT-09` Đóng/xử lý dữ liệu | `/tenant`, `/platform/tenants` | **Live workflow baseline** | Có retention policy, grace-period closure, cancel và export request; worker tạo export/disposition vật lý chưa triển khai |
| `UC-TENANT-10` Hỗ trợ có kiểm soát | `/tenant`, `/platform/tenants` | **Live baseline** | Request/grant/revoke, scope + expiry; grant không tạo Membership/Owner |

---

## 4. Thành phần đã triển khai

### 4.1. Secure tenant switching

**File:** `apps/web/src/lib/api.ts`, `apps/web/src/components/app-shell.tsx`

Flow:

```text
User chọn tenant
  → POST /auth/select-tenant
  → backend kiểm tra Membership ACTIVE + Tenant ACTIVE
  → audit SELECT_TENANT
  → phát hành accessToken mới chứa tenantId + membershipId
  → frontend thay session
  → reload current surface trong context mới
```

Điểm quan trọng: phiên cũ không được tiếp tục dùng chỉ bằng cách đổi `x-tenant-id` ở client.

### 4.2. Global route không bị “kẹt” bởi tenant cũ

**File:** `apps/api/src/shared/guards/tenant.guard.ts`

Global authenticated routes không yêu cầu permission/module tenant phải tiếp tục truy cập được kể cả khi token trước đó từng scope vào tenant vừa bị suspended/archived. Nếu không, user có thể bị mắc kẹt và không thể gọi `/auth/select-tenant` để chuyển sang tenant khác.

### 4.3. My Organizations

**Route:** `/organizations`

Hiển thị hai dataset tách biệt:

- **Workspace đang có:** chỉ membership Active + tenant Active từ `GET /tenants`.
- **Hồ sơ đăng ký:** dữ liệu của chính applicant từ `GET /tenant-registrations/mine`.

Không coi hồ sơ `APPROVED` là workspace sẵn sàng nếu chưa có `createdTenantId`.

### 4.4. Tenant registration

**Route:** `/organizations/new`

Các vùng dữ liệu:

- tên tổ chức;
- purpose;
- slug mong muốn và normalized preview;
- người đại diện;
- contact email;
- website/reference;
- xác nhận điều kiện provisioning/Owner;
- local draft có nhãn rõ “chưa gửi”.

Submit thật qua `POST /tenant-registrations`; success page chỉ hiển thị mã hồ sơ do backend trả về.

### 4.5. Tenant Center

**Route:** `/tenant`

Live data:

- `GET /tenants/current`;
- `GET /modules`;
- `PATCH /modules`;
- `GET/POST/DELETE /tenants/current/owners`;
- `POST /tenants/current/ownership/transfer`;
- `GET/PATCH /tenants/current/branding`;
- `GET/POST/DELETE /tenants/current/domains`.

Service/limits, close/retention, DNS verification và support access đã nối vào domain model/API thật. Close workflow hiện dừng ở orchestration state: chưa có background processor tạo file export hoặc thực thi delete/anonymize vật lý.

### 4.6. Platform Tenant Console

**Route:** `/platform/tenants`

Surface đã mô hình hóa:

- registration queue và filter;
- registration detail/review live;
- tenant catalog;
- provisioning transaction checklist;
- lifecycle transition live;
- service plan/limit/subscription management;
- closure queue và decision;
- controlled support request/grant/revoke.

Nếu session không có `platformRole`, UI không tải dữ liệu platform. Route visibility không thay thế backend authorization.

---

## 5. API đã bổ sung

### 5.1. Submit registration

```http
POST /tenant-registrations
Authorization: Bearer <token>
Content-Type: application/json

{
  "proposedName": "...",
  "proposedSlug": "...",
  "contactEmail": "...",
  "purpose": "...",
  "representativeName": "...",
  "websiteOrReference": "..."
}
```

Kết quả tạo `TenantRegistration` ở trạng thái `SUBMITTED` và ghi audit `CREATE`.

### 5.2. Hồ sơ của user

```http
GET /tenant-registrations/mine
GET /tenant-registrations/mine/:id
POST /tenant-registrations/mine/:id/withdraw
```

Withdraw chỉ cho phép khi hồ sơ còn `DRAFT`, `SUBMITTED` hoặc `IN_REVIEW`.

---

## 6. State model phải giữ nguyên

### 6.1. Tenant registration

```text
DRAFT
  → SUBMITTED
  → IN_REVIEW
  → APPROVED
  → REJECTED
  → WITHDRAWN (chỉ từ trạng thái còn có thể rút)
```

`APPROVED` là quyết định hồ sơ. Tenant chỉ trở thành usable workspace sau provisioning thành công.

### 6.2. Tenant lifecycle

```text
ACTIVE → SUSPENDED
SUSPENDED → ACTIVE
ACTIVE → ARCHIVED
SUSPENDED → ARCHIVED
ARCHIVED → restore only when retention + invariants permit
```

`PENDING` và `REJECTED` không nên được nhồi vào `TenantStatus` nếu chúng mô tả hồ sơ trước provisioning; repo hiện đã có `TenantRegistrationStatus` riêng cho mục đích này.

---

## 7. Những điểm còn thiếu hoặc cần quyết định

### GAP-TEN-001 — Platform role taxonomy — ĐÃ XỬ LÝ BASELINE

Shared enum `PlatformRole` và centralized `PlatformRoleGuard` đã tách `PLATFORM_ADMIN`, `PLATFORM_REVIEWER`, `PLATFORM_SUPPORT`. Prisma field vẫn là `String?`, nhưng mutation platform không còn dựa vào role string rải rác ở controller.

### GAP-TEN-002 — Platform registration review API — ĐÃ XỬ LÝ

Đã có:

```text
GET  /platform/tenant-registrations
GET  /platform/tenant-registrations/:id
POST /platform/tenant-registrations/:id/request-changes
POST /platform/tenant-registrations/:id/reject
POST /platform/tenant-registrations/:id/approve
```

Approve điều phối provisioning transaction ở backend và có rollback integration test.

### GAP-TEN-003 — Slug reservation — ĐÃ XỬ LÝ BASELINE

Unique DB constraint trên registration slug đã được bỏ. Service chỉ coi các hồ sơ đang hiệu lực là reservation; `REJECTED/WITHDRAWN` có thể nhường slug cho hồ sơ mới, trong khi `Tenant.slug` vẫn unique.

### GAP-TEN-004 — Owner SSOT — ĐÃ XỬ LÝ

`OwnershipAssignment` là SSOT. Role code `OWNER` là authorization projection được tạo/xóa cùng ownership mutation. Direct assignment hoặc sửa permission Owner qua RBAC service bị chặn. Last-owner invariant được kiểm tra cả ở owner API và membership status mutation.

### GAP-TEN-005 — Module permission semantic — ĐÃ XỬ LÝ

`module:read` / `module:manage` đã được tách riêng và có integration test tenant isolation + disabled-module backend guard.

### GAP-TEN-006 — Branding SSOT — ĐÃ XỬ LÝ

`TenantBranding` là SSOT. `Tenant.brandColor` được giữ làm projection tương thích và được đồng bộ transactionally khi cập nhật branding. Tenant switch/list/current trả màu từ `TenantBranding.primaryColor` khi có.

### GAP-TEN-007 — Service/limits — ĐÃ XỬ LÝ BASELINE

Đã bổ sung `ServicePlan`, `ServicePlanLimit`, `TenantServiceSubscription` và `TenantUsageCounter`. Plan/quota/usage tách khỏi RBAC; Tenant Owner chỉ quản lý liên hệ dịch vụ/billing, còn Platform Admin quản lý catalog plan, limit, subscription và usage. Baseline không tự suy đoán pricing hoặc billing rule.

### GAP-TEN-008 — Close/retention — ĐÃ XỬ LÝ WORKFLOW BASELINE

Đã bổ sung `TenantRetentionPolicy`, `TenantClosureRequest` và `TenantDataExportRequest`. Closure có grace period persisted, có thể hủy trước thời điểm xử lý và không làm physical delete ngay. Default policy được persist và Platform Admin có thể thay đổi; UI không hard-code thời hạn.

Phần còn thiếu là execution worker cho export artifact và disposition cuối cùng (delete/anonymize) sau khi đủ điều kiện. Vì vậy trạng thái `COMPLETED` không được coi là đã có processor production nếu worker chưa được triển khai.

### GAP-TEN-009 — Controlled support — ĐÃ XỬ LÝ BASELINE

Đã bổ sung `TenantSupportRequest` và `TenantSupportGrant`. Grant có principal platform, scopes, `startsAt`, `expiresAt`, `revokedAt`; scope phải là tập con của request và các scope có thể leo thang quyền như Owner/RBAC/service/closure/support management bị chặn. Tenant guard chỉ cho phép truy cập trong grant còn hiệu lực và không tạo Membership/Owner tạm thời.

### GAP-TEN-010 — Evidence upload cho registration chưa nối File/Storage boundary

Form hiện chỉ nhận URL/reference text. Khi triển khai upload phải bảo đảm file gắn với registration/tenant boundary, MIME/size validation và không cho nội dung thực thi nguy hiểm.

---

## 8. Acceptance checklist UI tenant

### Context & navigation

- [x] Tenant switch gọi backend và nhận token scoped mới.
- [x] Header hiển thị tenant đang hoạt động và brand color hiện hành.
- [x] Mobile có navigation thay vì mất toàn bộ sidebar.
- [x] Không tenant → surface có empty/error path rõ.
- [x] Có `/organizations` để user theo dõi workspace và registration độc lập.

### Registration

- [x] Form không còn sinh fake reference bằng `Date.now()`.
- [x] Slug normalize ở cả FE và BE.
- [x] Submit cần session.
- [x] Success chỉ sau response API thành công.
- [x] Local draft được ghi nhãn chưa submit.
- [x] User xem được hồ sơ của chính mình.
- [x] User rút được hồ sơ ở trạng thái hợp lệ.

### Tenant Center

- [x] Overview dùng dữ liệu thật.
- [x] Modules dùng API thật.
- [x] Ownership dùng API thật và `OwnershipAssignment` SSOT.
- [x] Service/limits dùng API thật; plan/limit/usage tách khỏi RBAC.
- [x] Domains list/create/revoke + DNS TXT challenge/verification dùng API thật.
- [x] Lifecycle phân biệt suspend/archive/close/delete.
- [x] Closure có persisted retention + grace period + cancel + export request.
- [x] Support request/grant/revoke dùng model riêng, có scope/expiry và không impersonate Owner.

### Platform surface

- [x] Registration queue + review API.
- [x] Tenant catalog API read-only.
- [x] Provisioning transaction.
- [x] Lifecycle transition API.
- [x] Service plan/limit/subscription management.
- [x] Closure review queue.
- [x] Controlled support grant API + platform surface.
- [x] Platform baseline APIs + role guard.

### Security

- [x] Global route không bị stale tenant context chặn tenant switching.
- [x] Frontend không coi menu visibility là authorization.
- [x] Không mock dữ liệu nhạy cảm để làm đẹp empty state.
- [ ] Automated FE tests chưa có trong repo baseline (`web:test` hiện là manual smoke test).

---

## 9. Thứ tự triển khai tiếp theo

1. Triển khai data-export worker để tạo artifact thực và quản lý trạng thái `PROCESSING/COMPLETED/FAILED`.
2. Triển khai retention/disposition worker cho delete/anonymize sau grace period, kèm retry/idempotency và audit.
3. Nối evidence upload của tenant registration vào File/Storage boundary.
4. Bổ sung automated frontend tests; backend integration hiện đã bao phủ UC-TENANT-07/08/09/10 baseline.

---

## 10. Kết luận

Nhóm Tenant UI hiện đã có đầy đủ surface chính cho bốn lớp actor: applicant, platform user có nhiều tenant, Tenant Owner/Admin và Platform Admin. Phần có backend hiện hữu được nối bằng dữ liệu thật; phần backend chưa tồn tại chỉ hoàn thiện UI contract và state model, không tạo dữ liệu giả hoặc mutation giả thành công.

Platform authorization, review/provisioning, lifecycle, ownership, branding, service/limits, DNS verification, close/retention workflow và controlled support hiện đã có backend thực cùng tenant/platform UI baseline. Phần chưa hoàn tất ở mức production là xử lý bất đồng bộ tạo data export, disposition delete/anonymize, evidence upload và automated frontend tests; DNS verification production còn phụ thuộc resolver/DNS propagation bên ngoài.
