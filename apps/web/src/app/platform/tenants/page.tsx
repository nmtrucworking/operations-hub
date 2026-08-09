import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { PlatformTenantConsole } from "@/components/tenant/platform-tenant-console";

export const metadata: Metadata = {
  title: "Platform Tenants | Operations Hub",
  description: "Bề mặt quản trị hồ sơ đăng ký, provisioning, tenant lifecycle và support access cấp nền tảng."
};

export default function PlatformTenantsPage() {
  return (
    <AppShell>
      <PlatformTenantConsole />
    </AppShell>
  );
}
