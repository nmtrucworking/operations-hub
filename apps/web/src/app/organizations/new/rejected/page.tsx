import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Đăng ký bị từ chối",
  description: "Trạng thái rejected của yêu cầu đăng ký tổ chức."
};

export default function OrganizationRejectedPage() {
  return (
    <StatusPage
      code="ORG-REJECTED"
      title="Yêu cầu chưa được phê duyệt"
      description="Hệ thống chỉ hiển thị lý do ở mức được phép công bố. Bạn có thể bổ sung thông tin và tạo yêu cầu mới nếu phù hợp."
      primaryHref="/organizations/new"
      primaryLabel="Tạo yêu cầu mới"
      secondaryHref="/contact"
      secondaryLabel="Liên hệ hỗ trợ"
    />
  );
}
