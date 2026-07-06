import type { Metadata } from "next";
import { Layers3 } from "lucide-react";
import { PublicShell } from "@/components/public/public-shell";
import { LinkButton } from "@/components/public/link-button";
import { Section, TextPageHeader } from "@/components/public/page-sections";
import { featureGroups, moduleDetails } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Tính năng",
  description: "Tổng quan nhóm năng lực và module của Operations Hub."
};

export default function FeaturesPage() {
  return (
    <PublicShell>
      <TextPageHeader
        eyebrow="Tổng quan tính năng"
        title="Các năng lực vận hành theo module"
        description="Operations Hub nhóm tính năng theo nhu cầu vận hành. Module Planned không được trình bày như chức năng đang chạy."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureGroups.map((feature) => {
            const detailExists = Boolean(moduleDetails[feature.slug]);
            return (
              <article className="rounded-lg border border-slate-200 bg-white p-5" key={feature.slug}>
                <div className="flex items-center justify-between gap-4">
                  <Layers3 className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  <span className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600">{feature.status}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-950">{feature.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                {detailExists ? (
                  <LinkButton className="mt-4" href={`/features/${feature.slug}`} variant="link">
                    Xem chi tiết
                  </LinkButton>
                ) : null}
              </article>
            );
          })}
        </div>
      </Section>
    </PublicShell>
  );
}
