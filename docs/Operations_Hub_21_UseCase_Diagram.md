# USE CASE DIAGRAM TỔNG QUÁT — OPERATIONS HUB SaaS

```table-of-contents
```

## 1. Mục đích

Tài liệu này tổng hợp **21 nhóm Use Case cấp cao** của Operations Hub vào **một Use Case Diagram duy nhất**.

Biểu đồ được thiết kế ở mức **nhóm chức năng** nhằm:

- Thể hiện phạm vi phiên bản sản phẩm hoàn chỉnh.
- Phân biệt chức năng cấp nền tảng SaaS, chức năng vận hành tổ chức và chức năng giám sát–hỗ trợ.
- Làm cơ sở phân rã thành các Use Case chi tiết trong SRS và Chương 3 của báo cáo.
- Thể hiện vai trò của `UC-TENANT` như lớp quản trị đa tổ chức xuyên suốt toàn hệ thống.

> **Lưu ý:** Mỗi hình elip trong biểu đồ là một **nhóm Use Case**, không phải một Use Case nguyên tử. Ví dụ, `UC-TENANT` tiếp tục được phân rã thành đăng ký tenant, khởi tạo tenant, chuyển tenant, quản lý vòng đời tenant, quota, gói dịch vụ và xóa tenant.

---

## 2. Use Case Diagram tổng quát

![[useCase-all.svg]]


[[[useCase-all-palntuml]]]

## 3. Danh mục 21 nhóm Use Case

| STT | Mã nhóm           | Nhóm Use Case                             | Khối chức năng        |                         |
| --: | ----------------- | ----------------------------------------- | --------------------- | ----------------------- |
|   1 | `UC-TENANT`       | Quản trị nền tảng SaaS và tenant          | Nền tảng SaaS         | [[1. UC-TENANT]]        |
|   2 | `UC-AUTH`         | Xác thực và quản lý phiên                 | Nền tảng SaaS         | [[2. UC-AUTH]]          |
|   3 | `UC-USER`         | Quản lý tài khoản người dùng              | Quản trị hệ thống     | [[3. UC-USER]]          |
|   4 | `UC-RBAC`         | Quản lý vai trò và phân quyền             | Quản trị hệ thống     | [[4. UC-RBAC]]          |
|   5 | `UC-ORG`          | Quản lý thông tin và cơ cấu tổ chức       | Quản trị tổ chức      | [[5. UC-ORG]]           |
|   6 | `UC-BRAND`        | Quản lý branding và giao diện tổ chức     | Quản trị tổ chức      | [[6. UC-BRAND]]         |
|   7 | `UC-MODULE`       | Cấu hình module và quy trình nghiệp vụ    | Quản trị hệ thống     | [[7. UC-MODULE]]        |
|   8 | `UC-SETTING`      | Thiết lập cá nhân                         | Quản trị hệ thống     | [[8. UC-SETTING]]       |
|   9 | `UC-MEMBER`       | Quản lý thành viên                        | Vận hành tổ chức      | [[9. UC-MEMBER]]        |
|  10 | `UC-REQUEST`      | Quản lý đơn từ và yêu cầu nội bộ          | Vận hành tổ chức      | [[10. UC-REQUEST]]      |
|  11 | `UC-DOCUMENT`     | Quản lý văn bản, biểu mẫu và mẫu tài liệu | Vận hành tổ chức      | [[11. UC-DOCUMENT]]     |
|  12 | `UC-FINANCE`      | Quản lý tài chính và ngân sách            | Vận hành tổ chức      | [[12. UC-FINANCE]]      |
|  13 | `UC-ASSET`        | Quản lý tài sản và hậu cần                | Vận hành tổ chức      | [[13. UC-ASSET]]        |
|  14 | `UC-MEETING`      | Quản lý cuộc họp, sự kiện và chuyên cần   | Vận hành tổ chức      | [[14. UC-MEETING]]      |
|  15 | `UC-DISCIPLINE`   | Quản lý kỷ luật và KPI                    | Vận hành tổ chức      | [[15. UC-DISCIPLINE]]   |
|  16 | `UC-EVALUATION`   | Quản lý đánh giá thành viên               | Vận hành tổ chức      | [[16. UC-EVALUATION]]   |
|  17 | `UC-COMPETITION`  | Quản lý cuộc thi, thành tích và ghi nhận  | Vận hành tổ chức      | [[17. UC-COMPETITION]]  |
|  18 | `UC-NOTIFICATION` | Quản lý thông báo và truyền thông nội bộ  | Vận hành tổ chức      | [[18. UC-NOTIFICATION]] |
|  19 | `UC-DASHBOARD`    | Dashboard, báo cáo và xuất dữ liệu        | Giám sát và phân tích | [[19. UC-DASHBOARD]]    |
|  20 | `UC-AI`           | Trợ lý AI và AI Gateway                   | Hỗ trợ thông minh     | [[20. UC-AI]]           |
|  21 | `UC-AUDIT`        | Nhật ký hệ thống và truy vết hoạt động    | Kiểm soát và truy vết | [[21. UC-AUDIT]]        |
|     |                   |                                           |                       |                         |

---

## 4. Mô tả tác nhân

| Tác nhân                   | Actors  | Vai trò trong hệ thống                                                   |
| -------------------------- | ------- | ------------------------------------------------------------------------ |
| **Khách truy cập**         | `GUEST` | Đăng ký tài khoản hoặc đăng ký một tổ chức mới trên nền tảng             |
| **Người dùng nền tảng**    |         | Người đã có tài khoản toàn cục, có thể tham gia một hoặc nhiều tenant    |
| **Thành viên tenant**      |         | Sử dụng chức năng nghiệp vụ trong phạm vi tenant được cấp quyền          |
| **Quản trị viên tenant**   |         | Quản trị người dùng, cơ cấu, module, dữ liệu và quy trình của một tenant |
| **Chủ sở hữu tenant**      |         | Chịu trách nhiệm cao nhất đối với tenant, gói dịch vụ và vòng đời tenant |
| **Quản trị viên nền tảng** |         | Quản trị SaaS ở phạm vi toàn hệ thống và giữa các tenant                 |
| **Dịch vụ bên ngoài**      |         | Email, lưu trữ, AI provider, DNS, thanh toán hoặc dịch vụ tích hợp khác  |

---

## 5. Quan hệ kế thừa giữa các tác nhân

```text
Người dùng nền tảng
└── Thành viên tenant
    └── Quản trị viên tenant
        └── Chủ sở hữu tenant
```

Quan hệ kế thừa trên có nghĩa:

- Quản trị viên tenant có thể thực hiện các chức năng của thành viên tenant.
- Chủ sở hữu tenant có thể thực hiện các chức năng của quản trị viên tenant.
- Quyền thực tế vẫn phải được kiểm tra bằng RBAC và phạm vi dữ liệu của tenant.
- Quản trị viên nền tảng là vai trò cấp SaaS riêng, không mặc định kế thừa quyền truy cập dữ liệu nghiệp vụ của tenant.

---

## 6. Quy tắc đọc biểu đồ

1. Các đường nối giữa actor và nhóm Use Case biểu thị actor có thể khởi tạo hoặc trực tiếp tham gia nhóm chức năng đó.
2. `UC-TENANT` không thay thế `UC-ORG`:
   - `UC-TENANT` quản lý không gian sử dụng SaaS và cô lập dữ liệu.
   - `UC-ORG` quản lý cơ cấu nội bộ của một tổ chức.
3. `UC-BRAND` chỉ quản lý nhận diện tổ chức, không quản lý cấu trúc hay quyền.
4. `UC-MODULE` quản lý việc bật/tắt module và cấu hình workflow theo tenant.
5. `UC-AUDIT` vừa là chức năng tra cứu dành cho actor có quyền, vừa là cơ chế hệ thống tự động ghi nhận sự kiện.
6. `UC-AI` chỉ là lớp hỗ trợ; lỗi AI không được làm gián đoạn các nghiệp vụ lõi.
7. Tất cả nhóm nghiệp vụ phải chịu ba ràng buộc xuyên suốt:
   - Tenant context hợp lệ.
   - Kiểm soát quyền phía backend.
   - Ghi nhận audit đối với thao tác quan trọng.

---

## 7. Chú thích dùng trong báo cáo

**Tên hình đề xuất:**

> **Hình 3.x. Biểu đồ Use Case tổng quát của nền tảng Operations Hub SaaS**

**Mô tả đề xuất:**

> Biểu đồ Use Case tổng quát trình bày 21 nhóm chức năng của nền tảng Operations Hub SaaS và các tác nhân tương tác với hệ thống. Các nhóm chức năng được phân thành ba khối: nền tảng SaaS và quản trị hệ thống; nghiệp vụ vận hành tổ chức; giám sát, phân tích và hỗ trợ. Nhóm `UC-TENANT` đóng vai trò xuyên suốt nhằm quản lý vòng đời tenant, xác định tenant context và bảo đảm cô lập dữ liệu giữa các tổ chức sử dụng nền tảng.
