"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Activity,
  Archive,
  Boxes,
  Building2,
  CheckCircle2,
  Crown,
  Globe2,
  LifeBuoy,
  LoaderCircle,
  LockKeyhole,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  TriangleAlert
} from "lucide-react";
import { apiFetch } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CurrentTenant = {
  id: string;
  name: string;
  slug: string;
  status: "ACTIVE" | "SUSPENDED" | "ARCHIVED" | string;
  brandColor: string;
  createdAt: string;
  updatedAt: string;
  tenantBranding?: {
    id: string;
    displayName: string;
    primaryColor?: string | null;
    secondaryColor?: string | null;
  } | null;
  modules?: Array<{
    id: string;
    key: string;
    isEnabled: boolean;
    status?: string;
    config?: unknown;
  }>;
};

type TenantModule = {
  key: string;
  name: string;
  requiredPermissions: string[];
  isEnabled: boolean;
};

type TenantOwner = {
  id: string;
  membershipId: string;
  effectiveFrom: string;
  title?: string | null;
  user: { id: string; email: string; fullName: string };
};

type TenantMember = {
  id: string;
  status: string;
  user: { id: string; email: string; fullName: string; isActive: boolean };
};

type CustomDomain = {
  id: string;
  hostname: string;
  verificationStatus: string;
  verifiedAt?: string | null;
  createdAt: string;
  verificationChallenges?: Array<{
    id: string;
    recordName: string;
    expectedValue: string;
    status: string;
    expiresAt: string;
    verifiedAt?: string | null;
  }>;
};

type ServiceOverview = {
  subscription: {
    id: string;
    status: string;
    serviceContactEmail?: string | null;
    billingContactEmail?: string | null;
    plan: {
      id: string;
      code: string;
      name: string;
      limits: Array<{ id: string; metricKey: string; maxValue: number; unit: string }>;
    };
  } | null;
  usage: Array<{ id: string; metricKey: string; periodKey: string; usedValue: number; measuredAt: string }>;
};

type RetentionPolicy = {
  id: string;
  gracePeriodDays: number;
  retentionDays: number;
  disposition: string;
  exportBeforeDisposition: boolean;
};

type ClosureRequest = {
  id: string;
  status: string;
  reason: string;
  requestedAt: string;
  scheduledFor: string;
  cancelledAt?: string | null;
};

type DataExportRequest = {
  id: string;
  closureRequestId?: string | null;
  status: string;
  format: string;
  requestedAt: string;
};

type SupportRequest = {
  id: string;
  reason: string;
  requestedScopes: string[];
  requestedDurationMinutes: number;
  status: string;
  createdAt: string;
  grant?: {
    id: string;
    platformUserId: string;
    scopes: string[];
    startsAt: string;
    expiresAt: string;
    revokedAt?: string | null;
  } | null;
};

type SectionKey = "overview" | "modules" | "ownership" | "service" | "domains" | "lifecycle" | "support";

type CapabilityState = "live" | "partial" | "contract";

const sections: Array<{
  key: SectionKey;
  label: string;
  description: string;
  icon: typeof Building2;
}> = [
  { key: "overview", label: "Tổng quan", description: "Ngữ cảnh và trạng thái tenant", icon: Building2 },
  { key: "modules", label: "Mô-đun", description: "Khả năng được bật theo tenant", icon: Boxes },
  { key: "ownership", label: "Quyền sở hữu", description: "Owner và bất biến quyền sở hữu", icon: Crown },
  { key: "service", label: "Dịch vụ & hạn mức", description: "Gói, usage và liên hệ dịch vụ", icon: ReceiptText },
  { key: "domains", label: "Tên miền", description: "Subdomain, custom domain, xác minh DNS", icon: Globe2 },
  { key: "lifecycle", label: "Vòng đời & dữ liệu", description: "Suspend, archive, restore, close", icon: Archive },
  { key: "support", label: "Hỗ trợ có kiểm soát", description: "Quyền hỗ trợ tạm thời có audit", icon: LifeBuoy }
];

const capabilities: Array<{
  id: string;
  title: string;
  owner: string;
  state: CapabilityState;
  surface: string;
}> = [
  { id: "UC-TENANT-01", title: "Đăng ký tổ chức", owner: "Người đăng ký tổ chức", state: "partial", surface: "/organizations/new" },
  { id: "UC-TENANT-02", title: "Xử lý hồ sơ đăng ký", owner: "Platform Admin", state: "live", surface: "/platform/tenants" },
  { id: "UC-TENANT-03", title: "Khởi tạo tenant", owner: "Platform Admin", state: "live", surface: "/platform/tenants" },
  { id: "UC-TENANT-04", title: "Quản trị danh mục tenant", owner: "Platform Admin", state: "partial", surface: "/platform/tenants" },
  { id: "UC-TENANT-05", title: "Quản lý vòng đời tenant", owner: "Platform Admin", state: "live", surface: "/platform/tenants" },
  { id: "UC-TENANT-06", title: "Quản lý quyền sở hữu", owner: "Tenant Owner", state: "live", surface: "/tenant" },
  { id: "UC-TENANT-07", title: "Dịch vụ và hạn mức", owner: "Owner / Platform Admin", state: "live", surface: "/tenant" },
  { id: "UC-TENANT-08", title: "Tên miền tenant", owner: "Tenant Owner", state: "live", surface: "/tenant" },
  { id: "UC-TENANT-09", title: "Đóng và xử lý dữ liệu", owner: "Owner / Platform Admin", state: "live", surface: "/tenant" },
  { id: "UC-TENANT-10", title: "Hỗ trợ quản trị có kiểm soát", owner: "Owner / Platform Admin", state: "live", surface: "/tenant" }
];

const statusMeta: Record<string, { label: string; className: string; description: string }> = {
  ACTIVE: {
    label: "Đang hoạt động",
    className: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    description: "Tenant được phép sử dụng các mô-đun đang bật theo quyền của membership."
  },
  SUSPENDED: {
    label: "Tạm khóa",
    className: "bg-amber-50 text-amber-800 ring-amber-200",
    description: "Không được tạo, cập nhật, phê duyệt hoặc xóa dữ liệu nghiệp vụ; dữ liệu vẫn được giữ lại."
  },
  ARCHIVED: {
    label: "Lưu trữ",
    className: "bg-slate-100 text-slate-700 ring-slate-200",
    description: "Tenant không còn vận hành thường xuyên; dữ liệu được giữ theo chính sách lưu trữ."
  }
};

function StatusBadge({ status }: { status: string }) {
  const meta = statusMeta[status] ?? {
    label: status,
    className: "bg-slate-100 text-slate-700 ring-slate-200",
    description: "Trạng thái tenant hiện hành."
  };
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset", meta.className)}>
      {meta.label}
    </span>
  );
}

function ReadinessBadge({ state }: { state: CapabilityState }) {
  const labels: Record<CapabilityState, { text: string; className: string }> = {
    live: { text: "Live", className: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
    partial: { text: "Một phần", className: "bg-amber-50 text-amber-800 ring-amber-200" },
    contract: { text: "UI contract", className: "bg-blue-50 text-blue-700 ring-blue-200" }
  };
  const item = labels[state];
  return <span className={cn("rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ring-inset", item.className)}>{item.text}</span>;
}

function DefinitionRow({ term, value, mono = false }: { term: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <div className="grid gap-1 border-t border-slate-100 py-3 first:border-t-0 sm:grid-cols-[12rem_1fr] sm:gap-4">
      <dt className="text-sm text-slate-500">{term}</dt>
      <dd className={cn("break-words text-sm font-medium text-slate-950", mono && "font-mono text-xs")}>{value}</dd>
    </div>
  );
}

function ContractNotice({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4">
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
        <div>
          <h3 className="text-sm font-semibold text-blue-950">{title}</h3>
          <div className="mt-1 text-sm leading-6 text-blue-900">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function TenantCenter() {
  const [section, setSection] = useState<SectionKey>("overview");
  const [tenant, setTenant] = useState<CurrentTenant | null>(null);
  const [modules, setModules] = useState<TenantModule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [savingModule, setSavingModule] = useState("");
  const [owners, setOwners] = useState<TenantOwner[]>([]);
  const [members, setMembers] = useState<TenantMember[]>([]);
  const [ownerTargetId, setOwnerTargetId] = useState("");
  const [ownershipBusy, setOwnershipBusy] = useState(false);
  const [domains, setDomains] = useState<CustomDomain[]>([]);
  const [domainInput, setDomainInput] = useState("");
  const [domainBusy, setDomainBusy] = useState(false);
  const [brandingColor, setBrandingColor] = useState("#2563eb");
  const [brandingBusy, setBrandingBusy] = useState(false);
  const [serviceOverview, setServiceOverview] = useState<ServiceOverview | null>(null);
  const [serviceContactEmail, setServiceContactEmail] = useState("");
  const [billingContactEmail, setBillingContactEmail] = useState("");
  const [serviceBusy, setServiceBusy] = useState(false);
  const [retentionPolicy, setRetentionPolicy] = useState<RetentionPolicy | null>(null);
  const [closureRequests, setClosureRequests] = useState<ClosureRequest[]>([]);
  const [dataExports, setDataExports] = useState<DataExportRequest[]>([]);
  const [closureReason, setClosureReason] = useState("");
  const [lifecycleBusy, setLifecycleBusy] = useState(false);
  const [supportRequests, setSupportRequests] = useState<SupportRequest[]>([]);
  const [supportReason, setSupportReason] = useState("");
  const [supportScope, setSupportScope] = useState("member:read");
  const [supportDuration, setSupportDuration] = useState("60");
  const [supportBusy, setSupportBusy] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [tenantResponse, modulesResponse] = await Promise.all([
        apiFetch<CurrentTenant>("/tenants/current"),
        apiFetch<TenantModule[]>("/modules")
      ]);
      setTenant(tenantResponse.data);
      setModules(modulesResponse.data);
      setBrandingColor(tenantResponse.data.tenantBranding?.primaryColor || tenantResponse.data.brandColor || "#2563eb");
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Không thể tải ngữ cảnh tenant.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (section === "ownership") void loadOwnership();
    if (section === "domains") void loadDomains();
    if (section === "service") void loadService();
    if (section === "lifecycle") void loadLifecycleData();
    if (section === "support") void loadSupportRequests();
  }, [section]);

  const enabledModules = useMemo(() => modules.filter((module) => module.isEnabled).length, [modules]);

  async function toggleModule(module: TenantModule) {
    setSavingModule(module.key);
    setActionError("");
    try {
      await apiFetch("/modules", {
        method: "PATCH",
        body: JSON.stringify({ key: module.key, isEnabled: !module.isEnabled })
      });
      setModules((current) =>
        current.map((item) => (item.key === module.key ? { ...item, isEnabled: !item.isEnabled } : item))
      );
    } catch (toggleError) {
      setActionError(toggleError instanceof Error ? toggleError.message : "Không thể thay đổi trạng thái mô-đun.");
    } finally {
      setSavingModule("");
    }
  }

  async function loadOwnership() {
    setActionError("");
    try {
      const [ownerResponse, memberResponse] = await Promise.all([
        apiFetch<TenantOwner[]>("/tenants/current/owners"),
        apiFetch<TenantMember[]>("/members?limit=100")
      ]);
      setOwners(ownerResponse.data);
      setMembers(memberResponse.data);
      setOwnerTargetId((current) => current || memberResponse.data.find((member) => member.status === "ACTIVE")?.id || "");
    } catch (loadError) {
      setActionError(loadError instanceof Error ? loadError.message : "Không thể tải ownership.");
    }
  }

  async function addOwner() {
    if (!ownerTargetId) return;
    setOwnershipBusy(true);
    setActionError("");
    try {
      await apiFetch("/tenants/current/owners", {
        method: "POST",
        body: JSON.stringify({ membershipId: ownerTargetId })
      });
      await loadOwnership();
    } catch (ownerError) {
      setActionError(ownerError instanceof Error ? ownerError.message : "Không thể bổ nhiệm Owner.");
    } finally {
      setOwnershipBusy(false);
    }
  }

  async function transferOwnership() {
    if (!ownerTargetId || !window.confirm("Chuyển quyền Owner hiện tại sang thành viên đã chọn?")) return;
    setOwnershipBusy(true);
    setActionError("");
    try {
      await apiFetch("/tenants/current/ownership/transfer", {
        method: "POST",
        body: JSON.stringify({ toMembershipId: ownerTargetId })
      });
      await loadOwnership();
    } catch (ownerError) {
      setActionError(ownerError instanceof Error ? ownerError.message : "Không thể chuyển quyền sở hữu.");
    } finally {
      setOwnershipBusy(false);
    }
  }

  async function revokeOwner(membershipId: string) {
    if (!window.confirm("Thu hồi quyền Owner của membership này?")) return;
    setOwnershipBusy(true);
    setActionError("");
    try {
      await apiFetch(`/tenants/current/owners/${membershipId}`, { method: "DELETE" });
      await loadOwnership();
    } catch (ownerError) {
      setActionError(ownerError instanceof Error ? ownerError.message : "Không thể thu hồi Owner.");
    } finally {
      setOwnershipBusy(false);
    }
  }

  async function saveBranding() {
    setBrandingBusy(true);
    setActionError("");
    try {
      await apiFetch("/tenants/current/branding", {
        method: "PATCH",
        body: JSON.stringify({ primaryColor: brandingColor })
      });
      await load();
    } catch (brandingError) {
      setActionError(brandingError instanceof Error ? brandingError.message : "Không thể cập nhật branding.");
    } finally {
      setBrandingBusy(false);
    }
  }

  async function loadDomains() {
    setActionError("");
    try {
      const response = await apiFetch<CustomDomain[]>("/tenants/current/domains");
      setDomains(response.data);
    } catch (domainError) {
      setActionError(domainError instanceof Error ? domainError.message : "Không thể tải custom domain.");
    }
  }

  async function addDomain() {
    if (!domainInput.trim()) return;
    setDomainBusy(true);
    setActionError("");
    try {
      await apiFetch("/tenants/current/domains", {
        method: "POST",
        body: JSON.stringify({ hostname: domainInput.trim() })
      });
      setDomainInput("");
      await loadDomains();
    } catch (domainError) {
      setActionError(domainError instanceof Error ? domainError.message : "Không thể thêm custom domain.");
    } finally {
      setDomainBusy(false);
    }
  }

  async function revokeDomain(id: string) {
    if (!window.confirm("Gỡ custom domain này khỏi tenant?")) return;
    setDomainBusy(true);
    setActionError("");
    try {
      await apiFetch(`/tenants/current/domains/${id}`, { method: "DELETE" });
      await loadDomains();
    } catch (domainError) {
      setActionError(domainError instanceof Error ? domainError.message : "Không thể gỡ custom domain.");
    } finally {
      setDomainBusy(false);
    }
  }

  async function issueDomainChallenge(id: string) {
    setDomainBusy(true);
    setActionError("");
    try {
      await apiFetch(`/tenants/current/domains/${id}/challenge`, { method: "POST" });
      await loadDomains();
    } catch (domainError) {
      setActionError(domainError instanceof Error ? domainError.message : "Không thể phát hành DNS challenge.");
    } finally {
      setDomainBusy(false);
    }
  }

  async function verifyDomain(id: string) {
    setDomainBusy(true);
    setActionError("");
    try {
      const response = await apiFetch<{ verified: boolean }>(`/tenants/current/domains/${id}/verify`, { method: "POST" });
      if (!response.data.verified) setActionError("Chưa tìm thấy TXT record đúng. DNS có thể chưa propagate.");
      await loadDomains();
    } catch (domainError) {
      setActionError(domainError instanceof Error ? domainError.message : "Không thể xác minh DNS.");
    } finally {
      setDomainBusy(false);
    }
  }

  async function loadService() {
    setActionError("");
    try {
      const response = await apiFetch<ServiceOverview>("/tenants/current/service");
      setServiceOverview(response.data);
      setServiceContactEmail(response.data.subscription?.serviceContactEmail || "");
      setBillingContactEmail(response.data.subscription?.billingContactEmail || "");
    } catch (serviceError) {
      setActionError(serviceError instanceof Error ? serviceError.message : "Không thể tải service profile.");
    }
  }

  async function saveServiceContacts() {
    setServiceBusy(true);
    setActionError("");
    try {
      await apiFetch("/tenants/current/service/contacts", {
        method: "PATCH",
        body: JSON.stringify({
          serviceContactEmail: serviceContactEmail || undefined,
          billingContactEmail: billingContactEmail || undefined
        })
      });
      await loadService();
    } catch (serviceError) {
      setActionError(serviceError instanceof Error ? serviceError.message : "Không thể cập nhật liên hệ dịch vụ.");
    } finally {
      setServiceBusy(false);
    }
  }

  async function loadLifecycleData() {
    setActionError("");
    try {
      const [policyResponse, closureResponse, exportResponse] = await Promise.all([
        apiFetch<RetentionPolicy>("/tenants/current/retention"),
        apiFetch<ClosureRequest[]>("/tenants/current/closure-requests"),
        apiFetch<DataExportRequest[]>("/tenants/current/data-exports")
      ]);
      setRetentionPolicy(policyResponse.data);
      setClosureRequests(closureResponse.data);
      setDataExports(exportResponse.data);
    } catch (lifecycleError) {
      setActionError(lifecycleError instanceof Error ? lifecycleError.message : "Không thể tải dữ liệu close/retention.");
    }
  }

  async function requestClosure() {
    if (!closureReason.trim() || !window.confirm("Tạo yêu cầu đóng tenant với grace period theo retention policy hiện tại?")) return;
    setLifecycleBusy(true);
    setActionError("");
    try {
      await apiFetch("/tenants/current/closure-requests", {
        method: "POST",
        body: JSON.stringify({ reason: closureReason.trim() })
      });
      setClosureReason("");
      await loadLifecycleData();
    } catch (lifecycleError) {
      setActionError(lifecycleError instanceof Error ? lifecycleError.message : "Không thể tạo yêu cầu đóng tenant.");
    } finally {
      setLifecycleBusy(false);
    }
  }

  async function cancelClosure(id: string) {
    if (!window.confirm("Hủy yêu cầu đóng tenant này trong grace period?")) return;
    setLifecycleBusy(true);
    setActionError("");
    try {
      await apiFetch(`/tenants/current/closure-requests/${id}/cancel`, { method: "POST" });
      await loadLifecycleData();
    } catch (lifecycleError) {
      setActionError(lifecycleError instanceof Error ? lifecycleError.message : "Không thể hủy yêu cầu đóng tenant.");
    } finally {
      setLifecycleBusy(false);
    }
  }

  async function requestDataExport(closureRequestId?: string) {
    setLifecycleBusy(true);
    setActionError("");
    try {
      await apiFetch("/tenants/current/data-exports", {
        method: "POST",
        body: JSON.stringify({ format: "JSON", closureRequestId })
      });
      await loadLifecycleData();
    } catch (lifecycleError) {
      setActionError(lifecycleError instanceof Error ? lifecycleError.message : "Không thể tạo yêu cầu export dữ liệu.");
    } finally {
      setLifecycleBusy(false);
    }
  }

  async function loadSupportRequests() {
    setActionError("");
    try {
      const response = await apiFetch<SupportRequest[]>("/tenants/current/support-requests");
      setSupportRequests(response.data);
    } catch (supportError) {
      setActionError(supportError instanceof Error ? supportError.message : "Không thể tải support requests.");
    }
  }

  async function createSupportRequest() {
    if (!supportReason.trim()) return;
    setSupportBusy(true);
    setActionError("");
    try {
      await apiFetch("/tenants/current/support-requests", {
        method: "POST",
        body: JSON.stringify({
          reason: supportReason.trim(),
          scopes: [supportScope],
          durationMinutes: Number(supportDuration)
        })
      });
      setSupportReason("");
      await loadSupportRequests();
    } catch (supportError) {
      setActionError(supportError instanceof Error ? supportError.message : "Không thể tạo support request.");
    } finally {
      setSupportBusy(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[22rem] items-center justify-center rounded-2xl border border-slate-200 bg-white">
        <div className="text-center">
          <LoaderCircle className="mx-auto h-7 w-7 animate-spin text-blue-700" aria-hidden="true" />
          <p className="mt-3 text-sm text-slate-600">Đang xác lập tenant context...</p>
        </div>
      </div>
    );
  }

  if (error || !tenant) {
    return (
      <div className="rounded-2xl border border-red-200 bg-white p-6">
        <div className="flex items-start gap-3">
          <TriangleAlert className="mt-0.5 h-5 w-5 text-red-700" aria-hidden="true" />
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-slate-950">Không thể mở Tenant Center</h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {error || "Phiên hiện tại chưa xác định được tenant hợp lệ."} Tenant Center không suy đoán tenant và không hiển thị dữ liệu thay thế.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button onClick={() => void load()} type="button">
                <RefreshCcw className="h-4 w-4" aria-hidden="true" />
                Thử lại
              </Button>
              <Link className="inline-flex min-h-11 items-center rounded-md border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 hover:bg-slate-50" href="/start">
                Chọn hoặc tham gia tổ chức
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentStatus = statusMeta[tenant.status] ?? {
    label: tenant.status,
    description: "Trạng thái tenant hiện hành.",
    className: ""
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Tenant Center</span>
            <StatusBadge status={tenant.status} />
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">{tenant.name}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Quản trị ngữ cảnh tổ chức, mô-đun và các năng lực cấp tenant. Mọi dữ liệu hiển thị ở đây phải thuộc tenant hiện hành; thay đổi tenant sẽ làm thay đổi toàn bộ context, quyền và branding.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
          <span
            className="h-9 w-2 rounded-full bg-blue-700"
            style={tenant.brandColor ? { backgroundColor: tenant.brandColor } : undefined}
            aria-hidden="true"
          />
          <div>
            <div className="text-xs text-slate-500">Tenant slug</div>
            <div className="font-mono text-sm font-semibold text-slate-950">{tenant.slug}</div>
          </div>
        </div>
      </div>

      <ContractNotice title="Ranh giới bảo mật bắt buộc">
        Tenant Center chỉ dùng tenant context đã được backend xác thực. Frontend ẩn/hiện menu không thay thế authorization; mọi mutation vẫn phải kiểm tra membership, permission, trạng thái tenant, trạng thái mô-đun và ranh giới dữ liệu ở backend.
      </ContractNotice>

      <div className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="self-start rounded-2xl border border-slate-200 bg-white p-2 lg:sticky lg:top-24">
          <nav className="space-y-1" aria-label="Tenant Center">
            {sections.map((item) => {
              const Icon = item.icon;
              const active = section === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSection(item.key)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition",
                    active ? "bg-blue-50 text-blue-800" : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span className={cn("mt-0.5 block text-xs leading-5", active ? "text-blue-700" : "text-slate-500")}>{item.description}</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0">
          {section === "overview" ? (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <Card>
                  <CardContent>
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Trạng thái</div>
                    <div className="mt-3"><StatusBadge status={tenant.status} /></div>
                    <p className="mt-3 text-xs leading-5 text-slate-500">{currentStatus.description}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Mô-đun đang bật</div>
                    <div className="mt-2 text-3xl font-semibold text-slate-950">{enabledModules}</div>
                    <p className="mt-1 text-xs text-slate-500">trên {modules.length} mô-đun đã công bố qua API</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Brand color</div>
                    <div className="mt-3 flex items-center gap-3">
                      <input aria-label="Brand color" type="color" value={brandingColor} onChange={(event) => setBrandingColor(event.target.value)} className="h-9 w-12 rounded border border-slate-200 bg-white p-1" />
                      <span className="font-mono text-sm font-semibold">{brandingColor}</span>
                    </div>
                    <Button className="mt-3 min-h-9 px-3" variant="secondary" disabled={brandingBusy || brandingColor === tenant.brandColor} onClick={() => void saveBranding()}>
                      {brandingBusy ? "Đang lưu..." : "Lưu branding"}
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Tenant ID</div>
                    <div className="mt-3 break-all font-mono text-xs font-semibold text-slate-800">{tenant.id}</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-950">Hồ sơ kỹ thuật tenant</h2>
                    <p className="mt-1 text-sm text-slate-500">Chỉ hiển thị dữ liệu thực nhận từ endpoint tenant hiện hành.</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <dl>
                    <DefinitionRow term="Tên" value={tenant.name} />
                    <DefinitionRow term="Slug" value={tenant.slug} mono />
                    <DefinitionRow term="Trạng thái" value={<StatusBadge status={tenant.status} />} />
                    <DefinitionRow term="Khởi tạo" value={new Date(tenant.createdAt).toLocaleString("vi-VN")} />
                    <DefinitionRow term="Cập nhật gần nhất" value={new Date(tenant.updatedAt).toLocaleString("vi-VN")} />
                    <DefinitionRow term="Tenant ID" value={tenant.id} mono />
                  </dl>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-950">Phủ bề mặt UC-TENANT</h2>
                    <p className="mt-1 text-sm text-slate-500">Theo dõi rõ phần giao diện đã có dữ liệu thật và phần mới hoàn thiện contract UI.</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                        <tr>
                          <th className="px-3 py-3 font-semibold">Use case</th>
                          <th className="px-3 py-3 font-semibold">Mục tiêu</th>
                          <th className="px-3 py-3 font-semibold">Actor</th>
                          <th className="px-3 py-3 font-semibold">Surface</th>
                          <th className="px-3 py-3 font-semibold">Readiness</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {capabilities.map((item) => (
                          <tr key={item.id}>
                            <td className="whitespace-nowrap px-3 py-3 font-mono text-xs font-semibold text-slate-700">{item.id}</td>
                            <td className="px-3 py-3 font-medium text-slate-950">{item.title}</td>
                            <td className="px-3 py-3 text-slate-600">{item.owner}</td>
                            <td className="px-3 py-3 font-mono text-xs text-slate-600">{item.surface}</td>
                            <td className="px-3 py-3"><ReadinessBadge state={item.state} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : null}

          {section === "modules" ? (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Mô-đun theo tenant</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Bật/tắt mô-đun chỉ tác động tenant hiện hành. Vô hiệu hóa không được xóa dữ liệu đã phát sinh.</p>
              </div>
              {actionError ? <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">{actionError}</div> : null}
              <div className="grid gap-3">
                {modules.map((module) => (
                  <div key={module.key} className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-950">{module.name}</h3>
                        <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold", module.isEnabled ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600")}>
                          {module.isEnabled ? "Enabled" : "Disabled"}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-slate-500">{module.key}</p>
                      <p className="mt-2 text-xs text-slate-500">Quyền đọc tối thiểu: {module.requiredPermissions.join(", ") || "—"}</p>
                    </div>
                    <Button
                      type="button"
                      variant={module.isEnabled ? "secondary" : "primary"}
                      disabled={Boolean(savingModule)}
                      onClick={() => void toggleModule(module)}
                    >
                      {savingModule === module.key ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
                      {module.isEnabled ? "Vô hiệu hóa" : "Kích hoạt"}
                    </Button>
                  </div>
                ))}
              </div>
              <ContractNotice title="Quy tắc khi tắt mô-đun">
                UI chỉ gửi yêu cầu thay đổi trạng thái. Backend phải tiếp tục kiểm tra permission, dependency giữa mô-đun và không được xóa dữ liệu cũ. Endpoint trực tiếp của mô-đun bị tắt cũng phải bị từ chối, kể cả khi người dùng tự nhập URL.
              </ContractNotice>
            </div>
          ) : null}

          {section === "ownership" ? (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Quản lý quyền sở hữu tenant</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Bề mặt dành cho Tenant Owner: xem Owner hiện tại, bổ nhiệm Owner, chuyển quyền và thu hồi Owner không phải người cuối cùng.</p>
              </div>
              <ContractNotice title="Bất biến Owner">
                Tenant đang hoạt động phải luôn có ít nhất một membership Active giữ quyền Owner. Owner cuối cùng không được tự rời, bị hạ quyền, đình chỉ hoặc kết thúc membership trước khi có Owner thay thế.
              </ContractNotice>
              {actionError ? <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{actionError}</div> : null}
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Owner hiện hành</h3></CardHeader>
                <CardContent className="space-y-3">
                  {owners.map((owner) => (
                    <div key={owner.id} className="flex flex-col gap-3 rounded-lg border border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="font-medium text-slate-950">{owner.user.fullName}</div>
                        <div className="text-xs text-slate-500">{owner.user.email} · từ {new Date(owner.effectiveFrom).toLocaleString("vi-VN")}</div>
                      </div>
                      <Button variant="secondary" disabled={ownershipBusy || owners.length <= 1} onClick={() => void revokeOwner(owner.membershipId)}>Thu hồi Owner</Button>
                    </div>
                  ))}
                  {owners.length === 0 ? <p className="text-sm text-slate-500">Không có Owner active được trả về.</p> : null}
                </CardContent>
              </Card>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <label className="grid gap-2 text-sm font-medium text-slate-800">
                  Membership đích
                  <select value={ownerTargetId} onChange={(event) => setOwnerTargetId(event.target.value)} className="h-11 rounded-md border border-slate-300 bg-white px-3 text-slate-700">
                    <option value="">Chọn thành viên...</option>
                    {members.filter((member) => member.status === "ACTIVE" && member.user.isActive).map((member) => (
                      <option key={member.id} value={member.id}>{member.user.fullName} — {member.user.email}</option>
                    ))}
                  </select>
                </label>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button disabled={ownershipBusy || !ownerTargetId} onClick={() => void addOwner()}>Bổ nhiệm thêm Owner</Button>
                  <Button variant="secondary" disabled={ownershipBusy || !ownerTargetId} onClick={() => void transferOwnership()}>Chuyển quyền của tôi</Button>
                  <Button variant="secondary" disabled={ownershipBusy} onClick={() => void loadOwnership()}>Làm mới</Button>
                </div>
              </div>
            </div>
          ) : null}

          {section === "service" ? (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Dịch vụ và hạn mức tenant</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Tách cấu hình dịch vụ khỏi quyền nghiệp vụ. Gói sử dụng không được tự động biến thành role hoặc permission.</p>
              </div>
              {actionError ? <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{actionError}</div> : null}
              <div className="grid gap-4 md:grid-cols-3">
                <Card><CardContent><div className="text-xs uppercase tracking-wide text-slate-500">Gói dịch vụ</div><div className="mt-2 text-lg font-semibold">{serviceOverview?.subscription?.plan.name || "Chưa được gán"}</div><p className="mt-1 text-xs text-slate-500">{serviceOverview?.subscription ? `${serviceOverview.subscription.plan.code} · ${serviceOverview.subscription.status}` : "Platform Admin cần gán plan trước."}</p></CardContent></Card>
                <Card><CardContent><div className="text-xs uppercase tracking-wide text-slate-500">Hạn mức</div><div className="mt-2 text-lg font-semibold">{serviceOverview?.subscription?.plan.limits.length ?? 0}</div><p className="mt-1 text-xs text-slate-500">Metric limits từ service plan hiện hành.</p></CardContent></Card>
                <Card><CardContent><div className="text-xs uppercase tracking-wide text-slate-500">Usage counters</div><div className="mt-2 text-lg font-semibold">{serviceOverview?.usage.length ?? 0}</div><p className="mt-1 text-xs text-slate-500">Tách khỏi role/permission và cập nhật bởi platform/system.</p></CardContent></Card>
              </div>
              {serviceOverview?.subscription ? (
                <Card>
                  <CardHeader><h3 className="font-semibold text-slate-950">Limits và usage</h3></CardHeader>
                  <CardContent className="space-y-3">
                    {serviceOverview.subscription.plan.limits.map((limit) => {
                      const usage = serviceOverview.usage.find((item) => item.metricKey === limit.metricKey);
                      return (
                        <div key={limit.id} className="grid gap-2 rounded-lg bg-slate-50 p-3 sm:grid-cols-[1fr_auto] sm:items-center">
                          <div><div className="font-mono text-sm font-semibold text-slate-900">{limit.metricKey}</div><div className="text-xs text-slate-500">Period: {usage?.periodKey || "chưa đo"}</div></div>
                          <div className="text-sm font-semibold text-slate-800">{usage?.usedValue ?? 0} / {limit.maxValue} {limit.unit}</div>
                        </div>
                      );
                    })}
                    {serviceOverview.subscription.plan.limits.length === 0 ? <p className="text-sm text-slate-500">Plan hiện tại chưa cấu hình limit.</p> : null}
                  </CardContent>
                </Card>
              ) : null}
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Liên hệ dịch vụ và billing</h3></CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-slate-800">Service contact<input className="h-11 rounded-md border border-slate-300 px-3 text-sm" type="email" value={serviceContactEmail} onChange={(event) => setServiceContactEmail(event.target.value)} placeholder="ops@example.org" /></label>
                    <label className="grid gap-2 text-sm font-medium text-slate-800">Billing contact<input className="h-11 rounded-md border border-slate-300 px-3 text-sm" type="email" value={billingContactEmail} onChange={(event) => setBillingContactEmail(event.target.value)} placeholder="billing@example.org" /></label>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button disabled={serviceBusy || !serviceOverview?.subscription} onClick={() => void saveServiceContacts()}>Lưu liên hệ</Button>
                    <Button variant="secondary" disabled={serviceBusy} onClick={() => void loadService()}>Làm mới</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : null}

          {section === "domains" ? (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Tên miền và định tuyến tenant</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Quản lý subdomain hoặc custom domain, bằng chứng sở hữu và trạng thái xác minh DNS.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <Globe2 className="mt-0.5 h-5 w-5 text-slate-500" aria-hidden="true" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-950">Custom domains</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">Backend phát hành DNS TXT challenge, kiểm tra ownership qua DNS provider và chỉ chuyển VERIFIED sau khi tìm thấy record đúng.</p>
                    {actionError ? <div className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">{actionError}</div> : null}
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <input value={domainInput} onChange={(event) => setDomainInput(event.target.value)} placeholder="portal.example.org" className="h-11 flex-1 rounded-md border border-slate-300 px-3 text-sm" />
                      <Button disabled={domainBusy || !domainInput.trim()} onClick={() => void addDomain()}>Thêm domain</Button>
                      <Button variant="secondary" disabled={domainBusy} onClick={() => void loadDomains()}>Làm mới</Button>
                    </div>
                    <div className="mt-4 space-y-3">
                      {domains.map((domain) => (
                        <div key={domain.id} className="rounded-lg bg-slate-50 p-3">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                            <div className="font-mono text-sm font-semibold text-slate-900">{domain.hostname}</div>
                            <div className="mt-1 text-xs text-slate-500">{domain.verificationStatus}{domain.verifiedAt ? ` · ${new Date(domain.verifiedAt).toLocaleString("vi-VN")}` : ""}</div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {domain.verificationStatus !== "VERIFIED" ? <Button variant="secondary" disabled={domainBusy} onClick={() => void issueDomainChallenge(domain.id)}>Tạo challenge</Button> : null}
                              {domain.verificationChallenges?.[0]?.status === "PENDING" ? <Button disabled={domainBusy} onClick={() => void verifyDomain(domain.id)}>Kiểm tra DNS</Button> : null}
                              <Button variant="secondary" disabled={domainBusy} onClick={() => void revokeDomain(domain.id)}>Gỡ domain</Button>
                            </div>
                          </div>
                          {domain.verificationChallenges?.[0] ? (
                            <div className="mt-3 rounded-md border border-slate-200 bg-white p-3 text-xs text-slate-600">
                              <div className="font-semibold text-slate-800">TXT record cần cấu hình</div>
                              <div className="mt-2 break-all"><span className="text-slate-400">Name:</span> <code>{domain.verificationChallenges[0].recordName}</code></div>
                              <div className="mt-1 break-all"><span className="text-slate-400">Value:</span> <code>{domain.verificationChallenges[0].expectedValue}</code></div>
                              <div className="mt-1">Status: {domain.verificationChallenges[0].status} · hết hạn {new Date(domain.verificationChallenges[0].expiresAt).toLocaleString("vi-VN")}</div>
                            </div>
                          ) : null}
                        </div>
                      ))}
                      {domains.length === 0 ? <p className="text-sm text-slate-500">Tenant chưa cấu hình custom domain.</p> : null}
                    </div>
                  </div>
                </div>
              </div>
              <ContractNotice title="DNS verification không tự xác nhận ở frontend">
                Nút “Kiểm tra DNS” gọi backend DNS provider. UI không được tự chuyển trạng thái VERIFIED chỉ vì người dùng đã nhập record.
              </ContractNotice>
            </div>
          ) : null}

          {section === "lifecycle" ? (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Vòng đời tenant và xử lý dữ liệu</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Phân biệt rõ suspend/archive với close/delete. Không hành động phá hủy nào được thực hiện chỉ từ một nút frontend.</p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  { status: "ACTIVE", icon: CheckCircle2, text: "Có thể vận hành các mô-đun theo quyền và cấu hình." },
                  { status: "SUSPENDED", icon: LockKeyhole, text: "Chặn mutation nghiệp vụ nhưng giữ dữ liệu để có thể khôi phục." },
                  { status: "ARCHIVED", icon: Archive, text: "Ngừng vận hành thường xuyên, dữ liệu được lưu theo retention policy." }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className={cn("rounded-xl border bg-white p-4", tenant.status === item.status ? "border-blue-300 ring-2 ring-blue-100" : "border-slate-200")} key={item.status}>
                      <Icon className="h-5 w-5 text-slate-600" aria-hidden="true" />
                      <div className="mt-3"><StatusBadge status={item.status} /></div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Đóng tenant — quy trình bắt buộc</h3></CardHeader>
                <CardContent>
                  <ol className="grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
                    {[
                      "Xác nhận thẩm quyền Owner và trạng thái tenant.",
                      "Cho phép xuất dữ liệu theo quyền trước khi đóng.",
                      "Tạo yêu cầu đóng và thời gian chờ; không xóa vật lý ngay.",
                      "Cho phép hủy yêu cầu hoặc khôi phục trong thời hạn cho phép.",
                      "Áp dụng retention policy đã được xác nhận.",
                      "Chỉ xóa/ẩn danh vật lý khi đủ điều kiện và phải có audit."
                    ].map((text, index) => (
                      <li className="flex gap-3 rounded-lg bg-slate-50 p-3" key={text}><span className="font-mono text-xs font-semibold text-blue-700">{String(index + 1).padStart(2, "0")}</span><span>{text}</span></li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
              {actionError ? <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{actionError}</div> : null}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader><h3 className="font-semibold text-slate-950">Retention policy</h3></CardHeader>
                  <CardContent>
                    {retentionPolicy ? (
                      <dl>
                        <DefinitionRow term="Grace period" value={`${retentionPolicy.gracePeriodDays} ngày`} />
                        <DefinitionRow term="Retention" value={`${retentionPolicy.retentionDays} ngày`} />
                        <DefinitionRow term="Disposition" value={retentionPolicy.disposition} />
                        <DefinitionRow term="Export trước disposition" value={retentionPolicy.exportBeforeDisposition ? "Có" : "Không"} />
                      </dl>
                    ) : <p className="text-sm text-slate-500">Đang chờ policy từ backend.</p>}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><h3 className="font-semibold text-slate-950">Tạo yêu cầu đóng</h3></CardHeader>
                  <CardContent>
                    <textarea className="min-h-28 w-full rounded-md border border-slate-300 p-3 text-sm" value={closureReason} onChange={(event) => setClosureReason(event.target.value)} placeholder="Lý do đóng tenant..." />
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button variant="destructive" disabled={lifecycleBusy || !closureReason.trim()} onClick={() => void requestClosure()}>Yêu cầu đóng</Button>
                      <Button variant="secondary" disabled={lifecycleBusy} onClick={() => void requestDataExport()}>Yêu cầu export JSON</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Closure requests</h3></CardHeader>
                <CardContent className="space-y-3">
                  {closureRequests.map((closure) => (
                    <div key={closure.id} className="rounded-lg bg-slate-50 p-3">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div><div className="font-semibold text-slate-900">{closure.status}</div><div className="mt-1 text-sm text-slate-600">{closure.reason}</div><div className="mt-1 text-xs text-slate-500">Scheduled: {new Date(closure.scheduledFor).toLocaleString("vi-VN")}</div></div>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="secondary" disabled={lifecycleBusy} onClick={() => void requestDataExport(closure.id)}>Export</Button>
                          {(closure.status === "REQUESTED" || closure.status === "APPROVED") ? <Button variant="secondary" disabled={lifecycleBusy} onClick={() => void cancelClosure(closure.id)}>Hủy yêu cầu</Button> : null}
                        </div>
                      </div>
                    </div>
                  ))}
                  {closureRequests.length === 0 ? <p className="text-sm text-slate-500">Không có closure request.</p> : null}
                  {dataExports.length ? <p className="text-xs text-slate-500">Data export requests: {dataExports.map((item) => `${item.format}:${item.status}`).join(" · ")}</p> : null}
                </CardContent>
              </Card>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                Lifecycle mutation hiện được thực thi tại <code className="font-mono">POST /platform/tenants/:tenantId/transitions</code>. Tenant Center chỉ hiển thị trạng thái; Platform Admin thực hiện transition ở Platform Console.
              </div>
            </div>
          ) : null}

          {section === "support" ? (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Hỗ trợ quản trị tenant có kiểm soát</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Platform Admin không mặc nhiên có quyền nghiệp vụ bên trong tenant. Truy cập hỗ trợ đặc biệt phải có yêu cầu, phạm vi, lý do, thời hạn và audit.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  ["01", "Yêu cầu", "Owner hoặc đầu mối tạo yêu cầu hỗ trợ."],
                  ["02", "Phạm vi", "Chỉ tài nguyên/hành động cần thiết."],
                  ["03", "Thời hạn", "Quyền tự hết hạn, không tồn tại vĩnh viễn."],
                  ["04", "Audit", "Ghi actor, tenant, reason, scope và kết quả."]
                ].map(([step, title, description]) => (
                  <div className="rounded-xl border border-slate-200 bg-white p-4" key={step}>
                    <div className="font-mono text-xs font-semibold text-blue-700">{step}</div>
                    <h3 className="mt-2 font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
              <ContractNotice title="Không có support impersonation mặc định">
                Giao diện không cung cấp nút “đăng nhập như tenant”. Nếu sau này có support access, token/quyền hỗ trợ phải tách khỏi membership nội bộ và không làm Platform Admin trở thành Owner hoặc Tenant Admin.
              </ContractNotice>
              {actionError ? <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{actionError}</div> : null}
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Tạo support request</h3></CardHeader>
                <CardContent>
                  <textarea className="min-h-24 w-full rounded-md border border-slate-300 p-3 text-sm" value={supportReason} onChange={(event) => setSupportReason(event.target.value)} placeholder="Mô tả vấn đề cần Platform Support xử lý..." />
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-slate-800">Scope<select className="h-11 rounded-md border border-slate-300 bg-white px-3" value={supportScope} onChange={(event) => setSupportScope(event.target.value)}><option value="member:read">member:read</option><option value="organization:read">organization:read</option><option value="organization:manage">organization:manage</option><option value="domain:read">domain:read</option><option value="domain:manage">domain:manage</option><option value="branding:read">branding:read</option><option value="branding:manage">branding:manage</option><option value="module:read">module:read</option></select></label>
                    <label className="grid gap-2 text-sm font-medium text-slate-800">Thời hạn<select className="h-11 rounded-md border border-slate-300 bg-white px-3" value={supportDuration} onChange={(event) => setSupportDuration(event.target.value)}><option value="30">30 phút</option><option value="60">60 phút</option><option value="120">120 phút</option><option value="240">240 phút</option></select></label>
                  </div>
                  <Button className="mt-4" disabled={supportBusy || !supportReason.trim()} onClick={() => void createSupportRequest()}>Gửi yêu cầu hỗ trợ</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Support requests</h3></CardHeader>
                <CardContent className="space-y-3">
                  {supportRequests.map((item) => (
                    <div key={item.id} className="rounded-lg bg-slate-50 p-3">
                      <div className="flex flex-wrap items-center justify-between gap-2"><div className="font-semibold text-slate-900">{item.status}</div><div className="text-xs text-slate-500">{item.requestedDurationMinutes} phút</div></div>
                      <p className="mt-2 text-sm text-slate-700">{item.reason}</p>
                      <p className="mt-1 font-mono text-xs text-slate-500">{item.requestedScopes.join(", ")}</p>
                      {item.grant ? <p className="mt-2 text-xs text-slate-500">Grant tới {new Date(item.grant.expiresAt).toLocaleString("vi-VN")}{item.grant.revokedAt ? " · REVOKED" : ""}</p> : null}
                    </div>
                  ))}
                  {supportRequests.length === 0 ? <p className="text-sm text-slate-500">Chưa có support request.</p> : null}
                </CardContent>
              </Card>
            </div>
          ) : null}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Activity className="mt-0.5 h-5 w-5 text-slate-500" aria-hidden="true" />
            <div>
              <h2 className="font-semibold text-slate-950">Traceability</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">Các mutation về tenant, owner, module, domain và support access phải phát sinh audit/correlation data ở backend.</p>
            </div>
          </div>
          <Link className="text-sm font-semibold text-blue-700 hover:underline" href="/dashboard">Quay lại Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
