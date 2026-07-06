# BỘ ĐẶC TẢ 21 NHÓM USE CASE — OPERATIONS HUB

## 1. Mục đích

Bộ tài liệu này mô tả toàn bộ 21 nhóm Use Case của Operations Hub theo định hướng nền tảng SaaS đa tổ chức dành cho tổ chức sinh viên. hệ thống vận hành tham chiếu được sử dụng như trường hợp tham chiếu nghiệp vụ, không phải cấu hình bắt buộc của nền tảng.

## 2. Cấu trúc bộ tài liệu

- `00_README.md`: chỉ mục và quy ước.
- `00_Actors.md`: danh mục actor chính thức.
- `00_Use_Case_Tong_Quat.md`: sơ đồ tổng quát 21 nhóm Use Case.
- `00_Traceability_Matrix.md`: ma trận phụ thuộc và truy vết.
- `00_Sub_UseCase_Catalog.md`: danh mục hợp nhất toàn bộ use case thành phần, không giới hạn 10 use case mỗi nhóm.
- `01_...` đến `21_...`: đặc tả từng nhóm Use Case.
- `Operations_Hub_21UC_Combined.md`: bản hợp nhất để đọc hoặc chuyển đổi định dạng.

## 3. Danh mục 21 nhóm Use Case

| STT | Mã | Tên | Miền | Mức ưu tiên phát triển |
|---:|---|---|---|---|
| 1 | [`UC-TENANT`](./01_UC-TENANT.md) | Quản trị nền tảng SaaS và tenant | Nền tảng SaaS | Nền tảng bắt buộc |
| 2 | [`UC-AUTH`](./02_UC-AUTH.md) | Xác thực và quản lý phiên | Danh tính và truy cập | Nền tảng bắt buộc |
| 3 | [`UC-USER`](./03_UC-USER.md) | Quản lý tài khoản người dùng | Danh tính và truy cập | Nền tảng bắt buộc |
| 4 | [`UC-RBAC`](./04_UC-RBAC.md) | Quản lý vai trò và phân quyền | Danh tính và truy cập | Nền tảng bắt buộc |
| 5 | [`UC-ORG`](./05_UC-ORG.md) | Quản lý thông tin và cơ cấu tổ chức | Quản trị tổ chức | Nền tảng bắt buộc |
| 6 | [`UC-BRAND`](./06_UC-BRAND.md) | Quản lý branding và giao diện tổ chức | Quản trị tổ chức | Nền tảng bắt buộc |
| 7 | [`UC-MODULE`](./07_UC-MODULE.md) | Cấu hình module và quy trình nghiệp vụ | Quản trị tổ chức | Nền tảng bắt buộc |
| 8 | [`UC-SETTING`](./08_UC-SETTING.md) | Thiết lập cá nhân | Trải nghiệm người dùng | Năng lực dùng chung |
| 9 | [`UC-MEMBER`](./09_UC-MEMBER.md) | Quản lý thành viên và membership | Nhân sự tổ chức | Nền tảng bắt buộc |
| 10 | [`UC-REQUEST`](./10_UC-REQUEST.md) | Quản lý đơn từ và yêu cầu nội bộ | Quy trình nghiệp vụ | Mô-đun vận hành |
| 11 | [`UC-DOCUMENT`](./11_UC-DOCUMENT.md) | Quản lý văn bản, biểu mẫu và mẫu tài liệu | Quản trị nội dung | Mô-đun vận hành |
| 12 | [`UC-FINANCE`](./12_UC-FINANCE.md) | Quản lý tài chính và ngân sách | Tài chính nội bộ | Mô-đun vận hành |
| 13 | [`UC-ASSET`](./13_UC-ASSET.md) | Quản lý tài sản và hậu cần | Tài sản và hậu cần | Mô-đun vận hành |
| 14 | [`UC-MEETING`](./14_UC-MEETING.md) | Quản lý cuộc họp, sự kiện và chuyên cần | Hoạt động tổ chức | Mô-đun vận hành |
| 15 | [`UC-DISCIPLINE`](./15_UC-DISCIPLINE.md) | Quản lý kỷ luật và KPI | Quản trị thành viên | Mô-đun vận hành |
| 16 | [`UC-EVALUATION`](./16_UC-EVALUATION.md) | Quản lý đánh giá thành viên | Quản trị thành viên | Mô-đun vận hành |
| 17 | [`UC-COMPETITION`](./17_UC-COMPETITION.md) | Quản lý cuộc thi, thành tích và ghi nhận | Hoạt động tổ chức | Mô-đun vận hành |
| 18 | [`UC-NOTIFICATION`](./18_UC-NOTIFICATION.md) | Quản lý thông báo và truyền thông nội bộ | Truyền thông nội bộ | Năng lực dùng chung |
| 19 | [`UC-DASHBOARD`](./19_UC-DASHBOARD.md) | Dashboard, báo cáo và xuất dữ liệu | Báo cáo và phân tích | Năng lực dùng chung |
| 20 | [`UC-AI`](./20_UC-AI.md) | Trợ lý AI và AI Gateway | Hỗ trợ thông minh | Năng lực mở rộng có kiểm soát |
| 21 | [`UC-AUDIT`](./21_UC-AUDIT.md) | Nhật ký hệ thống và truy vết hoạt động | Quản trị và tuân thủ | Nền tảng bắt buộc |

## 4. Nguyên tắc bao phủ use case thành phần

1. Không giới hạn mỗi nhóm Use Case ở 10 use case thành phần.
2. Mỗi nhóm phải liệt kê toàn bộ use case có thể nhận diện hợp lý trong ranh giới sản phẩm, actor và quy tắc nghiệp vụ hiện hành.
3. Danh mục là baseline mở: nghiệp vụ mới được bổ sung mà không xóa hoặc gộp cơ học chỉ để giữ một số lượng cố định.
4. Use case thành phần phải biểu diễn mục tiêu có ý nghĩa đối với actor; endpoint API, nút giao diện và thao tác CRUD kỹ thuật không mặc nhiên là use case độc lập.
5. Các sơ đồ chi tiết được chia cụm khi số lượng use case lớn để bảo đảm khả năng đọc.

## 5. Quy ước mô hình

1. `User` là danh tính đăng nhập toàn cục.
2. `Tenant/Organization` là tổ chức sử dụng Operations Hub.
3. `Membership` là quan hệ giữa User và Tenant.
4. `Role` được gán cho Membership trong tenant, không gán trực tiếp cho User ở phạm vi toàn nền tảng.
5. Mọi nghiệp vụ phải chạy trong tenant context hợp lệ.
6. Dữ liệu nghiệp vụ, tệp, bản xuất, cache, thông báo và audit phải duy trì ranh giới tenant.
7. Platform Admin và Tenant Admin là hai actor độc lập.
8. Branding và module là cấu hình theo tenant; không được làm thay đổi logic phân quyền nền tảng.
9. Mức ưu tiên phát triển chỉ hỗ trợ lập lộ trình; cả 21 nhóm đều thuộc phạm vi sản phẩm tổng thể.

## 6. Quy ước mã

- Nhóm Use Case: `UC-<DOMAIN>`.
- Use Case thành phần: `UC-<DOMAIN>-NN`.
- Actor: `ACT-<ROLE>`.
- Tiêu chí chấp nhận: `AC-<DOMAIN>-NN`.
- Quy tắc nghiệp vụ chi tiết có thể ánh xạ sang `BR-NNN` trong tài liệu quy tắc nghiệp vụ.

## 7. Cách sử dụng

- Dùng `00_Use_Case_Tong_Quat.md` cho sơ đồ tổng quan trong báo cáo.
- Dùng từng file `UC-*.md` để phân rã thành use case nguyên tử, sequence diagram, API và test case.
- Dùng `00_Traceability_Matrix.md` để kiểm tra phụ thuộc, actor và thực thể xuyên module.
- Không trình bày một năng lực là đã hiện thực chỉ vì đã được đặc tả trong bộ tài liệu này; trạng thái triển khai phải được theo dõi riêng.


## 8. Thống kê phiên bản 2.0

- Tổng số nhóm Use Case: **21**.
- Tổng số use case thành phần đã nhận diện: **841**.
- Số use case thành phần theo nhóm: xem `00_Sub_UseCase_Catalog.md` và `00_Traceability_Matrix.md`.
