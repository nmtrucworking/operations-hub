import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicShell } from "@/components/public/public-shell";
import { Section, SimpleCard, TextPageHeader } from "@/components/public/page-sections";
import { solutionTypes } from "@/lib/public-content";

export function generateStaticParams() {
  return solutionTypes.map((solution) => ({ type: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const solution = solutionTypes.find((item) => item.slug === type);
  return { title: solution?.title ?? "Giải pháp", description: solution?.description };
}

export default async function SolutionTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const solution = solutionTypes.find((item) => item.slug === type);
  if (!solution) notFound();

  return (
    <PublicShell>
      <TextPageHeader eyebrow="Giải pháp" title={solution.title} description={solution.description} />
      <Section title="Năng lực phù hợp">
        <div className="grid gap-4 md:grid-cols-3">
          <SimpleCard title="Membership rõ ràng" description="Phân biệt tài khoản nền tảng và vai trò trong từng tổ chức." />
          <SimpleCard title="Quy trình truy vết được" description="Yêu cầu, thay đổi và phê duyệt có trạng thái rõ ràng." />
          <SimpleCard title="Module theo nhu cầu" description="Tenant chỉ bật module phù hợp với mô hình vận hành của mình." />
        </div>
      </Section>
    </PublicShell>
  );
}
