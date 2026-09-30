"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";

type RequestType = { id: string; name: string };
type RequestRow = {
  id: string;
  title: string;
  description?: string;
  status: string;
  type?: RequestType | null;
  creator: { fullName: string };
  createdAt: string;
};

export default function RequestsPage() {
  const [rows, setRows] = useState<RequestRow[]>([]);
  const [types, setTypes] = useState<RequestType[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeId, setTypeId] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState("");

  const load = useCallback(async () => {
    try {
      const [requests, requestTypes] = await Promise.all([
        apiFetch<RequestRow[]>("/requests"),
        apiFetch<RequestType[]>("/requests/types")
      ]);
      setRows(requests.data);
      setTypes(requestTypes.data);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tải yêu cầu.");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function createRequest(event: FormEvent) {
    event.preventDefault();
    if (!title.trim()) return;
    setBusy("create");
    setError("");
    try {
      await apiFetch("/requests", {
        method: "POST",
        body: JSON.stringify({ title: title.trim(), description: description.trim() || undefined, typeId: typeId || undefined })
      });
      setTitle("");
      setDescription("");
      setTypeId("");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tạo yêu cầu.");
    } finally {
      setBusy("");
    }
  }

  async function command(id: string, action: "submit" | "review" | "approve" | "reject" | "cancel" | "complete") {
    setBusy(`${id}:${action}`);
    setError("");
    try {
      await apiFetch(`/requests/${id}/${action}`, {
        method: "POST",
        body: action === "approve" || action === "reject" ? JSON.stringify({}) : undefined
      });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : `Không thể ${action} yêu cầu.`);
    } finally {
      setBusy("");
    }
  }

  return (
    <AppShell>
      <div className="grid gap-6 xl:grid-cols-[22rem_minmax(0,1fr)]">
        <Card className="h-fit">
          <CardHeader>
            <h1 className="text-xl font-semibold">Yêu cầu nội bộ</h1>
            <p className="text-sm text-slate-500">Tạo draft, gửi duyệt và theo dõi workflow.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={createRequest}>
              <label className="block text-sm font-medium text-slate-700">
                Tiêu đề
                <Input className="mt-1" value={title} onChange={(event) => setTitle(event.target.value)} required minLength={3} />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Loại yêu cầu
                <select
                  className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm"
                  value={typeId}
                  onChange={(event) => setTypeId(event.target.value)}
                >
                  <option value="">Không phân loại</option>
                  {types.map((type) => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Mô tả
                <textarea
                  className="mt-1 min-h-28 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>
              <Button className="w-full" disabled={busy === "create"} type="submit">
                {busy === "create" ? "Đang tạo..." : "Tạo draft"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-semibold">Danh sách yêu cầu</h2>
            <p className="text-sm text-slate-500">Status chỉ thay đổi qua command endpoint; không chỉnh trực tiếp từ client.</p>
          </CardHeader>
          <CardContent>
            {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
            <div className="space-y-3">
              {rows.map((row) => (
                <article key={row.id} className="rounded-lg border border-slate-200 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-950">{row.title}</h3>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{row.status}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {row.type?.name ?? "Không phân loại"} · {row.creator.fullName} · {new Date(row.createdAt).toLocaleString("vi-VN")}
                      </p>
                      {row.description ? <p className="mt-3 text-sm text-slate-700">{row.description}</p> : null}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {row.status === "DRAFT" ? (
                        <Button variant="secondary" disabled={busy.startsWith(row.id)} onClick={() => void command(row.id, "submit")}>Gửi duyệt</Button>
                      ) : null}
                      {row.status === "SUBMITTED" ? (
                        <Button variant="secondary" disabled={busy.startsWith(row.id)} onClick={() => void command(row.id, "review")}>Nhận xử lý</Button>
                      ) : null}
                      {row.status === "SUBMITTED" || row.status === "IN_REVIEW" ? (
                        <>
                          <Button disabled={busy.startsWith(row.id)} onClick={() => void command(row.id, "approve")}>Duyệt</Button>
                          <Button variant="destructive" disabled={busy.startsWith(row.id)} onClick={() => void command(row.id, "reject")}>Từ chối</Button>
                        </>
                      ) : null}
                      {row.status === "DRAFT" || row.status === "SUBMITTED" || row.status === "IN_REVIEW" ? (
                        <Button variant="ghost" disabled={busy.startsWith(row.id)} onClick={() => void command(row.id, "cancel")}>Hủy</Button>
                      ) : null}
                      {row.status === "APPROVED" ? (
                        <Button variant="secondary" disabled={busy.startsWith(row.id)} onClick={() => void command(row.id, "complete")}>Hoàn tất</Button>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
              {!rows.length ? <p className="py-8 text-center text-sm text-slate-500">Chưa có yêu cầu.</p> : null}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
