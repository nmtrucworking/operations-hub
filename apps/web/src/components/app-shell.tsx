"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BarChart3, Building2, Coins, FileText, Shield, Users } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { clearSession, readSession, selectTenant, SessionState } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/tenant", label: "Tenant", icon: Building2 },
  { href: "/members", label: "Members", icon: Users },
  { href: "/roles", label: "Roles", icon: Shield },
  { href: "/requests", label: "Requests", icon: FileText },
  { href: "/finance", label: "Finance", icon: Coins }
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<SessionState | null>(null);
  const [switchingTenantId, setSwitchingTenantId] = useState("");
  const [tenantError, setTenantError] = useState("");

  useEffect(() => {
    setSession(readSession());
  }, []);

  const activeTenant = useMemo(
    () => session?.tenants?.find((item) => item.tenant.id === session.tenantId),
    [session]
  );

  async function switchTenant(tenantId: string) {
    if (!session || tenantId === session.tenantId || switchingTenantId) return;
    setSwitchingTenantId(tenantId);
    setTenantError("");
    try {
      const next = await selectTenant(tenantId);
      setSession(next);
      window.location.assign(pathname || "/dashboard");
    } catch (error) {
      setTenantError(error instanceof Error ? error.message : "Không thể chuyển tổ chức.");
    } finally {
      setSwitchingTenantId("");
    }
  }

  function logout() {
    clearSession();
    router.push("/auth/login");
  }

  return (
    <div className="min-h-screen bg-slate-50/60">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-slate-200 bg-white md:block">
        <div className="border-b border-slate-200 px-5 py-4">
          <BrandLogo className="h-8 w-auto" />
          <div className="mt-3 truncate text-sm font-medium text-slate-900">{session?.user?.fullName ?? "Operations Hub"}</div>
          <div className="truncate text-xs text-slate-500">{session?.user?.email ?? "Đang tải phiên..."}</div>
        </div>
        <nav className="space-y-1 p-3" aria-label="Điều hướng nghiệp vụ">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100",
                  active && "bg-blue-50 text-blue-700"
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
          {session?.user?.platformRole ? (
            <Link
              href="/platform/tenants"
              className={cn(
                "mt-3 flex h-10 items-center gap-3 rounded-md border-t border-slate-100 px-3 pt-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100",
                isActivePath(pathname, "/platform/tenants") && "bg-blue-50 text-blue-700"
              )}
            >
              <Shield className="h-4 w-4" aria-hidden="true" />
              Platform tenants
            </Link>
          ) : null}
        </nav>
      </aside>

      <main className="md:pl-64">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-16 items-center justify-between gap-3 px-4 md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <div
                className="h-8 w-1 shrink-0 rounded-full bg-blue-700"
                style={activeTenant?.tenant.brandColor ? { backgroundColor: activeTenant.tenant.brandColor } : undefined}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">Tenant context</div>
                <select
                  className="mt-0.5 max-w-[min(58vw,24rem)] bg-transparent text-sm font-semibold text-slate-950 outline-none disabled:cursor-wait disabled:opacity-60"
                  value={session?.tenantId ?? ""}
                  onChange={(event) => switchTenant(event.target.value)}
                  aria-label="Chọn tổ chức đang hoạt động"
                  disabled={!session || Boolean(switchingTenantId)}
                >
                  <option value="" disabled>
                    {session ? "Chọn tổ chức" : "Đang tải..."}
                  </option>
                  {session?.tenants?.map((item) => (
                    <option key={item.tenant.id} value={item.tenant.id}>
                      {item.tenant.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Button className="shrink-0 bg-slate-900 hover:bg-slate-800" onClick={logout} variant="primary">
              Đăng xuất
            </Button>
          </div>
          {tenantError ? (
            <div className="border-t border-red-100 bg-red-50 px-4 py-2 text-sm text-red-700 md:px-6" role="alert">
              {tenantError}
            </div>
          ) : null}
          <nav className="flex gap-1 overflow-x-auto border-t border-slate-100 px-3 py-2 md:hidden" aria-label="Điều hướng di động">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 rounded-md px-3 py-2 text-xs font-medium text-slate-600",
                  isActivePath(pathname, item.href) && "bg-blue-50 text-blue-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
