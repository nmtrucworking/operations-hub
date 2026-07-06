import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = { title: "404 Không tìm thấy", robots: { index: false, follow: false } };

export default function ExplicitNotFoundPage() {
  return <StatusPage code="404" title="Không tìm thấy trang" description="Đường dẫn không tồn tại hoặc nội dung public đã bị tắt." primaryHref="/" primaryLabel="Về trang chủ" secondaryHref="/help" secondaryLabel="Tìm trợ giúp" />;
}
