# UC-AUTH — Xác thực và quản lý phiên

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-AUTH` |
| Tên | Xác thực và quản lý phiên |
| Miền nghiệp vụ | Danh tính và truy cập |
| Mức ưu tiên phát triển | Nền tảng bắt buộc |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Xác minh danh tính, quản lý vòng đời phiên và thiết lập ngữ cảnh truy cập an toàn cho người dùng trên toàn nền tảng.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-GUEST` | Khách truy cập | Cấp nền tảng |
| `ACT-PLATFORM-USER` | Người dùng nền tảng | Cấp nền tảng |
| `ACT-EXTERNAL-SERVICE` | Dịch vụ bên ngoài | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Người dùng có thể chưa xác thực hoặc đã có tài khoản.
- Dịch vụ xác thực ngoài chỉ được dùng khi đã cấu hình và được cho phép.

## 5. Điều kiện sau

- Phiên hợp lệ gắn với User đã xác thực.
- Phiên bị thu hồi hoặc hết hạn không còn sử dụng được.
- Sự kiện xác thực quan trọng được ghi log bảo mật.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-AUTH-01` | Đăng ký tài khoản bằng email | Cho phép đăng ký tài khoản bằng email; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-02` | Đăng ký tài khoản bằng định danh được hỗ trợ | Cho phép đăng ký tài khoản bằng định danh được hỗ trợ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-03` | Xác minh địa chỉ email | Thực hiện nghiệp vụ “Xác minh địa chỉ email” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-04` | Gửi lại liên kết xác minh | Cho phép gửi lại liên kết xác minh; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-05` | Đăng nhập bằng mật khẩu | Cho phép đăng nhập bằng mật khẩu; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-06` | Đăng nhập bằng SSO hoặc OAuth | Cho phép đăng nhập bằng SSO hoặc OAuth; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-07` | Đăng nhập không mật khẩu bằng liên kết dùng một lần | Cho phép đăng nhập không mật khẩu bằng liên kết dùng một lần; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-08` | Bắt đầu xác thực đa yếu tố | Khởi tạo xác thực đa yếu tố; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-09` | Đăng ký phương thức MFA | Cho phép đăng ký phương thức MFA; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-10` | Xác minh mã MFA | Thực hiện nghiệp vụ “Xác minh mã MFA” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-11` | Quản lý mã khôi phục MFA | Cho phép quản lý mã khôi phục MFA; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-12` | Tắt hoặc thay đổi phương thức MFA | Thực hiện nghiệp vụ “Tắt hoặc thay đổi phương thức MFA” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-13` | Thực hiện xác thực tăng cường cho thao tác nhạy cảm | Thực hiện xác thực tăng cường cho thao tác nhạy cảm; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-14` | Đăng xuất phiên hiện tại | Cho phép đăng xuất phiên hiện tại; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-15` | Đăng xuất khỏi tất cả thiết bị | Cho phép đăng xuất khỏi tất cả thiết bị; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-16` | Làm mới access token hoặc phiên | Thực hiện nghiệp vụ “Làm mới access token hoặc phiên” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-17` | Khôi phục phiên hợp lệ | Cho phép khôi phục phiên hợp lệ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-18` | Yêu cầu quên mật khẩu | Thực hiện nghiệp vụ “Yêu cầu quên mật khẩu” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-19` | Đặt lại mật khẩu | Cho phép đặt lại mật khẩu; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-20` | Đổi mật khẩu khi biết mật khẩu hiện tại | Thực hiện nghiệp vụ “Đổi mật khẩu khi biết mật khẩu hiện tại” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-21` | Buộc đổi mật khẩu ở lần đăng nhập tiếp theo | Thực hiện nghiệp vụ “Buộc đổi mật khẩu ở lần đăng nhập tiếp theo” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-22` | Khóa đăng nhập sau nhiều lần thất bại | Thực hiện nghiệp vụ “Khóa đăng nhập sau nhiều lần thất bại” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-23` | Mở khóa đăng nhập theo chính sách | Cho phép mở khóa đăng nhập theo chính sách; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-24` | Xác minh CAPTCHA hoặc chống tự động hóa | Thực hiện nghiệp vụ “Xác minh CAPTCHA hoặc chống tự động hóa” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-25` | Xem danh sách phiên đăng nhập | Cho phép actor có quyền xem danh sách phiên đăng nhập; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-26` | Thu hồi một phiên đăng nhập | Cho phép thu hồi một phiên đăng nhập; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-27` | Đánh dấu thiết bị tin cậy | Thực hiện nghiệp vụ “Đánh dấu thiết bị tin cậy” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-28` | Thu hồi thiết bị tin cậy | Cho phép thu hồi thiết bị tin cậy; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-29` | Chấp nhận lời mời tham gia tenant qua liên kết | Thực hiện nghiệp vụ “Chấp nhận lời mời tham gia tenant qua liên kết” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-30` | Từ chối lời mời tham gia tenant | Cho phép chủ thể có thẩm quyền từ chối lời mời tham gia tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-31` | Chọn tenant context sau khi đăng nhập | Cho phép lựa chọn tenant context sau khi đăng nhập; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-32` | Chuyển tenant context khi đang hoạt động | Cho phép chuyển tenant context khi đang hoạt động; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-33` | Xử lý phiên khi tenant hoặc membership bị khóa | Thực hiện nghiệp vụ “Xử lý phiên khi tenant hoặc membership bị khóa” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-34` | Xử lý tài khoản chưa xác minh | Thực hiện nghiệp vụ “Xử lý tài khoản chưa xác minh” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-35` | Xử lý thông tin xác thực hết hạn hoặc không hợp lệ | Thực hiện nghiệp vụ “Xử lý thông tin xác thực hết hạn hoặc không hợp lệ” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-36` | Ghi nhận sự kiện xác thực và cảnh báo bảo mật | Ghi nhận sự kiện xác thực và cảnh báo bảo mật; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Người dùng gửi thông tin xác thực.
2. Hệ thống kiểm tra định dạng, trạng thái User và chính sách bảo mật.
3. Hệ thống xác minh thông tin xác thực hoặc chuyển qua dịch vụ nhận dạng ngoài.
4. Hệ thống phát hành phiên và trả thông tin User tối thiểu.
5. Nếu User thuộc nhiều tenant, hệ thống yêu cầu chọn tenant hoặc dùng tenant mặc định hợp lệ.
6. Mọi API nghiệp vụ tiếp theo kiểm tra phiên, tenant context và quyền.

## 8. Luồng thay thế và ngoại lệ

- Thông tin sai: trả lỗi chuẩn hóa, không tiết lộ tài khoản có tồn tại hay không khi chính sách yêu cầu.
- Phiên hết hạn hoặc bị thu hồi: yêu cầu đăng nhập lại hoặc làm mới hợp lệ.
- Tenant đã chọn không có membership hoạt động: từ chối thiết lập context.
- Dịch vụ xác thực ngoài lỗi: không làm mất khả năng dùng cơ chế đăng nhập nội bộ nếu được cấu hình.

## 9. Quy tắc nghiệp vụ cốt lõi

- User đã đăng nhập không mặc nhiên có quyền trong tenant nếu chưa có membership hợp lệ.
- Mật khẩu không được lưu hoặc trả về ở dạng rõ.
- Đăng nhập thất bại liên tiếp phải chịu giới hạn tốc độ hoặc kiểm soát rủi ro.
- Tenant context do client yêu cầu phải được đối chiếu với membership của User.
- Khi User bị vô hiệu hóa ở cấp nền tảng, mọi phiên trên các tenant phải bị từ chối.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `User` | Thực thể logic phục vụ UC-AUTH; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Credential` | Thực thể logic phục vụ UC-AUTH; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Session` | Thực thể logic phục vụ UC-AUTH; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `RefreshToken` | Thực thể logic phục vụ UC-AUTH; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `VerificationToken` | Thực thể logic phục vụ UC-AUTH; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuthenticationEvent` | Thực thể logic phục vụ UC-AUTH; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Membership` | Thực thể logic phục vụ UC-AUTH; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-AUTH-01` | Đăng nhập hợp lệ tạo phiên; đăng nhập sai không tạo phiên. | Functional / Integration / Security Test tùy nội dung |
| `AC-AUTH-02` | Sau đăng xuất hoặc thu hồi, phiên không thể gọi API được bảo vệ. | Functional / Integration / Security Test tùy nội dung |
| `AC-AUTH-03` | Không có mật khẩu rõ trong database, log hoặc response. | Functional / Integration / Security Test tùy nội dung |
| `AC-AUTH-04` | Người dùng không thể tự đổi tenant context sang tổ chức không thuộc quyền truy cập. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-USER`](./03_UC-USER.md), [`UC-TENANT`](./01_UC-TENANT.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Khách truy cập" as A1
actor "Người dùng nền tảng" as A2
actor "Dịch vụ bên ngoài" as A3
usecase "Nhóm AUTH — cụm 1" as PKG1
rectangle "Xác thực và quản lý phiên — Cụm 1/4" {
  usecase "UC-AUTH-01
Đăng ký tài khoản bằng email" as U1
  usecase "UC-AUTH-02
Đăng ký tài khoản bằng định danh được hỗ trợ" as U2
  usecase "UC-AUTH-03
Xác minh địa chỉ email" as U3
  usecase "UC-AUTH-04
Gửi lại liên kết xác minh" as U4
  usecase "UC-AUTH-05
Đăng nhập bằng mật khẩu" as U5
  usecase "UC-AUTH-06
Đăng nhập bằng SSO hoặc OAuth" as U6
  usecase "UC-AUTH-07
Đăng nhập không mật khẩu bằng liên kết dùng một lần" as U7
  usecase "UC-AUTH-08
Bắt đầu xác thực đa yếu tố" as U8
  usecase "UC-AUTH-09
Đăng ký phương thức MFA" as U9
  usecase "UC-AUTH-10
Xác minh mã MFA" as U10
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
actor "Khách truy cập" as A1
actor "Người dùng nền tảng" as A2
actor "Dịch vụ bên ngoài" as A3
usecase "Nhóm AUTH — cụm 2" as PKG2
rectangle "Xác thực và quản lý phiên — Cụm 2/4" {
  usecase "UC-AUTH-11
Quản lý mã khôi phục MFA" as U11
  usecase "UC-AUTH-12
Tắt hoặc thay đổi phương thức MFA" as U12
  usecase "UC-AUTH-13
Thực hiện xác thực tăng cường cho thao tác nhạy cảm" as U13
  usecase "UC-AUTH-14
Đăng xuất phiên hiện tại" as U14
  usecase "UC-AUTH-15
Đăng xuất khỏi tất cả thiết bị" as U15
  usecase "UC-AUTH-16
Làm mới access token hoặc phiên" as U16
  usecase "UC-AUTH-17
Khôi phục phiên hợp lệ" as U17
  usecase "UC-AUTH-18
Yêu cầu quên mật khẩu" as U18
  usecase "UC-AUTH-19
Đặt lại mật khẩu" as U19
  usecase "UC-AUTH-20
Đổi mật khẩu khi biết mật khẩu hiện tại" as U20
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
actor "Khách truy cập" as A1
actor "Người dùng nền tảng" as A2
actor "Dịch vụ bên ngoài" as A3
usecase "Nhóm AUTH — cụm 3" as PKG3
rectangle "Xác thực và quản lý phiên — Cụm 3/4" {
  usecase "UC-AUTH-21
Buộc đổi mật khẩu ở lần đăng nhập tiếp theo" as U21
  usecase "UC-AUTH-22
Khóa đăng nhập sau nhiều lần thất bại" as U22
  usecase "UC-AUTH-23
Mở khóa đăng nhập theo chính sách" as U23
  usecase "UC-AUTH-24
Xác minh CAPTCHA hoặc chống tự động hóa" as U24
  usecase "UC-AUTH-25
Xem danh sách phiên đăng nhập" as U25
  usecase "UC-AUTH-26
Thu hồi một phiên đăng nhập" as U26
  usecase "UC-AUTH-27
Đánh dấu thiết bị tin cậy" as U27
  usecase "UC-AUTH-28
Thu hồi thiết bị tin cậy" as U28
  usecase "UC-AUTH-29
Chấp nhận lời mời tham gia tenant qua liên kết" as U29
  usecase "UC-AUTH-30
Từ chối lời mời tham gia tenant" as U30
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

### 14.4. Cụm use case 31–36

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Khách truy cập" as A1
actor "Người dùng nền tảng" as A2
actor "Dịch vụ bên ngoài" as A3
usecase "Nhóm AUTH — cụm 4" as PKG4
rectangle "Xác thực và quản lý phiên — Cụm 4/4" {
  usecase "UC-AUTH-31
Chọn tenant context sau khi đăng nhập" as U31
  usecase "UC-AUTH-32
Chuyển tenant context khi đang hoạt động" as U32
  usecase "UC-AUTH-33
Xử lý phiên khi tenant hoặc membership bị khóa" as U33
  usecase "UC-AUTH-34
Xử lý tài khoản chưa xác minh" as U34
  usecase "UC-AUTH-35
Xử lý thông tin xác thực hết hạn hoặc không hợp lệ" as U35
  usecase "UC-AUTH-36
Ghi nhận sự kiện xác thực và cảnh báo bảo mật" as U36
}
A1 --> PKG4
A2 --> PKG4
A3 --> PKG4
PKG4 ..> U31 : <<contains>>
PKG4 ..> U32 : <<contains>>
PKG4 ..> U33 : <<contains>>
PKG4 ..> U34 : <<contains>>
PKG4 ..> U35 : <<contains>>
PKG4 ..> U36 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
