"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BriefcaseBusiness, Building2, MailPlus, Network, Users } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { OrganizationNav } from "@/components/organization/organization-nav";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { apiFetch } from "@/lib/api";

type OrganizationProfile = {
  displayName: string;
  shortName?: string | null;
  organizationCode?: string | null;
  organizationType?: string | null;
  status?: string | null;
  description?: string | null;
};

type OrganizationUnit = { id: string; name: string; status: string; memberCount: number };
type Position = { id: string; name: string; status: string; _count?: { membershipPositions: number } };
type Member = { id: string; status: string };
type Invitation = { id: string; state: string; fullName: string; email: string; createdAt: string };

export default function OrganizationOverviewPage() {
  const [profile, setProfile] = useState<OrganizationProfile | null>(null);
  const [units, setUnits] = useState<OrganizationUnit[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const [profileResult, unitsResult, positionsResult, membersResult, invitationsResult] = await Promise.allSettled([
          apiFetch<OrganizationProfile>("/organization/profile"),
          apiFetch<OrganizationUnit[]>("/organization/units"),
          apiFetch<Position[]>("/organization/positions"),
          apiFetch<Member[]>("/members?limit=100"),
          apiFetch<Invitation[]>("/members/invitations")
        ]);
        if (!active) return;
        if (profileResult.status === "fulfilled") setProfile(profileResult.value.data);
        if (unitsResult.status === "fulfilled") setUnits(unitsResult.value.data);
        if (positionsResult.status === "fulfilled") setPositions(positionsResult.value.data);
        if (membersResult.status === "fulfilled") setMembers(membersResult.value.data);
        if (invitationsResult.status === "fulfilled") setInvitations(invitationsResult.value.data);
        const failures = [profileResult, unitsResult, positionsResult, membersResult, invitationsResult].filter((item) => item.status === "rejected");
        if (failures.length === 5) setError("Không thể tải dữ liệu quản trị tổ chức.");
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => {
      active = false;
    };
  }, []);

  const activeUnits = useMemo(() => units.filter((item) => item.status === "ACTIVE"), [units]);
  const activePositions = useMemo(() => positions.filter((item) => item.status === "ACTIVE"), [positions]);
  const activeMembers = useMemo(() => members.filter((item) => item.status === "ACTIVE"), [members]);
  const pendingInvitations = useMemo(() => invitations.filter((item) => item.state === "PENDING"), [invitations]);
  const recentInvitations = invitations.slice(0, 5);

  const metrics = [
    { label: "Đơn vị hoạt động", value: activeUnits.length, icon: Network, href: "/organization/structure" },
    { label: "Chức vụ hoạt động", value: activePositions.length, icon: BriefcaseBusiness, href: "/organization/positions" },
    { label: "Thành viên hoạt động", value: activeMembers.length, icon: Users, href: "/members" },
    { label: "Lời mời đang chờ", value: pendingInvitations.length, icon: MailPlus, href: "/members" }
  ];

  return (
    <AppShell>
      <OrganizationNav />
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Organization management</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">Tổng quan tổ chức</h1>
        <p className="mt-1 text-sm text-slate-500">Điểm vào thống nhất cho hồ sơ, cơ cấu, chức vụ, thành viên và lời mời.</p>
      </div>

      {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      {loading ? <p className="mb-4 text-sm text-slate-500">Đang tải tổng quan...</p> : null}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Link key={metric.label} href={metric.href}>
              <Card className="h-full transition hover:border-blue-200 hover:shadow-md">
                <CardContent className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <div className="text-2xl font-semibold text-slate-950">{metric.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{metric.label}</div>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3 text-blue-700"><Icon className="h-5 w-5" /></div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-blue-700" /><h2 className="font-semibold text-slate-950">Hồ sơ tổ chức</h2></div>
          </CardHeader>
          <CardContent>
            {profile ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div><div className="text-xs uppercase tracking-wide text-slate-500">Tên tổ chức</div><div className="mt-1 font-medium text-slate-950">{profile.displayName}</div></div>
                <div><div className="text-xs uppercase tracking-wide text-slate-500">Mã / tên viết tắt</div><div className="mt-1 text-slate-800">{profile.organizationCode ?? profile.shortName ?? "—"}</div></div>
                <div><div className="text-xs uppercase tracking-wide text-slate-500">Loại</div><div className="mt-1 text-slate-800">{profile.organizationType ?? "—"}</div></div>
                <div><div className="text-xs uppercase tracking-wide text-slate-500">Trạng thái</div><div className="mt-1 text-slate-800">{profile.status ?? "ACTIVE"}</div></div>
                <div className="sm:col-span-2"><div className="text-xs uppercase tracking-wide text-slate-500">Mô tả</div><div className="mt-1 text-sm leading-6 text-slate-700">{profile.description ?? "Chưa có mô tả."}</div></div>
                <div className="sm:col-span-2"><Link className="text-sm font-medium text-blue-700 hover:underline" href="/organization/profile">Chỉnh sửa hồ sơ tổ chức</Link></div>
              </div>
            ) : <p className="text-sm text-slate-500">Chưa có hồ sơ tổ chức hoặc bạn không có quyền đọc hồ sơ.</p>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-semibold text-slate-950">Lời mời gần đây</h2>
            <p className="mt-1 text-sm text-slate-500">Theo dõi nhanh tiến độ onboarding thành viên.</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentInvitations.length === 0 ? <p className="text-sm text-slate-500">Chưa có lời mời.</p> : recentInvitations.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 p-3">
                <div className="min-w-0"><div className="truncate text-sm font-medium text-slate-900">{item.fullName}</div><div className="truncate text-xs text-slate-500">{item.email}</div></div>
                <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700">{item.state}</span>
              </div>
            ))}
            <Link className="inline-block text-sm font-medium text-blue-700 hover:underline" href="/members">Quản lý thành viên và lời mời</Link>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
