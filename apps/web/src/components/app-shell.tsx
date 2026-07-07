"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BarChart3, Coins, FileText, Shield, Users } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { clearSession, readSession, writeSession } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/members", label: "Members", icon: Users },
  { href: "/roles", label: "Roles", icon: Shield },
  { href: "/requests", label: "Requests", icon: FileText },
  { href: "/finance", label: "Finance", icon: Coins }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const session = readSession();

  function switchTenant(tenantId: string) {
    if (!session) return;
    writeSession({ ...session, tenantId });
    window.location.reload();
  }

  function logout() {
    clearSession();
    router.push("/auth/login");
  }

  return (
    <div className="min-h-screen">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white md:block">
        <div className="border-b border-slate-200 px-5 py-4">
          <BrandLogo className="h-8 w-auto" />
          <div className="text-sm text-slate-500">{session?.user?.email ?? "Not signed in"}</div>
        </div>
        <nav className="space-y-1 p-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center gap-3 rounded-md px-3 text-sm text-slate-700 hover:bg-slate-100",
                  pathname === item.href && "bg-blue-50 text-blue-700"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="md:pl-64">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
          <select
            className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
            value={session?.tenantId ?? ""}
            onChange={(event) => switchTenant(event.target.value)}
            aria-label="Tenant"
          >
            <option value="" disabled>
              Select tenant
            </option>
            {session?.tenants?.map((item) => (
              <option key={item.tenant.id} value={item.tenant.id}>
                {item.tenant.name}
              </option>
            ))}
          </select>
          <Button className="bg-slate-900 hover:bg-slate-800" onClick={logout}>
            Sign out
          </Button>
        </header>
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
