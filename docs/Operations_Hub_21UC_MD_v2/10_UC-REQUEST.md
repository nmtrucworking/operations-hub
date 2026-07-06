# UC-REQUEST — Quản lý đơn từ và yêu cầu nội bộ

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-REQUEST` |
| Tên | Quản lý đơn từ và yêu cầu nội bộ |
| Miền nghiệp vụ | Quy trình nghiệp vụ |
| Mức ưu tiên phát triển | Mô-đun vận hành |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Số hóa vòng đời đơn từ và yêu cầu nội bộ từ khởi tạo, nộp, phê duyệt đến liên kết kết quả nghiệp vụ.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-APPROVER` | Người phê duyệt | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Module yêu cầu đã kích hoạt.
- Tenant đã cấu hình loại yêu cầu và workflow tương ứng.

## 5. Điều kiện sau

- Yêu cầu có trạng thái, lịch sử và quyết định phê duyệt rõ ràng.
- Kết quả có thể liên kết tài chính, văn bản hoặc nghiệp vụ khác.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-REQUEST-01` | Xem danh mục loại yêu cầu | Cho phép actor có quyền xem danh mục loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-02` | Tạo loại yêu cầu | Cho phép tạo loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-03` | Cập nhật loại yêu cầu | Cho phép cập nhật loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-04` | Vô hiệu hóa loại yêu cầu | Cho phép vô hiệu hóa loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-05` | Cấu hình biểu mẫu yêu cầu | Cho phép cấu hình biểu mẫu yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-06` | Cấu hình quy trình phê duyệt yêu cầu | Cho phép cấu hình quy trình phê duyệt yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-07` | Tạo bản nháp yêu cầu | Cho phép tạo bản nháp yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-08` | Cập nhật bản nháp yêu cầu | Cho phép cập nhật bản nháp yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-09` | Đính kèm tệp vào yêu cầu | Thực hiện nghiệp vụ “Đính kèm tệp vào yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-10` | Kiểm tra dữ liệu yêu cầu | Kiểm tra dữ liệu yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-11` | Gửi yêu cầu | Cho phép gửi yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-12` | Xem yêu cầu của cá nhân | Cho phép actor có quyền xem yêu cầu của cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-13` | Xem chi tiết yêu cầu | Cho phép actor có quyền xem chi tiết yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-14` | Tìm kiếm và lọc yêu cầu | Thực hiện nghiệp vụ “Tìm kiếm và lọc yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-15` | Rút yêu cầu đang chờ xử lý | Thực hiện nghiệp vụ “Rút yêu cầu đang chờ xử lý” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-16` | Hủy yêu cầu theo quyền | Cho phép hủy yêu cầu theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-17` | Sao chép yêu cầu | Thực hiện nghiệp vụ “Sao chép yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-18` | Chuyển loại yêu cầu | Cho phép chuyển loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-19` | Yêu cầu người gửi bổ sung thông tin | Thực hiện nghiệp vụ “Yêu cầu người gửi bổ sung thông tin” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-20` | Bổ sung và gửi lại yêu cầu | Thực hiện nghiệp vụ “Bổ sung và gửi lại yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-21` | Phân công người xử lý | Thực hiện nghiệp vụ “Phân công người xử lý” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-22` | Chuyển người xử lý | Cho phép chuyển người xử lý; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-23` | Ủy quyền phê duyệt yêu cầu | Thực hiện nghiệp vụ “Ủy quyền phê duyệt yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-24` | Thực hiện bước phê duyệt | Thực hiện bước phê duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-25` | Phê duyệt yêu cầu | Cho phép chủ thể có thẩm quyền phê duyệt yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-26` | Từ chối yêu cầu | Cho phép chủ thể có thẩm quyền từ chối yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-27` | Trả yêu cầu để chỉnh sửa | Thực hiện nghiệp vụ “Trả yêu cầu để chỉnh sửa” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-28` | Thực hiện phê duyệt nhiều cấp | Thực hiện phê duyệt nhiều cấp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-29` | Kiểm tra nguyên tắc không tự phê duyệt | Kiểm tra nguyên tắc không tự phê duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-30` | Theo dõi thời hạn xử lý | Cho phép theo dõi thời hạn xử lý; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-31` | Gửi nhắc việc hoặc cảnh báo quá hạn | Cho phép gửi nhắc việc hoặc cảnh báo quá hạn; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-32` | Thêm bình luận trao đổi | Thực hiện nghiệp vụ “Thêm bình luận trao đổi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-33` | Thêm ghi chú nội bộ | Thực hiện nghiệp vụ “Thêm ghi chú nội bộ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-34` | Xem lịch sử trạng thái yêu cầu | Cho phép actor có quyền xem lịch sử trạng thái yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-35` | Liên kết yêu cầu với hồ sơ nghiệp vụ khác | Cho phép liên kết yêu cầu với hồ sơ nghiệp vụ khác; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-36` | Sinh văn bản từ yêu cầu | Cho phép sinh văn bản từ yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-37` | Tạo giao dịch tài chính từ yêu cầu được duyệt | Cho phép tạo giao dịch tài chính từ yêu cầu được duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-38` | Tạo tác vụ hoặc sự kiện từ yêu cầu được duyệt | Cho phép tạo tác vụ hoặc sự kiện từ yêu cầu được duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-39` | Mở lại yêu cầu đã đóng theo quyền | Cho phép mở lại yêu cầu đã đóng theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-40` | Đóng yêu cầu | Cho phép đóng yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-41` | Lưu trữ yêu cầu | Cho phép lưu trữ yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-42` | Xuất danh sách hoặc báo cáo yêu cầu | Cho phép xuất danh sách hoặc báo cáo yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-43` | Xử lý hàng loạt yêu cầu | Thực hiện nghiệp vụ “Xử lý hàng loạt yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |

## 7. Luồng nghiệp vụ chính

1. Thành viên chọn loại yêu cầu và tạo bản nháp.
2. Hệ thống tải biểu mẫu theo tenant và kiểm tra trường bắt buộc.
3. Thành viên nộp yêu cầu; hệ thống xác định workflow và người xử lý.
4. Approver xem nội dung, minh chứng và lịch sử.
5. Approver phê duyệt hoặc yêu cầu bổ sung.
6. Khi phê duyệt cuối, hệ thống cập nhật trạng thái và tạo nghiệp vụ liên kết nếu được cấu hình.

## 8. Luồng thay thế và ngoại lệ

- Thiếu dữ liệu bắt buộc: không cho nộp.
- Approver ngoài phạm vi: từ chối.
- Yêu cầu đã được xử lý bởi người khác: trả xung đột trạng thái.
- Tạo nghiệp vụ liên kết thất bại: ghi trạng thái lỗi có thể xử lý lại, không lặp giao dịch.

## 9. Quy tắc nghiệp vụ cốt lõi

- Yêu cầu chỉ được xử lý trong tenant sở hữu.
- Không được duyệt lại yêu cầu đã hoàn tất nếu không có quy trình mở lại.
- Khi bật phân tách trách nhiệm, người tạo không được tự phê duyệt.
- Thay đổi workflow không được làm mất ý nghĩa của yêu cầu đang chạy.
- Quyết định phê duyệt phải lưu người thực hiện, thời điểm và ghi chú khi bắt buộc.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `RequestType` | Thực thể logic phục vụ UC-REQUEST; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Request` | Thực thể logic phục vụ UC-REQUEST; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `RequestFieldValue` | Thực thể logic phục vụ UC-REQUEST; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ApprovalWorkflow` | Thực thể logic phục vụ UC-REQUEST; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ApprovalStep` | Thực thể logic phục vụ UC-REQUEST; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ApprovalDecision` | Thực thể logic phục vụ UC-REQUEST; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Attachment` | Thực thể logic phục vụ UC-REQUEST; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `LinkedBusinessObject` | Thực thể logic phục vụ UC-REQUEST; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-REQUEST; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-REQUEST-01` | Yêu cầu mới ở trạng thái hợp lệ và có lịch sử. | Functional / Integration / Security Test tùy nội dung |
| `AC-REQUEST-02` | Người không có quyền không xem hoặc duyệt yêu cầu ngoài phạm vi. | Functional / Integration / Security Test tùy nội dung |
| `AC-REQUEST-03` | Không thể phê duyệt hai lần cùng một bước. | Functional / Integration / Security Test tùy nội dung |
| `AC-REQUEST-04` | Nghiệp vụ liên kết có khóa chống tạo trùng. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-MEMBER`](./09_UC-MEMBER.md), [`UC-RBAC`](./04_UC-RBAC.md), [`UC-DOCUMENT`](./11_UC-DOCUMENT.md), [`UC-FINANCE`](./12_UC-FINANCE.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

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
usecase "Nhóm REQUEST — cụm 1" as PKG1
rectangle "Quản lý đơn từ và yêu cầu nội bộ — Cụm 1/5" {
  usecase "UC-REQUEST-01
Xem danh mục loại yêu cầu" as U1
  usecase "UC-REQUEST-02
Tạo loại yêu cầu" as U2
  usecase "UC-REQUEST-03
Cập nhật loại yêu cầu" as U3
  usecase "UC-REQUEST-04
Vô hiệu hóa loại yêu cầu" as U4
  usecase "UC-REQUEST-05
Cấu hình biểu mẫu yêu cầu" as U5
  usecase "UC-REQUEST-06
Cấu hình quy trình phê duyệt yêu cầu" as U6
  usecase "UC-REQUEST-07
Tạo bản nháp yêu cầu" as U7
  usecase "UC-REQUEST-08
Cập nhật bản nháp yêu cầu" as U8
  usecase "UC-REQUEST-09
Đính kèm tệp vào yêu cầu" as U9
  usecase "UC-REQUEST-10
Kiểm tra dữ liệu yêu cầu" as U10
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
actor "Người phê duyệt" as A3
usecase "Nhóm REQUEST — cụm 2" as PKG2
rectangle "Quản lý đơn từ và yêu cầu nội bộ — Cụm 2/5" {
  usecase "UC-REQUEST-11
Gửi yêu cầu" as U11
  usecase "UC-REQUEST-12
Xem yêu cầu của cá nhân" as U12
  usecase "UC-REQUEST-13
Xem chi tiết yêu cầu" as U13
  usecase "UC-REQUEST-14
Tìm kiếm và lọc yêu cầu" as U14
  usecase "UC-REQUEST-15
Rút yêu cầu đang chờ xử lý" as U15
  usecase "UC-REQUEST-16
Hủy yêu cầu theo quyền" as U16
  usecase "UC-REQUEST-17
Sao chép yêu cầu" as U17
  usecase "UC-REQUEST-18
Chuyển loại yêu cầu" as U18
  usecase "UC-REQUEST-19
Yêu cầu người gửi bổ sung thông tin" as U19
  usecase "UC-REQUEST-20
Bổ sung và gửi lại yêu cầu" as U20
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
actor "Người phê duyệt" as A3
usecase "Nhóm REQUEST — cụm 3" as PKG3
rectangle "Quản lý đơn từ và yêu cầu nội bộ — Cụm 3/5" {
  usecase "UC-REQUEST-21
Phân công người xử lý" as U21
  usecase "UC-REQUEST-22
Chuyển người xử lý" as U22
  usecase "UC-REQUEST-23
Ủy quyền phê duyệt yêu cầu" as U23
  usecase "UC-REQUEST-24
Thực hiện bước phê duyệt" as U24
  usecase "UC-REQUEST-25
Phê duyệt yêu cầu" as U25
  usecase "UC-REQUEST-26
Từ chối yêu cầu" as U26
  usecase "UC-REQUEST-27
Trả yêu cầu để chỉnh sửa" as U27
  usecase "UC-REQUEST-28
Thực hiện phê duyệt nhiều cấp" as U28
  usecase "UC-REQUEST-29
Kiểm tra nguyên tắc không tự phê duyệt" as U29
  usecase "UC-REQUEST-30
Theo dõi thời hạn xử lý" as U30
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
actor "Người phê duyệt" as A3
usecase "Nhóm REQUEST — cụm 4" as PKG4
rectangle "Quản lý đơn từ và yêu cầu nội bộ — Cụm 4/5" {
  usecase "UC-REQUEST-31
Gửi nhắc việc hoặc cảnh báo quá hạn" as U31
  usecase "UC-REQUEST-32
Thêm bình luận trao đổi" as U32
  usecase "UC-REQUEST-33
Thêm ghi chú nội bộ" as U33
  usecase "UC-REQUEST-34
Xem lịch sử trạng thái yêu cầu" as U34
  usecase "UC-REQUEST-35
Liên kết yêu cầu với hồ sơ nghiệp vụ khác" as U35
  usecase "UC-REQUEST-36
Sinh văn bản từ yêu cầu" as U36
  usecase "UC-REQUEST-37
Tạo giao dịch tài chính từ yêu cầu được duyệt" as U37
  usecase "UC-REQUEST-38
Tạo tác vụ hoặc sự kiện từ yêu cầu được duyệt" as U38
  usecase "UC-REQUEST-39
Mở lại yêu cầu đã đóng theo quyền" as U39
  usecase "UC-REQUEST-40
Đóng yêu cầu" as U40
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

### 14.5. Cụm use case 41–43

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Người phê duyệt" as A3
usecase "Nhóm REQUEST — cụm 5" as PKG5
rectangle "Quản lý đơn từ và yêu cầu nội bộ — Cụm 5/5" {
  usecase "UC-REQUEST-41
Lưu trữ yêu cầu" as U41
  usecase "UC-REQUEST-42
Xuất danh sách hoặc báo cáo yêu cầu" as U42
  usecase "UC-REQUEST-43
Xử lý hàng loạt yêu cầu" as U43
}
A1 --> PKG5
A2 --> PKG5
A3 --> PKG5
PKG5 ..> U41 : <<contains>>
PKG5 ..> U42 : <<contains>>
PKG5 ..> U43 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
