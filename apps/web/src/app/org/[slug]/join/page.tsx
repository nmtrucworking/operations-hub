import type { Metadata } from "next";
import { StatusPage } from "@/components/public/status-page";

export const metadata: Metadata = {
  title: "Yêu cầu tham gia chưa bật",
  robots: { index: false, follow: false }
};

export default async function TenantJoinPage({ params }: { params: Promise<{ slug: string }> }) {
  await params;
  return (
    <StatusPage
      code="JOIN_DISABLED"
      title="Yêu cầu tham gia chưa được bật"
      description="Tenant cần bật public join policy, chống spam, consent và rate limit trước khi nhận yêu cầu tham gia public."
      primaryHref="/start"
      primaryLabel="Quay lại bắt đầu"
    />
  );
}
