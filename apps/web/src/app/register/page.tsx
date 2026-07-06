"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    try {
      await apiFetch("/auth/register", { method: "POST", body: JSON.stringify({ fullName, email, password }) });
      setMessage("Account created. You can sign in now.");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Registration failed");
    }
  }

  return (
    <main className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-xl font-semibold">Create account</h1>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={submit}>
            <Input placeholder="Full name" value={fullName} onChange={(event) => setFullName(event.target.value)} />
            <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {message ? <p className="text-sm text-slate-600">{message}</p> : null}
            <Button className="w-full">Create account</Button>
            <Link className="block text-center text-sm text-blue-700" href="/login">
              Back to sign in
            </Link>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
