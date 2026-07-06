# Operations Hub — Đặc tả toàn bộ trang public và phong cách UI Minimalism

> **Trạng thái:** Baseline thiết kế giao diện công khai  
> **Phạm vi:** Web application `apps/web`  
> **Đối tượng sử dụng:** Product, BA, UI/UX, Frontend, Backend, QA  
> **Actor chính:** `ACT-GUEST`, `ACT-PLATFORM-USER`, `ACT-ORG-REGISTRANT`  
> **Use Case liên quan:** `UC-AUTH`, `UC-TENANT`, `UC-USER`, `UC-BRAND`, `UC-NOTIFICATION`

---

## 1. Mục đích

Tài liệu này xác định toàn bộ bề mặt giao diện mà người dùng có thể truy cập trước khi vào khu vực nghiệp vụ nội bộ của một tenant. Phạm vi bao gồm cả các trang chính, trang phụ, trang theo token, trang lỗi, trạng thái rỗng, thông báo hệ thống và các thành phần dùng chung có thể xuất hiện trên giao diện public.

Operations Hub là nền tảng quản lý vận hành dùng chung cho nhiều tổ chức. Vì vậy, giao diện public phải đồng thời giải quyết bốn nhiệm vụ:

1. Giải thích rõ Operations Hub là gì và giải quyết vấn đề nào.
2. Cho phép người dùng đăng ký, đăng nhập và khôi phục quyền truy cập.
3. Cho phép bắt đầu quy trình đăng ký tổ chức mới mà không làm lẫn ngữ cảnh tenant.
4. Hỗ trợ các bề mặt công khai theo tenant khi tenant chủ động bật và cấu hình branding.

Trang public không được hiển thị dữ liệu nội bộ, membership, vai trò, báo cáo hoặc tài nguyên nghiệp vụ của tenant nếu chưa có quyền hợp lệ.

---

## 2. Phân loại bề mặt public

### 2.1. Public tuyệt đối

Không yêu cầu đăng nhập, không yêu cầu token và không phụ thuộc tenant context.

Ví dụ: trang chủ, giới thiệu tính năng, đăng nhập, đăng ký, chính sách bảo mật, trang lỗi.

### 2.2. Public có token

Không yêu cầu phiên đăng nhập trước, nhưng yêu cầu token hợp lệ trong URL hoặc dữ liệu do hệ thống phát hành.

Ví dụ: xác minh email, đặt lại mật khẩu, chấp nhận lời mời.

Token chỉ cấp quyền thực hiện đúng một hành động giới hạn, không tạo quyền truy cập dữ liệu nội bộ khác.

### 2.3. Public theo tenant

Có thể truy cập không cần đăng nhập, nhưng nội dung thuộc một tenant xác định qua slug hoặc custom domain. Chỉ được hoạt động khi tenant chủ động bật chế độ công khai.

Ví dụ: hồ sơ công khai của tổ chức, trang tham gia tổ chức, sự kiện công khai.

### 2.4. Public shell nhưng hành động cần xác thực

Người dùng có thể xem trang mà chưa đăng nhập, nhưng khi bắt đầu thao tác tạo dữ liệu thì phải đăng nhập.

Ví dụ: trang bắt đầu đăng ký tổ chức.

---

## 3. Nguyên tắc kiến trúc thông tin

1. **Không đồng nhất tài khoản với membership.** Đăng nhập thành công không có nghĩa người dùng đã thuộc một tổ chức.
2. **Không tự suy đoán tenant.** Chỉ dùng tenant context khi có slug, custom domain, membership đã chọn hoặc dữ liệu token xác định rõ tenant.
3. **Không để branding thay đổi logic.** Branding chỉ thay đổi nhận diện; không thay đổi quyền, trạng thái, cảnh báo hoặc hành vi nghiệp vụ.
4. **Không công khai mặc định.** Trang, sự kiện, biểu mẫu hoặc dữ liệu tenant chỉ public khi tenant bật cấu hình tương ứng.
5. **Không dùng frontend làm ranh giới bảo mật.** Ẩn nút hoặc ẩn menu không thay thế kiểm tra ở backend.
6. **Mọi trạng thái đều có màn hình.** Loading, empty, success, warning, error, expired, revoked và maintenance phải được mô tả rõ.

---

# 4. Sơ đồ route tổng quát

```text
/
├── /features
│   └── /features/[module]
├── /how-it-works
├── /solutions
│   └── /solutions/[type]
├── /security
├── /about
├── /contact
├── /help
├── /changelog
├── /status
├── /pricing                         [Deferred nếu chưa chốt mô hình thương mại]
├── /auth
│   ├── /login
│   ├── /register
│   ├── /verify-email
│   ├── /resend-verification
│   ├── /forgot-password
│   ├── /reset-password
│   ├── /callback
│   └── /error
├── /start
├── /organizations/new               [Xem public, gửi dữ liệu cần xác thực]
├── /invite/[token]
├── /org/[slug]                       [Conditional]
│   ├── /join                         [Conditional]
│   ├── /events/[eventSlug]           [Conditional]
│   └── /forms/[formSlug]             [Conditional]
├── /legal
│   ├── /terms
│   ├── /privacy
│   ├── /cookies
│   └── /acceptable-use
├── /accessibility
├── /offline
├── /maintenance
├── /unsupported-browser
└── system pages
    ├── 400
    ├── 401
    ├── 403
    ├── 404
    ├── 409
    ├── 410
    ├── 429
    ├── 500
    └── 503
```

---

# 5. Danh mục đầy đủ các trang public

## 5.1. Nhóm giới thiệu nền tảng

| ID | Route | Tên trang | Mức ưu tiên | Mục tiêu chính |
|---|---|---|---|---|
| PUB-001 | `/` | Trang chủ | Must | Giới thiệu giá trị cốt lõi và đưa người dùng đến đăng ký hoặc đăng nhập |
| PUB-002 | `/features` | Tổng quan tính năng | Should | Mô tả năng lực nền tảng và các nhóm mô-đun |
| PUB-003 | `/features/[module]` | Chi tiết mô-đun | Could | Giải thích từng mô-đun mà không công bố dữ liệu tenant |
| PUB-004 | `/how-it-works` | Cách hoạt động | Should | Giải thích quy trình tài khoản → tổ chức → membership → module |
| PUB-005 | `/solutions` | Tổng quan tình huống sử dụng | Could | Phân nhóm nhu cầu theo loại tổ chức hoặc cách vận hành |
| PUB-006 | `/solutions/[type]` | Chi tiết giải pháp | Could | Nội dung theo tình huống sử dụng cụ thể |
| PUB-007 | `/security` | Bảo mật và riêng tư | Should | Công bố nguyên tắc cô lập tenant, quyền và xử lý dữ liệu |
| PUB-008 | `/about` | Giới thiệu dự án | Should | Trình bày mục tiêu, phạm vi và định hướng của Operations Hub |
| PUB-009 | `/contact` | Liên hệ | Could | Tiếp nhận phản hồi, yêu cầu hỗ trợ hoặc hợp tác |
| PUB-010 | `/help` | Trung tâm trợ giúp public | Should | Cung cấp hướng dẫn trước đăng nhập và câu hỏi thường gặp |
| PUB-011 | `/changelog` | Nhật ký phiên bản | Could | Công bố thay đổi sản phẩm đã được phép công khai |
| PUB-012 | `/status` | Trạng thái hệ thống | Could | Hiển thị tình trạng dịch vụ và sự cố công khai |
| PUB-013 | `/pricing` | Gói sử dụng | Deferred | Chỉ triển khai sau khi mô hình gói và thanh toán được phê duyệt |

### PUB-001 — Trang chủ `/`

**Mục tiêu**

- Nêu rõ Operations Hub là nền tảng quản lý vận hành cho tổ chức sinh viên.
- Phân biệt nền tảng dùng chung với một hệ thống chỉ dành riêng cho MTEC.
- Tạo đường dẫn rõ tới đăng ký tài khoản, đăng nhập và bắt đầu đăng ký tổ chức.

**Cấu trúc tối thiểu**

1. Header tối giản.
2. Hero gồm một thông điệp chính, một đoạn mô tả ngắn và tối đa hai CTA.
3. Khối vấn đề: dữ liệu phân tán, quy trình khó truy vết, nhân sự thay đổi theo nhiệm kỳ.
4. Khối giải pháp: tenant, membership, role, module và branding.
5. Khối mô-đun nổi bật.
6. Khối quy trình ba bước.
7. Khối bảo mật và cô lập dữ liệu.
8. CTA cuối trang.
9. Footer.

**CTA chính**

- `Bắt đầu với Operations Hub` → `/start`
- `Đăng nhập` → `/auth/login`

**Trạng thái**

- Khách chưa đăng nhập: hiển thị CTA đăng ký và đăng nhập.
- Người dùng đã đăng nhập nhưng chưa có membership: CTA tạo hoặc tham gia tổ chức.
- Người dùng đã có membership: CTA `Đi đến không gian làm việc`.

**Không được phép**

- Không hiển thị số liệu giả như số tổ chức, số thành viên hoặc tỷ lệ hiệu quả nếu chưa có dữ liệu kiểm chứng.
- Không dùng hình ảnh minh họa làm người dùng hiểu nhầm chức năng đã hoàn tất.

### PUB-002 — Tổng quan tính năng `/features`

Nhóm nội dung theo năng lực thay vì liệt kê 21 use case như một danh sách kỹ thuật:

- Nền tảng và tenant.
- Danh tính, membership và phân quyền.
- Cơ cấu tổ chức và branding.
- Thành viên và nhân sự.
- Quy trình, yêu cầu và phê duyệt.
- Tài chính, tài sản và hậu cần.
- Sự kiện, cuộc họp và chuyên cần.
- Đánh giá, kỷ luật và KPI.
- Tài liệu, thông báo và báo cáo.
- Nhật ký hoạt động và tích hợp.

Mỗi thẻ tính năng chỉ gồm icon, tiêu đề, mô tả tối đa ba dòng và liên kết `Xem chi tiết` khi trang chi tiết đã tồn tại.

### PUB-003 — Chi tiết mô-đun `/features/[module]`

**Dùng cho:** `tenant`, `auth`, `organization`, `members`, `requests`, `finance`, `assets`, `meetings`, `evaluations`, `documents`, `notifications`, `dashboard`, `audit`.

**Cấu trúc**

- Tên mô-đun và mục tiêu nghiệp vụ.
- Vấn đề được giải quyết.
- Năng lực chính.
- Actor sử dụng.
- Dữ liệu nhạy cảm liên quan.
- Điều kiện hoặc phụ thuộc mô-đun.
- Trạng thái: Available, Beta, Planned hoặc Deferred.

Không trình bày mô-đun Planned/Deferred như chức năng đang vận hành.

### PUB-004 — Cách hoạt động `/how-it-works`

Giải thích bằng một luồng duy nhất:

1. Tạo tài khoản nền tảng.
2. Tạo tổ chức mới hoặc chấp nhận lời mời.
3. Hình thành membership trong tenant.
4. Nhận vai trò và quyền.
5. Chọn tenant đang hoạt động.
6. Sử dụng các mô-đun được tenant bật.

Trang phải nêu rõ một User có thể thuộc nhiều tenant và giữ vai trò khác nhau trong từng tenant.

### PUB-005 và PUB-006 — Giải pháp theo tình huống

Các loại nội dung có thể gồm:

- Câu lạc bộ sinh viên.
- Đội dự án sinh viên.
- Ban tổ chức sự kiện.
- Nhóm học thuật hoặc nghiên cứu.

Đây là nội dung định vị sản phẩm, không được mã hóa các tên ban hoặc chức vụ riêng của MTEC thành cấu trúc bắt buộc.

### PUB-007 — Bảo mật `/security`

Nội dung tối thiểu:

- Cô lập dữ liệu theo tenant.
- Kiểm soát quyền dựa trên membership, role, permission và phạm vi đơn vị.
- Không xem frontend là ranh giới bảo mật.
- Quản lý phiên và thu hồi phiên.
- Nhật ký hành động nhạy cảm.
- Chính sách tệp tải lên.
- Báo cáo lỗ hổng bảo mật.
- Trạng thái và giới hạn của tài liệu công bố.

Không công bố chi tiết có thể hỗ trợ khai thác hệ thống như secret, sơ đồ mạng nội bộ, tên bảng nhạy cảm hoặc cấu hình triển khai thực tế.

### PUB-008 — Giới thiệu `/about`

Cấu trúc:

- Vấn đề thực tiễn.
- Mục tiêu sản phẩm.
- Nguyên tắc nền tảng dùng chung.
- MTEC là cấu hình tham chiếu, không phải tenant mặc định bắt buộc.
- Phạm vi đồ án và hướng phát triển.

### PUB-009 — Liên hệ `/contact`

Biểu mẫu tối thiểu:

- Họ tên.
- Email.
- Loại yêu cầu.
- Nội dung.
- Đồng ý chính sách bảo mật.

Trạng thái: idle, validating, submitting, success, rejected, rate-limited và service-unavailable.

Không yêu cầu người dùng gửi mật khẩu, token, mã OTP hoặc dữ liệu nội bộ qua biểu mẫu.

### PUB-010 — Trợ giúp `/help`

Nội dung công khai:

- Tạo tài khoản.
- Xác minh email.
- Đăng nhập và quên mật khẩu.
- Chấp nhận lời mời.
- Bắt đầu đăng ký tổ chức.
- Phân biệt tài khoản và membership.
- Cách báo cáo sự cố.

Nội dung quản trị nội bộ chi tiết chỉ hiển thị sau đăng nhập nếu người dùng có quyền.

### PUB-011 — Changelog `/changelog`

Mỗi bản phát hành gồm:

- Phiên bản hoặc ngày phát hành.
- Thay đổi nổi bật.
- Phạm vi ảnh hưởng.
- Breaking change nếu có.
- Trạng thái rollout.

Không công bố lỗi bảo mật chưa được xử lý.

### PUB-012 — Status `/status`

Hiển thị:

- Web application.
- API.
- Authentication.
- Notification/email.
- File storage.
- Integrations quan trọng.

Trạng thái: Operational, Degraded, Partial Outage, Major Outage, Maintenance.

### PUB-013 — Pricing `/pricing`

Trang này chỉ được triển khai khi có quyết định chính thức về:

- Gói dịch vụ.
- Giới hạn người dùng hoặc mô-đun.
- Thanh toán.
- Thuế và hóa đơn.
- Chính sách hoàn tiền.

Trong giai đoạn chưa chốt, route phải không tồn tại hoặc hiển thị `Chưa áp dụng`, không được đưa ra mức giá giả định.

---

## 5.2. Nhóm xác thực và khôi phục tài khoản

| ID | Route | Tên trang | Mức ưu tiên |
|---|---|---|---|
| PUB-101 | `/auth/login` | Đăng nhập | Must |
| PUB-102 | `/auth/register` | Đăng ký tài khoản | Must |
| PUB-103 | `/auth/verify-email` | Xác minh email | Must |
| PUB-104 | `/auth/resend-verification` | Gửi lại email xác minh | Should |
| PUB-105 | `/auth/forgot-password` | Quên mật khẩu | Must |
| PUB-106 | `/auth/reset-password` | Đặt lại mật khẩu | Must |
| PUB-107 | `/auth/callback` | Xử lý callback xác thực ngoài | Conditional |
| PUB-108 | `/auth/error` | Lỗi xác thực | Must |

### PUB-101 — Đăng nhập `/auth/login`

**Trường dữ liệu**

- Email hoặc định danh được hỗ trợ.
- Mật khẩu.
- Ghi nhớ phiên nếu chính sách cho phép.

**Hành động**

- Đăng nhập.
- Quên mật khẩu.
- Chuyển đến đăng ký.
- SSO/OAuth chỉ hiển thị nếu đã cấu hình.

**Trạng thái lỗi**

- Thông tin không hợp lệ.
- Tài khoản chưa xác minh.
- Tài khoản bị vô hiệu hóa.
- Quá nhiều lần thử.
- Dịch vụ tạm thời không khả dụng.

Thông báo lỗi không được tiết lộ quá mức rằng một email cụ thể có tồn tại hay không nếu điều đó tạo rủi ro dò tài khoản.

### PUB-102 — Đăng ký `/auth/register`

**Trường tối thiểu**

- Họ tên.
- Email.
- Mật khẩu.
- Xác nhận mật khẩu.
- Đồng ý điều khoản và chính sách bảo mật.

**Sau khi thành công**

- Chuyển sang trạng thái yêu cầu xác minh email.
- Không tự tạo membership hoặc tenant.
- Không tự gán vai trò.

### PUB-103 — Xác minh email `/auth/verify-email`

Các trạng thái bắt buộc:

- Đang kiểm tra token.
- Xác minh thành công.
- Token không hợp lệ.
- Token hết hạn.
- Token đã sử dụng.
- Tài khoản đã xác minh trước đó.
- Lỗi dịch vụ.

### PUB-104 — Gửi lại xác minh `/auth/resend-verification`

Trang luôn phản hồi theo cách hạn chế dò tài khoản. Cần có cooldown và rate limit được thể hiện rõ.

### PUB-105 — Quên mật khẩu `/auth/forgot-password`

Biểu mẫu chỉ yêu cầu email hoặc định danh được hỗ trợ. Sau khi gửi, phản hồi dạng trung tính:

> Nếu thông tin phù hợp với một tài khoản hợp lệ, hệ thống sẽ gửi hướng dẫn đặt lại mật khẩu.

### PUB-106 — Đặt lại mật khẩu `/auth/reset-password`

Trạng thái:

- Token hợp lệ và hiển thị form.
- Token hết hạn.
- Token đã dùng.
- Mật khẩu không đạt chính sách.
- Đặt lại thành công.
- Phiên cũ đã bị thu hồi hoặc cần đăng nhập lại.

### PUB-107 — Callback `/auth/callback`

Đây là trang chuyển tiếp kỹ thuật nhưng vẫn phải có UI:

- Spinner nhẹ và thông điệp `Đang hoàn tất đăng nhập`.
- Timeout rõ ràng.
- Nút quay lại đăng nhập khi callback thất bại.
- Không hiển thị access token, authorization code hoặc lỗi kỹ thuật nhạy cảm.

### PUB-108 — Lỗi xác thực `/auth/error`

Hiển thị mã lỗi thân thiện, mô tả ngắn, hành động phục hồi và mã tham chiếu hỗ trợ. Chi tiết kỹ thuật chỉ ghi ở log server.

---

## 5.3. Nhóm bắt đầu sử dụng và đăng ký tổ chức

| ID | Route | Tên trang | Mức ưu tiên |
|---|---|---|---|
| PUB-201 | `/start` | Bắt đầu | Must |
| PUB-202 | `/organizations/new` | Đăng ký tổ chức mới | Must |
| PUB-203 | `/organizations/new/success` | Gửi đăng ký thành công | Must |
| PUB-204 | `/organizations/new/pending` | Đăng ký đang chờ xử lý | Should |
| PUB-205 | `/organizations/new/rejected` | Đăng ký bị từ chối | Should |

### PUB-201 — Bắt đầu `/start`

Trang chỉ có hai lựa chọn chính:

1. `Tạo tổ chức mới`.
2. `Tôi có lời mời tham gia`.

Nếu chưa đăng nhập, hệ thống yêu cầu xác thực trước khi tạo dữ liệu. Sau đăng nhập phải quay lại đúng luồng người dùng đang thực hiện.

### PUB-202 — Đăng ký tổ chức `/organizations/new`

Có thể hiển thị public nhưng thao tác gửi yêu cầu bắt buộc có tài khoản đã xác thực.

**Các bước đề xuất**

1. Thông tin cơ bản.
2. Định danh và slug.
3. Thông tin liên hệ.
4. Mục đích sử dụng.
5. Xác nhận và gửi.

**Quy tắc UI**

- Kiểm tra slug đã chuẩn hóa.
- Không cho rằng người gửi đã là Owner trước khi tenant được tạo hoàn tất.
- Hiển thị rõ trạng thái yêu cầu: Pending, Active hoặc Rejected.
- Không để reload làm tạo yêu cầu trùng.

### PUB-203 — Thành công

Hiển thị mã tham chiếu, trạng thái hiện tại và bước tiếp theo. Không tuyên bố tenant đã hoạt động nếu mới chỉ ghi nhận yêu cầu.

### PUB-204 — Pending

Hiển thị:

- Trạng thái đang chờ.
- Thời điểm gửi.
- Thông tin liên hệ hỗ trợ.
- Nút quay về tài khoản.

### PUB-205 — Rejected

Hiển thị lý do ở mức được phép công bố, hướng dẫn bổ sung hoặc tạo yêu cầu mới. Không hiển thị ghi chú nội bộ của quản trị viên nền tảng.

---

## 5.4. Nhóm lời mời và token

| ID | Route | Tên trang | Mức ưu tiên |
|---|---|---|---|
| PUB-301 | `/invite/[token]` | Xem lời mời | Must |
| PUB-302 | `/invite/[token]/accepted` | Chấp nhận thành công | Must |
| PUB-303 | `/invite/[token]/declined` | Từ chối lời mời | Should |
| PUB-304 | `/invite/[token]/expired` | Lời mời hết hạn | Must |
| PUB-305 | `/invite/[token]/invalid` | Lời mời không hợp lệ | Must |

### PUB-301 — Lời mời

Hiển thị tối thiểu:

- Tên tổ chức.
- Logo tenant nếu hợp lệ.
- Người hoặc đơn vị gửi lời mời nếu chính sách cho phép.
- Vai trò dự kiến ở mức mô tả, không công bố toàn bộ ma trận quyền.
- Thời hạn lời mời.
- Hành động chấp nhận hoặc từ chối.

Nếu người nhận chưa có tài khoản, hệ thống dẫn tới đăng ký và quay lại token sau khi xác minh.

Không hiển thị dữ liệu thành viên khác hoặc dữ liệu nội bộ của tenant.

---

## 5.5. Nhóm trang public theo tenant — Conditional

Các trang này **không bật mặc định**. Tenant phải chủ động cho phép công khai và cấu hình nội dung.

| ID | Route | Tên trang | Mức ưu tiên |
|---|---|---|---|
| PUB-401 | `/org/[slug]` | Hồ sơ công khai tổ chức | Could |
| PUB-402 | `/org/[slug]/join` | Yêu cầu tham gia | Could |
| PUB-403 | `/org/[slug]/events/[eventSlug]` | Sự kiện công khai | Could |
| PUB-404 | `/org/[slug]/forms/[formSlug]` | Biểu mẫu công khai | Could |
| PUB-405 | custom domain | Trang công khai qua tên miền riêng | Deferred |

### PUB-401 — Hồ sơ công khai tổ chức

Nội dung cho phép:

- Tên hiển thị.
- Logo và ảnh bìa hợp lệ.
- Mô tả.
- Thông tin liên hệ công khai.
- Liên kết mạng xã hội được tenant cấu hình.
- Sự kiện hoặc thông báo đã đánh dấu public.

Nội dung cấm mặc định:

- Danh sách thành viên.
- Vai trò nội bộ.
- Email cá nhân.
- Tài chính.
- Tài sản.
- Hồ sơ kỷ luật.
- Đánh giá.
- Audit log.

### PUB-402 — Yêu cầu tham gia

Có hai chế độ:

- Chỉ dẫn tới đăng ký/đăng nhập để gửi yêu cầu.
- Biểu mẫu sơ bộ public, nhưng dữ liệu chỉ được xử lý sau khi người dùng xác minh danh tính.

Cần có chống spam, rate limit và thông báo về mục đích xử lý dữ liệu.

### PUB-403 — Sự kiện công khai

Chỉ hiển thị các trường được đánh dấu public:

- Tên sự kiện.
- Mô tả.
- Thời gian.
- Địa điểm công khai.
- Đơn vị tổ chức.
- Hình ảnh.
- Liên kết đăng ký.

Không hiển thị danh sách người tham dự, phân công nội bộ, tài liệu nội bộ hoặc ngân sách.

### PUB-404 — Biểu mẫu công khai

Phải hỗ trợ:

- Consent.
- CAPTCHA hoặc cơ chế chống spam.
- Giới hạn tệp.
- Thông báo dữ liệu được gửi tới tenant nào.
- Trang thành công.
- Trạng thái đóng, hết hạn hoặc đạt giới hạn.

### PUB-405 — Custom domain

Chỉ triển khai khi có quy trình xác minh DNS, cấp chứng chỉ, thu hồi domain và chống chiếm dụng. Custom domain không làm thay đổi tenant ownership hoặc quyền truy cập.

---

## 5.6. Nhóm pháp lý và khả năng tiếp cận

| ID | Route | Tên trang | Mức ưu tiên |
|---|---|---|---|
| PUB-501 | `/legal/terms` | Điều khoản sử dụng | Must |
| PUB-502 | `/legal/privacy` | Chính sách bảo mật | Must |
| PUB-503 | `/legal/cookies` | Chính sách cookie | Should |
| PUB-504 | `/legal/acceptable-use` | Chính sách sử dụng chấp nhận được | Should |
| PUB-505 | `/accessibility` | Cam kết khả năng tiếp cận | Should |

Mỗi trang pháp lý phải có:

- Ngày hiệu lực.
- Phiên bản.
- Phạm vi áp dụng.
- Lịch sử thay đổi hoặc liên kết tới bản trước nếu cần.
- Kênh liên hệ.

Nội dung pháp lý không được chèn vào ảnh; phải là văn bản có thể tìm kiếm, sao chép và đọc bằng screen reader.

---

## 5.7. Nhóm trạng thái hệ thống và trang lỗi

| ID | Route/HTTP | Tên trang | Hành động phục hồi |
|---|---|---|---|
| PUB-601 | `400` | Yêu cầu không hợp lệ | Quay lại hoặc kiểm tra dữ liệu |
| PUB-602 | `401` | Chưa đăng nhập | Đăng nhập |
| PUB-603 | `403` | Không có quyền | Đổi tài khoản hoặc quay lại |
| PUB-604 | `404` | Không tìm thấy | Về trang chủ hoặc tìm trợ giúp |
| PUB-605 | `409` | Xung đột trạng thái | Tải lại dữ liệu hoặc tiếp tục phiên hiện tại |
| PUB-606 | `410` | Nội dung không còn tồn tại | Về trang chủ |
| PUB-607 | `429` | Quá nhiều yêu cầu | Chờ và thử lại |
| PUB-608 | `500` | Lỗi hệ thống | Thử lại và dùng mã tham chiếu |
| PUB-609 | `503` | Dịch vụ tạm ngưng | Xem status hoặc thử lại sau |
| PUB-610 | `/maintenance` | Bảo trì | Xem thời gian dự kiến |
| PUB-611 | `/offline` | Mất kết nối | Thử kết nối lại |
| PUB-612 | `/unsupported-browser` | Trình duyệt không hỗ trợ | Cập nhật trình duyệt |

### Quy tắc chung cho trang lỗi

- Không dùng câu đổ lỗi cho người dùng.
- Không hiển thị stack trace, query, secret, token hoặc thông tin hạ tầng.
- Có mã tham chiếu hỗ trợ nếu lỗi được ghi log.
- Có một hành động chính; tối đa một hành động phụ.
- Giữ header tối giản; không hiển thị điều hướng có thể dẫn tới vòng lỗi.

---

# 6. Thành phần public dùng chung

Mặc dù không phải route riêng, các thành phần sau phải được đặc tả và kiểm thử như bề mặt public độc lập.

| ID | Thành phần | Yêu cầu |
|---|---|---|
| CMP-PUB-001 | Public header | Logo, điều hướng chính, đăng nhập, CTA; hỗ trợ mobile |
| CMP-PUB-002 | Footer | Liên kết pháp lý, trợ giúp, trạng thái, bản quyền |
| CMP-PUB-003 | Mobile navigation | Drawer đơn giản, focus trap, đóng bằng Escape |
| CMP-PUB-004 | Cookie consent | Chỉ hiện khi cần; phân loại cần thiết và tùy chọn |
| CMP-PUB-005 | Announcement bar | Chỉ dùng cho bảo trì hoặc thông báo quan trọng |
| CMP-PUB-006 | Toast | Thông báo ngắn, không dùng thay nội dung lỗi form |
| CMP-PUB-007 | Inline form error | Gắn trực tiếp với trường, có mô tả đọc được |
| CMP-PUB-008 | Loading indicator | Skeleton hoặc spinner nhỏ; không dùng animation gây nhiễu |
| CMP-PUB-009 | Empty state | Nêu nguyên nhân và hành động tiếp theo |
| CMP-PUB-010 | Confirmation dialog | Dùng cho từ chối lời mời hoặc bỏ dữ liệu form |
| CMP-PUB-011 | Language switcher | Chỉ hiển thị khi nội dung tương ứng đã dịch đầy đủ |
| CMP-PUB-012 | Theme control | Light/dark/system nếu sản phẩm hỗ trợ |
| CMP-PUB-013 | Skip link | Cho phép bỏ qua điều hướng và đến nội dung chính |
| CMP-PUB-014 | CAPTCHA/chống spam | Áp dụng cho biểu mẫu public có nguy cơ lạm dụng |
| CMP-PUB-015 | Tenant badge | Nêu rõ người dùng đang xem nội dung của tenant nào |

---

# 7. Phong cách UI: Minimalism

## 7.1. Định nghĩa áp dụng

Minimalism trong Operations Hub không có nghĩa là loại bỏ thông tin cần thiết. Phong cách này được hiểu là:

- Mỗi màn hình có một nhiệm vụ chính.
- Ít thành phần cạnh tranh sự chú ý.
- Phân cấp thị giác dựa trên typography, spacing và độ tương phản.
- Chỉ dùng màu cho hành động, trạng thái và branding có kiểm soát.
- Không trang trí nếu thành phần không hỗ trợ hiểu nội dung hoặc thao tác.

## 7.2. Nguyên tắc thị giác

1. **Một điểm nhấn chính trên mỗi viewport.**
2. **Tối đa hai CTA trong một section.**
3. **Không dùng gradient trang trí mặc định.**
4. **Không dùng glassmorphism, neon, hiệu ứng 3D hoặc shadow dày.**
5. **Không dùng carousel tự chạy.**
6. **Không dùng animation chỉ để trang trí.**
7. **Không đặt nội dung quan trọng trong hình ảnh.**
8. **Không để branding làm giảm độ tương phản.**

## 7.3. Hệ màu nền tảng

Màu nền tảng phải trung tính và đủ tương phản. Tenant có thể thay màu nhấn nhưng không được thay các semantic color.

```text
Background primary:   neutral-0 / neutral-950
Background secondary: neutral-50 / neutral-900
Surface:              neutral-0 / neutral-900
Text primary:         neutral-950 / neutral-50
Text secondary:       neutral-600 / neutral-400
Border:               neutral-200 / neutral-800
Focus ring:           platform accent
Success:              semantic green
Warning:              semantic amber
Danger:               semantic red
Info:                 semantic blue
```

**Ràng buộc branding**

- Màu tenant chỉ áp dụng cho CTA chính, link, focus accent, icon nhấn và một số bề mặt thương hiệu.
- Không cho phép tenant đổi màu Success, Warning, Danger hoặc Info.
- Hệ thống phải tự chọn foreground phù hợp với màu tenant.
- Nếu màu tenant không đạt tương phản, hệ thống dùng biến thể đã hiệu chỉnh hoặc màu mặc định nền tảng.

## 7.4. Typography

- Dùng một font sans-serif hỗ trợ đầy đủ tiếng Việt.
- Tối đa hai font family; mặc định chỉ dùng một.
- Nội dung dài có chiều rộng dòng khoảng 60–75 ký tự.
- Không dùng toàn bộ chữ hoa cho đoạn văn hoặc nút.
- Heading giảm theo thang rõ ràng, không nhảy cấp.

Thang đề xuất:

```text
Display: 48–64 px desktop, 36–44 px mobile
H1:      36–48 px desktop, 30–36 px mobile
H2:      28–36 px
H3:      22–28 px
Body:    16–18 px
Small:   14 px
Caption: 12–13 px, chỉ dùng cho metadata
```

## 7.5. Spacing và layout

- Cơ sở spacing: 4 px.
- Khoảng cách nội dung dùng các mức 4, 8, 12, 16, 24, 32, 48, 64, 96 px.
- Container public tối đa khoảng 1200 px.
- Container đọc văn bản tối đa khoảng 720–760 px.
- Section desktop cách nhau 80–120 px; mobile 48–72 px.
- Không dùng card cho mọi nội dung. Chỉ dùng card khi cần nhóm một đối tượng độc lập.

## 7.6. Border, radius và shadow

- Border mặc định: 1 px.
- Radius: 8–12 px cho control và card; không dùng bo tròn cực lớn trên mọi thành phần.
- Shadow: nhẹ, chỉ dùng để phân lớp modal, dropdown hoặc phần tử nổi.
- Ưu tiên border và khoảng trắng hơn shadow.

## 7.7. Button

Các biến thể:

- Primary.
- Secondary.
- Ghost.
- Destructive.
- Link.

Quy tắc:

- Chiều cao tối thiểu 40 px; touch target tối thiểu 44 × 44 px.
- Một vùng chỉ có một Primary button.
- Không dùng icon nếu icon không làm rõ hành động.
- Trạng thái loading giữ nguyên chiều rộng nút để tránh layout shift.

## 7.8. Form

- Label luôn hiển thị; placeholder không thay label.
- Mô tả và lỗi đặt gần trường liên quan.
- Trường bắt buộc được nêu rõ bằng văn bản hoặc ký hiệu có giải thích.
- Không vô hiệu hóa nút gửi mà không cho biết điều kiện còn thiếu.
- Form dài chia bước; cho phép quay lại mà không mất dữ liệu hợp lệ.
- Password requirements hiển thị trước khi submit.

## 7.9. Icon và hình ảnh

- Dùng một bộ icon outline nhất quán.
- Icon chức năng có kích thước 16–24 px.
- Không dùng emoji làm icon nghiệp vụ chính.
- Ảnh minh họa chỉ dùng khi hỗ trợ giải thích sản phẩm.
- Mockup phải phản ánh đúng chức năng hiện có hoặc ghi rõ trạng thái concept.

## 7.10. Motion

- Transition thông thường 120–200 ms.
- Chỉ animate opacity, transform nhẹ hoặc expansion có mục đích.
- Tôn trọng `prefers-reduced-motion`.
- Không dùng parallax, background motion hoặc autoplay video mặc định.

---

# 8. Responsive behavior

## Mobile

- Điều hướng chuyển thành drawer.
- Hero xếp dọc.
- CTA full-width khi cần.
- Bảng dữ liệu public chuyển thành danh sách hoặc card; không ép cuộn ngang nếu có thể tái cấu trúc.
- Form một cột.

## Tablet

- Grid 2 cột cho thẻ tính năng.
- Header giữ điều hướng rút gọn.

## Desktop

- Grid 3–4 cột khi nội dung đủ ngắn.
- Nội dung đọc vẫn giới hạn chiều rộng.
- Không kéo giãn form theo toàn bộ màn hình.

Không dùng breakpoint như bằng chứng thiết bị. Thiết kế phải dựa trên không gian hiển thị thực tế.

---

# 9. Accessibility baseline

1. Điều hướng hoàn toàn bằng bàn phím.
2. Focus state luôn nhìn thấy.
3. Thứ tự focus theo logic nội dung.
4. Mọi input có label liên kết.
5. Lỗi form được công bố cho assistive technology.
6. Modal có focus trap và trả focus đúng vị trí sau khi đóng.
7. Ảnh có alt phù hợp; ảnh trang trí dùng alt rỗng.
8. Contrast văn bản và control đáp ứng chuẩn accessibility được dự án chấp nhận.
9. Không dùng màu làm tín hiệu duy nhất.
10. Heading theo thứ tự H1 → H2 → H3.
11. Có skip link đến nội dung chính.
12. Toast quan trọng dùng vùng live phù hợp.
13. Captcha phải có phương án tiếp cận thay thế.

---

# 10. SEO và metadata

Áp dụng cho trang public tuyệt đối và trang tenant-public:

- Mỗi trang có title và description riêng.
- Chỉ có một H1.
- Canonical URL rõ ràng.
- Open Graph cho trang chủ, trang giới thiệu và tenant-public.
- `robots` chặn index các trang token, reset password, callback và lỗi xác thực.
- Không đưa token hoặc dữ liệu nhạy cảm vào analytics, referrer hoặc metadata.
- Sitemap chỉ chứa trang public ổn định.
- Trang tenant-public bị tắt phải trả 404 hoặc 410 phù hợp, không rò rỉ trạng thái nội bộ.

---

# 11. Analytics và quyền riêng tư

Sự kiện tối thiểu có thể ghi nhận:

- Xem trang public.
- Chọn CTA.
- Bắt đầu đăng ký.
- Hoàn tất đăng ký.
- Bắt đầu đăng ký tổ chức.
- Gửi biểu mẫu liên hệ.

Không ghi:

- Mật khẩu.
- Token.
- Nội dung form nhạy cảm.
- Email dạng raw nếu không có cơ sở xử lý phù hợp.
- Dữ liệu tenant nội bộ.

Analytics tùy chọn phải tuân theo consent và chính sách cookie.

---

# 12. Trạng thái dữ liệu bắt buộc cho mọi trang

Mỗi trang có dữ liệu động phải mô tả và kiểm thử ít nhất các trạng thái sau:

1. Initial.
2. Loading.
3. Loaded.
4. Empty.
5. Validation error.
6. Authorization error.
7. Not found.
8. Conflict.
9. Rate limited.
10. Server error.
11. Offline.
12. Retry success.

Trang token bổ sung:

- Missing token.
- Invalid token.
- Expired token.
- Revoked token.
- Used token.

---

# 13. Quy tắc chuyển hướng

| Điều kiện | Hành vi |
|---|---|
| Khách mở trang nội bộ | Chuyển tới login và lưu `returnTo` hợp lệ |
| Người đã đăng nhập mở login | Chuyển tới tenant picker hoặc workspace phù hợp |
| Người chưa có membership sau login | Chuyển tới `/start` hoặc danh sách lời mời |
| Người có một tenant hoạt động | Có thể chuyển thẳng tới workspace tenant đó |
| Người có nhiều tenant | Chuyển tới tenant picker |
| Tenant bị suspended | Hiển thị trang trạng thái; không vào nghiệp vụ |
| Token hết hạn | Hiển thị trang expired, không tự thử lại vô hạn |
| `returnTo` trỏ domain ngoài | Từ chối để tránh open redirect |

---

# 14. Tiêu chí chấp nhận chung

## Chức năng

- Mọi route trong nhóm Must có page, metadata và trạng thái lỗi tương ứng.
- Không có route public nào truy xuất dữ liệu nội bộ nếu không có quyền.
- Các trang token xử lý đầy đủ expired, invalid, used và revoked.
- Hệ thống không tạo membership hoặc role chỉ vì người dùng đăng ký tài khoản.
- Tenant branding không ảnh hưởng semantic status hoặc quyền.

## UI

- Mỗi màn hình có một hành động chính rõ ràng.
- Không dùng gradient, glassmorphism hoặc shadow nặng làm phong cách mặc định.
- Khoảng trắng, typography và border là công cụ phân cấp chính.
- Responsive không gây overflow ngoài ý muốn.
- Loading không gây layout shift lớn.

## Accessibility

- Tất cả hành động public sử dụng được bằng bàn phím.
- Form có label, error message và focus management đúng.
- Focus ring không bị branding che khuất.
- Nội dung pháp lý đọc được bằng screen reader.

## Security

- Không hiển thị token, stack trace hoặc secret.
- Không cho phép open redirect.
- Form public có rate limit và chống spam phù hợp.
- Trang tenant-public chỉ hoạt động khi tenant bật public visibility.

---

# 15. Mức ưu tiên triển khai

## Giai đoạn 1 — Baseline bắt buộc

- `/`
- `/auth/login`
- `/auth/register`
- `/auth/verify-email`
- `/auth/forgot-password`
- `/auth/reset-password`
- `/auth/error`
- `/start`
- `/organizations/new`
- Các trang trạng thái đăng ký tổ chức.
- `/invite/[token]` và trạng thái token.
- `/legal/terms`
- `/legal/privacy`
- 401, 403, 404, 429, 500, 503.
- Public header, footer, form error, loading và accessibility baseline.

## Giai đoạn 2 — Nội dung sản phẩm

- `/features`
- `/how-it-works`
- `/security`
- `/about`
- `/help`
- `/contact`
- Cookie policy, acceptable use và accessibility statement.

## Giai đoạn 3 — Public tenant surfaces

- `/org/[slug]`
- `/org/[slug]/join`
- Public event.
- Public form.

Chỉ triển khai sau khi có visibility policy, moderation, consent, rate limit và kiểm thử cô lập tenant.

## Giai đoạn 4 — Mở rộng

- Changelog.
- Status page tích hợp.
- Custom domain.
- Pricing và billing sau khi mô hình thương mại được phê duyệt.

---

# 16. Điểm chưa được phép giả định

Các nội dung sau chưa được coi là quyết định chính thức chỉ vì xuất hiện trong tài liệu thiết kế này:

- Operations Hub có thu phí hay không.
- Có public directory liệt kê toàn bộ tenant hay không.
- Có cho phép custom domain hay không.
- Có dùng OAuth/SSO provider nào hay không.
- Có công khai sự kiện hoặc biểu mẫu tenant hay không.
- Có hỗ trợ song ngữ ngay trong baseline hay không.

Mỗi nội dung trên cần quyết định sản phẩm, yêu cầu bảo mật, mô hình dữ liệu và tiêu chí nghiệm thu riêng trước khi hiện thực.

---

# 17. Ghi chú triển khai hiện tại

Ứng dụng web hiện dùng Next.js. Route gốc hiện tại chuyển trực tiếp tới `/dashboard`; khi bắt đầu triển khai public website, route `/` phải trở thành landing page và việc chuyển người dùng đã xác thực vào workspace phải được xử lý có điều kiện thay vì redirect toàn bộ khách truy cập.
