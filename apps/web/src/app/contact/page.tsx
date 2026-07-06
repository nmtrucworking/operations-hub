import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { ContactForm } from "@/components/public/contact-form";
import { Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Gửi phản hồi, yêu cầu hỗ trợ hoặc hợp tác với Operations Hub."
};

export default function ContactPage() {
  return (
    <PublicShell>
      <TextPageHeader eyebrow="Liên hệ" title="Gửi yêu cầu public" description="Biểu mẫu này dành cho hỗ trợ và phản hồi chung. Không dùng để gửi secret, token, mật khẩu hoặc dữ liệu tenant nội bộ." />
      <Section>
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </PublicShell>
  );
}
