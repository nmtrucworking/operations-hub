import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Operations Hub",
  description: "Base project for multi-tenant operations management"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
