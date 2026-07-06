import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Biểu mẫu public chưa bật",
  robots: { index: false, follow: false }
};

export default async function TenantPublicFormPage({ params }: { params: Promise<{ slug: string; formSlug: string }> }) {
  await params;
  return (
    <StatusPage
      code="PUBLIC_FORM_DISABLED"
      title="Không tìm thấy biểu mẫu public"
      description="Biểu mẫu public cần consent, chống spam, giới hạn tệp và chính sách dữ liệu trước khi mở."
      primaryHref="/"
      primaryLabel="Về trang chủ"
    />
  );
}
