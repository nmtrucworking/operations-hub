# UC-MODULE — Cấu hình module và quy trình nghiệp vụ

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-MODULE` |
| Tên | Cấu hình module và quy trình nghiệp vụ |
| Miền nghiệp vụ | Quản trị tổ chức |
| Mức ưu tiên phát triển | Nền tảng bắt buộc |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Quản lý danh mục module, trạng thái kích hoạt và cấu hình phụ thuộc theo từng tenant.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-ADMIN` | Quản trị viên tenant | Tenant hoặc tích hợp |
| `ACT-TENANT-OWNER` | Chủ sở hữu tenant | Tenant hoặc tích hợp |
| `ACT-PLATFORM-ADMIN` | Quản trị viên nền tảng | Cấp nền tảng |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Nền tảng đã công bố catalog module và metadata phụ thuộc.
- Người thao tác có permission quản trị module ở cấp phù hợp.

## 5. Điều kiện sau

- Trạng thái module được áp dụng riêng theo tenant.
- Dữ liệu module không bị xóa khi module bị tắt.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-MODULE-01` | Xem danh mục mô-đun nền tảng | Cho phép actor có quyền xem danh mục mô-đun nền tảng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-02` | Xem chi tiết mô-đun | Cho phép actor có quyền xem chi tiết mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-03` | Xem điều kiện gói dịch vụ của mô-đun | Cho phép actor có quyền xem điều kiện gói dịch vụ của mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-04` | Xem phụ thuộc giữa các mô-đun | Cho phép actor có quyền xem phụ thuộc giữa các mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-05` | Yêu cầu kích hoạt mô-đun | Thực hiện nghiệp vụ “Yêu cầu kích hoạt mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-06` | Phê duyệt yêu cầu kích hoạt mô-đun | Cho phép chủ thể có thẩm quyền phê duyệt yêu cầu kích hoạt mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-07` | Kích hoạt mô-đun cho tenant | Cho phép kích hoạt mô-đun cho tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-08` | Kích hoạt mô-đun dùng thử | Cho phép kích hoạt mô-đun dùng thử; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-09` | Kết thúc thời gian dùng thử mô-đun | Thực hiện nghiệp vụ “Kết thúc thời gian dùng thử mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-10` | Vô hiệu hóa mô-đun | Cho phép vô hiệu hóa mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-11` | Lên lịch kích hoạt mô-đun | Thực hiện nghiệp vụ “Lên lịch kích hoạt mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-12` | Lên lịch vô hiệu hóa mô-đun | Thực hiện nghiệp vụ “Lên lịch vô hiệu hóa mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-13` | Kích hoạt lại mô-đun | Cho phép kích hoạt lại mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-14` | Kiểm tra điều kiện trước khi kích hoạt | Kiểm tra điều kiện trước khi kích hoạt; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-15` | Kiểm tra phụ thuộc trước khi vô hiệu hóa | Kiểm tra phụ thuộc trước khi vô hiệu hóa; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-16` | Thực hiện bước khởi tạo dữ liệu mô-đun | Thực hiện bước khởi tạo dữ liệu mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-17` | Thực hiện migration cấu hình mô-đun | Thực hiện migration cấu hình mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-18` | Hoàn tác cấu hình khi kích hoạt thất bại | Thực hiện nghiệp vụ “Hoàn tác cấu hình khi kích hoạt thất bại” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-19` | Cấu hình tham số mô-đun theo tenant | Cho phép cấu hình tham số mô-đun theo tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-20` | Cấu hình mô-đun theo đơn vị | Cho phép cấu hình mô-đun theo đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-21` | Giới hạn mô-đun theo role hoặc permission | Thực hiện nghiệp vụ “Giới hạn mô-đun theo role hoặc permission” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-22` | Quản lý feature flag theo tenant | Cho phép quản lý feature flag theo tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-23` | Áp dụng mẫu cấu hình mô-đun | Thực hiện nghiệp vụ “Áp dụng mẫu cấu hình mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-24` | Sao chép cấu hình mô-đun có kiểm soát | Thực hiện nghiệp vụ “Sao chép cấu hình mô-đun có kiểm soát” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-25` | Nhập cấu hình mô-đun | Cho phép nhập cấu hình mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-26` | Xuất cấu hình mô-đun | Cho phép xuất cấu hình mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-27` | Quản lý phiên bản mô-đun | Cho phép quản lý phiên bản mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-28` | Nâng cấp phiên bản mô-đun | Thực hiện nghiệp vụ “Nâng cấp phiên bản mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-29` | Ghim phiên bản mô-đun khi được hỗ trợ | Thực hiện nghiệp vụ “Ghim phiên bản mô-đun khi được hỗ trợ” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-30` | Xem tình trạng hoạt động của mô-đun | Cho phép actor có quyền xem tình trạng hoạt động của mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-31` | Theo dõi mức sử dụng và hạn mức mô-đun | Cho phép theo dõi mức sử dụng và hạn mức mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-32` | Cảnh báo vượt hạn mức mô-đun | Thực hiện nghiệp vụ “Cảnh báo vượt hạn mức mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-33` | Quản lý dữ liệu khi mô-đun bị tắt | Cho phép quản lý dữ liệu khi mô-đun bị tắt; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-34` | Khôi phục truy cập dữ liệu khi bật lại mô-đun | Cho phép khôi phục truy cập dữ liệu khi bật lại mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-MODULE-35` | Ngừng cung cấp mô-đun đã lỗi thời | Thực hiện nghiệp vụ “Ngừng cung cấp mô-đun đã lỗi thời” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MODULE-36` | Xem lịch sử thay đổi cấu hình mô-đun | Cho phép actor có quyền xem lịch sử thay đổi cấu hình mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Tenant Admin chọn module từ catalog.
2. Hệ thống kiểm tra gói dịch vụ, phụ thuộc và điều kiện dữ liệu.
3. Người dùng xác nhận kích hoạt và cấu hình bắt buộc.
4. Hệ thống lưu TenantModule và version cấu hình.
5. Menu và endpoint được mở theo trạng thái module kết hợp với permission.
6. Thay đổi được ghi audit.

## 8. Luồng thay thế và ngoại lệ

- Thiếu module phụ thuộc: yêu cầu bật phụ thuộc trước.
- Tắt module đang là phụ thuộc: từ chối hoặc yêu cầu quy trình vô hiệu hóa theo chuỗi.
- Cấu hình không hợp lệ: giữ nguyên phiên bản đang hiệu lực.

## 9. Quy tắc nghiệp vụ cốt lõi

- Bật hoặc tắt module tại tenant A không ảnh hưởng tenant B.
- Module bị tắt không xuất hiện trên menu và backend phải từ chối endpoint nghiệp vụ tương ứng.
- Vô hiệu hóa module không tự động xóa dữ liệu.
- Không được tắt module nền khi module phụ thuộc còn hoạt động nếu chưa xử lý phụ thuộc.
- Template nền tảng phải phân biệt với cấu hình riêng của tenant.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `ModuleCatalog` | Thực thể logic phục vụ UC-MODULE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `TenantModule` | Thực thể logic phục vụ UC-MODULE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ModuleDependency` | Thực thể logic phục vụ UC-MODULE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ModuleConfiguration` | Thực thể logic phục vụ UC-MODULE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `WorkflowConfiguration` | Thực thể logic phục vụ UC-MODULE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ConfigurationVersion` | Thực thể logic phục vụ UC-MODULE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-MODULE; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-MODULE-01` | Module bị tắt không truy cập được qua UI hoặc API. | Functional / Integration / Security Test tùy nội dung |
| `AC-MODULE-02` | Tắt rồi bật lại module vẫn truy cập dữ liệu cũ theo quyền. | Functional / Integration / Security Test tùy nội dung |
| `AC-MODULE-03` | Phụ thuộc được kiểm tra trước khi thay đổi trạng thái. | Functional / Integration / Security Test tùy nội dung |
| `AC-MODULE-04` | Cấu hình tenant không bị dùng nhầm cho tenant khác. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-TENANT`](./01_UC-TENANT.md), [`UC-RBAC`](./04_UC-RBAC.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Quản trị viên tenant" as A1
actor "Chủ sở hữu tenant" as A2
actor "Quản trị viên nền tảng" as A3
usecase "Nhóm MODULE — cụm 1" as PKG1
rectangle "Cấu hình module và quy trình nghiệp vụ — Cụm 1/4" {
  usecase "UC-MODULE-01
Xem danh mục mô-đun nền tảng" as U1
  usecase "UC-MODULE-02
Xem chi tiết mô-đun" as U2
  usecase "UC-MODULE-03
Xem điều kiện gói dịch vụ của mô-đun" as U3
  usecase "UC-MODULE-04
Xem phụ thuộc giữa các mô-đun" as U4
  usecase "UC-MODULE-05
Yêu cầu kích hoạt mô-đun" as U5
  usecase "UC-MODULE-06
Phê duyệt yêu cầu kích hoạt mô-đun" as U6
  usecase "UC-MODULE-07
Kích hoạt mô-đun cho tenant" as U7
  usecase "UC-MODULE-08
Kích hoạt mô-đun dùng thử" as U8
  usecase "UC-MODULE-09
Kết thúc thời gian dùng thử mô-đun" as U9
  usecase "UC-MODULE-10
Vô hiệu hóa mô-đun" as U10
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
actor "Quản trị viên tenant" as A1
actor "Chủ sở hữu tenant" as A2
actor "Quản trị viên nền tảng" as A3
usecase "Nhóm MODULE — cụm 2" as PKG2
rectangle "Cấu hình module và quy trình nghiệp vụ — Cụm 2/4" {
  usecase "UC-MODULE-11
Lên lịch kích hoạt mô-đun" as U11
  usecase "UC-MODULE-12
Lên lịch vô hiệu hóa mô-đun" as U12
  usecase "UC-MODULE-13
Kích hoạt lại mô-đun" as U13
  usecase "UC-MODULE-14
Kiểm tra điều kiện trước khi kích hoạt" as U14
  usecase "UC-MODULE-15
Kiểm tra phụ thuộc trước khi vô hiệu hóa" as U15
  usecase "UC-MODULE-16
Thực hiện bước khởi tạo dữ liệu mô-đun" as U16
  usecase "UC-MODULE-17
Thực hiện migration cấu hình mô-đun" as U17
  usecase "UC-MODULE-18
Hoàn tác cấu hình khi kích hoạt thất bại" as U18
  usecase "UC-MODULE-19
Cấu hình tham số mô-đun theo tenant" as U19
  usecase "UC-MODULE-20
Cấu hình mô-đun theo đơn vị" as U20
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
actor "Quản trị viên tenant" as A1
actor "Chủ sở hữu tenant" as A2
actor "Quản trị viên nền tảng" as A3
usecase "Nhóm MODULE — cụm 3" as PKG3
rectangle "Cấu hình module và quy trình nghiệp vụ — Cụm 3/4" {
  usecase "UC-MODULE-21
Giới hạn mô-đun theo role hoặc permission" as U21
  usecase "UC-MODULE-22
Quản lý feature flag theo tenant" as U22
  usecase "UC-MODULE-23
Áp dụng mẫu cấu hình mô-đun" as U23
  usecase "UC-MODULE-24
Sao chép cấu hình mô-đun có kiểm soát" as U24
  usecase "UC-MODULE-25
Nhập cấu hình mô-đun" as U25
  usecase "UC-MODULE-26
Xuất cấu hình mô-đun" as U26
  usecase "UC-MODULE-27
Quản lý phiên bản mô-đun" as U27
  usecase "UC-MODULE-28
Nâng cấp phiên bản mô-đun" as U28
  usecase "UC-MODULE-29
Ghim phiên bản mô-đun khi được hỗ trợ" as U29
  usecase "UC-MODULE-30
Xem tình trạng hoạt động của mô-đun" as U30
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
actor "Quản trị viên tenant" as A1
actor "Chủ sở hữu tenant" as A2
actor "Quản trị viên nền tảng" as A3
usecase "Nhóm MODULE — cụm 4" as PKG4
rectangle "Cấu hình module và quy trình nghiệp vụ — Cụm 4/4" {
  usecase "UC-MODULE-31
Theo dõi mức sử dụng và hạn mức mô-đun" as U31
  usecase "UC-MODULE-32
Cảnh báo vượt hạn mức mô-đun" as U32
  usecase "UC-MODULE-33
Quản lý dữ liệu khi mô-đun bị tắt" as U33
  usecase "UC-MODULE-34
Khôi phục truy cập dữ liệu khi bật lại mô-đun" as U34
  usecase "UC-MODULE-35
Ngừng cung cấp mô-đun đã lỗi thời" as U35
  usecase "UC-MODULE-36
Xem lịch sử thay đổi cấu hình mô-đun" as U36
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
