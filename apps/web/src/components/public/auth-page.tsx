import { PublicShell } from "@/components/public/public-shell";

export function AuthPage({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <PublicShell minimal>
      <section className="grid min-h-[70vh] place-items-center px-4 py-12">
        <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6">
          <h1 className="text-2xl font-semibold tracking-normal text-slate-950">{title}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
          <div className="mt-6">{children}</div>
        </div>
      </section>
    </PublicShell>
  );
}
