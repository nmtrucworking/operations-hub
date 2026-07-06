# UC-AI — Trợ lý AI và AI Gateway

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-AI` |
| Tên | Trợ lý AI và AI Gateway |
| Miền nghiệp vụ | Hỗ trợ thông minh |
| Mức ưu tiên phát triển | Năng lực mở rộng có kiểm soát |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Cung cấp lớp tích hợp AI có kiểm soát để sinh bản nháp, tóm tắt, gợi ý hoặc insight mà không trở thành phụ thuộc bắt buộc của nghiệp vụ lõi.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-PLATFORM-USER` | Người dùng nền tảng | Cấp nền tảng |
| `ACT-TENANT-ADMIN` | Quản trị viên tenant | Tenant hoặc tích hợp |
| `ACT-PLATFORM-ADMIN` | Quản trị viên nền tảng | Cấp nền tảng |
| `ACT-EXTERNAL-SERVICE` | Dịch vụ bên ngoài | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- AI Gateway hoặc provider được cấu hình.
- Người dùng có permission sử dụng năng lực AI và dữ liệu đầu vào hợp lệ.

## 5. Điều kiện sau

- Kết quả AI được trả về cùng metadata cần thiết và không tự động thực thi hành động đặc quyền.
- Lỗi provider không làm hỏng luồng nghiệp vụ lõi.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-AI-01` | Xem danh sách nhà cung cấp AI | Cho phép actor có quyền xem danh sách nhà cung cấp AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-02` | Cấu hình nhà cung cấp AI | Cho phép cấu hình nhà cung cấp AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-03` | Cập nhật thông tin kết nối AI | Cho phép cập nhật thông tin kết nối AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-04` | Kiểm tra kết nối nhà cung cấp AI | Kiểm tra kết nối nhà cung cấp AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-05` | Chọn mô hình AI mặc định | Cho phép lựa chọn mô hình AI mặc định; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-06` | Cấu hình mô hình theo use case | Cho phép cấu hình mô hình theo use case; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-07` | Cấu hình fallback nhà cung cấp | Cho phép cấu hình fallback nhà cung cấp; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-08` | Quản lý khóa hoặc secret AI an toàn | Cho phép quản lý khóa hoặc secret AI an toàn; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-09` | Quản lý prompt template | Cho phép quản lý prompt template; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-10` | Tạo prompt template | Cho phép tạo prompt template; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-11` | Cập nhật và phiên bản hóa prompt | Cho phép cập nhật và phiên bản hóa prompt; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-12` | Kiểm thử prompt trên dữ liệu mẫu | Thực hiện nghiệp vụ “Kiểm thử prompt trên dữ liệu mẫu” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-13` | Sinh bản nháp nội dung | Cho phép sinh bản nháp nội dung; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-14` | Tóm tắt văn bản hoặc cuộc họp | Thực hiện nghiệp vụ “Tóm tắt văn bản hoặc cuộc họp” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-15` | Trích xuất dữ liệu có cấu trúc từ tài liệu | Thực hiện nghiệp vụ “Trích xuất dữ liệu có cấu trúc từ tài liệu” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-16` | Phân loại yêu cầu hoặc văn bản | Thực hiện nghiệp vụ “Phân loại yêu cầu hoặc văn bản” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-17` | Gợi ý hành động tiếp theo | Thực hiện nghiệp vụ “Gợi ý hành động tiếp theo” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-18` | Dịch nội dung | Thực hiện nghiệp vụ “Dịch nội dung” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-19` | Viết lại nội dung theo giọng điệu | Thực hiện nghiệp vụ “Viết lại nội dung theo giọng điệu” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-20` | Tìm kiếm ngữ nghĩa trong dữ liệu được phép | Thực hiện nghiệp vụ “Tìm kiếm ngữ nghĩa trong dữ liệu được phép” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-21` | Hỏi đáp trên kho tri thức tổ chức | Thực hiện nghiệp vụ “Hỏi đáp trên kho tri thức tổ chức” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-22` | Phân tích xu hướng vận hành | Thực hiện nghiệp vụ “Phân tích xu hướng vận hành” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-23` | Sinh insight báo cáo | Cho phép sinh insight báo cáo; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-24` | Phát hiện rủi ro hoặc bất thường | Thực hiện nghiệp vụ “Phát hiện rủi ro hoặc bất thường” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-25` | Gợi ý tiêu chí hoặc mẫu biểu | Thực hiện nghiệp vụ “Gợi ý tiêu chí hoặc mẫu biểu” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-26` | Kiểm duyệt nội dung đầu vào hoặc đầu ra | Thực hiện nghiệp vụ “Kiểm duyệt nội dung đầu vào hoặc đầu ra” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-27` | Yêu cầu người dùng xác nhận trước khi áp dụng kết quả AI | Thực hiện nghiệp vụ “Yêu cầu người dùng xác nhận trước khi áp dụng kết quả AI” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-28` | Chỉnh sửa và chấp nhận kết quả AI | Thực hiện nghiệp vụ “Chỉnh sửa và chấp nhận kết quả AI” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-29` | Từ chối kết quả AI | Cho phép chủ thể có thẩm quyền từ chối kết quả AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-30` | Gửi phản hồi chất lượng kết quả AI | Cho phép gửi phản hồi chất lượng kết quả AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-31` | Ẩn hoặc loại bỏ dữ liệu nhạy cảm trước khi gửi AI | Thực hiện nghiệp vụ “Ẩn hoặc loại bỏ dữ liệu nhạy cảm trước khi gửi AI” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-32` | Kiểm tra chính sách dữ liệu đối với yêu cầu AI | Kiểm tra chính sách dữ liệu đối với yêu cầu AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-33` | Chặn gửi dữ liệu không được phép | Thực hiện nghiệp vụ “Chặn gửi dữ liệu không được phép” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-34` | Cấu hình opt-in hoặc opt-out AI theo tenant | Cho phép cấu hình opt-in hoặc opt-out AI theo tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-35` | Giới hạn AI theo role hoặc mô-đun | Thực hiện nghiệp vụ “Giới hạn AI theo role hoặc mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-36` | Cấu hình hạn mức sử dụng AI | Cho phép cấu hình hạn mức sử dụng AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-37` | Theo dõi chi phí và số lượt sử dụng | Cho phép theo dõi chi phí và số lượt sử dụng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-38` | Xem lịch sử yêu cầu AI | Cho phép actor có quyền xem lịch sử yêu cầu AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-39` | Ghi audit metadata yêu cầu AI | Cho phép ghi audit metadata yêu cầu AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-40` | Xóa dữ liệu AI theo chính sách lưu giữ | Cho phép xóa hoặc xử lý xóa dữ liệu AI theo chính sách lưu giữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-41` | Xử lý lỗi hoặc timeout nhà cung cấp | Thực hiện nghiệp vụ “Xử lý lỗi hoặc timeout nhà cung cấp” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-42` | Chuyển sang nhà cung cấp dự phòng | Cho phép chuyển sang nhà cung cấp dự phòng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-43` | Đánh giá chất lượng mô hình định kỳ | Thực hiện nghiệp vụ “Đánh giá chất lượng mô hình định kỳ” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-44` | So sánh kết quả giữa các mô hình | Thực hiện nghiệp vụ “So sánh kết quả giữa các mô hình” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |

## 7. Luồng nghiệp vụ chính

1. Người dùng chọn chức năng AI trong một module.
2. Hệ thống kiểm tra permission, quota và tenant policy.
3. Hệ thống xây dựng prompt từ template, chỉ lấy dữ liệu trong scope.
4. AI Gateway loại bỏ hoặc che dữ liệu không được phép và gọi provider.
5. Kết quả được chuẩn hóa, gắn metadata và trả về dưới dạng bản nháp.
6. Người dùng chỉnh sửa, chấp nhận hoặc bỏ kết quả; phản hồi được ghi nhận.

## 8. Luồng thay thế và ngoại lệ

- Provider lỗi hoặc timeout: trả lỗi kiểm soát và cho phép tiếp tục quy trình thủ công.
- Quota hết: từ chối có thông báo rõ.
- Dữ liệu đầu vào chứa trường bị cấm: loại bỏ hoặc từ chối.
- Kết quả không phù hợp: người dùng báo cáo, hệ thống lưu metadata để đánh giá.

## 9. Quy tắc nghiệp vụ cốt lõi

- AI là năng lực hỗ trợ; lỗi AI không được chặn quy trình lõi.
- Đầu ra AI phải được xem là bản nháp hoặc gợi ý cho đến khi con người xác nhận.
- AI không được tự gửi thông báo, duyệt giao dịch, đổi quyền hoặc thực thi hành động đặc quyền.
- Dữ liệu tenant chỉ được gửi đến provider theo chính sách, permission và cấu hình bảo vệ dữ liệu.
- Secret và khóa API không được xuất hiện trong prompt, log hoặc response người dùng.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `AIProviderConfiguration` | Thực thể logic phục vụ UC-AI; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AIModel` | Thực thể logic phục vụ UC-AI; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `PromptTemplate` | Thực thể logic phục vụ UC-AI; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AIRequest` | Thực thể logic phục vụ UC-AI; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AIResponse` | Thực thể logic phục vụ UC-AI; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AIUsage` | Thực thể logic phục vụ UC-AI; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AIFeedback` | Thực thể logic phục vụ UC-AI; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `TenantAISetting` | Thực thể logic phục vụ UC-AI; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-AI; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-AI-01` | Tắt AI hoặc provider lỗi không làm hỏng module lõi. | Functional / Integration / Security Test tùy nội dung |
| `AC-AI-02` | Không có hành động đặc quyền tự động từ đầu ra AI. | Functional / Integration / Security Test tùy nội dung |
| `AC-AI-03` | AI request chỉ chứa dữ liệu trong tenant và scope được phép. | Functional / Integration / Security Test tùy nội dung |
| `AC-AI-04` | Mỗi lần gọi có usage, provider/model và correlation ID phù hợp. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-RBAC`](./04_UC-RBAC.md), [`UC-MODULE`](./07_UC-MODULE.md), [`UC-DASHBOARD`](./19_UC-DASHBOARD.md), [`UC-DOCUMENT`](./11_UC-DOCUMENT.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

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
actor "Dịch vụ bên ngoài" as A4
usecase "Nhóm AI — cụm 1" as PKG1
rectangle "Trợ lý AI và AI Gateway — Cụm 1/5" {
  usecase "UC-AI-01
Xem danh sách nhà cung cấp AI" as U1
  usecase "UC-AI-02
Cấu hình nhà cung cấp AI" as U2
  usecase "UC-AI-03
Cập nhật thông tin kết nối AI" as U3
  usecase "UC-AI-04
Kiểm tra kết nối nhà cung cấp AI" as U4
  usecase "UC-AI-05
Chọn mô hình AI mặc định" as U5
  usecase "UC-AI-06
Cấu hình mô hình theo use case" as U6
  usecase "UC-AI-07
Cấu hình fallback nhà cung cấp" as U7
  usecase "UC-AI-08
Quản lý khóa hoặc secret AI an toàn" as U8
  usecase "UC-AI-09
Quản lý prompt template" as U9
  usecase "UC-AI-10
Tạo prompt template" as U10
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
actor "Người dùng nền tảng" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên nền tảng" as A3
actor "Dịch vụ bên ngoài" as A4
usecase "Nhóm AI — cụm 2" as PKG2
rectangle "Trợ lý AI và AI Gateway — Cụm 2/5" {
  usecase "UC-AI-11
Cập nhật và phiên bản hóa prompt" as U11
  usecase "UC-AI-12
Kiểm thử prompt trên dữ liệu mẫu" as U12
  usecase "UC-AI-13
Sinh bản nháp nội dung" as U13
  usecase "UC-AI-14
Tóm tắt văn bản hoặc cuộc họp" as U14
  usecase "UC-AI-15
Trích xuất dữ liệu có cấu trúc từ tài liệu" as U15
  usecase "UC-AI-16
Phân loại yêu cầu hoặc văn bản" as U16
  usecase "UC-AI-17
Gợi ý hành động tiếp theo" as U17
  usecase "UC-AI-18
Dịch nội dung" as U18
  usecase "UC-AI-19
Viết lại nội dung theo giọng điệu" as U19
  usecase "UC-AI-20
Tìm kiếm ngữ nghĩa trong dữ liệu được phép" as U20
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
actor "Người dùng nền tảng" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên nền tảng" as A3
actor "Dịch vụ bên ngoài" as A4
usecase "Nhóm AI — cụm 3" as PKG3
rectangle "Trợ lý AI và AI Gateway — Cụm 3/5" {
  usecase "UC-AI-21
Hỏi đáp trên kho tri thức tổ chức" as U21
  usecase "UC-AI-22
Phân tích xu hướng vận hành" as U22
  usecase "UC-AI-23
Sinh insight báo cáo" as U23
  usecase "UC-AI-24
Phát hiện rủi ro hoặc bất thường" as U24
  usecase "UC-AI-25
Gợi ý tiêu chí hoặc mẫu biểu" as U25
  usecase "UC-AI-26
Kiểm duyệt nội dung đầu vào hoặc đầu ra" as U26
  usecase "UC-AI-27
Yêu cầu người dùng xác nhận trước khi áp dụng kết quả AI" as U27
  usecase "UC-AI-28
Chỉnh sửa và chấp nhận kết quả AI" as U28
  usecase "UC-AI-29
Từ chối kết quả AI" as U29
  usecase "UC-AI-30
Gửi phản hồi chất lượng kết quả AI" as U30
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

### 14.4. Cụm use case 31–40

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Người dùng nền tảng" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên nền tảng" as A3
actor "Dịch vụ bên ngoài" as A4
usecase "Nhóm AI — cụm 4" as PKG4
rectangle "Trợ lý AI và AI Gateway — Cụm 4/5" {
  usecase "UC-AI-31
Ẩn hoặc loại bỏ dữ liệu nhạy cảm trước khi gửi AI" as U31
  usecase "UC-AI-32
Kiểm tra chính sách dữ liệu đối với yêu cầu AI" as U32
  usecase "UC-AI-33
Chặn gửi dữ liệu không được phép" as U33
  usecase "UC-AI-34
Cấu hình opt-in hoặc opt-out AI theo tenant" as U34
  usecase "UC-AI-35
Giới hạn AI theo role hoặc mô-đun" as U35
  usecase "UC-AI-36
Cấu hình hạn mức sử dụng AI" as U36
  usecase "UC-AI-37
Theo dõi chi phí và số lượt sử dụng" as U37
  usecase "UC-AI-38
Xem lịch sử yêu cầu AI" as U38
  usecase "UC-AI-39
Ghi audit metadata yêu cầu AI" as U39
  usecase "UC-AI-40
Xóa dữ liệu AI theo chính sách lưu giữ" as U40
}
A1 --> PKG4
A2 --> PKG4
A3 --> PKG4
A4 --> PKG4
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

### 14.5. Cụm use case 41–44

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Người dùng nền tảng" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên nền tảng" as A3
actor "Dịch vụ bên ngoài" as A4
usecase "Nhóm AI — cụm 5" as PKG5
rectangle "Trợ lý AI và AI Gateway — Cụm 5/5" {
  usecase "UC-AI-41
Xử lý lỗi hoặc timeout nhà cung cấp" as U41
  usecase "UC-AI-42
Chuyển sang nhà cung cấp dự phòng" as U42
  usecase "UC-AI-43
Đánh giá chất lượng mô hình định kỳ" as U43
  usecase "UC-AI-44
So sánh kết quả giữa các mô hình" as U44
}
A1 --> PKG5
A2 --> PKG5
A3 --> PKG5
A4 --> PKG5
PKG5 ..> U41 : <<contains>>
PKG5 ..> U42 : <<contains>>
PKG5 ..> U43 : <<contains>>
PKG5 ..> U44 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
