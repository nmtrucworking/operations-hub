# OPERATIONS HUB — BỘ MARKDOWN 21 NHÓM USE CASE V3

## 1. Điểm sửa chính

- Loại bỏ hoàn toàn `PKG*` và quan hệ tự đặt `<<contains>>`.
- Actor nối trực tiếp đến `UC-*`/`EXT-*` cụ thể.
- Chia sơ đồ theo luồng và vòng đời nghiệp vụ, không chia mỗi 10 phần tử.
- Phân loại 841 phần tử của V2 thành `UC`, `INC`, `EXT`, `REQ`; giữ mã V2 để truy vết.
- Bổ sung ma trận actor–Use Case trực tiếp và hướng dẫn mô hình hóa.

## 2. Tệp chỉ mục

- [Hướng dẫn mô hình hóa V3](./00_Modeling_Guide_v3.md)
- [Actor](./00_Actors.md)
- [Use Case Diagram tổng quát](./00_Use_Case_Tong_Quat.md)
- [Danh mục phần tử nghiệp vụ](./00_Functional_Element_Catalog_v3.md)
- [Ma trận actor–Use Case trực tiếp](./00_Actor_UseCase_Matrix_v3.md)
- [Ma trận truy vết](./00_Traceability_Matrix.md)
- [Changelog V3](./00_CHANGELOG_v3.md)

## 3. Danh sách 21 nhóm

- [`UC-TENANT` — Quản trị nền tảng SaaS và tenant](./01_UC-TENANT.md) — 50 phần tử: 42 UC, 8 include, 0 extend, 0 REQ.
- [`UC-AUTH` — Xác thực và quản lý phiên](./02_UC-AUTH.md) — 36 phần tử: 25 UC, 3 include, 3 extend, 5 REQ.
- [`UC-USER` — Quản lý tài khoản người dùng](./03_UC-USER.md) — 33 phần tử: 31 UC, 0 include, 0 extend, 2 REQ.
- [`UC-RBAC` — Quản lý vai trò và phân quyền](./04_UC-RBAC.md) — 38 phần tử: 36 UC, 1 include, 0 extend, 1 REQ.
- [`UC-ORG` — Quản lý thông tin và cơ cấu tổ chức](./05_UC-ORG.md) — 34 phần tử: 31 UC, 2 include, 1 extend, 0 REQ.
- [`UC-BRAND` — Quản lý branding và giao diện tổ chức](./06_UC-BRAND.md) — 35 phần tử: 31 UC, 3 include, 1 extend, 0 REQ.
- [`UC-MODULE` — Cấu hình module và quy trình nghiệp vụ](./07_UC-MODULE.md) — 36 phần tử: 30 UC, 3 include, 3 extend, 0 REQ.
- [`UC-SETTING` — Thiết lập cá nhân](./08_UC-SETTING.md) — 28 phần tử: 28 UC, 0 include, 0 extend, 0 REQ.
- [`UC-MEMBER` — Quản lý thành viên và membership](./09_UC-MEMBER.md) — 41 phần tử: 38 UC, 1 include, 1 extend, 1 REQ.
- [`UC-REQUEST` — Quản lý đơn từ và yêu cầu nội bộ](./10_UC-REQUEST.md) — 43 phần tử: 39 UC, 1 include, 2 extend, 1 REQ.
- [`UC-DOCUMENT` — Quản lý văn bản, biểu mẫu và mẫu tài liệu](./11_UC-DOCUMENT.md) — 46 phần tử: 44 UC, 0 include, 2 extend, 0 REQ.
- [`UC-FINANCE` — Quản lý tài chính và ngân sách](./12_UC-FINANCE.md) — 52 phần tử: 49 UC, 1 include, 2 extend, 0 REQ.
- [`UC-ASSET` — Quản lý tài sản và hậu cần](./13_UC-ASSET.md) — 46 phần tử: 43 UC, 1 include, 2 extend, 0 REQ.
- [`UC-MEETING` — Quản lý cuộc họp, sự kiện và chuyên cần](./14_UC-MEETING.md) — 40 phần tử: 38 UC, 1 include, 1 extend, 0 REQ.
- [`UC-DISCIPLINE` — Quản lý kỷ luật và KPI](./15_UC-DISCIPLINE.md) — 34 phần tử: 28 UC, 3 include, 2 extend, 1 REQ.
- [`UC-EVALUATION` — Quản lý đánh giá thành viên](./16_UC-EVALUATION.md) — 43 phần tử: 38 UC, 2 include, 2 extend, 1 REQ.
- [`UC-COMPETITION` — Quản lý cuộc thi, thành tích và ghi nhận](./17_UC-COMPETITION.md) — 40 phần tử: 38 UC, 2 include, 0 extend, 0 REQ.
- [`UC-NOTIFICATION` — Quản lý thông báo và truyền thông nội bộ](./18_UC-NOTIFICATION.md) — 42 phần tử: 33 UC, 5 include, 2 extend, 2 REQ.
- [`UC-DASHBOARD` — Dashboard, báo cáo và xuất dữ liệu](./19_UC-DASHBOARD.md) — 40 phần tử: 39 UC, 1 include, 0 extend, 0 REQ.
- [`UC-AI` — Trợ lý AI và AI Gateway](./20_UC-AI.md) — 44 phần tử: 36 UC, 3 include, 2 extend, 3 REQ.
- [`UC-AUDIT` — Nhật ký hệ thống và truy vết hoạt động](./21_UC-AUDIT.md) — 40 phần tử: 24 UC, 1 include, 1 extend, 14 REQ.
