"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch, SessionState, writeSession } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type LoginResponse = SessionState & {
  tenants: NonNullable<SessionState["tenants"]>;
};

type SelectTenantResponse = {
  accessToken: string;
  tenant: { id: string; name: string };
  membershipId: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("owner@demo.example");
  const [password, setPassword] = useState("Password123!");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const login = await apiFetch<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });
      const firstTenant = login.data.tenants[0];
      writeSession({
        accessToken: login.data.accessToken,
        refreshToken: login.data.refreshToken,
        user: login.data.user,
        tenants: login.data.tenants,
        tenantId: firstTenant?.tenant.id
      });
      if (firstTenant) {
        const selected = await apiFetch<SelectTenantResponse>("/auth/select-tenant", {
          method: "POST",
          body: JSON.stringify({ tenantId: firstTenant.tenant.id })
        });
        writeSession({
          accessToken: selected.data.accessToken,
          refreshToken: login.data.refreshToken,
          user: login.data.user,
          tenants: login.data.tenants,
          tenantId: selected.data.tenant.id
        });
      }
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-xl font-semibold">Operations Hub</h1>
          <p className="text-sm text-slate-500">Sign in to a demo tenant.</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={submit}>
            <label className="block space-y-2 text-sm">
              <span>Email</span>
              <Input value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label className="block space-y-2 text-sm">
              <span>Password</span>
              <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            {error ? <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
            <Button className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
