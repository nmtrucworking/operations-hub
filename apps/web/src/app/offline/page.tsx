import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Mất kết nối",
  robots: { index: false, follow: false }
};

export default function OfflinePage() {
  return <StatusPage code="OFFLINE" title="Không có kết nối" description="Thiết bị có vẻ đang mất kết nối. Hãy kiểm tra mạng và thử tải lại trang." primaryHref="/" primaryLabel="Thử về trang chủ" />;
}
