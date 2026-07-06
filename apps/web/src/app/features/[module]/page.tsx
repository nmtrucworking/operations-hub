import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicShell } from "@/components/public/public-shell";
import { DefinitionRows, InfoList, Section, TextPageHeader } from "@/components/public/page-sections";
import { moduleDetails } from "@/lib/public-content";

export function generateStaticParams() {
  return Object.keys(moduleDetails).map((module) => ({ module }));
}

export async function generateMetadata({ params }: { params: Promise<{ module: string }> }): Promise<Metadata> {
  const { module } = await params;
  const detail = moduleDetails[module];
  if (!detail) return { title: "Không tìm thấy module" };
  return {
    title: `${detail.title}`,
    description: detail.goal
  };
}

export default async function FeatureModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module } = await params;
  const detail = moduleDetails[module];
  if (!detail) notFound();

  return (
    <PublicShell>
      <TextPageHeader eyebrow={`Trạng thái: ${detail.status}`} title={detail.title} description={detail.goal} />
      <Section title="Vấn đề được giải quyết">
        <p className="max-w-3xl text-base leading-8 text-slate-700">{detail.problem}</p>
      </Section>
      <Section className="bg-slate-50" title="Năng lực chính">
        <div className="max-w-3xl">
          <InfoList items={detail.capabilities} />
        </div>
      </Section>
      <Section title="Thông tin kiểm soát">
        <DefinitionRows
          rows={[
            { label: "Actor sử dụng", value: detail.actors },
            { label: "Dữ liệu nhạy cảm", value: detail.sensitiveData },
            { label: "Điều kiện phụ thuộc", value: detail.dependencies },
            { label: "Trạng thái", value: detail.status }
          ]}
        />
      </Section>
    </PublicShell>
  );
}
