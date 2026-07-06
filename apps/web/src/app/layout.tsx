import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Operations Hub",
    template: "%s | Operations Hub"
  },
  description: "Nền tảng quản lý vận hành dùng chung cho tổ chức sinh viên",
  openGraph: {
    title: "Operations Hub",
    description: "Nền tảng quản lý vận hành dùng chung cho tổ chức sinh viên",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
