# UC-USER — Quản lý tài khoản người dùng

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-USER` |
| Tên | Quản lý tài khoản người dùng |
| Miền nghiệp vụ | Danh tính và truy cập |
| Mức ưu tiên phát triển | Nền tảng bắt buộc |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Quản lý danh tính toàn cục của người dùng mà không nhầm lẫn với membership và vai trò trong từng tenant.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-PLATFORM-USER` | Người dùng nền tảng | Cấp nền tảng |
| `ACT-TENANT-ADMIN` | Quản trị viên tenant | Tenant hoặc tích hợp |
| `ACT-PLATFORM-ADMIN` | Quản trị viên nền tảng | Cấp nền tảng |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Người thao tác đã xác thực.
- Các thao tác quản trị yêu cầu permission cấp nền tảng hoặc phạm vi tenant tương ứng.

## 5. Điều kiện sau

- Thông tin User được cập nhật có kiểm soát.
- Thay đổi trạng thái User toàn cục có hiệu lực trên toàn nền tảng.
- Các thay đổi nhạy cảm được ghi audit.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã           | Use Case thành phần                                      | Mô tả                                                                                                                                                             |
| ------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UC-USER-01` | Xem hồ sơ tài khoản cá nhân                              | Cho phép actor có quyền xem hồ sơ tài khoản cá nhân; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                              |
| `UC-USER-02` | Cập nhật họ tên và thông tin liên hệ                     | Cho phép cập nhật họ tên và thông tin liên hệ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                    |
| `UC-USER-03` | Cập nhật ảnh đại diện                                    | Cho phép cập nhật ảnh đại diện; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                                   |
| `UC-USER-04` | Thay đổi địa chỉ email đăng nhập                         | Thực hiện nghiệp vụ “Thay đổi địa chỉ email đăng nhập” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                           |
| `UC-USER-05` | Xác minh địa chỉ email mới                               | Thực hiện nghiệp vụ “Xác minh địa chỉ email mới” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                                 |
| `UC-USER-06` | Thay đổi tên người dùng khi chính sách cho phép          | Thực hiện nghiệp vụ “Thay đổi tên người dùng khi chính sách cho phép” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.            |
| `UC-USER-07` | Xem danh sách tenant đang tham gia                       | Cho phép actor có quyền xem danh sách tenant đang tham gia; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                       |
| `UC-USER-08` | Xem trạng thái tài khoản toàn cục                        | Cho phép actor có quyền xem trạng thái tài khoản toàn cục; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                        |
| `UC-USER-09` | Xem lịch sử hoạt động tài khoản cá nhân                  | Cho phép actor có quyền xem lịch sử hoạt động tài khoản cá nhân; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                  |
| `UC-USER-10` | Xuất dữ liệu cá nhân                                     | Cho phép xuất dữ liệu cá nhân; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                                    |
| `UC-USER-11` | Yêu cầu đóng tài khoản                                   | Thực hiện nghiệp vụ “Yêu cầu đóng tài khoản” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                                     |
| `UC-USER-12` | Hủy yêu cầu đóng tài khoản                               | Cho phép hủy yêu cầu đóng tài khoản; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                              |
| `UC-USER-13` | Khôi phục tài khoản trong thời gian chờ đóng             | Cho phép khôi phục tài khoản trong thời gian chờ đóng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                            |
| `UC-USER-14` | Quản trị viên xem danh sách người dùng nền tảng          | Thực hiện nghiệp vụ “Quản trị viên xem danh sách người dùng nền tảng” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.            |
| `UC-USER-15` | Tìm kiếm và lọc người dùng                               | Thực hiện nghiệp vụ “Tìm kiếm và lọc người dùng” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                                 |
| `UC-USER-16` | Xem chi tiết người dùng                                  | Cho phép actor có quyền xem chi tiết người dùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                  |
| `UC-USER-17` | Tạo tài khoản người dùng bởi quản trị viên               | Cho phép tạo tài khoản người dùng bởi quản trị viên; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                              |
| `UC-USER-18` | Kích hoạt tài khoản người dùng                           | Cho phép kích hoạt tài khoản người dùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                          |
| `UC-USER-19` | Vô hiệu hóa tài khoản người dùng                         | Cho phép vô hiệu hóa tài khoản người dùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                        |
| `UC-USER-20` | Khóa tài khoản vì lý do bảo mật                          | Thực hiện nghiệp vụ “Khóa tài khoản vì lý do bảo mật” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                            |
| `UC-USER-21` | Mở khóa tài khoản                                        | Cho phép mở khóa tài khoản; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                                       |
| `UC-USER-22` | Reset mật khẩu bởi quản trị viên có quyền                | Thực hiện nghiệp vụ “Reset mật khẩu bởi quản trị viên có quyền” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                  |
| `UC-USER-23` | Buộc người dùng đổi mật khẩu                             | Thực hiện nghiệp vụ “Buộc người dùng đổi mật khẩu” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                               |
| `UC-USER-24` | Liên kết tài khoản với danh tính bên ngoài               | Cho phép liên kết tài khoản với danh tính bên ngoài; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                              |
| `UC-USER-25` | Gỡ liên kết danh tính bên ngoài                          | Thực hiện nghiệp vụ “Gỡ liên kết danh tính bên ngoài” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                            |
| `UC-USER-26` | Hợp nhất tài khoản trùng lặp                             | Thực hiện nghiệp vụ “Hợp nhất tài khoản trùng lặp” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                               |
| `UC-USER-27` | Tách tài khoản bị liên kết sai                           | Thực hiện nghiệp vụ “Tách tài khoản bị liên kết sai” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                             |
| `UC-USER-28` | Ẩn danh dữ liệu cá nhân theo chính sách                  | Thực hiện nghiệp vụ “Ẩn danh dữ liệu cá nhân theo chính sách” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                    |
| `UC-USER-29` | Khôi phục tài khoản đã vô hiệu hóa                       | Cho phép khôi phục tài khoản đã vô hiệu hóa; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                      |
| `UC-USER-30` | Quản lý trạng thái đồng ý hoặc điều khoản của người dùng | Cho phép quản lý trạng thái đồng ý hoặc điều khoản của người dùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                |
| `UC-USER-31` | Xử lý người dùng không còn membership nào                | Thực hiện nghiệp vụ “Xử lý người dùng không còn membership nào” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan.                  |
| `UC-USER-32` | Xem và quản lý platform role của người dùng cấp nền tảng | Cho phép actor có quyền xem và quản lý platform role của người dùng cấp nền tảng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-33` | Ghi audit thay đổi tài khoản nhạy cảm                    | Cho phép ghi audit thay đổi tài khoản nhạy cảm; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả.                                   |

## 7. Luồng nghiệp vụ chính

1. Người dùng mở hồ sơ cá nhân.
2. Hệ thống tải dữ liệu User và phân loại trường có thể sửa.
3. Người dùng cập nhật thông tin và gửi yêu cầu.
4. Hệ thống kiểm tra định dạng, tính duy nhất và yêu cầu xác minh nếu cần.
5. Hệ thống lưu thay đổi, ghi lịch sử và cập nhật các phiên theo chính sách.

## 8. Luồng thay thế và ngoại lệ

- Email hoặc định danh trùng: từ chối cập nhật.
- Người quản trị tenant cố sửa thuộc tính cấp nền tảng ngoài phạm vi: từ chối.
- User đang là Owner cuối cùng ở tenant: quy trình đóng tài khoản yêu cầu chuyển quyền trước.

## 9. Quy tắc nghiệp vụ cốt lõi

- User là danh tính cấp nền tảng; role nội bộ không được gán trực tiếp cho User.
- Tenant Admin chỉ được xem hoặc quản lý thông tin người dùng cần thiết trong quan hệ membership của tenant mình.
- Vô hiệu hóa User toàn cục làm mất quyền sử dụng mọi membership đang có.
- Đóng User không được xóa vật lý các bản ghi nghiệp vụ cần truy vết.
- Thông tin nhạy cảm chỉ hiển thị theo nguyên tắc tối thiểu cần thiết.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `User` | Thực thể logic phục vụ UC-USER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `UserProfile` | Thực thể logic phục vụ UC-USER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `UserStatusHistory` | Thực thể logic phục vụ UC-USER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Membership` | Thực thể logic phục vụ UC-USER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `PersonalDataRequest` | Thực thể logic phục vụ UC-USER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-USER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

Mọi thực thể nghiệp vụ phải xác định được tenant sở hữu, trừ thực thể được công bố rõ là dữ liệu cấp nền tảng. Quan hệ tham chiếu chéo tenant bị cấm nếu không có cơ chế liên tenant được đặc tả riêng.

## 11. Kiểm soát truy cập

Quyền hiệu lực được xác định theo công thức khái quát:

```text
Quyền hiệu lực
= Permission từ các Role đang hoạt động
∩ Tenant context hợp lệ
∩ Membership đang hoạt động
∩ Phạm vi Organization Unit
∩ Phạm vi tài nguyên
∩ Trạng thái Module
∩ Trạng thái Tenant
```

Các kiểm tra bắt buộc:

- Xác thực User trước khi truy cập chức năng không công khai.
- Đối chiếu tenant context với membership.
- Kiểm tra permission tại backend, không dựa vào trạng thái hiển thị của frontend.
- Giới hạn truy vấn, tệp, bản xuất, cache và tác vụ nền theo tenant.
- Ghi audit cho hành động quản trị hoặc thay đổi nghiệp vụ quan trọng.

## 12. Tiêu chí chấp nhận

| Mã | Tiêu chí | Phương pháp kiểm chứng |
|---|---|---|
| `AC-USER-01` | Role của tenant không tồn tại trực tiếp trên bản ghi User. | Functional / Integration / Security Test tùy nội dung |
| `AC-USER-02` | Tenant Admin không xem được User ngoài phạm vi tenant nếu không có quyền cấp nền tảng. | Functional / Integration / Security Test tùy nội dung |
| `AC-USER-03` | Vô hiệu hóa User làm các phiên hiện tại bị từ chối. | Functional / Integration / Security Test tùy nội dung |
| `AC-USER-04` | Cập nhật thuộc tính nhạy cảm tạo bản ghi audit hoặc verification tương ứng. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-AUTH`](./02_UC-AUTH.md), [`UC-TENANT`](./01_UC-TENANT.md), [`UC-MEMBER`](./09_UC-MEMBER.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Người dùng nền tảng" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên nền tảng" as A3
usecase "Nhóm USER — cụm 1" as PKG1
rectangle "Quản lý tài khoản người dùng — Cụm 1/4" {
  usecase "UC-USER-01
Xem hồ sơ tài khoản cá nhân" as U1
  usecase "UC-USER-02
Cập nhật họ tên và thông tin liên hệ" as U2
  usecase "UC-USER-03
Cập nhật ảnh đại diện" as U3
  usecase "UC-USER-04
Thay đổi địa chỉ email đăng nhập" as U4
  usecase "UC-USER-05
Xác minh địa chỉ email mới" as U5
  usecase "UC-USER-06
Thay đổi tên người dùng khi chính sách cho phép" as U6
  usecase "UC-USER-07
Xem danh sách tenant đang tham gia" as U7
  usecase "UC-USER-08
Xem trạng thái tài khoản toàn cục" as U8
  usecase "UC-USER-09
Xem lịch sử hoạt động tài khoản cá nhân" as U9
  usecase "UC-USER-10
Xuất dữ liệu cá nhân" as U10
}
A1 --> PKG1
A2 --> PKG1
A3 --> PKG1
PKG1 ..> U1 : <<contains>>
PKG1 ..> U2 : <<contains>>
PKG1 ..> U3 : <<contains>>
PKG1 ..> U4 : <<contains>>
PKG1 ..> U5 : <<contains>>
PKG1 ..> U6 : <<contains>>
PKG1 ..> U7 : <<contains>>
PKG1 ..> U8 : <<contains>>
PKG1 ..> U9 : <<contains>>
PKG1 ..> U10 : <<contains>>
@enduml
```

### 14.2. Cụm use case 11–20

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Người dùng nền tảng" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên nền tảng" as A3
usecase "Nhóm USER — cụm 2" as PKG2
rectangle "Quản lý tài khoản người dùng — Cụm 2/4" {
  usecase "UC-USER-11
Yêu cầu đóng tài khoản" as U11
  usecase "UC-USER-12
Hủy yêu cầu đóng tài khoản" as U12
  usecase "UC-USER-13
Khôi phục tài khoản trong thời gian chờ đóng" as U13
  usecase "UC-USER-14
Quản trị viên xem danh sách người dùng nền tảng" as U14
  usecase "UC-USER-15
Tìm kiếm và lọc người dùng" as U15
  usecase "UC-USER-16
Xem chi tiết người dùng" as U16
  usecase "UC-USER-17
Tạo tài khoản người dùng bởi quản trị viên" as U17
  usecase "UC-USER-18
Kích hoạt tài khoản người dùng" as U18
  usecase "UC-USER-19
Vô hiệu hóa tài khoản người dùng" as U19
  usecase "UC-USER-20
Khóa tài khoản vì lý do bảo mật" as U20
}
A1 --> PKG2
A2 --> PKG2
A3 --> PKG2
PKG2 ..> U11 : <<contains>>
PKG2 ..> U12 : <<contains>>
PKG2 ..> U13 : <<contains>>
PKG2 ..> U14 : <<contains>>
PKG2 ..> U15 : <<contains>>
PKG2 ..> U16 : <<contains>>
PKG2 ..> U17 : <<contains>>
PKG2 ..> U18 : <<contains>>
PKG2 ..> U19 : <<contains>>
PKG2 ..> U20 : <<contains>>
@enduml
```

### 14.3. Cụm use case 21–30

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Người dùng nền tảng" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên nền tảng" as A3
usecase "Nhóm USER — cụm 3" as PKG3
rectangle "Quản lý tài khoản người dùng — Cụm 3/4" {
  usecase "UC-USER-21
Mở khóa tài khoản" as U21
  usecase "UC-USER-22
Reset mật khẩu bởi quản trị viên có quyền" as U22
  usecase "UC-USER-23
Buộc người dùng đổi mật khẩu" as U23
  usecase "UC-USER-24
Liên kết tài khoản với danh tính bên ngoài" as U24
  usecase "UC-USER-25
Gỡ liên kết danh tính bên ngoài" as U25
  usecase "UC-USER-26
Hợp nhất tài khoản trùng lặp" as U26
  usecase "UC-USER-27
Tách tài khoản bị liên kết sai" as U27
  usecase "UC-USER-28
Ẩn danh dữ liệu cá nhân theo chính sách" as U28
  usecase "UC-USER-29
Khôi phục tài khoản đã vô hiệu hóa" as U29
  usecase "UC-USER-30
Quản lý trạng thái đồng ý hoặc điều khoản của người dùng" as U30
}
A1 --> PKG3
A2 --> PKG3
A3 --> PKG3
PKG3 ..> U21 : <<contains>>
PKG3 ..> U22 : <<contains>>
PKG3 ..> U23 : <<contains>>
PKG3 ..> U24 : <<contains>>
PKG3 ..> U25 : <<contains>>
PKG3 ..> U26 : <<contains>>
PKG3 ..> U27 : <<contains>>
PKG3 ..> U28 : <<contains>>
PKG3 ..> U29 : <<contains>>
PKG3 ..> U30 : <<contains>>
@enduml
```

### 14.4. Cụm use case 31–33

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Người dùng nền tảng" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên nền tảng" as A3
usecase "Nhóm USER — cụm 4" as PKG4
rectangle "Quản lý tài khoản người dùng — Cụm 4/4" {
  usecase "UC-USER-31
Xử lý người dùng không còn membership nào" as U31
  usecase "UC-USER-32
Xem và quản lý platform role của người dùng cấp nền tảng" as U32
  usecase "UC-USER-33
Ghi audit thay đổi tài khoản nhạy cảm" as U33
}
A1 --> PKG4
A2 --> PKG4
A3 --> PKG4
PKG4 ..> U31 : <<contains>>
PKG4 ..> U32 : <<contains>>
PKG4 ..> U33 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
