"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiFetch, readSession } from "@/lib/api";

const DRAFT_KEY = "operations-hub-tenant-registration-draft";

function normalizeSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

type RegistrationDraft = {
  name: string;
  slug: string;
  contactEmail: string;
  purpose: string;
  representativeName: string;
  websiteOrReference: string;
};

type TenantRegistrationResponse = {
  id: string;
  proposedName: string;
  proposedSlug: string;
  status: string;
};

export function OrganizationRequestForm() {
  const router = useRouter();
  const [hasSession, setHasSession] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [websiteOrReference, setWebsiteOrReference] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [draftMessage, setDraftMessage] = useState("");
  const normalizedSlug = useMemo(() => normalizeSlug(slug || name), [name, slug]);

  useEffect(() => {
    const session = readSession();
    setHasSession(Boolean(session?.accessToken));
    if (session?.user?.email) setContactEmail((current) => current || session.user!.email);
    if (session?.user?.fullName) setRepresentativeName((current) => current || session.user!.fullName);

    const rawDraft = window.localStorage.getItem(DRAFT_KEY);
    if (!rawDraft) return;
    try {
      const draft = JSON.parse(rawDraft) as RegistrationDraft;
      setName(draft.name ?? "");
      setSlug(draft.slug ?? "");
      setContactEmail(draft.contactEmail || session?.user?.email || "");
      setPurpose(draft.purpose ?? "");
      setRepresentativeName(draft.representativeName || session?.user?.fullName || "");
      setWebsiteOrReference(draft.websiteOrReference ?? "");
      setDraftMessage("Đã khôi phục bản nháp được lưu trên thiết bị này.");
    } catch {
      window.localStorage.removeItem(DRAFT_KEY);
    }
  }, []);

  function saveDraft() {
    const draft: RegistrationDraft = {
      name,
      slug,
      contactEmail,
      purpose,
      representativeName,
      websiteOrReference
    };
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    setDraftMessage("Đã lưu bản nháp cục bộ trên thiết bị. Bản nháp này chưa được gửi lên hệ thống.");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!hasSession) {
      router.push("/auth/login?returnTo=/organizations/new");
      return;
    }
    if (normalizedSlug.length < 2) {
      setError("Slug sau chuẩn hóa phải có ít nhất 2 ký tự hợp lệ.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await apiFetch<TenantRegistrationResponse>("/tenant-registrations", {
        method: "POST",
        body: JSON.stringify({
          proposedName: name,
          proposedSlug: normalizedSlug,
          contactEmail,
          purpose,
          representativeName: representativeName || undefined,
          websiteOrReference: websiteOrReference || undefined
        })
      });
      window.localStorage.removeItem(DRAFT_KEY);
      router.push(`/organizations/new/success?ref=${encodeURIComponent(response.data.id)}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Không thể gửi hồ sơ đăng ký tổ chức.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="grid gap-6" onSubmit={submit}>
      {!hasSession ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          Bạn có thể chuẩn bị biểu mẫu công khai, nhưng cần đăng nhập trước khi gửi hồ sơ tạo tenant.
        </div>
      ) : null}
      {draftMessage ? <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-900" role="status">{draftMessage}</div> : null}
      {error ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700" role="alert">{error}</div> : null}

      <fieldset className="grid gap-4 rounded-xl border border-slate-200 bg-white p-5">
        <legend className="px-2 text-sm font-semibold text-slate-950">1. Tổ chức và mục đích sử dụng</legend>
        <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="org-name">
          Tên tổ chức
          <Input id="org-name" maxLength={160} onChange={(event) => setName(event.target.value)} required value={name} />
          <span className="text-xs font-normal text-slate-500">Dùng tên chính thức hoặc tên dự kiến có thể kiểm chứng trong quá trình review.</span>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="org-purpose">
          Mục đích sử dụng Operations Hub
          <textarea
            className="min-h-32 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            id="org-purpose"
            maxLength={2000}
            minLength={10}
            onChange={(event) => setPurpose(event.target.value)}
            placeholder="Mô tả loại tổ chức, phạm vi vận hành và nhu cầu chính..."
            required
            value={purpose}
          />
          <span className="text-right text-xs font-normal text-slate-500">{purpose.length}/2000</span>
        </label>
      </fieldset>

      <fieldset className="grid gap-4 rounded-xl border border-slate-200 bg-white p-5">
        <legend className="px-2 text-sm font-semibold text-slate-950">2. Định danh và người đại diện</legend>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="org-slug">
            Slug mong muốn
            <Input id="org-slug" maxLength={80} onChange={(event) => setSlug(event.target.value)} value={slug} placeholder="vi-du-clb-sinh-vien" />
            <span className="text-xs font-normal text-slate-500">Sau chuẩn hóa: <code className="font-mono">{normalizedSlug || "chua-co-slug"}</code></span>
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="representative-name">
            Người đại diện / đầu mối
            <Input id="representative-name" maxLength={160} onChange={(event) => setRepresentativeName(event.target.value)} value={representativeName} />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="contact-email">
            Email liên hệ
            <Input id="contact-email" inputMode="email" maxLength={254} onChange={(event) => setContactEmail(event.target.value)} required type="email" value={contactEmail} />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-950" htmlFor="org-reference">
            Website hoặc nguồn tham chiếu <span className="font-normal text-slate-500">(không bắt buộc)</span>
            <Input id="org-reference" maxLength={500} onChange={(event) => setWebsiteOrReference(event.target.value)} value={websiteOrReference} placeholder="Website, fanpage hoặc trang giới thiệu chính thức" />
          </label>
        </div>
      </fieldset>

      <fieldset className="grid gap-4 rounded-xl border border-slate-200 bg-white p-5">
        <legend className="px-2 text-sm font-semibold text-slate-950">3. Minh chứng và lưu ý xử lý</legend>
        <div className="rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          Tệp minh chứng chưa được nhận trực tiếp trên form này cho đến khi File/Storage API được nối với ranh giới tenant/registration. Có thể cung cấp đường dẫn tham chiếu ở trường phía trên; không gửi mật khẩu, token, OTP hoặc dữ liệu nội bộ nhạy cảm.
        </div>
        <div className="grid gap-2 text-sm text-slate-700">
          <div className="flex gap-2"><span className="font-semibold text-slate-950">•</span><span>Slug được kiểm tra ở backend và phải không xung đột với tenant hoặc hồ sơ đăng ký đã có.</span></div>
          <div className="flex gap-2"><span className="font-semibold text-slate-950">•</span><span>Hồ sơ sau khi gửi ở trạng thái Submitted; tenant chưa tồn tại như một không gian làm việc Active.</span></div>
          <div className="flex gap-2"><span className="font-semibold text-slate-950">•</span><span>Người gửi chỉ trở thành Owner sau khi review và provisioning hoàn tất nhất quán.</span></div>
        </div>
      </fieldset>

      <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
        <input checked={confirmed} className="mt-1 h-4 w-4 rounded border-slate-300" onChange={(event) => setConfirmed(event.target.checked)} required type="checkbox" />
        <span>
          Tôi xác nhận thông tin được cung cấp là phù hợp để xét duyệt và hiểu rằng gửi hồ sơ không đồng nghĩa tenant đã hoạt động hoặc tôi đã có quyền Owner.
        </span>
      </label>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button disabled={loading} onClick={saveDraft} type="button" variant="secondary">
          Lưu bản nháp trên thiết bị
        </Button>
        <Button disabled={!confirmed || loading} type="submit">
          {loading ? "Đang gửi hồ sơ..." : hasSession ? "Gửi hồ sơ đăng ký tổ chức" : "Đăng nhập để gửi hồ sơ"}
        </Button>
      </div>
      <p className="text-sm leading-6 text-slate-500">
        Bản nháp cục bộ không phải hồ sơ đã nộp. Dữ liệu chỉ được xem là đã gửi sau khi API trả về mã hồ sơ. Xem{" "}
        <Link className="text-blue-700 hover:underline" href="/legal/privacy">chính sách bảo mật</Link>.
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
