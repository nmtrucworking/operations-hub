# CÁC TÁC NHÂN TRONG HỆ THỐNG OPERATIONS HUB — V4

Actor biểu diễn **vai trò tương tác với hệ thống**, không đồng nhất trực tiếp với chức danh hoặc tài khoản. Quyền thực tế phụ thuộc tenant context, membership, role, permission, đơn vị và trạng thái module.

## Actor cấp nền tảng

| Mã actor | Tên actor |
|---|---|
| `ACT-GUEST` | Khách truy cập |
| `ACT-PLATFORM-USER` | Người dùng nền tảng |
| `ACT-ORG-REGISTRANT` | Người đăng ký tổ chức |
| `ACT-PLATFORM-ADMIN` | Quản trị viên nền tảng |

## Actor trong tenant

| Mã actor | Tên actor |
|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant |
| `ACT-UNIT-ADMIN` | Quản trị viên đơn vị |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách mô-đun |
| `ACT-HR-SPECIALIST` | Phụ trách nhân sự |
| `ACT-DOCUMENT-OFFICER` | Phụ trách văn bản |
| `ACT-FINANCE-OFFICER` | Phụ trách tài chính |
| `ACT-LOGISTICS-OFFICER` | Phụ trách tài sản và hậu cần |
| `ACT-MEETING-COORDINATOR` | Phụ trách cuộc họp và sự kiện |
| `ACT-DISCIPLINE-OFFICER` | Phụ trách kỷ luật và KPI |
| `ACT-EVALUATOR` | Người đánh giá |
| `ACT-COMPETITION-MANAGER` | Phụ trách cuộc thi và thành tích |
| `ACT-COMMUNICATION-OFFICER` | Phụ trách truyền thông nội bộ |
| `ACT-REPORT-ANALYST` | Phụ trách báo cáo và phân tích |
| `ACT-APPROVER` | Người phê duyệt |
| `ACT-TENANT-ADMIN` | Quản trị viên tenant |
| `ACT-TENANT-OWNER` | Chủ sở hữu tenant |
| `ACT-AUDITOR` | Người kiểm tra hoặc giám sát |

## Actor hệ thống bên ngoài

| Mã actor | Tên actor |
|---|---|
| `ACT-IDENTITY-SERVICE` | Dịch vụ xác thực |
| `ACT-STORAGE-SERVICE` | Dịch vụ lưu trữ |
| `ACT-PAYMENT-SERVICE` | Dịch vụ thanh toán |
| `ACT-NOTIFICATION-SERVICE` | Dịch vụ thông báo |
| `ACT-AI-PROVIDER` | Nhà cung cấp AI |
| `ACT-DNS-SERVICE` | Dịch vụ DNS hoặc tên miền |
| `ACT-EXTERNAL-SERVICE` | Dịch vụ bên ngoài |

## Nguyên tắc

- `ACT-PLATFORM-ADMIN` không mặc nhiên kế thừa quyền của `ACT-TENANT-OWNER` hoặc `ACT-TENANT-ADMIN`.
- Actor chuyên trách là specialization theo nghiệp vụ; quyền vẫn phải được gán bằng RBAC.
- Actor bên ngoài chỉ tham gia tại giao diện tích hợp đã đặc tả.