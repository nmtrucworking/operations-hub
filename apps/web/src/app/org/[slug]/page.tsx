import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Hồ sơ tổ chức chưa public",
  description: "Public tenant profile chỉ hoạt động khi tenant bật visibility phù hợp.",
  robots: { index: false, follow: false }
};

export default async function TenantPublicProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  await params;
  return (
    <StatusPage
      code="TENANT_PUBLIC_DISABLED"
      title="Không tìm thấy hồ sơ public"
      description="Hồ sơ tổ chức chỉ hiển thị khi tenant chủ động bật public visibility và cấu hình nội dung được phép công bố."
      primaryHref="/"
      primaryLabel="Về trang chủ"
    />
  );
}
