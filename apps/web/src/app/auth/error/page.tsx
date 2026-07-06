import type { Metadata } from "next";
import { AuthPage } from "@/components/public/auth-page";
import { LinkButton } from "@/components/public/link-button";

export const metadata: Metadata = {
  title: "Lỗi xác thực",
  description: "Màn hình lỗi xác thực thân thiện.",
  robots: { index: false, follow: false }
};

export default function AuthErrorPage() {
  return (
    <AuthPage title="Không thể hoàn tất xác thực" description="Phiên xác thực không hợp lệ, đã hết hạn hoặc dịch vụ tạm thời không khả dụng. Mã tham chiếu: AUTH-PUBLIC.">
      <div className="grid gap-3">
        <LinkButton href="/auth/login">Thử đăng nhập lại</LinkButton>
        <LinkButton href="/help" variant="secondary">
          Xem trợ giúp
        </LinkButton>
      </div>
    </AuthPage>
  );
}
