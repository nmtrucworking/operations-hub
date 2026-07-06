import type { Metadata } from "next";
import { AuthPage } from "@/components/public/auth-page";
import { ForgotPasswordForm } from "@/components/public/auth-forms";

export const metadata: Metadata = {
  title: "Quên mật khẩu",
  description: "Yêu cầu hướng dẫn đặt lại mật khẩu theo phản hồi trung tính.",
  robots: { index: false, follow: false }
};

export default function ForgotPasswordPage() {
  return (
    <AuthPage title="Quên mật khẩu" description="Nhập email hoặc định danh được hỗ trợ. Hệ thống không tiết lộ tài khoản có tồn tại hay không.">
      <ForgotPasswordForm />
    </AuthPage>
  );
}
