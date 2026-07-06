import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Lời mời hết hạn",
  robots: { index: false, follow: false }
};

export default function InviteExpiredPage() {
  return <StatusPage title="Lời mời đã hết hạn" description="Vui lòng liên hệ tổ chức để yêu cầu lời mời mới." primaryHref="/help" primaryLabel="Xem trợ giúp" />;
}
