import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { TenantCenter } from "@/components/tenant/tenant-center";

export const metadata: Metadata = {
  title: "Tenant Center | Operations Hub",
  description: "Quản trị tenant context, modules, ownership, domains, lifecycle và support access."
};

export default function TenantPage() {
  return (
    <AppShell>
      <TenantCenter />
    </AppShell>
  );
}
