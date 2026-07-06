# HƯỚNG DẪN MÔ HÌNH HÓA USE CASE — V4

## 1. Mục tiêu tinh gọn

V4 khắc phục tình trạng phân rã quá mức của V3. Một Use Case chỉ được giữ độc lập khi nó biểu diễn **một mục tiêu nghiệp vụ có kết quả quan sát được đối với actor**.

## 2. Tiêu chí xác định một Use Case độc lập

Một hành vi được mô hình hóa thành Use Case khi đồng thời đáp ứng phần lớn điều kiện sau:

1. Có actor chính hoặc actor hỗ trợ xác định.
2. Có trigger nghiệp vụ rõ ràng.
3. Có kết quả hoặc giá trị quan sát được.
4. Có vòng đời hoặc quyền riêng đáng kể.
5. Có thể kiểm thử như một luồng nghiệp vụ hoàn chỉnh.

## 3. Nội dung không tách thành Use Case riêng

Các nội dung sau được đưa vào luồng chính, luồng thay thế, quy tắc nghiệp vụ hoặc yêu cầu hệ thống:

- CRUD chi tiết của cùng một đối tượng khi không tạo mục tiêu mới.
- Nhập từng trường, chọn từng bộ lọc hoặc thao tác UI nhỏ.
- Chuẩn hóa dữ liệu, validate, kiểm tra trùng, ghi audit.
- Retry, timeout, cache, pagination, token refresh và xử lý kỹ thuật.
- Một bước bắt buộc nằm trong cùng giao dịch nghiệp vụ.
- Các biến thể kênh hoặc phương thức có cùng mục tiêu.

## 4. Quy tắc gộp

- `Tạo`, `cập nhật`, `vô hiệu hóa`, `lưu trữ` cùng một danh mục được gộp thành **Quản lý ...** nếu actor, quyền và vòng đời tương đồng.
- Các phương thức đăng nhập được gộp vào **Đăng nhập**; MFA và quản lý phiên giữ độc lập vì có vòng đời và rủi ro riêng.
- Các bước `lưu nháp`, `đính kèm`, `bổ sung`, `rút` nằm trong Use Case nghiệp vụ cha nếu không tạo giá trị độc lập.
- Audit, tenant isolation, validation và authorization là yêu cầu xuyên suốt, không vẽ thành Use Case thông thường.

## 5. Quy mô mục tiêu

- Mỗi nhóm nghiệp vụ: khoảng **6–10 Use Case chính**.
- Mỗi sơ đồ chi tiết: tối đa khoảng **10–12 Use Case** để vẫn đọc được.
- Không áp dụng hạn mức cứng; số lượng phụ thuộc số mục tiêu nghiệp vụ thực sự.

## 6. Cách đọc tài liệu

Cột **Nội dung bao hàm** liệt kê các chức năng chi tiết đã được hợp nhất vào Use Case chính. Các chi tiết này không bị loại khỏi phạm vi; chúng chuyển từ cấp Use Case sang cấp luồng hoặc quy tắc.
