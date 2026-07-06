"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { apiFetch } from "@/lib/api";

type FinanceRow = {
  id: string;
  type: string;
  status: string;
  amount: string;
  currency: string;
  category: string;
  account: { name: string };
};

export default function FinancePage() {
  const [rows, setRows] = useState<FinanceRow[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<FinanceRow[]>("/finance/transactions")
      .then((response) => setRows(response.data))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load finance"));
  }, []);

  return (
    <AppShell>
      <Card>
        <CardHeader>
          <h1 className="text-xl font-semibold">Finance</h1>
          <p className="text-sm text-slate-500">Tenant-scoped transaction register.</p>
        </CardHeader>
        <CardContent>
          {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          <DataTable
            rows={rows as unknown as Record<string, unknown>[]}
            columns={[
              { key: "account", label: "Account", render: (row) => (row.account as FinanceRow["account"]).name },
              { key: "type", label: "Type" },
              { key: "category", label: "Category" },
              { key: "amount", label: "Amount", render: (row) => `${row.amount as string} ${row.currency as string}` },
              { key: "status", label: "Status" }
            ]}
          />
        </CardContent>
      </Card>
    </AppShell>
  );
}
