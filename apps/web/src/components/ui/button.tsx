import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "link";

const variants: Record<ButtonVariant, string> = {
  primary: "border border-blue-700 bg-blue-700 text-white hover:bg-blue-800",
  secondary: "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50",
  ghost: "border border-transparent bg-transparent text-slate-700 hover:bg-slate-100",
  destructive: "border border-red-700 bg-red-700 text-white hover:bg-red-800",
  link: "h-auto border border-transparent bg-transparent px-0 text-blue-700 underline-offset-4 hover:underline"
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", ...props },
  ref
) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
