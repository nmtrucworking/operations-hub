# UC-NOTIFICATION — Quản lý thông báo và truyền thông nội bộ

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-NOTIFICATION` |
| Tên | Quản lý thông báo và truyền thông nội bộ |
| Miền nghiệp vụ | Truyền thông nội bộ |
| Mức ưu tiên phát triển | Năng lực dùng chung |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Tạo, phân phối và theo dõi thông báo theo tenant, đối tượng, kênh và mức độ bắt buộc.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-EXTERNAL-SERVICE` | Dịch vụ bên ngoài | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Tenant và kênh thông báo đã cấu hình.
- Người gửi có permission với đối tượng nhận.

## 5. Điều kiện sau

- Thông báo được gửi hoặc lên lịch, có trạng thái giao nhận và phạm vi đúng.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-NOTIFICATION-01` | Quản lý mẫu thông báo | Cho phép quản lý mẫu thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-02` | Tạo mẫu thông báo | Cho phép tạo mẫu thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-03` | Cập nhật mẫu thông báo | Cho phép cập nhật mẫu thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-04` | Phiên bản hóa mẫu thông báo | Thực hiện nghiệp vụ “Phiên bản hóa mẫu thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-05` | Cấu hình biến dữ liệu trong mẫu | Cho phép cấu hình biến dữ liệu trong mẫu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-06` | Xem trước nội dung thông báo | Cho phép actor có quyền xem trước nội dung thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-07` | Tạo thông báo nháp | Cho phép tạo thông báo nháp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-08` | Chọn kênh gửi thông báo | Cho phép lựa chọn kênh gửi thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-09` | Chọn đối tượng nhận theo tenant | Cho phép lựa chọn đối tượng nhận theo tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-10` | Chọn đối tượng nhận theo đơn vị | Cho phép lựa chọn đối tượng nhận theo đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-11` | Chọn đối tượng nhận theo role hoặc nhóm | Cho phép lựa chọn đối tượng nhận theo role hoặc nhóm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-12` | Chọn người nhận cụ thể | Cho phép lựa chọn người nhận cụ thể; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-13` | Kiểm tra phạm vi người nhận | Kiểm tra phạm vi người nhận; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-14` | Gửi thông báo ngay | Cho phép gửi thông báo ngay; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-15` | Lên lịch gửi thông báo | Thực hiện nghiệp vụ “Lên lịch gửi thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-16` | Sửa lịch gửi thông báo | Thực hiện nghiệp vụ “Sửa lịch gửi thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-17` | Hủy thông báo đã lên lịch | Cho phép hủy thông báo đã lên lịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-18` | Yêu cầu phê duyệt thông báo | Thực hiện nghiệp vụ “Yêu cầu phê duyệt thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-19` | Phê duyệt thông báo | Cho phép chủ thể có thẩm quyền phê duyệt thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-20` | Từ chối hoặc yêu cầu sửa thông báo | Cho phép chủ thể có thẩm quyền từ chối hoặc yêu cầu sửa thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-21` | Gửi thông báo trong ứng dụng | Cho phép gửi thông báo trong ứng dụng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-22` | Gửi email | Cho phép gửi email; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-23` | Gửi SMS khi được tích hợp | Cho phép gửi SMS khi được tích hợp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-24` | Gửi push notification | Cho phép gửi push notification; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-25` | Gửi webhook đến hệ thống ngoài | Cho phép gửi webhook đến hệ thống ngoài; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-26` | Tạo thông báo từ sự kiện hệ thống | Cho phép tạo thông báo từ sự kiện hệ thống; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-27` | Tạo nhắc việc tự động | Cho phép tạo nhắc việc tự động; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-28` | Tạo thông báo leo thang | Cho phép tạo thông báo leo thang; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-29` | Tạo bản tin tổng hợp định kỳ | Cho phép tạo bản tin tổng hợp định kỳ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-30` | Tôn trọng giờ yên lặng và tùy chọn người dùng | Thực hiện nghiệp vụ “Tôn trọng giờ yên lặng và tùy chọn người dùng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-31` | Gửi thông báo khẩn cấp theo quyền | Cho phép gửi thông báo khẩn cấp theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-32` | Theo dõi trạng thái gửi | Cho phép theo dõi trạng thái gửi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-33` | Xử lý gửi thất bại và retry | Thực hiện nghiệp vụ “Xử lý gửi thất bại và retry” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-34` | Xử lý email bounce hoặc địa chỉ không hợp lệ | Thực hiện nghiệp vụ “Xử lý email bounce hoặc địa chỉ không hợp lệ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-35` | Đánh dấu thông báo đã đọc | Thực hiện nghiệp vụ “Đánh dấu thông báo đã đọc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-36` | Đánh dấu tất cả đã đọc | Thực hiện nghiệp vụ “Đánh dấu tất cả đã đọc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-37` | Xác nhận đã nhận hoặc đã hiểu thông báo | Thực hiện nghiệp vụ “Xác nhận đã nhận hoặc đã hiểu thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-38` | Tìm kiếm và lọc thông báo | Thực hiện nghiệp vụ “Tìm kiếm và lọc thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-39` | Lưu trữ hoặc xóa thông báo cá nhân | Cho phép lưu trữ hoặc xóa thông báo cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-40` | Quản lý bản dịch nội dung thông báo | Cho phép quản lý bản dịch nội dung thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-41` | Kiểm soát tần suất và chống spam | Thực hiện nghiệp vụ “Kiểm soát tần suất và chống spam” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-42` | Xuất báo cáo hiệu quả gửi thông báo | Cho phép xuất báo cáo hiệu quả gửi thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Người phụ trách chọn mẫu và soạn nội dung.
2. Hệ thống xác định đối tượng nhận trong tenant.
3. Người gửi chọn kênh và thời điểm.
4. Hệ thống kiểm tra permission, preference và nội dung bắt buộc.
5. Thông báo được tạo, đưa vào hàng đợi và gửi qua kênh tương ứng.
6. Hệ thống cập nhật trạng thái giao nhận và xác nhận đã đọc.

## 8. Luồng thay thế và ngoại lệ

- Dịch vụ ngoài lỗi: retry theo chính sách và không đánh dấu đã gửi giả.
- Người nhận đã kết thúc membership trước thời điểm gửi: loại khỏi nhóm nếu thông báo không còn áp dụng.
- Template thiếu biến: từ chối gửi.
- Đối tượng nhận vượt phạm vi người gửi: từ chối.

## 9. Quy tắc nghiệp vụ cốt lõi

- Thông báo chỉ gửi đến người thuộc phạm vi mà người gửi được phép quản lý.
- Thông báo bảo mật, quản trị hoặc nghĩa vụ bắt buộc có thể không chịu preference tắt nhận.
- Danh sách người nhận phải được snapshot hoặc truy vết quy tắc chọn đối tượng.
- Không đưa dữ liệu nhạy cảm vượt mức cần thiết vào kênh ngoài.
- Gửi lại phải có khóa chống trùng hoặc trạng thái giao nhận.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `NotificationTemplate` | Thực thể logic phục vụ UC-NOTIFICATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Notification` | Thực thể logic phục vụ UC-NOTIFICATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `NotificationAudience` | Thực thể logic phục vụ UC-NOTIFICATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `NotificationRecipient` | Thực thể logic phục vụ UC-NOTIFICATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `DeliveryAttempt` | Thực thể logic phục vụ UC-NOTIFICATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ReadReceipt` | Thực thể logic phục vụ UC-NOTIFICATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `NotificationPreference` | Thực thể logic phục vụ UC-NOTIFICATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-NOTIFICATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-NOTIFICATION-01` | Không gửi thông báo tenant A cho người chỉ thuộc tenant B. | Functional / Integration / Security Test tùy nội dung |
| `AC-NOTIFICATION-02` | Trạng thái gửi phản ánh kết quả thực tế của từng kênh. | Functional / Integration / Security Test tùy nội dung |
| `AC-NOTIFICATION-03` | Thông báo bắt buộc có thể yêu cầu xác nhận đã đọc. | Functional / Integration / Security Test tùy nội dung |
| `AC-NOTIFICATION-04` | Retry không tạo nhiều thông báo logic trùng nhau. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-MEMBER`](./09_UC-MEMBER.md), [`UC-SETTING`](./08_UC-SETTING.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Dịch vụ bên ngoài" as A3
usecase "Nhóm NOTIFICATION — cụm 1" as PKG1
rectangle "Quản lý thông báo và truyền thông nội bộ — Cụm 1/5" {
  usecase "UC-NOTIFICATION-01
Quản lý mẫu thông báo" as U1
  usecase "UC-NOTIFICATION-02
Tạo mẫu thông báo" as U2
  usecase "UC-NOTIFICATION-03
Cập nhật mẫu thông báo" as U3
  usecase "UC-NOTIFICATION-04
Phiên bản hóa mẫu thông báo" as U4
  usecase "UC-NOTIFICATION-05
Cấu hình biến dữ liệu trong mẫu" as U5
  usecase "UC-NOTIFICATION-06
Xem trước nội dung thông báo" as U6
  usecase "UC-NOTIFICATION-07
Tạo thông báo nháp" as U7
  usecase "UC-NOTIFICATION-08
Chọn kênh gửi thông báo" as U8
  usecase "UC-NOTIFICATION-09
Chọn đối tượng nhận theo tenant" as U9
  usecase "UC-NOTIFICATION-10
Chọn đối tượng nhận theo đơn vị" as U10
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
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Dịch vụ bên ngoài" as A3
usecase "Nhóm NOTIFICATION — cụm 2" as PKG2
rectangle "Quản lý thông báo và truyền thông nội bộ — Cụm 2/5" {
  usecase "UC-NOTIFICATION-11
Chọn đối tượng nhận theo role hoặc nhóm" as U11
  usecase "UC-NOTIFICATION-12
Chọn người nhận cụ thể" as U12
  usecase "UC-NOTIFICATION-13
Kiểm tra phạm vi người nhận" as U13
  usecase "UC-NOTIFICATION-14
Gửi thông báo ngay" as U14
  usecase "UC-NOTIFICATION-15
Lên lịch gửi thông báo" as U15
  usecase "UC-NOTIFICATION-16
Sửa lịch gửi thông báo" as U16
  usecase "UC-NOTIFICATION-17
Hủy thông báo đã lên lịch" as U17
  usecase "UC-NOTIFICATION-18
Yêu cầu phê duyệt thông báo" as U18
  usecase "UC-NOTIFICATION-19
Phê duyệt thông báo" as U19
  usecase "UC-NOTIFICATION-20
Từ chối hoặc yêu cầu sửa thông báo" as U20
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
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Dịch vụ bên ngoài" as A3
usecase "Nhóm NOTIFICATION — cụm 3" as PKG3
rectangle "Quản lý thông báo và truyền thông nội bộ — Cụm 3/5" {
  usecase "UC-NOTIFICATION-21
Gửi thông báo trong ứng dụng" as U21
  usecase "UC-NOTIFICATION-22
Gửi email" as U22
  usecase "UC-NOTIFICATION-23
Gửi SMS khi được tích hợp" as U23
  usecase "UC-NOTIFICATION-24
Gửi push notification" as U24
  usecase "UC-NOTIFICATION-25
Gửi webhook đến hệ thống ngoài" as U25
  usecase "UC-NOTIFICATION-26
Tạo thông báo từ sự kiện hệ thống" as U26
  usecase "UC-NOTIFICATION-27
Tạo nhắc việc tự động" as U27
  usecase "UC-NOTIFICATION-28
Tạo thông báo leo thang" as U28
  usecase "UC-NOTIFICATION-29
Tạo bản tin tổng hợp định kỳ" as U29
  usecase "UC-NOTIFICATION-30
Tôn trọng giờ yên lặng và tùy chọn người dùng" as U30
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

### 14.4. Cụm use case 31–40

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Dịch vụ bên ngoài" as A3
usecase "Nhóm NOTIFICATION — cụm 4" as PKG4
rectangle "Quản lý thông báo và truyền thông nội bộ — Cụm 4/5" {
  usecase "UC-NOTIFICATION-31
Gửi thông báo khẩn cấp theo quyền" as U31
  usecase "UC-NOTIFICATION-32
Theo dõi trạng thái gửi" as U32
  usecase "UC-NOTIFICATION-33
Xử lý gửi thất bại và retry" as U33
  usecase "UC-NOTIFICATION-34
Xử lý email bounce hoặc địa chỉ không hợp lệ" as U34
  usecase "UC-NOTIFICATION-35
Đánh dấu thông báo đã đọc" as U35
  usecase "UC-NOTIFICATION-36
Đánh dấu tất cả đã đọc" as U36
  usecase "UC-NOTIFICATION-37
Xác nhận đã nhận hoặc đã hiểu thông báo" as U37
  usecase "UC-NOTIFICATION-38
Tìm kiếm và lọc thông báo" as U38
  usecase "UC-NOTIFICATION-39
Lưu trữ hoặc xóa thông báo cá nhân" as U39
  usecase "UC-NOTIFICATION-40
Quản lý bản dịch nội dung thông báo" as U40
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
PKG4 ..> U37 : <<contains>>
PKG4 ..> U38 : <<contains>>
PKG4 ..> U39 : <<contains>>
PKG4 ..> U40 : <<contains>>
@enduml
```

### 14.5. Cụm use case 41–42

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Dịch vụ bên ngoài" as A3
usecase "Nhóm NOTIFICATION — cụm 5" as PKG5
rectangle "Quản lý thông báo và truyền thông nội bộ — Cụm 5/5" {
  usecase "UC-NOTIFICATION-41
Kiểm soát tần suất và chống spam" as U41
  usecase "UC-NOTIFICATION-42
Xuất báo cáo hiệu quả gửi thông báo" as U42
}
A1 --> PKG5
A2 --> PKG5
A3 --> PKG5
PKG5 ..> U41 : <<contains>>
PKG5 ..> U42 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
