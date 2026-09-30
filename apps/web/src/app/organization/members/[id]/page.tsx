"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, BriefcaseBusiness, Building2, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { OrganizationNav } from "@/components/organization/organization-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";

type OrganizationUnit = { id: string; code: string; name: string; status: string };
type Position = { id: string; code: string; name: string; status: string; unitId?: string | null; unit?: OrganizationUnit | null };
type UnitAssignment = {
  unitId: string;
  isPrimary: boolean;
  effectiveFrom: string;
  effectiveTo?: string | null;
  unit: OrganizationUnit;
};
type PositionAssignment = {
  positionId: string;
  effectiveFrom: string;
  effectiveTo?: string | null;
  position: Position;
};
type MemberDetail = {
  id: string;
  status: string;
  title?: string | null;
  joinedAt?: string | null;
  endedAt?: string | null;
  user: { id: string; fullName: string; email: string; isActive: boolean };
  profile?: { studentCode?: string | null; phone?: string | null; bio?: string | null } | null;
  membershipUnits: UnitAssignment[];
  membershipPositions: PositionAssignment[];
  roles: {
    role: {
      id: string;
      name: string;
      permissions: { permission: { code: string } }[];
    };
  }[];
};

function dateLabel(value?: string | null) {
  if (!value) return "Hiện tại";
  return new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value));
}

export default function OrganizationMemberDetailPage() {
  const params = useParams<{ id: string }>();
  const memberId = params.id;
  const [member, setMember] = useState<MemberDetail | null>(null);
  const [units, setUnits] = useState<OrganizationUnit[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [unitId, setUnitId] = useState("");
  const [positionId, setPositionId] = useState("");
  const [isPrimary, setIsPrimary] = useState(true);
  const [editing, setEditing] = useState(false);
  const [profileForm, setProfileForm] = useState({ title: "", studentCode: "", phone: "", bio: "", status: "ACTIVE" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [memberResponse, unitsResponse, positionsResponse] = await Promise.all([
        apiFetch<MemberDetail>(`/members/${memberId}`),
        apiFetch<OrganizationUnit[]>("/organization/units"),
        apiFetch<Position[]>("/organization/positions")
      ]);
      const detail = memberResponse.data;
      setMember(detail);
      setUnits(unitsResponse.data);
      setPositions(positionsResponse.data);
      setProfileForm({
        title: detail.title ?? "",
        studentCode: detail.profile?.studentCode ?? "",
        phone: detail.profile?.phone ?? "",
        bio: detail.profile?.bio ?? "",
        status: detail.status
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tải hồ sơ thành viên.");
    } finally {
      setLoading(false);
    }
  }, [memberId]);

  useEffect(() => {
    void load();
  }, [load]);

  const activeUnits = useMemo(() => member?.membershipUnits.filter((item) => !item.effectiveTo) ?? [], [member]);
  const activePositions = useMemo(() => member?.membershipPositions.filter((item) => !item.effectiveTo) ?? [], [member]);
  const assignablePositions = positions.filter((position) => {
    if (position.status !== "ACTIVE") return false;
    if (!position.unitId) return true;
    return activeUnits.some((assignment) => assignment.unitId === position.unitId);
  });

  async function saveProfile(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");
    try {
      await apiFetch(`/members/${memberId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: profileForm.title,
          studentCode: profileForm.studentCode,
          phone: profileForm.phone,
          bio: profileForm.bio,
          status: profileForm.status
        })
      });
      setEditing(false);
      setMessage("Đã cập nhật hồ sơ thành viên.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể cập nhật thành viên.");
    } finally {
      setSaving(false);
    }
  }

  async function assignUnit(event: FormEvent) {
    event.preventDefault();
    if (!unitId) return;
    setSaving(true);
    setError("");
    setMessage("");
    try {
      await apiFetch(`/members/${memberId}/units`, {
        method: "POST",
        body: JSON.stringify({ unitId, isPrimary })
      });
      setUnitId("");
      setMessage(isPrimary ? "Đã điều chuyển/cập nhật đơn vị chính." : "Đã thêm đơn vị tham gia.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể phân công đơn vị.");
    } finally {
      setSaving(false);
    }
  }

  async function assignPosition(event: FormEvent) {
    event.preventDefault();
    if (!positionId) return;
    setSaving(true);
    setError("");
    setMessage("");
    try {
      await apiFetch(`/members/${memberId}/positions`, {
        method: "POST",
        body: JSON.stringify({ positionId })
      });
      setPositionId("");
      setMessage("Đã bổ nhiệm chức vụ.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể bổ nhiệm chức vụ.");
    } finally {
      setSaving(false);
    }
  }

  async function endUnit(assignment: UnitAssignment) {
    setSaving(true);
    setError("");
    try {
      await apiFetch(`/members/${memberId}/units/${assignment.unitId}/end`, { method: "POST", body: JSON.stringify({}) });
      setMessage("Đã kết thúc phân công đơn vị và các chức vụ thuộc đơn vị đó.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể kết thúc phân công đơn vị.");
    } finally {
      setSaving(false);
    }
  }

  async function endPosition(assignment: PositionAssignment) {
    setSaving(true);
    setError("");
    try {
      await apiFetch(`/members/${memberId}/positions/${assignment.positionId}/end`, { method: "POST", body: JSON.stringify({}) });
      setMessage("Đã kết thúc bổ nhiệm chức vụ.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể kết thúc chức vụ.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AppShell>
      <OrganizationNav />
      <Link href="/members" className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-700">
        <ArrowLeft className="h-4 w-4" />Quay lại danh bạ
      </Link>

      {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      {message ? <p className="mb-4 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p> : null}
      {loading ? <p className="text-sm text-slate-500">Đang tải...</p> : null}

      {member ? (
        <div className="space-y-5">
          <Card>
            <CardContent className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-semibold tracking-tight text-slate-950">{member.user.fullName}</h1>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${member.status === "ACTIVE" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{member.status}</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{member.profile?.studentCode ? `${member.profile.studentCode} · ` : ""}{member.user.email}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeUnits.map((assignment) => <span key={`${assignment.unitId}-${assignment.effectiveFrom}`} className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">{assignment.isPrimary ? "Đơn vị chính: " : "Đơn vị: "}{assignment.unit.name}</span>)}
                  {activePositions.map((assignment) => <span key={`${assignment.positionId}-${assignment.effectiveFrom}`} className="rounded-md bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">{assignment.position.name}</span>)}
                </div>
              </div>
              <Button variant="secondary" onClick={() => setEditing((current) => !current)}>{editing ? "Đóng chỉnh sửa" : "Chỉnh sửa hồ sơ"}</Button>
            </CardContent>
          </Card>

          {editing ? (
            <Card>
              <CardHeader><h2 className="font-semibold text-slate-950">Thông tin thành viên</h2></CardHeader>
              <CardContent>
                <form className="grid gap-4 md:grid-cols-2" onSubmit={saveProfile}>
                  <label className="space-y-1.5"><span className="text-sm font-medium text-slate-700">MSSV</span><Input value={profileForm.studentCode} onChange={(event) => setProfileForm((current) => ({ ...current, studentCode: event.target.value }))} /></label>
                  <label className="space-y-1.5"><span className="text-sm font-medium text-slate-700">Điện thoại</span><Input value={profileForm.phone} onChange={(event) => setProfileForm((current) => ({ ...current, phone: event.target.value }))} /></label>
                  <label className="space-y-1.5"><span className="text-sm font-medium text-slate-700">Tiêu đề</span><Input value={profileForm.title} onChange={(event) => setProfileForm((current) => ({ ...current, title: event.target.value }))} /></label>
                  <label className="space-y-1.5"><span className="text-sm font-medium text-slate-700">Trạng thái</span><select className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm" value={profileForm.status} onChange={(event) => setProfileForm((current) => ({ ...current, status: event.target.value }))}><option value="ACTIVE">ACTIVE</option><option value="SUSPENDED">SUSPENDED</option><option value="ENDED">ENDED</option></select></label>
                  <label className="space-y-1.5 md:col-span-2"><span className="text-sm font-medium text-slate-700">Giới thiệu</span><textarea className="min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" value={profileForm.bio} onChange={(event) => setProfileForm((current) => ({ ...current, bio: event.target.value }))} /></label>
                  <div className="md:col-span-2 flex justify-end"><Button type="submit" disabled={saving}>{saving ? "Đang lưu..." : "Lưu hồ sơ"}</Button></div>
                </form>
              </CardContent>
            </Card>
          ) : null}

          <div className="grid gap-5 xl:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-blue-700" /><h2 className="font-semibold text-slate-950">Đơn vị hiện hành</h2></div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeUnits.length === 0 ? <p className="text-sm text-slate-500">Chưa được phân vào đơn vị.</p> : activeUnits.map((assignment) => (
                  <div key={`${assignment.unitId}-${assignment.effectiveFrom}`} className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 p-3">
                    <div><div className="font-medium text-slate-900">{assignment.unit.name}</div><div className="mt-0.5 text-xs text-slate-500">Từ {dateLabel(assignment.effectiveFrom)}{assignment.isPrimary ? " · Đơn vị chính" : ""}</div></div>
                    <Button variant="ghost" className="min-h-9 px-2 text-xs" disabled={saving} onClick={() => endUnit(assignment)}>Kết thúc</Button>
                  </div>
                ))}
                <form className="flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row" onSubmit={assignUnit}>
                  <select className="h-10 min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-3 text-sm" value={unitId} onChange={(event) => setUnitId(event.target.value)}>
                    <option value="">Chọn đơn vị...</option>
                    {units.filter((unit) => unit.status === "ACTIVE").map((unit) => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
                  </select>
                  <label className="flex h-10 items-center gap-2 rounded-md border border-slate-200 px-3 text-xs text-slate-600"><input type="checkbox" checked={isPrimary} onChange={(event) => setIsPrimary(event.target.checked)} />Đơn vị chính</label>
                  <Button type="submit" disabled={saving || !unitId}>Phân công</Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-violet-700" /><h2 className="font-semibold text-slate-950">Chức vụ hiện hành</h2></div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activePositions.length === 0 ? <p className="text-sm text-slate-500">Chưa có chức vụ.</p> : activePositions.map((assignment) => (
                  <div key={`${assignment.positionId}-${assignment.effectiveFrom}`} className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 p-3">
                    <div><div className="font-medium text-slate-900">{assignment.position.name}</div><div className="mt-0.5 text-xs text-slate-500">{assignment.position.unit?.name ?? "Toàn tổ chức"} · Từ {dateLabel(assignment.effectiveFrom)}</div></div>
                    <Button variant="ghost" className="min-h-9 px-2 text-xs" disabled={saving} onClick={() => endPosition(assignment)}>Kết thúc</Button>
                  </div>
                ))}
                <form className="flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row" onSubmit={assignPosition}>
                  <select className="h-10 min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-3 text-sm" value={positionId} onChange={(event) => setPositionId(event.target.value)}>
                    <option value="">Chọn chức vụ...</option>
                    {assignablePositions.map((position) => <option key={position.id} value={position.id}>{position.name}{position.unit ? ` · ${position.unit.name}` : ""}</option>)}
                  </select>
                  <Button type="submit" disabled={saving || !positionId}>Bổ nhiệm</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader><div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-700" /><h2 className="font-semibold text-slate-950">Role và quyền hệ thống</h2></div></CardHeader>
            <CardContent>
              {member.roles.length === 0 ? <p className="text-sm text-slate-500">Chưa có Role.</p> : (
                <div className="grid gap-3 lg:grid-cols-2">
                  {member.roles.map(({ role }) => (
                    <div key={role.id} className="rounded-lg border border-slate-200 p-4">
                      <div className="font-medium text-slate-950">{role.name}</div>
                      <div className="mt-2 flex flex-wrap gap-1.5">{role.permissions.map(({ permission }) => <span key={permission.code} className="rounded bg-slate-100 px-2 py-1 font-mono text-[11px] text-slate-600">{permission.code}</span>)}</div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="font-semibold text-slate-950">Lịch sử cơ cấu</h2>
              <p className="mt-1 text-sm text-slate-500">Các lần chuyển đơn vị và bổ nhiệm được lưu theo khoảng hiệu lực, không overwrite bản ghi cũ.</p>
            </CardHeader>
            <CardContent className="grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-semibold text-slate-800">Đơn vị</h3>
                <div className="space-y-2">{member.membershipUnits.map((assignment) => <div key={`${assignment.unitId}-${assignment.effectiveFrom}`} className="rounded-lg border border-slate-200 p-3"><div className="font-medium text-slate-900">{assignment.unit.name}</div><div className="mt-1 text-xs text-slate-500">{dateLabel(assignment.effectiveFrom)} → {dateLabel(assignment.effectiveTo)}</div></div>)}</div>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold text-slate-800">Chức vụ</h3>
                <div className="space-y-2">{member.membershipPositions.map((assignment) => <div key={`${assignment.positionId}-${assignment.effectiveFrom}`} className="rounded-lg border border-slate-200 p-3"><div className="font-medium text-slate-900">{assignment.position.name}</div><div className="mt-1 text-xs text-slate-500">{assignment.position.unit?.name ?? "Toàn tổ chức"} · {dateLabel(assignment.effectiveFrom)} → {dateLabel(assignment.effectiveTo)}</div></div>)}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </AppShell>
  );
}
