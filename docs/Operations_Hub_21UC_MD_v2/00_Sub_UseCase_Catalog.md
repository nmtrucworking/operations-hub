# DANH MỤC TOÀN BỘ USE CASE THÀNH PHẦN — OPERATIONS HUB

## 1. Nguyên tắc bao phủ

- Không giới hạn mỗi nhóm ở 10 use case thành phần.
- Danh mục này liệt kê toàn bộ use case có thể nhận diện hợp lý trong phạm vi 21 nhóm Use Case và các quy tắc nghiệp vụ hiện hành.
- 'Toàn bộ' được hiểu theo ranh giới sản phẩm đã xác lập, không bao gồm mọi giả thuyết chức năng có thể xuất hiện trong tương lai mà chưa có nhu cầu, actor hoặc quy tắc nghiệp vụ.
- Use case mới được bổ sung theo cơ chế mở; không tái sử dụng mã cũ và không xóa use case chỉ để duy trì số lượng cố định.
- Không tách một use case thành các thao tác kỹ thuật nhỏ nếu các thao tác đó không tạo thành mục tiêu độc lập của actor.

## 2. Thống kê

| Nhóm | Số use case thành phần |
|---|---:|
| `UC-TENANT` | 50 |
| `UC-AUTH` | 36 |
| `UC-USER` | 33 |
| `UC-RBAC` | 38 |
| `UC-ORG` | 34 |
| `UC-BRAND` | 35 |
| `UC-MODULE` | 36 |
| `UC-SETTING` | 28 |
| `UC-MEMBER` | 41 |
| `UC-REQUEST` | 43 |
| `UC-DOCUMENT` | 46 |
| `UC-FINANCE` | 52 |
| `UC-ASSET` | 46 |
| `UC-MEETING` | 40 |
| `UC-DISCIPLINE` | 34 |
| `UC-EVALUATION` | 43 |
| `UC-COMPETITION` | 40 |
| `UC-NOTIFICATION` | 42 |
| `UC-DASHBOARD` | 40 |
| `UC-AI` | 44 |
| `UC-AUDIT` | 40 |
| **Tổng cộng** | **841** |

## 3. Danh mục chi tiết

### UC-TENANT — Quản trị nền tảng SaaS và tenant

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-TENANT-01` | Bắt đầu đăng ký tổ chức | Khởi tạo đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-02` | Lưu nháp hồ sơ đăng ký tổ chức | Cho phép lưu nháp hồ sơ đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-03` | Kiểm tra điều kiện đăng ký tổ chức | Kiểm tra điều kiện đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-04` | Chuẩn hóa và kiểm tra tên định danh | Thực hiện nghiệp vụ “Chuẩn hóa và kiểm tra tên định danh” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-05` | Chuẩn hóa và kiểm tra slug | Thực hiện nghiệp vụ “Chuẩn hóa và kiểm tra slug” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-06` | Kiểm tra tên miền hoặc subdomain mong muốn | Kiểm tra tên miền hoặc subdomain mong muốn; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-07` | Cung cấp thông tin người đại diện | Thực hiện nghiệp vụ “Cung cấp thông tin người đại diện” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-08` | Tải lên minh chứng đăng ký tổ chức | Cho phép tải lên minh chứng đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-09` | Xác minh email hoặc số điện thoại người đăng ký | Thực hiện nghiệp vụ “Xác minh email hoặc số điện thoại người đăng ký” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-10` | Chấp nhận điều khoản sử dụng nền tảng | Thực hiện nghiệp vụ “Chấp nhận điều khoản sử dụng nền tảng” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-11` | Gửi hồ sơ đăng ký tổ chức | Cho phép gửi hồ sơ đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-12` | Theo dõi trạng thái hồ sơ đăng ký | Cho phép theo dõi trạng thái hồ sơ đăng ký; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-13` | Yêu cầu bổ sung hoặc chỉnh sửa hồ sơ đăng ký | Thực hiện nghiệp vụ “Yêu cầu bổ sung hoặc chỉnh sửa hồ sơ đăng ký” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-14` | Bổ sung hồ sơ đăng ký theo yêu cầu | Thực hiện nghiệp vụ “Bổ sung hồ sơ đăng ký theo yêu cầu” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-15` | Rút hồ sơ đăng ký tổ chức | Thực hiện nghiệp vụ “Rút hồ sơ đăng ký tổ chức” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-16` | Tiếp nhận và phân công xử lý hồ sơ đăng ký | Thực hiện nghiệp vụ “Tiếp nhận và phân công xử lý hồ sơ đăng ký” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-17` | Thẩm định hồ sơ đăng ký tổ chức | Thực hiện nghiệp vụ “Thẩm định hồ sơ đăng ký tổ chức” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-18` | Phê duyệt hồ sơ đăng ký tổ chức | Cho phép chủ thể có thẩm quyền phê duyệt hồ sơ đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-19` | Từ chối hồ sơ đăng ký tổ chức | Cho phép chủ thể có thẩm quyền từ chối hồ sơ đăng ký tổ chức; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-20` | Khởi tạo tenant | Cho phép khởi tạo tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-21` | Khởi tạo cấu hình mặc định cho tenant | Cho phép khởi tạo cấu hình mặc định cho tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-22` | Khởi tạo role và permission mặc định | Cho phép khởi tạo role và permission mặc định; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-23` | Thiết lập Owner ban đầu | Cho phép thiết lập Owner ban đầu; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-24` | Kích hoạt tenant | Cho phép kích hoạt tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-25` | Chọn gói dịch vụ hoặc phạm vi sử dụng | Cho phép lựa chọn gói dịch vụ hoặc phạm vi sử dụng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-26` | Cấu hình thông tin thanh toán và liên hệ dịch vụ | Cho phép cấu hình thông tin thanh toán và liên hệ dịch vụ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-27` | Xem danh sách tenant ở cấp nền tảng | Cho phép actor có quyền xem danh sách tenant ở cấp nền tảng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-28` | Tìm kiếm và lọc tenant | Thực hiện nghiệp vụ “Tìm kiếm và lọc tenant” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-29` | Xem chi tiết tenant | Cho phép actor có quyền xem chi tiết tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-30` | Cập nhật hồ sơ tenant | Cho phép cập nhật hồ sơ tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-31` | Xem lịch sử trạng thái tenant | Cho phép actor có quyền xem lịch sử trạng thái tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-32` | Tạm khóa tenant | Thực hiện nghiệp vụ “Tạm khóa tenant” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-33` | Khôi phục tenant bị tạm khóa | Cho phép khôi phục tenant bị tạm khóa; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-34` | Lưu trữ tenant | Cho phép lưu trữ tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-35` | Khôi phục tenant đã lưu trữ | Cho phép khôi phục tenant đã lưu trữ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-36` | Chuyển quyền sở hữu tenant | Cho phép chuyển quyền sở hữu tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-37` | Bổ nhiệm thêm Owner | Thực hiện nghiệp vụ “Bổ nhiệm thêm Owner” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-38` | Thu hồi quyền Owner không phải Owner cuối cùng | Cho phép thu hồi quyền Owner không phải Owner cuối cùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-39` | Xuất dữ liệu tenant | Cho phép xuất dữ liệu tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-40` | Yêu cầu đóng tenant | Thực hiện nghiệp vụ “Yêu cầu đóng tenant” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-41` | Hủy yêu cầu đóng tenant | Cho phép hủy yêu cầu đóng tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-42` | Đưa tenant vào thời gian chờ xóa | Thực hiện nghiệp vụ “Đưa tenant vào thời gian chờ xóa” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-43` | Khôi phục tenant trong thời gian chờ xóa | Cho phép khôi phục tenant trong thời gian chờ xóa; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-44` | Thực hiện xóa hoặc ẩn danh dữ liệu tenant theo chính sách | Thực hiện xóa hoặc ẩn danh dữ liệu tenant theo chính sách; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-45` | Quản lý thời hạn lưu giữ dữ liệu tenant | Cho phép quản lý thời hạn lưu giữ dữ liệu tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-46` | Cấu hình subdomain tenant | Cho phép cấu hình subdomain tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-47` | Cấu hình tên miền tùy chỉnh | Cho phép cấu hình tên miền tùy chỉnh; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-48` | Xác minh tên miền tùy chỉnh | Thực hiện nghiệp vụ “Xác minh tên miền tùy chỉnh” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-TENANT-49` | Quản lý trạng thái dịch vụ hoặc hạn mức tenant | Cho phép quản lý trạng thái dịch vụ hoặc hạn mức tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-TENANT-50` | Ghi nhận hỗ trợ quản trị có kiểm soát đối với tenant | Ghi nhận hỗ trợ quản trị có kiểm soát đối với tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |

### UC-AUTH — Xác thực và quản lý phiên

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-AUTH-01` | Đăng ký tài khoản bằng email | Cho phép đăng ký tài khoản bằng email; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-02` | Đăng ký tài khoản bằng định danh được hỗ trợ | Cho phép đăng ký tài khoản bằng định danh được hỗ trợ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-03` | Xác minh địa chỉ email | Thực hiện nghiệp vụ “Xác minh địa chỉ email” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-04` | Gửi lại liên kết xác minh | Cho phép gửi lại liên kết xác minh; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-05` | Đăng nhập bằng mật khẩu | Cho phép đăng nhập bằng mật khẩu; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-06` | Đăng nhập bằng SSO hoặc OAuth | Cho phép đăng nhập bằng SSO hoặc OAuth; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-07` | Đăng nhập không mật khẩu bằng liên kết dùng một lần | Cho phép đăng nhập không mật khẩu bằng liên kết dùng một lần; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-08` | Bắt đầu xác thực đa yếu tố | Khởi tạo xác thực đa yếu tố; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-09` | Đăng ký phương thức MFA | Cho phép đăng ký phương thức MFA; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-10` | Xác minh mã MFA | Thực hiện nghiệp vụ “Xác minh mã MFA” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-11` | Quản lý mã khôi phục MFA | Cho phép quản lý mã khôi phục MFA; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-12` | Tắt hoặc thay đổi phương thức MFA | Thực hiện nghiệp vụ “Tắt hoặc thay đổi phương thức MFA” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-13` | Thực hiện xác thực tăng cường cho thao tác nhạy cảm | Thực hiện xác thực tăng cường cho thao tác nhạy cảm; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-14` | Đăng xuất phiên hiện tại | Cho phép đăng xuất phiên hiện tại; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-15` | Đăng xuất khỏi tất cả thiết bị | Cho phép đăng xuất khỏi tất cả thiết bị; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-16` | Làm mới access token hoặc phiên | Thực hiện nghiệp vụ “Làm mới access token hoặc phiên” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-17` | Khôi phục phiên hợp lệ | Cho phép khôi phục phiên hợp lệ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-18` | Yêu cầu quên mật khẩu | Thực hiện nghiệp vụ “Yêu cầu quên mật khẩu” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-19` | Đặt lại mật khẩu | Cho phép đặt lại mật khẩu; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-20` | Đổi mật khẩu khi biết mật khẩu hiện tại | Thực hiện nghiệp vụ “Đổi mật khẩu khi biết mật khẩu hiện tại” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-21` | Buộc đổi mật khẩu ở lần đăng nhập tiếp theo | Thực hiện nghiệp vụ “Buộc đổi mật khẩu ở lần đăng nhập tiếp theo” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-22` | Khóa đăng nhập sau nhiều lần thất bại | Thực hiện nghiệp vụ “Khóa đăng nhập sau nhiều lần thất bại” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-23` | Mở khóa đăng nhập theo chính sách | Cho phép mở khóa đăng nhập theo chính sách; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-24` | Xác minh CAPTCHA hoặc chống tự động hóa | Thực hiện nghiệp vụ “Xác minh CAPTCHA hoặc chống tự động hóa” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-25` | Xem danh sách phiên đăng nhập | Cho phép actor có quyền xem danh sách phiên đăng nhập; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-26` | Thu hồi một phiên đăng nhập | Cho phép thu hồi một phiên đăng nhập; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-27` | Đánh dấu thiết bị tin cậy | Thực hiện nghiệp vụ “Đánh dấu thiết bị tin cậy” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-28` | Thu hồi thiết bị tin cậy | Cho phép thu hồi thiết bị tin cậy; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-29` | Chấp nhận lời mời tham gia tenant qua liên kết | Thực hiện nghiệp vụ “Chấp nhận lời mời tham gia tenant qua liên kết” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-30` | Từ chối lời mời tham gia tenant | Cho phép chủ thể có thẩm quyền từ chối lời mời tham gia tenant; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-31` | Chọn tenant context sau khi đăng nhập | Cho phép lựa chọn tenant context sau khi đăng nhập; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-32` | Chuyển tenant context khi đang hoạt động | Cho phép chuyển tenant context khi đang hoạt động; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-AUTH-33` | Xử lý phiên khi tenant hoặc membership bị khóa | Thực hiện nghiệp vụ “Xử lý phiên khi tenant hoặc membership bị khóa” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-34` | Xử lý tài khoản chưa xác minh | Thực hiện nghiệp vụ “Xử lý tài khoản chưa xác minh” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-35` | Xử lý thông tin xác thực hết hạn hoặc không hợp lệ | Thực hiện nghiệp vụ “Xử lý thông tin xác thực hết hạn hoặc không hợp lệ” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AUTH-36` | Ghi nhận sự kiện xác thực và cảnh báo bảo mật | Ghi nhận sự kiện xác thực và cảnh báo bảo mật; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |

### UC-USER — Quản lý tài khoản người dùng

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-USER-01` | Xem hồ sơ tài khoản cá nhân | Cho phép actor có quyền xem hồ sơ tài khoản cá nhân; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-02` | Cập nhật họ tên và thông tin liên hệ | Cho phép cập nhật họ tên và thông tin liên hệ; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-03` | Cập nhật ảnh đại diện | Cho phép cập nhật ảnh đại diện; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-04` | Thay đổi địa chỉ email đăng nhập | Thực hiện nghiệp vụ “Thay đổi địa chỉ email đăng nhập” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-05` | Xác minh địa chỉ email mới | Thực hiện nghiệp vụ “Xác minh địa chỉ email mới” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-06` | Thay đổi tên người dùng khi chính sách cho phép | Thực hiện nghiệp vụ “Thay đổi tên người dùng khi chính sách cho phép” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-07` | Xem danh sách tenant đang tham gia | Cho phép actor có quyền xem danh sách tenant đang tham gia; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-08` | Xem trạng thái tài khoản toàn cục | Cho phép actor có quyền xem trạng thái tài khoản toàn cục; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-09` | Xem lịch sử hoạt động tài khoản cá nhân | Cho phép actor có quyền xem lịch sử hoạt động tài khoản cá nhân; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-10` | Xuất dữ liệu cá nhân | Cho phép xuất dữ liệu cá nhân; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-11` | Yêu cầu đóng tài khoản | Thực hiện nghiệp vụ “Yêu cầu đóng tài khoản” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-12` | Hủy yêu cầu đóng tài khoản | Cho phép hủy yêu cầu đóng tài khoản; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-13` | Khôi phục tài khoản trong thời gian chờ đóng | Cho phép khôi phục tài khoản trong thời gian chờ đóng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-14` | Quản trị viên xem danh sách người dùng nền tảng | Thực hiện nghiệp vụ “Quản trị viên xem danh sách người dùng nền tảng” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-15` | Tìm kiếm và lọc người dùng | Thực hiện nghiệp vụ “Tìm kiếm và lọc người dùng” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-16` | Xem chi tiết người dùng | Cho phép actor có quyền xem chi tiết người dùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-17` | Tạo tài khoản người dùng bởi quản trị viên | Cho phép tạo tài khoản người dùng bởi quản trị viên; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-18` | Kích hoạt tài khoản người dùng | Cho phép kích hoạt tài khoản người dùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-19` | Vô hiệu hóa tài khoản người dùng | Cho phép vô hiệu hóa tài khoản người dùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-20` | Khóa tài khoản vì lý do bảo mật | Thực hiện nghiệp vụ “Khóa tài khoản vì lý do bảo mật” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-21` | Mở khóa tài khoản | Cho phép mở khóa tài khoản; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-22` | Reset mật khẩu bởi quản trị viên có quyền | Thực hiện nghiệp vụ “Reset mật khẩu bởi quản trị viên có quyền” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-23` | Buộc người dùng đổi mật khẩu | Thực hiện nghiệp vụ “Buộc người dùng đổi mật khẩu” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-24` | Liên kết tài khoản với danh tính bên ngoài | Cho phép liên kết tài khoản với danh tính bên ngoài; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-25` | Gỡ liên kết danh tính bên ngoài | Thực hiện nghiệp vụ “Gỡ liên kết danh tính bên ngoài” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-26` | Hợp nhất tài khoản trùng lặp | Thực hiện nghiệp vụ “Hợp nhất tài khoản trùng lặp” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-27` | Tách tài khoản bị liên kết sai | Thực hiện nghiệp vụ “Tách tài khoản bị liên kết sai” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-28` | Ẩn danh dữ liệu cá nhân theo chính sách | Thực hiện nghiệp vụ “Ẩn danh dữ liệu cá nhân theo chính sách” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-29` | Khôi phục tài khoản đã vô hiệu hóa | Cho phép khôi phục tài khoản đã vô hiệu hóa; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-30` | Quản lý trạng thái đồng ý hoặc điều khoản của người dùng | Cho phép quản lý trạng thái đồng ý hoặc điều khoản của người dùng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-31` | Xử lý người dùng không còn membership nào | Thực hiện nghiệp vụ “Xử lý người dùng không còn membership nào” trong đúng phạm vi nền tảng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-USER-32` | Xem và quản lý platform role của người dùng cấp nền tảng | Cho phép actor có quyền xem và quản lý platform role của người dùng cấp nền tảng; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |
| `UC-USER-33` | Ghi audit thay đổi tài khoản nhạy cảm | Cho phép ghi audit thay đổi tài khoản nhạy cảm; phải kiểm tra quyền, trạng thái và phạm vi nền tảng trước khi ghi nhận kết quả. |

### UC-RBAC — Quản lý vai trò và phân quyền

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-RBAC-01` | Xem danh mục permission của nền tảng | Cho phép actor có quyền xem danh mục permission của nền tảng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-02` | Xem role mặc định của tenant | Cho phép actor có quyền xem role mặc định của tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-03` | Xem chi tiết role | Cho phép actor có quyền xem chi tiết role; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-04` | Tạo role tùy chỉnh | Cho phép tạo role tùy chỉnh; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-05` | Sao chép role | Thực hiện nghiệp vụ “Sao chép role” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-06` | Cập nhật tên và mô tả role | Cho phép cập nhật tên và mô tả role; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-07` | Kích hoạt role | Cho phép kích hoạt role; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-08` | Vô hiệu hóa role | Cho phép vô hiệu hóa role; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-09` | Lưu trữ role | Cho phép lưu trữ role; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-10` | Xóa role chưa được sử dụng | Cho phép xóa hoặc xử lý xóa role chưa được sử dụng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-11` | Gán permission cho role | Cho phép gán permission cho role; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-12` | Thu hồi permission khỏi role | Cho phép thu hồi permission khỏi role; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-13` | Gán nhiều permission theo nhóm | Cho phép gán nhiều permission theo nhóm; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-14` | So sánh hai role | Thực hiện nghiệp vụ “So sánh hai role” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-15` | Xuất ma trận role và permission | Cho phép xuất ma trận role và permission; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-16` | Nhập ma trận role và permission | Cho phép nhập ma trận role và permission; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-17` | Gán role cho membership | Cho phép gán role cho membership; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-18` | Thu hồi role khỏi membership | Cho phép thu hồi role khỏi membership; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-19` | Gán role hàng loạt | Cho phép gán role hàng loạt; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-20` | Gán role có thời hạn | Cho phép gán role có thời hạn; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-21` | Gia hạn role có thời hạn | Thực hiện nghiệp vụ “Gia hạn role có thời hạn” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-22` | Gán role theo đơn vị trực thuộc | Cho phép gán role theo đơn vị trực thuộc; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-23` | Gán quyền theo phạm vi tài nguyên | Cho phép gán quyền theo phạm vi tài nguyên; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-24` | Cấu hình role kế thừa khi chính sách cho phép | Cho phép cấu hình role kế thừa khi chính sách cho phép; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-25` | Cấu hình quy tắc từ chối hoặc ngoại lệ quyền | Cho phép cấu hình quy tắc từ chối hoặc ngoại lệ quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-26` | Ủy quyền quản trị role trong phạm vi giới hạn | Thực hiện nghiệp vụ “Ủy quyền quản trị role trong phạm vi giới hạn” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-27` | Kiểm tra xung đột phân tách trách nhiệm | Kiểm tra xung đột phân tách trách nhiệm; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-28` | Ngăn người dùng tự nâng quyền | Thực hiện nghiệp vụ “Ngăn người dùng tự nâng quyền” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-29` | Mô phỏng quyền của membership | Thực hiện nghiệp vụ “Mô phỏng quyền của membership” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-30` | Giải thích quyền hiệu lực | Thực hiện nghiệp vụ “Giải thích quyền hiệu lực” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-31` | Kiểm tra quyền đối với một hành động cụ thể | Kiểm tra quyền đối với một hành động cụ thể; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-32` | Rà soát quyền định kỳ | Thực hiện nghiệp vụ “Rà soát quyền định kỳ” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-33` | Xác nhận lại quyền truy cập | Thực hiện nghiệp vụ “Xác nhận lại quyền truy cập” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-34` | Thu hồi quyền không còn cần thiết | Cho phép thu hồi quyền không còn cần thiết; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-35` | Thiết lập quyền khẩn cấp có thời hạn | Cho phép thiết lập quyền khẩn cấp có thời hạn; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-36` | Kết thúc quyền khẩn cấp | Thực hiện nghiệp vụ “Kết thúc quyền khẩn cấp” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-RBAC-37` | Xem lịch sử thay đổi role và permission | Cho phép actor có quyền xem lịch sử thay đổi role và permission; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-RBAC-38` | Quản lý role cấp nền tảng tách biệt role tenant | Cho phép quản lý role cấp nền tảng tách biệt role tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |

### UC-ORG — Quản lý thông tin và cơ cấu tổ chức

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-ORG-01` | Xem hồ sơ tổ chức | Cho phép actor có quyền xem hồ sơ tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-02` | Cập nhật tên và mô tả tổ chức | Cho phép cập nhật tên và mô tả tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-03` | Cập nhật thông tin liên hệ tổ chức | Cho phép cập nhật thông tin liên hệ tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-04` | Cập nhật thông tin pháp lý hoặc định danh nội bộ | Cho phép cập nhật thông tin pháp lý hoặc định danh nội bộ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-05` | Quản lý trường dữ liệu mở rộng của tổ chức | Cho phép quản lý trường dữ liệu mở rộng của tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-06` | Xem cơ cấu tổ chức hiện tại | Cho phép actor có quyền xem cơ cấu tổ chức hiện tại; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-07` | Xem cơ cấu tổ chức theo thời điểm lịch sử | Cho phép actor có quyền xem cơ cấu tổ chức theo thời điểm lịch sử; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-08` | Tạo đơn vị trực thuộc | Cho phép tạo đơn vị trực thuộc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-09` | Cập nhật đơn vị trực thuộc | Cho phép cập nhật đơn vị trực thuộc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-10` | Sắp xếp thứ tự đơn vị | Thực hiện nghiệp vụ “Sắp xếp thứ tự đơn vị” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ORG-11` | Di chuyển đơn vị trong cơ cấu | Thực hiện nghiệp vụ “Di chuyển đơn vị trong cơ cấu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ORG-12` | Thiết lập đơn vị cha hoặc con | Cho phép thiết lập đơn vị cha hoặc con; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-13` | Kiểm tra và ngăn quan hệ vòng lặp | Kiểm tra và ngăn quan hệ vòng lặp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-14` | Vô hiệu hóa đơn vị | Cho phép vô hiệu hóa đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-15` | Kích hoạt lại đơn vị | Cho phép kích hoạt lại đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-16` | Lưu trữ đơn vị | Cho phép lưu trữ đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-17` | Chuyển dữ liệu trước khi đóng đơn vị | Cho phép chuyển dữ liệu trước khi đóng đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-18` | Hợp nhất đơn vị | Thực hiện nghiệp vụ “Hợp nhất đơn vị” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ORG-19` | Tách đơn vị | Thực hiện nghiệp vụ “Tách đơn vị” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ORG-20` | Tạo loại đơn vị | Cho phép tạo loại đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-21` | Quản lý chức vụ hoặc vị trí | Cho phép quản lý chức vụ hoặc vị trí; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-22` | Tạo chức vụ | Cho phép tạo chức vụ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-23` | Cập nhật chức vụ | Cho phép cập nhật chức vụ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-24` | Vô hiệu hóa chức vụ | Cho phép vô hiệu hóa chức vụ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-25` | Gán người quản lý đơn vị | Cho phép gán người quản lý đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-26` | Kết thúc nhiệm kỳ người quản lý đơn vị | Thực hiện nghiệp vụ “Kết thúc nhiệm kỳ người quản lý đơn vị” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ORG-27` | Quản lý nhiệm kỳ tổ chức | Cho phép quản lý nhiệm kỳ tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-28` | Quản lý năm học hoặc kỳ hoạt động | Cho phép quản lý năm học hoặc kỳ hoạt động; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-29` | Nhập cơ cấu tổ chức | Cho phép nhập cơ cấu tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-30` | Xuất cơ cấu tổ chức | Cho phép xuất cơ cấu tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-31` | Sao chép cấu trúc từ mẫu nền tảng | Thực hiện nghiệp vụ “Sao chép cấu trúc từ mẫu nền tảng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-ORG-32` | Cấu hình quy tắc đặt mã đơn vị | Cho phép cấu hình quy tắc đặt mã đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-33` | Xem lịch sử thay đổi cơ cấu | Cho phép actor có quyền xem lịch sử thay đổi cơ cấu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-ORG-34` | Kiểm tra tính toàn vẹn cơ cấu tổ chức | Kiểm tra tính toàn vẹn cơ cấu tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

### UC-BRAND — Quản lý branding và giao diện tổ chức

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-BRAND-01` | Xem cấu hình branding hiện hành | Cho phép actor có quyền xem cấu hình branding hiện hành; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-02` | Tạo bản nháp branding | Cho phép tạo bản nháp branding; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-03` | Cập nhật tên hiển thị tổ chức | Cho phép cập nhật tên hiển thị tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-04` | Tải lên logo chính | Cho phép tải lên logo chính; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-05` | Tải lên logo rút gọn | Cho phép tải lên logo rút gọn; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-06` | Tải lên favicon hoặc biểu tượng ứng dụng | Cho phép tải lên favicon hoặc biểu tượng ứng dụng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-07` | Cấu hình màu chủ đạo | Cho phép cấu hình màu chủ đạo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-08` | Cấu hình bảng màu phụ | Cho phép cấu hình bảng màu phụ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-09` | Cấu hình kiểu chữ được hỗ trợ | Cho phép cấu hình kiểu chữ được hỗ trợ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-10` | Cấu hình chế độ sáng và tối | Cho phép cấu hình chế độ sáng và tối; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-11` | Cấu hình ảnh nền hoặc ảnh đăng nhập | Cho phép cấu hình ảnh nền hoặc ảnh đăng nhập; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-12` | Cấu hình trang đăng nhập theo tenant | Cho phép cấu hình trang đăng nhập theo tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-13` | Cấu hình nội dung chân trang và thông tin liên hệ | Cho phép cấu hình nội dung chân trang và thông tin liên hệ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-14` | Cấu hình thuật ngữ hiển thị theo tổ chức | Cho phép cấu hình thuật ngữ hiển thị theo tổ chức; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-15` | Cấu hình nhãn menu và tên mô-đun | Cho phép cấu hình nhãn menu và tên mô-đun; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-16` | Cấu hình branding email | Cho phép cấu hình branding email; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-17` | Cấu hình branding thông báo | Cho phép cấu hình branding thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-18` | Cấu hình branding tài liệu và bản xuất | Cho phép cấu hình branding tài liệu và bản xuất; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-19` | Quản lý thư viện tài sản thương hiệu | Cho phép quản lý thư viện tài sản thương hiệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-20` | Tải lên tài sản thương hiệu | Cho phép tải lên tài sản thương hiệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-21` | Thay thế tài sản thương hiệu | Thực hiện nghiệp vụ “Thay thế tài sản thương hiệu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-BRAND-22` | Lưu trữ tài sản thương hiệu | Cho phép lưu trữ tài sản thương hiệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-23` | Kiểm tra loại và kích thước tệp branding | Kiểm tra loại và kích thước tệp branding; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-24` | Kiểm tra độ tương phản và khả năng đọc | Kiểm tra độ tương phản và khả năng đọc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-25` | Xem trước branding | Cho phép actor có quyền xem trước branding; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-26` | Xuất bản branding | Cho phép xuất bản branding; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-27` | Lên lịch xuất bản branding | Thực hiện nghiệp vụ “Lên lịch xuất bản branding” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-BRAND-28` | Khôi phục phiên bản branding trước | Cho phép khôi phục phiên bản branding trước; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-29` | Xem lịch sử phiên bản branding | Cho phép actor có quyền xem lịch sử phiên bản branding; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-30` | Sao chép branding từ mẫu nền tảng | Thực hiện nghiệp vụ “Sao chép branding từ mẫu nền tảng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-BRAND-31` | Đặt lại branding về mặc định nền tảng | Cho phép đặt lại branding về mặc định nền tảng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-32` | Cấu hình subdomain hiển thị thương hiệu | Cho phép cấu hình subdomain hiển thị thương hiệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-33` | Cấu hình tên miền thương hiệu tùy chỉnh | Cho phép cấu hình tên miền thương hiệu tùy chỉnh; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-BRAND-34` | Xác minh tên miền thương hiệu | Thực hiện nghiệp vụ “Xác minh tên miền thương hiệu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-BRAND-35` | Kiểm tra branding khi chuyển tenant context | Kiểm tra branding khi chuyển tenant context; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

### UC-MODULE — Cấu hình module và quy trình nghiệp vụ

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

### UC-SETTING — Thiết lập cá nhân

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-SETTING-01` | Xem thiết lập cá nhân | Cho phép actor có quyền xem thiết lập cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-02` | Cấu hình ngôn ngữ giao diện | Cho phép cấu hình ngôn ngữ giao diện; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-03` | Cấu hình múi giờ | Cho phép cấu hình múi giờ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-04` | Cấu hình định dạng ngày giờ | Cho phép cấu hình định dạng ngày giờ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-05` | Cấu hình định dạng số và tiền tệ | Cho phép cấu hình định dạng số và tiền tệ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-06` | Chọn giao diện sáng hoặc tối | Cho phép lựa chọn giao diện sáng hoặc tối; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-07` | Cấu hình mật độ hiển thị | Cho phép cấu hình mật độ hiển thị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-08` | Cấu hình kích thước chữ | Cho phép cấu hình kích thước chữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-09` | Cấu hình tùy chọn trợ năng | Cho phép cấu hình tùy chọn trợ năng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-10` | Cấu hình độ tương phản cá nhân | Cho phép cấu hình độ tương phản cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-11` | Cấu hình phím tắt | Cho phép cấu hình phím tắt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-12` | Cấu hình trang bắt đầu mặc định | Cho phép cấu hình trang bắt đầu mặc định; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-13` | Chọn tenant mặc định | Cho phép lựa chọn tenant mặc định; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-14` | Chọn dashboard mặc định | Cho phép lựa chọn dashboard mặc định; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-15` | Lưu bộ lọc thường dùng | Cho phép lưu bộ lọc thường dùng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-16` | Quản lý cột hiển thị của bảng | Cho phép quản lý cột hiển thị của bảng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-17` | Lưu chế độ sắp xếp và phân trang | Cho phép lưu chế độ sắp xếp và phân trang; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-18` | Cấu hình kênh nhận thông báo | Cho phép cấu hình kênh nhận thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-19` | Cấu hình loại thông báo được nhận | Cho phép cấu hình loại thông báo được nhận; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-20` | Cấu hình giờ yên lặng | Cho phép cấu hình giờ yên lặng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-21` | Cấu hình bản tin tổng hợp | Cho phép cấu hình bản tin tổng hợp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-22` | Cấu hình nhắc việc cá nhân | Cho phép cấu hình nhắc việc cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-23` | Cấu hình quyền hiển thị thông tin cá nhân | Cho phép cấu hình quyền hiển thị thông tin cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-24` | Quản lý tài khoản hoặc lịch tích hợp | Cho phép quản lý tài khoản hoặc lịch tích hợp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-25` | Đồng bộ thiết lập trên nhiều thiết bị | Thực hiện nghiệp vụ “Đồng bộ thiết lập trên nhiều thiết bị” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-SETTING-26` | Đặt lại thiết lập cá nhân | Cho phép đặt lại thiết lập cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-27` | Xuất thiết lập cá nhân | Cho phép xuất thiết lập cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-SETTING-28` | Khôi phục thiết lập từ bản sao | Cho phép khôi phục thiết lập từ bản sao; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

### UC-MEMBER — Quản lý thành viên và membership

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

### UC-REQUEST — Quản lý đơn từ và yêu cầu nội bộ

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-REQUEST-01` | Xem danh mục loại yêu cầu | Cho phép actor có quyền xem danh mục loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-02` | Tạo loại yêu cầu | Cho phép tạo loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-03` | Cập nhật loại yêu cầu | Cho phép cập nhật loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-04` | Vô hiệu hóa loại yêu cầu | Cho phép vô hiệu hóa loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-05` | Cấu hình biểu mẫu yêu cầu | Cho phép cấu hình biểu mẫu yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-06` | Cấu hình quy trình phê duyệt yêu cầu | Cho phép cấu hình quy trình phê duyệt yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-07` | Tạo bản nháp yêu cầu | Cho phép tạo bản nháp yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-08` | Cập nhật bản nháp yêu cầu | Cho phép cập nhật bản nháp yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-09` | Đính kèm tệp vào yêu cầu | Thực hiện nghiệp vụ “Đính kèm tệp vào yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-10` | Kiểm tra dữ liệu yêu cầu | Kiểm tra dữ liệu yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-11` | Gửi yêu cầu | Cho phép gửi yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-12` | Xem yêu cầu của cá nhân | Cho phép actor có quyền xem yêu cầu của cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-13` | Xem chi tiết yêu cầu | Cho phép actor có quyền xem chi tiết yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-14` | Tìm kiếm và lọc yêu cầu | Thực hiện nghiệp vụ “Tìm kiếm và lọc yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-15` | Rút yêu cầu đang chờ xử lý | Thực hiện nghiệp vụ “Rút yêu cầu đang chờ xử lý” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-16` | Hủy yêu cầu theo quyền | Cho phép hủy yêu cầu theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-17` | Sao chép yêu cầu | Thực hiện nghiệp vụ “Sao chép yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-18` | Chuyển loại yêu cầu | Cho phép chuyển loại yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-19` | Yêu cầu người gửi bổ sung thông tin | Thực hiện nghiệp vụ “Yêu cầu người gửi bổ sung thông tin” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-20` | Bổ sung và gửi lại yêu cầu | Thực hiện nghiệp vụ “Bổ sung và gửi lại yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-21` | Phân công người xử lý | Thực hiện nghiệp vụ “Phân công người xử lý” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-22` | Chuyển người xử lý | Cho phép chuyển người xử lý; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-23` | Ủy quyền phê duyệt yêu cầu | Thực hiện nghiệp vụ “Ủy quyền phê duyệt yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-24` | Thực hiện bước phê duyệt | Thực hiện bước phê duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-25` | Phê duyệt yêu cầu | Cho phép chủ thể có thẩm quyền phê duyệt yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-26` | Từ chối yêu cầu | Cho phép chủ thể có thẩm quyền từ chối yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-27` | Trả yêu cầu để chỉnh sửa | Thực hiện nghiệp vụ “Trả yêu cầu để chỉnh sửa” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-28` | Thực hiện phê duyệt nhiều cấp | Thực hiện phê duyệt nhiều cấp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-29` | Kiểm tra nguyên tắc không tự phê duyệt | Kiểm tra nguyên tắc không tự phê duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-30` | Theo dõi thời hạn xử lý | Cho phép theo dõi thời hạn xử lý; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-31` | Gửi nhắc việc hoặc cảnh báo quá hạn | Cho phép gửi nhắc việc hoặc cảnh báo quá hạn; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-32` | Thêm bình luận trao đổi | Thực hiện nghiệp vụ “Thêm bình luận trao đổi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-33` | Thêm ghi chú nội bộ | Thực hiện nghiệp vụ “Thêm ghi chú nội bộ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-REQUEST-34` | Xem lịch sử trạng thái yêu cầu | Cho phép actor có quyền xem lịch sử trạng thái yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-35` | Liên kết yêu cầu với hồ sơ nghiệp vụ khác | Cho phép liên kết yêu cầu với hồ sơ nghiệp vụ khác; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-36` | Sinh văn bản từ yêu cầu | Cho phép sinh văn bản từ yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-37` | Tạo giao dịch tài chính từ yêu cầu được duyệt | Cho phép tạo giao dịch tài chính từ yêu cầu được duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-38` | Tạo tác vụ hoặc sự kiện từ yêu cầu được duyệt | Cho phép tạo tác vụ hoặc sự kiện từ yêu cầu được duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-39` | Mở lại yêu cầu đã đóng theo quyền | Cho phép mở lại yêu cầu đã đóng theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-40` | Đóng yêu cầu | Cho phép đóng yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-41` | Lưu trữ yêu cầu | Cho phép lưu trữ yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-42` | Xuất danh sách hoặc báo cáo yêu cầu | Cho phép xuất danh sách hoặc báo cáo yêu cầu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-REQUEST-43` | Xử lý hàng loạt yêu cầu | Thực hiện nghiệp vụ “Xử lý hàng loạt yêu cầu” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |

### UC-DOCUMENT — Quản lý văn bản, biểu mẫu và mẫu tài liệu

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-DOCUMENT-01` | Xem danh mục loại văn bản | Cho phép actor có quyền xem danh mục loại văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-02` | Tạo loại văn bản | Cho phép tạo loại văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-03` | Cập nhật loại văn bản | Cho phép cập nhật loại văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-04` | Quản lý mẫu tài liệu | Cho phép quản lý mẫu tài liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-05` | Tạo mẫu tài liệu | Cho phép tạo mẫu tài liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-06` | Cập nhật mẫu tài liệu | Cho phép cập nhật mẫu tài liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-07` | Quản lý biến dữ liệu trong mẫu | Cho phép quản lý biến dữ liệu trong mẫu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-08` | Xem trước mẫu tài liệu | Cho phép actor có quyền xem trước mẫu tài liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-09` | Tạo văn bản nháp | Cho phép tạo văn bản nháp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-10` | Tải lên văn bản | Cho phép tải lên văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-11` | Sinh văn bản từ mẫu | Cho phép sinh văn bản từ mẫu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-12` | Sinh hàng loạt văn bản từ dữ liệu | Cho phép sinh hàng loạt văn bản từ dữ liệu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-13` | Cập nhật metadata văn bản | Cho phép cập nhật metadata văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-14` | Chỉnh sửa nội dung văn bản | Thực hiện nghiệp vụ “Chỉnh sửa nội dung văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-15` | Quản lý phiên bản văn bản | Cho phép quản lý phiên bản văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-16` | So sánh hai phiên bản | Thực hiện nghiệp vụ “So sánh hai phiên bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-17` | Khôi phục phiên bản trước | Cho phép khôi phục phiên bản trước; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-18` | Gắn chủ sở hữu hoặc đơn vị phụ trách | Thực hiện nghiệp vụ “Gắn chủ sở hữu hoặc đơn vị phụ trách” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-19` | Phân quyền truy cập văn bản | Thực hiện nghiệp vụ “Phân quyền truy cập văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-20` | Chia sẻ văn bản nội bộ | Thực hiện nghiệp vụ “Chia sẻ văn bản nội bộ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-21` | Gửi văn bản để rà soát | Cho phép gửi văn bản để rà soát; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-22` | Bình luận hoặc góp ý văn bản | Thực hiện nghiệp vụ “Bình luận hoặc góp ý văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-23` | Phân công người rà soát | Thực hiện nghiệp vụ “Phân công người rà soát” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-24` | Phê duyệt văn bản | Cho phép chủ thể có thẩm quyền phê duyệt văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-25` | Từ chối hoặc yêu cầu sửa văn bản | Cho phép chủ thể có thẩm quyền từ chối hoặc yêu cầu sửa văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-26` | Đánh số văn bản | Thực hiện nghiệp vụ “Đánh số văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-27` | Ký số hoặc xác nhận ký khi tích hợp | Thực hiện nghiệp vụ “Ký số hoặc xác nhận ký khi tích hợp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-28` | Ban hành văn bản | Thực hiện nghiệp vụ “Ban hành văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-29` | Công bố văn bản | Thực hiện nghiệp vụ “Công bố văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-30` | Phân phối văn bản đến đối tượng nhận | Thực hiện nghiệp vụ “Phân phối văn bản đến đối tượng nhận” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-31` | Xác nhận đã đọc văn bản | Thực hiện nghiệp vụ “Xác nhận đã đọc văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-32` | Liên kết văn bản với yêu cầu hoặc nghiệp vụ khác | Cho phép liên kết văn bản với yêu cầu hoặc nghiệp vụ khác; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-33` | Quản lý tệp đính kèm văn bản | Cho phép quản lý tệp đính kèm văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-34` | Tải xuống hoặc xuất văn bản | Thực hiện nghiệp vụ “Tải xuống hoặc xuất văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-35` | Đóng dấu hoặc watermark bản xuất | Cho phép đóng dấu hoặc watermark bản xuất; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-36` | Tìm kiếm metadata văn bản | Thực hiện nghiệp vụ “Tìm kiếm metadata văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-37` | Tìm kiếm toàn văn khi được hỗ trợ | Thực hiện nghiệp vụ “Tìm kiếm toàn văn khi được hỗ trợ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-38` | Theo dõi hiệu lực và ngày hết hạn văn bản | Cho phép theo dõi hiệu lực và ngày hết hạn văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-39` | Gửi nhắc văn bản sắp hết hiệu lực | Cho phép gửi nhắc văn bản sắp hết hiệu lực; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-40` | Lưu trữ văn bản | Cho phép lưu trữ văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-41` | Khôi phục văn bản lưu trữ | Cho phép khôi phục văn bản lưu trữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-42` | Đặt thời hạn lưu giữ văn bản | Cho phép đặt thời hạn lưu giữ văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-43` | Đặt legal hold hoặc khóa xóa | Cho phép đặt legal hold hoặc khóa xóa; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-44` | Yêu cầu xóa văn bản | Thực hiện nghiệp vụ “Yêu cầu xóa văn bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DOCUMENT-45` | Xóa hoặc ẩn danh văn bản theo chính sách | Cho phép xóa hoặc xử lý xóa hoặc ẩn danh văn bản theo chính sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DOCUMENT-46` | Xem lịch sử truy cập và thay đổi văn bản | Cho phép actor có quyền xem lịch sử truy cập và thay đổi văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

### UC-FINANCE — Quản lý tài chính và ngân sách

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-FINANCE-01` | Quản lý danh mục thu chi | Cho phép quản lý danh mục thu chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-02` | Quản lý tài khoản hoặc nguồn tiền | Cho phép quản lý tài khoản hoặc nguồn tiền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-03` | Quản lý quỹ | Cho phép quản lý quỹ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-04` | Thiết lập số dư đầu kỳ | Cho phép thiết lập số dư đầu kỳ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-05` | Tạo kế hoạch ngân sách | Cho phép tạo kế hoạch ngân sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-06` | Tạo dòng ngân sách | Cho phép tạo dòng ngân sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-07` | Phân bổ ngân sách theo đơn vị hoặc hoạt động | Thực hiện nghiệp vụ “Phân bổ ngân sách theo đơn vị hoặc hoạt động” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-08` | Điều chỉnh ngân sách | Thực hiện nghiệp vụ “Điều chỉnh ngân sách” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-09` | Phê duyệt ngân sách | Cho phép chủ thể có thẩm quyền phê duyệt ngân sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-10` | Khóa ngân sách theo kỳ | Thực hiện nghiệp vụ “Khóa ngân sách theo kỳ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-11` | Tạo khoản thu | Cho phép tạo khoản thu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-12` | Xác nhận đã thu tiền | Thực hiện nghiệp vụ “Xác nhận đã thu tiền” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-13` | Tạo đề nghị chi | Cho phép tạo đề nghị chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-14` | Tạo yêu cầu tạm ứng | Cho phép tạo yêu cầu tạm ứng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-15` | Duyệt yêu cầu tạm ứng | Thực hiện nghiệp vụ “Duyệt yêu cầu tạm ứng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-16` | Ghi nhận giải ngân tạm ứng | Ghi nhận giải ngân tạm ứng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-17` | Quyết toán tạm ứng | Thực hiện nghiệp vụ “Quyết toán tạm ứng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-18` | Tạo yêu cầu hoàn ứng hoặc hoàn tiền | Cho phép tạo yêu cầu hoàn ứng hoặc hoàn tiền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-19` | Tạo giao dịch chi | Cho phép tạo giao dịch chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-20` | Đính kèm hóa đơn hoặc chứng từ | Thực hiện nghiệp vụ “Đính kèm hóa đơn hoặc chứng từ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-21` | Gửi giao dịch để phê duyệt | Cho phép gửi giao dịch để phê duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-22` | Phân công người duyệt giao dịch | Thực hiện nghiệp vụ “Phân công người duyệt giao dịch” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-23` | Phê duyệt giao dịch tài chính | Cho phép chủ thể có thẩm quyền phê duyệt giao dịch tài chính; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-24` | Từ chối hoặc trả giao dịch để bổ sung | Cho phép chủ thể có thẩm quyền từ chối hoặc trả giao dịch để bổ sung; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-25` | Thực hiện phê duyệt nhiều cấp | Thực hiện phê duyệt nhiều cấp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-26` | Kiểm tra hạn mức phê duyệt | Kiểm tra hạn mức phê duyệt; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-27` | Ghi nhận thanh toán hoặc nhận tiền thực tế | Ghi nhận thanh toán hoặc nhận tiền thực tế; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-28` | Chuyển tiền giữa các quỹ hoặc tài khoản | Cho phép chuyển tiền giữa các quỹ hoặc tài khoản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-29` | Tách một giao dịch thành nhiều khoản | Thực hiện nghiệp vụ “Tách một giao dịch thành nhiều khoản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-30` | Gộp các khoản liên quan khi được phép | Thực hiện nghiệp vụ “Gộp các khoản liên quan khi được phép” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-31` | Liên kết giao dịch với yêu cầu, sự kiện hoặc tài sản | Cho phép liên kết giao dịch với yêu cầu, sự kiện hoặc tài sản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-32` | Cập nhật giao dịch đang chờ xử lý | Cho phép cập nhật giao dịch đang chờ xử lý; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-33` | Hủy giao dịch chưa hoàn tất | Cho phép hủy giao dịch chưa hoàn tất; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-34` | Đảo hoặc điều chỉnh giao dịch đã ghi nhận | Thực hiện nghiệp vụ “Đảo hoặc điều chỉnh giao dịch đã ghi nhận” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-35` | Xóa mềm giao dịch | Cho phép xóa hoặc xử lý xóa mềm giao dịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-36` | Khôi phục giao dịch bị xóa mềm | Cho phép khôi phục giao dịch bị xóa mềm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-37` | Nhập sao kê hoặc dữ liệu giao dịch | Cho phép nhập sao kê hoặc dữ liệu giao dịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-38` | Đối soát giao dịch | Thực hiện nghiệp vụ “Đối soát giao dịch” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-39` | Ghép giao dịch với sao kê | Thực hiện nghiệp vụ “Ghép giao dịch với sao kê” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-40` | Xử lý chênh lệch đối soát | Thực hiện nghiệp vụ “Xử lý chênh lệch đối soát” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-41` | Quản lý khoản phải thu | Cho phép quản lý khoản phải thu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-42` | Quản lý khoản phải trả | Cho phép quản lý khoản phải trả; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-43` | Tạo giao dịch định kỳ | Cho phép tạo giao dịch định kỳ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-44` | Theo dõi thực hiện ngân sách | Cho phép theo dõi thực hiện ngân sách; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-45` | Cảnh báo vượt ngân sách hoặc ngưỡng chi | Thực hiện nghiệp vụ “Cảnh báo vượt ngân sách hoặc ngưỡng chi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-FINANCE-46` | Đóng kỳ tài chính | Cho phép đóng kỳ tài chính; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-47` | Mở lại kỳ tài chính theo quyền | Cho phép mở lại kỳ tài chính theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-48` | Sinh phiếu thu hoặc phiếu chi | Cho phép sinh phiếu thu hoặc phiếu chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-49` | Xem sổ quỹ và biến động số dư | Cho phép actor có quyền xem sổ quỹ và biến động số dư; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-50` | Xem báo cáo thu chi | Cho phép actor có quyền xem báo cáo thu chi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-51` | Xuất báo cáo tài chính nội bộ | Cho phép xuất báo cáo tài chính nội bộ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-FINANCE-52` | Xem lịch sử phê duyệt và audit tài chính | Cho phép actor có quyền xem lịch sử phê duyệt và audit tài chính; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

### UC-ASSET — Quản lý tài sản và hậu cần

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

### UC-MEETING — Quản lý cuộc họp, sự kiện và chuyên cần

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-MEETING-01` | Quản lý loại cuộc họp hoặc sự kiện | Cho phép quản lý loại cuộc họp hoặc sự kiện; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-02` | Tạo cuộc họp nháp | Cho phép tạo cuộc họp nháp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-03` | Lên lịch cuộc họp | Thực hiện nghiệp vụ “Lên lịch cuộc họp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-04` | Tạo chuỗi cuộc họp định kỳ | Cho phép tạo chuỗi cuộc họp định kỳ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-05` | Chỉnh sửa một lần trong chuỗi định kỳ | Thực hiện nghiệp vụ “Chỉnh sửa một lần trong chuỗi định kỳ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-06` | Mời người tham dự | Thực hiện nghiệp vụ “Mời người tham dự” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-07` | Mời đơn vị hoặc nhóm tham dự | Thực hiện nghiệp vụ “Mời đơn vị hoặc nhóm tham dự” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-08` | Phản hồi tham dự | Thực hiện nghiệp vụ “Phản hồi tham dự” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-09` | Quản lý danh sách khách mời | Cho phép quản lý danh sách khách mời; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-10` | Tạo chương trình nghị sự | Cho phép tạo chương trình nghị sự; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-11` | Đính kèm tài liệu cuộc họp | Thực hiện nghiệp vụ “Đính kèm tài liệu cuộc họp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-12` | Đặt phòng hoặc tài nguyên | Cho phép đặt phòng hoặc tài nguyên; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-13` | Kiểm tra xung đột lịch | Kiểm tra xung đột lịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-14` | Tạo liên kết họp trực tuyến | Cho phép tạo liên kết họp trực tuyến; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-15` | Gửi thông báo và nhắc lịch | Cho phép gửi thông báo và nhắc lịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-16` | Đổi lịch cuộc họp | Thực hiện nghiệp vụ “Đổi lịch cuộc họp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-17` | Hủy cuộc họp | Cho phép hủy cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-18` | Mở phiên điểm danh | Cho phép mở phiên điểm danh; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-19` | Điểm danh thủ công | Thực hiện nghiệp vụ “Điểm danh thủ công” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-20` | Điểm danh bằng QR hoặc mã check-in | Thực hiện nghiệp vụ “Điểm danh bằng QR hoặc mã check-in” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-21` | Ghi nhận đi trễ hoặc về sớm | Ghi nhận đi trễ hoặc về sớm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-22` | Ghi nhận lý do vắng | Ghi nhận lý do vắng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-23` | Yêu cầu xác nhận vắng có phép | Thực hiện nghiệp vụ “Yêu cầu xác nhận vắng có phép” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-24` | Phê duyệt vắng có phép | Cho phép chủ thể có thẩm quyền phê duyệt vắng có phép; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-25` | Khóa kết quả chuyên cần | Thực hiện nghiệp vụ “Khóa kết quả chuyên cần” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-26` | Lập biên bản cuộc họp | Thực hiện nghiệp vụ “Lập biên bản cuộc họp” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-27` | Ghi nhận quyết định cuộc họp | Ghi nhận quyết định cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-28` | Tạo nhiệm vụ sau cuộc họp | Cho phép tạo nhiệm vụ sau cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-29` | Theo dõi nhiệm vụ sau cuộc họp | Cho phép theo dõi nhiệm vụ sau cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-30` | Tổ chức biểu quyết hoặc thăm dò | Thực hiện nghiệp vụ “Tổ chức biểu quyết hoặc thăm dò” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-31` | Công bố biên bản và kết quả | Thực hiện nghiệp vụ “Công bố biên bản và kết quả” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-32` | Xác nhận đã đọc biên bản | Thực hiện nghiệp vụ “Xác nhận đã đọc biên bản” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-33` | Thu thập phản hồi sau sự kiện | Thực hiện nghiệp vụ “Thu thập phản hồi sau sự kiện” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-34` | Đồng bộ lịch cá nhân | Thực hiện nghiệp vụ “Đồng bộ lịch cá nhân” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-35` | Liên kết cuộc họp với yêu cầu hoặc văn bản | Cho phép liên kết cuộc họp với yêu cầu hoặc văn bản; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-36` | Tổng hợp chuyên cần theo thành viên | Thực hiện nghiệp vụ “Tổng hợp chuyên cần theo thành viên” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-37` | Tổng hợp chuyên cần theo đơn vị | Thực hiện nghiệp vụ “Tổng hợp chuyên cần theo đơn vị” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-MEETING-38` | Xuất danh sách và báo cáo cuộc họp | Cho phép xuất danh sách và báo cáo cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-39` | Lưu trữ cuộc họp | Cho phép lưu trữ cuộc họp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-MEETING-40` | Khôi phục cuộc họp đã lưu trữ | Cho phép khôi phục cuộc họp đã lưu trữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

### UC-DISCIPLINE — Quản lý kỷ luật và KPI

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-DISCIPLINE-01` | Quản lý danh mục hành vi vi phạm | Cho phép quản lý danh mục hành vi vi phạm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-02` | Quản lý mức xử lý kỷ luật | Cho phép quản lý mức xử lý kỷ luật; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-03` | Cấu hình ngưỡng cảnh báo KPI hoặc chuyên cần | Cho phép cấu hình ngưỡng cảnh báo KPI hoặc chuyên cần; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-04` | Phát hiện vi phạm từ dữ liệu chuyên cần | Thực hiện nghiệp vụ “Phát hiện vi phạm từ dữ liệu chuyên cần” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-05` | Phát hiện vi phạm từ dữ liệu KPI | Thực hiện nghiệp vụ “Phát hiện vi phạm từ dữ liệu KPI” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-06` | Tạo vụ việc kỷ luật thủ công | Cho phép tạo vụ việc kỷ luật thủ công; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-07` | Gắn thành viên liên quan | Thực hiện nghiệp vụ “Gắn thành viên liên quan” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-08` | Thu thập và tải lên minh chứng | Thực hiện nghiệp vụ “Thu thập và tải lên minh chứng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-09` | Phân công người xử lý vụ việc | Thực hiện nghiệp vụ “Phân công người xử lý vụ việc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-10` | Thông báo thành viên về vụ việc | Thực hiện nghiệp vụ “Thông báo thành viên về vụ việc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-11` | Yêu cầu thành viên giải trình | Thực hiện nghiệp vụ “Yêu cầu thành viên giải trình” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-12` | Nộp giải trình | Thực hiện nghiệp vụ “Nộp giải trình” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-13` | Ghi nhận phỏng vấn hoặc phiên làm việc | Ghi nhận phỏng vấn hoặc phiên làm việc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-14` | Xác minh minh chứng | Thực hiện nghiệp vụ “Xác minh minh chứng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-15` | Đề xuất kết luận vụ việc | Thực hiện nghiệp vụ “Đề xuất kết luận vụ việc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-16` | Đề xuất hình thức xử lý | Thực hiện nghiệp vụ “Đề xuất hình thức xử lý” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-17` | Thực hiện phê duyệt kỷ luật | Thực hiện phê duyệt kỷ luật; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-18` | Từ chối hoặc yêu cầu điều tra bổ sung | Cho phép chủ thể có thẩm quyền từ chối hoặc yêu cầu điều tra bổ sung; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-19` | Ban hành quyết định kỷ luật | Thực hiện nghiệp vụ “Ban hành quyết định kỷ luật” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-20` | Ghi nhận điểm trừ hoặc điều chỉnh KPI | Ghi nhận điểm trừ hoặc điều chỉnh KPI; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-21` | Thiết lập kế hoạch khắc phục | Cho phép thiết lập kế hoạch khắc phục; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-22` | Theo dõi việc thực hiện kế hoạch khắc phục | Cho phép theo dõi việc thực hiện kế hoạch khắc phục; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-23` | Gửi cảnh báo hoặc nhắc việc | Cho phép gửi cảnh báo hoặc nhắc việc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-24` | Khiếu nại quyết định kỷ luật | Thực hiện nghiệp vụ “Khiếu nại quyết định kỷ luật” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-25` | Tiếp nhận khiếu nại | Thực hiện nghiệp vụ “Tiếp nhận khiếu nại” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-26` | Xem xét và giải quyết khiếu nại | Cho phép actor có quyền xem xét và giải quyết khiếu nại; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-27` | Sửa đổi hoặc hủy quyết định kỷ luật | Thực hiện nghiệp vụ “Sửa đổi hoặc hủy quyết định kỷ luật” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-28` | Tạm đình chỉ hiệu lực quyết định khi xem xét | Thực hiện nghiệp vụ “Tạm đình chỉ hiệu lực quyết định khi xem xét” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-29` | Đóng vụ việc | Cho phép đóng vụ việc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-30` | Mở lại vụ việc theo quyền | Cho phép mở lại vụ việc theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-31` | Hết hiệu lực hoặc xóa ghi nhận theo chính sách phục hồi | Thực hiện nghiệp vụ “Hết hiệu lực hoặc xóa ghi nhận theo chính sách phục hồi” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-32` | Giới hạn truy cập hồ sơ nhạy cảm | Thực hiện nghiệp vụ “Giới hạn truy cập hồ sơ nhạy cảm” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-DISCIPLINE-33` | Xuất báo cáo kỷ luật và KPI | Cho phép xuất báo cáo kỷ luật và KPI; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-DISCIPLINE-34` | Xem lịch sử xử lý và audit vụ việc | Cho phép actor có quyền xem lịch sử xử lý và audit vụ việc; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

### UC-EVALUATION — Quản lý đánh giá thành viên

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

### UC-COMPETITION — Quản lý cuộc thi, thành tích và ghi nhận

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

### UC-NOTIFICATION — Quản lý thông báo và truyền thông nội bộ

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-NOTIFICATION-01` | Quản lý mẫu thông báo | Cho phép quản lý mẫu thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-02` | Tạo mẫu thông báo | Cho phép tạo mẫu thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-03` | Cập nhật mẫu thông báo | Cho phép cập nhật mẫu thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-04` | Phiên bản hóa mẫu thông báo | Thực hiện nghiệp vụ “Phiên bản hóa mẫu thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-05` | Cấu hình biến dữ liệu trong mẫu | Cho phép cấu hình biến dữ liệu trong mẫu; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-06` | Xem trước nội dung thông báo | Cho phép actor có quyền xem trước nội dung thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-07` | Tạo thông báo nháp | Cho phép tạo thông báo nháp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-08` | Chọn kênh gửi thông báo | Cho phép lựa chọn kênh gửi thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-09` | Chọn đối tượng nhận theo tenant | Cho phép lựa chọn đối tượng nhận theo tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-10` | Chọn đối tượng nhận theo đơn vị | Cho phép lựa chọn đối tượng nhận theo đơn vị; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-11` | Chọn đối tượng nhận theo role hoặc nhóm | Cho phép lựa chọn đối tượng nhận theo role hoặc nhóm; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-12` | Chọn người nhận cụ thể | Cho phép lựa chọn người nhận cụ thể; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-13` | Kiểm tra phạm vi người nhận | Kiểm tra phạm vi người nhận; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-14` | Gửi thông báo ngay | Cho phép gửi thông báo ngay; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-15` | Lên lịch gửi thông báo | Thực hiện nghiệp vụ “Lên lịch gửi thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-16` | Sửa lịch gửi thông báo | Thực hiện nghiệp vụ “Sửa lịch gửi thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-17` | Hủy thông báo đã lên lịch | Cho phép hủy thông báo đã lên lịch; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-18` | Yêu cầu phê duyệt thông báo | Thực hiện nghiệp vụ “Yêu cầu phê duyệt thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-19` | Phê duyệt thông báo | Cho phép chủ thể có thẩm quyền phê duyệt thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-20` | Từ chối hoặc yêu cầu sửa thông báo | Cho phép chủ thể có thẩm quyền từ chối hoặc yêu cầu sửa thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-21` | Gửi thông báo trong ứng dụng | Cho phép gửi thông báo trong ứng dụng; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-22` | Gửi email | Cho phép gửi email; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-23` | Gửi SMS khi được tích hợp | Cho phép gửi SMS khi được tích hợp; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-24` | Gửi push notification | Cho phép gửi push notification; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-25` | Gửi webhook đến hệ thống ngoài | Cho phép gửi webhook đến hệ thống ngoài; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-26` | Tạo thông báo từ sự kiện hệ thống | Cho phép tạo thông báo từ sự kiện hệ thống; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-27` | Tạo nhắc việc tự động | Cho phép tạo nhắc việc tự động; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-28` | Tạo thông báo leo thang | Cho phép tạo thông báo leo thang; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-29` | Tạo bản tin tổng hợp định kỳ | Cho phép tạo bản tin tổng hợp định kỳ; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-30` | Tôn trọng giờ yên lặng và tùy chọn người dùng | Thực hiện nghiệp vụ “Tôn trọng giờ yên lặng và tùy chọn người dùng” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-31` | Gửi thông báo khẩn cấp theo quyền | Cho phép gửi thông báo khẩn cấp theo quyền; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-32` | Theo dõi trạng thái gửi | Cho phép theo dõi trạng thái gửi; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-33` | Xử lý gửi thất bại và retry | Thực hiện nghiệp vụ “Xử lý gửi thất bại và retry” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-34` | Xử lý email bounce hoặc địa chỉ không hợp lệ | Thực hiện nghiệp vụ “Xử lý email bounce hoặc địa chỉ không hợp lệ” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-35` | Đánh dấu thông báo đã đọc | Thực hiện nghiệp vụ “Đánh dấu thông báo đã đọc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-36` | Đánh dấu tất cả đã đọc | Thực hiện nghiệp vụ “Đánh dấu tất cả đã đọc” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-37` | Xác nhận đã nhận hoặc đã hiểu thông báo | Thực hiện nghiệp vụ “Xác nhận đã nhận hoặc đã hiểu thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-38` | Tìm kiếm và lọc thông báo | Thực hiện nghiệp vụ “Tìm kiếm và lọc thông báo” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-39` | Lưu trữ hoặc xóa thông báo cá nhân | Cho phép lưu trữ hoặc xóa thông báo cá nhân; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-40` | Quản lý bản dịch nội dung thông báo | Cho phép quản lý bản dịch nội dung thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |
| `UC-NOTIFICATION-41` | Kiểm soát tần suất và chống spam | Thực hiện nghiệp vụ “Kiểm soát tần suất và chống spam” trong đúng phạm vi tenant hiện hành, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-NOTIFICATION-42` | Xuất báo cáo hiệu quả gửi thông báo | Cho phép xuất báo cáo hiệu quả gửi thông báo; phải kiểm tra quyền, trạng thái và phạm vi tenant hiện hành trước khi ghi nhận kết quả. |

### UC-DASHBOARD — Dashboard, báo cáo và xuất dữ liệu

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

### UC-AI — Trợ lý AI và AI Gateway

| Mã | Use Case thành phần | Mô tả |
|---|---|---|
| `UC-AI-01` | Xem danh sách nhà cung cấp AI | Cho phép actor có quyền xem danh sách nhà cung cấp AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-02` | Cấu hình nhà cung cấp AI | Cho phép cấu hình nhà cung cấp AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-03` | Cập nhật thông tin kết nối AI | Cho phép cập nhật thông tin kết nối AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-04` | Kiểm tra kết nối nhà cung cấp AI | Kiểm tra kết nối nhà cung cấp AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-05` | Chọn mô hình AI mặc định | Cho phép lựa chọn mô hình AI mặc định; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-06` | Cấu hình mô hình theo use case | Cho phép cấu hình mô hình theo use case; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-07` | Cấu hình fallback nhà cung cấp | Cho phép cấu hình fallback nhà cung cấp; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-08` | Quản lý khóa hoặc secret AI an toàn | Cho phép quản lý khóa hoặc secret AI an toàn; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-09` | Quản lý prompt template | Cho phép quản lý prompt template; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-10` | Tạo prompt template | Cho phép tạo prompt template; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-11` | Cập nhật và phiên bản hóa prompt | Cho phép cập nhật và phiên bản hóa prompt; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-12` | Kiểm thử prompt trên dữ liệu mẫu | Thực hiện nghiệp vụ “Kiểm thử prompt trên dữ liệu mẫu” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-13` | Sinh bản nháp nội dung | Cho phép sinh bản nháp nội dung; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-14` | Tóm tắt văn bản hoặc cuộc họp | Thực hiện nghiệp vụ “Tóm tắt văn bản hoặc cuộc họp” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-15` | Trích xuất dữ liệu có cấu trúc từ tài liệu | Thực hiện nghiệp vụ “Trích xuất dữ liệu có cấu trúc từ tài liệu” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-16` | Phân loại yêu cầu hoặc văn bản | Thực hiện nghiệp vụ “Phân loại yêu cầu hoặc văn bản” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-17` | Gợi ý hành động tiếp theo | Thực hiện nghiệp vụ “Gợi ý hành động tiếp theo” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-18` | Dịch nội dung | Thực hiện nghiệp vụ “Dịch nội dung” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-19` | Viết lại nội dung theo giọng điệu | Thực hiện nghiệp vụ “Viết lại nội dung theo giọng điệu” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-20` | Tìm kiếm ngữ nghĩa trong dữ liệu được phép | Thực hiện nghiệp vụ “Tìm kiếm ngữ nghĩa trong dữ liệu được phép” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-21` | Hỏi đáp trên kho tri thức tổ chức | Thực hiện nghiệp vụ “Hỏi đáp trên kho tri thức tổ chức” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-22` | Phân tích xu hướng vận hành | Thực hiện nghiệp vụ “Phân tích xu hướng vận hành” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-23` | Sinh insight báo cáo | Cho phép sinh insight báo cáo; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-24` | Phát hiện rủi ro hoặc bất thường | Thực hiện nghiệp vụ “Phát hiện rủi ro hoặc bất thường” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-25` | Gợi ý tiêu chí hoặc mẫu biểu | Thực hiện nghiệp vụ “Gợi ý tiêu chí hoặc mẫu biểu” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-26` | Kiểm duyệt nội dung đầu vào hoặc đầu ra | Thực hiện nghiệp vụ “Kiểm duyệt nội dung đầu vào hoặc đầu ra” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-27` | Yêu cầu người dùng xác nhận trước khi áp dụng kết quả AI | Thực hiện nghiệp vụ “Yêu cầu người dùng xác nhận trước khi áp dụng kết quả AI” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-28` | Chỉnh sửa và chấp nhận kết quả AI | Thực hiện nghiệp vụ “Chỉnh sửa và chấp nhận kết quả AI” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-29` | Từ chối kết quả AI | Cho phép chủ thể có thẩm quyền từ chối kết quả AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-30` | Gửi phản hồi chất lượng kết quả AI | Cho phép gửi phản hồi chất lượng kết quả AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-31` | Ẩn hoặc loại bỏ dữ liệu nhạy cảm trước khi gửi AI | Thực hiện nghiệp vụ “Ẩn hoặc loại bỏ dữ liệu nhạy cảm trước khi gửi AI” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-32` | Kiểm tra chính sách dữ liệu đối với yêu cầu AI | Kiểm tra chính sách dữ liệu đối với yêu cầu AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-33` | Chặn gửi dữ liệu không được phép | Thực hiện nghiệp vụ “Chặn gửi dữ liệu không được phép” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-34` | Cấu hình opt-in hoặc opt-out AI theo tenant | Cho phép cấu hình opt-in hoặc opt-out AI theo tenant; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-35` | Giới hạn AI theo role hoặc mô-đun | Thực hiện nghiệp vụ “Giới hạn AI theo role hoặc mô-đun” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-36` | Cấu hình hạn mức sử dụng AI | Cho phép cấu hình hạn mức sử dụng AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-37` | Theo dõi chi phí và số lượt sử dụng | Cho phép theo dõi chi phí và số lượt sử dụng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-38` | Xem lịch sử yêu cầu AI | Cho phép actor có quyền xem lịch sử yêu cầu AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-39` | Ghi audit metadata yêu cầu AI | Cho phép ghi audit metadata yêu cầu AI; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-40` | Xóa dữ liệu AI theo chính sách lưu giữ | Cho phép xóa hoặc xử lý xóa dữ liệu AI theo chính sách lưu giữ; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-41` | Xử lý lỗi hoặc timeout nhà cung cấp | Thực hiện nghiệp vụ “Xử lý lỗi hoặc timeout nhà cung cấp” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-42` | Chuyển sang nhà cung cấp dự phòng | Cho phép chuyển sang nhà cung cấp dự phòng; phải kiểm tra quyền, trạng thái và phạm vi tenant hoặc nền tảng tương ứng trước khi ghi nhận kết quả. |
| `UC-AI-43` | Đánh giá chất lượng mô hình định kỳ | Thực hiện nghiệp vụ “Đánh giá chất lượng mô hình định kỳ” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |
| `UC-AI-44` | So sánh kết quả giữa các mô hình | Thực hiện nghiệp vụ “So sánh kết quả giữa các mô hình” trong đúng phạm vi tenant hoặc nền tảng tương ứng, có kiểm tra dữ liệu, quyền và trạng thái liên quan. |

### UC-AUDIT — Nhật ký hệ thống và truy vết hoạt động

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
