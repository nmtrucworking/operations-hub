import type { Metadata } from "next";
import { AuthPage } from "@/components/public/auth-page";
import { RegisterForm } from "@/components/public/auth-forms";

export const metadata: Metadata = {
  title: "Đăng ký tài khoản",
  description: "Tạo tài khoản Operations Hub mà không tự động tạo tenant, membership hoặc vai trò."
};

export default function RegisterPage() {
  return (
    <AuthPage title="Tạo tài khoản" description="Đăng ký tài khoản nền tảng. Membership và vai trò sẽ chỉ được tạo qua lời mời hoặc quy trình tổ chức hợp lệ.">
      <RegisterForm />
    </AuthPage>
  );
}
