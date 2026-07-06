import { StatusPage } from "@/components/public/status-page";

export default function NotFound() {
  return <StatusPage code="404" title="Không tìm thấy trang" description="Đường dẫn không tồn tại hoặc nội dung public đã bị tắt." primaryHref="/" primaryLabel="Về trang chủ" secondaryHref="/help" secondaryLabel="Tìm trợ giúp" />;
}
