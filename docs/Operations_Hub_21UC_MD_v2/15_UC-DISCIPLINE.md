# UC-DISCIPLINE — Quản lý kỷ luật và KPI

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-DISCIPLINE` |
| Tên | Quản lý kỷ luật và KPI |
| Miền nghiệp vụ | Quản trị thành viên |
| Mức ưu tiên phát triển | Mô-đun vận hành |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Quản lý vụ việc kỷ luật, cảnh báo, KPI liên quan, bằng chứng, quyết định và khiếu nại theo quy trình minh bạch.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-APPROVER` | Người phê duyệt | Tenant hoặc tích hợp |
| `ACT-AUDITOR` | Người kiểm tra hoặc giám sát | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Module kỷ luật đã kích hoạt.
- Tenant đã cấu hình loại vi phạm, mức xử lý và chủ thể có thẩm quyền.

## 5. Điều kiện sau

- Vụ việc có hồ sơ, bằng chứng, quyết định và lịch sử trạng thái.
- Quyền xem dữ liệu nhạy cảm được giới hạn.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-DISCIPLINE-01` | Quản lý danh mục hành vi vi phạm | Cho phép quản lý danh mục hành vi vi phạm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-02` | Quản lý mức xử lý kỷ luật | Cho phép quản lý mức xử lý kỷ luật; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-03` | Cấu hình ngưỡng cảnh báo KPI hoặc chuyên cần | Cho phép cấu hình ngưỡng cảnh báo KPI hoặc chuyên cần; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-04` | Phát hiện vi phạm từ dữ liệu chuyên cần | Thực hiện nghiệp vụ “Phát hiện vi phạm từ dữ liệu chuyên cần” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-05` | Phát hiện vi phạm từ dữ liệu KPI | Thực hiện nghiệp vụ “Phát hiện vi phạm từ dữ liệu KPI” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-06` | Tạo vụ việc kỷ luật thủ công | Cho phép tạo vụ việc kỷ luật thủ công; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-07` | Gắn thành viên liên quan | Thực hiện nghiệp vụ “Gắn thành viên liên quan” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-08` | Thu thập và tải lên minh chứng | Thực hiện nghiệp vụ “Thu thập và tải lên minh chứng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-09` | Phân công người xử lý vụ việc | Thực hiện nghiệp vụ “Phân công người xử lý vụ việc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-10` | Thông báo thành viên về vụ việc | Thực hiện nghiệp vụ “Thông báo thành viên về vụ việc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-11` | Yêu cầu thành viên giải trình | Thực hiện nghiệp vụ “Yêu cầu thành viên giải trình” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-12` | Nộp giải trình | Thực hiện nghiệp vụ “Nộp giải trình” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-13` | Ghi nhận phỏng vấn hoặc phiên làm việc | Ghi nhận phỏng vấn hoặc phiên làm việc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-14` | Xác minh minh chứng | Thực hiện nghiệp vụ “Xác minh minh chứng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-15` | Đề xuất kết luận vụ việc | Thực hiện nghiệp vụ “Đề xuất kết luận vụ việc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-16` | Đề xuất hình thức xử lý | Thực hiện nghiệp vụ “Đề xuất hình thức xử lý” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-17` | Thực hiện phê duyệt kỷ luật | Thực hiện phê duyệt kỷ luật; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-18` | Từ chối hoặc yêu cầu điều tra bổ sung | Cho phép chủ thể có thẩm quyền từ chối hoặc yêu cầu điều tra bổ sung; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-19` | Ban hành quyết định kỷ luật | Thực hiện nghiệp vụ “Ban hành quyết định kỷ luật” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-20` | Ghi nhận điểm trừ hoặc điều chỉnh KPI | Ghi nhận điểm trừ hoặc điều chỉnh KPI; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-21` | Thiết lập kế hoạch khắc phục | Cho phép thiết lập kế hoạch khắc phục; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-22` | Theo dõi việc thực hiện kế hoạch khắc phục | Cho phép theo dõi việc thực hiện kế hoạch khắc phục; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-23` | Gửi cảnh báo hoặc nhắc việc | Cho phép gửi cảnh báo hoặc nhắc việc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-24` | Khiếu nại quyết định kỷ luật | Thực hiện nghiệp vụ “Khiếu nại quyết định kỷ luật” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-25` | Tiếp nhận khiếu nại | Thực hiện nghiệp vụ “Tiếp nhận khiếu nại” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-26` | Xem xét và giải quyết khiếu nại | Cho phép actor có quyền xem xét và giải quyết khiếu nại; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-27` | Sửa đổi hoặc hủy quyết định kỷ luật | Thực hiện nghiệp vụ “Sửa đổi hoặc hủy quyết định kỷ luật” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-28` | Tạm đình chỉ hiệu lực quyết định khi xem xét | Thực hiện nghiệp vụ “Tạm đình chỉ hiệu lực quyết định khi xem xét” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-29` | Đóng vụ việc | Cho phép đóng vụ việc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-30` | Mở lại vụ việc theo quyền | Cho phép mở lại vụ việc theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-31` | Hết hiệu lực hoặc xóa ghi nhận theo chính sách phục hồi | Thực hiện nghiệp vụ “Hết hiệu lực hoặc xóa ghi nhận theo chính sách phục hồi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-32` | Giới hạn truy cập hồ sơ nhạy cảm | Thực hiện nghiệp vụ “Giới hạn truy cập hồ sơ nhạy cảm” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-33` | Xuất báo cáo kỷ luật và KPI | Cho phép xuất báo cáo kỷ luật và KPI; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-34` | Xem lịch sử xử lý và audit vụ việc | Cho phép actor có quyền xem lịch sử xử lý và audit vụ việc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Discipline Officer tạo vụ việc và gắn thành viên.
2. Hệ thống kiểm tra phạm vi, loại vi phạm và dữ liệu nguồn.
3. Người xử lý thu thập minh chứng và yêu cầu giải trình.
4. Người có thẩm quyền xem hồ sơ và phê duyệt mức xử lý.
5. Hệ thống thông báo quyết định, thời hạn khiếu nại và cập nhật trạng thái.
6. Vụ việc được đóng sau khi hết quy trình hoặc hoàn tất xem xét lại.

## 8. Luồng thay thế và ngoại lệ

- Thiếu thẩm quyền: từ chối xem hoặc xử lý.
- Bằng chứng thuộc tenant khác: từ chối liên kết.
- Vụ việc đã đóng: chỉ mở lại qua quy trình có quyền.
- Cấu hình ngưỡng thay đổi: không tự động viết lại kết quả lịch sử đã chốt.

## 9. Quy tắc nghiệp vụ cốt lõi

- Dữ liệu kỷ luật là dữ liệu hạn chế và chỉ hiển thị theo nhu cầu nghiệp vụ.
- Người bị đánh giá không được tự phê duyệt quyết định của mình.
- Mọi quyết định phải dựa trên hồ sơ và bằng chứng liên kết.
- Đồng bộ chuyên cần hoặc KPI phải chống tạo trùng.
- Đóng vụ việc không xóa quyền khiếu nại còn hiệu lực.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `DisciplineCase` | Thực thể logic phục vụ UC-DISCIPLINE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ViolationType` | Thực thể logic phục vụ UC-DISCIPLINE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Evidence` | Thực thể logic phục vụ UC-DISCIPLINE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Explanation` | Thực thể logic phục vụ UC-DISCIPLINE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `DisciplineDecision` | Thực thể logic phục vụ UC-DISCIPLINE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `KpiRecord` | Thực thể logic phục vụ UC-DISCIPLINE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Appeal` | Thực thể logic phục vụ UC-DISCIPLINE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `CaseStatusHistory` | Thực thể logic phục vụ UC-DISCIPLINE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-DISCIPLINE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-DISCIPLINE-01` | Người không có quyền không xem được nội dung vụ việc. | Functional / Integration / Security Test tùy nội dung |
| `AC-DISCIPLINE-02` | Quyết định có người duyệt, thời điểm và bằng chứng. | Functional / Integration / Security Test tùy nội dung |
| `AC-DISCIPLINE-03` | Đồng bộ chuyên cần nhiều lần không tạo bản ghi KPI trùng. | Functional / Integration / Security Test tùy nội dung |
| `AC-DISCIPLINE-04` | Khiếu nại được xử lý theo trạng thái và thời hạn. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-MEMBER`](./09_UC-MEMBER.md), [`UC-MEETING`](./14_UC-MEETING.md), [`UC-DOCUMENT`](./11_UC-DOCUMENT.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Người phê duyệt" as A3
actor "Người kiểm tra hoặc giám sát" as A4
usecase "Nhóm DISCIPLINE — cụm 1" as PKG1
rectangle "Quản lý kỷ luật và KPI — Cụm 1/4" {
  usecase "UC-DISCIPLINE-01
Quản lý danh mục hành vi vi phạm" as U1
  usecase "UC-DISCIPLINE-02
Quản lý mức xử lý kỷ luật" as U2
  usecase "UC-DISCIPLINE-03
Cấu hình ngưỡng cảnh báo KPI hoặc chuyên cần" as U3
  usecase "UC-DISCIPLINE-04
Phát hiện vi phạm từ dữ liệu chuyên cần" as U4
  usecase "UC-DISCIPLINE-05
Phát hiện vi phạm từ dữ liệu KPI" as U5
  usecase "UC-DISCIPLINE-06
Tạo vụ việc kỷ luật thủ công" as U6
  usecase "UC-DISCIPLINE-07
Gắn thành viên liên quan" as U7
  usecase "UC-DISCIPLINE-08
Thu thập và tải lên minh chứng" as U8
  usecase "UC-DISCIPLINE-09
Phân công người xử lý vụ việc" as U9
  usecase "UC-DISCIPLINE-10
Thông báo thành viên về vụ việc" as U10
}
A1 --> PKG1
A2 --> PKG1
A3 --> PKG1
A4 --> PKG1
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
actor "Người phê duyệt" as A3
actor "Người kiểm tra hoặc giám sát" as A4
usecase "Nhóm DISCIPLINE — cụm 2" as PKG2
rectangle "Quản lý kỷ luật và KPI — Cụm 2/4" {
  usecase "UC-DISCIPLINE-11
Yêu cầu thành viên giải trình" as U11
  usecase "UC-DISCIPLINE-12
Nộp giải trình" as U12
  usecase "UC-DISCIPLINE-13
Ghi nhận phỏng vấn hoặc phiên làm việc" as U13
  usecase "UC-DISCIPLINE-14
Xác minh minh chứng" as U14
  usecase "UC-DISCIPLINE-15
Đề xuất kết luận vụ việc" as U15
  usecase "UC-DISCIPLINE-16
Đề xuất hình thức xử lý" as U16
  usecase "UC-DISCIPLINE-17
Thực hiện phê duyệt kỷ luật" as U17
  usecase "UC-DISCIPLINE-18
Từ chối hoặc yêu cầu điều tra bổ sung" as U18
  usecase "UC-DISCIPLINE-19
Ban hành quyết định kỷ luật" as U19
  usecase "UC-DISCIPLINE-20
Ghi nhận điểm trừ hoặc điều chỉnh KPI" as U20
}
A1 --> PKG2
A2 --> PKG2
A3 --> PKG2
A4 --> PKG2
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
actor "Người phê duyệt" as A3
actor "Người kiểm tra hoặc giám sát" as A4
usecase "Nhóm DISCIPLINE — cụm 3" as PKG3
rectangle "Quản lý kỷ luật và KPI — Cụm 3/4" {
  usecase "UC-DISCIPLINE-21
Thiết lập kế hoạch khắc phục" as U21
  usecase "UC-DISCIPLINE-22
Theo dõi việc thực hiện kế hoạch khắc phục" as U22
  usecase "UC-DISCIPLINE-23
Gửi cảnh báo hoặc nhắc việc" as U23
  usecase "UC-DISCIPLINE-24
Khiếu nại quyết định kỷ luật" as U24
  usecase "UC-DISCIPLINE-25
Tiếp nhận khiếu nại" as U25
  usecase "UC-DISCIPLINE-26
Xem xét và giải quyết khiếu nại" as U26
  usecase "UC-DISCIPLINE-27
Sửa đổi hoặc hủy quyết định kỷ luật" as U27
  usecase "UC-DISCIPLINE-28
Tạm đình chỉ hiệu lực quyết định khi xem xét" as U28
  usecase "UC-DISCIPLINE-29
Đóng vụ việc" as U29
  usecase "UC-DISCIPLINE-30
Mở lại vụ việc theo quyền" as U30
}
A1 --> PKG3
A2 --> PKG3
A3 --> PKG3
A4 --> PKG3
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

### 14.4. Cụm use case 31–34

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Người phê duyệt" as A3
actor "Người kiểm tra hoặc giám sát" as A4
usecase "Nhóm DISCIPLINE — cụm 4" as PKG4
rectangle "Quản lý kỷ luật và KPI — Cụm 4/4" {
  usecase "UC-DISCIPLINE-31
Hết hiệu lực hoặc xóa ghi nhận theo chính sách phục hồi" as U31
  usecase "UC-DISCIPLINE-32
Giới hạn truy cập hồ sơ nhạy cảm" as U32
  usecase "UC-DISCIPLINE-33
Xuất báo cáo kỷ luật và KPI" as U33
  usecase "UC-DISCIPLINE-34
Xem lịch sử xử lý và audit vụ việc" as U34
}
A1 --> PKG4
A2 --> PKG4
A3 --> PKG4
A4 --> PKG4
PKG4 ..> U31 : <<contains>>
PKG4 ..> U32 : <<contains>>
PKG4 ..> U33 : <<contains>>
PKG4 ..> U34 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
