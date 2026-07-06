# MA TRẬN ACTOR — USE CASE TRỰC TIẾP V3

Ma trận chỉ liệt kê association trực tiếp. `INC-*` và `REQ-*` không được gán actor trực tiếp.

| Nhóm | Actor | Mã V3 | Use Case / luồng điều kiện |
|---|---|---|---|
| `UC-TENANT` | `ACT-GUEST` — Khách truy cập | `UC-TENANT-01` | Bắt đầu đăng ký tổ chức |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-01` | Bắt đầu đăng ký tổ chức |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-02` | Lưu nháp hồ sơ đăng ký tổ chức |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-07` | Cung cấp thông tin người đại diện |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-08` | Tải lên minh chứng đăng ký tổ chức |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-09` | Xác minh email hoặc số điện thoại người đăng ký |
| `UC-TENANT` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-TENANT-09` | Xác minh email hoặc số điện thoại người đăng ký |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-10` | Chấp nhận điều khoản sử dụng nền tảng |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-11` | Gửi hồ sơ đăng ký tổ chức |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-12` | Theo dõi trạng thái hồ sơ đăng ký |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-13` | Yêu cầu bổ sung hoặc chỉnh sửa hồ sơ đăng ký |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-14` | Bổ sung hồ sơ đăng ký theo yêu cầu |
| `UC-TENANT` | `ACT-ORG-REGISTRANT` — Người đăng ký tổ chức | `UC-TENANT-15` | Rút hồ sơ đăng ký tổ chức |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-16` | Tiếp nhận và phân công xử lý hồ sơ đăng ký |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-17` | Thẩm định hồ sơ đăng ký tổ chức |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-18` | Phê duyệt hồ sơ đăng ký tổ chức |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-19` | Từ chối hồ sơ đăng ký tổ chức |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-24` | Kích hoạt tenant |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-25` | Chọn gói dịch vụ hoặc phạm vi sử dụng |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-26` | Cấu hình thông tin thanh toán và liên hệ dịch vụ |
| `UC-TENANT` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-TENANT-26` | Cấu hình thông tin thanh toán và liên hệ dịch vụ |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-27` | Xem danh sách tenant ở cấp nền tảng |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-28` | Tìm kiếm và lọc tenant |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-29` | Xem chi tiết tenant |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-30` | Cập nhật hồ sơ tenant |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-31` | Xem lịch sử trạng thái tenant |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-32` | Tạm khóa tenant |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-33` | Khôi phục tenant bị tạm khóa |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-34` | Lưu trữ tenant |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-35` | Khôi phục tenant đã lưu trữ |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-36` | Chuyển quyền sở hữu tenant |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-37` | Bổ nhiệm thêm Owner |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-38` | Thu hồi quyền Owner không phải Owner cuối cùng |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-39` | Xuất dữ liệu tenant |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-40` | Yêu cầu đóng tenant |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-41` | Hủy yêu cầu đóng tenant |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-42` | Đưa tenant vào thời gian chờ xóa |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-43` | Khôi phục tenant trong thời gian chờ xóa |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-44` | Thực hiện xóa hoặc ẩn danh dữ liệu tenant theo chính sách |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-45` | Quản lý thời hạn lưu giữ dữ liệu tenant |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-46` | Cấu hình subdomain tenant |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-47` | Cấu hình tên miền tùy chỉnh |
| `UC-TENANT` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-TENANT-47` | Cấu hình tên miền tùy chỉnh |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-48` | Xác minh tên miền tùy chỉnh |
| `UC-TENANT` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-TENANT-48` | Xác minh tên miền tùy chỉnh |
| `UC-TENANT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-TENANT-49` | Quản lý trạng thái dịch vụ hoặc hạn mức tenant |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-49` | Quản lý trạng thái dịch vụ hoặc hạn mức tenant |
| `UC-TENANT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-TENANT-50` | Ghi nhận hỗ trợ quản trị có kiểm soát đối với tenant |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-01` | Đăng ký tài khoản bằng email |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-02` | Đăng ký tài khoản bằng định danh được hỗ trợ |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-03` | Xác minh địa chỉ email |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-03` | Xác minh địa chỉ email |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `EXT-AUTH-04` | Gửi lại liên kết xác minh |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `EXT-AUTH-04` | Gửi lại liên kết xác minh |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-05` | Đăng nhập bằng mật khẩu |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-06` | Đăng nhập bằng SSO hoặc OAuth |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-06` | Đăng nhập bằng SSO hoặc OAuth |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-07` | Đăng nhập không mật khẩu bằng liên kết dùng một lần |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-07` | Đăng nhập không mật khẩu bằng liên kết dùng một lần |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-08` | Bắt đầu xác thực đa yếu tố |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-08` | Bắt đầu xác thực đa yếu tố |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-09` | Đăng ký phương thức MFA |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-09` | Đăng ký phương thức MFA |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-11` | Quản lý mã khôi phục MFA |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-11` | Quản lý mã khôi phục MFA |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-12` | Tắt hoặc thay đổi phương thức MFA |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-12` | Tắt hoặc thay đổi phương thức MFA |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-13` | Thực hiện xác thực tăng cường cho thao tác nhạy cảm |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-13` | Thực hiện xác thực tăng cường cho thao tác nhạy cảm |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-14` | Đăng xuất phiên hiện tại |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-15` | Đăng xuất khỏi tất cả thiết bị |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `EXT-AUTH-17` | Khôi phục phiên hợp lệ |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-18` | Yêu cầu quên mật khẩu |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-18` | Yêu cầu quên mật khẩu |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-19` | Đặt lại mật khẩu |
| `UC-AUTH` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AUTH-19` | Đặt lại mật khẩu |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-20` | Đổi mật khẩu khi biết mật khẩu hiện tại |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-21` | Buộc đổi mật khẩu ở lần đăng nhập tiếp theo |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `EXT-AUTH-23` | Mở khóa đăng nhập theo chính sách |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-25` | Xem danh sách phiên đăng nhập |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-26` | Thu hồi một phiên đăng nhập |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-27` | Đánh dấu thiết bị tin cậy |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-28` | Thu hồi thiết bị tin cậy |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-29` | Chấp nhận lời mời tham gia tenant qua liên kết |
| `UC-AUTH` | `ACT-GUEST` — Khách truy cập | `UC-AUTH-30` | Từ chối lời mời tham gia tenant |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-31` | Chọn tenant context sau khi đăng nhập |
| `UC-AUTH` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AUTH-32` | Chuyển tenant context khi đang hoạt động |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-01` | Xem hồ sơ tài khoản cá nhân |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-02` | Cập nhật họ tên và thông tin liên hệ |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-03` | Cập nhật ảnh đại diện |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-04` | Thay đổi địa chỉ email đăng nhập |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-05` | Xác minh địa chỉ email mới |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-06` | Thay đổi tên người dùng khi chính sách cho phép |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-07` | Xem danh sách tenant đang tham gia |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-08` | Xem trạng thái tài khoản toàn cục |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-09` | Xem lịch sử hoạt động tài khoản cá nhân |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-10` | Xuất dữ liệu cá nhân |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-11` | Yêu cầu đóng tài khoản |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-12` | Hủy yêu cầu đóng tài khoản |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-13` | Khôi phục tài khoản trong thời gian chờ đóng |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-14` | Quản trị viên xem danh sách người dùng nền tảng |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-15` | Tìm kiếm và lọc người dùng |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-16` | Xem chi tiết người dùng |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-17` | Tạo tài khoản người dùng bởi quản trị viên |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-18` | Kích hoạt tài khoản người dùng |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-19` | Vô hiệu hóa tài khoản người dùng |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-20` | Khóa tài khoản vì lý do bảo mật |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-21` | Mở khóa tài khoản |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-22` | Reset mật khẩu bởi quản trị viên có quyền |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-23` | Buộc người dùng đổi mật khẩu |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-24` | Liên kết tài khoản với danh tính bên ngoài |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-25` | Gỡ liên kết danh tính bên ngoài |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-26` | Hợp nhất tài khoản trùng lặp |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-27` | Tách tài khoản bị liên kết sai |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-28` | Ẩn danh dữ liệu cá nhân theo chính sách |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-29` | Khôi phục tài khoản đã vô hiệu hóa |
| `UC-USER` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-USER-30` | Quản lý trạng thái đồng ý hoặc điều khoản của người dùng |
| `UC-USER` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-USER-32` | Xem và quản lý platform role của người dùng cấp nền tảng |
| `UC-RBAC` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-RBAC-01` | Xem danh mục permission của nền tảng |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-02` | Xem role mặc định của tenant |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-03` | Xem chi tiết role |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-04` | Tạo role tùy chỉnh |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-05` | Sao chép role |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-06` | Cập nhật tên và mô tả role |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-07` | Kích hoạt role |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-08` | Vô hiệu hóa role |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-09` | Lưu trữ role |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-10` | Xóa role chưa được sử dụng |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-11` | Gán permission cho role |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-12` | Thu hồi permission khỏi role |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-13` | Gán nhiều permission theo nhóm |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-14` | So sánh hai role |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-15` | Xuất ma trận role và permission |
| `UC-RBAC` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-RBAC-15` | Xuất ma trận role và permission |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-16` | Nhập ma trận role và permission |
| `UC-RBAC` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-RBAC-16` | Nhập ma trận role và permission |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-17` | Gán role cho membership |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-18` | Thu hồi role khỏi membership |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-19` | Gán role hàng loạt |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-20` | Gán role có thời hạn |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-21` | Gia hạn role có thời hạn |
| `UC-RBAC` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-RBAC-22` | Gán role theo đơn vị trực thuộc |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-22` | Gán role theo đơn vị trực thuộc |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-23` | Gán quyền theo phạm vi tài nguyên |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-24` | Cấu hình role kế thừa khi chính sách cho phép |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-25` | Cấu hình quy tắc từ chối hoặc ngoại lệ quyền |
| `UC-RBAC` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-RBAC-26` | Ủy quyền quản trị role trong phạm vi giới hạn |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-26` | Ủy quyền quản trị role trong phạm vi giới hạn |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-27` | Kiểm tra xung đột phân tách trách nhiệm |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-29` | Mô phỏng quyền của membership |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-30` | Giải thích quyền hiệu lực |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-32` | Rà soát quyền định kỳ |
| `UC-RBAC` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-RBAC-32` | Rà soát quyền định kỳ |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-33` | Xác nhận lại quyền truy cập |
| `UC-RBAC` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-RBAC-33` | Xác nhận lại quyền truy cập |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-34` | Thu hồi quyền không còn cần thiết |
| `UC-RBAC` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-RBAC-35` | Thiết lập quyền khẩn cấp có thời hạn |
| `UC-RBAC` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-RBAC-36` | Kết thúc quyền khẩn cấp |
| `UC-RBAC` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-RBAC-37` | Xem lịch sử thay đổi role và permission |
| `UC-RBAC` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-RBAC-37` | Xem lịch sử thay đổi role và permission |
| `UC-RBAC` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-RBAC-38` | Quản lý role cấp nền tảng tách biệt role tenant |
| `UC-ORG` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-ORG-01` | Xem hồ sơ tổ chức |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-01` | Xem hồ sơ tổ chức |
| `UC-ORG` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-ORG-02` | Cập nhật tên và mô tả tổ chức |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-02` | Cập nhật tên và mô tả tổ chức |
| `UC-ORG` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-ORG-03` | Cập nhật thông tin liên hệ tổ chức |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-03` | Cập nhật thông tin liên hệ tổ chức |
| `UC-ORG` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-ORG-04` | Cập nhật thông tin pháp lý hoặc định danh nội bộ |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-04` | Cập nhật thông tin pháp lý hoặc định danh nội bộ |
| `UC-ORG` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-ORG-05` | Quản lý trường dữ liệu mở rộng của tổ chức |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-05` | Quản lý trường dữ liệu mở rộng của tổ chức |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-06` | Xem cơ cấu tổ chức hiện tại |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-06` | Xem cơ cấu tổ chức hiện tại |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-07` | Xem cơ cấu tổ chức theo thời điểm lịch sử |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-07` | Xem cơ cấu tổ chức theo thời điểm lịch sử |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-08` | Tạo đơn vị trực thuộc |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-08` | Tạo đơn vị trực thuộc |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-09` | Cập nhật đơn vị trực thuộc |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-09` | Cập nhật đơn vị trực thuộc |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-10` | Sắp xếp thứ tự đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-10` | Sắp xếp thứ tự đơn vị |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-11` | Di chuyển đơn vị trong cơ cấu |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-11` | Di chuyển đơn vị trong cơ cấu |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-12` | Thiết lập đơn vị cha hoặc con |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-12` | Thiết lập đơn vị cha hoặc con |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-14` | Vô hiệu hóa đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-14` | Vô hiệu hóa đơn vị |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `EXT-ORG-15` | Kích hoạt lại đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `EXT-ORG-15` | Kích hoạt lại đơn vị |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-16` | Lưu trữ đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-16` | Lưu trữ đơn vị |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-17` | Chuyển dữ liệu trước khi đóng đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-17` | Chuyển dữ liệu trước khi đóng đơn vị |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-18` | Hợp nhất đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-18` | Hợp nhất đơn vị |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-19` | Tách đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-19` | Tách đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-20` | Tạo loại đơn vị |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-21` | Quản lý chức vụ hoặc vị trí |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-21` | Quản lý chức vụ hoặc vị trí |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-22` | Tạo chức vụ |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-22` | Tạo chức vụ |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-23` | Cập nhật chức vụ |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-23` | Cập nhật chức vụ |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-24` | Vô hiệu hóa chức vụ |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-24` | Vô hiệu hóa chức vụ |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-25` | Gán người quản lý đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-25` | Gán người quản lý đơn vị |
| `UC-ORG` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ORG-26` | Kết thúc nhiệm kỳ người quản lý đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-26` | Kết thúc nhiệm kỳ người quản lý đơn vị |
| `UC-ORG` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-ORG-27` | Quản lý nhiệm kỳ tổ chức |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-27` | Quản lý nhiệm kỳ tổ chức |
| `UC-ORG` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-ORG-28` | Quản lý năm học hoặc kỳ hoạt động |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-28` | Quản lý năm học hoặc kỳ hoạt động |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-29` | Nhập cơ cấu tổ chức |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-30` | Xuất cơ cấu tổ chức |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-31` | Sao chép cấu trúc từ mẫu nền tảng |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-32` | Cấu hình quy tắc đặt mã đơn vị |
| `UC-ORG` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-ORG-33` | Xem lịch sử thay đổi cơ cấu |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-01` | Xem cấu hình branding hiện hành |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-02` | Tạo bản nháp branding |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-03` | Cập nhật tên hiển thị tổ chức |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-04` | Tải lên logo chính |
| `UC-BRAND` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-BRAND-04` | Tải lên logo chính |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-05` | Tải lên logo rút gọn |
| `UC-BRAND` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-BRAND-05` | Tải lên logo rút gọn |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-06` | Tải lên favicon hoặc biểu tượng ứng dụng |
| `UC-BRAND` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-BRAND-06` | Tải lên favicon hoặc biểu tượng ứng dụng |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-07` | Cấu hình màu chủ đạo |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-08` | Cấu hình bảng màu phụ |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-09` | Cấu hình kiểu chữ được hỗ trợ |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-10` | Cấu hình chế độ sáng và tối |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-11` | Cấu hình ảnh nền hoặc ảnh đăng nhập |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-12` | Cấu hình trang đăng nhập theo tenant |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-13` | Cấu hình nội dung chân trang và thông tin liên hệ |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-14` | Cấu hình thuật ngữ hiển thị theo tổ chức |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-15` | Cấu hình nhãn menu và tên mô-đun |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-16` | Cấu hình branding email |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-17` | Cấu hình branding thông báo |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-18` | Cấu hình branding tài liệu và bản xuất |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-19` | Quản lý thư viện tài sản thương hiệu |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-20` | Tải lên tài sản thương hiệu |
| `UC-BRAND` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-BRAND-20` | Tải lên tài sản thương hiệu |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-21` | Thay thế tài sản thương hiệu |
| `UC-BRAND` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-BRAND-21` | Thay thế tài sản thương hiệu |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-22` | Lưu trữ tài sản thương hiệu |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-25` | Xem trước branding |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-26` | Xuất bản branding |
| `UC-BRAND` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-BRAND-26` | Xuất bản branding |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-27` | Lên lịch xuất bản branding |
| `UC-BRAND` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-BRAND-27` | Lên lịch xuất bản branding |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `EXT-BRAND-28` | Khôi phục phiên bản branding trước |
| `UC-BRAND` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `EXT-BRAND-28` | Khôi phục phiên bản branding trước |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-29` | Xem lịch sử phiên bản branding |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-30` | Sao chép branding từ mẫu nền tảng |
| `UC-BRAND` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-BRAND-31` | Đặt lại branding về mặc định nền tảng |
| `UC-BRAND` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-BRAND-31` | Đặt lại branding về mặc định nền tảng |
| `UC-BRAND` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-BRAND-32` | Cấu hình subdomain hiển thị thương hiệu |
| `UC-BRAND` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-BRAND-33` | Cấu hình tên miền thương hiệu tùy chỉnh |
| `UC-BRAND` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-BRAND-33` | Cấu hình tên miền thương hiệu tùy chỉnh |
| `UC-BRAND` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-BRAND-34` | Xác minh tên miền thương hiệu |
| `UC-BRAND` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-BRAND-34` | Xác minh tên miền thương hiệu |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-01` | Xem danh mục mô-đun nền tảng |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-02` | Xem chi tiết mô-đun |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-03` | Xem điều kiện gói dịch vụ của mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-03` | Xem điều kiện gói dịch vụ của mô-đun |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-MODULE-03` | Xem điều kiện gói dịch vụ của mô-đun |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-04` | Xem phụ thuộc giữa các mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-05` | Yêu cầu kích hoạt mô-đun |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-MODULE-05` | Yêu cầu kích hoạt mô-đun |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-06` | Phê duyệt yêu cầu kích hoạt mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-07` | Kích hoạt mô-đun cho tenant |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-08` | Kích hoạt mô-đun dùng thử |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-MODULE-08` | Kích hoạt mô-đun dùng thử |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-09` | Kết thúc thời gian dùng thử mô-đun |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-MODULE-09` | Kết thúc thời gian dùng thử mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-10` | Vô hiệu hóa mô-đun |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-MODULE-10` | Vô hiệu hóa mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-11` | Lên lịch kích hoạt mô-đun |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-MODULE-11` | Lên lịch kích hoạt mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-12` | Lên lịch vô hiệu hóa mô-đun |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-MODULE-12` | Lên lịch vô hiệu hóa mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `EXT-MODULE-13` | Kích hoạt lại mô-đun |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `EXT-MODULE-13` | Kích hoạt lại mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-14` | Kiểm tra điều kiện trước khi kích hoạt |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `EXT-MODULE-18` | Hoàn tác cấu hình khi kích hoạt thất bại |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-19` | Cấu hình tham số mô-đun theo tenant |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-20` | Cấu hình mô-đun theo đơn vị |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-21` | Giới hạn mô-đun theo role hoặc permission |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-22` | Quản lý feature flag theo tenant |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-23` | Áp dụng mẫu cấu hình mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-24` | Sao chép cấu hình mô-đun có kiểm soát |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-25` | Nhập cấu hình mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-26` | Xuất cấu hình mô-đun |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-27` | Quản lý phiên bản mô-đun |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-28` | Nâng cấp phiên bản mô-đun |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-29` | Ghim phiên bản mô-đun khi được hỗ trợ |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-30` | Xem tình trạng hoạt động của mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-31` | Theo dõi mức sử dụng và hạn mức mô-đun |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-MODULE-31` | Theo dõi mức sử dụng và hạn mức mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `EXT-MODULE-32` | Cảnh báo vượt hạn mức mô-đun |
| `UC-MODULE` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `EXT-MODULE-32` | Cảnh báo vượt hạn mức mô-đun |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-33` | Quản lý dữ liệu khi mô-đun bị tắt |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-34` | Khôi phục truy cập dữ liệu khi bật lại mô-đun |
| `UC-MODULE` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-MODULE-35` | Ngừng cung cấp mô-đun đã lỗi thời |
| `UC-MODULE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MODULE-36` | Xem lịch sử thay đổi cấu hình mô-đun |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-01` | Xem thiết lập cá nhân |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-02` | Cấu hình ngôn ngữ giao diện |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-03` | Cấu hình múi giờ |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-04` | Cấu hình định dạng ngày giờ |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-05` | Cấu hình định dạng số và tiền tệ |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-06` | Chọn giao diện sáng hoặc tối |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-07` | Cấu hình mật độ hiển thị |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-08` | Cấu hình kích thước chữ |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-09` | Cấu hình tùy chọn trợ năng |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-10` | Cấu hình độ tương phản cá nhân |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-11` | Cấu hình phím tắt |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-12` | Cấu hình trang bắt đầu mặc định |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-13` | Chọn tenant mặc định |
| `UC-SETTING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-SETTING-13` | Chọn tenant mặc định |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-14` | Chọn dashboard mặc định |
| `UC-SETTING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-SETTING-14` | Chọn dashboard mặc định |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-15` | Lưu bộ lọc thường dùng |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-16` | Quản lý cột hiển thị của bảng |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-17` | Lưu chế độ sắp xếp và phân trang |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-18` | Cấu hình kênh nhận thông báo |
| `UC-SETTING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-SETTING-18` | Cấu hình kênh nhận thông báo |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-19` | Cấu hình loại thông báo được nhận |
| `UC-SETTING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-SETTING-19` | Cấu hình loại thông báo được nhận |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-20` | Cấu hình giờ yên lặng |
| `UC-SETTING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-SETTING-20` | Cấu hình giờ yên lặng |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-21` | Cấu hình bản tin tổng hợp |
| `UC-SETTING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-SETTING-21` | Cấu hình bản tin tổng hợp |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-22` | Cấu hình nhắc việc cá nhân |
| `UC-SETTING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-SETTING-22` | Cấu hình nhắc việc cá nhân |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-23` | Cấu hình quyền hiển thị thông tin cá nhân |
| `UC-SETTING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-SETTING-23` | Cấu hình quyền hiển thị thông tin cá nhân |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-24` | Quản lý tài khoản hoặc lịch tích hợp |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-25` | Đồng bộ thiết lập trên nhiều thiết bị |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-26` | Đặt lại thiết lập cá nhân |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-27` | Xuất thiết lập cá nhân |
| `UC-SETTING` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-SETTING-28` | Khôi phục thiết lập từ bản sao |
| `UC-MEMBER` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEMBER-01` | Xem danh sách thành viên |
| `UC-MEMBER` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEMBER-02` | Tìm kiếm và lọc thành viên |
| `UC-MEMBER` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEMBER-03` | Xem chi tiết hồ sơ thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-04` | Mời người dùng vào tổ chức |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-04` | Mời người dùng vào tổ chức |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-MEMBER-05` | Gửi lại lời mời thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `EXT-MEMBER-05` | Gửi lại lời mời thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-06` | Hủy lời mời thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-06` | Hủy lời mời thành viên |
| `UC-MEMBER` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEMBER-07` | Chấp nhận lời mời thành viên |
| `UC-MEMBER` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEMBER-08` | Từ chối lời mời thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-09` | Thêm người dùng hiện có vào tổ chức |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-09` | Thêm người dùng hiện có vào tổ chức |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-10` | Tạo hồ sơ thành viên tạm chưa liên kết User |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-10` | Tạo hồ sơ thành viên tạm chưa liên kết User |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-11` | Liên kết User với hồ sơ thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-11` | Liên kết User với hồ sơ thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-12` | Gỡ liên kết User bị sai |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-12` | Gỡ liên kết User bị sai |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-13` | Nhập danh sách thành viên hàng loạt |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-13` | Nhập danh sách thành viên hàng loạt |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-15` | Cập nhật hồ sơ thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-15` | Cập nhật hồ sơ thành viên |
| `UC-MEMBER` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEMBER-16` | Thành viên tự cập nhật hồ sơ được phép |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-17` | Phê duyệt thay đổi hồ sơ thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-17` | Phê duyệt thay đổi hồ sơ thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-18` | Gán thành viên vào đơn vị |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-18` | Gán thành viên vào đơn vị |
| `UC-MEMBER` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-MEMBER-18` | Gán thành viên vào đơn vị |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-19` | Chuyển thành viên giữa các đơn vị |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-19` | Chuyển thành viên giữa các đơn vị |
| `UC-MEMBER` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-MEMBER-19` | Chuyển thành viên giữa các đơn vị |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-20` | Gán chức vụ cho thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-20` | Gán chức vụ cho thành viên |
| `UC-MEMBER` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-MEMBER-20` | Gán chức vụ cho thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-21` | Kết thúc chức vụ của thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-21` | Kết thúc chức vụ của thành viên |
| `UC-MEMBER` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-MEMBER-21` | Kết thúc chức vụ của thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-22` | Gán vai trò nghiệp vụ cho membership |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-22` | Gán vai trò nghiệp vụ cho membership |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-23` | Gắn nhãn hoặc nhóm thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-23` | Gắn nhãn hoặc nhóm thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-24` | Quản lý kỹ năng thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-24` | Quản lý kỹ năng thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-25` | Quản lý kinh nghiệm và định hướng |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-25` | Quản lý kinh nghiệm và định hướng |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-26` | Quản lý tài liệu hồ sơ thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-26` | Quản lý tài liệu hồ sơ thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-27` | Kích hoạt membership |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-27` | Kích hoạt membership |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-28` | Tạm ngưng membership |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-28` | Tạm ngưng membership |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-29` | Khôi phục membership bị tạm ngưng |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-29` | Khôi phục membership bị tạm ngưng |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-30` | Kết thúc membership |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-30` | Kết thúc membership |
| `UC-MEMBER` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEMBER-31` | Tái gia nhập tổ chức |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-32` | Chuyển trạng thái thành viên sang cựu thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-32` | Chuyển trạng thái thành viên sang cựu thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-33` | Bổ nhiệm Owner hoặc quản trị viên hợp lệ |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-33` | Bổ nhiệm Owner hoặc quản trị viên hợp lệ |
| `UC-MEMBER` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-MEMBER-33` | Bổ nhiệm Owner hoặc quản trị viên hợp lệ |
| `UC-MEMBER` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEMBER-35` | Xem lịch sử membership |
| `UC-MEMBER` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEMBER-36` | Xem lịch sử đơn vị và chức vụ |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-37` | Xuất danh sách thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-37` | Xuất danh sách thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-38` | Cập nhật thành viên hàng loạt |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-38` | Cập nhật thành viên hàng loạt |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-39` | Ẩn danh dữ liệu thành viên theo chính sách |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-39` | Ẩn danh dữ liệu thành viên theo chính sách |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-40` | Lưu trữ hồ sơ thành viên |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-40` | Lưu trữ hồ sơ thành viên |
| `UC-MEMBER` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEMBER-41` | Khôi phục hồ sơ thành viên đã lưu trữ |
| `UC-MEMBER` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-MEMBER-41` | Khôi phục hồ sơ thành viên đã lưu trữ |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-01` | Xem danh mục loại yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-02` | Tạo loại yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-03` | Cập nhật loại yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-04` | Vô hiệu hóa loại yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-05` | Cấu hình biểu mẫu yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-06` | Cấu hình quy trình phê duyệt yêu cầu |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-07` | Tạo bản nháp yêu cầu |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-08` | Cập nhật bản nháp yêu cầu |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-09` | Đính kèm tệp vào yêu cầu |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-11` | Gửi yêu cầu |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-12` | Xem yêu cầu của cá nhân |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-13` | Xem chi tiết yêu cầu |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-14` | Tìm kiếm và lọc yêu cầu |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-15` | Rút yêu cầu đang chờ xử lý |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-16` | Hủy yêu cầu theo quyền |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-17` | Sao chép yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-18` | Chuyển loại yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-19` | Yêu cầu người gửi bổ sung thông tin |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-20` | Bổ sung và gửi lại yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-21` | Phân công người xử lý |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-22` | Chuyển người xử lý |
| `UC-REQUEST` | `ACT-APPROVER` — Người phê duyệt | `UC-REQUEST-23` | Ủy quyền phê duyệt yêu cầu |
| `UC-REQUEST` | `ACT-APPROVER` — Người phê duyệt | `UC-REQUEST-24` | Thực hiện bước phê duyệt |
| `UC-REQUEST` | `ACT-APPROVER` — Người phê duyệt | `UC-REQUEST-25` | Phê duyệt yêu cầu |
| `UC-REQUEST` | `ACT-APPROVER` — Người phê duyệt | `UC-REQUEST-26` | Từ chối yêu cầu |
| `UC-REQUEST` | `ACT-APPROVER` — Người phê duyệt | `UC-REQUEST-27` | Trả yêu cầu để chỉnh sửa |
| `UC-REQUEST` | `ACT-APPROVER` — Người phê duyệt | `UC-REQUEST-28` | Thực hiện phê duyệt nhiều cấp |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-30` | Theo dõi thời hạn xử lý |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-REQUEST-31` | Gửi nhắc việc hoặc cảnh báo quá hạn |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-32` | Thêm bình luận trao đổi |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-33` | Thêm ghi chú nội bộ |
| `UC-REQUEST` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-REQUEST-34` | Xem lịch sử trạng thái yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-35` | Liên kết yêu cầu với hồ sơ nghiệp vụ khác |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-36` | Sinh văn bản từ yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-37` | Tạo giao dịch tài chính từ yêu cầu được duyệt |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-38` | Tạo tác vụ hoặc sự kiện từ yêu cầu được duyệt |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-REQUEST-39` | Mở lại yêu cầu đã đóng theo quyền |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-40` | Đóng yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-41` | Lưu trữ yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-42` | Xuất danh sách hoặc báo cáo yêu cầu |
| `UC-REQUEST` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-REQUEST-43` | Xử lý hàng loạt yêu cầu |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-01` | Xem danh mục loại văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-02` | Tạo loại văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-03` | Cập nhật loại văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-04` | Quản lý mẫu tài liệu |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-05` | Tạo mẫu tài liệu |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-06` | Cập nhật mẫu tài liệu |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-07` | Quản lý biến dữ liệu trong mẫu |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-08` | Xem trước mẫu tài liệu |
| `UC-DOCUMENT` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DOCUMENT-08` | Xem trước mẫu tài liệu |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-09` | Tạo văn bản nháp |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-10` | Tải lên văn bản |
| `UC-DOCUMENT` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-DOCUMENT-10` | Tải lên văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-11` | Sinh văn bản từ mẫu |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-12` | Sinh hàng loạt văn bản từ dữ liệu |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-13` | Cập nhật metadata văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-14` | Chỉnh sửa nội dung văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-15` | Quản lý phiên bản văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-16` | So sánh hai phiên bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-DOCUMENT-17` | Khôi phục phiên bản trước |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-18` | Gắn chủ sở hữu hoặc đơn vị phụ trách |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-19` | Phân quyền truy cập văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-20` | Chia sẻ văn bản nội bộ |
| `UC-DOCUMENT` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DOCUMENT-20` | Chia sẻ văn bản nội bộ |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-21` | Gửi văn bản để rà soát |
| `UC-DOCUMENT` | `ACT-APPROVER` — Người phê duyệt | `UC-DOCUMENT-21` | Gửi văn bản để rà soát |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-22` | Bình luận hoặc góp ý văn bản |
| `UC-DOCUMENT` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DOCUMENT-22` | Bình luận hoặc góp ý văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-23` | Phân công người rà soát |
| `UC-DOCUMENT` | `ACT-APPROVER` — Người phê duyệt | `UC-DOCUMENT-23` | Phân công người rà soát |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-24` | Phê duyệt văn bản |
| `UC-DOCUMENT` | `ACT-APPROVER` — Người phê duyệt | `UC-DOCUMENT-24` | Phê duyệt văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-25` | Từ chối hoặc yêu cầu sửa văn bản |
| `UC-DOCUMENT` | `ACT-APPROVER` — Người phê duyệt | `UC-DOCUMENT-25` | Từ chối hoặc yêu cầu sửa văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-26` | Đánh số văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-27` | Ký số hoặc xác nhận ký khi tích hợp |
| `UC-DOCUMENT` | `ACT-APPROVER` — Người phê duyệt | `UC-DOCUMENT-27` | Ký số hoặc xác nhận ký khi tích hợp |
| `UC-DOCUMENT` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-DOCUMENT-27` | Ký số hoặc xác nhận ký khi tích hợp |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-28` | Ban hành văn bản |
| `UC-DOCUMENT` | `ACT-APPROVER` — Người phê duyệt | `UC-DOCUMENT-28` | Ban hành văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-29` | Công bố văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-30` | Phân phối văn bản đến đối tượng nhận |
| `UC-DOCUMENT` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DOCUMENT-31` | Xác nhận đã đọc văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-32` | Liên kết văn bản với yêu cầu hoặc nghiệp vụ khác |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-33` | Quản lý tệp đính kèm văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-34` | Tải xuống hoặc xuất văn bản |
| `UC-DOCUMENT` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DOCUMENT-34` | Tải xuống hoặc xuất văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-35` | Đóng dấu hoặc watermark bản xuất |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-36` | Tìm kiếm metadata văn bản |
| `UC-DOCUMENT` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DOCUMENT-36` | Tìm kiếm metadata văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-37` | Tìm kiếm toàn văn khi được hỗ trợ |
| `UC-DOCUMENT` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DOCUMENT-37` | Tìm kiếm toàn văn khi được hỗ trợ |
| `UC-DOCUMENT` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-DOCUMENT-37` | Tìm kiếm toàn văn khi được hỗ trợ |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-38` | Theo dõi hiệu lực và ngày hết hạn văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-DOCUMENT-39` | Gửi nhắc văn bản sắp hết hiệu lực |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-40` | Lưu trữ văn bản |
| `UC-DOCUMENT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DOCUMENT-40` | Lưu trữ văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-41` | Khôi phục văn bản lưu trữ |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-42` | Đặt thời hạn lưu giữ văn bản |
| `UC-DOCUMENT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DOCUMENT-42` | Đặt thời hạn lưu giữ văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-43` | Đặt legal hold hoặc khóa xóa |
| `UC-DOCUMENT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DOCUMENT-43` | Đặt legal hold hoặc khóa xóa |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-44` | Yêu cầu xóa văn bản |
| `UC-DOCUMENT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DOCUMENT-44` | Yêu cầu xóa văn bản |
| `UC-DOCUMENT` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DOCUMENT-45` | Xóa hoặc ẩn danh văn bản theo chính sách |
| `UC-DOCUMENT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DOCUMENT-45` | Xóa hoặc ẩn danh văn bản theo chính sách |
| `UC-DOCUMENT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DOCUMENT-46` | Xem lịch sử truy cập và thay đổi văn bản |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-01` | Quản lý danh mục thu chi |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-01` | Quản lý danh mục thu chi |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-02` | Quản lý tài khoản hoặc nguồn tiền |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-02` | Quản lý tài khoản hoặc nguồn tiền |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-03` | Quản lý quỹ |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-03` | Quản lý quỹ |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-04` | Thiết lập số dư đầu kỳ |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-04` | Thiết lập số dư đầu kỳ |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-05` | Tạo kế hoạch ngân sách |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-05` | Tạo kế hoạch ngân sách |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-06` | Tạo dòng ngân sách |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-06` | Tạo dòng ngân sách |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-07` | Phân bổ ngân sách theo đơn vị hoặc hoạt động |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-07` | Phân bổ ngân sách theo đơn vị hoặc hoạt động |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-08` | Điều chỉnh ngân sách |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-08` | Điều chỉnh ngân sách |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-09` | Phê duyệt ngân sách |
| `UC-FINANCE` | `ACT-APPROVER` — Người phê duyệt | `UC-FINANCE-09` | Phê duyệt ngân sách |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-10` | Khóa ngân sách theo kỳ |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-10` | Khóa ngân sách theo kỳ |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-11` | Tạo khoản thu |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-12` | Xác nhận đã thu tiền |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-13` | Tạo đề nghị chi |
| `UC-FINANCE` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-FINANCE-13` | Tạo đề nghị chi |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-14` | Tạo yêu cầu tạm ứng |
| `UC-FINANCE` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-FINANCE-14` | Tạo yêu cầu tạm ứng |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-15` | Duyệt yêu cầu tạm ứng |
| `UC-FINANCE` | `ACT-APPROVER` — Người phê duyệt | `UC-FINANCE-15` | Duyệt yêu cầu tạm ứng |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-16` | Ghi nhận giải ngân tạm ứng |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-17` | Quyết toán tạm ứng |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-18` | Tạo yêu cầu hoàn ứng hoặc hoàn tiền |
| `UC-FINANCE` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-FINANCE-18` | Tạo yêu cầu hoàn ứng hoặc hoàn tiền |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-19` | Tạo giao dịch chi |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-20` | Đính kèm hóa đơn hoặc chứng từ |
| `UC-FINANCE` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-FINANCE-20` | Đính kèm hóa đơn hoặc chứng từ |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-21` | Gửi giao dịch để phê duyệt |
| `UC-FINANCE` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-FINANCE-21` | Gửi giao dịch để phê duyệt |
| `UC-FINANCE` | `ACT-APPROVER` — Người phê duyệt | `UC-FINANCE-21` | Gửi giao dịch để phê duyệt |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-22` | Phân công người duyệt giao dịch |
| `UC-FINANCE` | `ACT-APPROVER` — Người phê duyệt | `UC-FINANCE-22` | Phân công người duyệt giao dịch |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-23` | Phê duyệt giao dịch tài chính |
| `UC-FINANCE` | `ACT-APPROVER` — Người phê duyệt | `UC-FINANCE-23` | Phê duyệt giao dịch tài chính |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-24` | Từ chối hoặc trả giao dịch để bổ sung |
| `UC-FINANCE` | `ACT-APPROVER` — Người phê duyệt | `UC-FINANCE-24` | Từ chối hoặc trả giao dịch để bổ sung |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-25` | Thực hiện phê duyệt nhiều cấp |
| `UC-FINANCE` | `ACT-APPROVER` — Người phê duyệt | `UC-FINANCE-25` | Thực hiện phê duyệt nhiều cấp |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-27` | Ghi nhận thanh toán hoặc nhận tiền thực tế |
| `UC-FINANCE` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-FINANCE-27` | Ghi nhận thanh toán hoặc nhận tiền thực tế |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-28` | Chuyển tiền giữa các quỹ hoặc tài khoản |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-29` | Tách một giao dịch thành nhiều khoản |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-30` | Gộp các khoản liên quan khi được phép |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-31` | Liên kết giao dịch với yêu cầu, sự kiện hoặc tài sản |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-32` | Cập nhật giao dịch đang chờ xử lý |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-33` | Hủy giao dịch chưa hoàn tất |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-34` | Đảo hoặc điều chỉnh giao dịch đã ghi nhận |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-35` | Xóa mềm giao dịch |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-36` | Khôi phục giao dịch bị xóa mềm |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-37` | Nhập sao kê hoặc dữ liệu giao dịch |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-FINANCE-37` | Nhập sao kê hoặc dữ liệu giao dịch |
| `UC-FINANCE` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-FINANCE-37` | Nhập sao kê hoặc dữ liệu giao dịch |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-38` | Đối soát giao dịch |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-FINANCE-38` | Đối soát giao dịch |
| `UC-FINANCE` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-FINANCE-38` | Đối soát giao dịch |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-39` | Ghép giao dịch với sao kê |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-FINANCE-39` | Ghép giao dịch với sao kê |
| `UC-FINANCE` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-FINANCE-39` | Ghép giao dịch với sao kê |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-40` | Xử lý chênh lệch đối soát |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-FINANCE-40` | Xử lý chênh lệch đối soát |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-41` | Quản lý khoản phải thu |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-42` | Quản lý khoản phải trả |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-43` | Tạo giao dịch định kỳ |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-44` | Theo dõi thực hiện ngân sách |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-FINANCE-45` | Cảnh báo vượt ngân sách hoặc ngưỡng chi |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-46` | Đóng kỳ tài chính |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-FINANCE-46` | Đóng kỳ tài chính |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-FINANCE-46` | Đóng kỳ tài chính |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-FINANCE-47` | Mở lại kỳ tài chính theo quyền |
| `UC-FINANCE` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `EXT-FINANCE-47` | Mở lại kỳ tài chính theo quyền |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `EXT-FINANCE-47` | Mở lại kỳ tài chính theo quyền |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-48` | Sinh phiếu thu hoặc phiếu chi |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-49` | Xem sổ quỹ và biến động số dư |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-FINANCE-49` | Xem sổ quỹ và biến động số dư |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-50` | Xem báo cáo thu chi |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-FINANCE-50` | Xem báo cáo thu chi |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-51` | Xuất báo cáo tài chính nội bộ |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-FINANCE-51` | Xuất báo cáo tài chính nội bộ |
| `UC-FINANCE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-FINANCE-52` | Xem lịch sử phê duyệt và audit tài chính |
| `UC-FINANCE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-FINANCE-52` | Xem lịch sử phê duyệt và audit tài chính |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-01` | Quản lý danh mục tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-02` | Quản lý loại tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-03` | Quản lý địa điểm lưu trữ |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-04` | Quản lý nhà cung cấp tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-05` | Tạo hồ sơ tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-06` | Nhập tài sản hàng loạt |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-07` | Gắn mã tài sản hoặc mã QR |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-08` | Cập nhật thông tin tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-09` | Xem chi tiết và lịch sử tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-10` | Thực hiện kiểm kê tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-11` | Lập kế hoạch kiểm kê |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-12` | Ghi nhận kết quả kiểm kê |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-13` | Xử lý chênh lệch kiểm kê |
| `UC-ASSET` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-ASSET-14` | Yêu cầu mượn tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-14` | Yêu cầu mượn tài sản |
| `UC-ASSET` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ASSET-15` | Phê duyệt yêu cầu mượn |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-15` | Phê duyệt yêu cầu mượn |
| `UC-ASSET` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-ASSET-16` | Đặt trước tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-16` | Đặt trước tài sản |
| `UC-ASSET` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ASSET-18` | Bàn giao tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-18` | Bàn giao tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-19` | Ghi nhận tài sản đang được giữ |
| `UC-ASSET` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-ASSET-20` | Gia hạn thời gian mượn |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-20` | Gia hạn thời gian mượn |
| `UC-ASSET` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-ASSET-21` | Trả tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-21` | Trả tài sản |
| `UC-ASSET` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-ASSET-22` | Ghi nhận trả trễ |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-22` | Ghi nhận trả trễ |
| `UC-ASSET` | `ACT-TENANT-MEMBER` — Thành viên tenant | `EXT-ASSET-23` | Gửi nhắc trả tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-ASSET-23` | Gửi nhắc trả tài sản |
| `UC-ASSET` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ASSET-24` | Chuyển tài sản giữa địa điểm |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-24` | Chuyển tài sản giữa địa điểm |
| `UC-ASSET` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ASSET-25` | Chuyển người quản lý hoặc người giữ tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-25` | Chuyển người quản lý hoặc người giữ tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-26` | Cập nhật tình trạng tài sản |
| `UC-ASSET` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-ASSET-27` | Báo hỏng hoặc mất tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-27` | Báo hỏng hoặc mất tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-28` | Ghi nhận sự cố tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-29` | Xử lý trách nhiệm bồi thường |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-30` | Tạo yêu cầu bảo trì |
| `UC-ASSET` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ASSET-31` | Phê duyệt bảo trì |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-31` | Phê duyệt bảo trì |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-32` | Lập lịch bảo trì |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-33` | Ghi nhận kết quả bảo trì |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-34` | Quản lý bảo hành |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-35` | Quản lý vật tư tiêu hao |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-36` | Nhập kho vật tư |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-37` | Xuất vật tư |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-38` | Hoàn trả vật tư |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-ASSET-39` | Cảnh báo tồn kho thấp |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-40` | Theo dõi khấu hao hoặc giá trị còn lại khi áp dụng |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-41` | Đề nghị thanh lý tài sản |
| `UC-ASSET` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ASSET-42` | Phê duyệt thanh lý |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-42` | Phê duyệt thanh lý |
| `UC-ASSET` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-ASSET-43` | Thực hiện thanh lý hoặc ngừng sử dụng |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-43` | Thực hiện thanh lý hoặc ngừng sử dụng |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-44` | Lưu trữ hồ sơ tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-45` | Khôi phục hồ sơ tài sản |
| `UC-ASSET` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-ASSET-46` | Xuất danh sách và báo cáo tài sản |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-01` | Quản lý loại cuộc họp hoặc sự kiện |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-02` | Tạo cuộc họp nháp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-03` | Lên lịch cuộc họp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-04` | Tạo chuỗi cuộc họp định kỳ |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-05` | Chỉnh sửa một lần trong chuỗi định kỳ |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-06` | Mời người tham dự |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-06` | Mời người tham dự |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-07` | Mời đơn vị hoặc nhóm tham dự |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-07` | Mời đơn vị hoặc nhóm tham dự |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-08` | Phản hồi tham dự |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-08` | Phản hồi tham dự |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-09` | Quản lý danh sách khách mời |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-10` | Tạo chương trình nghị sự |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-11` | Đính kèm tài liệu cuộc họp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-12` | Đặt phòng hoặc tài nguyên |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-14` | Tạo liên kết họp trực tuyến |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-MEETING-15` | Gửi thông báo và nhắc lịch |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-16` | Đổi lịch cuộc họp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-17` | Hủy cuộc họp |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-18` | Mở phiên điểm danh |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-18` | Mở phiên điểm danh |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-19` | Điểm danh thủ công |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-19` | Điểm danh thủ công |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-20` | Điểm danh bằng QR hoặc mã check-in |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-20` | Điểm danh bằng QR hoặc mã check-in |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-21` | Ghi nhận đi trễ hoặc về sớm |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-21` | Ghi nhận đi trễ hoặc về sớm |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-22` | Ghi nhận lý do vắng |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-22` | Ghi nhận lý do vắng |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-23` | Yêu cầu xác nhận vắng có phép |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-23` | Yêu cầu xác nhận vắng có phép |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-24` | Phê duyệt vắng có phép |
| `UC-MEETING` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-MEETING-24` | Phê duyệt vắng có phép |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-24` | Phê duyệt vắng có phép |
| `UC-MEETING` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-MEETING-25` | Khóa kết quả chuyên cần |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-25` | Khóa kết quả chuyên cần |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-26` | Lập biên bản cuộc họp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-27` | Ghi nhận quyết định cuộc họp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-28` | Tạo nhiệm vụ sau cuộc họp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-29` | Theo dõi nhiệm vụ sau cuộc họp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-30` | Tổ chức biểu quyết hoặc thăm dò |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-31` | Công bố biên bản và kết quả |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-31` | Công bố biên bản và kết quả |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-32` | Xác nhận đã đọc biên bản |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-32` | Xác nhận đã đọc biên bản |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-33` | Thu thập phản hồi sau sự kiện |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-33` | Thu thập phản hồi sau sự kiện |
| `UC-MEETING` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-MEETING-34` | Đồng bộ lịch cá nhân |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-34` | Đồng bộ lịch cá nhân |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-35` | Liên kết cuộc họp với yêu cầu hoặc văn bản |
| `UC-MEETING` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-MEETING-36` | Tổng hợp chuyên cần theo thành viên |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-36` | Tổng hợp chuyên cần theo thành viên |
| `UC-MEETING` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-MEETING-37` | Tổng hợp chuyên cần theo đơn vị |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-37` | Tổng hợp chuyên cần theo đơn vị |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-38` | Xuất danh sách và báo cáo cuộc họp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-39` | Lưu trữ cuộc họp |
| `UC-MEETING` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-MEETING-40` | Khôi phục cuộc họp đã lưu trữ |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-01` | Quản lý danh mục hành vi vi phạm |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-02` | Quản lý mức xử lý kỷ luật |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-03` | Cấu hình ngưỡng cảnh báo KPI hoặc chuyên cần |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-06` | Tạo vụ việc kỷ luật thủ công |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-07` | Gắn thành viên liên quan |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-08` | Thu thập và tải lên minh chứng |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-09` | Phân công người xử lý vụ việc |
| `UC-DISCIPLINE` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DISCIPLINE-10` | Thông báo thành viên về vụ việc |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-10` | Thông báo thành viên về vụ việc |
| `UC-DISCIPLINE` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DISCIPLINE-11` | Yêu cầu thành viên giải trình |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-11` | Yêu cầu thành viên giải trình |
| `UC-DISCIPLINE` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DISCIPLINE-12` | Nộp giải trình |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-12` | Nộp giải trình |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-13` | Ghi nhận phỏng vấn hoặc phiên làm việc |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-15` | Đề xuất kết luận vụ việc |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-16` | Đề xuất hình thức xử lý |
| `UC-DISCIPLINE` | `ACT-APPROVER` — Người phê duyệt | `UC-DISCIPLINE-17` | Thực hiện phê duyệt kỷ luật |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-17` | Thực hiện phê duyệt kỷ luật |
| `UC-DISCIPLINE` | `ACT-APPROVER` — Người phê duyệt | `UC-DISCIPLINE-18` | Từ chối hoặc yêu cầu điều tra bổ sung |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-18` | Từ chối hoặc yêu cầu điều tra bổ sung |
| `UC-DISCIPLINE` | `ACT-APPROVER` — Người phê duyệt | `UC-DISCIPLINE-19` | Ban hành quyết định kỷ luật |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-19` | Ban hành quyết định kỷ luật |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-20` | Ghi nhận điểm trừ hoặc điều chỉnh KPI |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-21` | Thiết lập kế hoạch khắc phục |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-22` | Theo dõi việc thực hiện kế hoạch khắc phục |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-DISCIPLINE-23` | Gửi cảnh báo hoặc nhắc việc |
| `UC-DISCIPLINE` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-DISCIPLINE-24` | Khiếu nại quyết định kỷ luật |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-24` | Khiếu nại quyết định kỷ luật |
| `UC-DISCIPLINE` | `ACT-APPROVER` — Người phê duyệt | `UC-DISCIPLINE-25` | Tiếp nhận khiếu nại |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-25` | Tiếp nhận khiếu nại |
| `UC-DISCIPLINE` | `ACT-APPROVER` — Người phê duyệt | `UC-DISCIPLINE-26` | Xem xét và giải quyết khiếu nại |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-26` | Xem xét và giải quyết khiếu nại |
| `UC-DISCIPLINE` | `ACT-APPROVER` — Người phê duyệt | `UC-DISCIPLINE-27` | Sửa đổi hoặc hủy quyết định kỷ luật |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-27` | Sửa đổi hoặc hủy quyết định kỷ luật |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-28` | Tạm đình chỉ hiệu lực quyết định khi xem xét |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-29` | Đóng vụ việc |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-DISCIPLINE-30` | Mở lại vụ việc theo quyền |
| `UC-DISCIPLINE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DISCIPLINE-31` | Hết hiệu lực hoặc xóa ghi nhận theo chính sách phục hồi |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-31` | Hết hiệu lực hoặc xóa ghi nhận theo chính sách phục hồi |
| `UC-DISCIPLINE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DISCIPLINE-33` | Xuất báo cáo kỷ luật và KPI |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-33` | Xuất báo cáo kỷ luật và KPI |
| `UC-DISCIPLINE` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DISCIPLINE-34` | Xem lịch sử xử lý và audit vụ việc |
| `UC-DISCIPLINE` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DISCIPLINE-34` | Xem lịch sử xử lý và audit vụ việc |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-01` | Tạo chu kỳ đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-02` | Cập nhật chu kỳ đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-03` | Kích hoạt chu kỳ đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-04` | Khóa chu kỳ đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-EVALUATION-05` | Mở lại chu kỳ đánh giá theo quyền |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-06` | Quản lý bộ tiêu chí đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-07` | Tạo tiêu chí đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-08` | Cập nhật tiêu chí đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-09` | Phiên bản hóa tiêu chí |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-10` | Cấu hình trọng số và điểm tối đa |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-11` | Cấu hình thang điểm |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-12` | Cấu hình tiêu chí theo đơn vị hoặc vai trò |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-13` | Phân công người đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-13` | Phân công người đánh giá |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-14` | Phân công người được đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-14` | Phân công người được đánh giá |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-EVALUATION-16` | Thực hiện tự đánh giá |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-EVALUATION-17` | Thực hiện đánh giá đồng cấp |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-18` | Thực hiện đánh giá của quản lý |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-18` | Thực hiện đánh giá của quản lý |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-EVALUATION-19` | Lưu bản nháp đánh giá |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-EVALUATION-20` | Đính kèm minh chứng đánh giá |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-EVALUATION-21` | Gửi phiếu đánh giá |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `EXT-EVALUATION-23` | Nhắc người chưa hoàn tất đánh giá |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-EVALUATION-24` | Khóa phiếu đánh giá sau khi nộp |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-25` | Rà soát và xác minh điểm |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-25` | Rà soát và xác minh điểm |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-26` | Hiệu chỉnh hoặc moderation điểm |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-26` | Hiệu chỉnh hoặc moderation điểm |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-27` | Tổ chức phiên calibration |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-27` | Tổ chức phiên calibration |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-28` | Điều chỉnh điểm có lý do |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-28` | Điều chỉnh điểm có lý do |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-29` | Phê duyệt kết quả đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-29` | Phê duyệt kết quả đánh giá |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-30` | Công bố kết quả đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-30` | Công bố kết quả đánh giá |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-EVALUATION-31` | Thành viên xem kết quả |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-EVALUATION-32` | Xác nhận đã nhận kết quả |
| `UC-EVALUATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-EVALUATION-33` | Gửi khiếu nại kết quả |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-34` | Tiếp nhận và phân công xử lý khiếu nại |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-34` | Tiếp nhận và phân công xử lý khiếu nại |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-35` | Giải quyết khiếu nại |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-35` | Giải quyết khiếu nại |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-36` | Cập nhật kết quả sau khiếu nại |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-36` | Cập nhật kết quả sau khiếu nại |
| `UC-EVALUATION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-EVALUATION-37` | Chốt kết quả cuối cùng |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-37` | Chốt kết quả cuối cùng |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-38` | Nhập điểm đánh giá hàng loạt |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-39` | Xuất kết quả đánh giá |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-40` | Tổng hợp xếp loại theo đơn vị |
| `UC-EVALUATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-EVALUATION-41` | Tạo báo cáo phân tích đánh giá |
| `UC-EVALUATION` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-EVALUATION-43` | Xem lịch sử và audit thay đổi điểm |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-01` | Quản lý loại cuộc thi hoặc hoạt động ghi nhận |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-02` | Tạo cuộc thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-03` | Cập nhật thông tin cuộc thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-04` | Cấu hình vòng thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-05` | Cấu hình tiêu chí chấm |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-06` | Cấu hình điều kiện tham gia |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-07` | Mở đăng ký cuộc thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-08` | Đóng đăng ký cuộc thi |
| `UC-COMPETITION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-COMPETITION-09` | Đăng ký cá nhân tham gia |
| `UC-COMPETITION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-COMPETITION-10` | Tạo đội thi |
| `UC-COMPETITION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-COMPETITION-11` | Mời thành viên vào đội thi |
| `UC-COMPETITION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-COMPETITION-12` | Chấp nhận hoặc từ chối lời mời đội thi |
| `UC-COMPETITION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-COMPETITION-14` | Nộp bài dự thi |
| `UC-COMPETITION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-COMPETITION-15` | Cập nhật bài dự thi trước hạn |
| `UC-COMPETITION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-COMPETITION-16` | Tải lên minh chứng hoặc sản phẩm |
| `UC-COMPETITION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-COMPETITION-17` | Rút bài dự thi |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-19` | Phân công giám khảo |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-19` | Phân công giám khảo |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-20` | Ghi điểm bài dự thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-20` | Ghi điểm bài dự thi |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-21` | Ghi nhận nhận xét giám khảo |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-21` | Ghi nhận nhận xét giám khảo |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-22` | Hiệu chỉnh hoặc moderation điểm |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-22` | Hiệu chỉnh hoặc moderation điểm |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-23` | Xếp hạng thí sinh hoặc đội thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-23` | Xếp hạng thí sinh hoặc đội thi |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-24` | Chọn danh sách vào vòng tiếp theo |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-24` | Chọn danh sách vào vòng tiếp theo |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-25` | Công bố kết quả vòng thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-25` | Công bố kết quả vòng thi |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-26` | Công bố kết quả chung cuộc |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-26` | Công bố kết quả chung cuộc |
| `UC-COMPETITION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-COMPETITION-27` | Gửi khiếu nại kết quả |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-28` | Xử lý khiếu nại kết quả |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-28` | Xử lý khiếu nại kết quả |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-29` | Ghi nhận giải thưởng |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-29` | Ghi nhận giải thưởng |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-30` | Sinh giấy chứng nhận hoặc quyết định khen thưởng |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-30` | Sinh giấy chứng nhận hoặc quyết định khen thưởng |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-31` | Ghi nhận thành tích cá nhân |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-31` | Ghi nhận thành tích cá nhân |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-32` | Ghi nhận thành tích đơn vị |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-32` | Ghi nhận thành tích đơn vị |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-33` | Đề cử thành viên tham gia cuộc thi bên ngoài |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-33` | Đề cử thành viên tham gia cuộc thi bên ngoài |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-34` | Theo dõi trạng thái cuộc thi bên ngoài |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-34` | Theo dõi trạng thái cuộc thi bên ngoài |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-35` | Liên kết chi phí hoặc tài trợ với tài chính |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-35` | Liên kết chi phí hoặc tài trợ với tài chính |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-36` | Liên kết tài liệu và minh chứng |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-36` | Liên kết tài liệu và minh chứng |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-37` | Xuất danh sách và báo cáo cuộc thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-37` | Xuất danh sách và báo cáo cuộc thi |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-38` | Lưu trữ cuộc thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-38` | Lưu trữ cuộc thi |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-39` | Sao chép cấu hình cuộc thi |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-39` | Sao chép cấu hình cuộc thi |
| `UC-COMPETITION` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-COMPETITION-40` | Quản lý quyền công bố thông tin và hình ảnh |
| `UC-COMPETITION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-COMPETITION-40` | Quản lý quyền công bố thông tin và hình ảnh |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-01` | Quản lý mẫu thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-02` | Tạo mẫu thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-03` | Cập nhật mẫu thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-04` | Phiên bản hóa mẫu thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-05` | Cấu hình biến dữ liệu trong mẫu |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-06` | Xem trước nội dung thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-07` | Tạo thông báo nháp |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-08` | Chọn kênh gửi thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-09` | Chọn đối tượng nhận theo tenant |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-10` | Chọn đối tượng nhận theo đơn vị |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-11` | Chọn đối tượng nhận theo role hoặc nhóm |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-12` | Chọn người nhận cụ thể |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-14` | Gửi thông báo ngay |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-15` | Lên lịch gửi thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-16` | Sửa lịch gửi thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-17` | Hủy thông báo đã lên lịch |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-18` | Yêu cầu phê duyệt thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-19` | Phê duyệt thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-20` | Từ chối hoặc yêu cầu sửa thông báo |
| `UC-NOTIFICATION` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-NOTIFICATION-21` | Gửi thông báo trong ứng dụng |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-21` | Gửi thông báo trong ứng dụng |
| `UC-NOTIFICATION` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-NOTIFICATION-22` | Gửi email |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-22` | Gửi email |
| `UC-NOTIFICATION` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-NOTIFICATION-23` | Gửi SMS khi được tích hợp |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-23` | Gửi SMS khi được tích hợp |
| `UC-NOTIFICATION` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-NOTIFICATION-24` | Gửi push notification |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-24` | Gửi push notification |
| `UC-NOTIFICATION` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-NOTIFICATION-25` | Gửi webhook đến hệ thống ngoài |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-25` | Gửi webhook đến hệ thống ngoài |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-31` | Gửi thông báo khẩn cấp theo quyền |
| `UC-NOTIFICATION` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-NOTIFICATION-32` | Theo dõi trạng thái gửi |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-32` | Theo dõi trạng thái gửi |
| `UC-NOTIFICATION` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `EXT-NOTIFICATION-33` | Xử lý gửi thất bại và retry |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-NOTIFICATION-33` | Xử lý gửi thất bại và retry |
| `UC-NOTIFICATION` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `EXT-NOTIFICATION-34` | Xử lý email bounce hoặc địa chỉ không hợp lệ |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `EXT-NOTIFICATION-34` | Xử lý email bounce hoặc địa chỉ không hợp lệ |
| `UC-NOTIFICATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-NOTIFICATION-35` | Đánh dấu thông báo đã đọc |
| `UC-NOTIFICATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-NOTIFICATION-36` | Đánh dấu tất cả đã đọc |
| `UC-NOTIFICATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-NOTIFICATION-37` | Xác nhận đã nhận hoặc đã hiểu thông báo |
| `UC-NOTIFICATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-NOTIFICATION-38` | Tìm kiếm và lọc thông báo |
| `UC-NOTIFICATION` | `ACT-TENANT-MEMBER` — Thành viên tenant | `UC-NOTIFICATION-39` | Lưu trữ hoặc xóa thông báo cá nhân |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-40` | Quản lý bản dịch nội dung thông báo |
| `UC-NOTIFICATION` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-NOTIFICATION-42` | Xuất báo cáo hiệu quả gửi thông báo |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-01` | Xem dashboard cá nhân |
| `UC-DASHBOARD` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-DASHBOARD-02` | Xem dashboard tenant |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-02` | Xem dashboard tenant |
| `UC-DASHBOARD` | `ACT-UNIT-ADMIN` — Quản trị viên đơn vị trực thuộc | `UC-DASHBOARD-03` | Xem dashboard đơn vị |
| `UC-DASHBOARD` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-DASHBOARD-04` | Xem dashboard quản trị nền tảng |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-05` | Chọn khoảng thời gian báo cáo |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-05` | Chọn khoảng thời gian báo cáo |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-06` | Lọc dashboard theo đơn vị |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-06` | Lọc dashboard theo đơn vị |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-07` | Lọc dashboard theo mô-đun |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-07` | Lọc dashboard theo mô-đun |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-08` | Lọc dashboard theo trạng thái nghiệp vụ |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-08` | Lọc dashboard theo trạng thái nghiệp vụ |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-09` | Xem chỉ số tổng hợp |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-09` | Xem chỉ số tổng hợp |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-10` | Xem biểu đồ xu hướng |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-10` | Xem biểu đồ xu hướng |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-11` | Xem danh sách cảnh báo và công việc cần xử lý |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-11` | Xem danh sách cảnh báo và công việc cần xử lý |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-12` | Đi sâu từ chỉ số đến dữ liệu chi tiết |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-12` | Đi sâu từ chỉ số đến dữ liệu chi tiết |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-13` | So sánh hai kỳ báo cáo |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-13` | So sánh hai kỳ báo cáo |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-14` | So sánh các đơn vị trong cùng tenant |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-14` | So sánh các đơn vị trong cùng tenant |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-15` | Xem độ mới và nguồn của dữ liệu |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-15` | Xem độ mới và nguồn của dữ liệu |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-16` | Làm mới dữ liệu dashboard |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-16` | Làm mới dữ liệu dashboard |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-17` | Thêm widget vào dashboard |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-17` | Thêm widget vào dashboard |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-18` | Xóa widget khỏi dashboard |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-18` | Xóa widget khỏi dashboard |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-19` | Sắp xếp lại widget |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-19` | Sắp xếp lại widget |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-20` | Thay đổi kích thước widget |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-20` | Thay đổi kích thước widget |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-21` | Cấu hình tham số widget |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-21` | Cấu hình tham số widget |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-22` | Lưu chế độ xem dashboard |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-22` | Lưu chế độ xem dashboard |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-23` | Chia sẻ chế độ xem trong phạm vi được phép |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-23` | Chia sẻ chế độ xem trong phạm vi được phép |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-24` | Sao chép dashboard từ mẫu |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-24` | Sao chép dashboard từ mẫu |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-25` | Tạo dashboard tùy chỉnh |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-25` | Tạo dashboard tùy chỉnh |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-26` | Quản lý danh mục metric |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-26` | Quản lý danh mục metric |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-27` | Cấu hình mục tiêu KPI |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-27` | Cấu hình mục tiêu KPI |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-28` | Cấu hình ngưỡng cảnh báo |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-28` | Cấu hình ngưỡng cảnh báo |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-29` | Nhận cảnh báo khi vượt ngưỡng |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-29` | Nhận cảnh báo khi vượt ngưỡng |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-30` | Xuất dữ liệu widget |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-30` | Xuất dữ liệu widget |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-31` | Xuất dashboard sang PDF hoặc hình ảnh |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-31` | Xuất dashboard sang PDF hoặc hình ảnh |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-32` | Xuất báo cáo CSV hoặc bảng tính |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-32` | Xuất báo cáo CSV hoặc bảng tính |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-33` | Lên lịch gửi báo cáo định kỳ |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-33` | Lên lịch gửi báo cáo định kỳ |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-34` | Tạo báo cáo liên mô-đun |
| `UC-DASHBOARD` | `ACT-MODULE-SPECIALIST` — Vai trò chuyên trách theo mô-đun | `UC-DASHBOARD-34` | Tạo báo cáo liên mô-đun |
| `UC-DASHBOARD` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DASHBOARD-35` | Xem phân tích bất thường |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-35` | Xem phân tích bất thường |
| `UC-DASHBOARD` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DASHBOARD-36` | Xem AI insight khi được bật |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-36` | Xem AI insight khi được bật |
| `UC-DASHBOARD` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DASHBOARD-37` | Ghi nhận phản hồi về insight |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-37` | Ghi nhận phản hồi về insight |
| `UC-DASHBOARD` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DASHBOARD-38` | Xem lỗi hoặc dữ liệu thiếu của dashboard |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-38` | Xem lỗi hoặc dữ liệu thiếu của dashboard |
| `UC-DASHBOARD` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-DASHBOARD-40` | Lưu lịch sử phiên bản dashboard |
| `UC-DASHBOARD` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-DASHBOARD-40` | Lưu lịch sử phiên bản dashboard |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-01` | Xem danh sách nhà cung cấp AI |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-01` | Xem danh sách nhà cung cấp AI |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AI-01` | Xem danh sách nhà cung cấp AI |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-02` | Cấu hình nhà cung cấp AI |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-02` | Cấu hình nhà cung cấp AI |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AI-02` | Cấu hình nhà cung cấp AI |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-03` | Cập nhật thông tin kết nối AI |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-03` | Cập nhật thông tin kết nối AI |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AI-03` | Cập nhật thông tin kết nối AI |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-04` | Kiểm tra kết nối nhà cung cấp AI |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-04` | Kiểm tra kết nối nhà cung cấp AI |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AI-04` | Kiểm tra kết nối nhà cung cấp AI |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-05` | Chọn mô hình AI mặc định |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-05` | Chọn mô hình AI mặc định |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AI-05` | Chọn mô hình AI mặc định |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-06` | Cấu hình mô hình theo use case |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-06` | Cấu hình mô hình theo use case |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-07` | Cấu hình fallback nhà cung cấp |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-07` | Cấu hình fallback nhà cung cấp |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AI-07` | Cấu hình fallback nhà cung cấp |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-08` | Quản lý khóa hoặc secret AI an toàn |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-08` | Quản lý khóa hoặc secret AI an toàn |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AI-08` | Quản lý khóa hoặc secret AI an toàn |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-09` | Quản lý prompt template |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-09` | Quản lý prompt template |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-10` | Tạo prompt template |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-10` | Tạo prompt template |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-11` | Cập nhật và phiên bản hóa prompt |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-11` | Cập nhật và phiên bản hóa prompt |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-12` | Kiểm thử prompt trên dữ liệu mẫu |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-12` | Kiểm thử prompt trên dữ liệu mẫu |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-13` | Sinh bản nháp nội dung |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-14` | Tóm tắt văn bản hoặc cuộc họp |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-15` | Trích xuất dữ liệu có cấu trúc từ tài liệu |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-16` | Phân loại yêu cầu hoặc văn bản |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-17` | Gợi ý hành động tiếp theo |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-18` | Dịch nội dung |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-19` | Viết lại nội dung theo giọng điệu |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-20` | Tìm kiếm ngữ nghĩa trong dữ liệu được phép |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-21` | Hỏi đáp trên kho tri thức tổ chức |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-22` | Phân tích xu hướng vận hành |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-23` | Sinh insight báo cáo |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-25` | Gợi ý tiêu chí hoặc mẫu biểu |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-26` | Kiểm duyệt nội dung đầu vào hoặc đầu ra |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-28` | Chỉnh sửa và chấp nhận kết quả AI |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-29` | Từ chối kết quả AI |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-30` | Gửi phản hồi chất lượng kết quả AI |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-34` | Cấu hình opt-in hoặc opt-out AI theo tenant |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-35` | Giới hạn AI theo role hoặc mô-đun |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-36` | Cấu hình hạn mức sử dụng AI |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-36` | Cấu hình hạn mức sử dụng AI |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-37` | Theo dõi chi phí và số lượt sử dụng |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-37` | Theo dõi chi phí và số lượt sử dụng |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-38` | Xem lịch sử yêu cầu AI |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-38` | Xem lịch sử yêu cầu AI |
| `UC-AI` | `ACT-PLATFORM-USER` — Người dùng nền tảng | `UC-AI-38` | Xem lịch sử yêu cầu AI |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-40` | Xóa dữ liệu AI theo chính sách lưu giữ |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-40` | Xóa dữ liệu AI theo chính sách lưu giữ |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `EXT-AI-41` | Xử lý lỗi hoặc timeout nhà cung cấp |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `EXT-AI-41` | Xử lý lỗi hoặc timeout nhà cung cấp |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `EXT-AI-41` | Xử lý lỗi hoặc timeout nhà cung cấp |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `EXT-AI-42` | Chuyển sang nhà cung cấp dự phòng |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `EXT-AI-42` | Chuyển sang nhà cung cấp dự phòng |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `EXT-AI-42` | Chuyển sang nhà cung cấp dự phòng |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-43` | Đánh giá chất lượng mô hình định kỳ |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-43` | Đánh giá chất lượng mô hình định kỳ |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AI-43` | Đánh giá chất lượng mô hình định kỳ |
| `UC-AI` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AI-44` | So sánh kết quả giữa các mô hình |
| `UC-AI` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AI-44` | So sánh kết quả giữa các mô hình |
| `UC-AI` | `ACT-EXTERNAL-SERVICE` — Dịch vụ bên ngoài | `UC-AI-44` | So sánh kết quả giữa các mô hình |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-12` | Gắn correlation ID cho chuỗi hành động |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-15` | Xem danh sách audit event |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-16` | Tìm kiếm và lọc audit event |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-17` | Xem chi tiết audit event |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-18` | Xem lịch sử thay đổi của một thực thể |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-19` | Xem hoạt động của một người dùng |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-20` | Xem hoạt động trong một tenant |
| `UC-AUDIT` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AUDIT-20` | Xem hoạt động trong một tenant |
| `UC-AUDIT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AUDIT-20` | Xem hoạt động trong một tenant |
| `UC-AUDIT` | `ACT-TENANT-OWNER` — Chủ sở hữu tenant | `UC-AUDIT-20` | Xem hoạt động trong một tenant |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-21` | Xem log cấp nền tảng theo quyền |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-22` | Truy vết một quy trình bằng correlation ID |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-23` | Xuất audit log |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-24` | Lên lịch báo cáo audit |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-25` | Tạo cảnh báo từ quy tắc audit |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-26` | Cấu hình quy tắc phát hiện hành vi bất thường |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-27` | Gửi audit event đến SIEM hoặc hệ thống ngoài |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-28` | Điều tra sự cố từ audit trail |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-29` | Gắn nhãn hoặc ghi chú điều tra |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-30` | Quản lý chain of custody cho bằng chứng |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-31` | Kiểm chứng tính toàn vẹn log |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `EXT-AUDIT-32` | Cảnh báo khi phát hiện sửa đổi trái phép |
| `UC-AUDIT` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AUDIT-33` | Đặt thời hạn lưu giữ audit |
| `UC-AUDIT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AUDIT-33` | Đặt thời hạn lưu giữ audit |
| `UC-AUDIT` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AUDIT-34` | Lưu trữ audit log lâu dài |
| `UC-AUDIT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AUDIT-34` | Lưu trữ audit log lâu dài |
| `UC-AUDIT` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AUDIT-35` | Áp dụng legal hold cho audit |
| `UC-AUDIT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AUDIT-35` | Áp dụng legal hold cho audit |
| `UC-AUDIT` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AUDIT-36` | Xóa audit log hết hạn theo chính sách |
| `UC-AUDIT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AUDIT-36` | Xóa audit log hết hạn theo chính sách |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-39` | Xem dashboard tuân thủ và audit |
| `UC-AUDIT` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AUDIT-39` | Xem dashboard tuân thủ và audit |
| `UC-AUDIT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AUDIT-39` | Xem dashboard tuân thủ và audit |
| `UC-AUDIT` | `ACT-AUDITOR` — Người kiểm tra hoặc giám sát | `UC-AUDIT-40` | Kiểm tra độ đầy đủ của audit theo loại sự kiện |
| `UC-AUDIT` | `ACT-TENANT-ADMIN` — Quản trị viên tenant | `UC-AUDIT-40` | Kiểm tra độ đầy đủ của audit theo loại sự kiện |
| `UC-AUDIT` | `ACT-PLATFORM-ADMIN` — Quản trị viên nền tảng | `UC-AUDIT-40` | Kiểm tra độ đầy đủ của audit theo loại sự kiện |
