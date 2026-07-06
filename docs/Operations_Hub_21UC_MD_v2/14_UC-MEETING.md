# UC-MEETING — Quản lý cuộc họp, sự kiện và chuyên cần

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-MEETING` |
| Tên | Quản lý cuộc họp, sự kiện và chuyên cần |
| Miền nghiệp vụ | Hoạt động tổ chức |
| Mức ưu tiên phát triển | Mô-đun vận hành |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Quản lý lịch họp hoặc sự kiện, người tham gia, chuyên cần, biên bản, quyết định và đầu việc phát sinh.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-UNIT-ADMIN` | Quản trị viên đơn vị trực thuộc | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Module cuộc họp đã kích hoạt.
- Người tạo có quyền với đơn vị hoặc nhóm đối tượng liên quan.

## 5. Điều kiện sau

- Cuộc họp có danh sách tham gia, kết quả chuyên cần và biên bản truy vết được.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-MEETING-01` | Quản lý loại cuộc họp hoặc sự kiện | Cho phép quản lý loại cuộc họp hoặc sự kiện; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-02` | Tạo cuộc họp nháp | Cho phép tạo cuộc họp nháp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-03` | Lên lịch cuộc họp | Thực hiện nghiệp vụ “Lên lịch cuộc họp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-04` | Tạo chuỗi cuộc họp định kỳ | Cho phép tạo chuỗi cuộc họp định kỳ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-05` | Chỉnh sửa một lần trong chuỗi định kỳ | Thực hiện nghiệp vụ “Chỉnh sửa một lần trong chuỗi định kỳ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-06` | Mời người tham dự | Thực hiện nghiệp vụ “Mời người tham dự” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-07` | Mời đơn vị hoặc nhóm tham dự | Thực hiện nghiệp vụ “Mời đơn vị hoặc nhóm tham dự” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-08` | Phản hồi tham dự | Thực hiện nghiệp vụ “Phản hồi tham dự” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-09` | Quản lý danh sách khách mời | Cho phép quản lý danh sách khách mời; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-10` | Tạo chương trình nghị sự | Cho phép tạo chương trình nghị sự; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-11` | Đính kèm tài liệu cuộc họp | Thực hiện nghiệp vụ “Đính kèm tài liệu cuộc họp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-12` | Đặt phòng hoặc tài nguyên | Cho phép đặt phòng hoặc tài nguyên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-13` | Kiểm tra xung đột lịch | Kiểm tra xung đột lịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-14` | Tạo liên kết họp trực tuyến | Cho phép tạo liên kết họp trực tuyến; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-15` | Gửi thông báo và nhắc lịch | Cho phép gửi thông báo và nhắc lịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-16` | Đổi lịch cuộc họp | Thực hiện nghiệp vụ “Đổi lịch cuộc họp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-17` | Hủy cuộc họp | Cho phép hủy cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-18` | Mở phiên điểm danh | Cho phép mở phiên điểm danh; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-19` | Điểm danh thủ công | Thực hiện nghiệp vụ “Điểm danh thủ công” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-20` | Điểm danh bằng QR hoặc mã check-in | Thực hiện nghiệp vụ “Điểm danh bằng QR hoặc mã check-in” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-21` | Ghi nhận đi trễ hoặc về sớm | Ghi nhận đi trễ hoặc về sớm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-22` | Ghi nhận lý do vắng | Ghi nhận lý do vắng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-23` | Yêu cầu xác nhận vắng có phép | Thực hiện nghiệp vụ “Yêu cầu xác nhận vắng có phép” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-24` | Phê duyệt vắng có phép | Cho phép chủ thể có thẩm quyền phê duyệt vắng có phép; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-25` | Khóa kết quả chuyên cần | Thực hiện nghiệp vụ “Khóa kết quả chuyên cần” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-26` | Lập biên bản cuộc họp | Thực hiện nghiệp vụ “Lập biên bản cuộc họp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-27` | Ghi nhận quyết định cuộc họp | Ghi nhận quyết định cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-28` | Tạo nhiệm vụ sau cuộc họp | Cho phép tạo nhiệm vụ sau cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-29` | Theo dõi nhiệm vụ sau cuộc họp | Cho phép theo dõi nhiệm vụ sau cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-30` | Tổ chức biểu quyết hoặc thăm dò | Thực hiện nghiệp vụ “Tổ chức biểu quyết hoặc thăm dò” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-31` | Công bố biên bản và kết quả | Thực hiện nghiệp vụ “Công bố biên bản và kết quả” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-32` | Xác nhận đã đọc biên bản | Thực hiện nghiệp vụ “Xác nhận đã đọc biên bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-33` | Thu thập phản hồi sau sự kiện | Thực hiện nghiệp vụ “Thu thập phản hồi sau sự kiện” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-34` | Đồng bộ lịch cá nhân | Thực hiện nghiệp vụ “Đồng bộ lịch cá nhân” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-35` | Liên kết cuộc họp với yêu cầu hoặc văn bản | Cho phép liên kết cuộc họp với yêu cầu hoặc văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-36` | Tổng hợp chuyên cần theo thành viên | Thực hiện nghiệp vụ “Tổng hợp chuyên cần theo thành viên” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-37` | Tổng hợp chuyên cần theo đơn vị | Thực hiện nghiệp vụ “Tổng hợp chuyên cần theo đơn vị” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-38` | Xuất danh sách và báo cáo cuộc họp | Cho phép xuất danh sách và báo cáo cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-39` | Lưu trữ cuộc họp | Cho phép lưu trữ cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-40` | Khôi phục cuộc họp đã lưu trữ | Cho phép khôi phục cuộc họp đã lưu trữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Meeting Coordinator tạo cuộc họp và chọn người tham gia.
2. Hệ thống kiểm tra thời gian, phạm vi và membership.
3. Hệ thống gửi thông báo mời.
4. Tại thời điểm diễn ra, người phụ trách ghi chuyên cần hoặc mở check-in.
5. Sau cuộc họp, biên bản, quyết định và đầu việc được ghi nhận.
6. Hệ thống tổng hợp chuyên cần và đồng bộ sang module liên quan nếu cấu hình.

## 8. Luồng thay thế và ngoại lệ

- Trùng lịch tài nguyên hoặc người chủ trì: cảnh báo theo chính sách.
- Check-in ngoài thời gian hoặc token không hợp lệ: từ chối.
- Membership đã kết thúc: không thêm vào danh sách hoạt động mới.
- Đồng bộ chuyên cần lặp: dùng khóa idempotency để tránh nhân đôi.

## 9. Quy tắc nghiệp vụ cốt lõi

- Thời gian kết thúc phải sau thời gian bắt đầu.
- Mỗi cặp meeting–membership chỉ có một bản ghi chuyên cần hiện hành.
- Người tham gia và đơn vị phải thuộc cùng tenant hoặc được mời theo cơ chế liên tenant công bố rõ.
- Thay đổi lịch sau khi gửi mời phải tạo thông báo.
- Biên bản đã phê duyệt cần phiên bản mới nếu chỉnh sửa.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `Meeting` | Thực thể logic phục vụ UC-MEETING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `MeetingParticipant` | Thực thể logic phục vụ UC-MEETING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AttendanceRecord` | Thực thể logic phục vụ UC-MEETING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `CheckInToken` | Thực thể logic phục vụ UC-MEETING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `MeetingMinute` | Thực thể logic phục vụ UC-MEETING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Decision` | Thực thể logic phục vụ UC-MEETING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ActionItem` | Thực thể logic phục vụ UC-MEETING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `MeetingResource` | Thực thể logic phục vụ UC-MEETING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-MEETING; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-MEETING-01` | Không có hai bản ghi chuyên cần hiện hành cho cùng meeting và member. | Functional / Integration / Security Test tùy nội dung |
| `AC-MEETING-02` | Thay đổi lịch tạo thông báo đến người bị ảnh hưởng. | Functional / Integration / Security Test tùy nội dung |
| `AC-MEETING-03` | Biên bản luôn chỉ rõ phiên bản và người lập. | Functional / Integration / Security Test tùy nội dung |
| `AC-MEETING-04` | Dữ liệu chuyên cần không lẫn tenant. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-MEMBER`](./09_UC-MEMBER.md), [`UC-ORG`](./05_UC-ORG.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md), [`UC-DOCUMENT`](./11_UC-DOCUMENT.md), [`UC-DISCIPLINE`](./15_UC-DISCIPLINE.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
usecase "Nhóm MEETING — cụm 1" as PKG1
rectangle "Quản lý cuộc họp, sự kiện và chuyên cần — Cụm 1/4" {
  usecase "UC-MEETING-01
Quản lý loại cuộc họp hoặc sự kiện" as U1
  usecase "UC-MEETING-02
Tạo cuộc họp nháp" as U2
  usecase "UC-MEETING-03
Lên lịch cuộc họp" as U3
  usecase "UC-MEETING-04
Tạo chuỗi cuộc họp định kỳ" as U4
  usecase "UC-MEETING-05
Chỉnh sửa một lần trong chuỗi định kỳ" as U5
  usecase "UC-MEETING-06
Mời người tham dự" as U6
  usecase "UC-MEETING-07
Mời đơn vị hoặc nhóm tham dự" as U7
  usecase "UC-MEETING-08
Phản hồi tham dự" as U8
  usecase "UC-MEETING-09
Quản lý danh sách khách mời" as U9
  usecase "UC-MEETING-10
Tạo chương trình nghị sự" as U10
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
actor "Quản trị viên đơn vị trực thuộc" as A3
usecase "Nhóm MEETING — cụm 2" as PKG2
rectangle "Quản lý cuộc họp, sự kiện và chuyên cần — Cụm 2/4" {
  usecase "UC-MEETING-11
Đính kèm tài liệu cuộc họp" as U11
  usecase "UC-MEETING-12
Đặt phòng hoặc tài nguyên" as U12
  usecase "UC-MEETING-13
Kiểm tra xung đột lịch" as U13
  usecase "UC-MEETING-14
Tạo liên kết họp trực tuyến" as U14
  usecase "UC-MEETING-15
Gửi thông báo và nhắc lịch" as U15
  usecase "UC-MEETING-16
Đổi lịch cuộc họp" as U16
  usecase "UC-MEETING-17
Hủy cuộc họp" as U17
  usecase "UC-MEETING-18
Mở phiên điểm danh" as U18
  usecase "UC-MEETING-19
Điểm danh thủ công" as U19
  usecase "UC-MEETING-20
Điểm danh bằng QR hoặc mã check-in" as U20
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
actor "Quản trị viên đơn vị trực thuộc" as A3
usecase "Nhóm MEETING — cụm 3" as PKG3
rectangle "Quản lý cuộc họp, sự kiện và chuyên cần — Cụm 3/4" {
  usecase "UC-MEETING-21
Ghi nhận đi trễ hoặc về sớm" as U21
  usecase "UC-MEETING-22
Ghi nhận lý do vắng" as U22
  usecase "UC-MEETING-23
Yêu cầu xác nhận vắng có phép" as U23
  usecase "UC-MEETING-24
Phê duyệt vắng có phép" as U24
  usecase "UC-MEETING-25
Khóa kết quả chuyên cần" as U25
  usecase "UC-MEETING-26
Lập biên bản cuộc họp" as U26
  usecase "UC-MEETING-27
Ghi nhận quyết định cuộc họp" as U27
  usecase "UC-MEETING-28
Tạo nhiệm vụ sau cuộc họp" as U28
  usecase "UC-MEETING-29
Theo dõi nhiệm vụ sau cuộc họp" as U29
  usecase "UC-MEETING-30
Tổ chức biểu quyết hoặc thăm dò" as U30
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
actor "Quản trị viên đơn vị trực thuộc" as A3
usecase "Nhóm MEETING — cụm 4" as PKG4
rectangle "Quản lý cuộc họp, sự kiện và chuyên cần — Cụm 4/4" {
  usecase "UC-MEETING-31
Công bố biên bản và kết quả" as U31
  usecase "UC-MEETING-32
Xác nhận đã đọc biên bản" as U32
  usecase "UC-MEETING-33
Thu thập phản hồi sau sự kiện" as U33
  usecase "UC-MEETING-34
Đồng bộ lịch cá nhân" as U34
  usecase "UC-MEETING-35
Liên kết cuộc họp với yêu cầu hoặc văn bản" as U35
  usecase "UC-MEETING-36
Tổng hợp chuyên cần theo thành viên" as U36
  usecase "UC-MEETING-37
Tổng hợp chuyên cần theo đơn vị" as U37
  usecase "UC-MEETING-38
Xuất danh sách và báo cáo cuộc họp" as U38
  usecase "UC-MEETING-39
Lưu trữ cuộc họp" as U39
  usecase "UC-MEETING-40
Khôi phục cuộc họp đã lưu trữ" as U40
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

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
