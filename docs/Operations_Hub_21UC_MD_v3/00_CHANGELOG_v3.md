# CHANGELOG — VERSION 3.0

## Sửa lỗi mô hình hóa

1. Xóa toàn bộ pseudo-use-case `PKG1`, `PKG2`, ...
2. Xóa quan hệ tự đặt `<<contains>>`.
3. Nối actor trực tiếp đến từng Use Case có mục tiêu nghiệp vụ.
4. Phân loại lại các bước kiểm tra, chuẩn hóa, audit và xử lý kỹ thuật thành `INC-*` hoặc `REQ-*`.
5. Chia sơ đồ theo vòng đời nghiệp vụ.
6. Giữ mã V2 trong bảng để bảo toàn truy vết.

## Tác động

- Tổng số phần tử chức năng không thay đổi về mặt bao phủ.
- Số Use Case đúng nghĩa giảm vì các xử lý nội bộ không còn bị đếm như mục tiêu actor.
- Sơ đồ chi tiết hiện diễn đạt rõ actor nào thực hiện nghiệp vụ nào.
