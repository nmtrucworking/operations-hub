# USE CASE DIAGRAM TỔNG QUÁT — OPERATIONS HUB V3

## 1. Phạm vi

Sơ đồ tổng quát chỉ trình bày các mục tiêu nghiệp vụ đại diện ở cấp hệ thống. Danh sách 21 nhóm được dùng làm chỉ mục phân rã, không được mô hình hóa thành pseudo-use-case trung gian.

## 2. PlantUML

```plantuml
@startuml
left to right direction
skinparam linetype ortho
actor "Khách truy cập" as Guest
actor "Người đăng ký tổ chức" as Registrant
actor "Người dùng nền tảng" as User
actor "Quản trị viên nền tảng" as PlatformAdmin
actor "Thành viên tenant" as Member
actor "Vai trò chuyên trách" as Specialist
actor "Người phê duyệt" as Approver
actor "Quản trị viên tenant" as TenantAdmin
actor "Chủ sở hữu tenant" as Owner
actor "Người kiểm tra/giám sát" as Auditor
actor "Dịch vụ bên ngoài" as External

rectangle "Operations Hub" {
  usecase "Đăng ký hoặc đăng nhập" as Login
  usecase "Đăng ký tổ chức mới" as RegisterOrg
  usecase "Quản trị vòng đời tenant" as ManageTenant
  usecase "Cấu hình tổ chức, role và module" as ConfigureOrg
  usecase "Quản lý membership" as ManageMember
  usecase "Thực hiện nghiệp vụ vận hành" as Operate
  usecase "Gửi yêu cầu nội bộ" as SubmitRequest
  usecase "Phê duyệt nghiệp vụ" as Approve
  usecase "Xem dashboard và báo cáo" as Dashboard
  usecase "Kiểm tra audit và truy vết" as Audit
  usecase "Sử dụng trợ lý AI" as AI
}
Guest -- Login
Registrant -- RegisterOrg
User -- Login
PlatformAdmin -- ManageTenant
Owner -- ConfigureOrg
TenantAdmin -- ConfigureOrg
TenantAdmin -- ManageMember
Member -- SubmitRequest
Member -- Operate
Specialist -- Operate
Approver -- Approve
Owner -- Dashboard
TenantAdmin -- Dashboard
Auditor -- Audit
User -- AI
External -- Login
External -- AI
@enduml
```

## 3. Phân rã

Chi tiết actor–Use Case trực tiếp nằm trong 21 file `UC-*`. Mỗi file chia sơ đồ theo luồng nghiệp vụ, không chia theo số lượng cố định.
