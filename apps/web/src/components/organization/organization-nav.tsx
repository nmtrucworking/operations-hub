"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, Building2, LayoutDashboard, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/organization", label: "Tổng quan", icon: LayoutDashboard },
  { href: "/organization/profile", label: "Hồ sơ", icon: Building2 },
  { href: "/organization/structure", label: "Cơ cấu", icon: Users },
  { href: "/organization/positions", label: "Chức vụ", icon: BriefcaseBusiness },
  { href: "/members", label: "Thành viên", icon: Users }
];

export function OrganizationNav() {
  const pathname = usePathname();
  return (
    <nav className="mb-5 flex gap-2 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2" aria-label="Quản trị tổ chức">
      {items.map((item) => {
        const Icon = item.icon;
        const active = item.href === "/organization"
          ? pathname === "/organization"
          : pathname === item.href || pathname.startsWith(`${item.href}/`) || (item.href === "/members" && pathname.startsWith("/organization/members/"));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex min-h-10 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950",
              active && "bg-blue-50 text-blue-700"
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
