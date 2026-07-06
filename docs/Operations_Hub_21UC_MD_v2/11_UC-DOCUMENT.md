# UC-DOCUMENT — Quản lý văn bản, biểu mẫu và mẫu tài liệu

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-DOCUMENT` |
| Tên | Quản lý văn bản, biểu mẫu và mẫu tài liệu |
| Miền nghiệp vụ | Quản trị nội dung |
| Mức ưu tiên phát triển | Mô-đun vận hành |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Quản lý vòng đời văn bản và biểu mẫu có phiên bản, số hiệu, quyền truy cập và bằng chứng phê duyệt.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-APPROVER` | Người phê duyệt | Tenant hoặc tích hợp |
| `ACT-AUDITOR` | Người kiểm tra hoặc giám sát | Tenant hoặc tích hợp |
| `ACT-EXTERNAL-SERVICE` | Dịch vụ bên ngoài | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Module văn bản đã kích hoạt.
- Kho lưu trữ tệp và chính sách dung lượng được cấu hình.

## 5. Điều kiện sau

- Văn bản có phiên bản chính thức xác định và lịch sử thay đổi.
- Tệp và metadata được cô lập theo tenant.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-DOCUMENT-01` | Xem danh mục loại văn bản | Cho phép actor có quyền xem danh mục loại văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-02` | Tạo loại văn bản | Cho phép tạo loại văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-03` | Cập nhật loại văn bản | Cho phép cập nhật loại văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-04` | Quản lý mẫu tài liệu | Cho phép quản lý mẫu tài liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-05` | Tạo mẫu tài liệu | Cho phép tạo mẫu tài liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-06` | Cập nhật mẫu tài liệu | Cho phép cập nhật mẫu tài liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-07` | Quản lý biến dữ liệu trong mẫu | Cho phép quản lý biến dữ liệu trong mẫu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-08` | Xem trước mẫu tài liệu | Cho phép actor có quyền xem trước mẫu tài liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-09` | Tạo văn bản nháp | Cho phép tạo văn bản nháp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-10` | Tải lên văn bản | Cho phép tải lên văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-11` | Sinh văn bản từ mẫu | Cho phép sinh văn bản từ mẫu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-12` | Sinh hàng loạt văn bản từ dữ liệu | Cho phép sinh hàng loạt văn bản từ dữ liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-13` | Cập nhật metadata văn bản | Cho phép cập nhật metadata văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-14` | Chỉnh sửa nội dung văn bản | Thực hiện nghiệp vụ “Chỉnh sửa nội dung văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-15` | Quản lý phiên bản văn bản | Cho phép quản lý phiên bản văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-16` | So sánh hai phiên bản | Thực hiện nghiệp vụ “So sánh hai phiên bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-17` | Khôi phục phiên bản trước | Cho phép khôi phục phiên bản trước; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-18` | Gắn chủ sở hữu hoặc đơn vị phụ trách | Thực hiện nghiệp vụ “Gắn chủ sở hữu hoặc đơn vị phụ trách” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-19` | Phân quyền truy cập văn bản | Thực hiện nghiệp vụ “Phân quyền truy cập văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-20` | Chia sẻ văn bản nội bộ | Thực hiện nghiệp vụ “Chia sẻ văn bản nội bộ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-21` | Gửi văn bản để rà soát | Cho phép gửi văn bản để rà soát; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-22` | Bình luận hoặc góp ý văn bản | Thực hiện nghiệp vụ “Bình luận hoặc góp ý văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-23` | Phân công người rà soát | Thực hiện nghiệp vụ “Phân công người rà soát” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-24` | Phê duyệt văn bản | Cho phép chủ thể có thẩm quyền phê duyệt văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-25` | Từ chối hoặc yêu cầu sửa văn bản | Cho phép chủ thể có thẩm quyền từ chối hoặc yêu cầu sửa văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-26` | Đánh số văn bản | Thực hiện nghiệp vụ “Đánh số văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-27` | Ký số hoặc xác nhận ký khi tích hợp | Thực hiện nghiệp vụ “Ký số hoặc xác nhận ký khi tích hợp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-28` | Ban hành văn bản | Thực hiện nghiệp vụ “Ban hành văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-29` | Công bố văn bản | Thực hiện nghiệp vụ “Công bố văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-30` | Phân phối văn bản đến đối tượng nhận | Thực hiện nghiệp vụ “Phân phối văn bản đến đối tượng nhận” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-31` | Xác nhận đã đọc văn bản | Thực hiện nghiệp vụ “Xác nhận đã đọc văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-32` | Liên kết văn bản với yêu cầu hoặc nghiệp vụ khác | Cho phép liên kết văn bản với yêu cầu hoặc nghiệp vụ khác; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-33` | Quản lý tệp đính kèm văn bản | Cho phép quản lý tệp đính kèm văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-34` | Tải xuống hoặc xuất văn bản | Thực hiện nghiệp vụ “Tải xuống hoặc xuất văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-35` | Đóng dấu hoặc watermark bản xuất | Cho phép đóng dấu hoặc watermark bản xuất; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-36` | Tìm kiếm metadata văn bản | Thực hiện nghiệp vụ “Tìm kiếm metadata văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-37` | Tìm kiếm toàn văn khi được hỗ trợ | Thực hiện nghiệp vụ “Tìm kiếm toàn văn khi được hỗ trợ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-38` | Theo dõi hiệu lực và ngày hết hạn văn bản | Cho phép theo dõi hiệu lực và ngày hết hạn văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-39` | Gửi nhắc văn bản sắp hết hiệu lực | Cho phép gửi nhắc văn bản sắp hết hiệu lực; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-40` | Lưu trữ văn bản | Cho phép lưu trữ văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-41` | Khôi phục văn bản lưu trữ | Cho phép khôi phục văn bản lưu trữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-42` | Đặt thời hạn lưu giữ văn bản | Cho phép đặt thời hạn lưu giữ văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-43` | Đặt legal hold hoặc khóa xóa | Cho phép đặt legal hold hoặc khóa xóa; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-44` | Yêu cầu xóa văn bản | Thực hiện nghiệp vụ “Yêu cầu xóa văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-45` | Xóa hoặc ẩn danh văn bản theo chính sách | Cho phép xóa hoặc xử lý xóa hoặc ẩn danh văn bản theo chính sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-46` | Xem lịch sử truy cập và thay đổi văn bản | Cho phép actor có quyền xem lịch sử truy cập và thay đổi văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Document Officer chọn mẫu hoặc tải tệp nguồn.
2. Hệ thống tạo bản nháp và metadata trong tenant.
3. Người dùng chỉnh sửa, tạo phiên bản và gửi duyệt.
4. Approver xem bản cụ thể và ra quyết định.
5. Hệ thống cấp số, khóa phiên bản ban hành và ghi ngày hiệu lực.
6. Văn bản được phân phối theo đối tượng; lịch sử và xác nhận được ghi nhận.

## 8. Luồng thay thế và ngoại lệ

- Số văn bản trùng: tạo lại theo cơ chế khóa hoặc từ chối.
- Tệp không an toàn: cách ly hoặc từ chối.
- Approver duyệt phiên bản cũ: từ chối và yêu cầu tải bản hiện hành.
- Kho lưu trữ lỗi: giữ metadata ở trạng thái chưa hoàn tất, không công bố văn bản rỗng.

## 9. Quy tắc nghiệp vụ cốt lõi

- Mỗi văn bản thuộc đúng một tenant.
- Văn bản chính thức phải chỉ rõ phiên bản đang hiệu lực.
- Số văn bản phải tuân theo phạm vi duy nhất đã cấu hình.
- Thu hồi hoặc lưu trữ không xóa lịch sử và bằng chứng phê duyệt.
- Tệp phải được kiểm tra loại, kích thước, mã độc và quyền truy cập.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `DocumentType` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `DocumentTemplate` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Document` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `DocumentVersion` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `DocumentNumberSequence` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ApprovalDecision` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `DocumentRecipient` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ReadReceipt` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Attachment` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-DOCUMENT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-DOCUMENT-01` | Một văn bản ban hành luôn tham chiếu đúng phiên bản đã duyệt. | Functional / Integration / Security Test tùy nội dung |
| `AC-DOCUMENT-02` | Không tải được tệp của tenant khác bằng cách thay ID. | Functional / Integration / Security Test tùy nội dung |
| `AC-DOCUMENT-03` | Cấp số đồng thời không tạo trùng. | Functional / Integration / Security Test tùy nội dung |
| `AC-DOCUMENT-04` | Thu hồi văn bản không xóa lịch sử phát hành. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-RBAC`](./04_UC-RBAC.md), [`UC-REQUEST`](./10_UC-REQUEST.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

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
actor "Dịch vụ bên ngoài" as A5
usecase "Nhóm DOCUMENT — cụm 1" as PKG1
rectangle "Quản lý văn bản, biểu mẫu và mẫu tài liệu — Cụm 1/5" {
  usecase "UC-DOCUMENT-01
Xem danh mục loại văn bản" as U1
  usecase "UC-DOCUMENT-02
Tạo loại văn bản" as U2
  usecase "UC-DOCUMENT-03
Cập nhật loại văn bản" as U3
  usecase "UC-DOCUMENT-04
Quản lý mẫu tài liệu" as U4
  usecase "UC-DOCUMENT-05
Tạo mẫu tài liệu" as U5
  usecase "UC-DOCUMENT-06
Cập nhật mẫu tài liệu" as U6
  usecase "UC-DOCUMENT-07
Quản lý biến dữ liệu trong mẫu" as U7
  usecase "UC-DOCUMENT-08
Xem trước mẫu tài liệu" as U8
  usecase "UC-DOCUMENT-09
Tạo văn bản nháp" as U9
  usecase "UC-DOCUMENT-10
Tải lên văn bản" as U10
}
A1 --> PKG1
A2 --> PKG1
A3 --> PKG1
A4 --> PKG1
A5 --> PKG1
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
actor "Dịch vụ bên ngoài" as A5
usecase "Nhóm DOCUMENT — cụm 2" as PKG2
rectangle "Quản lý văn bản, biểu mẫu và mẫu tài liệu — Cụm 2/5" {
  usecase "UC-DOCUMENT-11
Sinh văn bản từ mẫu" as U11
  usecase "UC-DOCUMENT-12
Sinh hàng loạt văn bản từ dữ liệu" as U12
  usecase "UC-DOCUMENT-13
Cập nhật metadata văn bản" as U13
  usecase "UC-DOCUMENT-14
Chỉnh sửa nội dung văn bản" as U14
  usecase "UC-DOCUMENT-15
Quản lý phiên bản văn bản" as U15
  usecase "UC-DOCUMENT-16
So sánh hai phiên bản" as U16
  usecase "UC-DOCUMENT-17
Khôi phục phiên bản trước" as U17
  usecase "UC-DOCUMENT-18
Gắn chủ sở hữu hoặc đơn vị phụ trách" as U18
  usecase "UC-DOCUMENT-19
Phân quyền truy cập văn bản" as U19
  usecase "UC-DOCUMENT-20
Chia sẻ văn bản nội bộ" as U20
}
A1 --> PKG2
A2 --> PKG2
A3 --> PKG2
A4 --> PKG2
A5 --> PKG2
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
actor "Dịch vụ bên ngoài" as A5
usecase "Nhóm DOCUMENT — cụm 3" as PKG3
rectangle "Quản lý văn bản, biểu mẫu và mẫu tài liệu — Cụm 3/5" {
  usecase "UC-DOCUMENT-21
Gửi văn bản để rà soát" as U21
  usecase "UC-DOCUMENT-22
Bình luận hoặc góp ý văn bản" as U22
  usecase "UC-DOCUMENT-23
Phân công người rà soát" as U23
  usecase "UC-DOCUMENT-24
Phê duyệt văn bản" as U24
  usecase "UC-DOCUMENT-25
Từ chối hoặc yêu cầu sửa văn bản" as U25
  usecase "UC-DOCUMENT-26
Đánh số văn bản" as U26
  usecase "UC-DOCUMENT-27
Ký số hoặc xác nhận ký khi tích hợp" as U27
  usecase "UC-DOCUMENT-28
Ban hành văn bản" as U28
  usecase "UC-DOCUMENT-29
Công bố văn bản" as U29
  usecase "UC-DOCUMENT-30
Phân phối văn bản đến đối tượng nhận" as U30
}
A1 --> PKG3
A2 --> PKG3
A3 --> PKG3
A4 --> PKG3
A5 --> PKG3
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
actor "Người kiểm tra hoặc giám sát" as A4
actor "Dịch vụ bên ngoài" as A5
usecase "Nhóm DOCUMENT — cụm 4" as PKG4
rectangle "Quản lý văn bản, biểu mẫu và mẫu tài liệu — Cụm 4/5" {
  usecase "UC-DOCUMENT-31
Xác nhận đã đọc văn bản" as U31
  usecase "UC-DOCUMENT-32
Liên kết văn bản với yêu cầu hoặc nghiệp vụ khác" as U32
  usecase "UC-DOCUMENT-33
Quản lý tệp đính kèm văn bản" as U33
  usecase "UC-DOCUMENT-34
Tải xuống hoặc xuất văn bản" as U34
  usecase "UC-DOCUMENT-35
Đóng dấu hoặc watermark bản xuất" as U35
  usecase "UC-DOCUMENT-36
Tìm kiếm metadata văn bản" as U36
  usecase "UC-DOCUMENT-37
Tìm kiếm toàn văn khi được hỗ trợ" as U37
  usecase "UC-DOCUMENT-38
Theo dõi hiệu lực và ngày hết hạn văn bản" as U38
  usecase "UC-DOCUMENT-39
Gửi nhắc văn bản sắp hết hiệu lực" as U39
  usecase "UC-DOCUMENT-40
Lưu trữ văn bản" as U40
}
A1 --> PKG4
A2 --> PKG4
A3 --> PKG4
A4 --> PKG4
A5 --> PKG4
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

### 14.5. Cụm use case 41–46

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Người phê duyệt" as A3
actor "Người kiểm tra hoặc giám sát" as A4
actor "Dịch vụ bên ngoài" as A5
usecase "Nhóm DOCUMENT — cụm 5" as PKG5
rectangle "Quản lý văn bản, biểu mẫu và mẫu tài liệu — Cụm 5/5" {
  usecase "UC-DOCUMENT-41
Khôi phục văn bản lưu trữ" as U41
  usecase "UC-DOCUMENT-42
Đặt thời hạn lưu giữ văn bản" as U42
  usecase "UC-DOCUMENT-43
Đặt legal hold hoặc khóa xóa" as U43
  usecase "UC-DOCUMENT-44
Yêu cầu xóa văn bản" as U44
  usecase "UC-DOCUMENT-45
Xóa hoặc ẩn danh văn bản theo chính sách" as U45
  usecase "UC-DOCUMENT-46
Xem lịch sử truy cập và thay đổi văn bản" as U46
}
A1 --> PKG5
A2 --> PKG5
A3 --> PKG5
A4 --> PKG5
A5 --> PKG5
PKG5 ..> U41 : <<contains>>
PKG5 ..> U42 : <<contains>>
PKG5 ..> U43 : <<contains>>
PKG5 ..> U44 : <<contains>>
PKG5 ..> U45 : <<contains>>
PKG5 ..> U46 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
