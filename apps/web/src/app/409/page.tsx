import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = { title: "409 Xung đột trạng thái", robots: { index: false, follow: false } };

export default function ConflictPage() {
  return <StatusPage code="409" title="Xung đột trạng thái" description="Dữ liệu có thể đã thay đổi từ phiên khác. Hãy tải lại hoặc tiếp tục từ trạng thái mới nhất." primaryHref="/dashboard" primaryLabel="Về workspace" />;
}
