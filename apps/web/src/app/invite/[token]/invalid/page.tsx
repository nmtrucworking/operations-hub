import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Lời mời không hợp lệ",
  robots: { index: false, follow: false }
};

export default function InviteInvalidPage() {
  return <StatusPage title="Lời mời không hợp lệ" description="Đường dẫn có thể đã bị thay đổi, thu hồi hoặc không còn được hệ thống chấp nhận." />;
}
