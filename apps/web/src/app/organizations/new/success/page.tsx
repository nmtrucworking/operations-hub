import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Đăng ký tổ chức đã được ghi nhận",
  description: "Trạng thái thành công khi gửi yêu cầu đăng ký tổ chức."
};

export default async function OrganizationSuccessPage({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const { ref } = await searchParams;
  return (
    <StatusPage
      code={ref ? `Mã hồ sơ: ${ref}` : "Mã hồ sơ không khả dụng"}
      title="Hồ sơ đăng ký đã được ghi nhận"
      description="Tenant chưa được xem là hoạt động cho đến khi xét duyệt và provisioning hoàn tất. Người gửi cũng chưa trở thành Owner chỉ vì hồ sơ đã được tiếp nhận."
      primaryHref="/organizations"
      primaryLabel="Theo dõi hồ sơ"
      secondaryHref="/start"
      secondaryLabel="Quay lại bắt đầu"
    />
  );
}
