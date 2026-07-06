import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Cách hoạt động",
  description: "Luồng tài khoản, tổ chức, membership, vai trò và module trong Operations Hub."
};

const steps = [
  "Tạo tài khoản nền tảng.",
  "Tạo tổ chức mới hoặc chấp nhận lời mời.",
  "Hình thành membership trong tenant.",
  "Nhận vai trò và quyền.",
  "Chọn tenant đang hoạt động.",
  "Sử dụng các module được tenant bật."
];

export default function HowItWorksPage() {
  return (
    <PublicShell>
      <TextPageHeader
        eyebrow="Cách hoạt động"
        title="Một người dùng có thể thuộc nhiều tenant"
        description="Quyền của cùng một tài khoản có thể khác nhau giữa từng tổ chức. Operations Hub không tự suy đoán tenant khi chưa có ngữ cảnh hợp lệ."
      />
      <Section>
        <ol className="grid gap-4">
          {steps.map((step, index) => (
            <li className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 sm:grid-cols-[64px_1fr]" key={step}>
              <div className="text-2xl font-semibold text-blue-700">{index + 1}</div>
              <p className="text-base leading-7 text-slate-700">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
    </PublicShell>
  );
}
