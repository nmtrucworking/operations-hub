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
      title="Hồ sơ đang chờ xử lý"
      description="Hồ sơ tổ chức đang được xem xét. Trang trạng thái không hiển thị ghi chú nội bộ hoặc dữ liệu thẩm định nhạy cảm."
      primaryHref="/organizations"
      primaryLabel="Theo dõi hồ sơ"
      secondaryHref="/contact"
      secondaryLabel="Liên hệ hỗ trợ"
    />
  );
}
