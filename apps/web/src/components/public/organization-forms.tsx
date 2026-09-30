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

function getSignedInDraftKey(userId: string) {
  return `${DRAFT_KEY}:${userId}`;
}

function readScopedDraft() {
  const session = readSession();
  if (session?.user?.id) {
    const key = getSignedInDraftKey(session.user.id);
    let raw = window.localStorage.getItem(key);
    if (!raw) {
      const guestDraft = window.sessionStorage.getItem(DRAFT_KEY);
      if (guestDraft) {
        raw = guestDraft;
        window.localStorage.setItem(key, guestDraft);
        window.sessionStorage.removeItem(DRAFT_KEY);
      }
    }
    return raw;
  }
  return window.sessionStorage.getItem(DRAFT_KEY);
}

function writeScopedDraft(draft: RegistrationDraft) {
  const raw = JSON.stringify(draft);
  const session = readSession();
  if (session?.user?.id) {
    window.localStorage.setItem(getSignedInDraftKey(session.user.id), raw);
    return;
  }
  window.sessionStorage.setItem(DRAFT_KEY, raw);
}

function clearScopedDraft() {
  const session = readSession();
  if (session?.user?.id) window.localStorage.removeItem(getSignedInDraftKey(session.user.id));
  window.sessionStorage.removeItem(DRAFT_KEY);
}

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

    const rawDraft = readScopedDraft();
    if (!rawDraft) return;
    try {
      const draft = JSON.parse(rawDraft) as RegistrationDraft;
      setName(draft.name ?? "");
      setSlug(draft.slug ?? "");
      setContactEmail(draft.contactEmail || session?.user?.email || "");
      setPurpose(draft.purpose ?? "");
      setRepresentativeName(draft.representativeName || session?.user?.fullName || "");
      setWebsiteOrReference(draft.websiteOrReference ?? "");
      setDraftMessage("Đã khôi phục bản nháp của phiên/tài khoản hiện tại.");
    } catch {
      clearScopedDraft();
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
    writeScopedDraft(draft);
    setDraftMessage(
      hasSession
        ? "Đã lưu bản nháp cục bộ cho tài khoản này trên thiết bị. Bản nháp chưa được gửi lên hệ thống."
        : "Đã lưu bản nháp tạm trong phiên trình duyệt. Đăng nhập trong cùng tab để tiếp tục."
    );
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!hasSession) {
      saveDraft();
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
      clearScopedDraft();
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
          Bạn có thể chuẩn bị biểu mẫu công khai, nhưng cần đăng nhập trước khi gửi hồ sơ tạo tenant. Bản nháp trước đăng nhập chỉ được giữ trong phiên tab hiện tại.
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
          Lưu bản nháp
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

type InvitationPreview = {
  state: string;
  email: string;
  fullName: string;
  title?: string | null;
  expiresAt: string;
  tenant: { id: string; name: string; slug: string; brandColor: string };
  unit?: { id: string; name: string; code: string } | null;
  position?: { id: string; name: string; code: string } | null;
};

export function InviteActions({ token }: { token: string }) {
  const router = useRouter();
  const [invitation, setInvitation] = useState<InvitationPreview | null>(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<"accepted" | "declined" | "">("");

  useEffect(() => {
    let active = true;
    apiFetch<InvitationPreview>(`/members/invitations/token/${encodeURIComponent(token)}`)
      .then((response) => {
        if (active) setInvitation(response.data);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Không thể đọc lời mời.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [token]);

  async function accept(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await apiFetch(`/members/invitations/token/${encodeURIComponent(token)}/accept`, {
        method: "POST",
        body: JSON.stringify({ password })
      });
      setDone("accepted");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể chấp nhận lời mời.");
    } finally {
      setSubmitting(false);
    }
  }

  async function decline() {
    setSubmitting(true);
    setError("");
    try {
      await apiFetch(`/members/invitations/token/${encodeURIComponent(token)}/decline`, {
        method: "POST",
        body: JSON.stringify({})
      });
      setDone("declined");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể từ chối lời mời.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <div className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-500">Đang kiểm tra lời mời...</div>;
  }

  if (error && !invitation) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-5">
        <h2 className="text-lg font-semibold text-red-900">Không thể mở lời mời</h2>
        <p className="mt-2 text-sm text-red-700">{error}</p>
      </div>
    );
  }

  if (done === "accepted") {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold text-emerald-900">Đã tham gia tổ chức</h2>
        <p className="mt-2 text-sm text-emerald-800">Membership đã được kích hoạt. Bạn có thể đăng nhập và chọn tổ chức này.</p>
        <Button className="mt-4" onClick={() => router.push("/auth/login")}>Đăng nhập</Button>
      </div>
    );
  }

  if (done === "declined") {
    return (
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">Đã từ chối lời mời</h2>
        <p className="mt-2 text-sm text-slate-600">Lời mời này không thể được sử dụng để tham gia tổ chức.</p>
      </div>
    );
  }

  if (!invitation) return null;

  if (invitation.state !== "PENDING") {
    const labels: Record<string, string> = {
      ACCEPTED: "Lời mời đã được sử dụng.",
      DECLINED: "Lời mời đã bị từ chối.",
      EXPIRED: "Lời mời đã hết hạn.",
      REVOKED: "Lời mời đã bị thu hồi."
    };
    return (
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">{labels[invitation.state] ?? "Lời mời không còn hiệu lực."}</h2>
        <p className="mt-2 text-sm text-slate-600">Liên hệ quản trị viên tổ chức nếu bạn cần một lời mời mới.</p>
      </div>
    );
  }

  return (
    <form className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5" onSubmit={accept}>
      <div>
        <h2 className="text-lg font-semibold text-slate-950">Lời mời tham gia {invitation.tenant.name}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Lời mời dành cho <strong>{invitation.fullName}</strong> ({invitation.email}).</p>
      </div>
      <dl className="grid gap-3 text-sm">
        <div className="flex justify-between gap-4 border-t border-slate-200 pt-3"><dt className="text-slate-500">Đơn vị</dt><dd className="font-medium text-slate-950">{invitation.unit?.name ?? "Chưa phân đơn vị"}</dd></div>
        <div className="flex justify-between gap-4 border-t border-slate-200 pt-3"><dt className="text-slate-500">Chức vụ</dt><dd className="font-medium text-slate-950">{invitation.position?.name ?? invitation.title ?? "Thành viên"}</dd></div>
        <div className="flex justify-between gap-4 border-t border-slate-200 pt-3"><dt className="text-slate-500">Hết hạn</dt><dd className="font-medium text-slate-950">{new Date(invitation.expiresAt).toLocaleString("vi-VN")}</dd></div>
      </dl>
      <label className="grid gap-2 text-sm font-medium text-slate-950">
        Mật khẩu tài khoản
        <Input type="password" minLength={8} required value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" />
        <span className="text-xs font-normal text-slate-500">Nếu email đã có tài khoản, nhập mật khẩu hiện tại để xác minh. Nếu chưa có tài khoản, mật khẩu này sẽ được dùng để tạo tài khoản mới.</span>
      </label>
      {error ? <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div> : null}
      <div className="grid gap-3 sm:grid-cols-2">
        <Button disabled={submitting} type="submit">{submitting ? "Đang xử lý..." : "Chấp nhận lời mời"}</Button>
        <Button disabled={submitting} onClick={decline} type="button" variant="secondary">Từ chối</Button>
      </div>
    </form>
  );
}
