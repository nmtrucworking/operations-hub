"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { apiFetch } from "@/lib/api";

type Summary = {
  cards: { key: string; label: string; value: number }[];
  metrics: { id: string; label: string; value: string; unit?: string }[];
};

export default function DashboardPage() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<Summary>("/dashboard/summary")
      .then((response) => setSummary(response.data))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load dashboard"));
  }, []);

  return (
    <AppShell>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-slate-500">Role-aware operational summary for the active tenant.</p>
      </div>
      {error ? <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      <div className="grid gap-4 md:grid-cols-5">
        {(summary?.cards ?? []).map((card) => (
          <Card key={card.key}>
            <CardContent>
              <div className="text-sm text-slate-500">{card.label}</div>
              <div className="mt-2 text-2xl font-semibold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-6">
        <CardHeader>
          <h2 className="font-semibold">Metrics</h2>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {(summary?.metrics ?? []).map((metric) => (
            <div key={metric.id} className="rounded-md border border-slate-200 p-4">
              <div className="text-sm text-slate-500">{metric.label}</div>
              <div className="mt-2 text-xl font-semibold">
                {metric.value}
                {metric.unit ?? ""}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}
