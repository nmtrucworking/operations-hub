import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Pricing chưa áp dụng",
  description: "Operations Hub chưa công bố mô hình giá hoặc billing."
};

export default function PricingPage() {
  return (
    <StatusPage
      title="Chưa áp dụng pricing"
      description="Operations Hub chưa có quyết định chính thức về gói dịch vụ, giới hạn người dùng, thanh toán, thuế hoặc hoàn tiền. Trang này không đưa ra mức giá giả định."
      primaryHref="/contact"
      primaryLabel="Liên hệ"
      secondaryHref="/"
      secondaryLabel="Về trang chủ"
    />
  );
}
