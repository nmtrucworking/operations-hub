import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import { Section, TextPageHeader } from "@/components/public/page-sections";

export const metadata: Metadata = {
  title: "Trợ giúp",
  description: "Trung tâm trợ giúp public trước khi đăng nhập Operations Hub."
};

const faqs = [
  ["Tài khoản khác membership như thế nào?", "Tài khoản là danh tính nền tảng. Membership xác định bạn thuộc tenant nào và có vai trò gì trong tenant đó."],
  ["Đăng ký tài khoản có tạo tổ chức không?", "Không. Tổ chức chỉ được tạo qua quy trình đăng ký tenant và xét duyệt phù hợp."],
  ["Tôi có lời mời thì làm gì?", "Mở đường dẫn invite, đăng nhập hoặc đăng ký tài khoản, sau đó tiếp tục hành động với token còn hiệu lực."],
  ["Quên mật khẩu thì sao?", "Dùng trang quên mật khẩu. Phản hồi được giữ trung tính để hạn chế dò tài khoản."],
  ["Báo cáo sự cố ở đâu?", "Dùng trang liên hệ và không gửi mật khẩu, token hoặc dữ liệu nội bộ nhạy cảm."]
];

export default function HelpPage() {
  return (
    <PublicShell>
      <TextPageHeader eyebrow="Trợ giúp public" title="Hướng dẫn trước khi vào workspace" description="Nội dung quản trị nội bộ chi tiết chỉ hiển thị sau đăng nhập nếu người dùng có quyền phù hợp." />
      <Section>
        <div className="grid gap-4">
          {faqs.map(([question, answer]) => (
            <article className="rounded-lg border border-slate-200 bg-white p-5" key={question}>
              <h2 className="text-lg font-semibold">{question}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </PublicShell>
  );
}
