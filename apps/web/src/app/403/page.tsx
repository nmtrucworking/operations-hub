import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = { title: "403 Không có quyền", robots: { index: false, follow: false } };

export default function ForbiddenPage() {
  return <StatusPage code="403" title="Không có quyền truy cập" description="Tài khoản hiện tại không có quyền phù hợp trong tenant hoặc phạm vi này." primaryHref="/dashboard" primaryLabel="Quay lại workspace" secondaryHref="/auth/login" secondaryLabel="Đổi tài khoản" />;
}
