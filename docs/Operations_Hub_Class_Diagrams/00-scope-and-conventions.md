# Phạm vi và quy ước Class Diagram

## 1. Ranh giới mô hình

Bộ sơ đồ sử dụng ba lớp phạm vi:

1. **Platform scope:** danh tính, tenant, quản trị nền tảng và cấu hình dùng chung.
2. **Tenant scope:** membership, vai trò, đơn vị, branding, mô-đun và dữ liệu nghiệp vụ.
3. **Integration scope:** lưu trữ, gửi thông báo, thanh toán, AI và các dịch vụ ngoài.

`User` là danh tính toàn nền tảng. `Membership` là quan hệ giữa `User` và `Tenant`. Mọi quyền nội bộ phải được xác định qua `Membership`, không gán trực tiếp vào `User`.

## 2. Ký hiệu UML được sử dụng

| Ký hiệu | Ý nghĩa |
|---|---|
| `1` | Chính xác một |
| `0..1` | Không có hoặc một |
| `0..*` | Không có hoặc nhiều |
| `1..*` | Ít nhất một |
| `*--` | Composition: vòng đời lớp con phụ thuộc lớp cha |
| `o--` | Aggregation: quan hệ toàn thể–thành phần lỏng |
| `-->` | Association hoặc phụ thuộc có hướng |
| `..>` | Dependency |
| `<<aggregate root>>` | Gốc aggregate chịu trách nhiệm bảo toàn bất biến |
| `<<entity>>` | Thực thể có định danh |
| `<<value object>>` | Đối tượng giá trị không có định danh độc lập |
| `<<association entity>>` | Lớp trung gian của quan hệ nhiều–nhiều |
| `<<domain service>>` | Nghiệp vụ không thuộc tự nhiên về một entity |
| `<<read model>>` | Mô hình đọc hoặc dữ liệu tổng hợp |

## 3. Quy tắc đặt tên

- Tên lớp dùng tiếng Anh để đồng bộ với mã nguồn.
- Tiêu đề và mô tả dùng tiếng Việt.
- Trạng thái dùng enum thay vì chuỗi tự do khi miền có tập giá trị hữu hạn.
- Lớp liên kết nhiều–nhiều phải có tên rõ nghĩa: `MembershipRole`, `RolePermission`, `MemberSkill`.

## 4. Quy tắc tenant ownership

Một lớp nghiệp vụ được xem là tenant-owned khi thỏa một trong hai điều kiện:

- Có `tenantId`.
- Thuộc aggregate có quan hệ bắt buộc với `Tenant` và không thể tồn tại độc lập.

Các quan hệ giữa hai đối tượng tenant-owned phải bảo đảm cùng tenant. Việc chỉ có hai trường `tenantId` giống tên nhưng không có ràng buộc không đủ để bảo đảm cô lập dữ liệu.

## 5. Khác biệt giữa Class Diagram và ERD

Class Diagram có thể biểu diễn:

- Entity và value object.
- Domain service.
- Trạng thái và hành vi.
- Ranh giới aggregate.
- Quan hệ phụ thuộc giữa các lớp ứng dụng.

ERD chủ yếu mô tả bảng, khóa và quan hệ dữ liệu. Vì vậy, một số lớp mục tiêu trong bộ tài liệu chưa tương ứng với bảng vật lý hiện tại.
