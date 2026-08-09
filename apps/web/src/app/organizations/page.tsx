import type { Metadata } from "next";
import { OrganizationPortfolio } from "@/components/tenant/organization-portfolio";
import { PublicShell } from "@/components/public/public-shell";
import { Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Tổ chức của tôi | Operations Hub",
  description: "Xem tenant đang tham gia và theo dõi hồ sơ đăng ký tổ chức."
};

export default function OrganizationsPage() {
  return (
    <PublicShell>
      <TextPageHeader
        eyebrow="Tài khoản và tenant"
        title="Tổ chức của tôi"
        description="Một tài khoản có thể thuộc nhiều tenant. Membership, vai trò, dữ liệu và branding được xác định riêng theo từng tổ chức."
      />
      <Section>
        <OrganizationPortfolio />
      </Section>
    </PublicShell>
  );
}
