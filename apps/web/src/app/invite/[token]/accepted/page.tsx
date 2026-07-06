import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Đã chấp nhận lời mời",
  robots: { index: false, follow: false }
};

export default function InviteAcceptedPage() {
  return (
    <StatusPage
      title="Lời mời đã được chấp nhận"
      description="Membership sẽ chỉ được tạo khi backend xác nhận token, tài khoản và chính sách tenant hợp lệ."
      primaryHref="/dashboard"
      primaryLabel="Đi đến workspace"
    />
  );
}
