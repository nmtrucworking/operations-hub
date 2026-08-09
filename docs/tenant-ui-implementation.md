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
| `UC-TENANT-02` Xử lý hồ sơ | `/platform/tenants` → Hồ sơ đăng ký | **UI contract** | Chưa expose Platform Admin review API |
| `UC-TENANT-03` Khởi tạo tenant | `/platform/tenants` → Provisioning | **UI contract** | Phải là server-side transaction, không orchestration ở FE |
| `UC-TENANT-04` Danh mục tenant | `/platform/tenants` → Danh mục | **UI contract** | API hiện tại `/tenants` chỉ trả tenant của user |
| `UC-TENANT-05` Vòng đời tenant | `/tenant`, `/platform/tenants` | **UI contract** | Chưa expose transition API |
| `UC-TENANT-06` Quyền sở hữu tenant | `/tenant` → Quyền sở hữu | **UI contract** | Không suy Owner từ tên role; cần ownership endpoint |
| `UC-TENANT-07` Dịch vụ & hạn mức | `/tenant` → Dịch vụ | **UI contract** | Chưa có subscription/limit API chính thức |
| `UC-TENANT-08` Tên miền tenant | `/tenant` → Tên miền | **UI contract** | Prisma có `CustomDomain`, controller chưa expose |
| `UC-TENANT-09` Đóng/xử lý dữ liệu | `/tenant`, `/platform/tenants` | **UI contract** | Cần close request + grace period + retention model |
| `UC-TENANT-10` Hỗ trợ có kiểm soát | `/tenant`, `/platform/tenants` | **UI contract** | Chưa có support request/grant model/API |

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
- `PATCH /modules`.

UI contract đã có cho ownership, service/limits, domains, lifecycle/data và support access nhưng không tạo record giả khi backend chưa có endpoint.

### 4.6. Platform Tenant Console

**Route:** `/platform/tenants`

Surface đã mô hình hóa:

- registration queue và filter;
- registration detail/review contract;
- tenant catalog;
- provisioning transaction checklist;
- lifecycle transition dialog contract;
- support request/grant contract.

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

### GAP-TEN-001 — Platform role taxonomy chưa được chuẩn hóa

`User.platformRole` đang là `String?`, chưa có enum/permission model cấp platform đủ rõ. Không nên hard-code nhiều biến thể tên role ở frontend.

**Đề xuất:** xây `PlatformRole`/`PlatformPermission` hoặc tối thiểu enum chuẩn trước khi mở Platform Admin mutation APIs.

### GAP-TEN-002 — Platform registration review API chưa tồn tại

Cần tối thiểu:

```text
GET  /platform/tenant-registrations
GET  /platform/tenant-registrations/:id
POST /platform/tenant-registrations/:id/request-changes
POST /platform/tenant-registrations/:id/reject
POST /platform/tenant-registrations/:id/approve
```

Approve phải điều phối provisioning transaction ở backend.

### GAP-TEN-003 — `TenantRegistration.proposedSlug @unique` có thể khóa slug vĩnh viễn

Schema hiện tại đặt unique trực tiếp trên `proposedSlug`. Hệ quả: một hồ sơ `REJECTED` hoặc `WITHDRAWN` vẫn chiếm slug và hồ sơ khác không thể đăng ký lại slug đó.

Đây là ràng buộc **mạnh hơn** business rule “slug tenant phải duy nhất”. Cần quyết định rõ một trong các hướng:

1. slug registration được reservation vĩnh viễn — phải ghi thành business rule; hoặc
2. chỉ reservation đối với trạng thái đang hiệu lực — cần thay schema/logic; hoặc
3. tái sử dụng cùng registration record qua quy trình re-submit có kiểm soát.

Không nên sửa ngầm vì đây là quyết định nghiệp vụ.

### GAP-TEN-004 — Owner có hai biểu diễn tiềm năng

Repo có `Role`/`MembershipRole` và đồng thời có `OwnershipAssignment`. UI hiện không suy Owner từ role name để tránh hai SSOT cạnh tranh.

**Cần chốt:** `OwnershipAssignment` là SSOT của ownership; role Owner là authorization projection, hoặc ngược lại. Sau khi chốt mới expose mutation.

### GAP-TEN-005 — Module toggle đang dùng `role:manage`

Endpoint `PATCH /modules` hiện kiểm tra `PERMISSIONS.roleManage`. Về semantic authorization đây là coupling không tốt: quản lý role và quản lý module là hai trách nhiệm khác nhau.

**Đề xuất:** bổ sung `module:read` / `module:manage`, migrate role mặc định và kiểm thử permission matrix.

### GAP-TEN-006 — Branding có nguy cơ hai nguồn dữ liệu

`Tenant.brandColor` tồn tại đồng thời với relation `TenantBranding`. Session/switcher hiện dùng `Tenant.brandColor` vì API hiện hành trả field này.

**Cần chốt SSOT:** giữ `brandColor` như denormalized projection/cache hoặc chuyển hoàn toàn sang `TenantBranding` và cung cấp branding context endpoint.

### GAP-TEN-007 — Service/limits chưa có domain model chính thức

Không nên đưa pricing/subscription giả vào UI. Cần xác định product policy trước khi tạo model gói, quota, usage và billing contact.

### GAP-TEN-008 — Close/retention chưa có policy cụ thể

Business rule yêu cầu soft close/grace period/retention trước physical delete, nhưng chưa có số ngày/năm. UI không được hard-code thời hạn khi chưa có căn cứ.

### GAP-TEN-009 — Support grant chưa có model

Cần thực thể riêng chứa tối thiểu:

```text
requester
approver
platform actor
tenant
reason
scope/resources
startsAt
expiresAt
revokedAt
status
correlationId
```

Không dùng membership Owner/Admin tạm thời để mô phỏng support access.

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
- [x] Ownership không suy đoán Owner.
- [x] Service/limits không hiển thị số liệu giả.
- [x] Domains không suy custom domain từ slug.
- [x] Lifecycle phân biệt suspend/archive/close/delete.
- [x] Support không cung cấp impersonation mặc định.

### Platform surface

- [x] Registration queue UI contract.
- [x] Tenant catalog UI contract.
- [x] Provisioning transaction contract.
- [x] Lifecycle transition contract.
- [x] Controlled support contract.
- [ ] Platform APIs + permission model — còn thiếu backend.

### Security

- [x] Global route không bị stale tenant context chặn tenant switching.
- [x] Frontend không coi menu visibility là authorization.
- [x] Không mock dữ liệu nhạy cảm để làm đẹp empty state.
- [ ] Automated FE tests chưa có trong repo baseline (`web:test` hiện là manual smoke test).

---

## 9. Thứ tự triển khai tiếp theo

1. Chuẩn hóa platform role/permission.
2. Xây Platform Registration Review API.
3. Provisioning transaction + default role/module/branding seed.
4. Platform tenant catalog + lifecycle transition API.
5. Chốt Ownership SSOT và xây owner API.
6. Tách module permission khỏi `role:manage`.
7. Xây Custom Domain API + DNS verification.
8. Chốt service/limit domain model.
9. Chốt close/retention policy và data export flow.
10. Xây controlled support grant.
11. Bổ sung automated unit/integration/E2E test cho toàn bộ tenant flows.

---

## 10. Kết luận

Nhóm Tenant UI hiện đã có đầy đủ surface chính cho bốn lớp actor: applicant, platform user có nhiều tenant, Tenant Owner/Admin và Platform Admin. Phần có backend hiện hữu được nối bằng dữ liệu thật; phần backend chưa tồn tại chỉ hoàn thiện UI contract và state model, không tạo dữ liệu giả hoặc mutation giả thành công.

Điểm cần ưu tiên tiếp không phải thêm nhiều màn hình, mà là hoàn thiện platform authorization + review/provisioning/lifecycle APIs. Đây là các dependency quyết định để chuyển những surface `UI contract` thành chức năng production mà vẫn giữ được tenant isolation và business invariants.
