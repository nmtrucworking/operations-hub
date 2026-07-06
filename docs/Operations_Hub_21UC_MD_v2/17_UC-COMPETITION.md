# UC-COMPETITION — Quản lý cuộc thi, thành tích và ghi nhận

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-COMPETITION` |
| Tên | Quản lý cuộc thi, thành tích và ghi nhận |
| Miền nghiệp vụ | Hoạt động tổ chức |
| Mức ưu tiên phát triển | Mô-đun vận hành |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Quản lý cơ hội cuộc thi, đăng ký tham gia, đội thi, hồ sơ dự thi, kết quả, thành tích và minh chứng ghi nhận.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-UNIT-ADMIN` | Quản trị viên đơn vị trực thuộc | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Module cuộc thi đã kích hoạt.
- Người thao tác có quyền quản lý hoạt động hoặc thành tích trong tenant.

## 5. Điều kiện sau

- Hoạt động và thành tích có nguồn, người tham gia, kết quả và minh chứng rõ ràng.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-COMPETITION-01` | Quản lý loại cuộc thi hoặc hoạt động ghi nhận | Cho phép quản lý loại cuộc thi hoặc hoạt động ghi nhận; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-02` | Tạo cuộc thi | Cho phép tạo cuộc thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-03` | Cập nhật thông tin cuộc thi | Cho phép cập nhật thông tin cuộc thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-04` | Cấu hình vòng thi | Cho phép cấu hình vòng thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-05` | Cấu hình tiêu chí chấm | Cho phép cấu hình tiêu chí chấm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-06` | Cấu hình điều kiện tham gia | Cho phép cấu hình điều kiện tham gia; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-07` | Mở đăng ký cuộc thi | Cho phép mở đăng ký cuộc thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-08` | Đóng đăng ký cuộc thi | Cho phép đóng đăng ký cuộc thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-09` | Đăng ký cá nhân tham gia | Cho phép đăng ký cá nhân tham gia; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-10` | Tạo đội thi | Cho phép tạo đội thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-11` | Mời thành viên vào đội thi | Thực hiện nghiệp vụ “Mời thành viên vào đội thi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-12` | Chấp nhận hoặc từ chối lời mời đội thi | Thực hiện nghiệp vụ “Chấp nhận hoặc từ chối lời mời đội thi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-13` | Kiểm tra tính hợp lệ của thành viên hoặc đội | Kiểm tra tính hợp lệ của thành viên hoặc đội; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-14` | Nộp bài dự thi | Thực hiện nghiệp vụ “Nộp bài dự thi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-15` | Cập nhật bài dự thi trước hạn | Cho phép cập nhật bài dự thi trước hạn; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-16` | Tải lên minh chứng hoặc sản phẩm | Cho phép tải lên minh chứng hoặc sản phẩm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-17` | Rút bài dự thi | Thực hiện nghiệp vụ “Rút bài dự thi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-18` | Kiểm tra tính đầy đủ của bài dự thi | Kiểm tra tính đầy đủ của bài dự thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-19` | Phân công giám khảo | Thực hiện nghiệp vụ “Phân công giám khảo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-20` | Ghi điểm bài dự thi | Cho phép ghi điểm bài dự thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-21` | Ghi nhận nhận xét giám khảo | Ghi nhận nhận xét giám khảo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-22` | Hiệu chỉnh hoặc moderation điểm | Thực hiện nghiệp vụ “Hiệu chỉnh hoặc moderation điểm” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-23` | Xếp hạng thí sinh hoặc đội thi | Thực hiện nghiệp vụ “Xếp hạng thí sinh hoặc đội thi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-24` | Chọn danh sách vào vòng tiếp theo | Cho phép lựa chọn danh sách vào vòng tiếp theo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-25` | Công bố kết quả vòng thi | Thực hiện nghiệp vụ “Công bố kết quả vòng thi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-26` | Công bố kết quả chung cuộc | Thực hiện nghiệp vụ “Công bố kết quả chung cuộc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-27` | Gửi khiếu nại kết quả | Cho phép gửi khiếu nại kết quả; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-28` | Xử lý khiếu nại kết quả | Thực hiện nghiệp vụ “Xử lý khiếu nại kết quả” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-29` | Ghi nhận giải thưởng | Ghi nhận giải thưởng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-30` | Sinh giấy chứng nhận hoặc quyết định khen thưởng | Cho phép sinh giấy chứng nhận hoặc quyết định khen thưởng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-31` | Ghi nhận thành tích cá nhân | Ghi nhận thành tích cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-32` | Ghi nhận thành tích đơn vị | Ghi nhận thành tích đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-33` | Đề cử thành viên tham gia cuộc thi bên ngoài | Thực hiện nghiệp vụ “Đề cử thành viên tham gia cuộc thi bên ngoài” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-34` | Theo dõi trạng thái cuộc thi bên ngoài | Cho phép theo dõi trạng thái cuộc thi bên ngoài; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-35` | Liên kết chi phí hoặc tài trợ với tài chính | Cho phép liên kết chi phí hoặc tài trợ với tài chính; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-36` | Liên kết tài liệu và minh chứng | Cho phép liên kết tài liệu và minh chứng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-37` | Xuất danh sách và báo cáo cuộc thi | Cho phép xuất danh sách và báo cáo cuộc thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-38` | Lưu trữ cuộc thi | Cho phép lưu trữ cuộc thi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-COMPETITION-39` | Sao chép cấu hình cuộc thi | Thực hiện nghiệp vụ “Sao chép cấu hình cuộc thi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-COMPETITION-40` | Quản lý quyền công bố thông tin và hình ảnh | Cho phép quản lý quyền công bố thông tin và hình ảnh; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Competition Manager tạo cuộc thi và mở đăng ký.
2. Thành viên tạo đội hoặc đăng ký cá nhân.
3. Người quản lý duyệt điều kiện tham gia.
4. Đội nộp hồ sơ và cập nhật tiến độ.
5. Sau cuộc thi, người quản lý ghi kết quả và minh chứng.
6. Người có thẩm quyền phê duyệt thành tích; hệ thống cập nhật hồ sơ và báo cáo.

## 8. Luồng thay thế và ngoại lệ

- Hết hạn đăng ký hoặc nộp bài: từ chối trừ khi có gia hạn có quyền.
- Thành viên không còn active: cảnh báo hoặc từ chối theo chính sách.
- Kết quả thiếu minh chứng: giữ trạng thái chờ xác minh.
- Thành tích trùng: hợp nhất hoặc từ chối dựa trên khóa nguồn.

## 9. Quy tắc nghiệp vụ cốt lõi

- Thành viên đội phải có membership hợp lệ tại thời điểm đăng ký, trừ khách ngoài được mô hình hóa riêng.
- Một người không được đăng ký trùng vai trò trong cùng đội nếu chính sách không cho phép.
- Kết quả bên ngoài chỉ trở thành thành tích chính thức sau khi được xác minh.
- Tệp hồ sơ và minh chứng phải thuộc tenant.
- Thay đổi kết quả đã phê duyệt phải có audit và lý do.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `Competition` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `CompetitionRegistration` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `CompetitionTeam` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `TeamMember` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Submission` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Milestone` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `CompetitionResult` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Achievement` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Certificate` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-COMPETITION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-COMPETITION-01` | Không tạo thành tích chính thức khi chưa xác minh. | Functional / Integration / Security Test tùy nội dung |
| `AC-COMPETITION-02` | Thành viên và đội không bị lẫn tenant. | Functional / Integration / Security Test tùy nội dung |
| `AC-COMPETITION-03` | Hạn đăng ký/nộp được kiểm tra theo múi giờ tenant. | Functional / Integration / Security Test tùy nội dung |
| `AC-COMPETITION-04` | Thay đổi kết quả đã duyệt có audit. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-MEMBER`](./09_UC-MEMBER.md), [`UC-DOCUMENT`](./11_UC-DOCUMENT.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md), [`UC-DASHBOARD`](./19_UC-DASHBOARD.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

## 14. Use Case Diagram

Do số lượng use case thành phần không bị giới hạn ở 10, sơ đồ được chia thành các cụm để bảo đảm khả năng đọc. Quan hệ `<<contains>>` trong sơ đồ chỉ biểu thị quan hệ phân nhóm tài liệu, không phải quan hệ UML `<<include>>`. Quan hệ actor–use case nguyên tử phải được xác nhận khi đặc tả chi tiết từng use case; không suy luận rằng mọi actor liệt kê đều được thực hiện mọi use case trong cụm.

### 14.1. Cụm use case 01–10

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
usecase "Nhóm COMPETITION — cụm 1" as PKG1
rectangle "Quản lý cuộc thi, thành tích và ghi nhận — Cụm 1/4" {
  usecase "UC-COMPETITION-01
Quản lý loại cuộc thi hoặc hoạt động ghi nhận" as U1
  usecase "UC-COMPETITION-02
Tạo cuộc thi" as U2
  usecase "UC-COMPETITION-03
Cập nhật thông tin cuộc thi" as U3
  usecase "UC-COMPETITION-04
Cấu hình vòng thi" as U4
  usecase "UC-COMPETITION-05
Cấu hình tiêu chí chấm" as U5
  usecase "UC-COMPETITION-06
Cấu hình điều kiện tham gia" as U6
  usecase "UC-COMPETITION-07
Mở đăng ký cuộc thi" as U7
  usecase "UC-COMPETITION-08
Đóng đăng ký cuộc thi" as U8
  usecase "UC-COMPETITION-09
Đăng ký cá nhân tham gia" as U9
  usecase "UC-COMPETITION-10
Tạo đội thi" as U10
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
actor "Quản trị viên đơn vị trực thuộc" as A3
usecase "Nhóm COMPETITION — cụm 2" as PKG2
rectangle "Quản lý cuộc thi, thành tích và ghi nhận — Cụm 2/4" {
  usecase "UC-COMPETITION-11
Mời thành viên vào đội thi" as U11
  usecase "UC-COMPETITION-12
Chấp nhận hoặc từ chối lời mời đội thi" as U12
  usecase "UC-COMPETITION-13
Kiểm tra tính hợp lệ của thành viên hoặc đội" as U13
  usecase "UC-COMPETITION-14
Nộp bài dự thi" as U14
  usecase "UC-COMPETITION-15
Cập nhật bài dự thi trước hạn" as U15
  usecase "UC-COMPETITION-16
Tải lên minh chứng hoặc sản phẩm" as U16
  usecase "UC-COMPETITION-17
Rút bài dự thi" as U17
  usecase "UC-COMPETITION-18
Kiểm tra tính đầy đủ của bài dự thi" as U18
  usecase "UC-COMPETITION-19
Phân công giám khảo" as U19
  usecase "UC-COMPETITION-20
Ghi điểm bài dự thi" as U20
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
actor "Quản trị viên đơn vị trực thuộc" as A3
usecase "Nhóm COMPETITION — cụm 3" as PKG3
rectangle "Quản lý cuộc thi, thành tích và ghi nhận — Cụm 3/4" {
  usecase "UC-COMPETITION-21
Ghi nhận nhận xét giám khảo" as U21
  usecase "UC-COMPETITION-22
Hiệu chỉnh hoặc moderation điểm" as U22
  usecase "UC-COMPETITION-23
Xếp hạng thí sinh hoặc đội thi" as U23
  usecase "UC-COMPETITION-24
Chọn danh sách vào vòng tiếp theo" as U24
  usecase "UC-COMPETITION-25
Công bố kết quả vòng thi" as U25
  usecase "UC-COMPETITION-26
Công bố kết quả chung cuộc" as U26
  usecase "UC-COMPETITION-27
Gửi khiếu nại kết quả" as U27
  usecase "UC-COMPETITION-28
Xử lý khiếu nại kết quả" as U28
  usecase "UC-COMPETITION-29
Ghi nhận giải thưởng" as U29
  usecase "UC-COMPETITION-30
Sinh giấy chứng nhận hoặc quyết định khen thưởng" as U30
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
actor "Quản trị viên đơn vị trực thuộc" as A3
usecase "Nhóm COMPETITION — cụm 4" as PKG4
rectangle "Quản lý cuộc thi, thành tích và ghi nhận — Cụm 4/4" {
  usecase "UC-COMPETITION-31
Ghi nhận thành tích cá nhân" as U31
  usecase "UC-COMPETITION-32
Ghi nhận thành tích đơn vị" as U32
  usecase "UC-COMPETITION-33
Đề cử thành viên tham gia cuộc thi bên ngoài" as U33
  usecase "UC-COMPETITION-34
Theo dõi trạng thái cuộc thi bên ngoài" as U34
  usecase "UC-COMPETITION-35
Liên kết chi phí hoặc tài trợ với tài chính" as U35
  usecase "UC-COMPETITION-36
Liên kết tài liệu và minh chứng" as U36
  usecase "UC-COMPETITION-37
Xuất danh sách và báo cáo cuộc thi" as U37
  usecase "UC-COMPETITION-38
Lưu trữ cuộc thi" as U38
  usecase "UC-COMPETITION-39
Sao chép cấu hình cuộc thi" as U39
  usecase "UC-COMPETITION-40
Quản lý quyền công bố thông tin và hình ảnh" as U40
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

## 15. Điểm mở cần chi tiết hóa

- Trường dữ liệu chi tiết, trạng thái và ma trận chuyển trạng thái của từng use case thành phần.
- Ma trận permission ở cấp hành động và scope.
- Quy tắc retention, masking và phân loại dữ liệu nhạy cảm.
- Hợp đồng API, mã lỗi và yêu cầu idempotency.
- Test case chi tiết và dữ liệu kiểm thử theo tenant.
