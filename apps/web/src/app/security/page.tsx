import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { InfoList, Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Bảo mật",
  description: "Nguyên tắc bảo mật, riêng tư và cô lập tenant trong Operations Hub."
};

export default function SecurityPage() {
  return (
    <PublicShell>
      <TextPageHeader
        eyebrow="Bảo mật và riêng tư"
        title="Cô lập tenant là nguyên tắc nền"
        description="Trang này công bố nguyên tắc ở mức public, không tiết lộ secret, sơ đồ hạ tầng, tên bảng nhạy cảm hoặc cấu hình triển khai."
      />
      <Section>
        <div className="max-w-3xl">
          <InfoList
            items={[
              "Dữ liệu nghiệp vụ được truy xuất theo tenant context hợp lệ.",
              "Quyền dựa trên membership, role, permission và phạm vi đơn vị.",
              "Frontend không được xem là ranh giới bảo mật.",
              "Phiên đăng nhập cần có cơ chế thu hồi và làm mới an toàn.",
              "Hành động nhạy cảm cần được ghi audit log.",
              "Tệp tải lên cần chính sách loại tệp, kích thước và kiểm tra an toàn.",
              "Báo cáo lỗ hổng bảo mật được tiếp nhận qua kênh liên hệ phù hợp."
            ]}
          />
        </div>
      </Section>
    </PublicShell>
  );
}
