"use client";

import { LinkButton } from "@/components/public/link-button";

export default function GlobalError() {
  return (
    <html lang="vi">
      <body>
        <main className="grid min-h-screen place-items-center bg-white px-4 py-16 text-slate-950">
          <div className="w-full max-w-xl text-center">
            <p className="text-sm font-medium text-slate-500">500 REF-PUBLIC</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-normal">Có lỗi hệ thống</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Hệ thống không thể hoàn tất yêu cầu. Trang này không hiển thị stack trace, token hoặc thông tin hạ tầng.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton href="/status">Xem status</LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Liên hệ
              </LinkButton>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
