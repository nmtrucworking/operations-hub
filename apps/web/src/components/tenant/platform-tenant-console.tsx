"use client";

import { useEffect, useState } from "react";
import {
  Archive,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  LifeBuoy,
  LockKeyhole,
  ReceiptText,
  Search,
  Shield,
  TriangleAlert,
  UserRoundCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch, readSession, SessionState } from "@/lib/api";
import { cn } from "@/lib/utils";

type ViewKey = "registrations" | "catalog" | "provisioning" | "service" | "lifecycle" | "support";

type PlatformRegistration = {
  id: string;
  proposedName: string;
  proposedSlug: string;
  status: "DRAFT" | "SUBMITTED" | "IN_REVIEW" | "APPROVED" | "REJECTED" | "WITHDRAWN" | string;
  submittedAt: string;
  reviewedAt?: string | null;
  reviewNote?: string | null;
  createdTenantId?: string | null;
  applicant: { id: string; email: string; fullName: string };
  reviewer?: { id: string; email: string; fullName: string } | null;
};

type PlatformTenant = {
  id: string;
  name: string;
  slug: string;
  status: string;
  activeOwnerCount: number;
  createdAt: string;
  updatedAt: string;
};

type ServicePlan = {
  id: string;
  code: string;
  name: string;
  isActive: boolean;
  limits: Array<{ id: string; metricKey: string; maxValue: number; unit: string }>;
};

type PlatformClosure = {
  id: string;
  tenantId: string;
  status: string;
  reason: string;
  requestedAt: string;
  scheduledFor: string;
  tenant: { id: string; name: string; slug: string; status: string };
  requester: { user: { id: string; email: string; fullName: string } };
  exportRequests: Array<{ id: string; status: string; format: string }>;
};

type SupportPrincipal = { id: string; email: string; fullName: string; platformRole: string };

type PlatformSupportRequest = {
  id: string;
  tenantId: string;
  reason: string;
  requestedScopes: string[];
  requestedDurationMinutes: number;
  status: string;
  createdAt: string;
  tenant: { id: string; name: string; slug: string };
  requester: { user: { id: string; email: string; fullName: string } };
  grant?: {
    id: string;
    platformUserId: string;
    scopes: string[];
    startsAt: string;
    expiresAt: string;
    revokedAt?: string | null;
  } | null;
};

const views: Array<{ key: ViewKey; label: string; uc: string; icon: typeof Building2 }> = [
  { key: "registrations", label: "Hồ sơ đăng ký", uc: "UC-TENANT-02", icon: FileSearch },
  { key: "catalog", label: "Danh mục tenant", uc: "UC-TENANT-04", icon: Building2 },
  { key: "provisioning", label: "Khởi tạo tenant", uc: "UC-TENANT-03", icon: UserRoundCheck },
  { key: "service", label: "Dịch vụ & hạn mức", uc: "UC-TENANT-07", icon: ReceiptText },
  { key: "lifecycle", label: "Vòng đời", uc: "UC-TENANT-05/09", icon: Archive },
  { key: "support", label: "Support access", uc: "UC-TENANT-10", icon: LifeBuoy }
];

function StatusPill({ children, tone = "slate" }: { children: React.ReactNode; tone?: "slate" | "blue" | "amber" | "green" | "red" }) {
  const tones = {
    slate: "bg-slate-100 text-slate-700",
    blue: "bg-blue-50 text-blue-700",
    amber: "bg-amber-50 text-amber-800",
    green: "bg-emerald-50 text-emerald-700",
    red: "bg-red-50 text-red-700"
  };
  return <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", tones[tone])}>{children}</span>;
}

export function PlatformTenantConsole() {
  const [session, setSession] = useState<SessionState | null>(null);
  const [view, setView] = useState<ViewKey>("registrations");
  const [registrations, setRegistrations] = useState<PlatformRegistration[]>([]);
  const [tenants, setTenants] = useState<PlatformTenant[]>([]);
  const [registrationSearch, setRegistrationSearch] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [loadingPlatformData, setLoadingPlatformData] = useState(false);
  const [actionId, setActionId] = useState<string | null>(null);
  const [platformError, setPlatformError] = useState<string | null>(null);
  const [lifecycleTenantId, setLifecycleTenantId] = useState("");
  const [lifecycleStatus, setLifecycleStatus] = useState("SUSPENDED");
  const [lifecycleReason, setLifecycleReason] = useState("");
  const [servicePlans, setServicePlans] = useState<ServicePlan[]>([]);
  const [planCode, setPlanCode] = useState("");
  const [planName, setPlanName] = useState("");
  const [serviceTenantId, setServiceTenantId] = useState("");
  const [servicePlanId, setServicePlanId] = useState("");
  const [limitMetricKey, setLimitMetricKey] = useState("");
  const [limitMaxValue, setLimitMaxValue] = useState("");
  const [closures, setClosures] = useState<PlatformClosure[]>([]);
  const [supportRequests, setSupportRequests] = useState<PlatformSupportRequest[]>([]);
  const [supportPrincipals, setSupportPrincipals] = useState<SupportPrincipal[]>([]);
  const [supportPrincipalId, setSupportPrincipalId] = useState("");
  const [supportGrantDuration, setSupportGrantDuration] = useState("30");

  useEffect(() => {
    setSession(readSession());
  }, []);

  const hasPlatformRole = Boolean(session?.user?.platformRole);
  const isPlatformAdmin = session?.user?.platformRole === "PLATFORM_ADMIN";

  async function loadPlatformData() {
    if (!hasPlatformRole) return;
    setLoadingPlatformData(true);
    setPlatformError(null);
    try {
      const [registrationResponse, tenantResponse] = await Promise.all([
        apiFetch<PlatformRegistration[]>("/platform/tenant-registrations"),
        apiFetch<PlatformTenant[]>("/platform/tenants")
      ]);
      setRegistrations(registrationResponse.data);
      setTenants(tenantResponse.data);
      setLifecycleTenantId((current) => current || tenantResponse.data[0]?.id || "");
      setServiceTenantId((current) => current || tenantResponse.data[0]?.id || "");
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể tải dữ liệu quản trị nền tảng.");
    } finally {
      setLoadingPlatformData(false);
    }
  }

  async function transitionTenant() {
    if (!lifecycleTenantId || !lifecycleReason.trim()) {
      setPlatformError("Chọn tenant và nhập reason trước khi chuyển trạng thái.");
      return;
    }
    if (!window.confirm(`Chuyển tenant sang ${lifecycleStatus}?`)) return;
    setActionId(lifecycleTenantId);
    setPlatformError(null);
    try {
      await apiFetch(`/platform/tenants/${lifecycleTenantId}/transitions`, {
        method: "POST",
        body: JSON.stringify({ toStatus: lifecycleStatus, reason: lifecycleReason.trim() })
      });
      setLifecycleReason("");
      await loadPlatformData();
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể chuyển trạng thái tenant.");
    } finally {
      setActionId(null);
    }
  }

  useEffect(() => {
    void loadPlatformData();
    // Platform role is the authorization boundary for this surface; tenant context is intentionally irrelevant here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasPlatformRole]);

  useEffect(() => {
    if (!isPlatformAdmin) return;
    if (view === "service") void loadServiceGovernance();
    if (view === "lifecycle" || view === "support") void loadGovernanceQueues();
  }, [view, isPlatformAdmin]);

  async function loadServiceGovernance() {
    setPlatformError(null);
    try {
      const response = await apiFetch<ServicePlan[]>("/platform/service-plans");
      setServicePlans(response.data);
      setServicePlanId((current) => current || response.data[0]?.id || "");
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể tải service plans.");
    }
  }

  async function createServicePlan() {
    if (!planCode.trim() || !planName.trim()) return;
    setActionId("service-plan-create");
    setPlatformError(null);
    try {
      const response = await apiFetch<ServicePlan>("/platform/service-plans", {
        method: "POST",
        body: JSON.stringify({ code: planCode.trim().toUpperCase(), name: planName.trim() })
      });
      setPlanCode("");
      setPlanName("");
      setServicePlanId(response.data.id);
      await loadServiceGovernance();
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể tạo service plan.");
    } finally {
      setActionId(null);
    }
  }

  async function upsertServiceLimit() {
    if (!servicePlanId || !limitMetricKey.trim() || !limitMaxValue) return;
    setActionId("service-limit");
    setPlatformError(null);
    try {
      await apiFetch(`/platform/service-plans/${servicePlanId}/limits`, {
        method: "PUT",
        body: JSON.stringify({ metricKey: limitMetricKey.trim(), maxValue: Number(limitMaxValue), unit: "count" })
      });
      setLimitMetricKey("");
      setLimitMaxValue("");
      await loadServiceGovernance();
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể cập nhật plan limit.");
    } finally {
      setActionId(null);
    }
  }

  async function assignServicePlan() {
    if (!serviceTenantId || !servicePlanId) return;
    setActionId("service-assign");
    setPlatformError(null);
    try {
      await apiFetch(`/platform/tenants/${serviceTenantId}/service`, {
        method: "POST",
        body: JSON.stringify({ planId: servicePlanId, status: "ACTIVE" })
      });
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể gán service plan cho tenant.");
    } finally {
      setActionId(null);
    }
  }

  async function loadGovernanceQueues() {
    setPlatformError(null);
    try {
      const [closureResponse, supportResponse, principalResponse] = await Promise.all([
        apiFetch<PlatformClosure[]>("/platform/tenant-closures"),
        apiFetch<PlatformSupportRequest[]>("/platform/support-requests"),
        apiFetch<SupportPrincipal[]>("/platform/support-principals")
      ]);
      setClosures(closureResponse.data);
      setSupportRequests(supportResponse.data);
      setSupportPrincipals(principalResponse.data);
      setSupportPrincipalId((current) => current || principalResponse.data[0]?.id || "");
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể tải close/support queues.");
    }
  }

  async function decideClosure(closure: PlatformClosure, status: "APPROVED" | "REJECTED") {
    const note = window.prompt(status === "APPROVED" ? "Ghi chú phê duyệt closure" : "Lý do từ chối closure");
    if (!note?.trim()) return;
    setActionId(closure.id);
    setPlatformError(null);
    try {
      await apiFetch(`/platform/tenants/${closure.tenantId}/closure-requests/${closure.id}/decision`, {
        method: "POST",
        body: JSON.stringify({ status, note: note.trim() })
      });
      await loadGovernanceQueues();
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể review closure request.");
    } finally {
      setActionId(null);
    }
  }

  async function grantSupport(item: PlatformSupportRequest) {
    if (!supportPrincipalId) return;
    setActionId(item.id);
    setPlatformError(null);
    try {
      await apiFetch(`/platform/tenants/${item.tenantId}/support-requests/${item.id}/grant`, {
        method: "POST",
        body: JSON.stringify({
          platformUserId: supportPrincipalId,
          scopes: item.requestedScopes,
          durationMinutes: Math.min(Number(supportGrantDuration), item.requestedDurationMinutes)
        })
      });
      await loadGovernanceQueues();
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể cấp support grant.");
    } finally {
      setActionId(null);
    }
  }

  async function rejectSupport(item: PlatformSupportRequest) {
    const reviewNote = window.prompt("Lý do từ chối support request");
    if (!reviewNote?.trim()) return;
    setActionId(item.id);
    setPlatformError(null);
    try {
      await apiFetch(`/platform/tenants/${item.tenantId}/support-requests/${item.id}/reject`, {
        method: "POST",
        body: JSON.stringify({ reviewNote: reviewNote.trim() })
      });
      await loadGovernanceQueues();
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể từ chối support request.");
    } finally {
      setActionId(null);
    }
  }

  async function revokeSupport(item: PlatformSupportRequest) {
    if (!item.grant || !window.confirm("Thu hồi support grant này ngay lập tức?")) return;
    setActionId(item.id);
    setPlatformError(null);
    try {
      await apiFetch(`/platform/tenants/${item.tenantId}/support-grants/${item.grant.id}/revoke`, { method: "POST" });
      await loadGovernanceQueues();
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể thu hồi support grant.");
    } finally {
      setActionId(null);
    }
  }

  async function reviewRegistration(id: string, action: "request-changes" | "reject" | "approve") {
    let reviewNote: string | undefined;
    if (action === "approve") {
      if (!window.confirm("Phê duyệt hồ sơ và khởi tạo tenant trong một transaction?")) return;
    } else {
      const promptLabel = action === "reject" ? "Lý do từ chối" : "Nội dung yêu cầu bổ sung";
      const input = window.prompt(promptLabel);
      if (input === null) return;
      if (!input.trim()) {
        setPlatformError("Review note là bắt buộc cho yêu cầu bổ sung hoặc từ chối.");
        return;
      }
      reviewNote = input.trim();
    }

    setActionId(id);
    setPlatformError(null);
    try {
      await apiFetch(`/platform/tenant-registrations/${id}/${action}`, {
        method: "POST",
        body: JSON.stringify({ reviewNote })
      });
      await loadPlatformData();
    } catch (error) {
      setPlatformError(error instanceof Error ? error.message : "Không thể cập nhật hồ sơ.");
    } finally {
      setActionId(null);
    }
  }

  const visibleRegistrations = registrations.filter((registration) => {
    const query = registrationSearch.trim().toLowerCase();
    const matchesStatus = !registrationStatus || registration.status === registrationStatus;
    const matchesQuery =
      !query ||
      registration.proposedName.toLowerCase().includes(query) ||
      registration.proposedSlug.toLowerCase().includes(query) ||
      registration.applicant.email.toLowerCase().includes(query) ||
      registration.applicant.fullName.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Platform administration</span>
          {hasPlatformRole ? <StatusPill tone="green">{session?.user?.platformRole}</StatusPill> : <StatusPill tone="amber">Chưa có platform role trong session</StatusPill>}
        </div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">Quản trị tenant cấp nền tảng</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Bề mặt dành cho xử lý hồ sơ đăng ký, provisioning, danh mục tenant, vòng đời và hỗ trợ có kiểm soát. Platform Admin không mặc nhiên có quyền đọc dữ liệu nghiệp vụ nội bộ của tenant.
        </p>
      </div>

      {!hasPlatformRole ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-start gap-3">
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
            <div>
              <h2 className="text-sm font-semibold text-amber-950">Không tải dữ liệu quản trị nền tảng</h2>
              <p className="mt-1 text-sm leading-6 text-amber-900">
                Session hiện tại không có <code className="font-mono">platformRole</code>. Giao diện contract vẫn được hiển thị để hoàn thiện surface, nhưng không gọi API tenant cấp nền tảng và không dùng dữ liệu giả.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="self-start rounded-2xl border border-slate-200 bg-white p-2 lg:sticky lg:top-24">
          <nav className="space-y-1" aria-label="Platform tenant administration">
            {views.map((item) => {
              const Icon = item.icon;
              const active = view === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setView(item.key)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition",
                    active ? "bg-blue-50 text-blue-800" : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span className={cn("mt-0.5 block font-mono text-[11px]", active ? "text-blue-700" : "text-slate-400")}>{item.uc}</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 space-y-5">
          {view === "registrations" ? (
            <>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Hồ sơ đăng ký tổ chức</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Tiếp nhận, phân công, thẩm định, yêu cầu bổ sung, phê duyệt hoặc từ chối với lý do có thể truy vết.</p>
              </div>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-950">Bộ lọc hồ sơ</h3>
                      <p className="mt-1 text-xs text-slate-500">Dữ liệu lấy trực tiếp từ Platform Tenant Registration API.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <StatusPill tone="slate">Draft</StatusPill>
                      <StatusPill tone="blue">Submitted</StatusPill>
                      <StatusPill tone="amber">In review</StatusPill>
                      <StatusPill tone="green">Approved</StatusPill>
                      <StatusPill tone="red">Rejected</StatusPill>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-[1fr_12rem_auto]">
                    <label className="relative">
                      <span className="sr-only">Tìm hồ sơ</span>
                      <Search className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" aria-hidden="true" />
                      <Input
                        className="pl-9"
                        value={registrationSearch}
                        onChange={(event) => setRegistrationSearch(event.target.value)}
                        placeholder="Tên tổ chức, slug, người đăng ký..."
                      />
                    </label>
                    <select
                      className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-700"
                      aria-label="Trạng thái hồ sơ"
                      value={registrationStatus}
                      onChange={(event) => setRegistrationStatus(event.target.value)}
                    >
                      <option value="">Tất cả trạng thái</option>
                      <option value="SUBMITTED">Submitted</option>
                      <option value="IN_REVIEW">In review</option>
                      <option value="APPROVED">Approved</option>
                      <option value="REJECTED">Rejected</option>
                      <option value="WITHDRAWN">Withdrawn</option>
                    </select>
                    <Button variant="secondary" onClick={() => void loadPlatformData()} disabled={loadingPlatformData || !hasPlatformRole}>
                      {loadingPlatformData ? "Đang tải..." : "Làm mới"}
                    </Button>
                  </div>
                  {platformError ? <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">{platformError}</p> : null}
                  <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                        <tr>
                          <th className="px-3 py-3">Tổ chức</th>
                          <th className="px-3 py-3">Applicant</th>
                          <th className="px-3 py-3">Submitted</th>
                          <th className="px-3 py-3">Status</th>
                          <th className="px-3 py-3">Review</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {visibleRegistrations.map((registration) => (
                          <tr key={registration.id} className="align-top">
                            <td className="px-3 py-4">
                              <div className="font-medium text-slate-950">{registration.proposedName}</div>
                              <code className="mt-1 block text-xs text-slate-500">{registration.proposedSlug}</code>
                            </td>
                            <td className="px-3 py-4 text-slate-700">
                              <div>{registration.applicant.fullName}</div>
                              <div className="text-xs text-slate-500">{registration.applicant.email}</div>
                            </td>
                            <td className="px-3 py-4 text-slate-600">{new Date(registration.submittedAt).toLocaleString("vi-VN")}</td>
                            <td className="px-3 py-4"><StatusPill tone={registration.status === "APPROVED" ? "green" : registration.status === "REJECTED" ? "red" : registration.status === "IN_REVIEW" ? "amber" : "blue"}>{registration.status}</StatusPill></td>
                            <td className="px-3 py-4">
                              {registration.status === "SUBMITTED" || registration.status === "IN_REVIEW" ? (
                                <div className="flex flex-wrap gap-2">
                                  <Button className="min-h-9 px-3" variant="secondary" disabled={actionId === registration.id} onClick={() => void reviewRegistration(registration.id, "request-changes")}>Yêu cầu bổ sung</Button>
                                  <Button className="min-h-9 px-3" variant="secondary" disabled={actionId === registration.id} onClick={() => void reviewRegistration(registration.id, "reject")}>Từ chối</Button>
                                  {isPlatformAdmin ? <Button className="min-h-9 px-3" disabled={actionId === registration.id} onClick={() => void reviewRegistration(registration.id, "approve")}>Phê duyệt</Button> : null}
                                </div>
                              ) : (
                                <div className="max-w-xs text-xs leading-5 text-slate-500">
                                  {registration.reviewNote || (registration.createdTenantId ? `Tenant: ${registration.createdTenantId}` : "Đã kết thúc review")}
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                        {!loadingPlatformData && visibleRegistrations.length === 0 ? (
                          <tr><td className="px-3 py-8 text-center text-slate-500" colSpan={5}><ClipboardCheck className="mx-auto mb-2 h-6 w-6 text-slate-400" />Không có hồ sơ phù hợp.</td></tr>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Review API đã hoạt động</h3></CardHeader>
                <CardContent className="grid gap-3 md:grid-cols-2">
                  {["GET danh sách + chi tiết hồ sơ", "Request changes có review note", "Reject có audit", "Approve chỉ dành cho Platform Admin", "Provisioning chạy transaction", "Applicant có thể switch vào tenant sau approve"].map((item) => (
                    <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-700" key={item}>{item}</div>
                  ))}
                </CardContent>
              </Card>
            </>
          ) : null}

          {view === "catalog" ? (
            <>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Danh mục tenant</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Tra cứu tenant ở cấp quản trị mà không biến danh mục tenant thành cổng đọc dữ liệu nội bộ.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  ["Active", "Tenant đang hoạt động", "green"],
                  ["Suspended", "Tạm khóa nghiệp vụ", "amber"],
                  ["Archived", "Được lưu giữ", "slate"],
                  ["Registration", "Pending/Rejected nằm ở hồ sơ", "blue"]
                ].map(([name, description, tone]) => (
                  <Card key={name}><CardContent><StatusPill tone={tone as "slate" | "blue" | "amber" | "green"}>{name}</StatusPill><p className="mt-3 text-sm text-slate-600">{description}</p></CardContent></Card>
                ))}
              </div>
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Tenant catalog</h3></CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-3 py-3">Tenant</th><th className="px-3 py-3">Slug</th><th className="px-3 py-3">Status</th><th className="px-3 py-3">Owner invariant</th><th className="px-3 py-3">Updated</th><th className="px-3 py-3">Action</th></tr></thead>
                      <tbody className="divide-y divide-slate-100">
                        {tenants.map((tenant) => (
                          <tr key={tenant.id}>
                            <td className="px-3 py-4 font-medium text-slate-950">{tenant.name}</td>
                            <td className="px-3 py-4 font-mono text-xs text-slate-600">{tenant.slug}</td>
                            <td className="px-3 py-4"><StatusPill tone={tenant.status === "ACTIVE" ? "green" : tenant.status === "SUSPENDED" ? "amber" : "slate"}>{tenant.status}</StatusPill></td>
                            <td className="px-3 py-4 text-slate-700">{tenant.activeOwnerCount >= 1 ? `${tenant.activeOwnerCount} active owner` : "Thiếu owner"}</td>
                            <td className="px-3 py-4 text-slate-600">{new Date(tenant.updatedAt).toLocaleString("vi-VN")}</td>
                            <td className="px-3 py-4 text-xs text-slate-500">Read-only baseline</td>
                          </tr>
                        ))}
                        {!loadingPlatformData && tenants.length === 0 ? <tr><td className="px-3 py-8 text-center text-slate-500" colSpan={6}>Chưa có tenant.</td></tr> : null}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : null}

          {view === "provisioning" ? (
            <>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Khởi tạo tenant</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Provisioning là một đơn vị nghiệp vụ thống nhất: tenant + membership người đăng ký + Owner + role/permission mặc định + cấu hình nền + audit.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  ["01", "Validate hồ sơ", "Approved, slug chuẩn hóa và chưa được sử dụng."],
                  ["02", "Tạo tenant", "ID duy nhất, trạng thái khởi tạo hợp lệ."],
                  ["03", "Tạo membership", "Liên kết applicant vào đúng tenant."],
                  ["04", "Gán Owner", "Bảo đảm tenant có Owner Active đầu tiên."],
                  ["05", "Seed nền tảng", "Role/permission/module/config mặc định dùng chung."],
                  ["06", "Commit + audit", "Tất cả thành công hoặc rollback toàn bộ."]
                ].map(([step, title, description]) => (
                  <div className="rounded-xl border border-slate-200 bg-white p-4" key={step}>
                    <div className="font-mono text-xs font-semibold text-blue-700">{step}</div>
                    <h3 className="mt-2 font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <div className="flex items-start gap-3"><Shield className="mt-0.5 h-5 w-5 text-red-700" aria-hidden="true" /><p className="text-sm leading-6 text-red-900"><strong>Không cho phép partial provisioning.</strong> Nếu tạo Owner hoặc default roles thất bại, UI phải nhận một lỗi giao dịch và tenant không được xuất hiện như một tenant sử dụng được.</p></div>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                Endpoint <code className="font-mono">POST /platform/tenant-registrations/:id/approve</code> hiện điều phối toàn bộ provisioning transaction server-side. Hành động Phê duyệt nằm ở tab Hồ sơ đăng ký.
              </div>
            </>
          ) : null}

          {view === "service" ? (
            <>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Dịch vụ và hạn mức tenant</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Quản lý catalog plan, limit và subscription của tenant độc lập với role/permission.</p>
              </div>
              {platformError ? <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{platformError}</div> : null}
              <div className="grid gap-4 xl:grid-cols-2">
                <Card>
                  <CardHeader><h3 className="font-semibold text-slate-950">Tạo service plan</h3></CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="grid gap-2 text-sm font-medium text-slate-800">Code<Input value={planCode} onChange={(event) => setPlanCode(event.target.value)} placeholder="STANDARD" /></label>
                      <label className="grid gap-2 text-sm font-medium text-slate-800">Tên plan<Input value={planName} onChange={(event) => setPlanName(event.target.value)} placeholder="Standard" /></label>
                    </div>
                    <Button className="mt-4" disabled={!isPlatformAdmin || actionId === "service-plan-create" || !planCode.trim() || !planName.trim()} onClick={() => void createServicePlan()}>Tạo plan</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><h3 className="font-semibold text-slate-950">Gán plan cho tenant</h3></CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="grid gap-2 text-sm font-medium text-slate-800">Tenant<select className="h-11 rounded-md border border-slate-300 bg-white px-3" value={serviceTenantId} onChange={(event) => setServiceTenantId(event.target.value)}><option value="">Chọn tenant...</option>{tenants.map((tenant) => <option key={tenant.id} value={tenant.id}>{tenant.name}</option>)}</select></label>
                      <label className="grid gap-2 text-sm font-medium text-slate-800">Plan<select className="h-11 rounded-md border border-slate-300 bg-white px-3" value={servicePlanId} onChange={(event) => setServicePlanId(event.target.value)}><option value="">Chọn plan...</option>{servicePlans.filter((plan) => plan.isActive).map((plan) => <option key={plan.id} value={plan.id}>{plan.name} ({plan.code})</option>)}</select></label>
                    </div>
                    <Button className="mt-4" disabled={!isPlatformAdmin || actionId === "service-assign" || !serviceTenantId || !servicePlanId} onClick={() => void assignServicePlan()}>Gán plan</Button>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Cấu hình limit</h3></CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-3">
                    <label className="grid gap-2 text-sm font-medium text-slate-800">Plan<select className="h-11 rounded-md border border-slate-300 bg-white px-3" value={servicePlanId} onChange={(event) => setServicePlanId(event.target.value)}><option value="">Chọn plan...</option>{servicePlans.map((plan) => <option key={plan.id} value={plan.id}>{plan.name}</option>)}</select></label>
                    <label className="grid gap-2 text-sm font-medium text-slate-800">Metric key<Input value={limitMetricKey} onChange={(event) => setLimitMetricKey(event.target.value)} placeholder="members.active" /></label>
                    <label className="grid gap-2 text-sm font-medium text-slate-800">Giới hạn<Input type="number" min="0" value={limitMaxValue} onChange={(event) => setLimitMaxValue(event.target.value)} placeholder="250" /></label>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button disabled={!isPlatformAdmin || actionId === "service-limit" || !servicePlanId || !limitMetricKey.trim() || !limitMaxValue} onClick={() => void upsertServiceLimit()}>Lưu limit</Button>
                    <Button variant="secondary" onClick={() => void loadServiceGovernance()}>Làm mới</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Service plans</h3></CardHeader>
                <CardContent className="space-y-3">
                  {servicePlans.map((plan) => (
                    <div key={plan.id} className="rounded-lg bg-slate-50 p-3">
                      <div className="flex flex-wrap items-center justify-between gap-2"><div><span className="font-semibold text-slate-950">{plan.name}</span> <code className="ml-2 text-xs text-slate-500">{plan.code}</code></div><StatusPill tone={plan.isActive ? "green" : "slate"}>{plan.isActive ? "ACTIVE" : "INACTIVE"}</StatusPill></div>
                      <div className="mt-2 flex flex-wrap gap-2">{plan.limits.map((limit) => <span key={limit.id} className="rounded bg-white px-2 py-1 font-mono text-xs text-slate-600">{limit.metricKey}: {limit.maxValue} {limit.unit}</span>)}</div>
                    </div>
                  ))}
                  {servicePlans.length === 0 ? <p className="text-sm text-slate-500">Chưa có service plan.</p> : null}
                </CardContent>
              </Card>
            </>
          ) : null}

          {view === "lifecycle" ? (
            <>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Vòng đời tenant và đóng dữ liệu</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Mọi chuyển trạng thái phải có reason, actor và lifecycle/audit event. Không dùng delete trực tiếp cho thao tác đóng tenant.</p>
              </div>
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">State transition matrix</h3></CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900"><CheckCircle2 className="mb-2 h-4 w-4" />Active → Suspended</div>
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900"><LockKeyhole className="mb-2 h-4 w-4" />Suspended → Active</div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800"><Archive className="mb-2 h-4 w-4" />Active → Archived</div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800"><Archive className="mb-2 h-4 w-4" />Suspended → Archived</div>
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900"><TriangleAlert className="mb-2 h-4 w-4" />Restore archived: kiểm tra retention + invariants</div>
                    <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-900"><Shield className="mb-2 h-4 w-4" />Physical delete: privileged policy only</div>
                  </div>
                </CardContent>
              </Card>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-950">Chuyển trạng thái tenant</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-slate-800">
                    Tenant
                    <select value={lifecycleTenantId} onChange={(event) => setLifecycleTenantId(event.target.value)} className="h-11 rounded-md border border-slate-300 bg-white px-3 text-slate-700">
                      <option value="">Chọn tenant...</option>
                      {tenants.map((tenant) => <option key={tenant.id} value={tenant.id}>{tenant.name} ({tenant.status})</option>)}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-slate-800">
                    Trạng thái đích
                    <select value={lifecycleStatus} onChange={(event) => setLifecycleStatus(event.target.value)} className="h-11 rounded-md border border-slate-300 bg-white px-3 text-slate-700">
                      <option value="ACTIVE">ACTIVE</option>
                      <option value="SUSPENDED">SUSPENDED</option>
                      <option value="ARCHIVED">ARCHIVED</option>
                    </select>
                  </label>
                </div>
                <label className="mt-4 grid gap-2 text-sm font-medium text-slate-800">Reason<Input value={lifecycleReason} onChange={(event) => setLifecycleReason(event.target.value)} placeholder="Lý do chuyển trạng thái..." /></label>
                <Button className="mt-4" disabled={!isPlatformAdmin || actionId === lifecycleTenantId} variant="destructive" onClick={() => void transitionTenant()}>Xác nhận transition</Button>
                {!isPlatformAdmin ? <p className="mt-3 text-xs text-slate-500">Platform Reviewer chỉ được xem lịch sử; mutation lifecycle yêu cầu PLATFORM_ADMIN.</p> : null}
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                <code className="font-mono">POST /platform/tenants/:tenantId/transitions</code> hiện kiểm tra transition hợp lệ, active-owner invariant khi kích hoạt lại, đồng thời ghi TenantLifecycleEvent và audit trong cùng transaction.
              </div>
              {isPlatformAdmin ? (
                <Card>
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="font-semibold text-slate-950">Closure queue</h3><p className="mt-1 text-xs text-slate-500">Review request đóng tenant; physical disposition vẫn là bước xử lý riêng.</p></div><Button variant="secondary" onClick={() => void loadGovernanceQueues()}>Làm mới</Button></div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {closures.map((closure) => (
                      <div key={closure.id} className="rounded-lg border border-slate-200 p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div><div className="font-semibold text-slate-950">{closure.tenant.name} <StatusPill tone={closure.status === "APPROVED" ? "green" : closure.status === "REJECTED" ? "red" : "amber"}>{closure.status}</StatusPill></div><div className="mt-1 text-sm text-slate-700">{closure.reason}</div><div className="mt-2 text-xs text-slate-500">Requester: {closure.requester.user.fullName} · scheduled {new Date(closure.scheduledFor).toLocaleString("vi-VN")}</div><div className="mt-1 text-xs text-slate-500">Exports: {closure.exportRequests.length ? closure.exportRequests.map((item) => `${item.format}:${item.status}`).join(" · ") : "chưa yêu cầu"}</div></div>
                          {closure.status === "REQUESTED" ? <div className="flex flex-wrap gap-2"><Button disabled={actionId === closure.id} onClick={() => void decideClosure(closure, "APPROVED")}>Phê duyệt</Button><Button variant="secondary" disabled={actionId === closure.id} onClick={() => void decideClosure(closure, "REJECTED")}>Từ chối</Button></div> : null}
                        </div>
                      </div>
                    ))}
                    {closures.length === 0 ? <p className="text-sm text-slate-500">Không có closure request.</p> : null}
                  </CardContent>
                </Card>
              ) : null}
            </>
          ) : null}

          {view === "support" ? (
            <>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Hỗ trợ tenant có kiểm soát</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Thay thế mô hình “Platform Admin thấy mọi thứ” bằng grant tạm thời, có mục đích và có thể thu hồi.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card><CardContent><div className="flex items-start gap-3"><LifeBuoy className="mt-0.5 h-5 w-5 text-blue-700" /><div><h3 className="font-semibold">Support request</h3><p className="mt-2 text-sm leading-6 text-slate-600">Tenant, requester, issue, requested scope, resources và thời hạn mong muốn.</p></div></div></CardContent></Card>
                <Card><CardContent><div className="flex items-start gap-3"><Shield className="mt-0.5 h-5 w-5 text-blue-700" /><div><h3 className="font-semibold">Support grant</h3><p className="mt-2 text-sm leading-6 text-slate-600">Approver, granted scopes, expiresAt, revokedAt và correlation/audit identifier.</p></div></div></CardContent></Card>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                Không cung cấp nút “impersonate Owner”. Support access không tạo membership Owner/Tenant Admin và không được kéo dài vô thời hạn.
              </div>
              {!isPlatformAdmin ? <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">Support grant mutation yêu cầu PLATFORM_ADMIN.</div> : null}
              {isPlatformAdmin ? (
                <>
                  {platformError ? <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{platformError}</div> : null}
                  <Card>
                    <CardHeader><h3 className="font-semibold text-slate-950">Grant defaults</h3></CardHeader>
                    <CardContent>
                      <div className="grid gap-3 md:grid-cols-2">
                        <label className="grid gap-2 text-sm font-medium text-slate-800">Platform support principal<select className="h-11 rounded-md border border-slate-300 bg-white px-3" value={supportPrincipalId} onChange={(event) => setSupportPrincipalId(event.target.value)}><option value="">Chọn principal...</option>{supportPrincipals.map((principal) => <option key={principal.id} value={principal.id}>{principal.fullName} — {principal.platformRole}</option>)}</select></label>
                        <label className="grid gap-2 text-sm font-medium text-slate-800">Thời hạn grant<select className="h-11 rounded-md border border-slate-300 bg-white px-3" value={supportGrantDuration} onChange={(event) => setSupportGrantDuration(event.target.value)}><option value="30">30 phút</option><option value="60">60 phút</option><option value="120">120 phút</option><option value="240">240 phút</option></select></label>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader><div className="flex flex-wrap items-center justify-between gap-3"><h3 className="font-semibold text-slate-950">Support request queue</h3><Button variant="secondary" onClick={() => void loadGovernanceQueues()}>Làm mới</Button></div></CardHeader>
                    <CardContent className="space-y-3">
                      {supportRequests.map((item) => (
                        <div key={item.id} className="rounded-lg border border-slate-200 p-4">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div><div className="font-semibold text-slate-950">{item.tenant.name} <StatusPill tone={item.status === "APPROVED" ? "green" : item.status === "REJECTED" || item.status === "CLOSED" ? "slate" : "amber"}>{item.status}</StatusPill></div><p className="mt-1 text-sm text-slate-700">{item.reason}</p><p className="mt-2 font-mono text-xs text-slate-500">{item.requestedScopes.join(", ")}</p><p className="mt-1 text-xs text-slate-500">Requester: {item.requester.user.fullName} · requested {item.requestedDurationMinutes} phút</p>{item.grant ? <p className="mt-1 text-xs text-slate-500">Grant: {item.grant.scopes.join(", ")} · hết hạn {new Date(item.grant.expiresAt).toLocaleString("vi-VN")}{item.grant.revokedAt ? " · revoked" : ""}</p> : null}</div>
                            <div className="flex flex-wrap gap-2">{item.status === "OPEN" ? <><Button disabled={!supportPrincipalId || actionId === item.id} onClick={() => void grantSupport(item)}>Cấp grant</Button><Button variant="secondary" disabled={actionId === item.id} onClick={() => void rejectSupport(item)}>Từ chối</Button></> : null}{item.grant && !item.grant.revokedAt ? <Button variant="secondary" disabled={actionId === item.id} onClick={() => void revokeSupport(item)}>Thu hồi</Button> : null}</div>
                          </div>
                        </div>
                      ))}
                      {supportRequests.length === 0 ? <p className="text-sm text-slate-500">Không có support request.</p> : null}
                    </CardContent>
                  </Card>
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
