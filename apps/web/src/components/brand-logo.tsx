import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BrandLogoVariant = "horizontal" | "primary" | "wordmark" | "symbol" | "dark" | "monoBlack" | "monoWhite";

const logoSources: Record<BrandLogoVariant, { src: string; width: number; height: number }> = {
  horizontal: { src: "/brand/operations-hub-horizontal.svg", width: 470, height: 88 },
  primary: { src: "/brand/operations-hub-primary.svg", width: 360, height: 120 },
  wordmark: { src: "/brand/operations-hub-wordmark.svg", width: 378, height: 80 },
  symbol: { src: "/brand/operations-hub-symbol.svg", width: 64, height: 64 },
  dark: { src: "/brand/operations-hub-dark.svg", width: 470, height: 88 },
  monoBlack: { src: "/brand/operations-hub-monochrome-black.svg", width: 470, height: 88 },
  monoWhite: { src: "/brand/operations-hub-monochrome-white.svg", width: 470, height: 88 }
};

type BrandLogoProps = Omit<ComponentPropsWithoutRef<"img">, "src" | "alt" | "width" | "height"> & {
  variant?: BrandLogoVariant;
  alt?: string;
};

export function BrandLogo({ variant = "horizontal", alt = "Operations Hub", className, ...props }: BrandLogoProps) {
  const logo = logoSources[variant];

  return (
    <img
      alt={alt}
      className={cn("block h-auto max-w-full shrink-0", className)}
      height={logo.height}
      src={logo.src}
      width={logo.width}
      {...props}
    />
  );
}
