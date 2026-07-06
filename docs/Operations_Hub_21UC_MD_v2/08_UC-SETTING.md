# UC-SETTING — Thiết lập cá nhân

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-SETTING` |
| Tên | Thiết lập cá nhân |
| Miền nghiệp vụ | Trải nghiệm người dùng |
| Mức ưu tiên phát triển | Năng lực dùng chung |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Cho phép người dùng quản lý các tùy chọn cá nhân toàn cục và theo tenant mà không ảnh hưởng cấu hình tổ chức.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-PLATFORM-USER` | Người dùng nền tảng | Cấp nền tảng |
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Người dùng đã xác thực.

## 5. Điều kiện sau

- Thiết lập được lưu đúng phạm vi toàn cục hoặc tenant.
- Các thay đổi có hiệu lực trên giao diện và thông báo theo chính sách.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-SETTING-01` | Xem thiết lập cá nhân | Cho phép actor có quyền xem thiết lập cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-02` | Cấu hình ngôn ngữ giao diện | Cho phép cấu hình ngôn ngữ giao diện; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-03` | Cấu hình múi giờ | Cho phép cấu hình múi giờ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-04` | Cấu hình định dạng ngày giờ | Cho phép cấu hình định dạng ngày giờ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-05` | Cấu hình định dạng số và tiền tệ | Cho phép cấu hình định dạng số và tiền tệ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-06` | Chọn giao diện sáng hoặc tối | Cho phép lựa chọn giao diện sáng hoặc tối; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-07` | Cấu hình mật độ hiển thị | Cho phép cấu hình mật độ hiển thị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-08` | Cấu hình kích thước chữ | Cho phép cấu hình kích thước chữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-09` | Cấu hình tùy chọn trợ năng | Cho phép cấu hình tùy chọn trợ năng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-10` | Cấu hình độ tương phản cá nhân | Cho phép cấu hình độ tương phản cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-11` | Cấu hình phím tắt | Cho phép cấu hình phím tắt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-12` | Cấu hình trang bắt đầu mặc định | Cho phép cấu hình trang bắt đầu mặc định; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-13` | Chọn tenant mặc định | Cho phép lựa chọn tenant mặc định; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-14` | Chọn dashboard mặc định | Cho phép lựa chọn dashboard mặc định; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-15` | Lưu bộ lọc thường dùng | Cho phép lưu bộ lọc thường dùng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-16` | Quản lý cột hiển thị của bảng | Cho phép quản lý cột hiển thị của bảng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-17` | Lưu chế độ sắp xếp và phân trang | Cho phép lưu chế độ sắp xếp và phân trang; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-18` | Cấu hình kênh nhận thông báo | Cho phép cấu hình kênh nhận thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-19` | Cấu hình loại thông báo được nhận | Cho phép cấu hình loại thông báo được nhận; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-20` | Cấu hình giờ yên lặng | Cho phép cấu hình giờ yên lặng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-21` | Cấu hình bản tin tổng hợp | Cho phép cấu hình bản tin tổng hợp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-22` | Cấu hình nhắc việc cá nhân | Cho phép cấu hình nhắc việc cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-23` | Cấu hình quyền hiển thị thông tin cá nhân | Cho phép cấu hình quyền hiển thị thông tin cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-24` | Quản lý tài khoản hoặc lịch tích hợp | Cho phép quản lý tài khoản hoặc lịch tích hợp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-25` | Đồng bộ thiết lập trên nhiều thiết bị | Thực hiện nghiệp vụ “Đồng bộ thiết lập trên nhiều thiết bị” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-SETTING-26` | Đặt lại thiết lập cá nhân | Cho phép đặt lại thiết lập cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-27` | Xuất thiết lập cá nhân | Cho phép xuất thiết lập cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-28` | Khôi phục thiết lập từ bản sao | Cho phép khôi phục thiết lập từ bản sao; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Người dùng mở trang thiết lập.
2. Hệ thống tải giá trị toàn cục và giá trị ghi đè theo tenant.
3. Người dùng thay đổi tùy chọn và lưu.
4. Hệ thống kiểm tra giá trị, phạm vi và chính sách bắt buộc.
5. Giao diện áp dụng thiết lập mới và đồng bộ phiên.

## 8. Luồng thay thế và ngoại lệ

- Tenant mặc định đã bị khóa hoặc membership kết thúc: hệ thống yêu cầu chọn lại.
- Người dùng tắt thông báo bắt buộc: từ chối và giải thích chính sách.
- Giá trị không còn được hỗ trợ: fallback về mặc định.

## 9. Quy tắc nghiệp vụ cốt lõi

- Thiết lập cá nhân không được thay đổi branding hoặc chính sách của tenant.
- Tenant mặc định phải là tenant có membership đang hoạt động.
- Thông báo bắt buộc về bảo mật hoặc quản trị có thể không cho phép tắt.
- Thiết lập theo tenant phải tách biệt giữa các tenant.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `UserSetting` | Thực thể logic phục vụ UC-SETTING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `TenantUserSetting` | Thực thể logic phục vụ UC-SETTING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `NotificationPreference` | Thực thể logic phục vụ UC-SETTING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AccessibilityPreference` | Thực thể logic phục vụ UC-SETTING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Session` | Thực thể logic phục vụ UC-SETTING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-SETTING-01` | Thiết lập tenant A không làm thay đổi thiết lập riêng của tenant B. | Functional / Integration / Security Test tùy nội dung |
| `AC-SETTING-02` | Giá trị không hợp lệ được từ chối hoặc fallback an toàn. | Functional / Integration / Security Test tùy nội dung |
| `AC-SETTING-03` | Khôi phục mặc định xóa đúng lớp ghi đè. | Functional / Integration / Security Test tùy nội dung |
| `AC-SETTING-04` | Người dùng không thể dùng thiết lập cá nhân để vượt quyền hoặc tắt cảnh báo bắt buộc. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-AUTH`](./02_UC-AUTH.md), [`UC-USER`](./03_UC-USER.md), [`UC-TENANT`](./01_UC-TENANT.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Người dùng nền tảng" as A1
actor "Thành viên tenant" as A2
usecase "Nhóm SETTING — cụm 1" as PKG1
rectangle "Thiết lập cá nhân — Cụm 1/3" {
  usecase "UC-SETTING-01
Xem thiết lập cá nhân" as U1
  usecase "UC-SETTING-02
Cấu hình ngôn ngữ giao diện" as U2
  usecase "UC-SETTING-03
Cấu hình múi giờ" as U3
  usecase "UC-SETTING-04
Cấu hình định dạng ngày giờ" as U4
  usecase "UC-SETTING-05
Cấu hình định dạng số và tiền tệ" as U5
  usecase "UC-SETTING-06
Chọn giao diện sáng hoặc tối" as U6
  usecase "UC-SETTING-07
Cấu hình mật độ hiển thị" as U7
  usecase "UC-SETTING-08
Cấu hình kích thước chữ" as U8
  usecase "UC-SETTING-09
Cấu hình tùy chọn trợ năng" as U9
  usecase "UC-SETTING-10
Cấu hình độ tương phản cá nhân" as U10
}
A1 --> PKG1
A2 --> PKG1
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
actor "Thành viên tenant" as A2
usecase "Nhóm SETTING — cụm 2" as PKG2
rectangle "Thiết lập cá nhân — Cụm 2/3" {
  usecase "UC-SETTING-11
Cấu hình phím tắt" as U11
  usecase "UC-SETTING-12
Cấu hình trang bắt đầu mặc định" as U12
  usecase "UC-SETTING-13
Chọn tenant mặc định" as U13
  usecase "UC-SETTING-14
Chọn dashboard mặc định" as U14
  usecase "UC-SETTING-15
Lưu bộ lọc thường dùng" as U15
  usecase "UC-SETTING-16
Quản lý cột hiển thị của bảng" as U16
  usecase "UC-SETTING-17
Lưu chế độ sắp xếp và phân trang" as U17
  usecase "UC-SETTING-18
Cấu hình kênh nhận thông báo" as U18
  usecase "UC-SETTING-19
Cấu hình loại thông báo được nhận" as U19
  usecase "UC-SETTING-20
Cấu hình giờ yên lặng" as U20
}
A1 --> PKG2
A2 --> PKG2
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

### 14.3. Cụm use case 21–28

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Người dùng nền tảng" as A1
actor "Thành viên tenant" as A2
usecase "Nhóm SETTING — cụm 3" as PKG3
rectangle "Thiết lập cá nhân — Cụm 3/3" {
  usecase "UC-SETTING-21
Cấu hình bản tin tổng hợp" as U21
  usecase "UC-SETTING-22
Cấu hình nhắc việc cá nhân" as U22
  usecase "UC-SETTING-23
Cấu hình quyền hiển thị thông tin cá nhân" as U23
  usecase "UC-SETTING-24
Quản lý tài khoản hoặc lịch tích hợp" as U24
  usecase "UC-SETTING-25
Đồng bộ thiết lập trên nhiều thiết bị" as U25
  usecase "UC-SETTING-26
Đặt lại thiết lập cá nhân" as U26
  usecase "UC-SETTING-27
Xuất thiết lập cá nhân" as U27
  usecase "UC-SETTING-28
Khôi phục thiết lập từ bản sao" as U28
}
A1 --> PKG3
A2 --> PKG3
PKG3 ..> U21 : <<contains>>
PKG3 ..> U22 : <<contains>>
PKG3 ..> U23 : <<contains>>
PKG3 ..> U24 : <<contains>>
PKG3 ..> U25 : <<contains>>
PKG3 ..> U26 : <<contains>>
PKG3 ..> U27 : <<contains>>
PKG3 ..> U28 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
