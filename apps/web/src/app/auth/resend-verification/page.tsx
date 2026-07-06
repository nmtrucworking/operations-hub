import type { Metadata } from "next";
import { AuthPage } from "@/components/public/auth-page";
import { ResendVerificationForm } from "@/components/public/auth-forms";

export const metadata: Metadata = {
  title: "Gửi lại email xác minh",
  description: "Yêu cầu gửi lại email xác minh với phản hồi hạn chế dò tài khoản.",
  robots: { index: false, follow: false }
};

export default function ResendVerificationPage() {
  return (
    <AuthPage title="Gửi lại email xác minh" description="Nếu tài khoản phù hợp và cần xác minh, hệ thống sẽ gửi lại hướng dẫn sau khi qua kiểm soát rate limit.">
      <ResendVerificationForm />
    </AuthPage>
  );
}
