import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthPage } from "@/components/public/auth-page";
import { ResetPasswordForm } from "@/components/public/auth-forms";

export const metadata: Metadata = {
  title: "Đặt lại mật khẩu",
  description: "Đặt lại mật khẩu bằng token hợp lệ.",
  robots: { index: false, follow: false }
};

export default function ResetPasswordPage() {
  return (
    <AuthPage title="Đặt lại mật khẩu" description="Token chỉ dùng cho hành động đặt lại mật khẩu, không cấp quyền xem dữ liệu tenant.">
      <Suspense fallback={<div className="h-40 rounded-lg border border-slate-200 bg-slate-50" />}>
        <ResetPasswordForm />
      </Suspense>
    </AuthPage>
  );
}
