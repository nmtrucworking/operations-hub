import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Bảo trì"
};

export default function MaintenancePage() {
  return <StatusPage code="MAINTENANCE" title="Hệ thống đang bảo trì" description="Một số dịch vụ có thể tạm ngưng. Vui lòng theo dõi trang trạng thái hoặc thử lại sau." primaryHref="/status" primaryLabel="Xem status" />;
}
