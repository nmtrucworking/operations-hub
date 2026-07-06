# UC-MEMBER — Quản lý thành viên và membership

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-MEMBER` |
| Tên | Quản lý thành viên và membership |
| Miền nghiệp vụ | Nhân sự tổ chức |
| Mức ưu tiên phát triển | Nền tảng bắt buộc |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Quản lý quan hệ giữa User và tenant, hồ sơ thành viên, đơn vị tham gia và vòng đời membership.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-UNIT-ADMIN` | Quản trị viên đơn vị trực thuộc | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-TENANT-ADMIN` | Quản trị viên tenant | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Tenant tồn tại và module thành viên được kích hoạt.
- Người thao tác có permission quản lý membership trong phạm vi tương ứng.

## 5. Điều kiện sau

- Membership hợp lệ, không trùng và thuộc đúng tenant.
- Lịch sử vai trò, đơn vị và trạng thái được bảo toàn.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-MEMBER-01` | Xem danh sách thành viên | Cho phép actor có quyền xem danh sách thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-02` | Tìm kiếm và lọc thành viên | Thực hiện nghiệp vụ “Tìm kiếm và lọc thành viên” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-03` | Xem chi tiết hồ sơ thành viên | Cho phép actor có quyền xem chi tiết hồ sơ thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-04` | Mời người dùng vào tổ chức | Thực hiện nghiệp vụ “Mời người dùng vào tổ chức” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-05` | Gửi lại lời mời thành viên | Cho phép gửi lại lời mời thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-06` | Hủy lời mời thành viên | Cho phép hủy lời mời thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-07` | Chấp nhận lời mời thành viên | Thực hiện nghiệp vụ “Chấp nhận lời mời thành viên” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-08` | Từ chối lời mời thành viên | Cho phép chủ thể có thẩm quyền từ chối lời mời thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-09` | Thêm người dùng hiện có vào tổ chức | Thực hiện nghiệp vụ “Thêm người dùng hiện có vào tổ chức” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-10` | Tạo hồ sơ thành viên tạm chưa liên kết User | Cho phép tạo hồ sơ thành viên tạm chưa liên kết User; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-11` | Liên kết User với hồ sơ thành viên | Cho phép liên kết User với hồ sơ thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-12` | Gỡ liên kết User bị sai | Thực hiện nghiệp vụ “Gỡ liên kết User bị sai” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-13` | Nhập danh sách thành viên hàng loạt | Cho phép nhập danh sách thành viên hàng loạt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-14` | Kiểm tra và xử lý bản ghi trùng lặp | Kiểm tra và xử lý bản ghi trùng lặp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-15` | Cập nhật hồ sơ thành viên | Cho phép cập nhật hồ sơ thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-16` | Thành viên tự cập nhật hồ sơ được phép | Thực hiện nghiệp vụ “Thành viên tự cập nhật hồ sơ được phép” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-17` | Phê duyệt thay đổi hồ sơ thành viên | Cho phép chủ thể có thẩm quyền phê duyệt thay đổi hồ sơ thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-18` | Gán thành viên vào đơn vị | Cho phép gán thành viên vào đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-19` | Chuyển thành viên giữa các đơn vị | Cho phép chuyển thành viên giữa các đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-20` | Gán chức vụ cho thành viên | Cho phép gán chức vụ cho thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-21` | Kết thúc chức vụ của thành viên | Thực hiện nghiệp vụ “Kết thúc chức vụ của thành viên” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-22` | Gán vai trò nghiệp vụ cho membership | Cho phép gán vai trò nghiệp vụ cho membership; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-23` | Gắn nhãn hoặc nhóm thành viên | Thực hiện nghiệp vụ “Gắn nhãn hoặc nhóm thành viên” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-24` | Quản lý kỹ năng thành viên | Cho phép quản lý kỹ năng thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-25` | Quản lý kinh nghiệm và định hướng | Cho phép quản lý kinh nghiệm và định hướng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-26` | Quản lý tài liệu hồ sơ thành viên | Cho phép quản lý tài liệu hồ sơ thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-27` | Kích hoạt membership | Cho phép kích hoạt membership; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-28` | Tạm ngưng membership | Thực hiện nghiệp vụ “Tạm ngưng membership” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-29` | Khôi phục membership bị tạm ngưng | Cho phép khôi phục membership bị tạm ngưng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-30` | Kết thúc membership | Thực hiện nghiệp vụ “Kết thúc membership” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-31` | Tái gia nhập tổ chức | Thực hiện nghiệp vụ “Tái gia nhập tổ chức” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-32` | Chuyển trạng thái thành viên sang cựu thành viên | Cho phép chuyển trạng thái thành viên sang cựu thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-33` | Bổ nhiệm Owner hoặc quản trị viên hợp lệ | Thực hiện nghiệp vụ “Bổ nhiệm Owner hoặc quản trị viên hợp lệ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-34` | Ngăn loại bỏ Owner cuối cùng | Thực hiện nghiệp vụ “Ngăn loại bỏ Owner cuối cùng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-35` | Xem lịch sử membership | Cho phép actor có quyền xem lịch sử membership; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-36` | Xem lịch sử đơn vị và chức vụ | Cho phép actor có quyền xem lịch sử đơn vị và chức vụ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-37` | Xuất danh sách thành viên | Cho phép xuất danh sách thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-38` | Cập nhật thành viên hàng loạt | Cho phép cập nhật thành viên hàng loạt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-39` | Ẩn danh dữ liệu thành viên theo chính sách | Thực hiện nghiệp vụ “Ẩn danh dữ liệu thành viên theo chính sách” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEMBER-40` | Lưu trữ hồ sơ thành viên | Cho phép lưu trữ hồ sơ thành viên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEMBER-41` | Khôi phục hồ sơ thành viên đã lưu trữ | Cho phép khôi phục hồ sơ thành viên đã lưu trữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Tenant Admin mời User vào tổ chức.
2. Hệ thống kiểm tra User, tenant và membership trùng.
3. Hệ thống tạo lời mời hoặc membership Pending.
4. Người được mời xác nhận; hệ thống chuyển membership sang Active.
5. Quản trị viên gán đơn vị, chức danh và role theo quyền.
6. Mọi thay đổi trạng thái và role được ghi lịch sử.

## 8. Luồng thay thế và ngoại lệ

- Membership đã tồn tại: không tạo trùng; đề xuất tái kích hoạt nếu phù hợp.
- Đơn vị thuộc tenant khác: từ chối.
- Thao tác với Owner cuối cùng: từ chối và yêu cầu chuyển quyền.
- Import có dòng lỗi: báo cáo từng dòng, không âm thầm bỏ qua.

## 9. Quy tắc nghiệp vụ cốt lõi

- Mỗi cặp User–Tenant chỉ có một membership hiện hành đại diện cho quan hệ tham gia.
- Chỉ membership Active mới được thực hiện nghiệp vụ trong tenant.
- Membership chỉ gán vào đơn vị thuộc cùng tenant.
- Kết thúc membership không xóa vật lý dữ liệu nghiệp vụ đã phát sinh.
- Không được đình chỉ hoặc kết thúc Owner cuối cùng khi chưa có người thay thế.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `Membership` | Thực thể logic phục vụ UC-MEMBER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `MembershipInvitation` | Thực thể logic phục vụ UC-MEMBER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `MemberProfile` | Thực thể logic phục vụ UC-MEMBER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `MembershipStatusHistory` | Thực thể logic phục vụ UC-MEMBER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `UnitMembership` | Thực thể logic phục vụ UC-MEMBER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `PositionAssignment` | Thực thể logic phục vụ UC-MEMBER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `MembershipRole` | Thực thể logic phục vụ UC-MEMBER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-MEMBER; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-MEMBER-01` | Một User có thể thuộc nhiều tenant nhưng dữ liệu và quyền tách biệt. | Functional / Integration / Security Test tùy nội dung |
| `AC-MEMBER-02` | Không tạo hai membership hoạt động cho cùng User trong cùng tenant. | Functional / Integration / Security Test tùy nội dung |
| `AC-MEMBER-03` | Suspended hoặc Ended membership không thực hiện được nghiệp vụ. | Functional / Integration / Security Test tùy nội dung |
| `AC-MEMBER-04` | Kết thúc membership vẫn truy vết được các hành động lịch sử. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-USER`](./03_UC-USER.md), [`UC-TENANT`](./01_UC-TENANT.md), [`UC-ORG`](./05_UC-ORG.md), [`UC-RBAC`](./04_UC-RBAC.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Quản trị viên đơn vị trực thuộc" as A2
actor "Vai trò chuyên trách theo mô-đun" as A3
actor "Quản trị viên tenant" as A4
usecase "Nhóm MEMBER — cụm 1" as PKG1
rectangle "Quản lý thành viên và membership — Cụm 1/5" {
  usecase "UC-MEMBER-01
Xem danh sách thành viên" as U1
  usecase "UC-MEMBER-02
Tìm kiếm và lọc thành viên" as U2
  usecase "UC-MEMBER-03
Xem chi tiết hồ sơ thành viên" as U3
  usecase "UC-MEMBER-04
Mời người dùng vào tổ chức" as U4
  usecase "UC-MEMBER-05
Gửi lại lời mời thành viên" as U5
  usecase "UC-MEMBER-06
Hủy lời mời thành viên" as U6
  usecase "UC-MEMBER-07
Chấp nhận lời mời thành viên" as U7
  usecase "UC-MEMBER-08
Từ chối lời mời thành viên" as U8
  usecase "UC-MEMBER-09
Thêm người dùng hiện có vào tổ chức" as U9
  usecase "UC-MEMBER-10
Tạo hồ sơ thành viên tạm chưa liên kết User" as U10
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
actor "Quản trị viên đơn vị trực thuộc" as A2
actor "Vai trò chuyên trách theo mô-đun" as A3
actor "Quản trị viên tenant" as A4
usecase "Nhóm MEMBER — cụm 2" as PKG2
rectangle "Quản lý thành viên và membership — Cụm 2/5" {
  usecase "UC-MEMBER-11
Liên kết User với hồ sơ thành viên" as U11
  usecase "UC-MEMBER-12
Gỡ liên kết User bị sai" as U12
  usecase "UC-MEMBER-13
Nhập danh sách thành viên hàng loạt" as U13
  usecase "UC-MEMBER-14
Kiểm tra và xử lý bản ghi trùng lặp" as U14
  usecase "UC-MEMBER-15
Cập nhật hồ sơ thành viên" as U15
  usecase "UC-MEMBER-16
Thành viên tự cập nhật hồ sơ được phép" as U16
  usecase "UC-MEMBER-17
Phê duyệt thay đổi hồ sơ thành viên" as U17
  usecase "UC-MEMBER-18
Gán thành viên vào đơn vị" as U18
  usecase "UC-MEMBER-19
Chuyển thành viên giữa các đơn vị" as U19
  usecase "UC-MEMBER-20
Gán chức vụ cho thành viên" as U20
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
actor "Quản trị viên đơn vị trực thuộc" as A2
actor "Vai trò chuyên trách theo mô-đun" as A3
actor "Quản trị viên tenant" as A4
usecase "Nhóm MEMBER — cụm 3" as PKG3
rectangle "Quản lý thành viên và membership — Cụm 3/5" {
  usecase "UC-MEMBER-21
Kết thúc chức vụ của thành viên" as U21
  usecase "UC-MEMBER-22
Gán vai trò nghiệp vụ cho membership" as U22
  usecase "UC-MEMBER-23
Gắn nhãn hoặc nhóm thành viên" as U23
  usecase "UC-MEMBER-24
Quản lý kỹ năng thành viên" as U24
  usecase "UC-MEMBER-25
Quản lý kinh nghiệm và định hướng" as U25
  usecase "UC-MEMBER-26
Quản lý tài liệu hồ sơ thành viên" as U26
  usecase "UC-MEMBER-27
Kích hoạt membership" as U27
  usecase "UC-MEMBER-28
Tạm ngưng membership" as U28
  usecase "UC-MEMBER-29
Khôi phục membership bị tạm ngưng" as U29
  usecase "UC-MEMBER-30
Kết thúc membership" as U30
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
actor "Thành viên tenant" as A1
actor "Quản trị viên đơn vị trực thuộc" as A2
actor "Vai trò chuyên trách theo mô-đun" as A3
actor "Quản trị viên tenant" as A4
usecase "Nhóm MEMBER — cụm 4" as PKG4
rectangle "Quản lý thành viên và membership — Cụm 4/5" {
  usecase "UC-MEMBER-31
Tái gia nhập tổ chức" as U31
  usecase "UC-MEMBER-32
Chuyển trạng thái thành viên sang cựu thành viên" as U32
  usecase "UC-MEMBER-33
Bổ nhiệm Owner hoặc quản trị viên hợp lệ" as U33
  usecase "UC-MEMBER-34
Ngăn loại bỏ Owner cuối cùng" as U34
  usecase "UC-MEMBER-35
Xem lịch sử membership" as U35
  usecase "UC-MEMBER-36
Xem lịch sử đơn vị và chức vụ" as U36
  usecase "UC-MEMBER-37
Xuất danh sách thành viên" as U37
  usecase "UC-MEMBER-38
Cập nhật thành viên hàng loạt" as U38
  usecase "UC-MEMBER-39
Ẩn danh dữ liệu thành viên theo chính sách" as U39
  usecase "UC-MEMBER-40
Lưu trữ hồ sơ thành viên" as U40
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

### 14.5. Cụm use case 41–41

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Quản trị viên đơn vị trực thuộc" as A2
actor "Vai trò chuyên trách theo mô-đun" as A3
actor "Quản trị viên tenant" as A4
usecase "Nhóm MEMBER — cụm 5" as PKG5
rectangle "Quản lý thành viên và membership — Cụm 5/5" {
  usecase "UC-MEMBER-41
Khôi phục hồ sơ thành viên đã lưu trữ" as U41
}
A1 --> PKG5
A2 --> PKG5
A3 --> PKG5
A4 --> PKG5
PKG5 ..> U41 : <<contains>>
@enduml
```

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
