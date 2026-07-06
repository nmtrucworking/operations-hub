import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthPage } from "@/components/public/auth-page";
import { LoginForm } from "@/components/public/auth-forms";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập tài khoản Operations Hub để chọn tenant và vào workspace."
};

export default function LoginPage() {
  return (
    <AuthPage title="Đăng nhập" description="Tài khoản nền tảng chỉ tạo phiên đăng nhập; quyền nghiệp vụ phụ thuộc membership trong từng tenant.">
      <Suspense fallback={<div className="h-40 rounded-lg border border-slate-200 bg-slate-50" />}>
        <LoginForm />
      </Suspense>
    </AuthPage>
  );
}
