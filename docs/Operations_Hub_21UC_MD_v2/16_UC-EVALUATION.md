# UC-EVALUATION — Quản lý đánh giá thành viên

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-EVALUATION` |
| Tên | Quản lý đánh giá thành viên |
| Miền nghiệp vụ | Quản trị thành viên |
| Mức ưu tiên phát triển | Mô-đun vận hành |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Quản lý chu kỳ, bộ tiêu chí, phân công, điểm, minh chứng, phê duyệt và khóa kết quả đánh giá.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-UNIT-ADMIN` | Quản trị viên đơn vị trực thuộc | Tenant hoặc tích hợp |
| `ACT-AUDITOR` | Người kiểm tra hoặc giám sát | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Module đánh giá đã kích hoạt.
- Chu kỳ và tiêu chí đã được cấu hình hoặc chọn từ template hợp lệ.

## 5. Điều kiện sau

- Điểm đánh giá có nguồn, người ghi nhận, thời điểm và bằng chứng khi yêu cầu.
- Kết quả khóa không bị chỉnh sửa trái quy trình.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-EVALUATION-01` | Tạo chu kỳ đánh giá | Cho phép tạo chu kỳ đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-02` | Cập nhật chu kỳ đánh giá | Cho phép cập nhật chu kỳ đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-03` | Kích hoạt chu kỳ đánh giá | Cho phép kích hoạt chu kỳ đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-04` | Khóa chu kỳ đánh giá | Thực hiện nghiệp vụ “Khóa chu kỳ đánh giá” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-05` | Mở lại chu kỳ đánh giá theo quyền | Cho phép mở lại chu kỳ đánh giá theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-06` | Quản lý bộ tiêu chí đánh giá | Cho phép quản lý bộ tiêu chí đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-07` | Tạo tiêu chí đánh giá | Cho phép tạo tiêu chí đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-08` | Cập nhật tiêu chí đánh giá | Cho phép cập nhật tiêu chí đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-09` | Phiên bản hóa tiêu chí | Thực hiện nghiệp vụ “Phiên bản hóa tiêu chí” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-10` | Cấu hình trọng số và điểm tối đa | Cho phép cấu hình trọng số và điểm tối đa; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-11` | Cấu hình thang điểm | Cho phép cấu hình thang điểm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-12` | Cấu hình tiêu chí theo đơn vị hoặc vai trò | Cho phép cấu hình tiêu chí theo đơn vị hoặc vai trò; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-13` | Phân công người đánh giá | Thực hiện nghiệp vụ “Phân công người đánh giá” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-14` | Phân công người được đánh giá | Thực hiện nghiệp vụ “Phân công người được đánh giá” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-15` | Kiểm tra xung đột lợi ích người đánh giá | Kiểm tra xung đột lợi ích người đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-16` | Thực hiện tự đánh giá | Thực hiện tự đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-17` | Thực hiện đánh giá đồng cấp | Thực hiện đánh giá đồng cấp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-18` | Thực hiện đánh giá của quản lý | Thực hiện đánh giá của quản lý; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-19` | Lưu bản nháp đánh giá | Cho phép lưu bản nháp đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-20` | Đính kèm minh chứng đánh giá | Thực hiện nghiệp vụ “Đính kèm minh chứng đánh giá” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-21` | Gửi phiếu đánh giá | Cho phép gửi phiếu đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-22` | Kiểm tra tính đầy đủ của phiếu | Kiểm tra tính đầy đủ của phiếu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-23` | Nhắc người chưa hoàn tất đánh giá | Thực hiện nghiệp vụ “Nhắc người chưa hoàn tất đánh giá” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-24` | Khóa phiếu đánh giá sau khi nộp | Thực hiện nghiệp vụ “Khóa phiếu đánh giá sau khi nộp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-25` | Rà soát và xác minh điểm | Thực hiện nghiệp vụ “Rà soát và xác minh điểm” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-26` | Hiệu chỉnh hoặc moderation điểm | Thực hiện nghiệp vụ “Hiệu chỉnh hoặc moderation điểm” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-27` | Tổ chức phiên calibration | Thực hiện nghiệp vụ “Tổ chức phiên calibration” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-28` | Điều chỉnh điểm có lý do | Thực hiện nghiệp vụ “Điều chỉnh điểm có lý do” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-29` | Phê duyệt kết quả đánh giá | Cho phép chủ thể có thẩm quyền phê duyệt kết quả đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-30` | Công bố kết quả đánh giá | Thực hiện nghiệp vụ “Công bố kết quả đánh giá” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-31` | Thành viên xem kết quả | Thực hiện nghiệp vụ “Thành viên xem kết quả” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-32` | Xác nhận đã nhận kết quả | Thực hiện nghiệp vụ “Xác nhận đã nhận kết quả” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-33` | Gửi khiếu nại kết quả | Cho phép gửi khiếu nại kết quả; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-34` | Tiếp nhận và phân công xử lý khiếu nại | Thực hiện nghiệp vụ “Tiếp nhận và phân công xử lý khiếu nại” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-35` | Giải quyết khiếu nại | Thực hiện nghiệp vụ “Giải quyết khiếu nại” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-36` | Cập nhật kết quả sau khiếu nại | Cho phép cập nhật kết quả sau khiếu nại; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-37` | Chốt kết quả cuối cùng | Thực hiện nghiệp vụ “Chốt kết quả cuối cùng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-38` | Nhập điểm đánh giá hàng loạt | Cho phép nhập điểm đánh giá hàng loạt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-39` | Xuất kết quả đánh giá | Cho phép xuất kết quả đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-40` | Tổng hợp xếp loại theo đơn vị | Thực hiện nghiệp vụ “Tổng hợp xếp loại theo đơn vị” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-41` | Tạo báo cáo phân tích đánh giá | Cho phép tạo báo cáo phân tích đánh giá; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-EVALUATION-42` | Ẩn danh người đánh giá khi chính sách yêu cầu | Thực hiện nghiệp vụ “Ẩn danh người đánh giá khi chính sách yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-EVALUATION-43` | Xem lịch sử và audit thay đổi điểm | Cho phép actor có quyền xem lịch sử và audit thay đổi điểm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Evaluation Manager tạo chu kỳ và chọn bộ tiêu chí.
2. Hệ thống snapshot phiên bản tiêu chí áp dụng.
3. Người quản lý phân công evaluator theo đơn vị.
4. Evaluator ghi điểm và đính kèm minh chứng.
5. Người xác minh kiểm tra và yêu cầu điều chỉnh nếu cần.
6. Kết quả được phê duyệt, khóa và công bố theo quyền.

## 8. Luồng thay thế và ngoại lệ

- Điểm vượt giới hạn: từ chối.
- Evaluator ngoài đơn vị: từ chối.
- Chu kỳ đã khóa: không cho sửa bản ghi gốc.
- Tiêu chí bị thay đổi giữa chu kỳ: chu kỳ tiếp tục dùng snapshot đã chốt.

## 9. Quy tắc nghiệp vụ cốt lõi

- Điểm không được vượt điểm tối đa của tiêu chí trừ khi tiêu chí cho phép điểm cộng riêng.
- Tiêu chí đang hiệu lực tại thời điểm ghi điểm phải được lưu tham chiếu phiên bản.
- Người đánh giá chỉ chấm trong đơn vị và phạm vi được giao.
- Chu kỳ đã khóa không chỉnh sửa trực tiếp; điều chỉnh phải tạo sự kiện bổ sung có phê duyệt.
- Minh chứng bắt buộc phải tồn tại trước khi xác minh điểm.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `EvaluationCycle` | Thực thể logic phục vụ UC-EVALUATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `EvaluationCriterion` | Thực thể logic phục vụ UC-EVALUATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `CriterionVersion` | Thực thể logic phục vụ UC-EVALUATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `EvaluationAssignment` | Thực thể logic phục vụ UC-EVALUATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `ScoreEvent` | Thực thể logic phục vụ UC-EVALUATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `EvaluationEvidence` | Thực thể logic phục vụ UC-EVALUATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `EvaluationResult` | Thực thể logic phục vụ UC-EVALUATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `EvaluationAppeal` | Thực thể logic phục vụ UC-EVALUATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-EVALUATION; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-EVALUATION-01` | Mỗi điểm truy vết được tiêu chí phiên bản, người ghi và thời điểm. | Functional / Integration / Security Test tùy nội dung |
| `AC-EVALUATION-02` | Chu kỳ khóa không thể sửa trực tiếp. | Functional / Integration / Security Test tùy nội dung |
| `AC-EVALUATION-03` | Quyền chấm điểm bị giới hạn theo đơn vị. | Functional / Integration / Security Test tùy nội dung |
| `AC-EVALUATION-04` | Tổng điểm được tính đúng từ các score event hợp lệ. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-MEMBER`](./09_UC-MEMBER.md), [`UC-ORG`](./05_UC-ORG.md), [`UC-RBAC`](./04_UC-RBAC.md), [`UC-DOCUMENT`](./11_UC-DOCUMENT.md), [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

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
actor "Người kiểm tra hoặc giám sát" as A4
usecase "Nhóm EVALUATION — cụm 1" as PKG1
rectangle "Quản lý đánh giá thành viên — Cụm 1/5" {
  usecase "UC-EVALUATION-01
Tạo chu kỳ đánh giá" as U1
  usecase "UC-EVALUATION-02
Cập nhật chu kỳ đánh giá" as U2
  usecase "UC-EVALUATION-03
Kích hoạt chu kỳ đánh giá" as U3
  usecase "UC-EVALUATION-04
Khóa chu kỳ đánh giá" as U4
  usecase "UC-EVALUATION-05
Mở lại chu kỳ đánh giá theo quyền" as U5
  usecase "UC-EVALUATION-06
Quản lý bộ tiêu chí đánh giá" as U6
  usecase "UC-EVALUATION-07
Tạo tiêu chí đánh giá" as U7
  usecase "UC-EVALUATION-08
Cập nhật tiêu chí đánh giá" as U8
  usecase "UC-EVALUATION-09
Phiên bản hóa tiêu chí" as U9
  usecase "UC-EVALUATION-10
Cấu hình trọng số và điểm tối đa" as U10
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
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
actor "Người kiểm tra hoặc giám sát" as A4
usecase "Nhóm EVALUATION — cụm 2" as PKG2
rectangle "Quản lý đánh giá thành viên — Cụm 2/5" {
  usecase "UC-EVALUATION-11
Cấu hình thang điểm" as U11
  usecase "UC-EVALUATION-12
Cấu hình tiêu chí theo đơn vị hoặc vai trò" as U12
  usecase "UC-EVALUATION-13
Phân công người đánh giá" as U13
  usecase "UC-EVALUATION-14
Phân công người được đánh giá" as U14
  usecase "UC-EVALUATION-15
Kiểm tra xung đột lợi ích người đánh giá" as U15
  usecase "UC-EVALUATION-16
Thực hiện tự đánh giá" as U16
  usecase "UC-EVALUATION-17
Thực hiện đánh giá đồng cấp" as U17
  usecase "UC-EVALUATION-18
Thực hiện đánh giá của quản lý" as U18
  usecase "UC-EVALUATION-19
Lưu bản nháp đánh giá" as U19
  usecase "UC-EVALUATION-20
Đính kèm minh chứng đánh giá" as U20
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
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
actor "Người kiểm tra hoặc giám sát" as A4
usecase "Nhóm EVALUATION — cụm 3" as PKG3
rectangle "Quản lý đánh giá thành viên — Cụm 3/5" {
  usecase "UC-EVALUATION-21
Gửi phiếu đánh giá" as U21
  usecase "UC-EVALUATION-22
Kiểm tra tính đầy đủ của phiếu" as U22
  usecase "UC-EVALUATION-23
Nhắc người chưa hoàn tất đánh giá" as U23
  usecase "UC-EVALUATION-24
Khóa phiếu đánh giá sau khi nộp" as U24
  usecase "UC-EVALUATION-25
Rà soát và xác minh điểm" as U25
  usecase "UC-EVALUATION-26
Hiệu chỉnh hoặc moderation điểm" as U26
  usecase "UC-EVALUATION-27
Tổ chức phiên calibration" as U27
  usecase "UC-EVALUATION-28
Điều chỉnh điểm có lý do" as U28
  usecase "UC-EVALUATION-29
Phê duyệt kết quả đánh giá" as U29
  usecase "UC-EVALUATION-30
Công bố kết quả đánh giá" as U30
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
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
actor "Người kiểm tra hoặc giám sát" as A4
usecase "Nhóm EVALUATION — cụm 4" as PKG4
rectangle "Quản lý đánh giá thành viên — Cụm 4/5" {
  usecase "UC-EVALUATION-31
Thành viên xem kết quả" as U31
  usecase "UC-EVALUATION-32
Xác nhận đã nhận kết quả" as U32
  usecase "UC-EVALUATION-33
Gửi khiếu nại kết quả" as U33
  usecase "UC-EVALUATION-34
Tiếp nhận và phân công xử lý khiếu nại" as U34
  usecase "UC-EVALUATION-35
Giải quyết khiếu nại" as U35
  usecase "UC-EVALUATION-36
Cập nhật kết quả sau khiếu nại" as U36
  usecase "UC-EVALUATION-37
Chốt kết quả cuối cùng" as U37
  usecase "UC-EVALUATION-38
Nhập điểm đánh giá hàng loạt" as U38
  usecase "UC-EVALUATION-39
Xuất kết quả đánh giá" as U39
  usecase "UC-EVALUATION-40
Tổng hợp xếp loại theo đơn vị" as U40
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

### 14.5. Cụm use case 41–43

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
actor "Người kiểm tra hoặc giám sát" as A4
usecase "Nhóm EVALUATION — cụm 5" as PKG5
rectangle "Quản lý đánh giá thành viên — Cụm 5/5" {
  usecase "UC-EVALUATION-41
Tạo báo cáo phân tích đánh giá" as U41
  usecase "UC-EVALUATION-42
Ẩn danh người đánh giá khi chính sách yêu cầu" as U42
  usecase "UC-EVALUATION-43
Xem lịch sử và audit thay đổi điểm" as U43
}
A1 --> PKG5
A2 --> PKG5
A3 --> PKG5
A4 --> PKG5
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
