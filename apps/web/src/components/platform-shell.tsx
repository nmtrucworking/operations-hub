"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Building2, LayoutDashboard, Shield, UserRound } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { clearSession, readSession, SessionState } from "@/lib/api";
import { cn } from "@/lib/utils";

const platformNav = [
  { href: "/platform/tenants", label: "Tenants", icon: Building2 }
];

export function PlatformShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<SessionState | null>(null);

  useEffect(() => {
    setSession(readSession());
  }, []);

  function logout() {
    clearSession();
    router.push("/auth/login");
  }

  return (
    <div className="min-h-screen bg-slate-50/60">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-slate-200 bg-slate-950 text-white md:block">
        <div className="border-b border-white/10 px-5 py-4">
          <div className="rounded-lg bg-white p-2">
            <BrandLogo className="h-7 w-auto" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
            <Shield className="h-4 w-4" aria-hidden="true" />
            Platform scope
          </div>
          <div className="mt-3 truncate text-sm font-medium text-white">{session?.user?.fullName ?? "Operations Hub"}</div>
          <div className="truncate text-xs text-slate-400">{session?.user?.platformRole ?? "No platform role"}</div>
        </div>
        <nav className="space-y-1 p-3" aria-label="Platform administration">
          {platformNav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white",
                  active && "bg-white/10 text-white"
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
          <div className="my-3 border-t border-white/10" />
          <Link className="flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" href="/organizations">
            <UserRound className="h-4 w-4" aria-hidden="true" />
            Tổ chức của tôi
          </Link>
          {session?.tenantId ? (
            <Link className="flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" href="/dashboard">
              <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
              Tenant workspace
            </Link>
          ) : null}
        </nav>
      </aside>

      <main className="md:pl-64">
        <header className="sticky top-0 z-10 flex min-h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-4 backdrop-blur md:px-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Operations Hub</div>
            <div className="text-sm font-semibold text-slate-950">Platform Administration</div>
          </div>
          <div className="flex items-center gap-3">
            <Link className="hidden text-sm font-medium text-slate-600 hover:text-slate-950 sm:inline" href="/organizations">Thoát platform scope</Link>
            <Button className="bg-slate-900 hover:bg-slate-800" onClick={logout}>Đăng xuất</Button>
          </div>
        </header>
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
