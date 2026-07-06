import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = { title: "400 Yêu cầu không hợp lệ", robots: { index: false, follow: false } };

export default function BadRequestPage() {
  return <StatusPage code="400" title="Yêu cầu không hợp lệ" description="Dữ liệu hoặc đường dẫn chưa phù hợp. Hãy kiểm tra lại trước khi tiếp tục." />;
}
