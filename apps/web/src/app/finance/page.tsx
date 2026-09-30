"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";

type FinanceAccount = { id: string; name: string; currency: string; balance: string };
type ApprovedRequest = { id: string; title: string; status: string };
type FinanceRow = {
  id: string;
  type: "INCOME" | "EXPENSE";
  status: string;
  amount: string;
  currency: string;
  category: string;
  description?: string;
  account: { name: string };
  sourceRequest?: { id: string; title: string; status: string } | null;
};

export default function FinancePage() {
  const [rows, setRows] = useState<FinanceRow[]>([]);
  const [accounts, setAccounts] = useState<FinanceAccount[]>([]);
  const [requests, setRequests] = useState<ApprovedRequest[]>([]);
  const [accountId, setAccountId] = useState("");
  const [type, setType] = useState<"INCOME" | "EXPENSE">("EXPENSE");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [sourceRequestId, setSourceRequestId] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState("");

  const load = useCallback(async () => {
    try {
      const [transactions, accountResponse] = await Promise.all([
        apiFetch<FinanceRow[]>("/finance/transactions"),
        apiFetch<FinanceAccount[]>("/finance/accounts")
      ]);
      setRows(transactions.data);
      setAccounts(accountResponse.data);
      setAccountId((current) => current || accountResponse.data[0]?.id || "");
      try {
        const requestResponse = await apiFetch<ApprovedRequest[]>("/requests");
        setRequests(requestResponse.data.filter((item) => item.status === "APPROVED"));
      } catch {
        setRequests([]);
      }
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tải dữ liệu tài chính.");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function createTransaction(event: FormEvent) {
    event.preventDefault();
    const numericAmount = Number(amount);
    if (!accountId || !category.trim() || !Number.isFinite(numericAmount) || numericAmount <= 0) return;
    setBusy("create");
    setError("");
    try {
      await apiFetch("/finance/transactions", {
        method: "POST",
        body: JSON.stringify({
          accountId,
          type,
          amount: numericAmount,
          category: category.trim(),
          description: description.trim() || undefined,
          sourceRequestId: sourceRequestId || undefined
        })
      });
      setAmount("");
      setCategory("");
      setDescription("");
      setSourceRequestId("");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tạo giao dịch.");
    } finally {
      setBusy("");
    }
  }

  async function command(id: string, action: "submit" | "approve" | "reject") {
    setBusy(`${id}:${action}`);
    setError("");
    try {
      await apiFetch(`/finance/transactions/${id}/${action}`, {
        method: "POST",
        body: action === "approve" || action === "reject" ? JSON.stringify({}) : undefined
      });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : `Không thể ${action} giao dịch.`);
    } finally {
      setBusy("");
    }
  }

  return (
    <AppShell>
      <div className="grid gap-6 xl:grid-cols-[22rem_minmax(0,1fr)]">
        <Card className="h-fit">
          <CardHeader>
            <h1 className="text-xl font-semibold">Tài chính</h1>
            <p className="text-sm text-slate-500">Thu/chi baseline với approval và liên kết yêu cầu đã duyệt.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={createTransaction}>
              <label className="block text-sm font-medium text-slate-700">
                Quỹ
                <select className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm" value={accountId} onChange={(event) => setAccountId(event.target.value)} required>
                  <option value="" disabled>Chọn quỹ</option>
                  {accounts.map((account) => <option key={account.id} value={account.id}>{account.name}</option>)}
                </select>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block text-sm font-medium text-slate-700">
                  Loại
                  <select className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm" value={type} onChange={(event) => setType(event.target.value as "INCOME" | "EXPENSE")}>
                    <option value="INCOME">Thu</option>
                    <option value="EXPENSE">Chi</option>
                  </select>
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Số tiền
                  <Input className="mt-1" inputMode="decimal" min="0.01" step="0.01" type="number" value={amount} onChange={(event) => setAmount(event.target.value)} required />
                </label>
              </div>
              <label className="block text-sm font-medium text-slate-700">
                Danh mục
                <Input className="mt-1" value={category} onChange={(event) => setCategory(event.target.value)} required />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Nguồn yêu cầu
                <select className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm" value={sourceRequestId} onChange={(event) => setSourceRequestId(event.target.value)}>
                  <option value="">Không liên kết</option>
                  {requests.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Diễn giải
                <textarea className="mt-1 min-h-24 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" value={description} onChange={(event) => setDescription(event.target.value)} />
              </label>
              <Button className="w-full" disabled={busy === "create" || !accounts.length} type="submit">{busy === "create" ? "Đang tạo..." : "Tạo draft"}</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <Card key={account.id}>
                <CardContent>
                  <p className="text-sm text-slate-500">{account.name}</p>
                  <p className="mt-2 text-xl font-semibold">{Number(account.balance).toLocaleString("vi-VN")} {account.currency}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <h2 className="font-semibold">Giao dịch</h2>
            </CardHeader>
            <CardContent>
              {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
              <div className="space-y-3">
                {rows.map((row) => (
                  <article key={row.id} className="rounded-lg border border-slate-200 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold">{row.account.name}</span>
                          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium">{row.type}</span>
                          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium">{row.status}</span>
                        </div>
                        <p className="mt-1 text-lg font-semibold">{Number(row.amount).toLocaleString("vi-VN")} {row.currency}</p>
                        <p className="text-sm text-slate-600">{row.category}{row.description ? ` · ${row.description}` : ""}</p>
                        {row.sourceRequest ? <p className="mt-1 text-xs text-blue-700">Từ yêu cầu: {row.sourceRequest.title}</p> : null}
                      </div>
                      <div className="flex gap-2">
                        {row.status === "DRAFT" ? <Button variant="secondary" disabled={busy.startsWith(row.id)} onClick={() => void command(row.id, "submit")}>Gửi duyệt</Button> : null}
                        {row.status === "PENDING_APPROVAL" ? (
                          <>
                            <Button disabled={busy.startsWith(row.id)} onClick={() => void command(row.id, "approve")}>Duyệt</Button>
                            <Button variant="destructive" disabled={busy.startsWith(row.id)} onClick={() => void command(row.id, "reject")}>Từ chối</Button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
                {!rows.length ? <p className="py-8 text-center text-sm text-slate-500">Chưa có giao dịch.</p> : null}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
