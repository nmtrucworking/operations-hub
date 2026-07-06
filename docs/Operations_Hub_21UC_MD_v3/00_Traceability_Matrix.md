# MA TRẬN TRUY VẾT 21 NHÓM — OPERATIONS HUB V3

| Nhóm | Tài liệu | Tổng phần tử | UC mục tiêu | Include | Extend | REQ/Rule |
|---|---|---:|---:|---:|---:|---:|
| `UC-TENANT` | [UC-TENANT — Quản trị nền tảng SaaS và tenant](./01_UC-TENANT.md) | 50 | 42 | 8 | 0 | 0 |
| `UC-AUTH` | [UC-AUTH — Xác thực và quản lý phiên](./02_UC-AUTH.md) | 36 | 25 | 3 | 3 | 5 |
| `UC-USER` | [UC-USER — Quản lý tài khoản người dùng](./03_UC-USER.md) | 33 | 31 | 0 | 0 | 2 |
| `UC-RBAC` | [UC-RBAC — Quản lý vai trò và phân quyền](./04_UC-RBAC.md) | 38 | 36 | 1 | 0 | 1 |
| `UC-ORG` | [UC-ORG — Quản lý thông tin và cơ cấu tổ chức](./05_UC-ORG.md) | 34 | 31 | 2 | 1 | 0 |
| `UC-BRAND` | [UC-BRAND — Quản lý branding và giao diện tổ chức](./06_UC-BRAND.md) | 35 | 31 | 3 | 1 | 0 |
| `UC-MODULE` | [UC-MODULE — Cấu hình module và quy trình nghiệp vụ](./07_UC-MODULE.md) | 36 | 30 | 3 | 3 | 0 |
| `UC-SETTING` | [UC-SETTING — Thiết lập cá nhân](./08_UC-SETTING.md) | 28 | 28 | 0 | 0 | 0 |
| `UC-MEMBER` | [UC-MEMBER — Quản lý thành viên và membership](./09_UC-MEMBER.md) | 41 | 38 | 1 | 1 | 1 |
| `UC-REQUEST` | [UC-REQUEST — Quản lý đơn từ và yêu cầu nội bộ](./10_UC-REQUEST.md) | 43 | 39 | 1 | 2 | 1 |
| `UC-DOCUMENT` | [UC-DOCUMENT — Quản lý văn bản, biểu mẫu và mẫu tài liệu](./11_UC-DOCUMENT.md) | 46 | 44 | 0 | 2 | 0 |
| `UC-FINANCE` | [UC-FINANCE — Quản lý tài chính và ngân sách](./12_UC-FINANCE.md) | 52 | 49 | 1 | 2 | 0 |
| `UC-ASSET` | [UC-ASSET — Quản lý tài sản và hậu cần](./13_UC-ASSET.md) | 46 | 43 | 1 | 2 | 0 |
| `UC-MEETING` | [UC-MEETING — Quản lý cuộc họp, sự kiện và chuyên cần](./14_UC-MEETING.md) | 40 | 38 | 1 | 1 | 0 |
| `UC-DISCIPLINE` | [UC-DISCIPLINE — Quản lý kỷ luật và KPI](./15_UC-DISCIPLINE.md) | 34 | 28 | 3 | 2 | 1 |
| `UC-EVALUATION` | [UC-EVALUATION — Quản lý đánh giá thành viên](./16_UC-EVALUATION.md) | 43 | 38 | 2 | 2 | 1 |
| `UC-COMPETITION` | [UC-COMPETITION — Quản lý cuộc thi, thành tích và ghi nhận](./17_UC-COMPETITION.md) | 40 | 38 | 2 | 0 | 0 |
| `UC-NOTIFICATION` | [UC-NOTIFICATION — Quản lý thông báo và truyền thông nội bộ](./18_UC-NOTIFICATION.md) | 42 | 33 | 5 | 2 | 2 |
| `UC-DASHBOARD` | [UC-DASHBOARD — Dashboard, báo cáo và xuất dữ liệu](./19_UC-DASHBOARD.md) | 40 | 39 | 1 | 0 | 0 |
| `UC-AI` | [UC-AI — Trợ lý AI và AI Gateway](./20_UC-AI.md) | 44 | 36 | 3 | 2 | 3 |
| `UC-AUDIT` | [UC-AUDIT — Nhật ký hệ thống và truy vết hoạt động](./21_UC-AUDIT.md) | 40 | 24 | 1 | 1 | 14 |

## Quy tắc truy vết

- Mã V2 được lưu tại từng bảng chi tiết.
- Chỉ `UC-*` được xem là Use Case mục tiêu actor.
- `INC-*`, `EXT-*`, `REQ-*` phải truy vết tới Use Case cha, điều kiện phát sinh hoặc quy tắc áp dụng.
