# DANH MỤC PHẦN TỬ NGHIỆP VỤ — OPERATIONS HUB V3

Danh mục này thay thế cách gọi toàn bộ 841 phần tử là “Use Case”. V3 phân loại theo bản chất UML và vẫn giữ mã V2 để truy vết.

## 1. Thống kê

| Loại | Số lượng |
|---|---:|
| Use Case mục tiêu actor | 741 |
| Hành vi dùng chung `<<include>>` | 42 |
| Luồng điều kiện `<<extend>>` | 27 |
| Quy tắc/yêu cầu hệ thống | 31 |
| **Tổng phần tử nghiệp vụ** | **841** |

## 2. Danh mục

| Nhóm | Mã V3 | Mã V2 | Tên | Loại | Actor trực tiếp / nguồn kích hoạt |
|---|---|---|---|---|---|
| `UC-TENANT` | `UC-TENANT-01` | `UC-TENANT-01` | Bắt đầu đăng ký tổ chức | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập<br>`ACT-ORG-REGISTRANT` — Người đăng ký tổ chức |
| `UC-TENANT` | `UC-TENANT-02` | `UC-TENANT-02` | Lưu nháp hồ sơ đăng ký tổ chức | Use Case mục tiêu actor | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức |
| `UC-TENANT` | `INC-TENANT-03` | `UC-TENANT-03` | Kiểm tra điều kiện đăng ký tổ chức | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-TENANT` | `INC-TENANT-04` | `UC-TENANT-04` | Chuẩn hóa và kiểm tra tên định danh | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-TENANT` | `INC-TENANT-05` | `UC-TENANT-05` | Chuẩn hóa và kiểm tra slug | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-TENANT` | `INC-TENANT-06` | `UC-TENANT-06` | Kiểm tra tên miền hoặc subdomain mong muốn | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-TENANT` | `UC-TENANT-07` | `UC-TENANT-07` | Cung cấp thông tin người đại diện | Use Case mục tiêu actor | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức |
| `UC-TENANT` | `UC-TENANT-08` | `UC-TENANT-08` | Tải lên minh chứng đăng ký tổ chức | Use Case mục tiêu actor | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức |
| `UC-TENANT` | `UC-TENANT-09` | `UC-TENANT-09` | Xác minh email hoặc số điện thoại người đăng ký | Use Case mục tiêu actor | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-TENANT` | `UC-TENANT-10` | `UC-TENANT-10` | Chấp nhận điều khoản sử dụng nền tảng | Use Case mục tiêu actor | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức |
| `UC-TENANT` | `UC-TENANT-11` | `UC-TENANT-11` | Gửi hồ sơ đăng ký tổ chức | Use Case mục tiêu actor | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức |
| `UC-TENANT` | `UC-TENANT-12` | `UC-TENANT-12` | Theo dõi trạng thái hồ sơ đăng ký | Use Case mục tiêu actor | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức |
| `UC-TENANT` | `UC-TENANT-13` | `UC-TENANT-13` | Yêu cầu bổ sung hoặc chỉnh sửa hồ sơ đăng ký | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-14` | `UC-TENANT-14` | Bổ sung hồ sơ đăng ký theo yêu cầu | Use Case mục tiêu actor | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức |
| `UC-TENANT` | `UC-TENANT-15` | `UC-TENANT-15` | Rút hồ sơ đăng ký tổ chức | Use Case mục tiêu actor | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức |
| `UC-TENANT` | `UC-TENANT-16` | `UC-TENANT-16` | Tiếp nhận và phân công xử lý hồ sơ đăng ký | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-17` | `UC-TENANT-17` | Thẩm định hồ sơ đăng ký tổ chức | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-18` | `UC-TENANT-18` | Phê duyệt hồ sơ đăng ký tổ chức | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-19` | `UC-TENANT-19` | Từ chối hồ sơ đăng ký tổ chức | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `INC-TENANT-20` | `UC-TENANT-20` | Khởi tạo tenant | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-TENANT` | `INC-TENANT-21` | `UC-TENANT-21` | Khởi tạo cấu hình mặc định cho tenant | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-TENANT` | `INC-TENANT-22` | `UC-TENANT-22` | Khởi tạo role và permission mặc định | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-TENANT` | `INC-TENANT-23` | `UC-TENANT-23` | Thiết lập Owner ban đầu | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-TENANT` | `UC-TENANT-24` | `UC-TENANT-24` | Kích hoạt tenant | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-25` | `UC-TENANT-25` | Chọn gói dịch vụ hoặc phạm vi sử dụng | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-26` | `UC-TENANT-26` | Cấu hình thông tin thanh toán và liên hệ dịch vụ | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-TENANT` | `UC-TENANT-27` | `UC-TENANT-27` | Xem danh sách tenant ở cấp nền tảng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-28` | `UC-TENANT-28` | Tìm kiếm và lọc tenant | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-29` | `UC-TENANT-29` | Xem chi tiết tenant | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-30` | `UC-TENANT-30` | Cập nhật hồ sơ tenant | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-31` | `UC-TENANT-31` | Xem lịch sử trạng thái tenant | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-32` | `UC-TENANT-32` | Tạm khóa tenant | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-33` | `UC-TENANT-33` | Khôi phục tenant bị tạm khóa | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-34` | `UC-TENANT-34` | Lưu trữ tenant | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-35` | `UC-TENANT-35` | Khôi phục tenant đã lưu trữ | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-36` | `UC-TENANT-36` | Chuyển quyền sở hữu tenant | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-37` | `UC-TENANT-37` | Bổ nhiệm thêm Owner | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-38` | `UC-TENANT-38` | Thu hồi quyền Owner không phải Owner cuối cùng | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-39` | `UC-TENANT-39` | Xuất dữ liệu tenant | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-40` | `UC-TENANT-40` | Yêu cầu đóng tenant | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-41` | `UC-TENANT-41` | Hủy yêu cầu đóng tenant | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-42` | `UC-TENANT-42` | Đưa tenant vào thời gian chờ xóa | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-43` | `UC-TENANT-43` | Khôi phục tenant trong thời gian chờ xóa | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-44` | `UC-TENANT-44` | Thực hiện xóa hoặc ẩn danh dữ liệu tenant theo chính sách | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-45` | `UC-TENANT-45` | Quản lý thời hạn lưu giữ dữ liệu tenant | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-46` | `UC-TENANT-46` | Cấu hình subdomain tenant | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-47` | `UC-TENANT-47` | Cấu hình tên miền tùy chỉnh | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-TENANT` | `UC-TENANT-48` | `UC-TENANT-48` | Xác minh tên miền tùy chỉnh | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-TENANT` | `UC-TENANT-49` | `UC-TENANT-49` | Quản lý trạng thái dịch vụ hoặc hạn mức tenant | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-50` | `UC-TENANT-50` | Ghi nhận hỗ trợ quản trị có kiểm soát đối với tenant | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-AUTH` | `UC-AUTH-01` | `UC-AUTH-01` | Đăng ký tài khoản bằng email | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập |
| `UC-AUTH` | `UC-AUTH-02` | `UC-AUTH-02` | Đăng ký tài khoản bằng định danh được hỗ trợ | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập |
| `UC-AUTH` | `UC-AUTH-03` | `UC-AUTH-03` | Xác minh địa chỉ email | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `EXT-AUTH-04` | `UC-AUTH-04` | Gửi lại liên kết xác minh | Luồng điều kiện `<<extend>>` | `ACT-GUEST` — Khách truy cập<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `UC-AUTH-05` | `UC-AUTH-05` | Đăng nhập bằng mật khẩu | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập |
| `UC-AUTH` | `UC-AUTH-06` | `UC-AUTH-06` | Đăng nhập bằng SSO hoặc OAuth | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `UC-AUTH-07` | `UC-AUTH-07` | Đăng nhập không mật khẩu bằng liên kết dùng một lần | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `UC-AUTH-08` | `UC-AUTH-08` | Bắt đầu xác thực đa yếu tố | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `UC-AUTH-09` | `UC-AUTH-09` | Đăng ký phương thức MFA | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `INC-AUTH-10` | `UC-AUTH-10` | Xác minh mã MFA | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-AUTH` | `UC-AUTH-11` | `UC-AUTH-11` | Quản lý mã khôi phục MFA | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `UC-AUTH-12` | `UC-AUTH-12` | Tắt hoặc thay đổi phương thức MFA | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `UC-AUTH-13` | `UC-AUTH-13` | Thực hiện xác thực tăng cường cho thao tác nhạy cảm | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `UC-AUTH-14` | `UC-AUTH-14` | Đăng xuất phiên hiện tại | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-15` | `UC-AUTH-15` | Đăng xuất khỏi tất cả thiết bị | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `INC-AUTH-16` | `UC-AUTH-16` | Làm mới access token hoặc phiên | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-AUTH` | `EXT-AUTH-17` | `UC-AUTH-17` | Khôi phục phiên hợp lệ | Luồng điều kiện `<<extend>>` | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-18` | `UC-AUTH-18` | Yêu cầu quên mật khẩu | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `UC-AUTH-19` | `UC-AUTH-19` | Đặt lại mật khẩu | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUTH` | `UC-AUTH-20` | `UC-AUTH-20` | Đổi mật khẩu khi biết mật khẩu hiện tại | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-21` | `UC-AUTH-21` | Buộc đổi mật khẩu ở lần đăng nhập tiếp theo | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `REQ-AUTH-22` | `UC-AUTH-22` | Khóa đăng nhập sau nhiều lần thất bại | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUTH` | `EXT-AUTH-23` | `UC-AUTH-23` | Mở khóa đăng nhập theo chính sách | Luồng điều kiện `<<extend>>` | `ACT-GUEST` — Khách truy cập |
| `UC-AUTH` | `INC-AUTH-24` | `UC-AUTH-24` | Xác minh CAPTCHA hoặc chống tự động hóa | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-AUTH` | `UC-AUTH-25` | `UC-AUTH-25` | Xem danh sách phiên đăng nhập | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-26` | `UC-AUTH-26` | Thu hồi một phiên đăng nhập | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-27` | `UC-AUTH-27` | Đánh dấu thiết bị tin cậy | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-28` | `UC-AUTH-28` | Thu hồi thiết bị tin cậy | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-29` | `UC-AUTH-29` | Chấp nhận lời mời tham gia tenant qua liên kết | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập |
| `UC-AUTH` | `UC-AUTH-30` | `UC-AUTH-30` | Từ chối lời mời tham gia tenant | Use Case mục tiêu actor | `ACT-GUEST` — Khách truy cập |
| `UC-AUTH` | `UC-AUTH-31` | `UC-AUTH-31` | Chọn tenant context sau khi đăng nhập | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-32` | `UC-AUTH-32` | Chuyển tenant context khi đang hoạt động | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AUTH` | `REQ-AUTH-33` | `UC-AUTH-33` | Xử lý phiên khi tenant hoặc membership bị khóa | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUTH` | `REQ-AUTH-34` | `UC-AUTH-34` | Xử lý tài khoản chưa xác minh | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUTH` | `REQ-AUTH-35` | `UC-AUTH-35` | Xử lý thông tin xác thực hết hạn hoặc không hợp lệ | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUTH` | `REQ-AUTH-36` | `UC-AUTH-36` | Ghi nhận sự kiện xác thực và cảnh báo bảo mật | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-USER` | `UC-USER-01` | `UC-USER-01` | Xem hồ sơ tài khoản cá nhân | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-02` | `UC-USER-02` | Cập nhật họ tên và thông tin liên hệ | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-03` | `UC-USER-03` | Cập nhật ảnh đại diện | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-04` | `UC-USER-04` | Thay đổi địa chỉ email đăng nhập | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-05` | `UC-USER-05` | Xác minh địa chỉ email mới | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-06` | `UC-USER-06` | Thay đổi tên người dùng khi chính sách cho phép | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-07` | `UC-USER-07` | Xem danh sách tenant đang tham gia | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-08` | `UC-USER-08` | Xem trạng thái tài khoản toàn cục | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-09` | `UC-USER-09` | Xem lịch sử hoạt động tài khoản cá nhân | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-10` | `UC-USER-10` | Xuất dữ liệu cá nhân | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-11` | `UC-USER-11` | Yêu cầu đóng tài khoản | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-12` | `UC-USER-12` | Hủy yêu cầu đóng tài khoản | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-13` | `UC-USER-13` | Khôi phục tài khoản trong thời gian chờ đóng | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-14` | `UC-USER-14` | Quản trị viên xem danh sách người dùng nền tảng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-15` | `UC-USER-15` | Tìm kiếm và lọc người dùng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-16` | `UC-USER-16` | Xem chi tiết người dùng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-17` | `UC-USER-17` | Tạo tài khoản người dùng bởi quản trị viên | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-18` | `UC-USER-18` | Kích hoạt tài khoản người dùng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-19` | `UC-USER-19` | Vô hiệu hóa tài khoản người dùng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-20` | `UC-USER-20` | Khóa tài khoản vì lý do bảo mật | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-21` | `UC-USER-21` | Mở khóa tài khoản | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-22` | `UC-USER-22` | Reset mật khẩu bởi quản trị viên có quyền | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-23` | `UC-USER-23` | Buộc người dùng đổi mật khẩu | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-24` | `UC-USER-24` | Liên kết tài khoản với danh tính bên ngoài | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-25` | `UC-USER-25` | Gỡ liên kết danh tính bên ngoài | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `UC-USER-26` | `UC-USER-26` | Hợp nhất tài khoản trùng lặp | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-27` | `UC-USER-27` | Tách tài khoản bị liên kết sai | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-28` | `UC-USER-28` | Ẩn danh dữ liệu cá nhân theo chính sách | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-29` | `UC-USER-29` | Khôi phục tài khoản đã vô hiệu hóa | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-30` | `UC-USER-30` | Quản lý trạng thái đồng ý hoặc điều khoản của người dùng | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-USER` | `REQ-USER-31` | `UC-USER-31` | Xử lý người dùng không còn membership nào | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-USER` | `UC-USER-32` | `UC-USER-32` | Xem và quản lý platform role của người dùng cấp nền tảng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-USER` | `REQ-USER-33` | `UC-USER-33` | Ghi audit thay đổi tài khoản nhạy cảm | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-RBAC` | `UC-RBAC-01` | `UC-RBAC-01` | Xem danh mục permission của nền tảng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-RBAC` | `UC-RBAC-02` | `UC-RBAC-02` | Xem role mặc định của tenant | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-03` | `UC-RBAC-03` | Xem chi tiết role | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-04` | `UC-RBAC-04` | Tạo role tùy chỉnh | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-05` | `UC-RBAC-05` | Sao chép role | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-06` | `UC-RBAC-06` | Cập nhật tên và mô tả role | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-07` | `UC-RBAC-07` | Kích hoạt role | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-08` | `UC-RBAC-08` | Vô hiệu hóa role | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-09` | `UC-RBAC-09` | Lưu trữ role | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-10` | `UC-RBAC-10` | Xóa role chưa được sử dụng | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-11` | `UC-RBAC-11` | Gán permission cho role | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-12` | `UC-RBAC-12` | Thu hồi permission khỏi role | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-13` | `UC-RBAC-13` | Gán nhiều permission theo nhóm | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-14` | `UC-RBAC-14` | So sánh hai role | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-15` | `UC-RBAC-15` | Xuất ma trận role và permission | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-RBAC` | `UC-RBAC-16` | `UC-RBAC-16` | Nhập ma trận role và permission | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-RBAC` | `UC-RBAC-17` | `UC-RBAC-17` | Gán role cho membership | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-18` | `UC-RBAC-18` | Thu hồi role khỏi membership | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-19` | `UC-RBAC-19` | Gán role hàng loạt | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-20` | `UC-RBAC-20` | Gán role có thời hạn | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-21` | `UC-RBAC-21` | Gia hạn role có thời hạn | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-22` | `UC-RBAC-22` | Gán role theo đơn vị trực thuộc | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-23` | `UC-RBAC-23` | Gán quyền theo phạm vi tài nguyên | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-24` | `UC-RBAC-24` | Cấu hình role kế thừa khi chính sách cho phép | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-25` | `UC-RBAC-25` | Cấu hình quy tắc từ chối hoặc ngoại lệ quyền | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-26` | `UC-RBAC-26` | Ủy quyền quản trị role trong phạm vi giới hạn | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-27` | `UC-RBAC-27` | Kiểm tra xung đột phân tách trách nhiệm | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `REQ-RBAC-28` | `UC-RBAC-28` | Ngăn người dùng tự nâng quyền | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-RBAC` | `UC-RBAC-29` | `UC-RBAC-29` | Mô phỏng quyền của membership | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-30` | `UC-RBAC-30` | Giải thích quyền hiệu lực | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `INC-RBAC-31` | `UC-RBAC-31` | Kiểm tra quyền đối với một hành động cụ thể | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-RBAC` | `UC-RBAC-32` | `UC-RBAC-32` | Rà soát quyền định kỳ | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-RBAC` | `UC-RBAC-33` | `UC-RBAC-33` | Xác nhận lại quyền truy cập | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-RBAC` | `UC-RBAC-34` | `UC-RBAC-34` | Thu hồi quyền không còn cần thiết | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-35` | `UC-RBAC-35` | Thiết lập quyền khẩn cấp có thời hạn | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-RBAC` | `UC-RBAC-36` | `UC-RBAC-36` | Kết thúc quyền khẩn cấp | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-RBAC` | `UC-RBAC-37` | `UC-RBAC-37` | Xem lịch sử thay đổi role và permission | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-RBAC` | `UC-RBAC-38` | `UC-RBAC-38` | Quản lý role cấp nền tảng tách biệt role tenant | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-ORG` | `UC-ORG-01` | `UC-ORG-01` | Xem hồ sơ tổ chức | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-02` | `UC-ORG-02` | Cập nhật tên và mô tả tổ chức | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-03` | `UC-ORG-03` | Cập nhật thông tin liên hệ tổ chức | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-04` | `UC-ORG-04` | Cập nhật thông tin pháp lý hoặc định danh nội bộ | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-05` | `UC-ORG-05` | Quản lý trường dữ liệu mở rộng của tổ chức | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-06` | `UC-ORG-06` | Xem cơ cấu tổ chức hiện tại | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-07` | `UC-ORG-07` | Xem cơ cấu tổ chức theo thời điểm lịch sử | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-08` | `UC-ORG-08` | Tạo đơn vị trực thuộc | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-09` | `UC-ORG-09` | Cập nhật đơn vị trực thuộc | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-10` | `UC-ORG-10` | Sắp xếp thứ tự đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-11` | `UC-ORG-11` | Di chuyển đơn vị trong cơ cấu | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-12` | `UC-ORG-12` | Thiết lập đơn vị cha hoặc con | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `INC-ORG-13` | `UC-ORG-13` | Kiểm tra và ngăn quan hệ vòng lặp | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-ORG` | `UC-ORG-14` | `UC-ORG-14` | Vô hiệu hóa đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `EXT-ORG-15` | `UC-ORG-15` | Kích hoạt lại đơn vị | Luồng điều kiện `<<extend>>` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-16` | `UC-ORG-16` | Lưu trữ đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-17` | `UC-ORG-17` | Chuyển dữ liệu trước khi đóng đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-18` | `UC-ORG-18` | Hợp nhất đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-19` | `UC-ORG-19` | Tách đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-20` | `UC-ORG-20` | Tạo loại đơn vị | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-21` | `UC-ORG-21` | Quản lý chức vụ hoặc vị trí | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-22` | `UC-ORG-22` | Tạo chức vụ | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-23` | `UC-ORG-23` | Cập nhật chức vụ | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-24` | `UC-ORG-24` | Vô hiệu hóa chức vụ | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-25` | `UC-ORG-25` | Gán người quản lý đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-26` | `UC-ORG-26` | Kết thúc nhiệm kỳ người quản lý đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-27` | `UC-ORG-27` | Quản lý nhiệm kỳ tổ chức | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-28` | `UC-ORG-28` | Quản lý năm học hoặc kỳ hoạt động | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-29` | `UC-ORG-29` | Nhập cơ cấu tổ chức | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-30` | `UC-ORG-30` | Xuất cơ cấu tổ chức | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-31` | `UC-ORG-31` | Sao chép cấu trúc từ mẫu nền tảng | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-32` | `UC-ORG-32` | Cấu hình quy tắc đặt mã đơn vị | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-33` | `UC-ORG-33` | Xem lịch sử thay đổi cơ cấu | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-ORG` | `INC-ORG-34` | `UC-ORG-34` | Kiểm tra tính toàn vẹn cơ cấu tổ chức | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-BRAND` | `UC-BRAND-01` | `UC-BRAND-01` | Xem cấu hình branding hiện hành | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-02` | `UC-BRAND-02` | Tạo bản nháp branding | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-03` | `UC-BRAND-03` | Cập nhật tên hiển thị tổ chức | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-04` | `UC-BRAND-04` | Tải lên logo chính | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-BRAND` | `UC-BRAND-05` | `UC-BRAND-05` | Tải lên logo rút gọn | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-BRAND` | `UC-BRAND-06` | `UC-BRAND-06` | Tải lên favicon hoặc biểu tượng ứng dụng | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-BRAND` | `UC-BRAND-07` | `UC-BRAND-07` | Cấu hình màu chủ đạo | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-08` | `UC-BRAND-08` | Cấu hình bảng màu phụ | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-09` | `UC-BRAND-09` | Cấu hình kiểu chữ được hỗ trợ | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-10` | `UC-BRAND-10` | Cấu hình chế độ sáng và tối | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-11` | `UC-BRAND-11` | Cấu hình ảnh nền hoặc ảnh đăng nhập | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-12` | `UC-BRAND-12` | Cấu hình trang đăng nhập theo tenant | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-13` | `UC-BRAND-13` | Cấu hình nội dung chân trang và thông tin liên hệ | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-14` | `UC-BRAND-14` | Cấu hình thuật ngữ hiển thị theo tổ chức | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-15` | `UC-BRAND-15` | Cấu hình nhãn menu và tên mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-16` | `UC-BRAND-16` | Cấu hình branding email | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-17` | `UC-BRAND-17` | Cấu hình branding thông báo | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-18` | `UC-BRAND-18` | Cấu hình branding tài liệu và bản xuất | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-19` | `UC-BRAND-19` | Quản lý thư viện tài sản thương hiệu | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-20` | `UC-BRAND-20` | Tải lên tài sản thương hiệu | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-BRAND` | `UC-BRAND-21` | `UC-BRAND-21` | Thay thế tài sản thương hiệu | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-BRAND` | `UC-BRAND-22` | `UC-BRAND-22` | Lưu trữ tài sản thương hiệu | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `INC-BRAND-23` | `UC-BRAND-23` | Kiểm tra loại và kích thước tệp branding | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-BRAND` | `INC-BRAND-24` | `UC-BRAND-24` | Kiểm tra độ tương phản và khả năng đọc | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-BRAND` | `UC-BRAND-25` | `UC-BRAND-25` | Xem trước branding | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-26` | `UC-BRAND-26` | Xuất bản branding | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-BRAND` | `UC-BRAND-27` | `UC-BRAND-27` | Lên lịch xuất bản branding | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-BRAND` | `EXT-BRAND-28` | `UC-BRAND-28` | Khôi phục phiên bản branding trước | Luồng điều kiện `<<extend>>` | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-BRAND` | `UC-BRAND-29` | `UC-BRAND-29` | Xem lịch sử phiên bản branding | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-30` | `UC-BRAND-30` | Sao chép branding từ mẫu nền tảng | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-31` | `UC-BRAND-31` | Đặt lại branding về mặc định nền tảng | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-BRAND` | `UC-BRAND-32` | `UC-BRAND-32` | Cấu hình subdomain hiển thị thương hiệu | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-BRAND` | `UC-BRAND-33` | `UC-BRAND-33` | Cấu hình tên miền thương hiệu tùy chỉnh | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-BRAND` | `UC-BRAND-34` | `UC-BRAND-34` | Xác minh tên miền thương hiệu | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-BRAND` | `INC-BRAND-35` | `UC-BRAND-35` | Kiểm tra branding khi chuyển tenant context | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-MODULE` | `UC-MODULE-01` | `UC-MODULE-01` | Xem danh mục mô-đun nền tảng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-02` | `UC-MODULE-02` | Xem chi tiết mô-đun | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-03` | `UC-MODULE-03` | Xem điều kiện gói dịch vụ của mô-đun | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `UC-MODULE-04` | `UC-MODULE-04` | Xem phụ thuộc giữa các mô-đun | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-05` | `UC-MODULE-05` | Yêu cầu kích hoạt mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `UC-MODULE-06` | `UC-MODULE-06` | Phê duyệt yêu cầu kích hoạt mô-đun | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-07` | `UC-MODULE-07` | Kích hoạt mô-đun cho tenant | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-08` | `UC-MODULE-08` | Kích hoạt mô-đun dùng thử | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `UC-MODULE-09` | `UC-MODULE-09` | Kết thúc thời gian dùng thử mô-đun | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `UC-MODULE-10` | `UC-MODULE-10` | Vô hiệu hóa mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `UC-MODULE-11` | `UC-MODULE-11` | Lên lịch kích hoạt mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `UC-MODULE-12` | `UC-MODULE-12` | Lên lịch vô hiệu hóa mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `EXT-MODULE-13` | `UC-MODULE-13` | Kích hoạt lại mô-đun | Luồng điều kiện `<<extend>>` | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `UC-MODULE-14` | `UC-MODULE-14` | Kiểm tra điều kiện trước khi kích hoạt | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `INC-MODULE-15` | `UC-MODULE-15` | Kiểm tra phụ thuộc trước khi vô hiệu hóa | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-MODULE` | `INC-MODULE-16` | `UC-MODULE-16` | Thực hiện bước khởi tạo dữ liệu mô-đun | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-MODULE` | `INC-MODULE-17` | `UC-MODULE-17` | Thực hiện migration cấu hình mô-đun | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-MODULE` | `EXT-MODULE-18` | `UC-MODULE-18` | Hoàn tác cấu hình khi kích hoạt thất bại | Luồng điều kiện `<<extend>>` | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-19` | `UC-MODULE-19` | Cấu hình tham số mô-đun theo tenant | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-20` | `UC-MODULE-20` | Cấu hình mô-đun theo đơn vị | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-21` | `UC-MODULE-21` | Giới hạn mô-đun theo role hoặc permission | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-22` | `UC-MODULE-22` | Quản lý feature flag theo tenant | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-23` | `UC-MODULE-23` | Áp dụng mẫu cấu hình mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-24` | `UC-MODULE-24` | Sao chép cấu hình mô-đun có kiểm soát | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-25` | `UC-MODULE-25` | Nhập cấu hình mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-26` | `UC-MODULE-26` | Xuất cấu hình mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-27` | `UC-MODULE-27` | Quản lý phiên bản mô-đun | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-28` | `UC-MODULE-28` | Nâng cấp phiên bản mô-đun | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-29` | `UC-MODULE-29` | Ghim phiên bản mô-đun khi được hỗ trợ | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-30` | `UC-MODULE-30` | Xem tình trạng hoạt động của mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-31` | `UC-MODULE-31` | Theo dõi mức sử dụng và hạn mức mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `EXT-MODULE-32` | `UC-MODULE-32` | Cảnh báo vượt hạn mức mô-đun | Luồng điều kiện `<<extend>>` | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-MODULE` | `UC-MODULE-33` | `UC-MODULE-33` | Quản lý dữ liệu khi mô-đun bị tắt | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-34` | `UC-MODULE-34` | Khôi phục truy cập dữ liệu khi bật lại mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-35` | `UC-MODULE-35` | Ngừng cung cấp mô-đun đã lỗi thời | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-36` | `UC-MODULE-36` | Xem lịch sử thay đổi cấu hình mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-SETTING` | `UC-SETTING-01` | `UC-SETTING-01` | Xem thiết lập cá nhân | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-02` | `UC-SETTING-02` | Cấu hình ngôn ngữ giao diện | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-03` | `UC-SETTING-03` | Cấu hình múi giờ | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-04` | `UC-SETTING-04` | Cấu hình định dạng ngày giờ | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-05` | `UC-SETTING-05` | Cấu hình định dạng số và tiền tệ | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-06` | `UC-SETTING-06` | Chọn giao diện sáng hoặc tối | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-07` | `UC-SETTING-07` | Cấu hình mật độ hiển thị | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-08` | `UC-SETTING-08` | Cấu hình kích thước chữ | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-09` | `UC-SETTING-09` | Cấu hình tùy chọn trợ năng | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-10` | `UC-SETTING-10` | Cấu hình độ tương phản cá nhân | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-11` | `UC-SETTING-11` | Cấu hình phím tắt | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-12` | `UC-SETTING-12` | Cấu hình trang bắt đầu mặc định | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-13` | `UC-SETTING-13` | Chọn tenant mặc định | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-SETTING` | `UC-SETTING-14` | `UC-SETTING-14` | Chọn dashboard mặc định | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-SETTING` | `UC-SETTING-15` | `UC-SETTING-15` | Lưu bộ lọc thường dùng | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-16` | `UC-SETTING-16` | Quản lý cột hiển thị của bảng | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-17` | `UC-SETTING-17` | Lưu chế độ sắp xếp và phân trang | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-18` | `UC-SETTING-18` | Cấu hình kênh nhận thông báo | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-SETTING` | `UC-SETTING-19` | `UC-SETTING-19` | Cấu hình loại thông báo được nhận | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-SETTING` | `UC-SETTING-20` | `UC-SETTING-20` | Cấu hình giờ yên lặng | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-SETTING` | `UC-SETTING-21` | `UC-SETTING-21` | Cấu hình bản tin tổng hợp | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-SETTING` | `UC-SETTING-22` | `UC-SETTING-22` | Cấu hình nhắc việc cá nhân | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-SETTING` | `UC-SETTING-23` | `UC-SETTING-23` | Cấu hình quyền hiển thị thông tin cá nhân | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-SETTING` | `UC-SETTING-24` | `UC-SETTING-24` | Quản lý tài khoản hoặc lịch tích hợp | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-25` | `UC-SETTING-25` | Đồng bộ thiết lập trên nhiều thiết bị | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-26` | `UC-SETTING-26` | Đặt lại thiết lập cá nhân | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-27` | `UC-SETTING-27` | Xuất thiết lập cá nhân | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-28` | `UC-SETTING-28` | Khôi phục thiết lập từ bản sao | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-MEMBER` | `UC-MEMBER-01` | `UC-MEMBER-01` | Xem danh sách thành viên | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-MEMBER` | `UC-MEMBER-02` | `UC-MEMBER-02` | Tìm kiếm và lọc thành viên | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-MEMBER` | `UC-MEMBER-03` | `UC-MEMBER-03` | Xem chi tiết hồ sơ thành viên | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-MEMBER` | `UC-MEMBER-04` | `UC-MEMBER-04` | Mời người dùng vào tổ chức | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `EXT-MEMBER-05` | `UC-MEMBER-05` | Gửi lại lời mời thành viên | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-06` | `UC-MEMBER-06` | Hủy lời mời thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-07` | `UC-MEMBER-07` | Chấp nhận lời mời thành viên | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-MEMBER` | `UC-MEMBER-08` | `UC-MEMBER-08` | Từ chối lời mời thành viên | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-MEMBER` | `UC-MEMBER-09` | `UC-MEMBER-09` | Thêm người dùng hiện có vào tổ chức | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-10` | `UC-MEMBER-10` | Tạo hồ sơ thành viên tạm chưa liên kết User | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-11` | `UC-MEMBER-11` | Liên kết User với hồ sơ thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-12` | `UC-MEMBER-12` | Gỡ liên kết User bị sai | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-13` | `UC-MEMBER-13` | Nhập danh sách thành viên hàng loạt | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `INC-MEMBER-14` | `UC-MEMBER-14` | Kiểm tra và xử lý bản ghi trùng lặp | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-MEMBER` | `UC-MEMBER-15` | `UC-MEMBER-15` | Cập nhật hồ sơ thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-16` | `UC-MEMBER-16` | Thành viên tự cập nhật hồ sơ được phép | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-MEMBER` | `UC-MEMBER-17` | `UC-MEMBER-17` | Phê duyệt thay đổi hồ sơ thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-18` | `UC-MEMBER-18` | Gán thành viên vào đơn vị | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc |
| `UC-MEMBER` | `UC-MEMBER-19` | `UC-MEMBER-19` | Chuyển thành viên giữa các đơn vị | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc |
| `UC-MEMBER` | `UC-MEMBER-20` | `UC-MEMBER-20` | Gán chức vụ cho thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc |
| `UC-MEMBER` | `UC-MEMBER-21` | `UC-MEMBER-21` | Kết thúc chức vụ của thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc |
| `UC-MEMBER` | `UC-MEMBER-22` | `UC-MEMBER-22` | Gán vai trò nghiệp vụ cho membership | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-23` | `UC-MEMBER-23` | Gắn nhãn hoặc nhóm thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-24` | `UC-MEMBER-24` | Quản lý kỹ năng thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-25` | `UC-MEMBER-25` | Quản lý kinh nghiệm và định hướng | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-26` | `UC-MEMBER-26` | Quản lý tài liệu hồ sơ thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-27` | `UC-MEMBER-27` | Kích hoạt membership | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-28` | `UC-MEMBER-28` | Tạm ngưng membership | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-29` | `UC-MEMBER-29` | Khôi phục membership bị tạm ngưng | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-30` | `UC-MEMBER-30` | Kết thúc membership | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-31` | `UC-MEMBER-31` | Tái gia nhập tổ chức | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-MEMBER` | `UC-MEMBER-32` | `UC-MEMBER-32` | Chuyển trạng thái thành viên sang cựu thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-33` | `UC-MEMBER-33` | Bổ nhiệm Owner hoặc quản trị viên hợp lệ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc |
| `UC-MEMBER` | `REQ-MEMBER-34` | `UC-MEMBER-34` | Ngăn loại bỏ Owner cuối cùng | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-MEMBER` | `UC-MEMBER-35` | `UC-MEMBER-35` | Xem lịch sử membership | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-MEMBER` | `UC-MEMBER-36` | `UC-MEMBER-36` | Xem lịch sử đơn vị và chức vụ | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-MEMBER` | `UC-MEMBER-37` | `UC-MEMBER-37` | Xuất danh sách thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-38` | `UC-MEMBER-38` | Cập nhật thành viên hàng loạt | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-39` | `UC-MEMBER-39` | Ẩn danh dữ liệu thành viên theo chính sách | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-40` | `UC-MEMBER-40` | Lưu trữ hồ sơ thành viên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-41` | `UC-MEMBER-41` | Khôi phục hồ sơ thành viên đã lưu trữ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-REQUEST` | `UC-REQUEST-01` | `UC-REQUEST-01` | Xem danh mục loại yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-02` | `UC-REQUEST-02` | Tạo loại yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-03` | `UC-REQUEST-03` | Cập nhật loại yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-04` | `UC-REQUEST-04` | Vô hiệu hóa loại yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-05` | `UC-REQUEST-05` | Cấu hình biểu mẫu yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-06` | `UC-REQUEST-06` | Cấu hình quy trình phê duyệt yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-07` | `UC-REQUEST-07` | Tạo bản nháp yêu cầu | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-08` | `UC-REQUEST-08` | Cập nhật bản nháp yêu cầu | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-09` | `UC-REQUEST-09` | Đính kèm tệp vào yêu cầu | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `INC-REQUEST-10` | `UC-REQUEST-10` | Kiểm tra dữ liệu yêu cầu | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-REQUEST` | `UC-REQUEST-11` | `UC-REQUEST-11` | Gửi yêu cầu | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-12` | `UC-REQUEST-12` | Xem yêu cầu của cá nhân | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-13` | `UC-REQUEST-13` | Xem chi tiết yêu cầu | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-14` | `UC-REQUEST-14` | Tìm kiếm và lọc yêu cầu | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-15` | `UC-REQUEST-15` | Rút yêu cầu đang chờ xử lý | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-16` | `UC-REQUEST-16` | Hủy yêu cầu theo quyền | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-17` | `UC-REQUEST-17` | Sao chép yêu cầu | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-18` | `UC-REQUEST-18` | Chuyển loại yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-19` | `UC-REQUEST-19` | Yêu cầu người gửi bổ sung thông tin | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-20` | `UC-REQUEST-20` | Bổ sung và gửi lại yêu cầu | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-21` | `UC-REQUEST-21` | Phân công người xử lý | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-22` | `UC-REQUEST-22` | Chuyển người xử lý | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-23` | `UC-REQUEST-23` | Ủy quyền phê duyệt yêu cầu | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt |
| `UC-REQUEST` | `UC-REQUEST-24` | `UC-REQUEST-24` | Thực hiện bước phê duyệt | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt |
| `UC-REQUEST` | `UC-REQUEST-25` | `UC-REQUEST-25` | Phê duyệt yêu cầu | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt |
| `UC-REQUEST` | `UC-REQUEST-26` | `UC-REQUEST-26` | Từ chối yêu cầu | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt |
| `UC-REQUEST` | `UC-REQUEST-27` | `UC-REQUEST-27` | Trả yêu cầu để chỉnh sửa | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt |
| `UC-REQUEST` | `UC-REQUEST-28` | `UC-REQUEST-28` | Thực hiện phê duyệt nhiều cấp | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt |
| `UC-REQUEST` | `REQ-REQUEST-29` | `UC-REQUEST-29` | Kiểm tra nguyên tắc không tự phê duyệt | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-REQUEST` | `UC-REQUEST-30` | `UC-REQUEST-30` | Theo dõi thời hạn xử lý | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `EXT-REQUEST-31` | `UC-REQUEST-31` | Gửi nhắc việc hoặc cảnh báo quá hạn | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-32` | `UC-REQUEST-32` | Thêm bình luận trao đổi | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-33` | `UC-REQUEST-33` | Thêm ghi chú nội bộ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-34` | `UC-REQUEST-34` | Xem lịch sử trạng thái yêu cầu | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-35` | `UC-REQUEST-35` | Liên kết yêu cầu với hồ sơ nghiệp vụ khác | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-36` | `UC-REQUEST-36` | Sinh văn bản từ yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-37` | `UC-REQUEST-37` | Tạo giao dịch tài chính từ yêu cầu được duyệt | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-38` | `UC-REQUEST-38` | Tạo tác vụ hoặc sự kiện từ yêu cầu được duyệt | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `EXT-REQUEST-39` | `UC-REQUEST-39` | Mở lại yêu cầu đã đóng theo quyền | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-40` | `UC-REQUEST-40` | Đóng yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-41` | `UC-REQUEST-41` | Lưu trữ yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-42` | `UC-REQUEST-42` | Xuất danh sách hoặc báo cáo yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-REQUEST` | `UC-REQUEST-43` | `UC-REQUEST-43` | Xử lý hàng loạt yêu cầu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-01` | `UC-DOCUMENT-01` | Xem danh mục loại văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-02` | `UC-DOCUMENT-02` | Tạo loại văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-03` | `UC-DOCUMENT-03` | Cập nhật loại văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-04` | `UC-DOCUMENT-04` | Quản lý mẫu tài liệu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-05` | `UC-DOCUMENT-05` | Tạo mẫu tài liệu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-06` | `UC-DOCUMENT-06` | Cập nhật mẫu tài liệu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-07` | `UC-DOCUMENT-07` | Quản lý biến dữ liệu trong mẫu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-08` | `UC-DOCUMENT-08` | Xem trước mẫu tài liệu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-DOCUMENT` | `UC-DOCUMENT-09` | `UC-DOCUMENT-09` | Tạo văn bản nháp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-10` | `UC-DOCUMENT-10` | Tải lên văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-DOCUMENT` | `UC-DOCUMENT-11` | `UC-DOCUMENT-11` | Sinh văn bản từ mẫu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-12` | `UC-DOCUMENT-12` | Sinh hàng loạt văn bản từ dữ liệu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-13` | `UC-DOCUMENT-13` | Cập nhật metadata văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-14` | `UC-DOCUMENT-14` | Chỉnh sửa nội dung văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-15` | `UC-DOCUMENT-15` | Quản lý phiên bản văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-16` | `UC-DOCUMENT-16` | So sánh hai phiên bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `EXT-DOCUMENT-17` | `UC-DOCUMENT-17` | Khôi phục phiên bản trước | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-18` | `UC-DOCUMENT-18` | Gắn chủ sở hữu hoặc đơn vị phụ trách | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-19` | `UC-DOCUMENT-19` | Phân quyền truy cập văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-20` | `UC-DOCUMENT-20` | Chia sẻ văn bản nội bộ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-DOCUMENT` | `UC-DOCUMENT-21` | `UC-DOCUMENT-21` | Gửi văn bản để rà soát | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-DOCUMENT` | `UC-DOCUMENT-22` | `UC-DOCUMENT-22` | Bình luận hoặc góp ý văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-DOCUMENT` | `UC-DOCUMENT-23` | `UC-DOCUMENT-23` | Phân công người rà soát | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-DOCUMENT` | `UC-DOCUMENT-24` | `UC-DOCUMENT-24` | Phê duyệt văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-DOCUMENT` | `UC-DOCUMENT-25` | `UC-DOCUMENT-25` | Từ chối hoặc yêu cầu sửa văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-DOCUMENT` | `UC-DOCUMENT-26` | `UC-DOCUMENT-26` | Đánh số văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-27` | `UC-DOCUMENT-27` | Ký số hoặc xác nhận ký khi tích hợp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-DOCUMENT` | `UC-DOCUMENT-28` | `UC-DOCUMENT-28` | Ban hành văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-DOCUMENT` | `UC-DOCUMENT-29` | `UC-DOCUMENT-29` | Công bố văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-30` | `UC-DOCUMENT-30` | Phân phối văn bản đến đối tượng nhận | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-31` | `UC-DOCUMENT-31` | Xác nhận đã đọc văn bản | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-DOCUMENT` | `UC-DOCUMENT-32` | `UC-DOCUMENT-32` | Liên kết văn bản với yêu cầu hoặc nghiệp vụ khác | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-33` | `UC-DOCUMENT-33` | Quản lý tệp đính kèm văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-34` | `UC-DOCUMENT-34` | Tải xuống hoặc xuất văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-DOCUMENT` | `UC-DOCUMENT-35` | `UC-DOCUMENT-35` | Đóng dấu hoặc watermark bản xuất | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-36` | `UC-DOCUMENT-36` | Tìm kiếm metadata văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-DOCUMENT` | `UC-DOCUMENT-37` | `UC-DOCUMENT-37` | Tìm kiếm toàn văn khi được hỗ trợ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-DOCUMENT` | `UC-DOCUMENT-38` | `UC-DOCUMENT-38` | Theo dõi hiệu lực và ngày hết hạn văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `EXT-DOCUMENT-39` | `UC-DOCUMENT-39` | Gửi nhắc văn bản sắp hết hiệu lực | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-40` | `UC-DOCUMENT-40` | Lưu trữ văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-DOCUMENT` | `UC-DOCUMENT-41` | `UC-DOCUMENT-41` | Khôi phục văn bản lưu trữ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DOCUMENT` | `UC-DOCUMENT-42` | `UC-DOCUMENT-42` | Đặt thời hạn lưu giữ văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-DOCUMENT` | `UC-DOCUMENT-43` | `UC-DOCUMENT-43` | Đặt legal hold hoặc khóa xóa | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-DOCUMENT` | `UC-DOCUMENT-44` | `UC-DOCUMENT-44` | Yêu cầu xóa văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-DOCUMENT` | `UC-DOCUMENT-45` | `UC-DOCUMENT-45` | Xóa hoặc ẩn danh văn bản theo chính sách | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-DOCUMENT` | `UC-DOCUMENT-46` | `UC-DOCUMENT-46` | Xem lịch sử truy cập và thay đổi văn bản | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-FINANCE` | `UC-FINANCE-01` | `UC-FINANCE-01` | Quản lý danh mục thu chi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-02` | `UC-FINANCE-02` | Quản lý tài khoản hoặc nguồn tiền | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-03` | `UC-FINANCE-03` | Quản lý quỹ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-04` | `UC-FINANCE-04` | Thiết lập số dư đầu kỳ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-05` | `UC-FINANCE-05` | Tạo kế hoạch ngân sách | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-06` | `UC-FINANCE-06` | Tạo dòng ngân sách | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-07` | `UC-FINANCE-07` | Phân bổ ngân sách theo đơn vị hoặc hoạt động | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-08` | `UC-FINANCE-08` | Điều chỉnh ngân sách | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-09` | `UC-FINANCE-09` | Phê duyệt ngân sách | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-FINANCE` | `UC-FINANCE-10` | `UC-FINANCE-10` | Khóa ngân sách theo kỳ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-11` | `UC-FINANCE-11` | Tạo khoản thu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-12` | `UC-FINANCE-12` | Xác nhận đã thu tiền | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-13` | `UC-FINANCE-13` | Tạo đề nghị chi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-FINANCE` | `UC-FINANCE-14` | `UC-FINANCE-14` | Tạo yêu cầu tạm ứng | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-FINANCE` | `UC-FINANCE-15` | `UC-FINANCE-15` | Duyệt yêu cầu tạm ứng | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-FINANCE` | `UC-FINANCE-16` | `UC-FINANCE-16` | Ghi nhận giải ngân tạm ứng | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-17` | `UC-FINANCE-17` | Quyết toán tạm ứng | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-18` | `UC-FINANCE-18` | Tạo yêu cầu hoàn ứng hoặc hoàn tiền | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-FINANCE` | `UC-FINANCE-19` | `UC-FINANCE-19` | Tạo giao dịch chi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-20` | `UC-FINANCE-20` | Đính kèm hóa đơn hoặc chứng từ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-FINANCE` | `UC-FINANCE-21` | `UC-FINANCE-21` | Gửi giao dịch để phê duyệt | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-FINANCE` | `UC-FINANCE-22` | `UC-FINANCE-22` | Phân công người duyệt giao dịch | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-FINANCE` | `UC-FINANCE-23` | `UC-FINANCE-23` | Phê duyệt giao dịch tài chính | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-FINANCE` | `UC-FINANCE-24` | `UC-FINANCE-24` | Từ chối hoặc trả giao dịch để bổ sung | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-FINANCE` | `UC-FINANCE-25` | `UC-FINANCE-25` | Thực hiện phê duyệt nhiều cấp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-APPROVER` — Người phê duyệt |
| `UC-FINANCE` | `INC-FINANCE-26` | `UC-FINANCE-26` | Kiểm tra hạn mức phê duyệt | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-FINANCE` | `UC-FINANCE-27` | `UC-FINANCE-27` | Ghi nhận thanh toán hoặc nhận tiền thực tế | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-FINANCE` | `UC-FINANCE-28` | `UC-FINANCE-28` | Chuyển tiền giữa các quỹ hoặc tài khoản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-29` | `UC-FINANCE-29` | Tách một giao dịch thành nhiều khoản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-30` | `UC-FINANCE-30` | Gộp các khoản liên quan khi được phép | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-31` | `UC-FINANCE-31` | Liên kết giao dịch với yêu cầu, sự kiện hoặc tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-32` | `UC-FINANCE-32` | Cập nhật giao dịch đang chờ xử lý | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-33` | `UC-FINANCE-33` | Hủy giao dịch chưa hoàn tất | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-34` | `UC-FINANCE-34` | Đảo hoặc điều chỉnh giao dịch đã ghi nhận | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-35` | `UC-FINANCE-35` | Xóa mềm giao dịch | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-36` | `UC-FINANCE-36` | Khôi phục giao dịch bị xóa mềm | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-37` | `UC-FINANCE-37` | Nhập sao kê hoặc dữ liệu giao dịch | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-FINANCE` | `UC-FINANCE-38` | `UC-FINANCE-38` | Đối soát giao dịch | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-FINANCE` | `UC-FINANCE-39` | `UC-FINANCE-39` | Ghép giao dịch với sao kê | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-FINANCE` | `UC-FINANCE-40` | `UC-FINANCE-40` | Xử lý chênh lệch đối soát | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-FINANCE` | `UC-FINANCE-41` | `UC-FINANCE-41` | Quản lý khoản phải thu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-42` | `UC-FINANCE-42` | Quản lý khoản phải trả | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-43` | `UC-FINANCE-43` | Tạo giao dịch định kỳ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-44` | `UC-FINANCE-44` | Theo dõi thực hiện ngân sách | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `EXT-FINANCE-45` | `UC-FINANCE-45` | Cảnh báo vượt ngân sách hoặc ngưỡng chi | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-46` | `UC-FINANCE-46` | Đóng kỳ tài chính | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-FINANCE` | `EXT-FINANCE-47` | `UC-FINANCE-47` | Mở lại kỳ tài chính theo quyền | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-FINANCE` | `UC-FINANCE-48` | `UC-FINANCE-48` | Sinh phiếu thu hoặc phiếu chi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-FINANCE` | `UC-FINANCE-49` | `UC-FINANCE-49` | Xem sổ quỹ và biến động số dư | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-FINANCE` | `UC-FINANCE-50` | `UC-FINANCE-50` | Xem báo cáo thu chi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-FINANCE` | `UC-FINANCE-51` | `UC-FINANCE-51` | Xuất báo cáo tài chính nội bộ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-FINANCE` | `UC-FINANCE-52` | `UC-FINANCE-52` | Xem lịch sử phê duyệt và audit tài chính | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun<br>`ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-ASSET` | `UC-ASSET-01` | `UC-ASSET-01` | Quản lý danh mục tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-02` | `UC-ASSET-02` | Quản lý loại tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-03` | `UC-ASSET-03` | Quản lý địa điểm lưu trữ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-04` | `UC-ASSET-04` | Quản lý nhà cung cấp tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-05` | `UC-ASSET-05` | Tạo hồ sơ tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-06` | `UC-ASSET-06` | Nhập tài sản hàng loạt | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-07` | `UC-ASSET-07` | Gắn mã tài sản hoặc mã QR | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-08` | `UC-ASSET-08` | Cập nhật thông tin tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-09` | `UC-ASSET-09` | Xem chi tiết và lịch sử tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-10` | `UC-ASSET-10` | Thực hiện kiểm kê tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-11` | `UC-ASSET-11` | Lập kế hoạch kiểm kê | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-12` | `UC-ASSET-12` | Ghi nhận kết quả kiểm kê | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-13` | `UC-ASSET-13` | Xử lý chênh lệch kiểm kê | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-14` | `UC-ASSET-14` | Yêu cầu mượn tài sản | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-15` | `UC-ASSET-15` | Phê duyệt yêu cầu mượn | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-16` | `UC-ASSET-16` | Đặt trước tài sản | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `INC-ASSET-17` | `UC-ASSET-17` | Kiểm tra xung đột đặt trước | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-ASSET` | `UC-ASSET-18` | `UC-ASSET-18` | Bàn giao tài sản | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-19` | `UC-ASSET-19` | Ghi nhận tài sản đang được giữ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-20` | `UC-ASSET-20` | Gia hạn thời gian mượn | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-21` | `UC-ASSET-21` | Trả tài sản | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-22` | `UC-ASSET-22` | Ghi nhận trả trễ | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `EXT-ASSET-23` | `UC-ASSET-23` | Gửi nhắc trả tài sản | Luồng điều kiện `<<extend>>` | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-24` | `UC-ASSET-24` | Chuyển tài sản giữa địa điểm | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-25` | `UC-ASSET-25` | Chuyển người quản lý hoặc người giữ tài sản | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-26` | `UC-ASSET-26` | Cập nhật tình trạng tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-27` | `UC-ASSET-27` | Báo hỏng hoặc mất tài sản | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-28` | `UC-ASSET-28` | Ghi nhận sự cố tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-29` | `UC-ASSET-29` | Xử lý trách nhiệm bồi thường | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-30` | `UC-ASSET-30` | Tạo yêu cầu bảo trì | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-31` | `UC-ASSET-31` | Phê duyệt bảo trì | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-32` | `UC-ASSET-32` | Lập lịch bảo trì | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-33` | `UC-ASSET-33` | Ghi nhận kết quả bảo trì | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-34` | `UC-ASSET-34` | Quản lý bảo hành | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-35` | `UC-ASSET-35` | Quản lý vật tư tiêu hao | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-36` | `UC-ASSET-36` | Nhập kho vật tư | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-37` | `UC-ASSET-37` | Xuất vật tư | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-38` | `UC-ASSET-38` | Hoàn trả vật tư | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `EXT-ASSET-39` | `UC-ASSET-39` | Cảnh báo tồn kho thấp | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-40` | `UC-ASSET-40` | Theo dõi khấu hao hoặc giá trị còn lại khi áp dụng | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-41` | `UC-ASSET-41` | Đề nghị thanh lý tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-42` | `UC-ASSET-42` | Phê duyệt thanh lý | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-43` | `UC-ASSET-43` | Thực hiện thanh lý hoặc ngừng sử dụng | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-44` | `UC-ASSET-44` | Lưu trữ hồ sơ tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-45` | `UC-ASSET-45` | Khôi phục hồ sơ tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-ASSET` | `UC-ASSET-46` | `UC-ASSET-46` | Xuất danh sách và báo cáo tài sản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-01` | `UC-MEETING-01` | Quản lý loại cuộc họp hoặc sự kiện | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-02` | `UC-MEETING-02` | Tạo cuộc họp nháp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-03` | `UC-MEETING-03` | Lên lịch cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-04` | `UC-MEETING-04` | Tạo chuỗi cuộc họp định kỳ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-05` | `UC-MEETING-05` | Chỉnh sửa một lần trong chuỗi định kỳ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-06` | `UC-MEETING-06` | Mời người tham dự | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-07` | `UC-MEETING-07` | Mời đơn vị hoặc nhóm tham dự | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-08` | `UC-MEETING-08` | Phản hồi tham dự | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-09` | `UC-MEETING-09` | Quản lý danh sách khách mời | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-10` | `UC-MEETING-10` | Tạo chương trình nghị sự | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-11` | `UC-MEETING-11` | Đính kèm tài liệu cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-12` | `UC-MEETING-12` | Đặt phòng hoặc tài nguyên | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `INC-MEETING-13` | `UC-MEETING-13` | Kiểm tra xung đột lịch | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-MEETING` | `UC-MEETING-14` | `UC-MEETING-14` | Tạo liên kết họp trực tuyến | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `EXT-MEETING-15` | `UC-MEETING-15` | Gửi thông báo và nhắc lịch | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-16` | `UC-MEETING-16` | Đổi lịch cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-17` | `UC-MEETING-17` | Hủy cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-18` | `UC-MEETING-18` | Mở phiên điểm danh | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-19` | `UC-MEETING-19` | Điểm danh thủ công | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-20` | `UC-MEETING-20` | Điểm danh bằng QR hoặc mã check-in | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-21` | `UC-MEETING-21` | Ghi nhận đi trễ hoặc về sớm | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-22` | `UC-MEETING-22` | Ghi nhận lý do vắng | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-23` | `UC-MEETING-23` | Yêu cầu xác nhận vắng có phép | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-24` | `UC-MEETING-24` | Phê duyệt vắng có phép | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-25` | `UC-MEETING-25` | Khóa kết quả chuyên cần | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-26` | `UC-MEETING-26` | Lập biên bản cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-27` | `UC-MEETING-27` | Ghi nhận quyết định cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-28` | `UC-MEETING-28` | Tạo nhiệm vụ sau cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-29` | `UC-MEETING-29` | Theo dõi nhiệm vụ sau cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-30` | `UC-MEETING-30` | Tổ chức biểu quyết hoặc thăm dò | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-31` | `UC-MEETING-31` | Công bố biên bản và kết quả | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-32` | `UC-MEETING-32` | Xác nhận đã đọc biên bản | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-33` | `UC-MEETING-33` | Thu thập phản hồi sau sự kiện | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-34` | `UC-MEETING-34` | Đồng bộ lịch cá nhân | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-35` | `UC-MEETING-35` | Liên kết cuộc họp với yêu cầu hoặc văn bản | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-36` | `UC-MEETING-36` | Tổng hợp chuyên cần theo thành viên | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-37` | `UC-MEETING-37` | Tổng hợp chuyên cần theo đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-38` | `UC-MEETING-38` | Xuất danh sách và báo cáo cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-39` | `UC-MEETING-39` | Lưu trữ cuộc họp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-MEETING` | `UC-MEETING-40` | `UC-MEETING-40` | Khôi phục cuộc họp đã lưu trữ | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-01` | `UC-DISCIPLINE-01` | Quản lý danh mục hành vi vi phạm | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-02` | `UC-DISCIPLINE-02` | Quản lý mức xử lý kỷ luật | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-03` | `UC-DISCIPLINE-03` | Cấu hình ngưỡng cảnh báo KPI hoặc chuyên cần | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `INC-DISCIPLINE-04` | `UC-DISCIPLINE-04` | Phát hiện vi phạm từ dữ liệu chuyên cần | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-DISCIPLINE` | `INC-DISCIPLINE-05` | `UC-DISCIPLINE-05` | Phát hiện vi phạm từ dữ liệu KPI | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-06` | `UC-DISCIPLINE-06` | Tạo vụ việc kỷ luật thủ công | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-07` | `UC-DISCIPLINE-07` | Gắn thành viên liên quan | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-08` | `UC-DISCIPLINE-08` | Thu thập và tải lên minh chứng | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-09` | `UC-DISCIPLINE-09` | Phân công người xử lý vụ việc | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-10` | `UC-DISCIPLINE-10` | Thông báo thành viên về vụ việc | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-11` | `UC-DISCIPLINE-11` | Yêu cầu thành viên giải trình | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-12` | `UC-DISCIPLINE-12` | Nộp giải trình | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-13` | `UC-DISCIPLINE-13` | Ghi nhận phỏng vấn hoặc phiên làm việc | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `INC-DISCIPLINE-14` | `UC-DISCIPLINE-14` | Xác minh minh chứng | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-15` | `UC-DISCIPLINE-15` | Đề xuất kết luận vụ việc | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-16` | `UC-DISCIPLINE-16` | Đề xuất hình thức xử lý | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-17` | `UC-DISCIPLINE-17` | Thực hiện phê duyệt kỷ luật | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-18` | `UC-DISCIPLINE-18` | Từ chối hoặc yêu cầu điều tra bổ sung | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-19` | `UC-DISCIPLINE-19` | Ban hành quyết định kỷ luật | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-20` | `UC-DISCIPLINE-20` | Ghi nhận điểm trừ hoặc điều chỉnh KPI | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-21` | `UC-DISCIPLINE-21` | Thiết lập kế hoạch khắc phục | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-22` | `UC-DISCIPLINE-22` | Theo dõi việc thực hiện kế hoạch khắc phục | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `EXT-DISCIPLINE-23` | `UC-DISCIPLINE-23` | Gửi cảnh báo hoặc nhắc việc | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-24` | `UC-DISCIPLINE-24` | Khiếu nại quyết định kỷ luật | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-25` | `UC-DISCIPLINE-25` | Tiếp nhận khiếu nại | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-26` | `UC-DISCIPLINE-26` | Xem xét và giải quyết khiếu nại | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-27` | `UC-DISCIPLINE-27` | Sửa đổi hoặc hủy quyết định kỷ luật | Use Case mục tiêu actor | `ACT-APPROVER` — Người phê duyệt<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-28` | `UC-DISCIPLINE-28` | Tạm đình chỉ hiệu lực quyết định khi xem xét | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-29` | `UC-DISCIPLINE-29` | Đóng vụ việc | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `EXT-DISCIPLINE-30` | `UC-DISCIPLINE-30` | Mở lại vụ việc theo quyền | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-31` | `UC-DISCIPLINE-31` | Hết hiệu lực hoặc xóa ghi nhận theo chính sách phục hồi | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `REQ-DISCIPLINE-32` | `UC-DISCIPLINE-32` | Giới hạn truy cập hồ sơ nhạy cảm | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-33` | `UC-DISCIPLINE-33` | Xuất báo cáo kỷ luật và KPI | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-34` | `UC-DISCIPLINE-34` | Xem lịch sử xử lý và audit vụ việc | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-01` | `UC-EVALUATION-01` | Tạo chu kỳ đánh giá | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-02` | `UC-EVALUATION-02` | Cập nhật chu kỳ đánh giá | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-03` | `UC-EVALUATION-03` | Kích hoạt chu kỳ đánh giá | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-04` | `UC-EVALUATION-04` | Khóa chu kỳ đánh giá | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `EXT-EVALUATION-05` | `UC-EVALUATION-05` | Mở lại chu kỳ đánh giá theo quyền | Luồng điều kiện `<<extend>>` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-06` | `UC-EVALUATION-06` | Quản lý bộ tiêu chí đánh giá | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-07` | `UC-EVALUATION-07` | Tạo tiêu chí đánh giá | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-08` | `UC-EVALUATION-08` | Cập nhật tiêu chí đánh giá | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-09` | `UC-EVALUATION-09` | Phiên bản hóa tiêu chí | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-10` | `UC-EVALUATION-10` | Cấu hình trọng số và điểm tối đa | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-11` | `UC-EVALUATION-11` | Cấu hình thang điểm | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-12` | `UC-EVALUATION-12` | Cấu hình tiêu chí theo đơn vị hoặc vai trò | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-13` | `UC-EVALUATION-13` | Phân công người đánh giá | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-14` | `UC-EVALUATION-14` | Phân công người được đánh giá | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `INC-EVALUATION-15` | `UC-EVALUATION-15` | Kiểm tra xung đột lợi ích người đánh giá | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-EVALUATION` | `UC-EVALUATION-16` | `UC-EVALUATION-16` | Thực hiện tự đánh giá | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-17` | `UC-EVALUATION-17` | Thực hiện đánh giá đồng cấp | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-18` | `UC-EVALUATION-18` | Thực hiện đánh giá của quản lý | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-19` | `UC-EVALUATION-19` | Lưu bản nháp đánh giá | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-20` | `UC-EVALUATION-20` | Đính kèm minh chứng đánh giá | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-21` | `UC-EVALUATION-21` | Gửi phiếu đánh giá | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `INC-EVALUATION-22` | `UC-EVALUATION-22` | Kiểm tra tính đầy đủ của phiếu | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-EVALUATION` | `EXT-EVALUATION-23` | `UC-EVALUATION-23` | Nhắc người chưa hoàn tất đánh giá | Luồng điều kiện `<<extend>>` | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-24` | `UC-EVALUATION-24` | Khóa phiếu đánh giá sau khi nộp | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-25` | `UC-EVALUATION-25` | Rà soát và xác minh điểm | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-26` | `UC-EVALUATION-26` | Hiệu chỉnh hoặc moderation điểm | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-27` | `UC-EVALUATION-27` | Tổ chức phiên calibration | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-28` | `UC-EVALUATION-28` | Điều chỉnh điểm có lý do | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-29` | `UC-EVALUATION-29` | Phê duyệt kết quả đánh giá | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-30` | `UC-EVALUATION-30` | Công bố kết quả đánh giá | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-31` | `UC-EVALUATION-31` | Thành viên xem kết quả | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-32` | `UC-EVALUATION-32` | Xác nhận đã nhận kết quả | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-33` | `UC-EVALUATION-33` | Gửi khiếu nại kết quả | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-34` | `UC-EVALUATION-34` | Tiếp nhận và phân công xử lý khiếu nại | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-35` | `UC-EVALUATION-35` | Giải quyết khiếu nại | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-36` | `UC-EVALUATION-36` | Cập nhật kết quả sau khiếu nại | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-37` | `UC-EVALUATION-37` | Chốt kết quả cuối cùng | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-38` | `UC-EVALUATION-38` | Nhập điểm đánh giá hàng loạt | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-39` | `UC-EVALUATION-39` | Xuất kết quả đánh giá | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-40` | `UC-EVALUATION-40` | Tổng hợp xếp loại theo đơn vị | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `UC-EVALUATION-41` | `UC-EVALUATION-41` | Tạo báo cáo phân tích đánh giá | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-EVALUATION` | `REQ-EVALUATION-42` | `UC-EVALUATION-42` | Ẩn danh người đánh giá khi chính sách yêu cầu | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-EVALUATION` | `UC-EVALUATION-43` | `UC-EVALUATION-43` | Xem lịch sử và audit thay đổi điểm | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-COMPETITION` | `UC-COMPETITION-01` | `UC-COMPETITION-01` | Quản lý loại cuộc thi hoặc hoạt động ghi nhận | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-02` | `UC-COMPETITION-02` | Tạo cuộc thi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-03` | `UC-COMPETITION-03` | Cập nhật thông tin cuộc thi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-04` | `UC-COMPETITION-04` | Cấu hình vòng thi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-05` | `UC-COMPETITION-05` | Cấu hình tiêu chí chấm | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-06` | `UC-COMPETITION-06` | Cấu hình điều kiện tham gia | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-07` | `UC-COMPETITION-07` | Mở đăng ký cuộc thi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-08` | `UC-COMPETITION-08` | Đóng đăng ký cuộc thi | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-09` | `UC-COMPETITION-09` | Đăng ký cá nhân tham gia | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-COMPETITION` | `UC-COMPETITION-10` | `UC-COMPETITION-10` | Tạo đội thi | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-COMPETITION` | `UC-COMPETITION-11` | `UC-COMPETITION-11` | Mời thành viên vào đội thi | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-COMPETITION` | `UC-COMPETITION-12` | `UC-COMPETITION-12` | Chấp nhận hoặc từ chối lời mời đội thi | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-COMPETITION` | `INC-COMPETITION-13` | `UC-COMPETITION-13` | Kiểm tra tính hợp lệ của thành viên hoặc đội | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-COMPETITION` | `UC-COMPETITION-14` | `UC-COMPETITION-14` | Nộp bài dự thi | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-COMPETITION` | `UC-COMPETITION-15` | `UC-COMPETITION-15` | Cập nhật bài dự thi trước hạn | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-COMPETITION` | `UC-COMPETITION-16` | `UC-COMPETITION-16` | Tải lên minh chứng hoặc sản phẩm | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-COMPETITION` | `UC-COMPETITION-17` | `UC-COMPETITION-17` | Rút bài dự thi | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-COMPETITION` | `INC-COMPETITION-18` | `UC-COMPETITION-18` | Kiểm tra tính đầy đủ của bài dự thi | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-COMPETITION` | `UC-COMPETITION-19` | `UC-COMPETITION-19` | Phân công giám khảo | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-20` | `UC-COMPETITION-20` | Ghi điểm bài dự thi | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-21` | `UC-COMPETITION-21` | Ghi nhận nhận xét giám khảo | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-22` | `UC-COMPETITION-22` | Hiệu chỉnh hoặc moderation điểm | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-23` | `UC-COMPETITION-23` | Xếp hạng thí sinh hoặc đội thi | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-24` | `UC-COMPETITION-24` | Chọn danh sách vào vòng tiếp theo | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-25` | `UC-COMPETITION-25` | Công bố kết quả vòng thi | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-26` | `UC-COMPETITION-26` | Công bố kết quả chung cuộc | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-27` | `UC-COMPETITION-27` | Gửi khiếu nại kết quả | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-COMPETITION` | `UC-COMPETITION-28` | `UC-COMPETITION-28` | Xử lý khiếu nại kết quả | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-29` | `UC-COMPETITION-29` | Ghi nhận giải thưởng | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-30` | `UC-COMPETITION-30` | Sinh giấy chứng nhận hoặc quyết định khen thưởng | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-31` | `UC-COMPETITION-31` | Ghi nhận thành tích cá nhân | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-32` | `UC-COMPETITION-32` | Ghi nhận thành tích đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-33` | `UC-COMPETITION-33` | Đề cử thành viên tham gia cuộc thi bên ngoài | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-34` | `UC-COMPETITION-34` | Theo dõi trạng thái cuộc thi bên ngoài | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-35` | `UC-COMPETITION-35` | Liên kết chi phí hoặc tài trợ với tài chính | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-36` | `UC-COMPETITION-36` | Liên kết tài liệu và minh chứng | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-37` | `UC-COMPETITION-37` | Xuất danh sách và báo cáo cuộc thi | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-38` | `UC-COMPETITION-38` | Lưu trữ cuộc thi | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-39` | `UC-COMPETITION-39` | Sao chép cấu hình cuộc thi | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-COMPETITION` | `UC-COMPETITION-40` | `UC-COMPETITION-40` | Quản lý quyền công bố thông tin và hình ảnh | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-01` | `UC-NOTIFICATION-01` | Quản lý mẫu thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-02` | `UC-NOTIFICATION-02` | Tạo mẫu thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-03` | `UC-NOTIFICATION-03` | Cập nhật mẫu thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-04` | `UC-NOTIFICATION-04` | Phiên bản hóa mẫu thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-05` | `UC-NOTIFICATION-05` | Cấu hình biến dữ liệu trong mẫu | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-06` | `UC-NOTIFICATION-06` | Xem trước nội dung thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-07` | `UC-NOTIFICATION-07` | Tạo thông báo nháp | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-08` | `UC-NOTIFICATION-08` | Chọn kênh gửi thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-09` | `UC-NOTIFICATION-09` | Chọn đối tượng nhận theo tenant | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-10` | `UC-NOTIFICATION-10` | Chọn đối tượng nhận theo đơn vị | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-11` | `UC-NOTIFICATION-11` | Chọn đối tượng nhận theo role hoặc nhóm | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-12` | `UC-NOTIFICATION-12` | Chọn người nhận cụ thể | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `INC-NOTIFICATION-13` | `UC-NOTIFICATION-13` | Kiểm tra phạm vi người nhận | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-14` | `UC-NOTIFICATION-14` | Gửi thông báo ngay | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-15` | `UC-NOTIFICATION-15` | Lên lịch gửi thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-16` | `UC-NOTIFICATION-16` | Sửa lịch gửi thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-17` | `UC-NOTIFICATION-17` | Hủy thông báo đã lên lịch | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-18` | `UC-NOTIFICATION-18` | Yêu cầu phê duyệt thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-19` | `UC-NOTIFICATION-19` | Phê duyệt thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-20` | `UC-NOTIFICATION-20` | Từ chối hoặc yêu cầu sửa thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-21` | `UC-NOTIFICATION-21` | Gửi thông báo trong ứng dụng | Use Case mục tiêu actor | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-22` | `UC-NOTIFICATION-22` | Gửi email | Use Case mục tiêu actor | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-23` | `UC-NOTIFICATION-23` | Gửi SMS khi được tích hợp | Use Case mục tiêu actor | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-24` | `UC-NOTIFICATION-24` | Gửi push notification | Use Case mục tiêu actor | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-25` | `UC-NOTIFICATION-25` | Gửi webhook đến hệ thống ngoài | Use Case mục tiêu actor | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `INC-NOTIFICATION-26` | `UC-NOTIFICATION-26` | Tạo thông báo từ sự kiện hệ thống | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-NOTIFICATION` | `INC-NOTIFICATION-27` | `UC-NOTIFICATION-27` | Tạo nhắc việc tự động | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-NOTIFICATION` | `INC-NOTIFICATION-28` | `UC-NOTIFICATION-28` | Tạo thông báo leo thang | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-NOTIFICATION` | `INC-NOTIFICATION-29` | `UC-NOTIFICATION-29` | Tạo bản tin tổng hợp định kỳ | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-NOTIFICATION` | `REQ-NOTIFICATION-30` | `UC-NOTIFICATION-30` | Tôn trọng giờ yên lặng và tùy chọn người dùng | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-31` | `UC-NOTIFICATION-31` | Gửi thông báo khẩn cấp theo quyền | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-32` | `UC-NOTIFICATION-32` | Theo dõi trạng thái gửi | Use Case mục tiêu actor | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `EXT-NOTIFICATION-33` | `UC-NOTIFICATION-33` | Xử lý gửi thất bại và retry | Luồng điều kiện `<<extend>>` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `EXT-NOTIFICATION-34` | `UC-NOTIFICATION-34` | Xử lý email bounce hoặc địa chỉ không hợp lệ | Luồng điều kiện `<<extend>>` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-35` | `UC-NOTIFICATION-35` | Đánh dấu thông báo đã đọc | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-36` | `UC-NOTIFICATION-36` | Đánh dấu tất cả đã đọc | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-37` | `UC-NOTIFICATION-37` | Xác nhận đã nhận hoặc đã hiểu thông báo | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-38` | `UC-NOTIFICATION-38` | Tìm kiếm và lọc thông báo | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-39` | `UC-NOTIFICATION-39` | Lưu trữ hoặc xóa thông báo cá nhân | Use Case mục tiêu actor | `ACT-TENANT-MEMBER` — Thành viên tenant |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-40` | `UC-NOTIFICATION-40` | Quản lý bản dịch nội dung thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-NOTIFICATION` | `REQ-NOTIFICATION-41` | `UC-NOTIFICATION-41` | Kiểm soát tần suất và chống spam | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-42` | `UC-NOTIFICATION-42` | Xuất báo cáo hiệu quả gửi thông báo | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-01` | `UC-DASHBOARD-01` | Xem dashboard cá nhân | Use Case mục tiêu actor | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-02` | `UC-DASHBOARD-02` | Xem dashboard tenant | Use Case mục tiêu actor | `ACT-TENANT-OWNER` — Chủ sở hữu tenant<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-DASHBOARD` | `UC-DASHBOARD-03` | `UC-DASHBOARD-03` | Xem dashboard đơn vị | Use Case mục tiêu actor | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc |
| `UC-DASHBOARD` | `UC-DASHBOARD-04` | `UC-DASHBOARD-04` | Xem dashboard quản trị nền tảng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-DASHBOARD` | `UC-DASHBOARD-05` | `UC-DASHBOARD-05` | Chọn khoảng thời gian báo cáo | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-06` | `UC-DASHBOARD-06` | Lọc dashboard theo đơn vị | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-07` | `UC-DASHBOARD-07` | Lọc dashboard theo mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-08` | `UC-DASHBOARD-08` | Lọc dashboard theo trạng thái nghiệp vụ | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-09` | `UC-DASHBOARD-09` | Xem chỉ số tổng hợp | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-10` | `UC-DASHBOARD-10` | Xem biểu đồ xu hướng | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-11` | `UC-DASHBOARD-11` | Xem danh sách cảnh báo và công việc cần xử lý | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-12` | `UC-DASHBOARD-12` | Đi sâu từ chỉ số đến dữ liệu chi tiết | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-13` | `UC-DASHBOARD-13` | So sánh hai kỳ báo cáo | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-14` | `UC-DASHBOARD-14` | So sánh các đơn vị trong cùng tenant | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-15` | `UC-DASHBOARD-15` | Xem độ mới và nguồn của dữ liệu | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-16` | `UC-DASHBOARD-16` | Làm mới dữ liệu dashboard | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-17` | `UC-DASHBOARD-17` | Thêm widget vào dashboard | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-18` | `UC-DASHBOARD-18` | Xóa widget khỏi dashboard | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-19` | `UC-DASHBOARD-19` | Sắp xếp lại widget | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-20` | `UC-DASHBOARD-20` | Thay đổi kích thước widget | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-21` | `UC-DASHBOARD-21` | Cấu hình tham số widget | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-22` | `UC-DASHBOARD-22` | Lưu chế độ xem dashboard | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-23` | `UC-DASHBOARD-23` | Chia sẻ chế độ xem trong phạm vi được phép | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-24` | `UC-DASHBOARD-24` | Sao chép dashboard từ mẫu | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-25` | `UC-DASHBOARD-25` | Tạo dashboard tùy chỉnh | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-26` | `UC-DASHBOARD-26` | Quản lý danh mục metric | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-27` | `UC-DASHBOARD-27` | Cấu hình mục tiêu KPI | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-28` | `UC-DASHBOARD-28` | Cấu hình ngưỡng cảnh báo | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-29` | `UC-DASHBOARD-29` | Nhận cảnh báo khi vượt ngưỡng | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-30` | `UC-DASHBOARD-30` | Xuất dữ liệu widget | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-31` | `UC-DASHBOARD-31` | Xuất dashboard sang PDF hoặc hình ảnh | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-32` | `UC-DASHBOARD-32` | Xuất báo cáo CSV hoặc bảng tính | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-33` | `UC-DASHBOARD-33` | Lên lịch gửi báo cáo định kỳ | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-34` | `UC-DASHBOARD-34` | Tạo báo cáo liên mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun |
| `UC-DASHBOARD` | `UC-DASHBOARD-35` | `UC-DASHBOARD-35` | Xem phân tích bất thường | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-DASHBOARD` | `UC-DASHBOARD-36` | `UC-DASHBOARD-36` | Xem AI insight khi được bật | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-DASHBOARD` | `UC-DASHBOARD-37` | `UC-DASHBOARD-37` | Ghi nhận phản hồi về insight | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-DASHBOARD` | `UC-DASHBOARD-38` | `UC-DASHBOARD-38` | Xem lỗi hoặc dữ liệu thiếu của dashboard | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-DASHBOARD` | `INC-DASHBOARD-39` | `UC-DASHBOARD-39` | Kiểm tra quyền dữ liệu trên dashboard | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-DASHBOARD` | `UC-DASHBOARD-40` | `UC-DASHBOARD-40` | Lưu lịch sử phiên bản dashboard | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-01` | `UC-AI-01` | Xem danh sách nhà cung cấp AI | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `UC-AI-02` | `UC-AI-02` | Cấu hình nhà cung cấp AI | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `UC-AI-03` | `UC-AI-03` | Cập nhật thông tin kết nối AI | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `UC-AI-04` | `UC-AI-04` | Kiểm tra kết nối nhà cung cấp AI | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `UC-AI-05` | `UC-AI-05` | Chọn mô hình AI mặc định | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `UC-AI-06` | `UC-AI-06` | Cấu hình mô hình theo use case | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-07` | `UC-AI-07` | Cấu hình fallback nhà cung cấp | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `UC-AI-08` | `UC-AI-08` | Quản lý khóa hoặc secret AI an toàn | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `UC-AI-09` | `UC-AI-09` | Quản lý prompt template | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-10` | `UC-AI-10` | Tạo prompt template | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-11` | `UC-AI-11` | Cập nhật và phiên bản hóa prompt | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-12` | `UC-AI-12` | Kiểm thử prompt trên dữ liệu mẫu | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-13` | `UC-AI-13` | Sinh bản nháp nội dung | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-14` | `UC-AI-14` | Tóm tắt văn bản hoặc cuộc họp | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-15` | `UC-AI-15` | Trích xuất dữ liệu có cấu trúc từ tài liệu | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-16` | `UC-AI-16` | Phân loại yêu cầu hoặc văn bản | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-17` | `UC-AI-17` | Gợi ý hành động tiếp theo | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-18` | `UC-AI-18` | Dịch nội dung | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-19` | `UC-AI-19` | Viết lại nội dung theo giọng điệu | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-20` | `UC-AI-20` | Tìm kiếm ngữ nghĩa trong dữ liệu được phép | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-21` | `UC-AI-21` | Hỏi đáp trên kho tri thức tổ chức | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-22` | `UC-AI-22` | Phân tích xu hướng vận hành | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-23` | `UC-AI-23` | Sinh insight báo cáo | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `INC-AI-24` | `UC-AI-24` | Phát hiện rủi ro hoặc bất thường | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-AI` | `UC-AI-25` | `UC-AI-25` | Gợi ý tiêu chí hoặc mẫu biểu | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-26` | `UC-AI-26` | Kiểm duyệt nội dung đầu vào hoặc đầu ra | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `REQ-AI-27` | `UC-AI-27` | Yêu cầu người dùng xác nhận trước khi áp dụng kết quả AI | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AI` | `UC-AI-28` | `UC-AI-28` | Chỉnh sửa và chấp nhận kết quả AI | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-29` | `UC-AI-29` | Từ chối kết quả AI | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `UC-AI-30` | `UC-AI-30` | Gửi phản hồi chất lượng kết quả AI | Use Case mục tiêu actor | `ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `INC-AI-31` | `UC-AI-31` | Ẩn hoặc loại bỏ dữ liệu nhạy cảm trước khi gửi AI | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-AI` | `INC-AI-32` | `UC-AI-32` | Kiểm tra chính sách dữ liệu đối với yêu cầu AI | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-AI` | `REQ-AI-33` | `UC-AI-33` | Chặn gửi dữ liệu không được phép | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AI` | `UC-AI-34` | `UC-AI-34` | Cấu hình opt-in hoặc opt-out AI theo tenant | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-35` | `UC-AI-35` | Giới hạn AI theo role hoặc mô-đun | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-36` | `UC-AI-36` | Cấu hình hạn mức sử dụng AI | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-37` | `UC-AI-37` | Theo dõi chi phí và số lượt sử dụng | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `UC-AI-38` | `UC-AI-38` | Xem lịch sử yêu cầu AI | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-PLATFORM-USER` — Người dùng nền tảng |
| `UC-AI` | `REQ-AI-39` | `UC-AI-39` | Ghi audit metadata yêu cầu AI | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AI` | `UC-AI-40` | `UC-AI-40` | Xóa dữ liệu AI theo chính sách lưu giữ | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant |
| `UC-AI` | `EXT-AI-41` | `UC-AI-41` | Xử lý lỗi hoặc timeout nhà cung cấp | Luồng điều kiện `<<extend>>` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `EXT-AI-42` | `UC-AI-42` | Chuyển sang nhà cung cấp dự phòng | Luồng điều kiện `<<extend>>` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `UC-AI-43` | `UC-AI-43` | Đánh giá chất lượng mô hình định kỳ | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AI` | `UC-AI-44` | `UC-AI-44` | So sánh kết quả giữa các mô hình | Use Case mục tiêu actor | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài |
| `UC-AUDIT` | `REQ-AUDIT-01` | `UC-AUDIT-01` | Ghi audit cho sự kiện xác thực | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-02` | `UC-AUDIT-02` | Ghi audit cho thay đổi tenant | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-03` | `UC-AUDIT-03` | Ghi audit cho thay đổi membership | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-04` | `UC-AUDIT-04` | Ghi audit cho thay đổi role và permission | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-05` | `UC-AUDIT-05` | Ghi audit cho thay đổi module và branding | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-06` | `UC-AUDIT-06` | Ghi audit cho nghiệp vụ phê duyệt | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-07` | `UC-AUDIT-07` | Ghi audit cho giao dịch tài chính | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-08` | `UC-AUDIT-08` | Ghi audit cho truy cập dữ liệu nhạy cảm | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-09` | `UC-AUDIT-09` | Ghi security event | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-10` | `UC-AUDIT-10` | Ghi platform administration event | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-11` | `UC-AUDIT-11` | Chuẩn hóa schema audit event | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `UC-AUDIT-12` | `UC-AUDIT-12` | Gắn correlation ID cho chuỗi hành động | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `INC-AUDIT-13` | `UC-AUDIT-13` | Ghi dữ liệu trước và sau thay đổi khi được phép | Hành vi dùng chung `<<include>>` | Hệ thống; `<<include>>` |
| `UC-AUDIT` | `REQ-AUDIT-14` | `UC-AUDIT-14` | Ẩn dữ liệu nhạy cảm trong audit | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `UC-AUDIT-15` | `UC-AUDIT-15` | Xem danh sách audit event | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-16` | `UC-AUDIT-16` | Tìm kiếm và lọc audit event | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-17` | `UC-AUDIT-17` | Xem chi tiết audit event | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-18` | `UC-AUDIT-18` | Xem lịch sử thay đổi của một thực thể | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-19` | `UC-AUDIT-19` | Xem hoạt động của một người dùng | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-20` | `UC-AUDIT-20` | Xem hoạt động trong một tenant | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng<br>`ACT-TENANT-OWNER` — Chủ sở hữu tenant |
| `UC-AUDIT` | `UC-AUDIT-21` | `UC-AUDIT-21` | Xem log cấp nền tảng theo quyền | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-22` | `UC-AUDIT-22` | Truy vết một quy trình bằng correlation ID | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-23` | `UC-AUDIT-23` | Xuất audit log | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-24` | `UC-AUDIT-24` | Lên lịch báo cáo audit | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-25` | `UC-AUDIT-25` | Tạo cảnh báo từ quy tắc audit | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-26` | `UC-AUDIT-26` | Cấu hình quy tắc phát hiện hành vi bất thường | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-27` | `UC-AUDIT-27` | Gửi audit event đến SIEM hoặc hệ thống ngoài | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-28` | `UC-AUDIT-28` | Điều tra sự cố từ audit trail | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-29` | `UC-AUDIT-29` | Gắn nhãn hoặc ghi chú điều tra | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-30` | `UC-AUDIT-30` | Quản lý chain of custody cho bằng chứng | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-31` | `UC-AUDIT-31` | Kiểm chứng tính toàn vẹn log | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `EXT-AUDIT-32` | `UC-AUDIT-32` | Cảnh báo khi phát hiện sửa đổi trái phép | Luồng điều kiện `<<extend>>` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-33` | `UC-AUDIT-33` | Đặt thời hạn lưu giữ audit | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-AUDIT` | `UC-AUDIT-34` | `UC-AUDIT-34` | Lưu trữ audit log lâu dài | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-AUDIT` | `UC-AUDIT-35` | `UC-AUDIT-35` | Áp dụng legal hold cho audit | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-AUDIT` | `UC-AUDIT-36` | `UC-AUDIT-36` | Xóa audit log hết hạn theo chính sách | Use Case mục tiêu actor | `ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-AUDIT` | `REQ-AUDIT-37` | `UC-AUDIT-37` | Giới hạn quyền xem audit | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `REQ-AUDIT-38` | `UC-AUDIT-38` | Ghi audit cho việc xem hoặc xuất audit nhạy cảm | Quy tắc/yêu cầu hệ thống | Hệ thống/chính sách |
| `UC-AUDIT` | `UC-AUDIT-39` | `UC-AUDIT-39` | Xem dashboard tuân thủ và audit | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
| `UC-AUDIT` | `UC-AUDIT-40` | `UC-AUDIT-40` | Kiểm tra độ đầy đủ của audit theo loại sự kiện | Use Case mục tiêu actor | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát<br>`ACT-TENANT-ADMIN` — Quản trị viên tenant<br>`ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng |
