import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PublicContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-6xl px-4 sm:px-6", className)}>{children}</div>;
}

export function TextPageHeader({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <PublicContainer className="max-w-3xl">
        {eyebrow ? <p className="text-sm font-medium text-blue-700">{eyebrow}</p> : null}
        <h1 className="mt-3 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </PublicContainer>
    </section>
  );
}

export function Section({
  title,
  description,
  children,
  className
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-14 sm:py-20", className)}>
      <PublicContainer>
        {title || description ? (
          <div className="mb-10 max-w-3xl">
            {title ? <h2 className="text-3xl font-semibold tracking-normal text-slate-950">{title}</h2> : null}
            {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
          </div>
        ) : null}
        {children}
      </PublicContainer>
    </section>
  );
}

export function SimpleCard({ title, description, meta }: { title: string; description: string; meta?: string }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      {meta ? <p className="mb-3 text-xs font-medium text-blue-700">{meta}</p> : null}
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export function InfoList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li className="border-l-2 border-blue-700 pl-4" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function DefinitionRows({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {rows.map((row) => (
        <div className="grid gap-2 px-5 py-4 sm:grid-cols-[180px_1fr]" key={row.label}>
          <dt className="text-sm font-medium text-slate-950">{row.label}</dt>
          <dd className="text-sm leading-6 text-slate-600">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
