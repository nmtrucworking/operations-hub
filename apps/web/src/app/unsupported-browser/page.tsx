import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Trình duyệt không hỗ trợ"
};

export default function UnsupportedBrowserPage() {
  return <StatusPage code="UNSUPPORTED_BROWSER" title="Trình duyệt không được hỗ trợ" description="Vui lòng cập nhật trình duyệt hiện đại để dùng Operations Hub an toàn hơn." />;
}
