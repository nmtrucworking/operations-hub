"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { readSession } from "@/lib/api";

function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function OrganizationRequestForm() {
  const router = useRouter();
  const [hasSession, setHasSession] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const normalizedSlug = useMemo(() => normalizeSlug(slug || name), [name, slug]);

  useEffect(() => {
    setHasSession(Boolean(readSession()?.accessToken));
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!hasSession) {
      router.push("/auth/login?returnTo=/organizations/new");
      return;
    }
    const reference = `ORG-${Date.now().toString(36).toUpperCase()}`;
    router.push(`/organizations/new/success?ref=${encodeURIComponent(reference)}`);
  }

  return (
    <form className="grid gap-6" onSubmit={submit}>
      {!hasSession ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          Bạn có thể xem biểu mẫu công khai, nhưng cần đăng nhập trước khi gửi yêu cầu tạo dữ liệu.
        </div>
      ) : null}
      <fieldset className="grid gap-4 rounded-lg border border-slate-200 p-5">
        <legend className="px-2 text-sm font-semibold text-slate-950">1. Thông tin cơ bản</legend>
        <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="org-name">
          Tên tổ chức
          <Input id="org-name" onChange={(event) => setName(event.target.value)} required value={name} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="org-purpose">
          Mục đích sử dụng
          <textarea
            className="min-h-28 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            id="org-purpose"
            onChange={(event) => setPurpose(event.target.value)}
            required
            value={purpose}
          />
        </label>
      </fieldset>
      <fieldset className="grid gap-4 rounded-lg border border-slate-200 p-5">
        <legend className="px-2 text-sm font-semibold text-slate-950">2. Định danh và liên hệ</legend>
        <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="org-slug">
          Slug mong muốn
          <Input id="org-slug" onChange={(event) => setSlug(event.target.value)} value={slug} />
          <span className="text-xs font-normal text-slate-500">Slug chuẩn hóa: {normalizedSlug || "chua-co-slug"}</span>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="contact-email">
          Email liên hệ
          <Input id="contact-email" inputMode="email" onChange={(event) => setContactEmail(event.target.value)} required type="email" value={contactEmail} />
        </label>
      </fieldset>
      <label className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 text-sm leading-6 text-slate-700">
        <input checked={confirmed} className="mt-1 h-4 w-4 rounded border-slate-300" onChange={(event) => setConfirmed(event.target.checked)} required type="checkbox" />
        <span>
          Tôi hiểu rằng gửi yêu cầu không đồng nghĩa tenant đã hoạt động, và người gửi chưa tự động trở thành Owner cho đến khi
          quy trình xét duyệt hoàn tất.
        </span>
      </label>
      <Button disabled={!confirmed} type="submit">
        {hasSession ? "Gửi yêu cầu đăng ký tổ chức" : "Đăng nhập để gửi yêu cầu"}
      </Button>
      <p className="text-sm text-slate-500">
        Không gửi mật khẩu, token, mã OTP hoặc dữ liệu nội bộ qua biểu mẫu này. Xem{" "}
        <Link className="text-blue-700 hover:underline" href="/legal/privacy">
          chính sách bảo mật
        </Link>
        .
      </p>
    </form>
  );
}

export function InviteActions({ tokenState }: { tokenState: string }) {
  const [declined, setDeclined] = useState(false);

  if (["expired", "invalid", "used", "revoked"].includes(tokenState)) {
    const labels: Record<string, string> = {
      expired: "Lời mời đã hết hạn.",
      invalid: "Lời mời không hợp lệ.",
      used: "Lời mời đã được sử dụng.",
      revoked: "Lời mời đã bị thu hồi."
    };
    return (
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold">{labels[tokenState]}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Token này không cấp quyền xem dữ liệu tenant nội bộ.</p>
      </div>
    );
  }

  if (declined) {
    return (
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold">Bạn đã chọn từ chối lời mời.</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Khi backend invite được tích hợp, hành động này cần được xác nhận và ghi nhận an toàn.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5">
      <div>
        <h2 className="text-lg font-semibold">Lời mời tham gia tổ chức</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Bạn được mời tham gia một tenant trong Operations Hub. Thông tin hiển thị ở đây chỉ là dữ liệu tối thiểu an toàn
          cho màn hình public.
        </p>
      </div>
      <dl className="grid gap-3 text-sm">
        <div className="flex justify-between gap-4 border-t border-slate-200 pt-3">
          <dt className="text-slate-500">Tổ chức</dt>
          <dd className="font-medium text-slate-950">Được xác định bởi token hợp lệ</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-slate-200 pt-3">
          <dt className="text-slate-500">Vai trò dự kiến</dt>
          <dd className="font-medium text-slate-950">Thành viên hoặc vai trò được mời</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-slate-200 pt-3">
          <dt className="text-slate-500">Dữ liệu nội bộ</dt>
          <dd className="font-medium text-slate-950">Không hiển thị public</dd>
        </div>
      </dl>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-700 px-4 text-sm font-medium text-white hover:bg-blue-800" href="/auth/login">
          Đăng nhập để chấp nhận
        </Link>
        <Button onClick={() => setDeclined(true)} type="button" variant="secondary">
          Từ chối lời mời
        </Button>
      </div>
    </div>
  );
}
