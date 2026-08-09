"use client";

import { useEffect, useState } from "react";
import {
  Archive,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileSearch,
  LifeBuoy,
  LockKeyhole,
  Search,
  Shield,
  TriangleAlert,
  UserRoundCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { readSession, SessionState } from "@/lib/api";
import { cn } from "@/lib/utils";

type ViewKey = "registrations" | "catalog" | "provisioning" | "lifecycle" | "support";

const views: Array<{ key: ViewKey; label: string; uc: string; icon: typeof Building2 }> = [
  { key: "registrations", label: "Hồ sơ đăng ký", uc: "UC-TENANT-02", icon: FileSearch },
  { key: "catalog", label: "Danh mục tenant", uc: "UC-TENANT-04", icon: Building2 },
  { key: "provisioning", label: "Khởi tạo tenant", uc: "UC-TENANT-03", icon: UserRoundCheck },
  { key: "lifecycle", label: "Vòng đời", uc: "UC-TENANT-05/09", icon: Archive },
  { key: "support", label: "Support access", uc: "UC-TENANT-10", icon: LifeBuoy }
];

function ApiGap({ endpoint, children }: { endpoint: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
      <div className="flex items-start gap-3">
        <Database className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
        <div>
          <p className="text-sm leading-6 text-slate-700">{children}</p>
          <code className="mt-2 inline-block rounded bg-white px-2 py-1 font-mono text-xs text-slate-600">{endpoint}</code>
        </div>
      </div>
    </div>
  );
}

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

  useEffect(() => {
    setSession(readSession());
  }, []);

  const hasPlatformRole = Boolean(session?.user?.platformRole);

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
                      <p className="mt-1 text-xs text-slate-500">Filter UI sẵn sàng; chưa gửi truy vấn khi endpoint chưa tồn tại.</p>
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
                  <div className="grid gap-3 md:grid-cols-[1fr_12rem_12rem]">
                    <label className="relative">
                      <span className="sr-only">Tìm hồ sơ</span>
                      <Search className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" aria-hidden="true" />
                      <Input className="pl-9" disabled placeholder="Tên tổ chức, slug, người đăng ký..." />
                    </label>
                    <select className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-500" disabled aria-label="Trạng thái hồ sơ">
                      <option>Tất cả trạng thái</option>
                    </select>
                    <select className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-500" disabled aria-label="Sắp xếp hồ sơ">
                      <option>Mới gửi gần nhất</option>
                    </select>
                  </div>
                  <div className="mt-5 rounded-xl border border-dashed border-slate-300 p-8 text-center">
                    <ClipboardCheck className="mx-auto h-7 w-7 text-slate-400" aria-hidden="true" />
                    <h4 className="mt-3 font-semibold text-slate-950">Không hiển thị hồ sơ giả</h4>
                    <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">Khi API được triển khai, bảng này phải hiển thị proposed name/slug, applicant, submittedAt, reviewer, trạng thái và SLA review mà không lộ dữ liệu ngoài phạm vi quản trị.</p>
                  </div>
                </CardContent>
              </Card>
              <ApiGap endpoint="GET /platform/tenant-registrations?status=&q=&page=">Cần endpoint danh sách hồ sơ có authorization cấp platform, pagination và filter. Chi tiết hồ sơ cần endpoint riêng trước khi bật hành động review.</ApiGap>
              <Card>
                <CardHeader><h3 className="font-semibold text-slate-950">Review drawer / detail contract</h3></CardHeader>
                <CardContent className="grid gap-3 md:grid-cols-2">
                  {["Thông tin tổ chức đề xuất", "Người đại diện / applicant", "Minh chứng và metadata", "Lịch sử bổ sung", "Reviewer và thời điểm review", "Quyết định + review note"].map((item) => (
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
                <CardHeader><h3 className="font-semibold text-slate-950">Tenant list contract</h3></CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-3 py-3">Tenant</th><th className="px-3 py-3">Slug</th><th className="px-3 py-3">Status</th><th className="px-3 py-3">Owner invariant</th><th className="px-3 py-3">Updated</th><th className="px-3 py-3">Action</th></tr></thead>
                      <tbody><tr><td className="px-3 py-8 text-center text-slate-500" colSpan={6}>Chưa tải dữ liệu vì backend hiện chỉ công bố danh sách tenant theo membership của chính người dùng.</td></tr></tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              <ApiGap endpoint="GET /platform/tenants?status=&q=&page=">Endpoint phải trả metadata quản trị tối thiểu, không trả dữ liệu mô-đun nghiệp vụ chỉ vì actor là Platform Admin.</ApiGap>
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
              <ApiGap endpoint="POST /platform/tenant-registrations/:id/approve">Approval endpoint nên điều phối provisioning transaction server-side; frontend không gọi chuỗi nhiều endpoint để tự “lắp” tenant.</ApiGap>
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
                <h3 className="font-semibold text-slate-950">Action dialog contract</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-slate-800">Trạng thái đích<select disabled className="h-11 rounded-md border border-slate-300 bg-slate-50 px-3 text-slate-500"><option>Chọn transition...</option></select></label>
                  <label className="grid gap-2 text-sm font-medium text-slate-800">Reason<Input disabled placeholder="Bắt buộc với suspend/archive..." /></label>
                </div>
                <Button className="mt-4" disabled variant="destructive">Xác nhận transition</Button>
              </div>
              <ApiGap endpoint="POST /platform/tenants/:tenantId/transitions">Backend phải kiểm chứng transition hợp lệ, lưu TenantLifecycleEvent, áp dụng tenant guard và audit; UI không tự đổi trạng thái local.</ApiGap>
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
              <ApiGap endpoint="GET/POST /platform/tenant-support-grants">Cần domain model riêng cho request/grant trước khi bật action. Không lưu quyền support trong localStorage hoặc metadata không kiểm soát.</ApiGap>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
