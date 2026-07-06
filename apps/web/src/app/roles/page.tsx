"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { apiFetch } from "@/lib/api";

type RoleRow = {
  id: string;
  name: string;
  description?: string;
  permissions: { permission: { code: string } }[];
};

export default function RolesPage() {
  const [rows, setRows] = useState<RoleRow[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<RoleRow[]>("/roles")
      .then((response) => setRows(response.data))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load roles"));
  }, []);

  return (
    <AppShell>
      <Card>
        <CardHeader>
          <h1 className="text-xl font-semibold">Roles</h1>
          <p className="text-sm text-slate-500">Tenant roles and effective permission matrix.</p>
        </CardHeader>
        <CardContent>
          {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          <DataTable
            rows={rows as unknown as Record<string, unknown>[]}
            columns={[
              { key: "name", label: "Role" },
              {
                key: "permissions",
                label: "Permissions",
                render: (row) => (row.permissions as RoleRow["permissions"]).map((item) => item.permission.code).join(", ")
              }
            ]}
          />
        </CardContent>
      </Card>
    </AppShell>
  );
}
