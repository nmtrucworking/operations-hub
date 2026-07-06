# UC-AUDIT — Nhật ký hệ thống và truy vết hoạt động

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-AUDIT` |
| Tên | Nhật ký hệ thống và truy vết hoạt động |
| Miền nghiệp vụ | Quản trị và tuân thủ |
| Mức ưu tiên phát triển | Nền tảng bắt buộc |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Ghi nhận, tìm kiếm và bảo toàn nhật ký của các hành động quản trị, bảo mật và nghiệp vụ quan trọng.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-AUDITOR` | Người kiểm tra hoặc giám sát | Tenant hoặc tích hợp |
| `ACT-TENANT-ADMIN` | Quản trị viên tenant | Tenant hoặc tích hợp |
| `ACT-TENANT-OWNER` | Chủ sở hữu tenant | Tenant hoặc tích hợp |
| `ACT-PLATFORM-ADMIN` | Quản trị viên nền tảng | Cấp nền tảng |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Cơ chế audit được bật cho các sự kiện bắt buộc.
- Người xem log có permission và scope phù hợp.

## 5. Điều kiện sau

- Sự kiện audit có actor, tenant, hành động, đối tượng, thời điểm, kết quả và correlation ID khi cần.
- Người dùng thông thường không thể sửa hoặc xóa log.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-AUDIT-01` | Ghi audit cho sự kiện xác thực | Cho phép ghi audit cho sự kiện xác thực; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-02` | Ghi audit cho thay đổi tenant | Cho phép ghi audit cho thay đổi tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-03` | Ghi audit cho thay đổi membership | Cho phép ghi audit cho thay đổi membership; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-04` | Ghi audit cho thay đổi role và permission | Cho phép ghi audit cho thay đổi role và permission; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-05` | Ghi audit cho thay đổi module và branding | Cho phép ghi audit cho thay đổi module và branding; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-06` | Ghi audit cho nghiệp vụ phê duyệt | Cho phép ghi audit cho nghiệp vụ phê duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-07` | Ghi audit cho giao dịch tài chính | Cho phép ghi audit cho giao dịch tài chính; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-08` | Ghi audit cho truy cập dữ liệu nhạy cảm | Cho phép ghi audit cho truy cập dữ liệu nhạy cảm; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-09` | Ghi security event | Cho phép ghi security event; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-10` | Ghi platform administration event | Cho phép ghi platform administration event; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-11` | Chuẩn hóa schema audit event | Thực hiện nghiệp vụ “Chuẩn hóa schema audit event” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-12` | Gắn correlation ID cho chuỗi hành động | Thực hiện nghiệp vụ “Gắn correlation ID cho chuỗi hành động” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-13` | Ghi dữ liệu trước và sau thay đổi khi được phép | Cho phép ghi dữ liệu trước và sau thay đổi khi được phép; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-14` | Ẩn dữ liệu nhạy cảm trong audit | Thực hiện nghiệp vụ “Ẩn dữ liệu nhạy cảm trong audit” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-15` | Xem danh sách audit event | Cho phép actor có quyền xem danh sách audit event; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-16` | Tìm kiếm và lọc audit event | Thực hiện nghiệp vụ “Tìm kiếm và lọc audit event” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-17` | Xem chi tiết audit event | Cho phép actor có quyền xem chi tiết audit event; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-18` | Xem lịch sử thay đổi của một thực thể | Cho phép actor có quyền xem lịch sử thay đổi của một thực thể; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-19` | Xem hoạt động của một người dùng | Cho phép actor có quyền xem hoạt động của một người dùng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-20` | Xem hoạt động trong một tenant | Cho phép actor có quyền xem hoạt động trong một tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-21` | Xem log cấp nền tảng theo quyền | Cho phép actor có quyền xem log cấp nền tảng theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-22` | Truy vết một quy trình bằng correlation ID | Thực hiện nghiệp vụ “Truy vết một quy trình bằng correlation ID” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-23` | Xuất audit log | Cho phép xuất audit log; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-24` | Lên lịch báo cáo audit | Thực hiện nghiệp vụ “Lên lịch báo cáo audit” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-25` | Tạo cảnh báo từ quy tắc audit | Cho phép tạo cảnh báo từ quy tắc audit; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-26` | Cấu hình quy tắc phát hiện hành vi bất thường | Cho phép cấu hình quy tắc phát hiện hành vi bất thường; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-27` | Gửi audit event đến SIEM hoặc hệ thống ngoài | Cho phép gửi audit event đến SIEM hoặc hệ thống ngoài; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-28` | Điều tra sự cố từ audit trail | Thực hiện nghiệp vụ “Điều tra sự cố từ audit trail” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-29` | Gắn nhãn hoặc ghi chú điều tra | Thực hiện nghiệp vụ “Gắn nhãn hoặc ghi chú điều tra” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-30` | Quản lý chain of custody cho bằng chứng | Cho phép quản lý chain of custody cho bằng chứng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-31` | Kiểm chứng tính toàn vẹn log | Thực hiện nghiệp vụ “Kiểm chứng tính toàn vẹn log” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-32` | Cảnh báo khi phát hiện sửa đổi trái phép | Thực hiện nghiệp vụ “Cảnh báo khi phát hiện sửa đổi trái phép” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-33` | Đặt thời hạn lưu giữ audit | Cho phép đặt thời hạn lưu giữ audit; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-34` | Lưu trữ audit log lâu dài | Cho phép lưu trữ audit log lâu dài; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-35` | Áp dụng legal hold cho audit | Thực hiện nghiệp vụ “Áp dụng legal hold cho audit” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-36` | Xóa audit log hết hạn theo chính sách | Cho phép xóa hoặc xử lý xóa audit log hết hạn theo chính sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-37` | Giới hạn quyền xem audit | Thực hiện nghiệp vụ “Giới hạn quyền xem audit” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUDIT-38` | Ghi audit cho việc xem hoặc xuất audit nhạy cảm | Cho phép ghi audit cho việc xem hoặc xuất audit nhạy cảm; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-39` | Xem dashboard tuân thủ và audit | Cho phép actor có quyền xem dashboard tuân thủ và audit; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AUDIT-40` | Kiểm tra độ đầy đủ của audit theo loại sự kiện | Kiểm tra độ đầy đủ của audit theo loại sự kiện; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Một nghiệp vụ quan trọng bắt đầu và tạo correlation ID.
2. Hệ thống ghi actor, tenant context, action, target và trạng thái trước/sau ở mức cần thiết.
3. Nghiệp vụ hoàn tất hoặc thất bại; kết quả được cập nhật vào audit event.
4. Auditor tìm kiếm log theo thời gian và đối tượng.
5. Hệ thống áp dụng tenant/scope, masking và trả kết quả.
6. Khi xuất, hệ thống tạo file có thời hạn và ghi lại chính hành động xuất log.

## 8. Luồng thay thế và ngoại lệ

- Audit sink tạm thời lỗi: nghiệp vụ nhạy cảm có thể bị chặn hoặc ghi hàng đợi bền vững theo chính sách.
- Payload chứa secret: phải loại bỏ hoặc masking trước khi lưu.
- Người dùng yêu cầu log ngoài scope: từ chối.
- Retention hết hạn: archive hoặc xóa theo job có audit cấp hệ thống.

## 9. Quy tắc nghiệp vụ cốt lõi

- Audit log phải chứa tối thiểu tenant, actor, action, entity, timestamp và result khi áp dụng.
- Người dùng thông thường không được cập nhật hoặc xóa log.
- Log tenant A không được hiển thị cho tenant B.
- Platform Admin không mặc nhiên xem payload nghiệp vụ nhạy cảm; dữ liệu log phải được masking.
- Xóa hoặc lưu trữ log phải tuân theo retention và thẩm quyền riêng.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `AuditEvent` | Thực thể logic phục vụ UC-AUDIT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `SecurityEvent` | Thực thể logic phục vụ UC-AUDIT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `CorrelationContext` | Thực thể logic phục vụ UC-AUDIT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditExport` | Thực thể logic phục vụ UC-AUDIT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `RetentionPolicy` | Thực thể logic phục vụ UC-AUDIT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditAlert` | Thực thể logic phục vụ UC-AUDIT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditArchive` | Thực thể logic phục vụ UC-AUDIT; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-AUDIT-01` | Thay đổi tenant, membership, role, permission, module và branding đều tạo audit. | Functional / Integration / Security Test tùy nội dung |
| `AC-AUDIT-02` | Không có API sửa/xóa log cho người dùng thông thường. | Functional / Integration / Security Test tùy nội dung |
| `AC-AUDIT-03` | Tìm kiếm log không trả dữ liệu tenant khác. | Functional / Integration / Security Test tùy nội dung |
| `AC-AUDIT-04` | Bản xuất audit có người tạo, thời điểm, bộ lọc và thời hạn truy cập. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-TENANT`](./01_UC-TENANT.md), [`UC-AUTH`](./02_UC-AUTH.md), [`UC-RBAC`](./04_UC-RBAC.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Người kiểm tra hoặc giám sát" as A1
actor "Quản trị viên tenant" as A2
actor "Chủ sở hữu tenant" as A3
actor "Quản trị viên nền tảng" as A4
usecase "Nhóm AUDIT — cụm 1" as PKG1
rectangle "Nhật ký hệ thống và truy vết hoạt động — Cụm 1/4" {
  usecase "UC-AUDIT-01
Ghi audit cho sự kiện xác thực" as U1
  usecase "UC-AUDIT-02
Ghi audit cho thay đổi tenant" as U2
  usecase "UC-AUDIT-03
Ghi audit cho thay đổi membership" as U3
  usecase "UC-AUDIT-04
Ghi audit cho thay đổi role và permission" as U4
  usecase "UC-AUDIT-05
Ghi audit cho thay đổi module và branding" as U5
  usecase "UC-AUDIT-06
Ghi audit cho nghiệp vụ phê duyệt" as U6
  usecase "UC-AUDIT-07
Ghi audit cho giao dịch tài chính" as U7
  usecase "UC-AUDIT-08
Ghi audit cho truy cập dữ liệu nhạy cảm" as U8
  usecase "UC-AUDIT-09
Ghi security event" as U9
  usecase "UC-AUDIT-10
Ghi platform administration event" as U10
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
actor "Người kiểm tra hoặc giám sát" as A1
actor "Quản trị viên tenant" as A2
actor "Chủ sở hữu tenant" as A3
actor "Quản trị viên nền tảng" as A4
usecase "Nhóm AUDIT — cụm 2" as PKG2
rectangle "Nhật ký hệ thống và truy vết hoạt động — Cụm 2/4" {
  usecase "UC-AUDIT-11
Chuẩn hóa schema audit event" as U11
  usecase "UC-AUDIT-12
Gắn correlation ID cho chuỗi hành động" as U12
  usecase "UC-AUDIT-13
Ghi dữ liệu trước và sau thay đổi khi được phép" as U13
  usecase "UC-AUDIT-14
Ẩn dữ liệu nhạy cảm trong audit" as U14
  usecase "UC-AUDIT-15
Xem danh sách audit event" as U15
  usecase "UC-AUDIT-16
Tìm kiếm và lọc audit event" as U16
  usecase "UC-AUDIT-17
Xem chi tiết audit event" as U17
  usecase "UC-AUDIT-18
Xem lịch sử thay đổi của một thực thể" as U18
  usecase "UC-AUDIT-19
Xem hoạt động của một người dùng" as U19
  usecase "UC-AUDIT-20
Xem hoạt động trong một tenant" as U20
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
actor "Người kiểm tra hoặc giám sát" as A1
actor "Quản trị viên tenant" as A2
actor "Chủ sở hữu tenant" as A3
actor "Quản trị viên nền tảng" as A4
usecase "Nhóm AUDIT — cụm 3" as PKG3
rectangle "Nhật ký hệ thống và truy vết hoạt động — Cụm 3/4" {
  usecase "UC-AUDIT-21
Xem log cấp nền tảng theo quyền" as U21
  usecase "UC-AUDIT-22
Truy vết một quy trình bằng correlation ID" as U22
  usecase "UC-AUDIT-23
Xuất audit log" as U23
  usecase "UC-AUDIT-24
Lên lịch báo cáo audit" as U24
  usecase "UC-AUDIT-25
Tạo cảnh báo từ quy tắc audit" as U25
  usecase "UC-AUDIT-26
Cấu hình quy tắc phát hiện hành vi bất thường" as U26
  usecase "UC-AUDIT-27
Gửi audit event đến SIEM hoặc hệ thống ngoài" as U27
  usecase "UC-AUDIT-28
Điều tra sự cố từ audit trail" as U28
  usecase "UC-AUDIT-29
Gắn nhãn hoặc ghi chú điều tra" as U29
  usecase "UC-AUDIT-30
Quản lý chain of custody cho bằng chứng" as U30
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
actor "Người kiểm tra hoặc giám sát" as A1
actor "Quản trị viên tenant" as A2
actor "Chủ sở hữu tenant" as A3
actor "Quản trị viên nền tảng" as A4
usecase "Nhóm AUDIT — cụm 4" as PKG4
rectangle "Nhật ký hệ thống và truy vết hoạt động — Cụm 4/4" {
  usecase "UC-AUDIT-31
Kiểm chứng tính toàn vẹn log" as U31
  usecase "UC-AUDIT-32
Cảnh báo khi phát hiện sửa đổi trái phép" as U32
  usecase "UC-AUDIT-33
Đặt thời hạn lưu giữ audit" as U33
  usecase "UC-AUDIT-34
Lưu trữ audit log lâu dài" as U34
  usecase "UC-AUDIT-35
Áp dụng legal hold cho audit" as U35
  usecase "UC-AUDIT-36
Xóa audit log hết hạn theo chính sách" as U36
  usecase "UC-AUDIT-37
Giới hạn quyền xem audit" as U37
  usecase "UC-AUDIT-38
Ghi audit cho việc xem hoặc xuất audit nhạy cảm" as U38
  usecase "UC-AUDIT-39
Xem dashboard tuân thủ và audit" as U39
  usecase "UC-AUDIT-40
Kiểm tra độ đầy đủ của audit theo loại sự kiện" as U40
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

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
