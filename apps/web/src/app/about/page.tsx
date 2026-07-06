import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { Section, SimpleCard, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Mục tiêu, phạm vi và định hướng của Operations Hub."
};

export default function AboutPage() {
  return (
    <PublicShell>
      <TextPageHeader
        eyebrow="Giới thiệu"
        title="Operations Hub là nền tảng dùng chung"
        description="Dự án hướng tới một mô hình vận hành có thể cấu hình cho nhiều tổ chức sinh viên. MTEC là cấu hình tham chiếu, không phải tenant mặc định bắt buộc."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <SimpleCard title="Vấn đề thực tiễn" description="Tổ chức sinh viên thường dùng nhiều công cụ rời, gây khó bàn giao, khó truy vết và dễ lẫn quyền." />
          <SimpleCard title="Mục tiêu sản phẩm" description="Tạo nền tảng tách bạch tenant, membership, vai trò, module và audit để vận hành có kiểm soát." />
          <SimpleCard title="Nguyên tắc dùng chung" description="Không hard-code cơ cấu của một tổ chức thành logic bắt buộc cho mọi tenant." />
          <SimpleCard title="Hướng phát triển" description="Mở rộng module sau khi có chính sách dữ liệu, quyền riêng tư và tiêu chí nghiệm thu rõ ràng." />
        </div>
      </Section>
    </PublicShell>
  );
}
