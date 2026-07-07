# Quyết định thiết kế và khoảng trống hiện tại

## 1. Quyết định nền tảng

### DD-01 — Membership là trung tâm phân quyền tenant

`User` chỉ đại diện danh tính toàn cục. Role, unit, quyền và actor nghiệp vụ phải đi qua `Membership`.

### DD-02 — Mọi dữ liệu nghiệp vụ có tenant ownership

Entity nghiệp vụ phải có `tenantId` hoặc nằm trong aggregate xác định duy nhất tenant.

### DD-03 — Module không tương ứng một service triển khai

21 nhóm Use Case là cách tổ chức phạm vi sản phẩm. Không ánh xạ máy móc mỗi nhóm thành một microservice.

### DD-04 — Audit là append-only

Audit phục vụ truy vết, không phải bảng lịch sử có thể chỉnh sửa tùy ý.

### DD-05 — File là tài nguyên tenant-owned

File, export, template và evidence phải tuân thủ cùng ranh giới dữ liệu với entity nguồn.

## 2. Khoảng trống mức Critical

| Khoảng trống | Rủi ro | Hướng xử lý |
|---|---|---|
| `Request.creatorId` và `FinanceTransaction.createdById` dùng `User` | Mất tư cách tenant tại thời điểm tạo | Dùng `creatorMembershipId` hoặc actor snapshot |
| Chưa có composite same-tenant constraint | Liên kết chéo tenant nếu service bỏ sót | Composite key/relation hoặc specification bắt buộc |
| Owner cuối cùng chỉ được kiểm soát ở service | Có thể làm tenant mất chủ sở hữu | Transaction + invariant test |
| Tenant onboarding chưa có aggregate riêng | Trạng thái đăng ký và tenant bị trộn | Thêm `TenantRegistration` |

## 3. Khoảng trống mức High

| Khoảng trống | Rủi ro | Hướng xử lý |
|---|---|---|
| Branding chỉ có một màu | Không đủ tùy chỉnh nhận diện | `TenantBranding`, `BrandAsset`, `ThemeToken` |
| Module key là chuỗi tự do | Sai key và không quản lý dependency | `ModuleDefinition`, `ModuleDependency` |
| Thành viên chỉ có một unit | Không hỗ trợ kiêm nhiệm | `MembershipUnit` |
| Approval không có step/policy | Không hỗ trợ workflow nhiều cấp | `ApprovalPolicy`, `ApprovalStepDefinition` |
| Số dư account lưu trực tiếp | Có thể lệch với giao dịch | Ledger hoặc cập nhật nguyên tử |

## 4. Ranh giới chưa được xác định

Các mô-đun Document, Asset, Meeting, Discipline, Evaluation, Competition, Notification và AI mới ở mức target model. Trước khi hiện thực cần bổ sung:

- Use Case chi tiết.
- Quy tắc chuyển trạng thái.
- Ma trận quyền.
- Định nghĩa aggregate transaction boundary.
- Tiêu chí nghiệm thu và test.
