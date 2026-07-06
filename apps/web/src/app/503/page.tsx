import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = { title: "503 Dịch vụ tạm ngưng", robots: { index: false, follow: false } };

export default function ServiceUnavailablePage() {
  return <StatusPage code="503" title="Dịch vụ tạm ngưng" description="Một dịch vụ cần thiết đang gián đoạn hoặc bảo trì. Vui lòng xem status và thử lại sau." primaryHref="/status" primaryLabel="Xem status" />;
}
