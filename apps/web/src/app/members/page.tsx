"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { apiFetch } from "@/lib/api";

type MemberRow = {
  id: string;
  status: string;
  title?: string;
  user: { email: string; fullName: string };
};

export default function MembersPage() {
  const [rows, setRows] = useState<MemberRow[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<MemberRow[]>("/members")
      .then((response) => setRows(response.data))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load members"));
  }, []);

  return (
    <AppShell>
      <Card>
        <CardHeader>
          <h1 className="text-xl font-semibold">Members</h1>
          <p className="text-sm text-slate-500">Tenant-filtered membership directory.</p>
        </CardHeader>
        <CardContent>
          {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          <DataTable
            rows={rows as unknown as Record<string, unknown>[]}
            columns={[
              { key: "user", label: "Name", render: (row) => (row.user as MemberRow["user"]).fullName },
              { key: "user", label: "Email", render: (row) => (row.user as MemberRow["user"]).email },
              { key: "title", label: "Title" },
              { key: "status", label: "Status" }
            ]}
          />
        </CardContent>
      </Card>
    </AppShell>
  );
}
