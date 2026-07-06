import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = { title: "410 Không còn tồn tại", robots: { index: false, follow: false } };

export default function GonePage() {
  return <StatusPage code="410" title="Nội dung không còn tồn tại" description="Nội dung public này đã bị gỡ hoặc hết hiệu lực. Không có dữ liệu nội bộ nào được tiết lộ." />;
}
