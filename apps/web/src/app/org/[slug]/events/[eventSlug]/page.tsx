import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Sự kiện public chưa bật",
  robots: { index: false, follow: false }
};

export default async function TenantPublicEventPage({ params }: { params: Promise<{ slug: string; eventSlug: string }> }) {
  await params;
  return (
    <StatusPage
      code="PUBLIC_EVENT_DISABLED"
      title="Không tìm thấy sự kiện public"
      description="Sự kiện tenant chỉ được công bố khi trường visibility và nội dung public đã được cấu hình rõ."
      primaryHref="/"
      primaryLabel="Về trang chủ"
    />
  );
}
