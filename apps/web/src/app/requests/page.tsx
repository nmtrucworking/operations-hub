"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { apiFetch } from "@/lib/api";

type RequestRow = {
  id: string;
  title: string;
  status: string;
  creator: { fullName: string };
  createdAt: string;
};

export default function RequestsPage() {
  const [rows, setRows] = useState<RequestRow[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<RequestRow[]>("/requests")
      .then((response) => setRows(response.data))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load requests"));
  }, []);

  return (
    <AppShell>
      <Card>
        <CardHeader>
          <h1 className="text-xl font-semibold">Requests</h1>
          <p className="text-sm text-slate-500">Internal request workflow skeleton.</p>
        </CardHeader>
        <CardContent>
          {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          <DataTable
            rows={rows as unknown as Record<string, unknown>[]}
            columns={[
              { key: "title", label: "Title" },
              { key: "status", label: "Status" },
              { key: "creator", label: "Creator", render: (row) => (row.creator as RequestRow["creator"]).fullName },
              { key: "createdAt", label: "Created" }
            ]}
          />
        </CardContent>
      </Card>
    </AppShell>
  );
}
