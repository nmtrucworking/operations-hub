"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { OrganizationNav } from "@/components/organization/organization-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";
import { cn } from "@/lib/utils";

type OrganizationUnit = { id: string; name: string; code: string; status: string };
type Position = {
  id: string;
  code: string;
  name: string;
  description?: string | null;
  status: string;
  sortOrder: number;
  unitId?: string | null;
  unit?: OrganizationUnit | null;
  _count?: { membershipPositions: number };
};

type PositionForm = {
  code: string;
  name: string;
  description: string;
  unitId: string;
  sortOrder: string;
};

const emptyForm: PositionForm = { code: "", name: "", description: "", unitId: "", sortOrder: "0" };

export default function OrganizationPositionsPage() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [units, setUnits] = useState<OrganizationUnit[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<PositionForm>(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [positionsResponse, unitsResponse] = await Promise.all([
        apiFetch<Position[]>("/organization/positions"),
        apiFetch<OrganizationUnit[]>("/organization/units")
      ]);
      setPositions(positionsResponse.data);
      setUnits(unitsResponse.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tải danh sách chức vụ.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  function select(position: Position) {
    setSelectedId(position.id);
    setMessage("");
    setForm({
      code: position.code,
      name: position.name,
      description: position.description ?? "",
      unitId: position.unitId ?? "",
      sortOrder: String(position.sortOrder)
    });
  }

  function startCreate() {
    setSelectedId(null);
    setForm(emptyForm);
    setMessage("");
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");
    const body = JSON.stringify({
      code: form.code,
      name: form.name,
      description: form.description || null,
      unitId: form.unitId || null,
      sortOrder: Number(form.sortOrder) || 0
    });
    try {
      if (selectedId) {
        await apiFetch(`/organization/positions/${selectedId}`, { method: "PATCH", body });
        setMessage("Đã cập nhật chức vụ.");
      } else {
        await apiFetch("/organization/positions", { method: "POST", body });
        setMessage("Đã tạo chức vụ.");
        setForm(emptyForm);
      }
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể lưu chức vụ.");
    } finally {
      setSaving(false);
    }
  }

  async function deactivate() {
    if (!selectedId) return;
    setSaving(true);
    setError("");
    try {
      await apiFetch(`/organization/positions/${selectedId}/deactivate`, { method: "POST", body: JSON.stringify({}) });
      setMessage("Đã ngưng chức vụ và kết thúc các bổ nhiệm hiện hành.");
      startCreate();
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể ngưng chức vụ.");
    } finally {
      setSaving(false);
    }
  }

  const selected = positions.find((position) => position.id === selectedId);

  return (
    <AppShell>
      <OrganizationNav />
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Organization management</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">Chức vụ</h1>
          <p className="mt-1 text-sm text-slate-500">Chức vụ mô tả vị trí trong cơ cấu; Role tiếp tục dùng riêng cho quyền hệ thống.</p>
        </div>
        <Button onClick={startCreate}><Plus className="h-4 w-4" />Thêm chức vụ</Button>
      </div>

      {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      {message ? <p className="mb-4 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p> : null}

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)]">
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-slate-950">Danh mục chức vụ</h2>
            <p className="mt-1 text-sm text-slate-500">Chức vụ có thể áp dụng toàn tổ chức hoặc giới hạn trong một đơn vị.</p>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Chức vụ</th>
                  <th className="px-5 py-3 font-semibold">Đơn vị</th>
                  <th className="px-5 py-3 font-semibold">Đang bổ nhiệm</th>
                  <th className="px-5 py-3 font-semibold">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? <tr><td colSpan={4} className="px-5 py-8 text-center text-slate-500">Đang tải...</td></tr> : null}
                {!loading && positions.length === 0 ? <tr><td colSpan={4} className="px-5 py-8 text-center text-slate-500">Chưa có chức vụ.</td></tr> : null}
                {positions.map((position) => (
                  <tr
                    key={position.id}
                    onClick={() => select(position)}
                    className={cn("cursor-pointer hover:bg-slate-50", selectedId === position.id && "bg-blue-50/70")}
                  >
                    <td className="px-5 py-3">
                      <div className="font-medium text-slate-900">{position.name}</div>
                      <div className="mt-0.5 font-mono text-xs text-slate-500">{position.code}</div>
                    </td>
                    <td className="px-5 py-3 text-slate-600">{position.unit?.name ?? "Toàn tổ chức"}</td>
                    <td className="px-5 py-3 text-slate-600">{position._count?.membershipPositions ?? 0}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${position.status === "ACTIVE" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                        {position.status === "ACTIVE" ? "Hoạt động" : "Ngưng"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-semibold text-slate-950">{selectedId ? "Chỉnh sửa chức vụ" : "Tạo chức vụ"}</h2>
            <p className="mt-1 text-sm text-slate-500">Không thể chuyển đơn vị khi chức vụ còn người đang giữ.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={submit}>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Tên chức vụ *</span>
                <Input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} required />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Mã chức vụ *</span>
                <Input value={form.code} onChange={(event) => setForm((current) => ({ ...current, code: event.target.value }))} required />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Phạm vi đơn vị</span>
                <select className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm" value={form.unitId} onChange={(event) => setForm((current) => ({ ...current, unitId: event.target.value }))}>
                  <option value="">Toàn tổ chức</option>
                  {units.filter((unit) => unit.status === "ACTIVE").map((unit) => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
                </select>
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Thứ tự</span>
                <Input type="number" min={0} value={form.sortOrder} onChange={(event) => setForm((current) => ({ ...current, sortOrder: event.target.value }))} />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Mô tả</span>
                <textarea className="min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} />
              </label>
              <div className="flex flex-wrap justify-between gap-2 border-t border-slate-100 pt-4">
                {selected?.status === "ACTIVE" ? <Button type="button" variant="destructive" disabled={saving} onClick={deactivate}>Ngưng chức vụ</Button> : <span />}
                <Button type="submit" disabled={saving}>{saving ? "Đang lưu..." : selectedId ? "Lưu thay đổi" : "Tạo chức vụ"}</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
