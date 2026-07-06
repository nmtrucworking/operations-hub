import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = { title: "401 Chưa đăng nhập", robots: { index: false, follow: false } };

export default function UnauthorizedPage() {
  return <StatusPage code="401" title="Bạn cần đăng nhập" description="Trang này yêu cầu phiên đăng nhập hợp lệ trước khi tiếp tục." primaryHref="/auth/login" primaryLabel="Đăng nhập" />;
}
