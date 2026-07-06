# DANH MỤC USE CASE CHÍNH — OPERATIONS HUB V4

V4 gồm các Use Case nghiệp vụ đã được tinh gọn theo mục tiêu actor. Các chức năng chi tiết vẫn nằm trong phạm vi dưới dạng luồng, biến thể và quy tắc.

| Nhóm | Mã Use Case | Tên Use Case | Actor |
|---|---|---|---|
| `UC-TENANT` | `UC-TENANT-01` | Đăng ký tổ chức | Người đăng ký tổ chức |
| `UC-TENANT` | `UC-TENANT-02` | Xử lý hồ sơ đăng ký tổ chức | Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-03` | Khởi tạo tenant | Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-04` | Quản trị danh mục tenant | Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-05` | Quản lý vòng đời tenant | Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-06` | Quản lý quyền sở hữu tenant | Chủ sở hữu tenant |
| `UC-TENANT` | `UC-TENANT-07` | Quản lý dịch vụ và hạn mức tenant | Chủ sở hữu tenant; Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-08` | Quản lý tên miền tenant | Chủ sở hữu tenant; Dịch vụ DNS hoặc tên miền |
| `UC-TENANT` | `UC-TENANT-09` | Đóng và xử lý dữ liệu tenant | Chủ sở hữu tenant; Quản trị viên nền tảng |
| `UC-TENANT` | `UC-TENANT-10` | Hỗ trợ quản trị tenant có kiểm soát | Quản trị viên nền tảng; Chủ sở hữu tenant |
| `UC-AUTH` | `UC-AUTH-01` | Đăng ký và xác minh tài khoản | Khách truy cập; Dịch vụ xác thực |
| `UC-AUTH` | `UC-AUTH-02` | Đăng nhập | Người dùng nền tảng; Dịch vụ xác thực |
| `UC-AUTH` | `UC-AUTH-03` | Quản lý xác thực đa yếu tố | Người dùng nền tảng; Dịch vụ xác thực |
| `UC-AUTH` | `UC-AUTH-04` | Quản lý phiên và thiết bị | Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-05` | Khôi phục và thay đổi thông tin xác thực | Người dùng nền tảng; Dịch vụ xác thực |
| `UC-AUTH` | `UC-AUTH-06` | Xử lý lời mời tham gia tenant | Người dùng nền tảng |
| `UC-AUTH` | `UC-AUTH-07` | Chọn và chuyển tenant context | Người dùng nền tảng |
| `UC-USER` | `UC-USER-01` | Quản lý hồ sơ cá nhân | Người dùng nền tảng |
| `UC-USER` | `UC-USER-02` | Quản lý email và danh tính liên kết | Người dùng nền tảng; Dịch vụ xác thực |
| `UC-USER` | `UC-USER-03` | Xem hoạt động và quan hệ tổ chức cá nhân | Người dùng nền tảng |
| `UC-USER` | `UC-USER-04` | Quản lý dữ liệu và vòng đời tài khoản cá nhân | Người dùng nền tảng |
| `UC-USER` | `UC-USER-05` | Quản trị tài khoản người dùng | Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-06` | Quản trị an toàn tài khoản | Quản trị viên nền tảng |
| `UC-USER` | `UC-USER-07` | Xử lý tài khoản đặc biệt | Quản trị viên nền tảng |
| `UC-RBAC` | `UC-RBAC-01` | Quản lý role tenant | Quản trị viên tenant; Chủ sở hữu tenant |
| `UC-RBAC` | `UC-RBAC-02` | Cấu hình permission cho role | Quản trị viên tenant |
| `UC-RBAC` | `UC-RBAC-03` | Gán role cho membership | Quản trị viên tenant; Quản trị viên đơn vị |
| `UC-RBAC` | `UC-RBAC-04` | Cấu hình phạm vi và ủy quyền | Quản trị viên tenant; Chủ sở hữu tenant |
| `UC-RBAC` | `UC-RBAC-05` | Phân tích quyền hiệu lực | Quản trị viên tenant; Người kiểm tra hoặc giám sát |
| `UC-RBAC` | `UC-RBAC-06` | Rà soát và xác nhận quyền | Quản trị viên tenant; Người kiểm tra hoặc giám sát |
| `UC-RBAC` | `UC-RBAC-07` | Quản lý quyền khẩn cấp và role nền tảng | Quản trị viên nền tảng; Chủ sở hữu tenant |
| `UC-ORG` | `UC-ORG-01` | Quản lý hồ sơ tổ chức | Quản trị viên tenant; Chủ sở hữu tenant |
| `UC-ORG` | `UC-ORG-02` | Quản lý cơ cấu đơn vị | Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-03` | Tái cấu trúc và đóng đơn vị | Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-04` | Quản lý loại đơn vị và chức vụ | Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-05` | Quản lý lãnh đạo đơn vị | Quản trị viên tenant; Quản trị viên đơn vị |
| `UC-ORG` | `UC-ORG-06` | Quản lý kỳ hoạt động tổ chức | Quản trị viên tenant |
| `UC-ORG` | `UC-ORG-07` | Nhập, xuất và áp dụng mẫu cơ cấu | Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-01` | Quản lý nhận diện thương hiệu | Quản trị viên tenant; Chủ sở hữu tenant; Dịch vụ lưu trữ |
| `UC-BRAND` | `UC-BRAND-02` | Quản lý bề mặt giao diện mang thương hiệu | Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-03` | Quản lý thuật ngữ và nhãn hiển thị | Quản trị viên tenant |
| `UC-BRAND` | `UC-BRAND-04` | Quản lý thư viện tài sản thương hiệu | Quản trị viên tenant; Dịch vụ lưu trữ |
| `UC-BRAND` | `UC-BRAND-05` | Xem trước và xuất bản branding | Quản trị viên tenant; Chủ sở hữu tenant |
| `UC-BRAND` | `UC-BRAND-06` | Kiểm soát chất lượng branding | Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-01` | Xem danh mục module | Quản trị viên tenant; Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-02` | Kích hoạt hoặc vô hiệu hóa module | Quản trị viên tenant; Chủ sở hữu tenant |
| `UC-MODULE` | `UC-MODULE-03` | Quản lý phụ thuộc module | Quản trị viên tenant; Quản trị viên nền tảng |
| `UC-MODULE` | `UC-MODULE-04` | Cấu hình module theo tenant | Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-05` | Quản lý mẫu quy trình module | Quản trị viên tenant; Vai trò chuyên trách mô-đun |
| `UC-MODULE` | `UC-MODULE-06` | Quản lý phát hành và chuyển đổi module | Quản trị viên nền tảng; Quản trị viên tenant |
| `UC-MODULE` | `UC-MODULE-07` | Theo dõi sử dụng và sức khỏe module | Quản trị viên tenant; Quản trị viên nền tảng |
| `UC-SETTING` | `UC-SETTING-01` | Quản lý tùy chọn giao diện | Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-02` | Quản lý ngôn ngữ và định dạng | Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-03` | Quản lý khả năng tiếp cận | Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-04` | Quản lý tùy chọn thông báo | Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-05` | Quản lý quyền riêng tư cá nhân | Người dùng nền tảng |
| `UC-SETTING` | `UC-SETTING-06` | Quản lý mặc định theo tenant | Người dùng nền tảng |
| `UC-MEMBER` | `UC-MEMBER-01` | Mời hoặc thêm thành viên | Phụ trách nhân sự; Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-02` | Onboarding thành viên | Thành viên tenant; Phụ trách nhân sự |
| `UC-MEMBER` | `UC-MEMBER-03` | Quản lý hồ sơ thành viên | Thành viên tenant; Phụ trách nhân sự |
| `UC-MEMBER` | `UC-MEMBER-04` | Phân công thành viên vào đơn vị và chức vụ | Phụ trách nhân sự; Quản trị viên đơn vị |
| `UC-MEMBER` | `UC-MEMBER-05` | Quản lý trạng thái membership | Phụ trách nhân sự; Quản trị viên tenant |
| `UC-MEMBER` | `UC-MEMBER-06` | Chuyển giao hoặc kết thúc membership | Phụ trách nhân sự; Chủ sở hữu tenant |
| `UC-MEMBER` | `UC-MEMBER-07` | Tra cứu danh bạ và lịch sử thành viên | Thành viên tenant; Quản trị viên đơn vị; Phụ trách nhân sự |
| `UC-MEMBER` | `UC-MEMBER-08` | Nhập, xuất và cập nhật hàng loạt thành viên | Phụ trách nhân sự |
| `UC-REQUEST` | `UC-REQUEST-01` | Quản lý loại yêu cầu và biểu mẫu | Quản trị viên tenant; Vai trò chuyên trách mô-đun |
| `UC-REQUEST` | `UC-REQUEST-02` | Tạo và gửi yêu cầu | Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-03` | Theo dõi và cập nhật yêu cầu | Thành viên tenant |
| `UC-REQUEST` | `UC-REQUEST-04` | Rút hoặc hủy yêu cầu | Thành viên tenant; Người phê duyệt |
| `UC-REQUEST` | `UC-REQUEST-05` | Tiếp nhận và phân công xử lý | Vai trò chuyên trách mô-đun; Người phê duyệt |
| `UC-REQUEST` | `UC-REQUEST-06` | Phê duyệt hoặc từ chối yêu cầu | Người phê duyệt |
| `UC-REQUEST` | `UC-REQUEST-07` | Thực hiện nghiệp vụ sau phê duyệt | Vai trò chuyên trách mô-đun |
| `UC-REQUEST` | `UC-REQUEST-08` | Báo cáo và xuất dữ liệu yêu cầu | Vai trò chuyên trách mô-đun; Người kiểm tra hoặc giám sát |
| `UC-DOCUMENT` | `UC-DOCUMENT-01` | Quản lý mẫu tài liệu | Phụ trách văn bản; Quản trị viên tenant |
| `UC-DOCUMENT` | `UC-DOCUMENT-02` | Soạn thảo tài liệu | Phụ trách văn bản; Thành viên tenant |
| `UC-DOCUMENT` | `UC-DOCUMENT-03` | Rà soát và phê duyệt tài liệu | Phụ trách văn bản; Người phê duyệt |
| `UC-DOCUMENT` | `UC-DOCUMENT-04` | Phát hành và phân phối tài liệu | Phụ trách văn bản; Người phê duyệt; Dịch vụ thông báo |
| `UC-DOCUMENT` | `UC-DOCUMENT-05` | Quản lý phiên bản và sửa đổi | Phụ trách văn bản |
| `UC-DOCUMENT` | `UC-DOCUMENT-06` | Quản lý truy cập và chia sẻ tài liệu | Phụ trách văn bản; Quản trị viên tenant |
| `UC-DOCUMENT` | `UC-DOCUMENT-07` | Tra cứu và xuất tài liệu | Thành viên tenant; Phụ trách văn bản; Người kiểm tra hoặc giám sát |
| `UC-DOCUMENT` | `UC-DOCUMENT-08` | Lưu trữ và xử lý hết hạn tài liệu | Phụ trách văn bản; Người kiểm tra hoặc giám sát |
| `UC-FINANCE` | `UC-FINANCE-01` | Quản lý danh mục và tài khoản tài chính | Phụ trách tài chính; Quản trị viên tenant |
| `UC-FINANCE` | `UC-FINANCE-02` | Lập và quản lý ngân sách | Phụ trách tài chính; Người phê duyệt |
| `UC-FINANCE` | `UC-FINANCE-03` | Tạo đề nghị thu, chi hoặc thanh toán | Thành viên tenant; Phụ trách tài chính |
| `UC-FINANCE` | `UC-FINANCE-04` | Phê duyệt nghiệp vụ tài chính | Người phê duyệt; Phụ trách tài chính |
| `UC-FINANCE` | `UC-FINANCE-05` | Ghi nhận giao dịch thu chi | Phụ trách tài chính |
| `UC-FINANCE` | `UC-FINANCE-06` | Quản lý tạm ứng, hoàn ứng và hoàn trả | Thành viên tenant; Phụ trách tài chính; Người phê duyệt |
| `UC-FINANCE` | `UC-FINANCE-07` | Quản lý chuyển quỹ và điều chỉnh | Phụ trách tài chính; Người phê duyệt |
| `UC-FINANCE` | `UC-FINANCE-08` | Đối soát và đóng kỳ | Phụ trách tài chính; Người kiểm tra hoặc giám sát |
| `UC-FINANCE` | `UC-FINANCE-09` | Theo dõi thực hiện ngân sách | Phụ trách tài chính; Phụ trách báo cáo và phân tích |
| `UC-FINANCE` | `UC-FINANCE-10` | Báo cáo và xuất dữ liệu tài chính | Phụ trách tài chính; Người kiểm tra hoặc giám sát |
| `UC-ASSET` | `UC-ASSET-01` | Quản lý danh mục tài sản và vật tư | Phụ trách tài sản và hậu cần |
| `UC-ASSET` | `UC-ASSET-02` | Tiếp nhận và ghi tăng tài sản | Phụ trách tài sản và hậu cần |
| `UC-ASSET` | `UC-ASSET-03` | Phân bổ và quản lý người giữ | Phụ trách tài sản và hậu cần; Quản trị viên đơn vị |
| `UC-ASSET` | `UC-ASSET-04` | Quản lý mượn và trả tài sản | Thành viên tenant; Phụ trách tài sản và hậu cần; Người phê duyệt |
| `UC-ASSET` | `UC-ASSET-05` | Quản lý bảo trì và sửa chữa | Phụ trách tài sản và hậu cần |
| `UC-ASSET` | `UC-ASSET-06` | Kiểm kê tài sản | Phụ trách tài sản và hậu cần; Người kiểm tra hoặc giám sát |
| `UC-ASSET` | `UC-ASSET-07` | Điều chuyển, thanh lý hoặc mất tài sản | Phụ trách tài sản và hậu cần; Người phê duyệt |
| `UC-ASSET` | `UC-ASSET-08` | Quản lý vật tư tiêu hao | Phụ trách tài sản và hậu cần; Quản trị viên đơn vị |
| `UC-ASSET` | `UC-ASSET-09` | Báo cáo và xuất dữ liệu tài sản | Phụ trách tài sản và hậu cần; Người kiểm tra hoặc giám sát |
| `UC-MEETING` | `UC-MEETING-01` | Lập lịch cuộc họp hoặc sự kiện | Phụ trách cuộc họp và sự kiện; Quản trị viên đơn vị |
| `UC-MEETING` | `UC-MEETING-02` | Mời và quản lý người tham gia | Phụ trách cuộc họp và sự kiện; Thành viên tenant |
| `UC-MEETING` | `UC-MEETING-03` | Quản lý chương trình và tài liệu | Phụ trách cuộc họp và sự kiện; Thành viên tenant |
| `UC-MEETING` | `UC-MEETING-04` | Điều hành cuộc họp hoặc sự kiện | Phụ trách cuộc họp và sự kiện |
| `UC-MEETING` | `UC-MEETING-05` | Ghi nhận chuyên cần | Phụ trách cuộc họp và sự kiện; Thành viên tenant |
| `UC-MEETING` | `UC-MEETING-06` | Lập và phê duyệt biên bản | Phụ trách cuộc họp và sự kiện; Người phê duyệt |
| `UC-MEETING` | `UC-MEETING-07` | Theo dõi quyết định và công việc sau họp | Phụ trách cuộc họp và sự kiện; Thành viên tenant |
| `UC-MEETING` | `UC-MEETING-08` | Tra cứu, báo cáo và lưu trữ hoạt động | Phụ trách cuộc họp và sự kiện; Quản trị viên đơn vị; Người kiểm tra hoặc giám sát |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-01` | Cấu hình quy tắc kỷ luật và KPI | Phụ trách kỷ luật và KPI; Quản trị viên tenant |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-02` | Ghi nhận vụ việc hoặc vi phạm | Phụ trách kỷ luật và KPI; Quản trị viên đơn vị |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-03` | Thu thập và xác minh minh chứng | Phụ trách kỷ luật và KPI; Thành viên tenant |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-04` | Xem xét và ra quyết định kỷ luật | Phụ trách kỷ luật và KPI; Người phê duyệt |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-05` | Quản lý khiếu nại hoặc xem xét lại | Thành viên tenant; Người phê duyệt |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-06` | Theo dõi biện pháp khắc phục | Phụ trách kỷ luật và KPI; Quản trị viên đơn vị |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-07` | Theo dõi KPI và cảnh báo | Phụ trách kỷ luật và KPI; Quản trị viên đơn vị |
| `UC-DISCIPLINE` | `UC-DISCIPLINE-08` | Báo cáo và lịch sử kỷ luật | Phụ trách kỷ luật và KPI; Người kiểm tra hoặc giám sát |
| `UC-EVALUATION` | `UC-EVALUATION-01` | Quản lý chu kỳ đánh giá | Người đánh giá; Quản trị viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-02` | Quản lý bộ tiêu chí và biểu mẫu | Người đánh giá; Quản trị viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-03` | Phân công đối tượng và người đánh giá | Người đánh giá; Quản trị viên đơn vị |
| `UC-EVALUATION` | `UC-EVALUATION-04` | Thực hiện đánh giá | Thành viên tenant; Người đánh giá |
| `UC-EVALUATION` | `UC-EVALUATION-05` | Xác minh và hiệu chỉnh kết quả | Người đánh giá; Người phê duyệt |
| `UC-EVALUATION` | `UC-EVALUATION-06` | Công bố và phản hồi kết quả | Người đánh giá; Thành viên tenant |
| `UC-EVALUATION` | `UC-EVALUATION-07` | Khiếu nại kết quả đánh giá | Thành viên tenant; Người phê duyệt |
| `UC-EVALUATION` | `UC-EVALUATION-08` | Báo cáo và phân tích đánh giá | Người đánh giá; Quản trị viên đơn vị; Người kiểm tra hoặc giám sát |
| `UC-COMPETITION` | `UC-COMPETITION-01` | Cấu hình cuộc thi | Phụ trách cuộc thi và thành tích |
| `UC-COMPETITION` | `UC-COMPETITION-02` | Đăng ký cá nhân hoặc đội thi | Thành viên tenant; Phụ trách cuộc thi và thành tích |
| `UC-COMPETITION` | `UC-COMPETITION-03` | Quản lý bài dự thi | Thành viên tenant |
| `UC-COMPETITION` | `UC-COMPETITION-04` | Phân công và thực hiện chấm thi | Phụ trách cuộc thi và thành tích; Người đánh giá |
| `UC-COMPETITION` | `UC-COMPETITION-05` | Hiệu chỉnh, xếp hạng và chọn vòng | Phụ trách cuộc thi và thành tích; Người phê duyệt |
| `UC-COMPETITION` | `UC-COMPETITION-06` | Công bố kết quả và xử lý khiếu nại | Phụ trách cuộc thi và thành tích; Thành viên tenant; Người phê duyệt |
| `UC-COMPETITION` | `UC-COMPETITION-07` | Ghi nhận giải thưởng và thành tích | Phụ trách cuộc thi và thành tích; Phụ trách văn bản |
| `UC-COMPETITION` | `UC-COMPETITION-08` | Quản lý cuộc thi bên ngoài | Phụ trách cuộc thi và thành tích; Thành viên tenant |
| `UC-COMPETITION` | `UC-COMPETITION-09` | Báo cáo và lưu trữ cuộc thi | Phụ trách cuộc thi và thành tích; Người kiểm tra hoặc giám sát |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-01` | Quản lý mẫu thông báo | Phụ trách truyền thông nội bộ; Quản trị viên tenant |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-02` | Soạn và chọn đối tượng nhận | Phụ trách truyền thông nội bộ; Vai trò chuyên trách mô-đun |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-03` | Phê duyệt và lên lịch thông báo | Phụ trách truyền thông nội bộ; Người phê duyệt |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-04` | Phân phối thông báo đa kênh | Dịch vụ thông báo |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-05` | Tạo thông báo tự động | Vai trò chuyên trách mô-đun; Dịch vụ thông báo |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-06` | Quản lý hộp thông báo cá nhân | Thành viên tenant |
| `UC-NOTIFICATION` | `UC-NOTIFICATION-07` | Theo dõi hiệu quả gửi | Phụ trách truyền thông nội bộ; Phụ trách báo cáo và phân tích |
| `UC-DASHBOARD` | `UC-DASHBOARD-01` | Xem dashboard theo vai trò | Thành viên tenant; Quản trị viên đơn vị; Quản trị viên tenant; Quản trị viên nền tảng |
| `UC-DASHBOARD` | `UC-DASHBOARD-02` | Lọc và đi sâu dữ liệu | Thành viên tenant; Phụ trách báo cáo và phân tích |
| `UC-DASHBOARD` | `UC-DASHBOARD-03` | Tùy chỉnh dashboard | Thành viên tenant; Phụ trách báo cáo và phân tích |
| `UC-DASHBOARD` | `UC-DASHBOARD-04` | Quản lý metric, KPI và cảnh báo | Phụ trách báo cáo và phân tích; Quản trị viên tenant |
| `UC-DASHBOARD` | `UC-DASHBOARD-05` | Tạo báo cáo liên mô-đun | Phụ trách báo cáo và phân tích; Người kiểm tra hoặc giám sát |
| `UC-DASHBOARD` | `UC-DASHBOARD-06` | Xuất, chia sẻ và lên lịch báo cáo | Phụ trách báo cáo và phân tích; Quản trị viên tenant |
| `UC-DASHBOARD` | `UC-DASHBOARD-07` | Xem insight và chất lượng dữ liệu | Phụ trách báo cáo và phân tích; Quản trị viên tenant |
| `UC-AI` | `UC-AI-01` | Cấu hình nhà cung cấp và mô hình AI | Quản trị viên nền tảng; Quản trị viên tenant; Nhà cung cấp AI |
| `UC-AI` | `UC-AI-02` | Quản lý prompt và use case AI | Quản trị viên tenant; Vai trò chuyên trách mô-đun |
| `UC-AI` | `UC-AI-03` | Sử dụng trợ lý AI trong nghiệp vụ | Thành viên tenant; Vai trò chuyên trách mô-đun; Nhà cung cấp AI |
| `UC-AI` | `UC-AI-04` | Rà soát và áp dụng kết quả AI | Thành viên tenant; Vai trò chuyên trách mô-đun |
| `UC-AI` | `UC-AI-05` | Quản lý chính sách dữ liệu AI | Quản trị viên tenant; Người kiểm tra hoặc giám sát |
| `UC-AI` | `UC-AI-06` | Theo dõi sử dụng, chi phí và chất lượng AI | Quản trị viên tenant; Quản trị viên nền tảng; Người kiểm tra hoặc giám sát |
| `UC-AI` | `UC-AI-07` | Xử lý lỗi và chuyển nhà cung cấp | Nhà cung cấp AI; Quản trị viên nền tảng |
| `UC-AUDIT` | `UC-AUDIT-01` | Tra cứu audit log | Người kiểm tra hoặc giám sát; Quản trị viên tenant; Quản trị viên nền tảng |
| `UC-AUDIT` | `UC-AUDIT-02` | Truy vết thực thể, người dùng hoặc quy trình | Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-03` | Điều tra sự cố từ audit trail | Người kiểm tra hoặc giám sát; Quản trị viên nền tảng |
| `UC-AUDIT` | `UC-AUDIT-04` | Quản lý cảnh báo và tích hợp audit | Người kiểm tra hoặc giám sát; Quản trị viên nền tảng |
| `UC-AUDIT` | `UC-AUDIT-05` | Xuất và báo cáo audit | Người kiểm tra hoặc giám sát; Quản trị viên nền tảng |
| `UC-AUDIT` | `UC-AUDIT-06` | Quản lý lưu giữ và tính toàn vẹn audit | Quản trị viên nền tảng; Người kiểm tra hoặc giám sát |
| `UC-AUDIT` | `UC-AUDIT-07` | Đánh giá độ đầy đủ của audit | Người kiểm tra hoặc giám sát; Quản trị viên nền tảng |