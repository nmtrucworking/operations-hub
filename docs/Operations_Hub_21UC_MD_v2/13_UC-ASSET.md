# UC-ASSET — Quản lý tài sản và hậu cần

## 1. Thông tin tài liệu

| Thuộc tính | Nội dung |
|---|---|
| Mã nhóm Use Case | `UC-ASSET` |
| Tên | Quản lý tài sản và hậu cần |
| Miền nghiệp vụ | Tài sản và hậu cần |
| Mức ưu tiên phát triển | Mô-đun vận hành |
| Phạm vi | Toàn bộ sản phẩm Operations Hub |
| Mô hình | SaaS đa tổ chức, dữ liệu và cấu hình theo tenant |
| Trạng thái đặc tả | Baseline phân tích mở; đã liệt kê toàn bộ use case nhận diện được trong phạm vi hiện tại |

> **Nguyên tắc phạm vi:** tài liệu mô tả năng lực của phiên bản sản phẩm hoàn chỉnh. Mức ưu tiên phát triển không đồng nghĩa với loại bỏ khỏi phạm vi sản phẩm.

## 2. Mục tiêu

Theo dõi tài sản, vật tư, tình trạng, người giữ, mượn trả, bảo trì và kiểm kê trong tenant.

## 3. Actor

| Mã actor | Actor | Phạm vi |
|---|---|---|
| `ACT-TENANT-MEMBER` | Thành viên tenant | Tenant hoặc tích hợp |
| `ACT-MODULE-SPECIALIST` | Vai trò chuyên trách theo mô-đun | Tenant hoặc tích hợp |
| `ACT-UNIT-ADMIN` | Quản trị viên đơn vị trực thuộc | Tenant hoặc tích hợp |

Actor trong sơ đồ chỉ thể hiện vai trò tương tác. Quyền thực tế phải được kiểm tra tại backend dựa trên tenant context, membership, role, permission, organization unit, trạng thái module và trạng thái tenant.

## 4. Điều kiện trước

- Module tài sản đã kích hoạt.
- Danh mục tài sản và trạng thái được cấu hình.

## 5. Điều kiện sau

- Số lượng, tình trạng và lịch sử sở hữu hoặc sử dụng tài sản nhất quán.

## 6. Danh sách use case thành phần

> **Nguyên tắc bao phủ:** không áp dụng giới hạn 10 use case thành phần. Danh sách dưới đây bao gồm toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm và quy tắc nghiệp vụ hiện hành. Khi xuất hiện nghiệp vụ mới, use case mới được bổ sung mà không cắt bỏ use case đã có chỉ để giữ một số lượng cố định.

> Use case thành phần biểu diễn **mục tiêu có ý nghĩa đối với actor**, không đồng nhất với endpoint API, nút giao diện hoặc từng thao tác CRUD kỹ thuật.

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-ASSET-01` | Quản lý danh mục tài sản | Cho phép quản lý danh mục tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-02` | Quản lý loại tài sản | Cho phép quản lý loại tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-03` | Quản lý địa điểm lưu trữ | Cho phép quản lý địa điểm lưu trữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-04` | Quản lý nhà cung cấp tài sản | Cho phép quản lý nhà cung cấp tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-05` | Tạo hồ sơ tài sản | Cho phép tạo hồ sơ tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-06` | Nhập tài sản hàng loạt | Cho phép nhập tài sản hàng loạt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-07` | Gắn mã tài sản hoặc mã QR | Thực hiện nghiệp vụ “Gắn mã tài sản hoặc mã QR” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-08` | Cập nhật thông tin tài sản | Cho phép cập nhật thông tin tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-09` | Xem chi tiết và lịch sử tài sản | Cho phép actor có quyền xem chi tiết và lịch sử tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-10` | Thực hiện kiểm kê tài sản | Thực hiện kiểm kê tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-11` | Lập kế hoạch kiểm kê | Thực hiện nghiệp vụ “Lập kế hoạch kiểm kê” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-12` | Ghi nhận kết quả kiểm kê | Ghi nhận kết quả kiểm kê; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-13` | Xử lý chênh lệch kiểm kê | Thực hiện nghiệp vụ “Xử lý chênh lệch kiểm kê” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-14` | Yêu cầu mượn tài sản | Thực hiện nghiệp vụ “Yêu cầu mượn tài sản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-15` | Phê duyệt yêu cầu mượn | Cho phép chủ thể có thẩm quyền phê duyệt yêu cầu mượn; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-16` | Đặt trước tài sản | Cho phép đặt trước tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-17` | Kiểm tra xung đột đặt trước | Kiểm tra xung đột đặt trước; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-18` | Bàn giao tài sản | Thực hiện nghiệp vụ “Bàn giao tài sản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-19` | Ghi nhận tài sản đang được giữ | Ghi nhận tài sản đang được giữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-20` | Gia hạn thời gian mượn | Thực hiện nghiệp vụ “Gia hạn thời gian mượn” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-21` | Trả tài sản | Thực hiện nghiệp vụ “Trả tài sản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-22` | Ghi nhận trả trễ | Ghi nhận trả trễ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-23` | Gửi nhắc trả tài sản | Cho phép gửi nhắc trả tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-24` | Chuyển tài sản giữa địa điểm | Cho phép chuyển tài sản giữa địa điểm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-25` | Chuyển người quản lý hoặc người giữ tài sản | Cho phép chuyển người quản lý hoặc người giữ tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-26` | Cập nhật tình trạng tài sản | Cho phép cập nhật tình trạng tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-27` | Báo hỏng hoặc mất tài sản | Thực hiện nghiệp vụ “Báo hỏng hoặc mất tài sản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-28` | Ghi nhận sự cố tài sản | Ghi nhận sự cố tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-29` | Xử lý trách nhiệm bồi thường | Thực hiện nghiệp vụ “Xử lý trách nhiệm bồi thường” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-30` | Tạo yêu cầu bảo trì | Cho phép tạo yêu cầu bảo trì; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-31` | Phê duyệt bảo trì | Cho phép chủ thể có thẩm quyền phê duyệt bảo trì; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-32` | Lập lịch bảo trì | Thực hiện nghiệp vụ “Lập lịch bảo trì” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-33` | Ghi nhận kết quả bảo trì | Ghi nhận kết quả bảo trì; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-34` | Quản lý bảo hành | Cho phép quản lý bảo hành; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-35` | Quản lý vật tư tiêu hao | Cho phép quản lý vật tư tiêu hao; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-36` | Nhập kho vật tư | Cho phép nhập kho vật tư; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-37` | Xuất vật tư | Cho phép xuất vật tư; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-38` | Hoàn trả vật tư | Thực hiện nghiệp vụ “Hoàn trả vật tư” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-39` | Cảnh báo tồn kho thấp | Thực hiện nghiệp vụ “Cảnh báo tồn kho thấp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-40` | Theo dõi khấu hao hoặc giá trị còn lại khi áp dụng | Cho phép theo dõi khấu hao hoặc giá trị còn lại khi áp dụng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-41` | Đề nghị thanh lý tài sản | Thực hiện nghiệp vụ “Đề nghị thanh lý tài sản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ASSET-42` | Phê duyệt thanh lý | Cho phép chủ thể có thẩm quyền phê duyệt thanh lý; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-43` | Thực hiện thanh lý hoặc ngừng sử dụng | Thực hiện thanh lý hoặc ngừng sử dụng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-44` | Lưu trữ hồ sơ tài sản | Cho phép lưu trữ hồ sơ tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-45` | Khôi phục hồ sơ tài sản | Cho phép khôi phục hồ sơ tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ASSET-46` | Xuất danh sách và báo cáo tài sản | Cho phép xuất danh sách và báo cáo tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

## 7. Luồng nghiệp vụ chính

1. Logistics Officer tạo tài sản và số lượng khả dụng.
2. Thành viên gửi yêu cầu mượn.
3. Hệ thống kiểm tra quyền, thời gian và khả dụng.
4. Người phụ trách duyệt và bàn giao; hệ thống cập nhật người giữ/trạng thái.
5. Khi trả, hệ thống ghi tình trạng và cập nhật tồn khả dụng.
6. Nếu hư hỏng, hệ thống tạo yêu cầu bảo trì hoặc xử lý tiếp.

## 8. Luồng thay thế và ngoại lệ

- Không đủ số lượng: từ chối hoặc đưa vào danh sách chờ.
- Tài sản đang bảo trì: không cho mượn.
- Trả thiếu hoặc hư hỏng: yêu cầu biên bản và quy trình xử lý.
- Điều chuyển sang đơn vị khác tenant: từ chối.

## 9. Quy tắc nghiệp vụ cốt lõi

- Tài sản và giao dịch mượn trả phải thuộc cùng tenant.
- Không được bàn giao số lượng vượt khả dụng.
- Một tài sản định danh duy nhất chỉ có một trạng thái giữ chính tại một thời điểm.
- Thanh lý không xóa lịch sử mượn, bảo trì và kiểm kê.
- Chuyển trạng thái phải tuân theo vòng đời tài sản đã cấu hình.

## 10. Mô hình dữ liệu logic liên quan

| Thực thể | Vai trò |
|---|---|
| `AssetCategory` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Asset` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AssetItem` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `InventoryBalance` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `BorrowRequest` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AssetHandover` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `MaintenanceRecord` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `Stocktake` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `DisposalRecord` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |
| `AuditLog` | Thực thể logic phục vụ UC-ASSET; thiết kế vật lý được xác định ở giai đoạn thiết kế dữ liệu. |

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
| `AC-ASSET-01` | Không thể mượn vượt số lượng khả dụng. | Functional / Integration / Security Test tùy nội dung |
| `AC-ASSET-02` | Trạng thái tài sản khớp với bản ghi bàn giao hiện hành. | Functional / Integration / Security Test tùy nội dung |
| `AC-ASSET-03` | Kiểm kê tạo chênh lệch và lịch sử xử lý rõ ràng. | Functional / Integration / Security Test tùy nội dung |
| `AC-ASSET-04` | Tài sản tenant A không xuất hiện trong danh sách tenant B. | Functional / Integration / Security Test tùy nội dung |

## 13. Quan hệ với nhóm Use Case khác

[`UC-MEMBER`](./09_UC-MEMBER.md), [`UC-ORG`](./05_UC-ORG.md), [`UC-REQUEST`](./10_UC-REQUEST.md), [`UC-DOCUMENT`](./11_UC-DOCUMENT.md), [`UC-AUDIT`](./21_UC-AUDIT.md)

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
usecase "Nhóm ASSET — cụm 1" as PKG1
rectangle "Quản lý tài sản và hậu cần — Cụm 1/5" {
  usecase "UC-ASSET-01
Quản lý danh mục tài sản" as U1
  usecase "UC-ASSET-02
Quản lý loại tài sản" as U2
  usecase "UC-ASSET-03
Quản lý địa điểm lưu trữ" as U3
  usecase "UC-ASSET-04
Quản lý nhà cung cấp tài sản" as U4
  usecase "UC-ASSET-05
Tạo hồ sơ tài sản" as U5
  usecase "UC-ASSET-06
Nhập tài sản hàng loạt" as U6
  usecase "UC-ASSET-07
Gắn mã tài sản hoặc mã QR" as U7
  usecase "UC-ASSET-08
Cập nhật thông tin tài sản" as U8
  usecase "UC-ASSET-09
Xem chi tiết và lịch sử tài sản" as U9
  usecase "UC-ASSET-10
Thực hiện kiểm kê tài sản" as U10
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
usecase "Nhóm ASSET — cụm 2" as PKG2
rectangle "Quản lý tài sản và hậu cần — Cụm 2/5" {
  usecase "UC-ASSET-11
Lập kế hoạch kiểm kê" as U11
  usecase "UC-ASSET-12
Ghi nhận kết quả kiểm kê" as U12
  usecase "UC-ASSET-13
Xử lý chênh lệch kiểm kê" as U13
  usecase "UC-ASSET-14
Yêu cầu mượn tài sản" as U14
  usecase "UC-ASSET-15
Phê duyệt yêu cầu mượn" as U15
  usecase "UC-ASSET-16
Đặt trước tài sản" as U16
  usecase "UC-ASSET-17
Kiểm tra xung đột đặt trước" as U17
  usecase "UC-ASSET-18
Bàn giao tài sản" as U18
  usecase "UC-ASSET-19
Ghi nhận tài sản đang được giữ" as U19
  usecase "UC-ASSET-20
Gia hạn thời gian mượn" as U20
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
usecase "Nhóm ASSET — cụm 3" as PKG3
rectangle "Quản lý tài sản và hậu cần — Cụm 3/5" {
  usecase "UC-ASSET-21
Trả tài sản" as U21
  usecase "UC-ASSET-22
Ghi nhận trả trễ" as U22
  usecase "UC-ASSET-23
Gửi nhắc trả tài sản" as U23
  usecase "UC-ASSET-24
Chuyển tài sản giữa địa điểm" as U24
  usecase "UC-ASSET-25
Chuyển người quản lý hoặc người giữ tài sản" as U25
  usecase "UC-ASSET-26
Cập nhật tình trạng tài sản" as U26
  usecase "UC-ASSET-27
Báo hỏng hoặc mất tài sản" as U27
  usecase "UC-ASSET-28
Ghi nhận sự cố tài sản" as U28
  usecase "UC-ASSET-29
Xử lý trách nhiệm bồi thường" as U29
  usecase "UC-ASSET-30
Tạo yêu cầu bảo trì" as U30
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
usecase "Nhóm ASSET — cụm 4" as PKG4
rectangle "Quản lý tài sản và hậu cần — Cụm 4/5" {
  usecase "UC-ASSET-31
Phê duyệt bảo trì" as U31
  usecase "UC-ASSET-32
Lập lịch bảo trì" as U32
  usecase "UC-ASSET-33
Ghi nhận kết quả bảo trì" as U33
  usecase "UC-ASSET-34
Quản lý bảo hành" as U34
  usecase "UC-ASSET-35
Quản lý vật tư tiêu hao" as U35
  usecase "UC-ASSET-36
Nhập kho vật tư" as U36
  usecase "UC-ASSET-37
Xuất vật tư" as U37
  usecase "UC-ASSET-38
Hoàn trả vật tư" as U38
  usecase "UC-ASSET-39
Cảnh báo tồn kho thấp" as U39
  usecase "UC-ASSET-40
Theo dõi khấu hao hoặc giá trị còn lại khi áp dụng" as U40
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

### 14.5. Cụm use case 41–46

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
actor "Thành viên tenant" as A1
actor "Vai trò chuyên trách theo mô-đun" as A2
actor "Quản trị viên đơn vị trực thuộc" as A3
usecase "Nhóm ASSET — cụm 5" as PKG5
rectangle "Quản lý tài sản và hậu cần — Cụm 5/5" {
  usecase "UC-ASSET-41
Đề nghị thanh lý tài sản" as U41
  usecase "UC-ASSET-42
Phê duyệt thanh lý" as U42
  usecase "UC-ASSET-43
Thực hiện thanh lý hoặc ngừng sử dụng" as U43
  usecase "UC-ASSET-44
Lưu trữ hồ sơ tài sản" as U44
  usecase "UC-ASSET-45
Khôi phục hồ sơ tài sản" as U45
  usecase "UC-ASSET-46
Xuất danh sách và báo cáo tài sản" as U46
}
A1 --> PKG5
A2 --> PKG5
A3 --> PKG5
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
