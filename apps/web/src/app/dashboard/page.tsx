"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { apiFetch } from "@/lib/api";

type Summary = {
  enabledModules: Record<string, boolean>;
  cards: { key: string; label: string; value: number }[];
  sections: {
    organization: { activeMembers: number; units: number; positions: number; pendingInvitations: number };
    requests: { pending: number; approvedThisMonth: number; rejected: number; averageProcessingHours: number } | null;
    finance: { currentBalance: number; incomeThisMonth: number; expenseThisMonth: number; pendingApproval: number } | null;
    meetings: { count: number; attendanceRate: number; lateRate: number; absenceRate: number; excusedRate: number } | null;
    recentAudit: {
      id: string;
      action: string;
      entityType?: string;
      message?: string;
      createdAt: string;
      actor?: { fullName: string; email: string } | null;
    }[];
  };
  metrics: { id: string; label: string; value: string; unit?: string }[];
};

function Metric({ label, value, suffix }: { label: string; value: number | string; suffix?: string }) {
  return (
    <div className="rounded-md border border-slate-200 p-4">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-xl font-semibold text-slate-950">{value}{suffix ?? ""}</div>
    </div>
  );
}

export default function DashboardPage() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<Summary>("/dashboard/summary")
      .then((response) => setSummary(response.data))
      .catch((err) => setError(err instanceof Error ? err.message : "Không thể tải dashboard."));
  }, []);

  const sections = summary?.sections;

  return (
    <AppShell>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard vận hành</h1>
          <p className="text-sm text-slate-500">Read model theo tenant; widget nghiệp vụ tự ẩn khi module bị tắt.</p>
        </div>
        {summary ? (
          <div className="flex flex-wrap gap-2">
            {Object.entries(summary.enabledModules).map(([key, enabled]) => (
              <span key={key} className={`rounded-full px-2 py-1 text-xs font-medium ${enabled ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                {key}: {enabled ? "ON" : "OFF"}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {(summary?.cards ?? []).map((card) => (
          <Card key={card.key}>
            <CardContent>
              <div className="text-sm text-slate-500">{card.label}</div>
              <div className="mt-2 text-2xl font-semibold">
                {card.key === "currentBalance" ? `${card.value.toLocaleString("vi-VN")} VND` : card.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {sections ? (
        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <Card>
            <CardHeader><h2 className="font-semibold">Tổ chức & thành viên</h2></CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <Metric label="Active members" value={sections.organization.activeMembers} />
              <Metric label="Organization units" value={sections.organization.units} />
              <Metric label="Positions" value={sections.organization.positions} />
              <Metric label="Pending invitations" value={sections.organization.pendingInvitations} />
            </CardContent>
          </Card>

          {sections.requests ? (
            <Card>
              <CardHeader><h2 className="font-semibold">Yêu cầu nội bộ</h2></CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                <Metric label="Đang chờ" value={sections.requests.pending} />
                <Metric label="Duyệt tháng này" value={sections.requests.approvedThisMonth} />
                <Metric label="Từ chối" value={sections.requests.rejected} />
                <Metric label="Thời gian xử lý TB" value={sections.requests.averageProcessingHours} suffix="h" />
              </CardContent>
            </Card>
          ) : null}

          {sections.finance ? (
            <Card>
              <CardHeader><h2 className="font-semibold">Tài chính</h2></CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                <Metric label="Số dư hiện tại" value={`${sections.finance.currentBalance.toLocaleString("vi-VN")} VND`} />
                <Metric label="Thu tháng này" value={`${sections.finance.incomeThisMonth.toLocaleString("vi-VN")} VND`} />
                <Metric label="Chi tháng này" value={`${sections.finance.expenseThisMonth.toLocaleString("vi-VN")} VND`} />
                <Metric label="Chờ duyệt" value={sections.finance.pendingApproval} />
              </CardContent>
            </Card>
          ) : null}

          {sections.meetings ? (
            <Card>
              <CardHeader><h2 className="font-semibold">Họp & chuyên cần</h2></CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-2">
                <Metric label="Cuộc họp tháng này" value={sections.meetings.count} />
                <Metric label="Present" value={sections.meetings.attendanceRate} suffix="%" />
                <Metric label="Late" value={sections.meetings.lateRate} suffix="%" />
                <Metric label="Absent" value={sections.meetings.absenceRate} suffix="%" />
                <Metric label="Excused" value={sections.meetings.excusedRate} suffix="%" />
              </CardContent>
            </Card>
          ) : null}

          {sections.recentAudit.length ? (
            <Card className="xl:col-span-2">
              <CardHeader><h2 className="font-semibold">Hoạt động gần đây</h2></CardHeader>
              <CardContent className="divide-y divide-slate-100">
                {sections.recentAudit.map((event) => (
                  <div key={event.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
                    <div>
                      <span className="font-medium text-slate-900">{event.actor?.fullName ?? "System"}</span>
                      <span className="text-slate-500"> · {event.action} · {event.entityType ?? "Entity"}</span>
                      {event.message ? <div className="mt-1 text-xs text-slate-500">{event.message}</div> : null}
                    </div>
                    <time className="text-xs text-slate-500">{new Date(event.createdAt).toLocaleString("vi-VN")}</time>
                  </div>
                ))}
              </CardContent>
            </Card>
          ) : null}
        </div>
      ) : null}

      {summary?.metrics.length ? (
        <Card className="mt-6">
          <CardHeader><h2 className="font-semibold">Chỉ số tùy chỉnh</h2></CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {summary.metrics.map((metric) => <Metric key={metric.id} label={metric.label} value={metric.value} suffix={metric.unit} />)}
          </CardContent>
        </Card>
      ) : null}
    </AppShell>
  );
}
