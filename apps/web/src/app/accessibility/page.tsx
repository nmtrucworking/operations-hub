import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { InfoList, Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Khả năng tiếp cận",
  description: "Cam kết accessibility baseline của Operations Hub."
};

export default function AccessibilityPage() {
  return (
    <PublicShell>
      <TextPageHeader eyebrow="Accessibility" title="Cam kết khả năng tiếp cận" description="Public UI được thiết kế để dùng được bằng bàn phím, có focus state rõ và nội dung đọc được bằng assistive technology." />
      <Section>
        <div className="max-w-3xl">
          <InfoList
            items={[
              "Có skip link tới nội dung chính.",
              "Input có label hiển thị rõ, lỗi form gắn gần trường liên quan.",
              "Điều hướng mobile có thể đóng bằng Escape và quản lý focus cơ bản.",
              "Không dùng màu làm tín hiệu duy nhất cho trạng thái quan trọng.",
              "Nội dung pháp lý là văn bản, không nằm trong ảnh."
            ]}
          />
        </div>
      </Section>
    </PublicShell>
  );
}
