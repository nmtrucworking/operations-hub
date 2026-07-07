# Bộ Class Diagram — Operations Hub

## 1. Mục đích

Bộ tài liệu này trình bày mô hình lớp của **Operations Hub** theo hai góc nhìn:

1. **As-is:** các lớp và quan hệ đang tồn tại trong repository `nmtrucworking/operations-hub`.
2. **Target domain model:** mô hình lớp đề xuất để bao phủ toàn bộ 21 nhóm Use Case của nền tảng.

Bộ tài liệu được đóng gói độc lập, không tạo commit, branch hoặc pull request trên repository.

## 2. Phạm vi 21 nhóm Use Case

| STT | Mã | Nhóm Use Case | Tệp |
|---:|---|---|---|
| 1 | `UC-TENANT` | Quản trị nền tảng SaaS và tenant | [modules/UC-TENANT.md](modules/UC-TENANT.md) |
| 2 | `UC-AUTH` | Xác thực và quản lý phiên | [modules/UC-AUTH.md](modules/UC-AUTH.md) |
| 3 | `UC-USER` | Quản lý tài khoản người dùng | [modules/UC-USER.md](modules/UC-USER.md) |
| 4 | `UC-RBAC` | Quản lý vai trò và phân quyền | [modules/UC-RBAC.md](modules/UC-RBAC.md) |
| 5 | `UC-ORG` | Quản lý thông tin và cơ cấu tổ chức | [modules/UC-ORG.md](modules/UC-ORG.md) |
| 6 | `UC-BRAND` | Quản lý branding và giao diện tổ chức | [modules/UC-BRAND.md](modules/UC-BRAND.md) |
| 7 | `UC-MODULE` | Cấu hình mô-đun và phụ thuộc | [modules/UC-MODULE.md](modules/UC-MODULE.md) |
| 8 | `UC-SETTING` | Thiết lập cá nhân | [modules/UC-SETTING.md](modules/UC-SETTING.md) |
| 9 | `UC-MEMBER` | Quản lý thành viên | [modules/UC-MEMBER.md](modules/UC-MEMBER.md) |
| 10 | `UC-REQUEST` | Quản lý đơn từ và yêu cầu nội bộ | [modules/UC-REQUEST.md](modules/UC-REQUEST.md) |
| 11 | `UC-DOCUMENT` | Quản lý văn bản, biểu mẫu và mẫu tài liệu | [modules/UC-DOCUMENT.md](modules/UC-DOCUMENT.md) |
| 12 | `UC-FINANCE` | Quản lý tài chính và ngân sách | [modules/UC-FINANCE.md](modules/UC-FINANCE.md) |
| 13 | `UC-ASSET` | Quản lý tài sản và hậu cần | [modules/UC-ASSET.md](modules/UC-ASSET.md) |
| 14 | `UC-MEETING` | Quản lý cuộc họp, sự kiện và chuyên cần | [modules/UC-MEETING.md](modules/UC-MEETING.md) |
| 15 | `UC-DISCIPLINE` | Quản lý kỷ luật và KPI | [modules/UC-DISCIPLINE.md](modules/UC-DISCIPLINE.md) |
| 16 | `UC-EVALUATION` | Quản lý đánh giá thành viên | [modules/UC-EVALUATION.md](modules/UC-EVALUATION.md) |
| 17 | `UC-COMPETITION` | Quản lý cuộc thi, thành tích và ghi nhận | [modules/UC-COMPETITION.md](modules/UC-COMPETITION.md) |
| 18 | `UC-NOTIFICATION` | Quản lý thông báo và truyền thông nội bộ | [modules/UC-NOTIFICATION.md](modules/UC-NOTIFICATION.md) |
| 19 | `UC-DASHBOARD` | Dashboard, báo cáo và xuất dữ liệu | [modules/UC-DASHBOARD.md](modules/UC-DASHBOARD.md) |
| 20 | `UC-AI` | Trợ lý AI và AI Gateway | [modules/UC-AI.md](modules/UC-AI.md) |
| 21 | `UC-AUDIT` | Nhật ký hệ thống và truy vết hoạt động | [modules/UC-AUDIT.md](modules/UC-AUDIT.md) |

## 3. Tài liệu tổng hợp

| Tệp | Nội dung |
|---|---|
| [00-scope-and-conventions.md](00-scope-and-conventions.md) | Phạm vi, quy ước UML và cách đọc sơ đồ |
| [01-overall-domain-class-diagram.md](01-overall-domain-class-diagram.md) | Sơ đồ miền tổng quát theo bounded context |
| [02-current-repository-as-is.md](02-current-repository-as-is.md) | Mô hình lớp đúng theo Prisma schema hiện tại |
| [cross-cutting/shared-kernel.md](cross-cutting/shared-kernel.md) | Shared Kernel và lớp dùng chung |
| [cross-cutting/tenant-isolation.md](cross-cutting/tenant-isolation.md) | Mô hình cô lập dữ liệu tenant |
| [cross-cutting/application-services.md](cross-cutting/application-services.md) | Class Diagram lớp ứng dụng, guard và service |
| [cross-cutting/traceability.md](cross-cutting/traceability.md) | Ma trận Use Case – lớp – trạng thái hiện thực |
| [cross-cutting/design-decisions-and-gaps.md](cross-cutting/design-decisions-and-gaps.md) | Quyết định thiết kế và khoảng trống hiện tại |

## 4. Quy ước trạng thái

- **Implemented:** lớp chính đã tồn tại và quan hệ cơ bản đã được hiện thực.
- **Partial:** repository đã có một phần mô hình nhưng chưa đáp ứng đầy đủ nghiệp vụ mục tiêu.
- **Planned:** chưa có lớp tương ứng trong Prisma schema hiện tại.
- **Target:** lớp đề xuất cho mô hình sản phẩm, không được hiểu là chức năng đã hoàn thành.

## 5. Cách sử dụng

- Dùng `01-overall-domain-class-diagram.md` để trình bày tổng quan trong báo cáo.
- Dùng từng tệp `modules/UC-*.md` khi phân tích chi tiết theo mô-đun.
- Dùng `02-current-repository-as-is.md` để đối chiếu trực tiếp với mã nguồn.
- Không ghép toàn bộ lớp vào một hình duy nhất trong báo cáo vì sơ đồ sẽ mất khả năng đọc.
