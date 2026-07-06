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
      code={ref ? `Mã tham chiếu: ${ref}` : "Mã tham chiếu sẽ được backend cấp khi tích hợp"}
      title="Yêu cầu đăng ký đã được ghi nhận"
      description="Tenant chưa được xem là hoạt động cho đến khi quy trình xét duyệt hoàn tất. Bạn sẽ nhận hướng dẫn tiếp theo qua kênh liên hệ đã cung cấp."
      primaryHref="/dashboard"
      primaryLabel="Về tài khoản"
      secondaryHref="/start"
      secondaryLabel="Quay lại bắt đầu"
    />
  );
}
