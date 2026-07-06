# NGUYÊN TẮC HỢP NHẤT V3 → V4

V3 có 841 phần tử chức năng, trong đó nhiều phần tử là thao tác CRUD, bước validate, kênh thực hiện hoặc xử lý kỹ thuật. V4 không xóa các năng lực này mà chuyển chúng về đúng cấp mô hình.

| Loại phần tử V3 | Cách xử lý trong V4 |
|---|---|
| Mục tiêu actor hoàn chỉnh | Giữ hoặc hợp nhất thành Use Case chính |
| CRUD của cùng đối tượng | Gộp vào một Use Case “Quản lý ...” |
| Lưu nháp, bổ sung, rút, đính kèm | Đưa vào nội dung bao hàm/luồng thay thế của Use Case cha |
| Validate, chuẩn hóa, kiểm tra trùng | Quy tắc hoặc bước hệ thống |
| Audit, authorization, tenant isolation | Yêu cầu xuyên suốt |
| Retry, timeout, token refresh, cache | Yêu cầu kỹ thuật/luồng ngoại lệ |
| Kênh hoặc phương thức khác nhau cùng mục tiêu | Biến thể của một Use Case |

## Kết quả

- Số nhóm nghiệp vụ: **21**.
- Số Use Case chính V4: **161**.
- Trung bình: **7.7 Use Case/nhóm**.
- Chi tiết V3 được giữ làm nguồn phân tích, không dùng làm số lượng Use Case chính.