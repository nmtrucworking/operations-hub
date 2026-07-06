import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LinkButtonVariant = "primary" | "secondary" | "ghost" | "link";

const variants: Record<LinkButtonVariant, string> = {
  primary: "border border-blue-700 bg-blue-700 text-white hover:bg-blue-800",
  secondary: "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50",
  ghost: "border border-transparent text-slate-700 hover:bg-slate-100",
  link: "min-h-0 border border-transparent px-0 text-blue-700 underline-offset-4 hover:underline"
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: LinkButtonVariant;
};

export function LinkButton({ className, href, variant = "primary", ...props }: LinkButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        variants[variant],
        className
      )}
      href={href}
      {...props}
    />
  );
}
