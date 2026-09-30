"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { ChevronRight, CircleUserRound, Plus, Users } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { OrganizationNav } from "@/components/organization/organization-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";
import { cn } from "@/lib/utils";

type UnitPosition = {
  id: string;
  code: string;
  name: string;
  membershipPositions: {
    membership: { user: { id: string; fullName: string; email: string } };
  }[];
};

type OrganizationUnit = {
  id: string;
  parentId?: string | null;
  code: string;
  name: string;
  description?: string | null;
  status: string;
  sortOrder: number;
  memberCount: number;
  positions: UnitPosition[];
};

type UnitForm = {
  code: string;
  name: string;
  description: string;
  parentId: string;
  sortOrder: string;
};

const emptyForm: UnitForm = { code: "", name: "", description: "", parentId: "", sortOrder: "0" };

function leaderOf(unit: OrganizationUnit) {
  const leadership = unit.positions.find((position) => /chair|head|lead|trưởng|chủ nhiệm/i.test(`${position.code} ${position.name}`));
  return leadership?.membershipPositions[0]?.membership.user.fullName ?? null;
}

export default function OrganizationStructurePage() {
  const [units, setUnits] = useState<OrganizationUnit[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [form, setForm] = useState<UnitForm>(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await apiFetch<OrganizationUnit[]>("/organization/units");
      setUnits(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tải cơ cấu tổ chức.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const childrenByParent = useMemo(() => {
    const map = new Map<string, OrganizationUnit[]>();
    for (const unit of units) {
      const key = unit.parentId ?? "ROOT";
      const group = map.get(key) ?? [];
      group.push(unit);
      map.set(key, group);
    }
    for (const group of map.values()) group.sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
    return map;
  }, [units]);

  function selectUnit(unit: OrganizationUnit) {
    setSelectedId(unit.id);
    setMode("edit");
    setMessage("");
    setForm({
      code: unit.code,
      name: unit.name,
      description: unit.description ?? "",
      parentId: unit.parentId ?? "",
      sortOrder: String(unit.sortOrder)
    });
  }

  function startCreate(parentId = "") {
    setSelectedId(null);
    setMode("create");
    setMessage("");
    setForm({ ...emptyForm, parentId });
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
      parentId: form.parentId || null,
      sortOrder: Number(form.sortOrder) || 0
    });
    try {
      if (mode === "edit" && selectedId) {
        await apiFetch(`/organization/units/${selectedId}`, { method: "PATCH", body });
        setMessage("Đã cập nhật đơn vị.");
      } else {
        await apiFetch("/organization/units", { method: "POST", body });
        setMessage("Đã tạo đơn vị.");
        setForm(emptyForm);
      }
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể lưu đơn vị.");
    } finally {
      setSaving(false);
    }
  }

  async function deactivate() {
    if (!selectedId) return;
    setSaving(true);
    setError("");
    setMessage("");
    try {
      await apiFetch(`/organization/units/${selectedId}/deactivate`, { method: "POST", body: JSON.stringify({}) });
      setMessage("Đã ngưng hoạt động đơn vị và kết thúc các phân công hiện hành trong đơn vị.");
      setSelectedId(null);
      setMode("create");
      setForm(emptyForm);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể ngưng hoạt động đơn vị.");
    } finally {
      setSaving(false);
    }
  }

  function renderBranch(parentId: string, depth: number): React.ReactNode {
    return (childrenByParent.get(parentId) ?? []).map((unit) => {
      const leader = leaderOf(unit);
      return (
        <div key={unit.id}>
          <button
            type="button"
            onClick={() => selectUnit(unit)}
            className={cn(
              "group flex w-full items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-left transition hover:border-slate-200 hover:bg-slate-50",
              selectedId === unit.id && "border-blue-200 bg-blue-50"
            )}
            style={{ paddingLeft: `${12 + depth * 24}px` }}
          >
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="truncate text-sm font-semibold text-slate-900">{unit.name}</span>
                <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-600">{unit.code}</span>
                {unit.status !== "ACTIVE" ? <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">INACTIVE</span> : null}
              </div>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />{unit.memberCount} thành viên</span>
                {leader ? <span className="inline-flex items-center gap-1"><CircleUserRound className="h-3.5 w-3.5" />{leader}</span> : null}
              </div>
            </div>
          </button>
          {renderBranch(unit.id, depth + 1)}
        </div>
      );
    });
  }

  const selected = units.find((unit) => unit.id === selectedId);

  return (
    <AppShell>
      <OrganizationNav />
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Organization management</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">Cơ cấu tổ chức</h1>
          <p className="mt-1 text-sm text-slate-500">Quản lý cây đơn vị, thứ tự, điều chuyển và trạng thái hoạt động.</p>
        </div>
        <Button onClick={() => startCreate()}><Plus className="h-4 w-4" />Thêm đơn vị</Button>
      </div>

      {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      {message ? <p className="mb-4 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p> : null}

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-slate-950">Sơ đồ đơn vị</h2>
            <p className="mt-1 text-sm text-slate-500">Chọn một đơn vị để chỉnh sửa hoặc tạo đơn vị con.</p>
          </CardHeader>
          <CardContent className="p-3">
            {loading ? <p className="p-3 text-sm text-slate-500">Đang tải...</p> : null}
            {!loading && units.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center">
                <p className="text-sm font-medium text-slate-800">Chưa có cơ cấu tổ chức</p>
                <p className="mt-1 text-sm text-slate-500">Tạo Ban Chủ nhiệm hoặc đơn vị cấp cao nhất để bắt đầu.</p>
              </div>
            ) : null}
            {renderBranch("ROOT", 0)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start justify-between gap-3">
            <div>
              <h2 className="font-semibold text-slate-950">{mode === "edit" ? "Chỉnh sửa đơn vị" : "Tạo đơn vị"}</h2>
              <p className="mt-1 text-sm text-slate-500">Đổi đơn vị cha để thực hiện move; sort order dùng để sắp xếp cùng cấp.</p>
            </div>
            {selected ? <Button variant="ghost" className="min-h-9 px-2 text-xs" onClick={() => startCreate(selected.id)}>+ Đơn vị con</Button> : null}
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={submit}>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Tên đơn vị *</span>
                <Input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} required />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Mã đơn vị *</span>
                <Input value={form.code} onChange={(event) => setForm((current) => ({ ...current, code: event.target.value }))} required />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Đơn vị cha</span>
                <select
                  className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm"
                  value={form.parentId}
                  onChange={(event) => setForm((current) => ({ ...current, parentId: event.target.value }))}
                >
                  <option value="">Cấp cao nhất</option>
                  {units.filter((unit) => unit.id !== selectedId && unit.status === "ACTIVE").map((unit) => (
                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                  ))}
                </select>
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Thứ tự</span>
                <Input type="number" min={0} value={form.sortOrder} onChange={(event) => setForm((current) => ({ ...current, sortOrder: event.target.value }))} />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Mô tả</span>
                <textarea
                  className="min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={form.description}
                  onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                />
              </label>
              <div className="flex flex-wrap justify-between gap-2 border-t border-slate-100 pt-4">
                {mode === "edit" && selected?.status === "ACTIVE" ? (
                  <Button type="button" variant="destructive" disabled={saving} onClick={deactivate}>Ngưng hoạt động</Button>
                ) : <span />}
                <Button type="submit" disabled={saving}>{saving ? "Đang lưu..." : mode === "edit" ? "Lưu thay đổi" : "Tạo đơn vị"}</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
