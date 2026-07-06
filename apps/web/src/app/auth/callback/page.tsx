import type { Metadata } from "next";
import { AuthPage } from "@/components/public/auth-page";
import { LinkButton } from "@/components/public/link-button";

export const metadata: Metadata = {
  title: "Hoàn tất đăng nhập",
  description: "Màn hình chuyển tiếp callback xác thực.",
  robots: { index: false, follow: false }
};

export default function AuthCallbackPage() {
  return (
    <AuthPage title="Đang hoàn tất đăng nhập" description="Operations Hub đang xử lý phản hồi xác thực. Không có token hoặc mã kỹ thuật nào được hiển thị trên trang này.">
      <div className="space-y-5">
        <div className="h-2 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
          <div className="h-full w-1/2 rounded-full bg-blue-700" />
        </div>
        <p className="text-sm leading-6 text-slate-600">
          Nếu quá trình này mất quá lâu, hãy quay lại trang đăng nhập và thử lại.
        </p>
        <LinkButton className="w-full" href="/auth/login" variant="secondary">
          Quay lại đăng nhập
        </LinkButton>
      </div>
    </AuthPage>
  );
}
