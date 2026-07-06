import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Đăng ký đang chờ xử lý",
  description: "Trạng thái pending của yêu cầu đăng ký tổ chức."
};

export default function OrganizationPendingPage() {
  return (
    <StatusPage
      code="ORG-PENDING"
      title="Yêu cầu đang chờ xử lý"
      description="Yêu cầu tổ chức đang được xem xét. Trang này không hiển thị ghi chú nội bộ hoặc dữ liệu xét duyệt nhạy cảm."
      primaryHref="/dashboard"
      primaryLabel="Về tài khoản"
      secondaryHref="/contact"
      secondaryLabel="Liên hệ hỗ trợ"
    />
  );
}
