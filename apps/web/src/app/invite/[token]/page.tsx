import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { InviteActions } from "@/components/public/organization-forms";
import { Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Lời mời tham gia",
  description: "Xem lời mời tham gia tenant bằng token hợp lệ.",
  robots: { index: false, follow: false }
};

export default async function InvitePage({
  params,
  searchParams
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ status?: string }>;
}) {
  await params;
  const { status } = await searchParams;
  return (
    <PublicShell minimal>
      <TextPageHeader
        eyebrow="Lời mời"
        title="Xem lời mời tham gia tổ chức"
        description="Token lời mời chỉ phục vụ hành động tham gia hoặc từ chối, không cấp quyền xem dữ liệu tenant nội bộ."
      />
      <Section>
        <div className="mx-auto max-w-2xl">
          <InviteActions tokenState={status ?? "valid"} />
        </div>
      </Section>
    </PublicShell>
  );
}
