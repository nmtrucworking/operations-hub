import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Đã từ chối lời mời",
  robots: { index: false, follow: false }
};

export default function InviteDeclinedPage() {
  return <StatusPage title="Bạn đã từ chối lời mời" description="Không có membership nào được tạo từ lời mời này." />;
}
