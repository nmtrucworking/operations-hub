"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";

type Unit = { id: string; name: string; code: string; status: string };
type MeetingRow = {
  id: string;
  title: string;
  description?: string;
  startAt: string;
  endAt?: string;
  location?: string;
  status: string;
  unit?: { id: string; name: string; code: string } | null;
  _count?: { participants: number; attendanceRecords: number };
};
type MeetingDetail = MeetingRow & {
  participants: {
    membershipId: string;
    participantRole: string;
    membership: { user: { fullName: string; email: string } };
  }[];
  attendanceRecords: { id: string; membershipId: string; status: string; note?: string; checkInAt?: string }[];
};

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState<MeetingRow[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [detail, setDetail] = useState<MeetingDetail | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [unitId, setUnitId] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState("");

  const load = useCallback(async () => {
    try {
      const meetingResponse = await apiFetch<MeetingRow[]>("/meetings");
      setMeetings(meetingResponse.data);
      setSelectedId((current) => current || meetingResponse.data[0]?.id || "");
      try {
        const unitResponse = await apiFetch<Unit[]>("/organization/units");
        setUnits(unitResponse.data.filter((unit) => unit.status === "ACTIVE"));
      } catch {
        setUnits([]);
      }
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tải danh sách cuộc họp.");
    }
  }, []);

  const loadDetail = useCallback(async (id: string) => {
    if (!id) {
      setDetail(null);
      return;
    }
    try {
      const response = await apiFetch<MeetingDetail>(`/meetings/${id}`);
      setDetail(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tải chi tiết cuộc họp.");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    void loadDetail(selectedId);
  }, [loadDetail, selectedId]);

  const attendanceByMembership = useMemo(
    () => new Map((detail?.attendanceRecords ?? []).map((record) => [record.membershipId, record])),
    [detail]
  );

  async function createMeeting(event: FormEvent) {
    event.preventDefault();
    if (!title.trim() || !startAt) return;
    setBusy("create");
    setError("");
    try {
      const response = await apiFetch<MeetingRow>("/meetings", {
        method: "POST",
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim() || undefined,
          unitId: unitId || undefined,
          startAt: new Date(startAt).toISOString(),
          endAt: endAt ? new Date(endAt).toISOString() : undefined,
          location: location.trim() || undefined
        })
      });
      setTitle("");
      setDescription("");
      setUnitId("");
      setStartAt("");
      setEndAt("");
      setLocation("");
      setSelectedId(response.data.id);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tạo cuộc họp.");
    } finally {
      setBusy("");
    }
  }

  async function command(id: string, action: "schedule" | "start" | "complete" | "cancel") {
    setBusy(`${id}:${action}`);
    setError("");
    try {
      await apiFetch(`/meetings/${id}/${action}`, { method: "POST" });
      await load();
      await loadDetail(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : `Không thể ${action} cuộc họp.`);
    } finally {
      setBusy("");
    }
  }

  async function markAttendance(membershipId: string, status: "PRESENT" | "LATE" | "ABSENT" | "EXCUSED") {
    if (!detail) return;
    setBusy(`${membershipId}:${status}`);
    setError("");
    try {
      await apiFetch(`/meetings/${detail.id}/attendance/${membershipId}`, {
        method: "PATCH",
        body: JSON.stringify({ status, checkInAt: status === "PRESENT" || status === "LATE" ? new Date().toISOString() : undefined })
      });
      await loadDetail(detail.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể cập nhật chuyên cần.");
    } finally {
      setBusy("");
    }
  }

  return (
    <AppShell>
      <div className="grid gap-6 xl:grid-cols-[22rem_minmax(0,1fr)]">
        <Card className="h-fit">
          <CardHeader>
            <h1 className="text-xl font-semibold">Họp & chuyên cần</h1>
            <p className="text-sm text-slate-500">Meeting baseline theo toàn tổ chức hoặc một đơn vị.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={createMeeting}>
              <label className="block text-sm font-medium text-slate-700">Tiêu đề<Input className="mt-1" value={title} onChange={(event) => setTitle(event.target.value)} required minLength={3} /></label>
              <label className="block text-sm font-medium text-slate-700">
                Phạm vi
                <select className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm" value={unitId} onChange={(event) => setUnitId(event.target.value)}>
                  <option value="">Toàn tổ chức</option>
                  {units.map((unit) => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700">Bắt đầu<Input className="mt-1" type="datetime-local" value={startAt} onChange={(event) => setStartAt(event.target.value)} required /></label>
              <label className="block text-sm font-medium text-slate-700">Kết thúc<Input className="mt-1" type="datetime-local" value={endAt} onChange={(event) => setEndAt(event.target.value)} /></label>
              <label className="block text-sm font-medium text-slate-700">Địa điểm<Input className="mt-1" value={location} onChange={(event) => setLocation(event.target.value)} /></label>
              <label className="block text-sm font-medium text-slate-700">Mô tả<textarea className="mt-1 min-h-24 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" value={description} onChange={(event) => setDescription(event.target.value)} /></label>
              <Button className="w-full" disabled={busy === "create"} type="submit">{busy === "create" ? "Đang tạo..." : "Tạo cuộc họp"}</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {error ? <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div><h2 className="font-semibold">Lịch họp</h2><p className="text-sm text-slate-500">Schedule sẽ snapshot thành viên active theo scope.</p></div>
                <select className="h-10 min-w-64 rounded-md border border-slate-300 bg-white px-3 text-sm" value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
                  <option value="">Chọn cuộc họp</option>
                  {meetings.map((meeting) => <option key={meeting.id} value={meeting.id}>{meeting.title} · {meeting.status}</option>)}
                </select>
              </div>
            </CardHeader>
            <CardContent>
              {detail ? (
                <div className="space-y-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2"><h3 className="text-lg font-semibold">{detail.title}</h3><span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium">{detail.status}</span></div>
                      <p className="mt-1 text-sm text-slate-600">{new Date(detail.startAt).toLocaleString("vi-VN")} · {detail.unit?.name ?? "Toàn tổ chức"}{detail.location ? ` · ${detail.location}` : ""}</p>
                      {detail.description ? <p className="mt-2 text-sm text-slate-700">{detail.description}</p> : null}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {detail.status === "DRAFT" ? <Button disabled={busy.startsWith(detail.id)} onClick={() => void command(detail.id, "schedule")}>Lên lịch</Button> : null}
                      {detail.status === "SCHEDULED" ? <><Button disabled={busy.startsWith(detail.id)} onClick={() => void command(detail.id, "start")}>Bắt đầu</Button><Button variant="destructive" disabled={busy.startsWith(detail.id)} onClick={() => void command(detail.id, "cancel")}>Hủy</Button></> : null}
                      {detail.status === "ONGOING" ? <Button disabled={busy.startsWith(detail.id)} onClick={() => void command(detail.id, "complete")}>Hoàn tất</Button> : null}
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50"><tr><th className="px-4 py-3">Thành viên</th><th className="px-4 py-3">Trạng thái</th><th className="px-4 py-3">Đánh dấu</th></tr></thead>
                      <tbody>
                        {detail.participants.map((participant) => {
                          const attendance = attendanceByMembership.get(participant.membershipId);
                          return (
                            <tr key={participant.membershipId} className="border-t border-slate-100">
                              <td className="px-4 py-3"><div className="font-medium">{participant.membership.user.fullName}</div><div className="text-xs text-slate-500">{participant.membership.user.email}</div></td>
                              <td className="px-4 py-3">{attendance?.status ?? "UNMARKED"}</td>
                              <td className="px-4 py-3">
                                <div className="flex flex-wrap gap-1">
                                  {(["PRESENT", "LATE", "ABSENT", "EXCUSED"] as const).map((status) => (
                                    <Button key={status} className="min-h-8 px-2 text-xs" variant={attendance?.status === status ? "primary" : "secondary"} disabled={busy.startsWith(participant.membershipId) || !["ONGOING", "COMPLETED"].includes(detail.status)} onClick={() => void markAttendance(participant.membershipId, status)}>{status}</Button>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                        {!detail.participants.length ? <tr><td className="px-4 py-8 text-center text-slate-500" colSpan={3}>Participant sẽ được tạo khi cuộc họp chuyển sang SCHEDULED.</td></tr> : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : <p className="py-8 text-center text-sm text-slate-500">Chọn một cuộc họp để xem chi tiết.</p>}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
