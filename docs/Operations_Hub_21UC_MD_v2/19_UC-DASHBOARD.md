# UC-DASHBOARD — Dashboard, báo cáo và xuất dữ liệu

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-DASHBOARD` |
| Tên | Dashboard, báo cáo và xuất dữ liệu |
| Miền nghiệp vụ | Báo cáo và phân tích |
| Mức ưu tiên phát triển | Năng lực dùng chung |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Cung cấp chỉ số, báo cáo và bản xuất theo quyền, tenant, đơn vị, thời gian và nguồn dữ liệu có thể truy vết.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-OWNER` | Chủ sở hữu tenant | Tenant hoặc tích hợp |
| `ACT-TENANT-ADMIN` | Quản trị viên tenant | Tenant hoặc tích hợp |
| `ACT-UNIT-ADMIN` | Quản trị viên đơn vị trực thuộc | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-PLATFORM-ADMIN` | Quản trị viên nền tảng | Cấp nền tảng |
| `ACT-AUDITOR` | Người kiểm tra hoặc giám sát | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Nguồn dữ liệu liên quan tồn tại và người dùng có permission xem báo cáo.

## 5. Điều kiện sau

- Chỉ số hiển thị đúng phạm vi và có thể truy ngược dữ liệu nguồn.
- Bản xuất được kiểm soát và ghi lịch sử khi chứa dữ liệu nhạy cảm.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-DASHBOARD-01` | Xem dashboard cá nhân | Cho phép actor có quyền xem dashboard cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-02` | Xem dashboard tenant | Cho phép actor có quyền xem dashboard tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-03` | Xem dashboard đơn vị | Cho phép actor có quyền xem dashboard đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-04` | Xem dashboard quản trị nền tảng | Cho phép actor có quyền xem dashboard quản trị nền tảng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-05` | Chọn khoảng thời gian báo cáo | Cho phép lựa chọn khoảng thời gian báo cáo; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-06` | Lọc dashboard theo đơn vị | Thực hiện nghiệp vụ “Lọc dashboard theo đơn vị” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-07` | Lọc dashboard theo mô-đun | Thực hiện nghiệp vụ “Lọc dashboard theo mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-08` | Lọc dashboard theo trạng thái nghiệp vụ | Thực hiện nghiệp vụ “Lọc dashboard theo trạng thái nghiệp vụ” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-09` | Xem chỉ số tổng hợp | Cho phép actor có quyền xem chỉ số tổng hợp; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-10` | Xem biểu đồ xu hướng | Cho phép actor có quyền xem biểu đồ xu hướng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-11` | Xem danh sách cảnh báo và công việc cần xử lý | Cho phép actor có quyền xem danh sách cảnh báo và công việc cần xử lý; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-12` | Đi sâu từ chỉ số đến dữ liệu chi tiết | Thực hiện nghiệp vụ “Đi sâu từ chỉ số đến dữ liệu chi tiết” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-13` | So sánh hai kỳ báo cáo | Thực hiện nghiệp vụ “So sánh hai kỳ báo cáo” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-14` | So sánh các đơn vị trong cùng tenant | Thực hiện nghiệp vụ “So sánh các đơn vị trong cùng tenant” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-15` | Xem độ mới và nguồn của dữ liệu | Cho phép actor có quyền xem độ mới và nguồn của dữ liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-16` | Làm mới dữ liệu dashboard | Thực hiện nghiệp vụ “Làm mới dữ liệu dashboard” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-17` | Thêm widget vào dashboard | Thực hiện nghiệp vụ “Thêm widget vào dashboard” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-18` | Xóa widget khỏi dashboard | Cho phép xóa hoặc xử lý xóa widget khỏi dashboard; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-19` | Sắp xếp lại widget | Thực hiện nghiệp vụ “Sắp xếp lại widget” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-20` | Thay đổi kích thước widget | Thực hiện nghiệp vụ “Thay đổi kích thước widget” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-21` | Cấu hình tham số widget | Cho phép cấu hình tham số widget; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-22` | Lưu chế độ xem dashboard | Cho phép lưu chế độ xem dashboard; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-23` | Chia sẻ chế độ xem trong phạm vi được phép | Thực hiện nghiệp vụ “Chia sẻ chế độ xem trong phạm vi được phép” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-24` | Sao chép dashboard từ mẫu | Thực hiện nghiệp vụ “Sao chép dashboard từ mẫu” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-25` | Tạo dashboard tùy chỉnh | Cho phép tạo dashboard tùy chỉnh; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-26` | Quản lý danh mục metric | Cho phép quản lý danh mục metric; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-27` | Cấu hình mục tiêu KPI | Cho phép cấu hình mục tiêu KPI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-28` | Cấu hình ngưỡng cảnh báo | Cho phép cấu hình ngưỡng cảnh báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-29` | Nhận cảnh báo khi vượt ngưỡng | Thực hiện nghiệp vụ “Nhận cảnh báo khi vượt ngưỡng” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-30` | Xuất dữ liệu widget | Cho phép xuất dữ liệu widget; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-31` | Xuất dashboard sang PDF hoặc hình ảnh | Cho phép xuất dashboard sang PDF hoặc hình ảnh; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-32` | Xuất báo cáo CSV hoặc bảng tính | Cho phép xuất báo cáo CSV hoặc bảng tính; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-33` | Lên lịch gửi báo cáo định kỳ | Thực hiện nghiệp vụ “Lên lịch gửi báo cáo định kỳ” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DASHBOARD-34` | Tạo báo cáo liên mô-đun | Cho phép tạo báo cáo liên mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-35` | Xem phân tích bất thường | Cho phép actor có quyền xem phân tích bất thường; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-36` | Xem AI insight khi được bật | Cho phép actor có quyền xem AI insight khi được bật; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-37` | Ghi nhận phản hồi về insight | Ghi nhận phản hồi về insight; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-38` | Xem lỗi hoặc dữ liệu thiếu của dashboard | Cho phép actor có quyền xem lỗi hoặc dữ liệu thiếu của dashboard; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-39` | Kiểm tra quyền dữ liệu trên dashboard | Kiểm tra quyền dữ liệu trên dashboard; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-DASHBOARD-40` | Lưu lịch sử phiên bản dashboard | Cho phép lưu lịch sử phiên bản dashboard; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Người dùng mở dashboard trong tenant context.
2. Hệ thống xác định role, scope, module đang bật và bộ chỉ số được phép.
3. Hệ thống truy vấn dữ liệu đã lọc theo tenant và thời gian.
4. Người dùng chọn metric để drill-down.
5. Hệ thống kiểm tra lại permission ở cấp bản ghi.
6. Người dùng xuất báo cáo; hệ thống tạo file, lưu metadata và ghi audit nếu cần.

## 8. Luồng thay thế và ngoại lệ

- Nguồn dữ liệu chậm hoặc lỗi: hiển thị thời điểm cập nhật cuối và trạng thái không đầy đủ.
- Người dùng cố drill-down ngoài scope: từ chối.
- Bản xuất quá lớn: chuyển sang xử lý nền và thông báo khi hoàn tất.
- Widget tham chiếu module bị tắt: ẩn hoặc hiển thị trạng thái không khả dụng.

## 9. Quy tắc nghiệp vụ cốt lõi

- Mọi truy vấn báo cáo phải tự động giới hạn theo tenant và scope.
- Platform Admin chỉ xem dữ liệu tenant ở mức được phép; không mặc nhiên drill-down vào dữ liệu nội bộ.
- Bản xuất phải áp dụng cùng permission và masking như giao diện.
- Metric phải có định nghĩa, nguồn và thời điểm cập nhật rõ ràng.
- Dữ liệu đã xóa mềm hoặc bị hủy phải được xử lý nhất quán theo định nghĩa chỉ số.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `DashboardDefinition` | Thực thể logic phục vụ UC-DASHBOARD; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `WidgetDefinition` | Thực thể logic phục vụ UC-DASHBOARD; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `MetricDefinition` | Thực thể logic phục vụ UC-DASHBOARD; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ReportDefinition` | Thực thể logic phục vụ UC-DASHBOARD; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ReportRun` | Thực thể logic phục vụ UC-DASHBOARD; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ExportFile` | Thực thể logic phục vụ UC-DASHBOARD; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `DataSnapshot` | Thực thể logic phục vụ UC-DASHBOARD; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-DASHBOARD; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-DASHBOARD-01` | Không có bản ghi tenant khác trong dashboard hoặc bản xuất. | Functional / Integration / Security Test tùy nội dung |
| `AC-DASHBOARD-02` | Drill-down áp dụng lại permission, không chỉ dựa vào tổng hợp ban đầu. | Functional / Integration / Security Test tùy nội dung |
| `AC-DASHBOARD-03` | Mỗi metric hiển thị thời điểm cập nhật hoặc nguồn. | Functional / Integration / Security Test tùy nội dung |
| `AC-DASHBOARD-04` | Xuất dữ liệu nhạy cảm có audit và thời hạn tải phù hợp. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-RBAC`](./04_UC-RBAC.md), [`UC-MODULE`](./07_UC-MODULE.md), [`UC-AUDIT`](./21_UC-AUDIT.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Chủ sở hữu tenant" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
actor "Vai trò chuyên trách theo mô-đun" as A4
actor "Quản trị viên nền tảng" as A5
actor "Người kiểm tra hoặc giám sát" as A6
usecase "Nhóm DASHBOARD — cụm 1" as PKG1
rectangle "Dashboard, báo cáo và xuất dữ liệu — Cụm 1/4" {
  usecase "UC-DASHBOARD-01
Xem dashboard cá nhân" as U1
  usecase "UC-DASHBOARD-02
Xem dashboard tenant" as U2
  usecase "UC-DASHBOARD-03
Xem dashboard đơn vị" as U3
  usecase "UC-DASHBOARD-04
Xem dashboard quản trị nền tảng" as U4
  usecase "UC-DASHBOARD-05
Chọn khoảng thời gian báo cáo" as U5
  usecase "UC-DASHBOARD-06
Lọc dashboard theo đơn vị" as U6
  usecase "UC-DASHBOARD-07
Lọc dashboard theo mô-đun" as U7
  usecase "UC-DASHBOARD-08
Lọc dashboard theo trạng thái nghiệp vụ" as U8
  usecase "UC-DASHBOARD-09
Xem chỉ số tổng hợp" as U9
  usecase "UC-DASHBOARD-10
Xem biểu đồ xu hướng" as U10
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
actor "Chủ sở hữu tenant" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
actor "Vai trò chuyên trách theo mô-đun" as A4
actor "Quản trị viên nền tảng" as A5
actor "Người kiểm tra hoặc giám sát" as A6
usecase "Nhóm DASHBOARD — cụm 2" as PKG2
rectangle "Dashboard, báo cáo và xuất dữ liệu — Cụm 2/4" {
  usecase "UC-DASHBOARD-11
Xem danh sách cảnh báo và công việc cần xử lý" as U11
  usecase "UC-DASHBOARD-12
Đi sâu từ chỉ số đến dữ liệu chi tiết" as U12
  usecase "UC-DASHBOARD-13
So sánh hai kỳ báo cáo" as U13
  usecase "UC-DASHBOARD-14
So sánh các đơn vị trong cùng tenant" as U14
  usecase "UC-DASHBOARD-15
Xem độ mới và nguồn của dữ liệu" as U15
  usecase "UC-DASHBOARD-16
Làm mới dữ liệu dashboard" as U16
  usecase "UC-DASHBOARD-17
Thêm widget vào dashboard" as U17
  usecase "UC-DASHBOARD-18
Xóa widget khỏi dashboard" as U18
  usecase "UC-DASHBOARD-19
Sắp xếp lại widget" as U19
  usecase "UC-DASHBOARD-20
Thay đổi kích thước widget" as U20
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
actor "Chủ sở hữu tenant" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
actor "Vai trò chuyên trách theo mô-đun" as A4
actor "Quản trị viên nền tảng" as A5
actor "Người kiểm tra hoặc giám sát" as A6
usecase "Nhóm DASHBOARD — cụm 3" as PKG3
rectangle "Dashboard, báo cáo và xuất dữ liệu — Cụm 3/4" {
  usecase "UC-DASHBOARD-21
Cấu hình tham số widget" as U21
  usecase "UC-DASHBOARD-22
Lưu chế độ xem dashboard" as U22
  usecase "UC-DASHBOARD-23
Chia sẻ chế độ xem trong phạm vi được phép" as U23
  usecase "UC-DASHBOARD-24
Sao chép dashboard từ mẫu" as U24
  usecase "UC-DASHBOARD-25
Tạo dashboard tùy chỉnh" as U25
  usecase "UC-DASHBOARD-26
Quản lý danh mục metric" as U26
  usecase "UC-DASHBOARD-27
Cấu hình mục tiêu KPI" as U27
  usecase "UC-DASHBOARD-28
Cấu hình ngưỡng cảnh báo" as U28
  usecase "UC-DASHBOARD-29
Nhận cảnh báo khi vượt ngưỡng" as U29
  usecase "UC-DASHBOARD-30
Xuất dữ liệu widget" as U30
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
actor "Chủ sở hữu tenant" as A1
actor "Quản trị viên tenant" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
actor "Vai trò chuyên trách theo mô-đun" as A4
actor "Quản trị viên nền tảng" as A5
actor "Người kiểm tra hoặc giám sát" as A6
usecase "Nhóm DASHBOARD — cụm 4" as PKG4
rectangle "Dashboard, báo cáo và xuất dữ liệu — Cụm 4/4" {
  usecase "UC-DASHBOARD-31
Xuất dashboard sang PDF hoặc hình ảnh" as U31
  usecase "UC-DASHBOARD-32
Xuất báo cáo CSV hoặc bảng tính" as U32
  usecase "UC-DASHBOARD-33
Lên lịch gửi báo cáo định kỳ" as U33
  usecase "UC-DASHBOARD-34
Tạo báo cáo liên mô-đun" as U34
  usecase "UC-DASHBOARD-35
Xem phân tích bất thường" as U35
  usecase "UC-DASHBOARD-36
Xem AI insight khi được bật" as U36
  usecase "UC-DASHBOARD-37
Ghi nhận phản hồi về insight" as U37
  usecase "UC-DASHBOARD-38
Xem lỗi hoặc dữ liệu thiếu của dashboard" as U38
  usecase "UC-DASHBOARD-39
Kiểm tra quyền dữ liệu trên dashboard" as U39
  usecase "UC-DASHBOARD-40
Lưu lịch sử phiên bản dashboard" as U40
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

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
