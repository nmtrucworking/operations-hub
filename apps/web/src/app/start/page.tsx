import type { Metadata } from "next";
import { Mail, PlusCircle } from "lucide-react";
import { PublicShell } from "@/components/public/public-shell";
import { LinkButton } from "@/components/public/link-button";
import { Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Bắt đầu",
  description: "Chọn tạo tổ chức mới hoặc tiếp tục bằng lời mời tham gia tenant."
};

export default function StartPage() {
  return (
    <PublicShell>
      <TextPageHeader
        eyebrow="Bắt đầu sử dụng"
        title="Chọn đúng luồng trước khi tạo dữ liệu"
        description="Operations Hub không tự suy đoán tenant. Bạn có thể tạo yêu cầu tổ chức mới hoặc dùng lời mời đã nhận."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6">
            <PlusCircle className="h-6 w-6 text-blue-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold">Tạo tổ chức mới</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Bắt đầu quy trình đăng ký tenant mới. Thao tác gửi yêu cầu cần tài khoản đã xác thực.
            </p>
            <LinkButton className="mt-6" href="/organizations/new">
              Tạo tổ chức mới
            </LinkButton>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6">
            <Mail className="h-6 w-6 text-blue-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold">Tôi có lời mời tham gia</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Mở đường dẫn lời mời được gửi cho bạn. Token chỉ cấp quyền thực hiện đúng hành động tham gia.
            </p>
            <LinkButton className="mt-6" href="/help" variant="secondary">
              Xem hướng dẫn lời mời
            </LinkButton>
          </article>
        </div>
      </Section>
    </PublicShell>
  );
}
