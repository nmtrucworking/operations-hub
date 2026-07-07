# UC-USER — Quản lý tài khoản người dùng

## 1. Phạm vi

Mô hình hóa tài khoản toàn nền tảng, hồ sơ cá nhân, thông tin liên hệ và lịch sử trạng thái tài khoản.

- **Trạng thái trong repository hiện tại:** **Partial**
- **Loại sơ đồ:** UML Class Diagram ở mức miền nghiệp vụ.
- **Nguyên tắc:** các lớp nghiệp vụ thuộc tenant phải bảo toàn `tenantId` hoặc quan hệ sở hữu tương đương.

## 2. Class Diagram

```mermaid
classDiagram
direction LR
class User {
  <<aggregate root>>
  +id
  +email
  +accountStatus
  +isVerified
  +createdAt
  +activate()
  +deactivate()
}
class UserProfile {
  +id
  +userId
  +fullName
  +avatarUrl
  +bio
  +dateOfBirth
}
class UserContact {
  +id
  +userId
  +type
  +value
  +isPrimary
  +isVerified
}
class AccountStatusHistory {
  +id
  +userId
  +fromStatus
  +toStatus
  +reason
  +changedBy
  +changedAt
}
class Membership {
  +id
  +userId
  +tenantId
  +status
}
User "1" *-- "1" UserProfile
User "1" *-- "0..*" UserContact
User "1" *-- "0..*" AccountStatusHistory
User "1" --> "0..*" Membership
```

## 3. Danh mục lớp

| Lớp | Loại | Trách nhiệm |
|---|---|---|
| `User` | Aggregate root | Danh tính và trạng thái tài khoản toàn nền tảng. |
| `UserProfile` | Entity | Thông tin mô tả không dùng trực tiếp cho xác thực. |
| `UserContact` | Entity | Email, điện thoại hoặc kênh liên hệ có thể xác minh. |
| `AccountStatusHistory` | Entity | Truy vết thay đổi trạng thái tài khoản. |

## 4. Bất biến nghiệp vụ

1. Email hoặc định danh đăng nhập phải duy nhất.
2. Trạng thái User độc lập với trạng thái Membership.
3. Thay đổi đặc quyền không được thực hiện qua cập nhật hồ sơ thông thường.
4. Vô hiệu hóa User phải chặn tất cả phiên hoạt động.

## 5. Ánh xạ với repository hiện tại

`User` hiện gộp hồ sơ cơ bản và thông tin xác thực. Chưa có `UserProfile`, `UserContact` và lịch sử trạng thái riêng.
