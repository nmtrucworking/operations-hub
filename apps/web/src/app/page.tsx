import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Layers3, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";
import { PublicShell } from "@/components/public/public-shell";
import { LinkButton } from "@/components/public/link-button";
import { PublicContainer, Section, SimpleCard } from "@/components/public/page-sections";
import { featureGroups } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Nền tảng vận hành cho tổ chức sinh viên",
  description: "Operations Hub giúp tổ chức sinh viên quản lý tenant, membership, vai trò, module và quy trình vận hành."
};

const problems = [
  {
    title: "Dữ liệu phân tán",
    description: "Thông tin thành viên, yêu cầu, tài chính và tài liệu thường nằm ở nhiều công cụ rời rạc."
  },
  {
    title: "Quy trình khó truy vết",
    description: "Khi thiếu trạng thái và lịch sử hành động, việc bàn giao hoặc kiểm tra lại mất nhiều thời gian."
  },
  {
    title: "Nhân sự thay đổi theo nhiệm kỳ",
    description: "Vai trò, quyền và trách nhiệm cần thay đổi có kiểm soát mà không làm mất ngữ cảnh cũ."
  }
];

const principles = [
  "Tenant tách biệt dữ liệu và cấu hình từng tổ chức.",
  "Membership xác định một người dùng thuộc tenant nào.",
  "Role và permission quyết định hành động được phép.",
  "Module chỉ hoạt động khi tenant bật và người dùng có quyền.",
  "Branding giúp nhận diện, không thay đổi logic bảo mật."
];

export default function HomePage() {
  return (
    <PublicShell>
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <PublicContainer className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-blue-700">Nền tảng dùng chung, không gắn cứng với một tenant</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-6xl">
              Vận hành tổ chức sinh viên rõ ràng hơn.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Operations Hub giúp tách bạch tài khoản, tổ chức, membership, vai trò và module để mỗi tenant vận hành
              theo cấu hình riêng mà không lộ dữ liệu nội bộ.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/start">
                Bắt đầu với Operations Hub
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/auth/login" variant="secondary">
                Đăng nhập
              </LinkButton>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="rounded-md border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-medium text-slate-950">Tenant workspace</p>
                  <p className="text-xs text-slate-500">Concept UI, không phải số liệu thật</p>
                </div>
                <ShieldCheck className="h-5 w-5 text-blue-700" aria-hidden="true" />
              </div>
              <div className="mt-5 grid gap-3">
                {["Membership", "Role & permission", "Enabled modules"].map((item) => (
                  <div className="flex items-center justify-between rounded-md border border-slate-200 px-4 py-3" key={item}>
                    <span className="text-sm text-slate-700">{item}</span>
                    <CheckCircle2 className="h-4 w-4 text-green-700" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PublicContainer>
      </section>

      <Section title="Vấn đề cần giải quyết" description="Public pages chỉ mô tả năng lực nền tảng, không công bố dữ liệu tenant hoặc số liệu chưa được kiểm chứng.">
        <div className="grid gap-4 md:grid-cols-3">
          {problems.map((item) => (
            <SimpleCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50" title="Cách Operations Hub tiếp cận" description="Nền tảng coi tài khoản và membership là hai khái niệm riêng, còn quyền truy cập luôn gắn với tenant context rõ ràng.">
        <div className="grid gap-4 md:grid-cols-5">
          {principles.map((item, index) => (
            <article className="rounded-lg border border-slate-200 bg-white p-5" key={item}>
              <div className="text-sm font-semibold text-blue-700">0{index + 1}</div>
              <p className="mt-4 text-sm leading-6 text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Mô-đun nổi bật" description="Các nhóm năng lực được trình bày theo nhu cầu vận hành thay vì liệt kê kỹ thuật.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureGroups.slice(0, 6).map((item) => (
            <article className="rounded-lg border border-slate-200 bg-white p-5" key={item.slug}>
              <Layers3 className="h-5 w-5 text-blue-700" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              <LinkButton className="mt-4" href={`/features/${item.slug}`} variant="link">
                Xem chi tiết
              </LinkButton>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50" title="Ba bước bắt đầu" description="Luồng public dẫn người dùng vào đúng ngữ cảnh mà không tự suy đoán tenant.">
        <div className="grid gap-4 md:grid-cols-3">
          <SimpleCard meta="Bước 1" title="Tạo tài khoản" description="Tài khoản là danh tính nền tảng, chưa đồng nghĩa với quyền trong tổ chức." />
          <SimpleCard meta="Bước 2" title="Tạo hoặc tham gia tổ chức" description="Người dùng có thể đăng ký tổ chức mới hoặc chấp nhận lời mời có token hợp lệ." />
          <SimpleCard meta="Bước 3" title="Vào workspace" description="Sau khi có membership, vai trò và module được bật sẽ quyết định phạm vi sử dụng." />
        </div>
      </Section>

      <Section title="Bảo mật theo tenant" description="Frontend không được xem là ranh giới bảo mật. Các trang public chỉ giải thích nguyên tắc; kiểm soát thật phải nằm ở backend.">
        <div className="grid gap-4 md:grid-cols-3">
          <SimpleCard title="Cô lập dữ liệu" description="Mỗi yêu cầu nghiệp vụ cần tenant context hợp lệ trước khi truy xuất dữ liệu nội bộ." />
          <SimpleCard title="Quyền theo membership" description="Role và permission được xét trong phạm vi tenant, không áp dụng toàn cục cho mọi tổ chức." />
          <SimpleCard title="Nhật ký hành động" description="Các thao tác nhạy cảm cần có audit log và mã tương quan phục vụ truy vết." />
        </div>
      </Section>

      <section className="border-t border-slate-200 bg-slate-950 py-14 text-white">
        <PublicContainer className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal">Sẵn sàng chọn luồng bắt đầu?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Tạo tổ chức mới hoặc quay lại đăng nhập nếu bạn đã có membership trong tenant.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/start">Bắt đầu</LinkButton>
            <LinkButton href="/auth/login" variant="secondary">
              Đăng nhập
            </LinkButton>
          </div>
        </PublicContainer>
      </section>
    </PublicShell>
  );
}
