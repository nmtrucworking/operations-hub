import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicShell } from "@/components/public/public-shell";
import { DefinitionRows, Section, TextPageHeader } from "@/components/public/page-sections";

const legalPages: Record<string, { title: string; description: string; points: string[] }> = {
  terms: {
    title: "Điều khoản sử dụng",
    description: "Quy định sử dụng Operations Hub ở bề mặt public và workspace tenant.",
    points: [
      "Người dùng chịu trách nhiệm bảo vệ thông tin đăng nhập của mình.",
      "Tài khoản nền tảng không tự tạo quyền trong bất kỳ tenant nào.",
      "Tenant chịu trách nhiệm cấu hình visibility trước khi công bố nội dung."
    ]
  },
  privacy: {
    title: "Chính sách bảo mật",
    description: "Cách Operations Hub xử lý dữ liệu cá nhân và dữ liệu tenant ở mức nguyên tắc.",
    points: [
      "Không thu thập mật khẩu, token hoặc mã OTP qua biểu mẫu public.",
      "Dữ liệu tenant nội bộ chỉ được xử lý khi có quyền và ngữ cảnh hợp lệ.",
      "Analytics tùy chọn phải tuân theo consent và không ghi dữ liệu nhạy cảm."
    ]
  },
  cookies: {
    title: "Chính sách cookie",
    description: "Phân loại cookie cần thiết và tùy chọn cho giao diện public.",
    points: [
      "Cookie hoặc storage cần thiết dùng cho phiên và bảo mật.",
      "Cookie tùy chọn chỉ bật khi có consent phù hợp.",
      "Người dùng có thể thay đổi lựa chọn consent khi tính năng được bật."
    ]
  },
  "acceptable-use": {
    title: "Chính sách sử dụng chấp nhận được",
    description: "Giới hạn hành vi để bảo vệ nền tảng, tenant và người dùng.",
    points: [
      "Không lạm dụng biểu mẫu public hoặc cố tình dò tài khoản.",
      "Không tải lên hoặc chia sẻ nội dung vi phạm pháp luật, quyền riêng tư hoặc an toàn hệ thống.",
      "Không dùng public tenant surfaces để công bố dữ liệu nội bộ chưa được phép."
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug];
  return {
    title: page?.title ?? "Pháp lý",
    description: page?.description
  };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) notFound();

  return (
    <PublicShell>
      <TextPageHeader eyebrow="Pháp lý" title={page.title} description={page.description} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          <DefinitionRows
            rows={[
              { label: "Ngày hiệu lực", value: "2026-07-06" },
              { label: "Phiên bản", value: "Public baseline 1.0" },
              { label: "Phạm vi áp dụng", value: "Bề mặt public và các luồng xác thực trước workspace." },
              { label: "Kênh liên hệ", value: "Trang /contact." }
            ]}
          />
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold">Nội dung chính</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
              {page.points.map((point) => (
                <li className="border-l-2 border-blue-700 pl-4" key={point}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </PublicShell>
  );
}
