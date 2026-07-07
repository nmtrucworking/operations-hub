Hệ thống Operations-Hub được triển khai theo 20 nhóm Use Case, trong đó
- 14 nhóm kế thừa từ SRS MTEC Operations Hub;
- 6 nhóm định hướng hệ thống cho nhiều loại tổ chức sinh viên, có kiến trúc module và tùy chỉnh branding
bao gồm:

| STT | Mã nhóm           | Nhóm Use Case                                 | Phạm vi chính                                                                                        |               |
| --: | ----------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------- |
|   1 | `UC-AUTH`         | **Xác thực và quản lý phiên**                 | Đăng nhập, đăng xuất, gia hạn phiên, quên/đổi mật khẩu, giới hạn đăng nhập sai                       |               |
|   2 | `UC-USER`         | **Quản lý tài khoản người dùng**              | Tạo tài khoản, cập nhật, khóa/mở khóa, reset mật khẩu, liên kết tài khoản với thành viên             |               |
|   3 | `UC-RBAC`         | **Quản lý vai trò và phân quyền**             | Vai trò, quyền thao tác, phạm vi dữ liệu, nhiều vai trò trên một người dùng, kiểm soát endpoint      |               |
|   4 | `UC-ORG`          | **Quản lý thông tin và cơ cấu tổ chức**       | Thông tin tổ chức, ban/đơn vị, chức vụ, nhiệm kỳ, cơ cấu trực thuộc, phân công nhân sự               |               |
|   5 | `UC-BRAND`        | **Quản lý branding và giao diện tổ chức**     | Logo, favicon, tên hệ thống, màu thương hiệu, ảnh đăng nhập, theme, footer, nhận diện trên biểu mẫu  |               |
|   6 | `UC-MODULE`       | **Cấu hình module và quy trình nghiệp vụ**    | Bật/tắt module, cấu hình loại nghiệp vụ, trạng thái, luồng duyệt, vai trò phê duyệt                  |               |
|   7 | `UC-SETTING`      | **Thiết lập cá nhân**                         | Hồ sơ cá nhân, ngôn ngữ, giao diện sáng/tối, tùy chọn thông báo, đổi mật khẩu                        |               |
|   8 | `UC-MEMBER`       | **Quản lý thành viên**                        | Hồ sơ, MSSV, kỹ năng, đơn vị, chức vụ, trạng thái, lịch sử tham gia, điều chuyển và thôi sinh hoạt   |               |
|   9 | `UC-REQUEST`      | **Quản lý đơn từ và yêu cầu nội bộ**          | Tạo đơn, gửi duyệt, duyệt/từ chối, hủy, theo dõi trạng thái, liên kết giao dịch hoặc biểu mẫu        |               |
|  10 | `UC-DOCUMENT`     | **Quản lý văn bản, biểu mẫu và mẫu tài liệu** | Danh mục biểu mẫu, số văn bản, template, sinh tài liệu, lưu trữ, xuất DOCX/PDF và lịch sử phiên bản  |               |
|  11 | `UC-FINANCE`      | **Quản lý tài chính và ngân sách**            | Thu/chi, danh mục, dự trù, duyệt chi, quỹ, chứng từ, liên kết đơn từ, báo cáo tài chính              |               |
|  12 | `UC-ASSET`        | **Quản lý tài sản và hậu cần**                | Tài sản, thiết bị, kho, tình trạng, người giữ, mượn/trả, bảo trì, kiểm kê                            |               |
|  13 | `UC-MEETING`      | **Quản lý cuộc họp, sự kiện và chuyên cần**   | Tạo buổi họp/sự kiện, danh sách tham gia, điểm danh, vắng phép, biên bản và thống kê chuyên cần      |               |
|  14 | `UC-DISCIPLINE`   | **Quản lý kỷ luật và KPI**                    | Vi phạm, số buổi vắng, KPI, mức cảnh báo, quyết định xử lý, ghi chú và minh chứng                    |               |
|  15 | `UC-EVALUATION`   | **Quản lý đánh giá thành viên**               | Chu kỳ đánh giá, bộ tiêu chí, điểm, điểm cộng/trừ, minh chứng, xác minh, khóa và công bố kết quả     |               |
|  16 | `UC-COMPETITION`  | **Quản lý cuộc thi, thành tích và ghi nhận**  | Cuộc thi, đội thi, thành viên, kết quả, giải thưởng, chứng nhận và thành tích của tổ chức            |               |
|  17 | `UC-NOTIFICATION` | **Quản lý thông báo và truyền thông nội bộ**  | Soạn thông báo, đối tượng nhận, lịch gửi, thông báo trong hệ thống, email, trạng thái đã đọc         |               |
|  18 | `UC-DASHBOARD`    | **Dashboard, báo cáo và xuất dữ liệu**        | Chỉ số tổng hợp, biểu đồ, báo cáo theo thời gian, bộ lọc, drill-down, xuất CSV/XLSX/PDF              |               |
|  19 | `UC-AI`           | **Trợ lý AI và AI Gateway**                   | Sinh insight, tóm tắt dữ liệu, dự thảo thông báo/văn bản, chuẩn hóa đầu ra, kiểm soát lỗi provider   |               |
|  20 | `UC-AUDIT`        | **Nhật ký hệ thống và truy vết hoạt động**    | Ghi nhận người thực hiện, hành động, thời điểm, đối tượng dữ liệu, thay đổi trước/sau và tra cứu log |               |
|     | `UC-TENANT`       |                                               |                                                                                                      | [[1. UC-TENANT]] |