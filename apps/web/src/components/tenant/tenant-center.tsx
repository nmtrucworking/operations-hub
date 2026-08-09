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
  Database,
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
  { id: "UC-TENANT-02", title: "Xử lý hồ sơ đăng ký", owner: "Platform Admin", state: "contract", surface: "/platform/tenants" },
  { id: "UC-TENANT-03", title: "Khởi tạo tenant", owner: "Platform Admin", state: "contract", surface: "/platform/tenants" },
  { id: "UC-TENANT-04", title: "Quản trị danh mục tenant", owner: "Platform Admin", state: "contract", surface: "/platform/tenants" },
  { id: "UC-TENANT-05", title: "Quản lý vòng đời tenant", owner: "Platform Admin", state: "contract", surface: "/platform/tenants" },
  { id: "UC-TENANT-06", title: "Quản lý quyền sở hữu", owner: "Tenant Owner", state: "contract", surface: "/tenant" },
  { id: "UC-TENANT-07", title: "Dịch vụ và hạn mức", owner: "Owner / Platform Admin", state: "contract", surface: "/tenant" },
  { id: "UC-TENANT-08", title: "Tên miền tenant", owner: "Tenant Owner", state: "contract", surface: "/tenant" },
  { id: "UC-TENANT-09", title: "Đóng và xử lý dữ liệu", owner: "Owner / Platform Admin", state: "contract", surface: "/tenant" },
  { id: "UC-TENANT-10", title: "Hỗ trợ quản trị có kiểm soát", owner: "Owner / Platform Admin", state: "contract", surface: "/tenant" }
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

function EmptyIntegration({
  title,
  description,
  endpoint
}: {
  title: string;
  description: string;
  endpoint: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">
      <div className="flex items-start gap-3">
        <Database className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
        <div>
          <h3 className="font-semibold text-slate-950">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
          <p className="mt-3 text-xs text-slate-500">
            API contract cần tích hợp: <code className="rounded bg-white px-1.5 py-1 font-mono text-slate-700">{endpoint}</code>
          </p>
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
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Không thể tải ngữ cảnh tenant.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

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
                      <span className="h-8 w-8 rounded-lg border border-slate-200" style={{ backgroundColor: tenant.brandColor }} aria-hidden="true" />
                      <span className="font-mono text-sm font-semibold">{tenant.brandColor}</span>
                    </div>
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
              <EmptyIntegration
                title="Danh sách Owner chưa có endpoint đọc chuyên biệt"
                description="Không suy đoán Owner từ tên role hoặc user hiện tại. UI cần dữ liệu ownership assignment được backend kiểm tra cùng tenant và trạng thái membership."
                endpoint="GET /tenants/current/owners"
              />
              <div className="grid gap-4 md:grid-cols-3">
                {["Bổ nhiệm thêm Owner", "Chuyển quyền sở hữu", "Thu hồi Owner"].map((label) => (
                  <div className="rounded-xl border border-slate-200 bg-white p-4" key={label}>
                    <Crown className="h-5 w-5 text-slate-500" aria-hidden="true" />
                    <h3 className="mt-3 font-semibold text-slate-950">{label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Mutation phải kiểm tra phạm vi ủy quyền, membership Active, last-owner invariant và ghi audit.</p>
                    <Button className="mt-4" disabled type="button" variant="secondary">Chờ API quyền sở hữu</Button>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {section === "service" ? (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Dịch vụ và hạn mức tenant</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Tách cấu hình dịch vụ khỏi quyền nghiệp vụ. Gói sử dụng không được tự động biến thành role hoặc permission.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <Card><CardContent><div className="text-xs uppercase tracking-wide text-slate-500">Gói dịch vụ</div><div className="mt-2 text-lg font-semibold">Chưa có dữ liệu</div><p className="mt-1 text-xs text-slate-500">Không hiển thị tên gói giả.</p></CardContent></Card>
                <Card><CardContent><div className="text-xs uppercase tracking-wide text-slate-500">Hạn mức</div><div className="mt-2 text-lg font-semibold">Chưa có dữ liệu</div><p className="mt-1 text-xs text-slate-500">Cần contract usage/limits.</p></CardContent></Card>
                <Card><CardContent><div className="text-xs uppercase tracking-wide text-slate-500">Liên hệ dịch vụ</div><div className="mt-2 text-lg font-semibold">Chưa cấu hình</div><p className="mt-1 text-xs text-slate-500">Không suy ra từ email đăng nhập.</p></CardContent></Card>
              </div>
              <EmptyIntegration
                title="Service profile cần nguồn dữ liệu riêng"
                description="UI đã dành vùng cho plan, trạng thái dịch vụ, usage, limits và billing/service contact nhưng repo hiện chưa công bố API tương ứng."
                endpoint="GET /tenants/current/service"
              />
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
                    <h3 className="font-semibold text-slate-950">Chưa có domain được tải qua API</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">Không dùng slug để giả định rằng một custom domain đã được cấu hình hoặc xác minh.</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {["Pending verification", "Verified", "Failed / expired"].map((state) => (
                        <div key={state} className="rounded-lg bg-slate-50 px-3 py-3 text-xs font-medium text-slate-600">{state}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <EmptyIntegration
                title="Domain API chưa được expose ở backend hiện tại"
                description="Cần API danh sách, tạo domain, phát hành verification challenge, kiểm tra DNS và revoke. Token/challenge không được coi là quyền truy cập tenant."
                endpoint="GET/POST /tenants/current/domains"
              />
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
              <EmptyIntegration
                title="Lifecycle mutation thuộc cấp nền tảng"
                description="Tenant Owner không được tự bỏ qua quyết định suspend ở cấp platform. Cần endpoint có state-transition validation, reason, actor và lifecycle event/audit."
                endpoint="POST /platform/tenants/:tenantId/transitions"
              />
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
              <EmptyIntegration
                title="Support grant cần mô hình và API chuyên biệt"
                description="Repo hiện chưa có endpoint cấp quyền hỗ trợ tạm thời. UI giữ contract nhưng không tạo grant giả hoặc lưu grant trong localStorage."
                endpoint="POST /platform/tenant-support-grants"
              />
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
