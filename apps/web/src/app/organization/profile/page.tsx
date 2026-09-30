"use client";

import { FormEvent, useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { OrganizationNav } from "@/components/organization/organization-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";

type OrganizationProfile = {
  id: string;
  displayName: string;
  shortName?: string | null;
  code?: string | null;
  organizationType?: string | null;
  description?: string | null;
  logoUrl?: string | null;
  establishedAt?: string | null;
  contactEmail?: string | null;
  websiteUrl?: string | null;
  socialLinks?: Record<string, string> | null;
  parentOrganization?: string | null;
  address?: string | null;
  status: string;
};

const emptyProfile: OrganizationProfile = {
  id: "",
  displayName: "",
  status: "ACTIVE"
};

export default function OrganizationProfilePage() {
  const [profile, setProfile] = useState<OrganizationProfile>(emptyProfile);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    apiFetch<OrganizationProfile>("/organization/profile")
      .then((response) => setProfile(response.data))
      .catch((err) => setError(err instanceof Error ? err.message : "Không thể tải hồ sơ tổ chức."))
      .finally(() => setLoading(false));
  }, []);

  function setField<K extends keyof OrganizationProfile>(key: K, value: OrganizationProfile[K]) {
    setProfile((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");
    try {
      const response = await apiFetch<OrganizationProfile>("/organization/profile", {
        method: "PATCH",
        body: JSON.stringify({
          displayName: profile.displayName,
          shortName: profile.shortName || null,
          code: profile.code || null,
          organizationType: profile.organizationType || null,
          description: profile.description || null,
          logoUrl: profile.logoUrl || null,
          establishedAt: profile.establishedAt ? profile.establishedAt.slice(0, 10) : null,
          contactEmail: profile.contactEmail || null,
          websiteUrl: profile.websiteUrl || null,
          socialLinks: profile.socialLinks ?? null,
          parentOrganization: profile.parentOrganization || null,
          address: profile.address || null,
          status: profile.status
        })
      });
      setProfile(response.data);
      setMessage("Đã lưu hồ sơ tổ chức.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể lưu hồ sơ tổ chức.");
    } finally {
      setSaving(false);
    }
  }

  const fieldClass = "space-y-1.5";
  const labelClass = "text-sm font-medium text-slate-700";

  return (
    <AppShell>
      <OrganizationNav />
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Organization management</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">Hồ sơ tổ chức</h1>
        <p className="mt-1 max-w-3xl text-sm text-slate-500">Thông tin nhận diện và liên hệ dùng chung trong tenant hiện tại.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-semibold text-slate-950">Thông tin chung</h2>
            <p className="mt-1 text-sm text-slate-500">Dữ liệu này mô tả tổ chức sinh viên, tách biệt với cấu hình tenant kỹ thuật.</p>
          </div>
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${profile.status === "ACTIVE" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
            {profile.status === "ACTIVE" ? "Đang hoạt động" : "Ngưng hoạt động"}
          </span>
        </CardHeader>
        <CardContent>
          {loading ? <p className="text-sm text-slate-500">Đang tải...</p> : null}
          {error ? <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          {message ? <p className="mb-4 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p> : null}
          {!loading ? (
            <form className="space-y-6" onSubmit={submit}>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <label className={fieldClass}>
                  <span className={labelClass}>Tên tổ chức *</span>
                  <Input value={profile.displayName} onChange={(event) => setField("displayName", event.target.value)} required />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Tên viết tắt</span>
                  <Input value={profile.shortName ?? ""} onChange={(event) => setField("shortName", event.target.value)} />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Mã tổ chức</span>
                  <Input value={profile.code ?? ""} onChange={(event) => setField("code", event.target.value)} />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Loại tổ chức</span>
                  <Input placeholder="CLB, Đội, Nhóm..." value={profile.organizationType ?? ""} onChange={(event) => setField("organizationType", event.target.value)} />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Ngày thành lập</span>
                  <Input type="date" value={profile.establishedAt?.slice(0, 10) ?? ""} onChange={(event) => setField("establishedAt", event.target.value)} />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Đơn vị chủ quản</span>
                  <Input value={profile.parentOrganization ?? ""} onChange={(event) => setField("parentOrganization", event.target.value)} />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Email</span>
                  <Input type="email" value={profile.contactEmail ?? ""} onChange={(event) => setField("contactEmail", event.target.value)} />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Website</span>
                  <Input type="url" placeholder="https://..." value={profile.websiteUrl ?? ""} onChange={(event) => setField("websiteUrl", event.target.value)} />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Logo URL</span>
                  <Input type="url" placeholder="https://..." value={profile.logoUrl ?? ""} onChange={(event) => setField("logoUrl", event.target.value)} />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Facebook / mạng xã hội</span>
                  <Input
                    type="url"
                    placeholder="https://..."
                    value={profile.socialLinks?.facebook ?? ""}
                    onChange={(event) => setField("socialLinks", { ...(profile.socialLinks ?? {}), facebook: event.target.value })}
                  />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Địa chỉ</span>
                  <Input value={profile.address ?? ""} onChange={(event) => setField("address", event.target.value)} />
                </label>
                <label className={fieldClass}>
                  <span className={labelClass}>Trạng thái</span>
                  <select className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm" value={profile.status} onChange={(event) => setField("status", event.target.value)}>
                    <option value="ACTIVE">Đang hoạt động</option>
                    <option value="INACTIVE">Ngưng hoạt động</option>
                  </select>
                </label>
              </div>
              <label className={fieldClass}>
                <span className={labelClass}>Mô tả</span>
                <textarea
                  className="min-h-28 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={profile.description ?? ""}
                  onChange={(event) => setField("description", event.target.value)}
                />
              </label>
              <div className="flex justify-end">
                <Button type="submit" disabled={saving}>{saving ? "Đang lưu..." : "Lưu hồ sơ"}</Button>
              </div>
            </form>
          ) : null}
        </CardContent>
      </Card>
    </AppShell>
  );
}
