# UC-FINANCE — Quản lý tài chính và ngân sách

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-FINANCE` |
| Tên | Quản lý tài chính và ngân sách |
| Miền nghiệp vụ | Tài chính nội bộ |
| Mức ưu tiên phát triển | Mô-đun vận hành |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Quản lý quỹ, ngân sách, giao dịch thu chi, phê duyệt, chứng từ và báo cáo tài chính nội bộ theo tenant.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-APPROVER` | Người phê duyệt | Tenant hoặc tích hợp |
| `ACT-TENANT-ADMIN` | Quản trị viên tenant | Tenant hoặc tích hợp |
| `ACT-AUDITOR` | Người kiểm tra hoặc giám sát | Tenant hoặc tích hợp |
| `ACT-EXTERNAL-SERVICE` | Dịch vụ bên ngoài | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Module tài chính đã kích hoạt.
- Danh mục quỹ, tài khoản, loại giao dịch và quyền phê duyệt đã cấu hình.

## 5. Điều kiện sau

- Giao dịch có trạng thái, chứng từ và lịch sử phê duyệt rõ ràng.
- Số liệu tổng hợp truy ngược được về giao dịch nguồn.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-FINANCE-01` | Quản lý danh mục thu chi | Cho phép quản lý danh mục thu chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-02` | Quản lý tài khoản hoặc nguồn tiền | Cho phép quản lý tài khoản hoặc nguồn tiền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-03` | Quản lý quỹ | Cho phép quản lý quỹ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-04` | Thiết lập số dư đầu kỳ | Cho phép thiết lập số dư đầu kỳ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-05` | Tạo kế hoạch ngân sách | Cho phép tạo kế hoạch ngân sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-06` | Tạo dòng ngân sách | Cho phép tạo dòng ngân sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-07` | Phân bổ ngân sách theo đơn vị hoặc hoạt động | Thực hiện nghiệp vụ “Phân bổ ngân sách theo đơn vị hoặc hoạt động” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-08` | Điều chỉnh ngân sách | Thực hiện nghiệp vụ “Điều chỉnh ngân sách” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-09` | Phê duyệt ngân sách | Cho phép chủ thể có thẩm quyền phê duyệt ngân sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-10` | Khóa ngân sách theo kỳ | Thực hiện nghiệp vụ “Khóa ngân sách theo kỳ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-11` | Tạo khoản thu | Cho phép tạo khoản thu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-12` | Xác nhận đã thu tiền | Thực hiện nghiệp vụ “Xác nhận đã thu tiền” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-13` | Tạo đề nghị chi | Cho phép tạo đề nghị chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-14` | Tạo yêu cầu tạm ứng | Cho phép tạo yêu cầu tạm ứng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-15` | Duyệt yêu cầu tạm ứng | Thực hiện nghiệp vụ “Duyệt yêu cầu tạm ứng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-16` | Ghi nhận giải ngân tạm ứng | Ghi nhận giải ngân tạm ứng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-17` | Quyết toán tạm ứng | Thực hiện nghiệp vụ “Quyết toán tạm ứng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-18` | Tạo yêu cầu hoàn ứng hoặc hoàn tiền | Cho phép tạo yêu cầu hoàn ứng hoặc hoàn tiền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-19` | Tạo giao dịch chi | Cho phép tạo giao dịch chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-20` | Đính kèm hóa đơn hoặc chứng từ | Thực hiện nghiệp vụ “Đính kèm hóa đơn hoặc chứng từ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-21` | Gửi giao dịch để phê duyệt | Cho phép gửi giao dịch để phê duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-22` | Phân công người duyệt giao dịch | Thực hiện nghiệp vụ “Phân công người duyệt giao dịch” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-23` | Phê duyệt giao dịch tài chính | Cho phép chủ thể có thẩm quyền phê duyệt giao dịch tài chính; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-24` | Từ chối hoặc trả giao dịch để bổ sung | Cho phép chủ thể có thẩm quyền từ chối hoặc trả giao dịch để bổ sung; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-25` | Thực hiện phê duyệt nhiều cấp | Thực hiện phê duyệt nhiều cấp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-26` | Kiểm tra hạn mức phê duyệt | Kiểm tra hạn mức phê duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-27` | Ghi nhận thanh toán hoặc nhận tiền thực tế | Ghi nhận thanh toán hoặc nhận tiền thực tế; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-28` | Chuyển tiền giữa các quỹ hoặc tài khoản | Cho phép chuyển tiền giữa các quỹ hoặc tài khoản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-29` | Tách một giao dịch thành nhiều khoản | Thực hiện nghiệp vụ “Tách một giao dịch thành nhiều khoản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-30` | Gộp các khoản liên quan khi được phép | Thực hiện nghiệp vụ “Gộp các khoản liên quan khi được phép” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-31` | Liên kết giao dịch với yêu cầu, sự kiện hoặc tài sản | Cho phép liên kết giao dịch với yêu cầu, sự kiện hoặc tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-32` | Cập nhật giao dịch đang chờ xử lý | Cho phép cập nhật giao dịch đang chờ xử lý; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-33` | Hủy giao dịch chưa hoàn tất | Cho phép hủy giao dịch chưa hoàn tất; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-34` | Đảo hoặc điều chỉnh giao dịch đã ghi nhận | Thực hiện nghiệp vụ “Đảo hoặc điều chỉnh giao dịch đã ghi nhận” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-35` | Xóa mềm giao dịch | Cho phép xóa hoặc xử lý xóa mềm giao dịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-36` | Khôi phục giao dịch bị xóa mềm | Cho phép khôi phục giao dịch bị xóa mềm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-37` | Nhập sao kê hoặc dữ liệu giao dịch | Cho phép nhập sao kê hoặc dữ liệu giao dịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-38` | Đối soát giao dịch | Thực hiện nghiệp vụ “Đối soát giao dịch” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-39` | Ghép giao dịch với sao kê | Thực hiện nghiệp vụ “Ghép giao dịch với sao kê” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-40` | Xử lý chênh lệch đối soát | Thực hiện nghiệp vụ “Xử lý chênh lệch đối soát” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-41` | Quản lý khoản phải thu | Cho phép quản lý khoản phải thu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-42` | Quản lý khoản phải trả | Cho phép quản lý khoản phải trả; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-43` | Tạo giao dịch định kỳ | Cho phép tạo giao dịch định kỳ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-44` | Theo dõi thực hiện ngân sách | Cho phép theo dõi thực hiện ngân sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-45` | Cảnh báo vượt ngân sách hoặc ngưỡng chi | Thực hiện nghiệp vụ “Cảnh báo vượt ngân sách hoặc ngưỡng chi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-46` | Đóng kỳ tài chính | Cho phép đóng kỳ tài chính; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-47` | Mở lại kỳ tài chính theo quyền | Cho phép mở lại kỳ tài chính theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-48` | Sinh phiếu thu hoặc phiếu chi | Cho phép sinh phiếu thu hoặc phiếu chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-49` | Xem sổ quỹ và biến động số dư | Cho phép actor có quyền xem sổ quỹ và biến động số dư; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-50` | Xem báo cáo thu chi | Cho phép actor có quyền xem báo cáo thu chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-51` | Xuất báo cáo tài chính nội bộ | Cho phép xuất báo cáo tài chính nội bộ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-52` | Xem lịch sử phê duyệt và audit tài chính | Cho phép actor có quyền xem lịch sử phê duyệt và audit tài chính; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Finance Officer tạo đề nghị chi và chọn ngân sách/quỹ.
2. Hệ thống kiểm tra số tiền, hạn mức và dữ liệu bắt buộc.
3. Giao dịch chuyển sang chờ duyệt theo workflow.
4. Approver xem chứng từ và phê duyệt hoặc từ chối.
5. Sau phê duyệt, Finance Officer ghi nhận thanh toán hoặc hoàn tất giao dịch.
6. Dashboard và báo cáo được cập nhật từ dữ liệu giao dịch không bị xóa mềm.

## 8. Luồng thay thế và ngoại lệ

- Số tiền không hợp lệ hoặc vượt hạn mức: từ chối hoặc yêu cầu phê duyệt cấp cao hơn.
- Người tạo tự duyệt khi chính sách cấm: từ chối.
- Giao dịch đã thay đổi phiên bản trước khi duyệt: báo xung đột.
- Thanh toán ngoài lỗi: không đánh dấu hoàn tất nếu chưa có xác nhận idempotent.

## 9. Quy tắc nghiệp vụ cốt lõi

- Số tiền giao dịch phải lớn hơn 0 và dùng đơn vị tiền tệ hợp lệ.
- Khoản chi có thể phải ở trạng thái chờ duyệt theo chính sách tenant.
- Người duyệt phải thỏa required approval role, hạn mức và scope.
- Giao dịch đã duyệt không được sửa trực tiếp; phải hủy hoặc điều chỉnh có lịch sử.
- Báo cáo không được tính giao dịch xóa mềm hoặc bị hủy trừ khi người dùng yêu cầu rõ.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `Fund` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `FinancialAccount` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Budget` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `BudgetLine` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Transaction` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `TransactionApproval` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `FinancialDocument` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Reconciliation` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Adjustment` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-FINANCE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-FINANCE-01` | Giao dịch amount <= 0 bị từ chối. | Functional / Integration / Security Test tùy nội dung |
| `AC-FINANCE-02` | Người không đúng role/hạn mức không duyệt được. | Functional / Integration / Security Test tùy nội dung |
| `AC-FINANCE-03` | Tổng thu, tổng chi và tồn quỹ khớp dữ liệu nguồn. | Functional / Integration / Security Test tùy nội dung |
| `AC-FINANCE-04` | Xóa mềm giữ lại deleted_at, deleted_by và audit. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-REQUEST`](./10_UC-REQUEST.md), [`UC-DOCUMENT`](./11_UC-DOCUMENT.md), [`UC-RBAC`](./04_UC-RBAC.md), [`UC-DASHBOARD`](./19_UC-DASHBOARD.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

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
actor "Quản trị viên tenant" as A4
actor "Người kiểm tra hoặc giám sát" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm FINANCE — cụm 1" as PKG1
rectangle "Quản lý tài chính và ngân sách — Cụm 1/6" {
  usecase "UC-FINANCE-01
Quản lý danh mục thu chi" as U1
  usecase "UC-FINANCE-02
Quản lý tài khoản hoặc nguồn tiền" as U2
  usecase "UC-FINANCE-03
Quản lý quỹ" as U3
  usecase "UC-FINANCE-04
Thiết lập số dư đầu kỳ" as U4
  usecase "UC-FINANCE-05
Tạo kế hoạch ngân sách" as U5
  usecase "UC-FINANCE-06
Tạo dòng ngân sách" as U6
  usecase "UC-FINANCE-07
Phân bổ ngân sách theo đơn vị hoặc hoạt động" as U7
  usecase "UC-FINANCE-08
Điều chỉnh ngân sách" as U8
  usecase "UC-FINANCE-09
Phê duyệt ngân sách" as U9
  usecase "UC-FINANCE-10
Khóa ngân sách theo kỳ" as U10
}
A1 --> PKG1
A2 --> PKG1
A3 --> PKG1
A4 --> PKG1
A5 --> PKG1
A6 --> PKG1
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
actor "Quản trị viên tenant" as A4
actor "Người kiểm tra hoặc giám sát" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm FINANCE — cụm 2" as PKG2
rectangle "Quản lý tài chính và ngân sách — Cụm 2/6" {
  usecase "UC-FINANCE-11
Tạo khoản thu" as U11
  usecase "UC-FINANCE-12
Xác nhận đã thu tiền" as U12
  usecase "UC-FINANCE-13
Tạo đề nghị chi" as U13
  usecase "UC-FINANCE-14
Tạo yêu cầu tạm ứng" as U14
  usecase "UC-FINANCE-15
Duyệt yêu cầu tạm ứng" as U15
  usecase "UC-FINANCE-16
Ghi nhận giải ngân tạm ứng" as U16
  usecase "UC-FINANCE-17
Quyết toán tạm ứng" as U17
  usecase "UC-FINANCE-18
Tạo yêu cầu hoàn ứng hoặc hoàn tiền" as U18
  usecase "UC-FINANCE-19
Tạo giao dịch chi" as U19
  usecase "UC-FINANCE-20
Đính kèm hóa đơn hoặc chứng từ" as U20
}
A1 --> PKG2
A2 --> PKG2
A3 --> PKG2
A4 --> PKG2
A5 --> PKG2
A6 --> PKG2
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
actor "Quản trị viên tenant" as A4
actor "Người kiểm tra hoặc giám sát" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm FINANCE — cụm 3" as PKG3
rectangle "Quản lý tài chính và ngân sách — Cụm 3/6" {
  usecase "UC-FINANCE-21
Gửi giao dịch để phê duyệt" as U21
  usecase "UC-FINANCE-22
Phân công người duyệt giao dịch" as U22
  usecase "UC-FINANCE-23
Phê duyệt giao dịch tài chính" as U23
  usecase "UC-FINANCE-24
Từ chối hoặc trả giao dịch để bổ sung" as U24
  usecase "UC-FINANCE-25
Thực hiện phê duyệt nhiều cấp" as U25
  usecase "UC-FINANCE-26
Kiểm tra hạn mức phê duyệt" as U26
  usecase "UC-FINANCE-27
Ghi nhận thanh toán hoặc nhận tiền thực tế" as U27
  usecase "UC-FINANCE-28
Chuyển tiền giữa các quỹ hoặc tài khoản" as U28
  usecase "UC-FINANCE-29
Tách một giao dịch thành nhiều khoản" as U29
  usecase "UC-FINANCE-30
Gộp các khoản liên quan khi được phép" as U30
}
A1 --> PKG3
A2 --> PKG3
A3 --> PKG3
A4 --> PKG3
A5 --> PKG3
A6 --> PKG3
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
actor "Quản trị viên tenant" as A4
actor "Người kiểm tra hoặc giám sát" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm FINANCE — cụm 4" as PKG4
rectangle "Quản lý tài chính và ngân sách — Cụm 4/6" {
  usecase "UC-FINANCE-31
Liên kết giao dịch với yêu cầu, sự kiện hoặc tài sản" as U31
  usecase "UC-FINANCE-32
Cập nhật giao dịch đang chờ xử lý" as U32
  usecase "UC-FINANCE-33
Hủy giao dịch chưa hoàn tất" as U33
  usecase "UC-FINANCE-34
Đảo hoặc điều chỉnh giao dịch đã ghi nhận" as U34
  usecase "UC-FINANCE-35
Xóa mềm giao dịch" as U35
  usecase "UC-FINANCE-36
Khôi phục giao dịch bị xóa mềm" as U36
  usecase "UC-FINANCE-37
Nhập sao kê hoặc dữ liệu giao dịch" as U37
  usecase "UC-FINANCE-38
Đối soát giao dịch" as U38
  usecase "UC-FINANCE-39
Ghép giao dịch với sao kê" as U39
  usecase "UC-FINANCE-40
Xử lý chênh lệch đối soát" as U40
}
A1 --> PKG4
A2 --> PKG4
A3 --> PKG4
A4 --> PKG4
A5 --> PKG4
A6 --> PKG4
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

### 14.5. Cụm use case 41–50

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Người phê duyệt" as A3
actor "Quản trị viên tenant" as A4
actor "Người kiểm tra hoặc giám sát" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm FINANCE — cụm 5" as PKG5
rectangle "Quản lý tài chính và ngân sách — Cụm 5/6" {
  usecase "UC-FINANCE-41
Quản lý khoản phải thu" as U41
  usecase "UC-FINANCE-42
Quản lý khoản phải trả" as U42
  usecase "UC-FINANCE-43
Tạo giao dịch định kỳ" as U43
  usecase "UC-FINANCE-44
Theo dõi thực hiện ngân sách" as U44
  usecase "UC-FINANCE-45
Cảnh báo vượt ngân sách hoặc ngưỡng chi" as U45
  usecase "UC-FINANCE-46
Đóng kỳ tài chính" as U46
  usecase "UC-FINANCE-47
Mở lại kỳ tài chính theo quyền" as U47
  usecase "UC-FINANCE-48
Sinh phiếu thu hoặc phiếu chi" as U48
  usecase "UC-FINANCE-49
Xem sổ quỹ và biến động số dư" as U49
  usecase "UC-FINANCE-50
Xem báo cáo thu chi" as U50
}
A1 --> PKG5
A2 --> PKG5
A3 --> PKG5
A4 --> PKG5
A5 --> PKG5
A6 --> PKG5
PKG5 ..> U41 : <<contains>>
PKG5 ..> U42 : <<contains>>
PKG5 ..> U43 : <<contains>>
PKG5 ..> U44 : <<contains>>
PKG5 ..> U45 : <<contains>>
PKG5 ..> U46 : <<contains>>
PKG5 ..> U47 : <<contains>>
PKG5 ..> U48 : <<contains>>
PKG5 ..> U49 : <<contains>>
PKG5 ..> U50 : <<contains>>
@enduml
```

### 14.6. Cụm use case 51–52

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Người phê duyệt" as A3
actor "Quản trị viên tenant" as A4
actor "Người kiểm tra hoặc giám sát" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm FINANCE — cụm 6" as PKG6
rectangle "Quản lý tài chính và ngân sách — Cụm 6/6" {
  usecase "UC-FINANCE-51
Xuất báo cáo tài chính nội bộ" as U51
  usecase "UC-FINANCE-52
Xem lịch sử phê duyệt và audit tài chính" as U52
}
A1 --> PKG6
A2 --> PKG6
A3 --> PKG6
A4 --> PKG6
A5 --> PKG6
A6 --> PKG6
PKG6 ..> U51 : <<contains>>
PKG6 ..> U52 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
