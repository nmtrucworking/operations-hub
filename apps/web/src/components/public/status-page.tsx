import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { PublicShell } from "@/components/public/public-shell";
import { LinkButton } from "@/components/public/link-button";

export function StatusPage({
  code,
  title,
  description,
  primaryHref = "/",
  primaryLabel = "Về trang chủ",
  secondaryHref,
  secondaryLabel
}: {
  code?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <PublicShell minimal>
      <section className="grid min-h-[60vh] place-items-center px-4 py-16">
        <div className="w-full max-w-xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white text-blue-700">
            <AlertCircle className="h-6 w-6" aria-hidden="true" />
          </div>
          {code ? <p className="mt-6 text-sm font-medium text-slate-500">{code}</p> : null}
          <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href={primaryHref}>
              <Home className="h-4 w-4" aria-hidden="true" />
              {primaryLabel}
            </LinkButton>
            {secondaryHref && secondaryLabel ? (
              <LinkButton href={secondaryHref} variant="secondary">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {secondaryLabel}
              </LinkButton>
            ) : null}
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
