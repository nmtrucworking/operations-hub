"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "validating" | "submitting" | "success" | "rejected" | "rate-limited" | "service-unavailable">("idle");
  const [accepted, setAccepted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("validating");
    if (!accepted) {
      setState("rejected");
      return;
    }
    setState("submitting");
    window.setTimeout(() => setState("success"), 250);
  }

  return (
    <form className="grid gap-5" onSubmit={submit}>
      <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="contact-name">
        Họ tên
        <Input id="contact-name" required />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="contact-email">
        Email
        <Input id="contact-email" inputMode="email" required type="email" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="contact-type">
        Loại yêu cầu
        <select className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" id="contact-type" required>
          <option value="">Chọn loại yêu cầu</option>
          <option>Hỗ trợ tài khoản</option>
          <option>Đăng ký tổ chức</option>
          <option>Góp ý sản phẩm</option>
          <option>Báo cáo bảo mật</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="contact-message">
        Nội dung
        <textarea className="min-h-32 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" id="contact-message" required />
      </label>
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
        <input checked={accepted} className="mt-1 h-4 w-4 rounded border-slate-300" onChange={(event) => setAccepted(event.target.checked)} type="checkbox" />
        <span>
          Tôi đồng ý để Operations Hub xử lý thông tin này theo{" "}
          <Link className="text-blue-700 hover:underline" href="/legal/privacy">
            Chính sách bảo mật
          </Link>
          .
        </span>
      </label>
      {state !== "idle" ? (
        <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700" role={state === "success" ? "status" : "alert"}>
          {state === "success"
            ? "Yêu cầu đã được ghi nhận trong giao diện public. Backend contact sẽ xử lý gửi thật ở bước tích hợp."
            : state === "rejected"
              ? "Bạn cần đồng ý chính sách bảo mật trước khi gửi."
              : state === "rate-limited"
                ? "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau."
                : state === "service-unavailable"
                  ? "Dịch vụ liên hệ tạm thời không khả dụng."
                  : "Đang kiểm tra yêu cầu..."}
        </p>
      ) : null}
      <Button disabled={state === "submitting"} type="submit">
        {state === "submitting" ? "Đang gửi..." : "Gửi liên hệ"}
      </Button>
      <p className="text-xs leading-5 text-slate-500">Không gửi mật khẩu, token, mã OTP hoặc dữ liệu tenant nội bộ qua biểu mẫu này.</p>
    </form>
  );
}
