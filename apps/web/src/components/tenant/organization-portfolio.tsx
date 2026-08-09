"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Building2, CheckCircle2, Clock3, LoaderCircle, Plus, RotateCcw, TriangleAlert } from "lucide-react";
import { apiFetch, readSession, selectTenant, TenantOption } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Registration = {
  id: string;
  proposedName: string;
  proposedSlug: string;
  status: "DRAFT" | "SUBMITTED" | "IN_REVIEW" | "APPROVED" | "REJECTED" | "WITHDRAWN" | string;
  submittedAt: string;
  reviewedAt?: string | null;
  createdTenantId?: string | null;
  reviewNote?: string | null;
  updatedAt: string;
};

const registrationMeta: Record<string, { label: string; className: string }> = {
  DRAFT: { label: "Bản nháp", className: "bg-slate-100 text-slate-700" },
  SUBMITTED: { label: "Đã gửi", className: "bg-blue-50 text-blue-700" },
  IN_REVIEW: { label: "Đang thẩm định", className: "bg-amber-50 text-amber-800" },
  APPROVED: { label: "Đã phê duyệt", className: "bg-emerald-50 text-emerald-700" },
  REJECTED: { label: "Từ chối", className: "bg-red-50 text-red-700" },
  WITHDRAWN: { label: "Đã rút", className: "bg-slate-100 text-slate-600" }
};

function RegistrationBadge({ status }: { status: string }) {
  const meta = registrationMeta[status] ?? { label: status, className: "bg-slate-100 text-slate-700" };
  return <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", meta.className)}>{meta.label}</span>;
}

export function OrganizationPortfolio() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [tenants, setTenants] = useState<TenantOption[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionId, setActionId] = useState("");

  const load = useCallback(async () => {
    const session = readSession();
    const signedIn = Boolean(session?.accessToken);
    setAuthenticated(signedIn);
    if (!signedIn) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const [tenantResponse, registrationResponse] = await Promise.all([
        apiFetch<TenantOption[]>("/tenants"),
        apiFetch<Registration[]>("/tenant-registrations/mine")
      ]);
      setTenants(tenantResponse.data);
      setRegistrations(registrationResponse.data);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Không thể tải danh sách tổ chức.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function openTenant(tenantId: string) {
    setActionId(tenantId);
    setError("");
    try {
      await selectTenant(tenantId);
      window.location.assign("/dashboard");
    } catch (switchError) {
      setError(switchError instanceof Error ? switchError.message : "Không thể mở workspace.");
      setActionId("");
    }
  }

  async function withdrawRegistration(id: string) {
    setActionId(id);
    setError("");
    try {
      await apiFetch(`/tenant-registrations/mine/${id}/withdraw`, { method: "POST" });
      await load();
    } catch (withdrawError) {
      setError(withdrawError instanceof Error ? withdrawError.message : "Không thể rút hồ sơ.");
    } finally {
      setActionId("");
    }
  }

  if (authenticated === false) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-950">Đăng nhập để xem tổ chức của bạn</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Danh sách tenant và hồ sơ đăng ký là dữ liệu gắn với tài khoản nền tảng.</p>
        <Link className="mt-5 inline-flex min-h-11 items-center rounded-md bg-blue-700 px-4 text-sm font-semibold text-white hover:bg-blue-800" href="/auth/login?returnTo=/organizations">Đăng nhập</Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-xl border border-slate-200 bg-white">
        <div className="text-center"><LoaderCircle className="mx-auto h-6 w-6 animate-spin text-blue-700" /><p className="mt-3 text-sm text-slate-600">Đang tải tổ chức và hồ sơ...</p></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {error ? (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" />
          <div className="flex-1"><p>{error}</p><Button className="mt-3" onClick={() => void load()} type="button" variant="secondary"><RotateCcw className="h-4 w-4" />Tải lại</Button></div>
        </div>
      ) : null}

      <section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Workspace đang có</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">Chỉ tenant có membership Active và tenant Active mới xuất hiện trong danh sách này.</p>
          </div>
          <Link className="inline-flex min-h-10 items-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-900 hover:bg-slate-50" href="/organizations/new"><Plus className="h-4 w-4" />Đăng ký tổ chức mới</Link>
        </div>

        {tenants.length ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tenants.map((item) => (
              <article className="rounded-xl border border-slate-200 bg-white p-5" key={item.tenant.id}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="mt-1 h-10 w-2 shrink-0 rounded-full bg-blue-700" style={{ backgroundColor: item.tenant.brandColor }} />
                    <div className="min-w-0">
                      <h3 className="truncate font-semibold text-slate-950">{item.tenant.name}</h3>
                      <p className="mt-1 truncate font-mono text-xs text-slate-500">/{item.tenant.slug}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">Active</span>
                </div>
                <dl className="mt-5 grid gap-2 text-sm">
                  <div className="flex justify-between gap-3 border-t border-slate-100 pt-3"><dt className="text-slate-500">Membership</dt><dd className="font-medium text-slate-900">{item.status}</dd></div>
                  <div className="flex justify-between gap-3 border-t border-slate-100 pt-3"><dt className="text-slate-500">Membership ID</dt><dd className="max-w-[13rem] truncate font-mono text-xs text-slate-700">{item.membershipId}</dd></div>
                </dl>
                <Button className="mt-5 w-full" disabled={Boolean(actionId)} onClick={() => void openTenant(item.tenant.id)} type="button">
                  {actionId === item.tenant.id ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Building2 className="h-4 w-4" />}
                  Mở workspace
                </Button>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <Building2 className="mx-auto h-7 w-7 text-slate-400" />
            <h3 className="mt-3 font-semibold text-slate-950">Chưa có membership Active</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">Bạn có thể đăng ký tổ chức mới hoặc sử dụng lời mời hợp lệ. Tài khoản nền tảng không mặc nhiên có quyền trong tenant.</p>
          </div>
        )}
      </section>

      <section>
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Hồ sơ đăng ký tổ chức</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">Theo dõi trạng thái hồ sơ độc lập với trạng thái tenant. Approved không nên được diễn giải là provisioning đã hoàn tất nếu chưa có createdTenantId.</p>
        </div>

        {registrations.length ? (
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr><th className="px-4 py-3 font-semibold">Tổ chức</th><th className="px-4 py-3 font-semibold">Slug</th><th className="px-4 py-3 font-semibold">Trạng thái</th><th className="px-4 py-3 font-semibold">Gửi lúc</th><th className="px-4 py-3 font-semibold">Kết quả</th><th className="px-4 py-3 font-semibold">Thao tác</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {registrations.map((registration) => {
                    const canWithdraw = ["DRAFT", "SUBMITTED", "IN_REVIEW"].includes(registration.status);
                    return (
                      <tr key={registration.id}>
                        <td className="px-4 py-4"><div className="font-semibold text-slate-950">{registration.proposedName}</div><div className="mt-1 max-w-56 truncate font-mono text-[11px] text-slate-400">{registration.id}</div></td>
                        <td className="px-4 py-4 font-mono text-xs text-slate-700">{registration.proposedSlug}</td>
                        <td className="px-4 py-4"><RegistrationBadge status={registration.status} /></td>
                        <td className="whitespace-nowrap px-4 py-4 text-slate-600"><Clock3 className="mr-1 inline h-3.5 w-3.5" />{new Date(registration.submittedAt).toLocaleString("vi-VN")}</td>
                        <td className="px-4 py-4 text-slate-600">
                          {registration.createdTenantId ? <span className="inline-flex items-center gap-1 text-emerald-700"><CheckCircle2 className="h-4 w-4" />Tenant đã được liên kết</span> : registration.reviewNote ? <span title={registration.reviewNote}>{registration.reviewNote}</span> : "—"}
                        </td>
                        <td className="px-4 py-4">
                          {canWithdraw ? <Button disabled={Boolean(actionId)} onClick={() => void withdrawRegistration(registration.id)} type="button" variant="ghost">{actionId === registration.id ? "Đang xử lý..." : "Rút hồ sơ"}</Button> : <span className="text-xs text-slate-400">Không có thao tác</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <Clock3 className="mx-auto h-7 w-7 text-slate-400" />
            <h3 className="mt-3 font-semibold text-slate-950">Chưa có hồ sơ đăng ký</h3>
            <p className="mt-2 text-sm text-slate-600">Không tạo bản ghi mẫu để lấp trạng thái rỗng.</p>
          </div>
        )}
      </section>
    </div>
  );
}
