import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = { title: "429 Quá nhiều yêu cầu", robots: { index: false, follow: false } };

export default function RateLimitedPage() {
  return <StatusPage code="429" title="Quá nhiều yêu cầu" description="Vui lòng chờ một lúc trước khi thử lại. Trang không hiển thị chi tiết rate limit nội bộ." primaryHref="/help" primaryLabel="Xem trợ giúp" />;
}
