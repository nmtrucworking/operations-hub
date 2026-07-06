export const featureGroups = [
  {
    slug: "tenant",
    title: "Nền tảng và tenant",
    description: "Tách biệt dữ liệu, cấu hình và vòng đời vận hành của từng tổ chức trên cùng nền tảng.",
    status: "Available"
  },
  {
    slug: "auth",
    title: "Danh tính, membership và phân quyền",
    description: "Quản lý tài khoản nền tảng, membership theo tenant, vai trò và permission theo phạm vi.",
    status: "Available"
  },
  {
    slug: "organization",
    title: "Cơ cấu tổ chức và branding",
    description: "Mô tả đơn vị, nhận diện thương hiệu và cấu hình tổ chức mà không làm đổi logic quyền.",
    status: "Beta"
  },
  {
    slug: "members",
    title: "Thành viên và nhân sự",
    description: "Theo dõi hồ sơ thành viên, trạng thái tham gia và thay đổi nhân sự theo nhiệm kỳ.",
    status: "Available"
  },
  {
    slug: "requests",
    title: "Quy trình, yêu cầu và phê duyệt",
    description: "Ghi nhận yêu cầu, trạng thái xử lý, người phụ trách và lịch sử phê duyệt.",
    status: "Available"
  },
  {
    slug: "finance",
    title: "Tài chính, tài sản và hậu cần",
    description: "Quản lý giao dịch, tài khoản và tài nguyên vận hành trong phạm vi tenant được cấp quyền.",
    status: "Available"
  },
  {
    slug: "meetings",
    title: "Sự kiện, cuộc họp và chuyên cần",
    description: "Lập lịch, điều phối sự kiện và ghi nhận chuyên cần khi module được bật cho tenant.",
    status: "Planned"
  },
  {
    slug: "evaluations",
    title: "Đánh giá, kỷ luật và KPI",
    description: "Chuẩn hóa đánh giá vận hành và quy trình ghi nhận kỷ luật theo chính sách tổ chức.",
    status: "Planned"
  },
  {
    slug: "documents",
    title: "Tài liệu, thông báo và báo cáo",
    description: "Tổ chức tài liệu, thông báo và báo cáo có kiểm soát truy cập theo vai trò.",
    status: "Planned"
  },
  {
    slug: "audit",
    title: "Nhật ký hoạt động và tích hợp",
    description: "Lưu dấu hành động nhạy cảm, hỗ trợ truy vết và kết nối dịch vụ đã được phê duyệt.",
    status: "Available"
  }
] as const;

export const moduleDetails: Record<
  string,
  {
    title: string;
    goal: string;
    problem: string;
    capabilities: string[];
    actors: string;
    sensitiveData: string;
    dependencies: string;
    status: "Available" | "Beta" | "Planned" | "Deferred";
  }
> = {
  tenant: {
    title: "Tenant",
    goal: "Cô lập dữ liệu và cấu hình vận hành cho từng tổ chức.",
    problem: "Nhiều tổ chức có quy trình riêng nhưng không được lẫn dữ liệu hoặc quyền truy cập.",
    capabilities: ["Tạo ngữ cảnh tenant rõ ràng.", "Theo dõi trạng thái tenant.", "Ràng buộc module theo tenant."],
    actors: "Platform admin, người dùng có membership hợp lệ.",
    sensitiveData: "Cấu hình tenant, brand color, trạng thái hoạt động.",
    dependencies: "Cần xác thực tài khoản và membership khi vào vùng nghiệp vụ.",
    status: "Available"
  },
  auth: {
    title: "Auth",
    goal: "Xác thực tài khoản nền tảng mà không tự tạo membership hoặc role.",
    problem: "Đăng nhập thành công thường bị hiểu nhầm là đã có quyền trong một tổ chức.",
    capabilities: ["Đăng ký tài khoản.", "Đăng nhập và chọn tenant.", "Quản lý phiên và refresh token."],
    actors: "Guest, platform user.",
    sensitiveData: "Email, password hash, refresh token hash, session metadata.",
    dependencies: "Cần backend auth và chính sách session.",
    status: "Available"
  },
  organization: {
    title: "Organization",
    goal: "Mô tả cơ cấu và thông tin nhận diện của tổ chức.",
    problem: "Tổ chức cần cấu trúc vận hành riêng nhưng không nên hard-code theo một đơn vị tham chiếu.",
    capabilities: ["Quản lý đơn vị.", "Cấu hình branding.", "Chuẩn bị luồng đăng ký tổ chức mới."],
    actors: "Org registrant, tenant admin.",
    sensitiveData: "Thông tin liên hệ tổ chức, slug, trạng thái xét duyệt.",
    dependencies: "Cần quy trình duyệt tenant trước khi kích hoạt.",
    status: "Beta"
  },
  members: {
    title: "Members",
    goal: "Quản lý membership và hồ sơ thành viên trong tenant.",
    problem: "Nhân sự thay đổi theo nhiệm kỳ, cần truy vết trạng thái và phạm vi tham gia.",
    capabilities: ["Danh sách thành viên.", "Tạo membership cho user hợp lệ.", "Cập nhật hồ sơ thành viên."],
    actors: "Tenant admin, HR hoặc người có quyền quản lý thành viên.",
    sensitiveData: "Email, hồ sơ thành viên, đơn vị, trạng thái membership.",
    dependencies: "Cần tenant context và permission phù hợp.",
    status: "Available"
  },
  requests: {
    title: "Requests",
    goal: "Chuẩn hóa yêu cầu vận hành và phê duyệt.",
    problem: "Yêu cầu phân tán qua chat hoặc biểu mẫu rời làm khó truy vết trách nhiệm.",
    capabilities: ["Tạo yêu cầu.", "Theo dõi trạng thái.", "Lưu lịch sử thay đổi."],
    actors: "Thành viên tenant, người phê duyệt.",
    sensitiveData: "Nội dung yêu cầu, người tạo, trạng thái xử lý.",
    dependencies: "Cần module request được bật và permission tương ứng.",
    status: "Available"
  },
  finance: {
    title: "Finance",
    goal: "Ghi nhận giao dịch và tài khoản tài chính theo tenant.",
    problem: "Dòng tiền cần minh bạch nhưng vẫn là dữ liệu nội bộ nhạy cảm.",
    capabilities: ["Quản lý tài khoản.", "Ghi nhận giao dịch.", "Audit thay đổi tài chính."],
    actors: "Treasurer, tenant admin, người có quyền tài chính.",
    sensitiveData: "Số tiền, tài khoản, mô tả giao dịch, lịch sử chỉnh sửa.",
    dependencies: "Cần permission tài chính và tenant context.",
    status: "Available"
  },
  assets: {
    title: "Assets",
    goal: "Theo dõi tài sản và hậu cần của tổ chức.",
    problem: "Tài sản dễ thất lạc khi bàn giao giữa các nhiệm kỳ.",
    capabilities: ["Danh mục tài sản.", "Tình trạng sử dụng.", "Lịch sử bàn giao."],
    actors: "Logistics, tenant admin.",
    sensitiveData: "Thông tin tài sản, vị trí lưu trữ, người phụ trách.",
    dependencies: "Cần mô hình tài sản và quy trình bàn giao.",
    status: "Planned"
  },
  meetings: {
    title: "Meetings",
    goal: "Điều phối cuộc họp, sự kiện và chuyên cần.",
    problem: "Lịch họp và điểm danh thường rời rạc, khó liên kết với hoạt động vận hành.",
    capabilities: ["Lịch cuộc họp.", "Biên bản.", "Chuyên cần."],
    actors: "Organizer, member.",
    sensitiveData: "Lịch nội bộ, người tham dự, biên bản.",
    dependencies: "Cần chính sách visibility trước khi public event.",
    status: "Planned"
  },
  evaluations: {
    title: "Evaluations",
    goal: "Hỗ trợ đánh giá, kỷ luật và KPI.",
    problem: "Đánh giá thiếu chuẩn hóa dễ tạo tranh chấp và mất lịch sử.",
    capabilities: ["Kỳ đánh giá.", "Tiêu chí KPI.", "Quy trình kỷ luật."],
    actors: "Manager, evaluator, member.",
    sensitiveData: "Điểm đánh giá, ghi chú kỷ luật, phản hồi cá nhân.",
    dependencies: "Cần chính sách dữ liệu nhạy cảm và quyền xem chi tiết.",
    status: "Planned"
  },
  documents: {
    title: "Documents",
    goal: "Quản lý tài liệu và thông báo có kiểm soát.",
    problem: "Tài liệu nội bộ cần phân quyền rõ, không được public mặc định.",
    capabilities: ["Kho tài liệu.", "Thông báo.", "Báo cáo."],
    actors: "Document owner, member.",
    sensitiveData: "Tệp nội bộ, thông báo giới hạn, báo cáo vận hành.",
    dependencies: "Cần storage policy, antivirus hoặc kiểm soát tệp tải lên.",
    status: "Planned"
  },
  notifications: {
    title: "Notifications",
    goal: "Gửi thông báo đúng người, đúng ngữ cảnh tenant.",
    problem: "Thông báo nhầm tenant hoặc nhầm vai trò có thể làm lộ dữ liệu.",
    capabilities: ["Kênh email.", "Thông báo trong app.", "Mẫu thông báo theo sự kiện."],
    actors: "System, member.",
    sensitiveData: "Email, nội dung thông báo, metadata gửi.",
    dependencies: "Cần consent và cấu hình email.",
    status: "Planned"
  },
  dashboard: {
    title: "Dashboard",
    goal: "Tóm tắt vận hành theo quyền của người dùng trong tenant đang chọn.",
    problem: "Người dùng cần bức tranh chung nhưng không được vượt quyền dữ liệu.",
    capabilities: ["Chỉ số tổng quan.", "Module card.", "Cảnh báo vận hành."],
    actors: "Platform user có membership.",
    sensitiveData: "Metric nội bộ, số liệu tenant.",
    dependencies: "Cần tenant context, permission và dữ liệu đã được tổng hợp.",
    status: "Available"
  },
  audit: {
    title: "Audit",
    goal: "Truy vết hành động nhạy cảm trong tenant.",
    problem: "Các thay đổi quyền, tài chính và thành viên cần có lịch sử phục vụ kiểm tra.",
    capabilities: ["Audit log.", "Mã tương quan.", "Bộ lọc theo thời gian."],
    actors: "Tenant admin, auditor.",
    sensitiveData: "Actor, hành động, entity, metadata thay đổi.",
    dependencies: "Cần chính sách lưu trữ và quyền xem audit.",
    status: "Available"
  }
};

export const solutionTypes = [
  {
    slug: "student-club",
    title: "Câu lạc bộ sinh viên",
    description: "Quản lý thành viên, nhiệm kỳ, yêu cầu nội bộ và báo cáo hoạt động mà không phụ thuộc một cơ cấu cố định."
  },
  {
    slug: "project-team",
    title: "Đội dự án sinh viên",
    description: "Theo dõi nhiệm vụ vận hành, tài liệu, tài chính nhỏ và lịch họp theo từng tenant dự án."
  },
  {
    slug: "event-committee",
    title: "Ban tổ chức sự kiện",
    description: "Điều phối yêu cầu, hậu cần, ngân sách và phân quyền cho các nhóm tổ chức sự kiện."
  },
  {
    slug: "research-group",
    title: "Nhóm học thuật hoặc nghiên cứu",
    description: "Lưu giữ tài liệu, vai trò, lịch làm việc và báo cáo tiến độ trong phạm vi nhóm."
  }
] as const;
