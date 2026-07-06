import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Nhật ký thay đổi public của Operations Hub."
};

export default function ChangelogPage() {
  return (
    <PublicShell>
      <TextPageHeader eyebrow="Changelog" title="Nhật ký phiên bản public" description="Chỉ công bố thay đổi đã được phép chia sẻ. Lỗi bảo mật chưa xử lý không xuất hiện tại đây." />
      <Section>
        <article className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-blue-700">2026-07-06</p>
          <h2 className="mt-3 text-xl font-semibold">Public pages baseline</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Bổ sung landing page, auth public surfaces, start flow, legal pages, status pages và nội dung sản phẩm tối giản.</p>
          <p className="mt-3 text-sm text-slate-500">Phạm vi ảnh hưởng: web public UI. Breaking change: route gốc không còn redirect thẳng vào dashboard.</p>
        </article>
      </Section>
    </PublicShell>
  );
}
