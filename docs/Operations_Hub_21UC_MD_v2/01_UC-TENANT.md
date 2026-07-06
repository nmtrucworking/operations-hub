# UC-TENANT — Quản trị nền tảng SaaS và tenant

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-TENANT` |
| Tên | Quản trị nền tảng SaaS và tenant |
| Miền nghiệp vụ | Nền tảng SaaS |
| Mức ưu tiên phát triển | Nền tảng bắt buộc |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Cho phép đăng ký, khởi tạo, quản trị vòng đời và bảo đảm ranh giới sở hữu của từng tổ chức sử dụng Operations Hub.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-GUEST` | Khách truy cập | Cấp nền tảng |
| `ACT-PLATFORM-USER` | Người dùng nền tảng | Cấp nền tảng |
| `ACT-ORG-REGISTRANT` | Người đăng ký tổ chức | Cấp nền tảng |
| `ACT-TENANT-OWNER` | Chủ sở hữu tenant | Tenant hoặc tích hợp |
| `ACT-PLATFORM-ADMIN` | Quản trị viên nền tảng | Cấp nền tảng |
| `ACT-EXTERNAL-SERVICE` | Dịch vụ bên ngoài | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Người đăng ký có tài khoản hợp lệ đối với các bước yêu cầu xác thực.
- Nền tảng đã có chính sách tạo tenant, trạng thái tenant và role mặc định.

## 5. Điều kiện sau

- Tenant có định danh duy nhất, trạng thái hợp lệ và cấu hình nền tảng ban đầu.
- Người đăng ký hợp lệ có membership hoạt động và vai trò Owner ban đầu.
- Mọi thay đổi vòng đời tenant được ghi audit.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-TENANT-01` | Bắt đầu đăng ký tổ chức | Khởi tạo đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-02` | Lưu nháp hồ sơ đăng ký tổ chức | Cho phép lưu nháp hồ sơ đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-03` | Kiểm tra điều kiện đăng ký tổ chức | Kiểm tra điều kiện đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-04` | Chuẩn hóa và kiểm tra tên định danh | Thực hiện nghiệp vụ “Chuẩn hóa và kiểm tra tên định danh” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-05` | Chuẩn hóa và kiểm tra slug | Thực hiện nghiệp vụ “Chuẩn hóa và kiểm tra slug” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-06` | Kiểm tra tên miền hoặc subdomain mong muốn | Kiểm tra tên miền hoặc subdomain mong muốn; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-07` | Cung cấp thông tin người đại diện | Thực hiện nghiệp vụ “Cung cấp thông tin người đại diện” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-08` | Tải lên minh chứng đăng ký tổ chức | Cho phép tải lên minh chứng đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-09` | Xác minh email hoặc số điện thoại người đăng ký | Thực hiện nghiệp vụ “Xác minh email hoặc số điện thoại người đăng ký” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-10` | Chấp nhận điều khoản sử dụng nền tảng | Thực hiện nghiệp vụ “Chấp nhận điều khoản sử dụng nền tảng” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-11` | Gửi hồ sơ đăng ký tổ chức | Cho phép gửi hồ sơ đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-12` | Theo dõi trạng thái hồ sơ đăng ký | Cho phép theo dõi trạng thái hồ sơ đăng ký; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-13` | Yêu cầu bổ sung hoặc chỉnh sửa hồ sơ đăng ký | Thực hiện nghiệp vụ “Yêu cầu bổ sung hoặc chỉnh sửa hồ sơ đăng ký” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-14` | Bổ sung hồ sơ đăng ký theo yêu cầu | Thực hiện nghiệp vụ “Bổ sung hồ sơ đăng ký theo yêu cầu” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-15` | Rút hồ sơ đăng ký tổ chức | Thực hiện nghiệp vụ “Rút hồ sơ đăng ký tổ chức” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-16` | Tiếp nhận và phân công xử lý hồ sơ đăng ký | Thực hiện nghiệp vụ “Tiếp nhận và phân công xử lý hồ sơ đăng ký” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-17` | Thẩm định hồ sơ đăng ký tổ chức | Thực hiện nghiệp vụ “Thẩm định hồ sơ đăng ký tổ chức” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-18` | Phê duyệt hồ sơ đăng ký tổ chức | Cho phép chủ thể có thẩm quyền phê duyệt hồ sơ đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-19` | Từ chối hồ sơ đăng ký tổ chức | Cho phép chủ thể có thẩm quyền từ chối hồ sơ đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-20` | Khởi tạo tenant | Cho phép khởi tạo tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-21` | Khởi tạo cấu hình mặc định cho tenant | Cho phép khởi tạo cấu hình mặc định cho tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-22` | Khởi tạo role và permission mặc định | Cho phép khởi tạo role và permission mặc định; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-23` | Thiết lập Owner ban đầu | Cho phép thiết lập Owner ban đầu; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-24` | Kích hoạt tenant | Cho phép kích hoạt tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-25` | Chọn gói dịch vụ hoặc phạm vi sử dụng | Cho phép lựa chọn gói dịch vụ hoặc phạm vi sử dụng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-26` | Cấu hình thông tin thanh toán và liên hệ dịch vụ | Cho phép cấu hình thông tin thanh toán và liên hệ dịch vụ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-27` | Xem danh sách tenant ở cấp nền tảng | Cho phép actor có quyền xem danh sách tenant ở cấp nền tảng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-28` | Tìm kiếm và lọc tenant | Thực hiện nghiệp vụ “Tìm kiếm và lọc tenant” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-29` | Xem chi tiết tenant | Cho phép actor có quyền xem chi tiết tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-30` | Cập nhật hồ sơ tenant | Cho phép cập nhật hồ sơ tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-31` | Xem lịch sử trạng thái tenant | Cho phép actor có quyền xem lịch sử trạng thái tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-32` | Tạm khóa tenant | Thực hiện nghiệp vụ “Tạm khóa tenant” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-33` | Khôi phục tenant bị tạm khóa | Cho phép khôi phục tenant bị tạm khóa; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-34` | Lưu trữ tenant | Cho phép lưu trữ tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-35` | Khôi phục tenant đã lưu trữ | Cho phép khôi phục tenant đã lưu trữ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-36` | Chuyển quyền sở hữu tenant | Cho phép chuyển quyền sở hữu tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-37` | Bổ nhiệm thêm Owner | Thực hiện nghiệp vụ “Bổ nhiệm thêm Owner” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-38` | Thu hồi quyền Owner không phải Owner cuối cùng | Cho phép thu hồi quyền Owner không phải Owner cuối cùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-39` | Xuất dữ liệu tenant | Cho phép xuất dữ liệu tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-40` | Yêu cầu đóng tenant | Thực hiện nghiệp vụ “Yêu cầu đóng tenant” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-41` | Hủy yêu cầu đóng tenant | Cho phép hủy yêu cầu đóng tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-42` | Đưa tenant vào thời gian chờ xóa | Thực hiện nghiệp vụ “Đưa tenant vào thời gian chờ xóa” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-43` | Khôi phục tenant trong thời gian chờ xóa | Cho phép khôi phục tenant trong thời gian chờ xóa; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-44` | Thực hiện xóa hoặc ẩn danh dữ liệu tenant theo chính sách | Thực hiện xóa hoặc ẩn danh dữ liệu tenant theo chính sách; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-45` | Quản lý thời hạn lưu giữ dữ liệu tenant | Cho phép quản lý thời hạn lưu giữ dữ liệu tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-46` | Cấu hình subdomain tenant | Cho phép cấu hình subdomain tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-47` | Cấu hình tên miền tùy chỉnh | Cho phép cấu hình tên miền tùy chỉnh; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-48` | Xác minh tên miền tùy chỉnh | Thực hiện nghiệp vụ “Xác minh tên miền tùy chỉnh” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-49` | Quản lý trạng thái dịch vụ hoặc hạn mức tenant | Cho phép quản lý trạng thái dịch vụ hoặc hạn mức tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-50` | Ghi nhận hỗ trợ quản trị có kiểm soát đối với tenant | Ghi nhận hỗ trợ quản trị có kiểm soát đối với tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Người đăng ký cung cấp thông tin tổ chức và định danh mong muốn.
2. Hệ thống chuẩn hóa dữ liệu, kiểm tra trùng lặp và điều kiện đăng ký.
3. Hệ thống ghi nhận hồ sơ ở trạng thái chờ xử lý hoặc tự động chấp nhận theo chính sách.
4. Khi được chấp nhận, hệ thống tạo tenant và cấu hình mặc định.
5. Hệ thống tạo membership cho người đăng ký và gán vai trò Owner.
6. Hệ thống phát hành ngữ cảnh tenant, ghi audit và chuyển người dùng sang bước onboarding tổ chức.

## 8. Luồng thay thế và ngoại lệ

- Slug hoặc định danh đã tồn tại: yêu cầu người dùng chọn giá trị khác.
- Khởi tạo role hoặc membership thất bại: hoàn tác tenant mới, không để dữ liệu dở dang.
- Tenant bị tạm khóa: từ chối thao tác thay đổi dữ liệu nhưng vẫn bảo toàn dữ liệu.
- Yêu cầu làm mất Owner cuối cùng: từ chối cho đến khi có Owner thay thế.

## 9. Quy tắc nghiệp vụ cốt lõi

- Slug phải được chuẩn hóa và duy nhất trong toàn nền tảng.
- Tạo tenant, membership và Owner ban đầu là một giao dịch nghiệp vụ thống nhất; thất bại một bước phải hoàn tác toàn bộ.
- Mỗi tenant đang hoạt động phải có ít nhất một Owner đang hoạt động.
- Tạm khóa hoặc lưu trữ tenant không đồng nghĩa với xóa dữ liệu.
- Platform Admin không mặc nhiên có quyền thao tác dữ liệu nghiệp vụ nội bộ của tenant.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `Tenant` | Thực thể logic phục vụ UC-TENANT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `TenantRegistration` | Thực thể logic phục vụ UC-TENANT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Membership` | Thực thể logic phục vụ UC-TENANT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Role` | Thực thể logic phục vụ UC-TENANT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `TenantStatusHistory` | Thực thể logic phục vụ UC-TENANT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `TenantConfiguration` | Thực thể logic phục vụ UC-TENANT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-TENANT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-TENANT-01` | Không thể tạo hai tenant có cùng slug sau chuẩn hóa. | Functional / Integration / Security Test tùy nội dung |
| `AC-TENANT-02` | Tenant mới có Owner, role mặc định và tenant context hợp lệ. | Functional / Integration / Security Test tùy nội dung |
| `AC-TENANT-03` | Thay đổi trạng thái tenant chỉ xảy ra theo chuyển trạng thái cho phép. | Functional / Integration / Security Test tùy nội dung |
| `AC-TENANT-04` | Dữ liệu tenant vẫn còn sau khi tạm khóa và truy cập được sau khi khôi phục hợp lệ. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-AUTH`](./02_UC-AUTH.md), [`UC-USER`](./03_UC-USER.md), [`UC-RBAC`](./04_UC-RBAC.md), [`UC-ORG`](./05_UC-ORG.md), [`UC-MODULE`](./07_UC-MODULE.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Khách truy cập" as A1
actor "Người dùng nền tảng" as A2
actor "Người đăng ký tổ chức" as A3
actor "Chủ sở hữu tenant" as A4
actor "Quản trị viên nền tảng" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm TENANT — cụm 1" as PKG1
rectangle "Quản trị nền tảng SaaS và tenant — Cụm 1/5" {
  usecase "UC-TENANT-01
Bắt đầu đăng ký tổ chức" as U1
  usecase "UC-TENANT-02
Lưu nháp hồ sơ đăng ký tổ chức" as U2
  usecase "UC-TENANT-03
Kiểm tra điều kiện đăng ký tổ chức" as U3
  usecase "UC-TENANT-04
Chuẩn hóa và kiểm tra tên định danh" as U4
  usecase "UC-TENANT-05
Chuẩn hóa và kiểm tra slug" as U5
  usecase "UC-TENANT-06
Kiểm tra tên miền hoặc subdomain mong muốn" as U6
  usecase "UC-TENANT-07
Cung cấp thông tin người đại diện" as U7
  usecase "UC-TENANT-08
Tải lên minh chứng đăng ký tổ chức" as U8
  usecase "UC-TENANT-09
Xác minh email hoặc số điện thoại người đăng ký" as U9
  usecase "UC-TENANT-10
Chấp nhận điều khoản sử dụng nền tảng" as U10
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
actor "Khách truy cập" as A1
actor "Người dùng nền tảng" as A2
actor "Người đăng ký tổ chức" as A3
actor "Chủ sở hữu tenant" as A4
actor "Quản trị viên nền tảng" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm TENANT — cụm 2" as PKG2
rectangle "Quản trị nền tảng SaaS và tenant — Cụm 2/5" {
  usecase "UC-TENANT-11
Gửi hồ sơ đăng ký tổ chức" as U11
  usecase "UC-TENANT-12
Theo dõi trạng thái hồ sơ đăng ký" as U12
  usecase "UC-TENANT-13
Yêu cầu bổ sung hoặc chỉnh sửa hồ sơ đăng ký" as U13
  usecase "UC-TENANT-14
Bổ sung hồ sơ đăng ký theo yêu cầu" as U14
  usecase "UC-TENANT-15
Rút hồ sơ đăng ký tổ chức" as U15
  usecase "UC-TENANT-16
Tiếp nhận và phân công xử lý hồ sơ đăng ký" as U16
  usecase "UC-TENANT-17
Thẩm định hồ sơ đăng ký tổ chức" as U17
  usecase "UC-TENANT-18
Phê duyệt hồ sơ đăng ký tổ chức" as U18
  usecase "UC-TENANT-19
Từ chối hồ sơ đăng ký tổ chức" as U19
  usecase "UC-TENANT-20
Khởi tạo tenant" as U20
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
actor "Khách truy cập" as A1
actor "Người dùng nền tảng" as A2
actor "Người đăng ký tổ chức" as A3
actor "Chủ sở hữu tenant" as A4
actor "Quản trị viên nền tảng" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm TENANT — cụm 3" as PKG3
rectangle "Quản trị nền tảng SaaS và tenant — Cụm 3/5" {
  usecase "UC-TENANT-21
Khởi tạo cấu hình mặc định cho tenant" as U21
  usecase "UC-TENANT-22
Khởi tạo role và permission mặc định" as U22
  usecase "UC-TENANT-23
Thiết lập Owner ban đầu" as U23
  usecase "UC-TENANT-24
Kích hoạt tenant" as U24
  usecase "UC-TENANT-25
Chọn gói dịch vụ hoặc phạm vi sử dụng" as U25
  usecase "UC-TENANT-26
Cấu hình thông tin thanh toán và liên hệ dịch vụ" as U26
  usecase "UC-TENANT-27
Xem danh sách tenant ở cấp nền tảng" as U27
  usecase "UC-TENANT-28
Tìm kiếm và lọc tenant" as U28
  usecase "UC-TENANT-29
Xem chi tiết tenant" as U29
  usecase "UC-TENANT-30
Cập nhật hồ sơ tenant" as U30
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
actor "Khách truy cập" as A1
actor "Người dùng nền tảng" as A2
actor "Người đăng ký tổ chức" as A3
actor "Chủ sở hữu tenant" as A4
actor "Quản trị viên nền tảng" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm TENANT — cụm 4" as PKG4
rectangle "Quản trị nền tảng SaaS và tenant — Cụm 4/5" {
  usecase "UC-TENANT-31
Xem lịch sử trạng thái tenant" as U31
  usecase "UC-TENANT-32
Tạm khóa tenant" as U32
  usecase "UC-TENANT-33
Khôi phục tenant bị tạm khóa" as U33
  usecase "UC-TENANT-34
Lưu trữ tenant" as U34
  usecase "UC-TENANT-35
Khôi phục tenant đã lưu trữ" as U35
  usecase "UC-TENANT-36
Chuyển quyền sở hữu tenant" as U36
  usecase "UC-TENANT-37
Bổ nhiệm thêm Owner" as U37
  usecase "UC-TENANT-38
Thu hồi quyền Owner không phải Owner cuối cùng" as U38
  usecase "UC-TENANT-39
Xuất dữ liệu tenant" as U39
  usecase "UC-TENANT-40
Yêu cầu đóng tenant" as U40
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
actor "Khách truy cập" as A1
actor "Người dùng nền tảng" as A2
actor "Người đăng ký tổ chức" as A3
actor "Chủ sở hữu tenant" as A4
actor "Quản trị viên nền tảng" as A5
actor "Dịch vụ bên ngoài" as A6
usecase "Nhóm TENANT — cụm 5" as PKG5
rectangle "Quản trị nền tảng SaaS và tenant — Cụm 5/5" {
  usecase "UC-TENANT-41
Hủy yêu cầu đóng tenant" as U41
  usecase "UC-TENANT-42
Đưa tenant vào thời gian chờ xóa" as U42
  usecase "UC-TENANT-43
Khôi phục tenant trong thời gian chờ xóa" as U43
  usecase "UC-TENANT-44
Thực hiện xóa hoặc ẩn danh dữ liệu tenant theo chính sách" as U44
  usecase "UC-TENANT-45
Quản lý thời hạn lưu giữ dữ liệu tenant" as U45
  usecase "UC-TENANT-46
Cấu hình subdomain tenant" as U46
  usecase "UC-TENANT-47
Cấu hình tên miền tùy chỉnh" as U47
  usecase "UC-TENANT-48
Xác minh tên miền tùy chỉnh" as U48
  usecase "UC-TENANT-49
Quản lý trạng thái dịch vụ hoặc hạn mức tenant" as U49
  usecase "UC-TENANT-50
Ghi nhận hỗ trợ quản trị có kiểm soát đối với tenant" as U50
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

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
