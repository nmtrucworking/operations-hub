import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { LinkButton } from "@/components/public/link-button";
import { Section, TextPageHeader } from "@/components/public/page-sections";
import { solutionTypes } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Giải pháp",
  description: "Các tình huống sử dụng Operations Hub cho tổ chức sinh viên."
};

export default function SolutionsPage() {
  return (
    <PublicShell>
      <TextPageHeader eyebrow="Giải pháp" title="Tình huống sử dụng phổ biến" description="Nội dung định vị sản phẩm, không hard-code tên ban hoặc chức vụ riêng của một tenant tham chiếu." />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {solutionTypes.map((solution) => (
            <article className="rounded-lg border border-slate-200 bg-white p-5" key={solution.slug}>
              <h2 className="text-xl font-semibold">{solution.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{solution.description}</p>
              <LinkButton className="mt-4" href={`/solutions/${solution.slug}`} variant="link">
                Xem chi tiết
              </LinkButton>
            </article>
          ))}
        </div>
      </Section>
    </PublicShell>
  );
}
