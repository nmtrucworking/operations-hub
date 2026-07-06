```table-of-contents
```

### 3.1.3. Yêu cầu phi chức năng

Yêu cầu phi chức năng mô tả các thuộc tính chất lượng, giới hạn vận hành và điều kiện kỹ thuật mà Operations Hub phải đáp ứng trong quá trình hoạt động. Khác với yêu cầu chức năng xác định hệ thống cung cấp nghiệp vụ nào, yêu cầu phi chức năng xác định các nghiệp vụ đó phải được thực hiện với mức độ an toàn, chính xác, ổn định và có thể kiểm chứng như thế nào.

Đối với Operations Hub, yêu cầu phi chức năng có ảnh hưởng trực tiếp đến tính đúng đắn của hệ thống. Một chức năng có thể trả về kết quả thành công về mặt kỹ thuật nhưng vẫn phải được xem là thất bại nếu dữ liệu thuộc sai tổ chức, quyền truy cập được áp dụng không đúng, thông tin cá nhân bị tiết lộ hoặc thao tác không thể truy vết.

Mỗi yêu cầu phi chức năng được mô tả bằng mã định danh, nhóm chất lượng, nội dung yêu cầu, mức ưu tiên, phương pháp kiểm chứng và tiêu chí chấp nhận. Các ngưỡng định lượng về hiệu năng, tải và khôi phục trong phần này được sử dụng làm baseline kiểm thử cho phạm vi đồ án. Những ngưỡng này cần được đánh giá lại khi có dữ liệu vận hành thực tế.

#### a. Bảo mật và kiểm soát truy cập

Hệ thống quản lý dữ liệu thành viên, cơ cấu tổ chức, vai trò, quyền và các hồ sơ vận hành nội bộ. Vì vậy, xác thực và phân quyền phải được kiểm soát tại phía máy chủ, không được phụ thuộc vào việc ẩn hoặc hiện chức năng trên giao diện.

**Bảng 3.22. Yêu cầu phi chức năng về bảo mật**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-SEC-001|Xác thực|Mọi chức năng nghiệp vụ nội bộ phải yêu cầu thông tin xác thực hợp lệ, ngoại trừ các chức năng được công bố công khai.|Must|Kiểm thử bảo mật|Yêu cầu không có thông tin xác thực hợp lệ bị từ chối và không trả dữ liệu nghiệp vụ.|
|NFR-SEC-002|Phân quyền|Quyền truy cập phải được kiểm tra tại phía máy chủ trước khi đọc hoặc thay đổi dữ liệu.|Must|Kiểm thử phân quyền|Người dùng gọi trực tiếp giao diện dịch vụ ngoài quyền bị từ chối, kể cả khi thay đổi đường dẫn hoặc dữ liệu yêu cầu.|
|NFR-SEC-003|Mật khẩu|Mật khẩu phải được lưu dưới dạng giá trị băm bằng cơ chế phù hợp; không được lưu, ghi log hoặc trả về dưới dạng rõ.|Must|Kiểm tra mã nguồn và dữ liệu|Không tồn tại mật khẩu dạng rõ trong cơ sở dữ liệu, nhật ký hoặc phản hồi của hệ thống.|
|NFR-SEC-004|Kiểm tra dữ liệu|Mọi dữ liệu đầu vào phải được kiểm tra về kiểu, độ dài, định dạng, giá trị bắt buộc và quy tắc nghiệp vụ.|Must|Kiểm thử xác thực dữ liệu|Dữ liệu không hợp lệ bị từ chối bằng phản hồi chuẩn hóa và không làm thay đổi dữ liệu hiện có.|
|NFR-SEC-005|Bảo vệ thông tin hệ thống|Phản hồi lỗi không được tiết lộ stack trace, khóa bí mật, chuỗi kết nối, cấu trúc hạ tầng hoặc thông tin triển khai nhạy cảm.|Must|Kiểm thử bảo mật|Phản hồi lỗi chỉ chứa mã lỗi, thông điệp phù hợp và mã truy vết khi cần.|
|NFR-SEC-006|Quản lý bí mật|Khóa ký, thông tin kết nối, thông tin xác thực dịch vụ ngoài và các secret khác không được ghi trực tiếp trong mã nguồn.|Must|Kiểm tra cấu hình|Kho mã nguồn không chứa secret sử dụng cho môi trường triển khai; hệ thống nhận cấu hình qua cơ chế quản lý cấu hình phù hợp.|
|NFR-SEC-007|Quản lý phiên|Phiên đăng nhập hoặc token phải có thời hạn hiệu lực và phải bị vô hiệu hóa theo chính sách khi người dùng đăng xuất, bị khóa hoặc thay đổi trạng thái bảo mật quan trọng.|Must|Kiểm thử bảo mật|Thông tin xác thực hết hạn hoặc đã bị vô hiệu hóa không thể tiếp tục truy cập chức năng được bảo vệ.|
|NFR-SEC-008|Chống lạm dụng|Các chức năng có nguy cơ bị dò quét hoặc lạm dụng, đặc biệt là đăng nhập và khôi phục mật khẩu, phải được giới hạn tần suất theo cấu hình.|Should|Kiểm thử tải và bảo mật|Các yêu cầu vượt ngưỡng bị trì hoãn hoặc từ chối mà không làm gián đoạn người dùng hợp lệ khác.|

#### b. Cô lập dữ liệu giữa các tổ chức

Cô lập dữ liệu là yêu cầu bắt buộc của hệ thống phục vụ nhiều tổ chức. Ranh giới tenant phải được duy trì đối với dữ liệu chính, tệp đính kèm, bản xuất, thông báo, bộ nhớ đệm và các tác vụ xử lý nền.

**Bảng 3.23. Yêu cầu phi chức năng về cô lập tenant**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-ISO-001|Cô lập dữ liệu|Người dùng của tenant A không được đọc, thay đổi, xóa hoặc phê duyệt dữ liệu thuộc tenant B.|Must|Kiểm thử bảo mật|Truy cập bằng định danh dữ liệu của tenant khác bị từ chối và không tiết lộ nội dung bản ghi.|
|NFR-ISO-002|Ngữ cảnh tenant|Tenant context phải được xác định và kiểm tra nhất quán trong toàn bộ luồng xử lý nghiệp vụ.|Must|Kiểm thử tích hợp|Yêu cầu thiếu tenant context, sử dụng tenant không tồn tại hoặc tenant mà người dùng không có membership hợp lệ bị từ chối.|
|NFR-ISO-003|Xác minh ngữ cảnh|Hệ thống không được tin cậy tenant context chỉ dựa trên giá trị do phía người dùng gửi lên.|Must|Kiểm thử bảo mật|Việc tự thay đổi tenant ID trong yêu cầu không cho phép người dùng chuyển sang tenant ngoài quyền truy cập.|
|NFR-ISO-004|Tài nguyên phụ|Tệp đính kèm, bản xuất, thông báo, bộ nhớ đệm và tác vụ nền phải giữ cùng ranh giới tenant với dữ liệu nguồn.|Must|Kiểm thử tích hợp|Không thể tải hoặc truy cập tài nguyên của tenant khác bằng cách đoán hoặc thay đổi định danh.|
|NFR-ISO-005|Danh sách dữ liệu|Các truy vấn danh sách phải mặc định giới hạn theo tenant và phạm vi quyền hiện hành.|Must|Kiểm thử dữ liệu|Phản hồi danh sách không chứa bản ghi của tenant khác trong mọi trường hợp kiểm thử.|
|NFR-ISO-006|Kiểm thử cô lập|Các chức năng xử lý dữ liệu nghiệp vụ phải được kiểm thử tối thiểu với hai tenant có dữ liệu và vai trò khác nhau.|Must|Kiểm tra bộ kiểm thử|Bộ kiểm thử chứng minh dữ liệu, quyền và branding không bị sử dụng chéo giữa hai tenant.|

#### c. Hiệu năng

Các chỉ tiêu hiệu năng được xác định nhằm bảo đảm các thao tác thường xuyên có thời gian phản hồi phù hợp trong phạm vi dữ liệu thử nghiệm của đồ án. Thời gian gọi dịch vụ bên ngoài hoặc tải tệp dung lượng lớn phải được đo riêng, không được dùng để che khuất hiệu năng của xử lý nội bộ.

**Bảng 3.24. Yêu cầu phi chức năng về hiệu năng**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-PERF-001|Thời gian phản hồi|Các màn hình danh sách chính phải phản hồi trong thời gian không quá 2 giây đối với 95% yêu cầu trong kịch bản kiểm thử chuẩn.|Should|Kiểm thử hiệu năng|Với dữ liệu tối đa 10.000 bản ghi thuộc một nhóm nghiệp vụ và tối thiểu 20 người dùng đồng thời, 95% yêu cầu danh sách hoàn tất trong 2 giây.|
|NFR-PERF-002|Dashboard|Dashboard tổng quan phải tải dữ liệu tổng hợp trong thời gian không quá 3 giây đối với 95% yêu cầu trong kịch bản kiểm thử chuẩn.|Should|Kiểm thử hiệu năng|Các chỉ số chính được hiển thị trong 3 giây mà không trả dữ liệu sai tenant.|
|NFR-PERF-003|Thao tác ghi|Các thao tác tạo hoặc cập nhật dữ liệu thông thường phải hoàn tất trong thời gian không quá 2 giây, không tính thời gian truyền tệp hoặc chờ dịch vụ ngoài.|Should|Kiểm thử hiệu năng|95% thao tác ghi dữ liệu thông thường hoàn tất trong ngưỡng đã xác định.|
|NFR-PERF-004|Phân trang|Các danh sách có khả năng tăng trưởng phải hỗ trợ phân trang hoặc cơ chế giới hạn kết quả.|Must|Kiểm thử chức năng và hiệu năng|Hệ thống không tải toàn bộ tập dữ liệu lớn trong một yêu cầu; phản hồi có thông tin về trang và số lượng bản ghi.|
|NFR-PERF-005|Truy vấn và lọc|Việc tìm kiếm, lọc và sắp xếp phải được thực hiện trên tập dữ liệu đã giới hạn theo tenant.|Must|Kiểm thử hiệu năng và bảo mật|Truy vấn không quét hoặc trả về dữ liệu ngoài tenant hiện hành và vẫn đáp ứng ngưỡng hiệu năng đã xác định.|

#### d. Độ tin cậy và tính sẵn sàng

Hệ thống phải duy trì trạng thái dữ liệu nhất quán khi xảy ra lỗi đầu vào, lỗi kết nối, lỗi dịch vụ ngoài hoặc gián đoạn trong quá trình xử lý.

**Bảng 3.25. Yêu cầu phi chức năng về độ tin cậy**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-REL-001|Xử lý lỗi|Lỗi dữ liệu, lỗi cơ sở dữ liệu và lỗi dịch vụ ngoài không được làm dừng toàn bộ hệ thống.|Must|Kiểm thử lỗi|Lỗi được trả về dưới dạng phản hồi chuẩn hóa; hệ thống tiếp tục xử lý các yêu cầu hợp lệ khác.|
|NFR-REL-002|Tính nguyên tử|Nghiệp vụ gồm nhiều bước phụ thuộc phải bảo đảm hoàn tất toàn bộ hoặc không ghi nhận thay đổi dở dang.|Must|Kiểm thử giao dịch|Khi một bước thất bại, dữ liệu được khôi phục về trạng thái nhất quán trước khi xử lý.|
|NFR-REL-003|Dịch vụ ngoài|Sự cố từ dịch vụ AI, email, lưu trữ hoặc dịch vụ tích hợp khác không được làm gián đoạn các nghiệp vụ cốt lõi không phụ thuộc trực tiếp vào dịch vụ đó.|Must|Kiểm thử tích hợp|Nghiệp vụ chính vẫn thực hiện được hoặc chuyển sang trạng thái chờ xử lý; lỗi tích hợp được ghi nhận.|
|NFR-REL-004|Trạng thái hoạt động|Hệ thống phải cung cấp cơ chế kiểm tra trạng thái của dịch vụ và các phụ thuộc chính.|Should|Kiểm thử vận hành|Cơ chế health check xác định được dịch vụ đang hoạt động và báo lỗi khi phụ thuộc bắt buộc không sẵn sàng.|
|NFR-REL-005|Tránh gửi lặp|Các tác vụ có khả năng được gửi lại do lỗi mạng phải hạn chế việc tạo bản ghi hoặc xử lý nghiệp vụ trùng lặp.|Should|Kiểm thử tích hợp|Gửi lại cùng một yêu cầu có định danh xử lý không tạo nhiều tenant, membership, giao dịch hoặc thông báo giống nhau ngoài chính sách cho phép.|
|NFR-REL-006|Nhất quán dữ liệu|Hệ thống không được xác nhận thao tác thành công trước khi dữ liệu bắt buộc được lưu nhất quán.|Must|Kiểm thử lỗi|Khi lưu dữ liệu thất bại, người dùng nhận trạng thái thất bại và dữ liệu không bị hiển thị như đã hoàn tất.|

#### e. Khả năng mở rộng

Khả năng mở rộng được xem xét theo số lượng tenant, số lượng người dùng, khối lượng dữ liệu và khả năng bổ sung mô-đun. Yêu cầu này không đồng nghĩa hệ thống phải xử lý ngay tải ở quy mô lớn, nhưng mô hình cốt lõi không được tạo ra giới hạn khiến việc mở rộng bắt buộc phải thiết kế lại toàn bộ.

**Bảng 3.26. Yêu cầu phi chức năng về khả năng mở rộng**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-SCAL-001|Mở rộng tenant|Việc tăng số lượng tenant không được yêu cầu thay đổi mô hình định danh và quyền sở hữu dữ liệu cốt lõi.|Should|Kiểm thử dữ liệu|Dữ liệu thử nghiệm của nhiều tenant được lưu và truy vấn đúng phạm vi, không phát sinh xung đột định danh.|
|NFR-SCAL-002|Mở rộng người dùng|Hệ thống phải hỗ trợ một người dùng tham gia nhiều tenant mà không nhân bản tài khoản đăng nhập.|Must|Kiểm thử tích hợp|Một User có nhiều membership độc lập và có thể chuyển tenant mà không làm sai quyền.|
|NFR-SCAL-003|Mở rộng mô-đun|Việc bổ sung mô-đun nghiệp vụ mới không được yêu cầu thay đổi các chức năng không liên quan nếu hợp đồng dữ liệu cốt lõi không thay đổi.|Should|Kiểm tra thiết kế và kiểm thử hồi quy|Mô-đun mới được tích hợp mà các kiểm thử hồi quy của tenant, membership và phân quyền vẫn đạt.|
|NFR-SCAL-004|Mở rộng dữ liệu|Các danh sách, báo cáo và truy vấn phải có cơ chế phân trang, lọc hoặc xử lý theo lô khi dữ liệu tăng.|Should|Kiểm thử tải|Việc tăng dữ liệu không dẫn đến phản hồi không giới hạn hoặc tiêu thụ tài nguyên vượt mức kiểm thử.|

#### f. Khả năng bảo trì và kiểm thử

Hệ thống cần được tổ chức để có thể sửa lỗi, bổ sung chức năng và kiểm tra hồi quy mà không làm thay đổi ngoài ý muốn các phần không liên quan.

**Bảng 3.27. Yêu cầu phi chức năng về bảo trì và kiểm thử**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-MAIN-001|Phân tách trách nhiệm|Mã nguồn phải được tổ chức theo các miền nghiệp vụ hoặc mô-đun có trách nhiệm rõ ràng.|Must|Kiểm tra mã nguồn|Nghiệp vụ không bị tập trung vào một lớp hoặc thành phần duy nhất; các mô-đun có ranh giới nhận diện được.|
|NFR-MAIN-002|Thành phần dùng chung|Cơ chế xác thực, xác định tenant context, phân quyền, xử lý lỗi và ghi nhật ký phải được áp dụng nhất quán.|Must|Rà soát mã nguồn và kiểm thử bảo mật|Các chức năng được bảo vệ sử dụng cơ chế chung hoặc chính sách tương đương, không triển khai tùy ý ở từng màn hình.|
|NFR-MAIN-003|Kiểm thử tự động|Các yêu cầu mức Must phải có kiểm thử tự động hoặc kịch bản kiểm thử lặp lại được.|Must|Kiểm tra bộ kiểm thử|Có thể chạy lại các kiểm thử cốt lõi và xác định rõ yêu cầu nào đã đạt hoặc thất bại.|
|NFR-MAIN-004|Kiểm thử hồi quy|Thay đổi một mô-đun không được làm mất tính đúng đắn của các năng lực tenant, membership, quyền và cô lập dữ liệu.|Must|Kiểm thử hồi quy|Bộ kiểm thử nền tảng vẫn đạt sau khi bổ sung hoặc chỉnh sửa mô-đun.|
|NFR-MAIN-005|Tài liệu kỹ thuật|Các cấu hình, quy trình khởi chạy, migration, kiểm thử và xử lý lỗi phổ biến phải được tài liệu hóa.|Must|Kiểm tra tài liệu|Thành viên phát triển khác có thể thiết lập và chạy hệ thống theo hướng dẫn mà không phụ thuộc hoàn toàn vào người viết ban đầu.|
|NFR-MAIN-006|Chuẩn hóa lỗi|Lỗi nghiệp vụ và lỗi hệ thống phải sử dụng cấu trúc phản hồi nhất quán.|Should|Kiểm thử giao diện dịch vụ|Các lỗi xác thực, phân quyền, dữ liệu và quy tắc nghiệp vụ có mã lỗi và thông điệp theo cùng một cấu trúc.|

#### g. Khả năng sử dụng và khả năng tiếp cận

Giao diện phải giúp người dùng nhận biết rõ tổ chức đang hoạt động, quyền hiện hành, trạng thái xử lý và kết quả của thao tác. Branding của tổ chức không được làm giảm khả năng đọc hoặc che khuất các trạng thái quan trọng.

**Bảng 3.28. Yêu cầu phi chức năng về khả năng sử dụng**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-USAB-001|Nhận biết ngữ cảnh|Giao diện phải hiển thị rõ tenant đang hoạt động trên các màn hình nghiệp vụ chính.|Must|Kiểm thử khả năng sử dụng|Người dùng xác định được tổ chức hiện hành trước khi thực hiện thao tác.|
|NFR-USAB-002|Phản hồi thao tác|Các thao tác chính phải có trạng thái đang xử lý, thành công, thất bại và hướng xử lý tiếp theo.|Must|Kiểm thử giao diện|Người dùng nhận được phản hồi rõ ràng sau khi lưu, cập nhật, phê duyệt, vô hiệu hóa hoặc chuyển trạng thái.|
|NFR-USAB-003|Lỗi biểu mẫu|Lỗi dữ liệu phải được hiển thị gần trường liên quan và sử dụng ngôn ngữ dễ hiểu.|Must|Kiểm thử khả năng sử dụng|Người dùng xác định được trường sai và cách sửa mà không cần đọc thông tin kỹ thuật.|
|NFR-USAB-004|Tính nhất quán|Các màn hình phải sử dụng nhất quán nhãn, biểu tượng, màu trạng thái, bảng dữ liệu, hộp thoại và hành vi biểu mẫu.|Should|Kiểm tra giao diện|Các thành phần cùng chức năng có cách trình bày và phản hồi tương đương.|
|NFR-USAB-005|Hiển thị thích nghi|Giao diện phải sử dụng được trên các kích thước màn hình máy tính và thiết bị di động phổ biến.|Should|Kiểm thử responsive|Không mất chức năng chính, không che nút thao tác và không xuất hiện cuộn ngang không cần thiết tại các kích thước kiểm thử.|
|NFR-USAB-006|Branding an toàn|Màu sắc và tài nguyên branding không được làm giảm khả năng đọc hoặc nhận biết trạng thái hệ thống.|Should|Kiểm tra khả năng tiếp cận|Văn bản, nút, liên kết và cảnh báo vẫn có độ tương phản và khả năng nhận diện theo quy tắc giao diện chung.|
|NFR-USAB-007|Thao tác quan trọng|Các hành động có ảnh hưởng lớn như khóa tenant, xóa mềm, kết thúc membership hoặc thay đổi quyền phải có bước xác nhận phù hợp.|Must|Kiểm thử giao diện|Người dùng được thông báo rõ đối tượng và hậu quả trước khi xác nhận hành động.|

#### h. Sao lưu và khôi phục

Sao lưu chỉ có giá trị khi dữ liệu có thể được khôi phục và đối chiếu. Quy trình sao lưu phải xem xét cả dữ liệu nghiệp vụ, cấu hình tổ chức và ranh giới tenant.

**Bảng 3.29. Yêu cầu phi chức năng về sao lưu và khôi phục**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-BACK-001|Sao lưu|Hệ thống phải hỗ trợ sao lưu dữ liệu cấu hình và dữ liệu nghiệp vụ.|Must|Kiểm thử sao lưu|Tạo được bản sao lưu có thể kiểm tra và được lưu tách khỏi dữ liệu đang hoạt động.|
|NFR-BACK-002|Khôi phục|Quy trình khôi phục phải được kiểm thử, không chỉ kiểm tra sự tồn tại của tệp sao lưu.|Must|Kiểm thử khôi phục|Có thể khôi phục môi trường kiểm thử và đối chiếu được các dữ liệu chính.|
|NFR-BACK-003|Mục tiêu khôi phục|Baseline của đồ án đặt mục tiêu điểm khôi phục dữ liệu không quá 24 giờ và thời gian khôi phục không quá 4 giờ đối với sự cố dữ liệu thông thường.|Should|Đo lường khôi phục|Kịch bản kiểm thử chứng minh dữ liệu mất tối đa trong phạm vi bản sao lưu gần nhất và hệ thống được phục hồi trong thời gian mục tiêu.|
|NFR-BACK-004|Cô lập khi khôi phục|Việc sao lưu hoặc khôi phục không được làm trộn lẫn dữ liệu, cấu hình hoặc tệp giữa các tenant.|Must|Kiểm thử bảo mật và khôi phục|Sau khôi phục, dữ liệu vẫn thuộc đúng tenant và không phát sinh quyền truy cập chéo.|
|NFR-BACK-005|Tính toàn vẹn|Bản sao lưu phải có cơ chế kiểm tra khả năng đọc và tính toàn vẹn trước khi được xem là hợp lệ.|Should|Kiểm tra bản sao lưu|Bản sao lưu lỗi hoặc không hoàn chỉnh được phát hiện và không được dùng làm bản khôi phục chính thức.|

#### i. Bảo vệ dữ liệu cá nhân

Operations Hub có thể lưu trữ thông tin cá nhân, thông tin tham gia tổ chức, kết quả đánh giá và lịch sử hoạt động của thành viên. Việc thu thập và hiển thị dữ liệu phải phù hợp với mục đích nghiệp vụ và phạm vi quyền.

**Bảng 3.30. Yêu cầu phi chức năng về bảo vệ dữ liệu cá nhân**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-PRIV-001|Giới hạn truy cập|Người dùng chỉ được truy cập dữ liệu cá nhân cần thiết cho vai trò và mục đích nghiệp vụ được giao.|Must|Kiểm thử phân quyền|Thành viên thông thường không xem được hồ sơ hoặc trường dữ liệu ngoài phạm vi được cấp.|
|NFR-PRIV-002|Tối thiểu hóa dữ liệu|Giao diện, API, báo cáo và bản xuất không được mặc định trả các trường dữ liệu cá nhân không cần thiết.|Must|Kiểm tra dữ liệu trả về|Phản hồi được giới hạn theo hợp đồng dữ liệu và quyền truy cập của người dùng.|
|NFR-PRIV-003|Nhật ký an toàn|Nhật ký không được ghi mật khẩu, token, secret hoặc toàn bộ nội dung dữ liệu cá nhân không cần thiết cho việc truy vết.|Must|Kiểm tra nhật ký|Log chỉ chứa định danh và thông tin cần thiết; không xuất hiện dữ liệu xác thực hoặc dữ liệu nhạy cảm dạng rõ.|
|NFR-PRIV-004|Lưu giữ dữ liệu|Hệ thống phải xác định chính sách lưu giữ, vô hiệu hóa, ẩn danh hoặc xóa dữ liệu khi dữ liệu không còn cần thiết hoặc membership kết thúc.|Should|Kiểm tra chính sách và kiểm thử|Kết thúc membership không làm mất liên kết lịch sử, đồng thời hạn chế việc tiếp tục truy cập dữ liệu cá nhân.|
|NFR-PRIV-005|Dữ liệu kiểm thử|Dữ liệu dùng trong môi trường kiểm thử, trình diễn hoặc tài liệu không được chứa thông tin cá nhân thực tế nếu chưa có sự cho phép phù hợp.|Must|Kiểm tra dữ liệu|Môi trường trình diễn sử dụng dữ liệu giả lập, đã ẩn danh hoặc đã được phê duyệt.|
|NFR-PRIV-006|Xuất dữ liệu|Việc xuất dữ liệu cá nhân phải được kiểm soát theo quyền và được ghi nhận khi thuộc nhóm thao tác cần truy vết.|Must|Kiểm thử phân quyền và audit|Người không có quyền không thể xuất dữ liệu; thao tác xuất quan trọng có bản ghi truy vết.|

#### j. Khả năng truy vết và giám sát

Nhật ký phải hỗ trợ điều tra lỗi, kiểm tra hành động quản trị và xác định chuỗi xử lý của một yêu cầu mà không làm lộ thông tin nhạy cảm.

**Bảng 3.31. Yêu cầu phi chức năng về truy vết và giám sát**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-AUD-001|Khả năng truy vết|Các thao tác quản trị và thay đổi nghiệp vụ quan trọng phải xác định được tenant, người thực hiện, hành động, đối tượng, thời điểm và kết quả.|Must|Kiểm tra và kiểm thử|Bản ghi nhật ký chứa đầy đủ các thuộc tính bắt buộc và liên kết được với đối tượng nguồn.|
|NFR-AUD-002|Liên kết yêu cầu|Các bước xử lý thuộc cùng một yêu cầu hoặc giao dịch phải có mã truy vết chung hoặc cơ chế tương đương.|Should|Kiểm tra nhật ký|Có thể lần theo chuỗi xử lý từ yêu cầu đầu vào đến kết quả hoặc lỗi phát sinh.|
|NFR-AUD-003|Bảo vệ nhật ký|Người dùng thông thường không được sửa hoặc xóa nhật ký hệ thống.|Must|Kiểm thử bảo mật|Các thao tác thay đổi nhật ký bị từ chối đối với vai trò không có thẩm quyền.|
|NFR-AUD-004|Phạm vi nhật ký|Người có quyền xem nhật ký chỉ được truy cập các bản ghi trong phạm vi tenant và trách nhiệm được giao.|Must|Kiểm thử phân quyền|Người kiểm tra của tenant A không xem được nhật ký nội bộ của tenant B.|
|NFR-AUD-005|Giám sát lỗi|Các lỗi hệ thống quan trọng phải được ghi nhận kèm thời điểm, loại lỗi và mã truy vết.|Should|Kiểm thử lỗi|Lỗi có thể được đối chiếu giữa phản hồi người dùng và nhật ký vận hành mà không công khai chi tiết nhạy cảm.|

#### k. Khả năng triển khai và tính di động

Quy trình triển khai phải lặp lại được, cấu hình phải tách khỏi mã nguồn và các môi trường phải được phân biệt rõ ràng.

**Bảng 3.32. Yêu cầu phi chức năng về triển khai**

|Mã yêu cầu|Nhóm chất lượng|Nội dung yêu cầu|Ưu tiên|Phương pháp kiểm chứng|Tiêu chí chấp nhận|
|---|---|---|---|---|---|
|NFR-DEP-001|Quản lý cấu hình|Cấu hình môi trường phải được tách khỏi mã nguồn.|Must|Kiểm tra cấu hình|Thông tin kết nối, secret, nguồn được phép truy cập và cấu hình dịch vụ được cung cấp qua biến môi trường hoặc kho cấu hình phù hợp.|
|NFR-DEP-002|Triển khai lặp lại|Hệ thống phải có quy trình thiết lập và triển khai lặp lại được.|Must|Kiểm thử triển khai|Một môi trường mới có thể được khởi tạo theo tài liệu với các bước và lệnh xác định.|
|NFR-DEP-003|Tách môi trường|Môi trường phát triển, kiểm thử và triển khai chính thức phải có cấu hình tách biệt.|Must|Kiểm tra cấu hình|Môi trường chính thức không sử dụng mặc định dữ liệu mẫu, secret phát triển hoặc cấu hình gỡ lỗi.|
|NFR-DEP-004|Quản lý thay đổi dữ liệu|Việc cập nhật phiên bản phải hỗ trợ thay đổi cấu trúc dữ liệu theo quy trình có kiểm soát.|Must|Kiểm thử triển khai|Có thể áp dụng thay đổi từ trạng thái dữ liệu hiện tại lên phiên bản mới mà không yêu cầu tạo lại toàn bộ dữ liệu.|
|NFR-DEP-005|Phục hồi triển khai|Quy trình triển khai phải có phương án xử lý khi phiên bản mới thất bại.|Should|Kiểm thử triển khai và khôi phục|Có thể quay lại phiên bản ổn định hoặc khôi phục dịch vụ theo hướng dẫn đã tài liệu hóa.|
|NFR-DEP-006|Tính độc lập môi trường|Hệ thống không được phụ thuộc vào đường dẫn, tài khoản hoặc cấu hình chỉ tồn tại trên máy của một thành viên phát triển.|Must|Kiểm thử trên môi trường khác|Hệ thống có thể được thiết lập trên một môi trường mới bằng các thành phần và cấu hình đã công bố.|
|NFR-DEP-007|Tương thích trình duyệt|Giao diện phải hoạt động trên các phiên bản hiện hành của những trình duyệt phổ biến được xác định trong kế hoạch kiểm thử.|Should|Kiểm thử tương thích|Các chức năng chính hoạt động nhất quán trên các trình duyệt thuộc phạm vi kiểm thử.|

#### l. Nguyên tắc đánh giá yêu cầu phi chức năng

Các yêu cầu phi chức năng phải được kiểm chứng đồng thời với yêu cầu chức năng. Một chức năng chỉ được xem là đạt khi thực hiện đúng nghiệp vụ và không vi phạm các điều kiện về xác thực, phân quyền, tenant isolation, bảo vệ dữ liệu và tính toàn vẹn.

Các yêu cầu mức Must phải có minh chứng kiểm thử hoặc kiểm tra tương ứng trong phạm vi nghiệm thu. Yêu cầu mức Should được kiểm thử khi chức năng liên quan đã được hiện thực; trường hợp chưa đạt phải được ghi nhận rõ là giới hạn hoặc nội dung cần cải tiến.

Các ngưỡng hiệu năng và khôi phục trong phần này là baseline ban đầu được xác định theo quy mô đồ án. Khi hệ thống được triển khai cho người dùng thực tế, cần đo lại số lượng người dùng đồng thời, dung lượng dữ liệu, tần suất truy cập, mức độ quan trọng của từng nghiệp vụ và khả năng hạ tầng để cập nhật các chỉ tiêu phù hợp hơn.

Một kết quả trả về nhanh nhưng chứa dữ liệu của sai tenant, một giao diện thuận tiện nhưng cho phép vượt quyền, hoặc một bản sao lưu không thể khôi phục đều phải được xem là không đáp ứng yêu cầu hệ thống.