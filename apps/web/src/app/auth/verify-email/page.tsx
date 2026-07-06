import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthPage } from "@/components/public/auth-page";
import { VerifyEmailState } from "@/components/public/auth-forms";

export const metadata: Metadata = {
  title: "Xác minh email",
  description: "Xác minh email bằng token hệ thống phát hành.",
  robots: { index: false, follow: false }
};

export default function VerifyEmailPage() {
  return (
    <AuthPage title="Xác minh email" description="Màn hình này chỉ xử lý trạng thái xác minh email và không hiển thị token.">
      <Suspense fallback={<div className="h-32 rounded-lg border border-slate-200 bg-slate-50" />}>
        <VerifyEmailState />
      </Suspense>
    </AuthPage>
  );
}
