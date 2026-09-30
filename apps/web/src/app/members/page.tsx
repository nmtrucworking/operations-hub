"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Copy, Plus, Search, XCircle } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { OrganizationNav } from "@/components/organization/organization-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";

type OrganizationUnit = { id: string; name: string; code: string; status: string };
type Position = { id: string; name: string; code: string; unitId?: string | null; status: string };
type MemberRow = {
  id: string;
  status: string;
  title?: string | null;
  user: { id: string; email: string; fullName: string };
  profile?: { studentCode?: string | null; phone?: string | null } | null;
  membershipUnits: { isPrimary: boolean; unit: OrganizationUnit }[];
  membershipPositions: { position: Position & { unit?: OrganizationUnit | null } }[];
  roles: { role: { id: string; name: string } }[];
};


type InvitationRow = {
  id: string;
  email: string;
  fullName: string;
  title?: string | null;
  targetUnitId?: string | null;
  targetPositionId?: string | null;
  status: string;
  state: string;
  expiresAt: string;
  createdAt: string;
};

type InvitationCreated = InvitationRow & { token: string };

type CreateMemberForm = {
  fullName: string;
  email: string;
  studentCode: string;
  phone: string;
  title: string;
  unitId: string;
  positionId: string;
};

const emptyForm: CreateMemberForm = {
  fullName: "",
  email: "",
  studentCode: "",
  phone: "",
  title: "",
  unitId: "",
  positionId: ""
};

export default function MembersPage() {
  const [rows, setRows] = useState<MemberRow[]>([]);
  const [units, setUnits] = useState<OrganizationUnit[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [invitations, setInvitations] = useState<InvitationRow[]>([]);
  const [form, setForm] = useState<CreateMemberForm>(emptyForm);
  const [search, setSearch] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [inviteLink, setInviteLink] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [membersResponse, unitsResponse, positionsResponse, invitationsResponse] = await Promise.all([
        apiFetch<MemberRow[]>("/members?limit=100"),
        apiFetch<OrganizationUnit[]>("/organization/units"),
        apiFetch<Position[]>("/organization/positions"),
        apiFetch<InvitationRow[]>("/members/invitations")
      ]);
      setRows(membersResponse.data);
      setUnits(unitsResponse.data);
      setPositions(positionsResponse.data);
      setInvitations(invitationsResponse.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tải danh bạ thành viên.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const filteredRows = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    if (!keyword) return rows;
    return rows.filter((row) => {
      const unitsText = row.membershipUnits.map((item) => item.unit.name).join(" ");
      const positionsText = row.membershipPositions.map((item) => item.position.name).join(" ");
      return `${row.user.fullName} ${row.user.email} ${row.profile?.studentCode ?? ""} ${unitsText} ${positionsText}`
        .toLowerCase()
        .includes(keyword);
    });
  }, [rows, search]);

  const availablePositions = positions.filter(
    (position) => position.status === "ACTIVE" && (!form.unitId || !position.unitId || position.unitId === form.unitId)
  );

  async function createMember(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");
    setInviteLink("");
    try {
      const response = await apiFetch<InvitationCreated>("/members/invitations", {
        method: "POST",
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          studentCode: form.studentCode || undefined,
          phone: form.phone || undefined,
          title: form.title || undefined,
          unitId: form.unitId || undefined,
          positionId: form.positionId || undefined
        })
      });
      const link = `${window.location.origin}/invite/${response.data.token}`;
      setInviteLink(link);
      setForm(emptyForm);
      setShowCreate(false);
      setMessage("Đã tạo lời mời. Link chỉ hiển thị ở lần tạo này; hãy copy và gửi cho thành viên.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tạo lời mời thành viên.");
    } finally {
      setSaving(false);
    }
  }

  async function revokeInvitation(id: string) {
    setError("");
    setMessage("");
    try {
      await apiFetch(`/members/invitations/${id}/revoke`, { method: "POST", body: JSON.stringify({}) });
      setMessage("Đã thu hồi lời mời.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể thu hồi lời mời.");
    }
  }

  async function copyInviteLink() {
    if (!inviteLink) return;
    await navigator.clipboard.writeText(inviteLink);
    setMessage("Đã copy link lời mời.");
  }

  return (
    <AppShell>
      <OrganizationNav />
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Organization management</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">Thành viên</h1>
          <p className="mt-1 text-sm text-slate-500">Danh bạ thành viên cùng đơn vị, chức vụ và Role hiện hành.</p>
        </div>
        <Button onClick={() => setShowCreate((current) => !current)}><Plus className="h-4 w-4" />Mời thành viên</Button>
      </div>

      {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      {message ? <p className="mb-4 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p> : null}
      {inviteLink ? (
        <div className="mb-4 flex flex-col gap-3 rounded-md border border-blue-200 bg-blue-50 p-3 sm:flex-row sm:items-center">
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">Link lời mời một lần</div>
            <div className="mt-1 break-all text-sm text-slate-800">{inviteLink}</div>
          </div>
          <Button type="button" variant="secondary" onClick={copyInviteLink}><Copy className="h-4 w-4" />Copy link</Button>
        </div>
      ) : null}

      {showCreate ? (
        <Card className="mb-5">
          <CardHeader>
            <h2 className="font-semibold text-slate-950">Mời thành viên</h2>
            <p className="mt-1 text-sm text-slate-500">Hệ thống tạo lời mời có hạn dùng. Thành viên tự đặt hoặc xác thực mật khẩu khi chấp nhận.</p>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" onSubmit={createMember}>
              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Họ tên *</span>
                <Input value={form.fullName} onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))} required />
              </label>
              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Email *</span>
                <Input type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} required />
              </label>
              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">MSSV</span>
                <Input value={form.studentCode} onChange={(event) => setForm((current) => ({ ...current, studentCode: event.target.value }))} />
              </label>
              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Số điện thoại</span>
                <Input value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} />
              </label>
              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Đơn vị chính</span>
                <select
                  className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm"
                  value={form.unitId}
                  onChange={(event) => setForm((current) => ({ ...current, unitId: event.target.value, positionId: "" }))}
                >
                  <option value="">Chưa phân đơn vị</option>
                  {units.filter((unit) => unit.status === "ACTIVE").map((unit) => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
                </select>
              </label>
              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Chức vụ</span>
                <select className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm" value={form.positionId} onChange={(event) => setForm((current) => ({ ...current, positionId: event.target.value }))}>
                  <option value="">Chưa bổ nhiệm</option>
                  {availablePositions.map((position) => <option key={position.id} value={position.id}>{position.name}</option>)}
                </select>
              </label>
              <label className="space-y-1.5 md:col-span-2">
                <span className="text-sm font-medium text-slate-700">Tiêu đề hiển thị</span>
                <Input placeholder="Ví dụ: Trưởng Ban Công nghệ" value={form.title} onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))} />
              </label>
              <div className="flex items-end justify-end gap-2 xl:col-span-1">
                <Button type="button" variant="secondary" onClick={() => setShowCreate(false)}>Hủy</Button>
                <Button type="submit" disabled={saving}>{saving ? "Đang tạo..." : "Tạo lời mời"}</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : null}

      <Card className="mb-5">
        <CardHeader>
          <h2 className="font-semibold text-slate-950">Lời mời thành viên</h2>
          <p className="mt-1 text-sm text-slate-500">Theo dõi lời mời đang chờ, đã chấp nhận, hết hạn hoặc đã thu hồi.</p>
        </CardHeader>
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr><th className="px-5 py-3">Người được mời</th><th className="px-5 py-3">Phân công dự kiến</th><th className="px-5 py-3">Hết hạn</th><th className="px-5 py-3">Trạng thái</th><th className="px-5 py-3" /></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invitations.length === 0 ? <tr><td colSpan={5} className="px-5 py-6 text-center text-slate-500">Chưa có lời mời.</td></tr> : null}
              {invitations.map((invitation) => {
                const unit = units.find((item) => item.id === invitation.targetUnitId);
                const position = positions.find((item) => item.id === invitation.targetPositionId);
                return (
                  <tr key={invitation.id}>
                    <td className="px-5 py-3"><div className="font-medium text-slate-950">{invitation.fullName}</div><div className="text-xs text-slate-500">{invitation.email}</div></td>
                    <td className="px-5 py-3 text-slate-700">{[unit?.name, position?.name].filter(Boolean).join(" · ") || "—"}</td>
                    <td className="px-5 py-3 text-slate-600">{new Date(invitation.expiresAt).toLocaleString("vi-VN")}</td>
                    <td className="px-5 py-3"><span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{invitation.state}</span></td>
                    <td className="px-5 py-3 text-right">{invitation.state === "PENDING" ? <Button className="min-h-9 px-3" type="button" variant="ghost" onClick={() => revokeInvitation(invitation.id)}><XCircle className="h-4 w-4" />Thu hồi</Button> : null}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold text-slate-950">Danh bạ</h2>
            <p className="mt-1 text-sm text-slate-500">{rows.length} thành viên trong tenant hiện tại.</p>
          </div>
          <label className="relative block w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input className="pl-9" placeholder="Tìm tên, MSSV, ban..." value={search} onChange={(event) => setSearch(event.target.value)} />
          </label>
        </CardHeader>
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full min-w-[880px] text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-semibold">Thành viên</th>
                <th className="px-5 py-3 font-semibold">Đơn vị</th>
                <th className="px-5 py-3 font-semibold">Chức vụ</th>
                <th className="px-5 py-3 font-semibold">Role</th>
                <th className="px-5 py-3 font-semibold">Trạng thái</th>
                <th className="px-5 py-3 font-semibold" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? <tr><td colSpan={6} className="px-5 py-8 text-center text-slate-500">Đang tải...</td></tr> : null}
              {!loading && filteredRows.length === 0 ? <tr><td colSpan={6} className="px-5 py-8 text-center text-slate-500">Không có thành viên phù hợp.</td></tr> : null}
              {filteredRows.map((row) => {
                const primaryUnit = row.membershipUnits.find((item) => item.isPrimary)?.unit ?? row.membershipUnits[0]?.unit;
                return (
                  <tr key={row.id} className="hover:bg-slate-50">
                    <td className="px-5 py-3">
                      <div className="font-medium text-slate-950">{row.user.fullName}</div>
                      <div className="mt-0.5 text-xs text-slate-500">{row.profile?.studentCode ? `${row.profile.studentCode} · ` : ""}{row.user.email}</div>
                    </td>
                    <td className="px-5 py-3 text-slate-700">{primaryUnit?.name ?? "—"}</td>
                    <td className="px-5 py-3 text-slate-700">{row.membershipPositions.map((item) => item.position.name).join(", ") || "—"}</td>
                    <td className="px-5 py-3 text-slate-600">{row.roles.map((item) => item.role.name).join(", ") || "—"}</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${row.status === "ACTIVE" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{row.status}</span>
                    </td>
                    <td className="px-5 py-3 text-right"><Link className="text-sm font-medium text-blue-700 hover:underline" href={`/organization/members/${row.id}`}>Xem hồ sơ</Link></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </AppShell>
  );
}
