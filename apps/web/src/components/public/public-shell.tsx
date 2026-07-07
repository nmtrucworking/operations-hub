"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkButton } from "./link-button";

const navItems = [
  { href: "/features", label: "Tính năng" },
  { href: "/how-it-works", label: "Cách hoạt động" },
  { href: "/security", label: "Bảo mật" },
  { href: "/help", label: "Trợ giúp" },
  { href: "/contact", label: "Liên hệ" }
];

export function PublicShell({ children, minimal = false }: { children: React.ReactNode; minimal?: boolean }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-sm focus:ring-2 focus:ring-blue-500"
        href="#main-content"
      >
        Bỏ qua điều hướng
      </a>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link className="flex h-10 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" href="/">
            <BrandLogo className="h-8 w-auto md:hidden lg:block" />
            <BrandLogo alt="Operations Hub" className="hidden h-8 w-8 md:block lg:hidden" variant="symbol" />
          </Link>
          {!minimal ? (
            <>
              <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <Link
                    className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="hidden items-center gap-2 md:flex">
                <LinkButton href="/auth/login" variant="ghost">
                  Đăng nhập
                </LinkButton>
                <LinkButton href="/start">Bắt đầu</LinkButton>
              </div>
              <Button
                aria-controls="mobile-public-navigation"
                aria-expanded={open}
                aria-label="Mở điều hướng"
                className="px-3 md:hidden"
                onClick={() => setOpen(true)}
                ref={menuButtonRef}
                type="button"
                variant="secondary"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </>
          ) : (
            <LinkButton href="/" variant="ghost">
              Trang chủ
            </LinkButton>
          )}
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Điều hướng mobile">
          <button
            aria-label="Đóng điều hướng"
            className="absolute inset-0 bg-slate-950/20"
            onClick={() => setOpen(false)}
            type="button"
          />
          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm border-l border-slate-200 bg-white p-4"
            id="mobile-public-navigation"
            ref={panelRef}
          >
            <div className="flex items-center justify-between">
              <BrandLogo className="h-8 w-auto" />
              <Button aria-label="Đóng điều hướng" className="px-3" onClick={() => setOpen(false)} type="button" variant="ghost">
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
            <nav className="mt-6 grid gap-1" aria-label="Điều hướng mobile">
              {navItems.map((item) => (
                <Link
                  className="rounded-md px-3 py-3 text-sm text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 grid gap-3">
              <LinkButton href="/start" onClick={() => setOpen(false)}>
                Bắt đầu
              </LinkButton>
              <LinkButton href="/auth/login" onClick={() => setOpen(false)} variant="secondary">
                Đăng nhập
              </LinkButton>
            </div>
          </div>
        </div>
      ) : null}
      <main id="main-content">{children}</main>
      <PublicFooter minimal={minimal} />
    </div>
  );
}

function PublicFooter({ minimal }: { minimal?: boolean }) {
  const groups = [
    {
      title: "Sản phẩm",
      links: [
        { href: "/features", label: "Tính năng" },
        { href: "/how-it-works", label: "Cách hoạt động" },
        { href: "/security", label: "Bảo mật" }
      ]
    },
    {
      title: "Hỗ trợ",
      links: [
        { href: "/help", label: "Trợ giúp" },
        { href: "/status", label: "Trạng thái" },
        { href: "/contact", label: "Liên hệ" }
      ]
    },
    {
      title: "Pháp lý",
      links: [
        { href: "/legal/terms", label: "Điều khoản" },
        { href: "/legal/privacy", label: "Bảo mật" },
        { href: "/legal/cookies", label: "Cookie" },
        { href: "/accessibility", label: "Khả năng tiếp cận" }
      ]
    }
  ];

  return (
    <footer className={cn("border-t border-slate-200 bg-slate-50", minimal && "bg-white")}>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <BrandLogo className="h-8 w-auto" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
            Nền tảng quản lý vận hành dùng chung cho tổ chức sinh viên, tách bạch tài khoản, tenant,
            membership và quyền truy cập.
          </p>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-semibold">{group.title}</h2>
            <ul className="mt-3 grid gap-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className="text-slate-600 hover:text-slate-950" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-500">
        © 2026 Operations Hub. Public pages không hiển thị dữ liệu tenant nội bộ.
      </div>
    </footer>
  );
}
