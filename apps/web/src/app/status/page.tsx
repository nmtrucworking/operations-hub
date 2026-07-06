import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Trạng thái hệ thống",
  description: "Trạng thái dịch vụ public của Operations Hub."
};

const services = ["Web application", "API", "Authentication", "Notification/email", "File storage", "Integrations"];

export default function SystemStatusPage() {
  return (
    <PublicShell>
      <TextPageHeader eyebrow="Status" title="Trạng thái dịch vụ" description="Trang status public không hiển thị chi tiết hạ tầng nhạy cảm." />
      <Section>
        <div className="grid gap-3">
          {services.map((service) => (
            <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4" key={service}>
              <span className="font-medium text-slate-950">{service}</span>
              <span className="rounded-md border border-green-200 bg-green-50 px-2 py-1 text-sm text-green-800">Operational</span>
            </div>
          ))}
        </div>
      </Section>
    </PublicShell>
  );
}
