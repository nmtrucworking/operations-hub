import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { OrganizationRequestForm } from "@/components/public/organization-forms";
import { Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Đăng ký tổ chức mới",
  description: "Gửi yêu cầu đăng ký tenant mới sau khi đăng nhập tài khoản nền tảng."
};

export default function NewOrganizationPage() {
  return (
    <PublicShell>
      <TextPageHeader
        eyebrow="Đăng ký tổ chức"
        title="Gửi yêu cầu tạo tenant mới"
        description="Biểu mẫu này hiển thị công khai, nhưng hành động gửi yêu cầu cần tài khoản đã xác thực và không tự động tạo Owner."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <OrganizationRequestForm />
        </div>
      </Section>
    </PublicShell>
  );
}
