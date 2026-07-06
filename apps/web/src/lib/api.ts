const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export type ApiEnvelope<T> = {
  data: T;
  meta?: { page: number; limit: number; total: number };
  traceId?: string;
};

export type TenantOption = {
  membershipId: string;
  tenant: { id: string; name: string; slug: string; brandColor: string };
  status: string;
};

export type SessionState = {
  accessToken: string;
  refreshToken?: string;
  tenantId?: string;
  user?: { id: string; email: string; fullName: string };
  tenants?: TenantOption[];
};

export function readSession(): SessionState | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("operations-hub-session");
  return raw ? (JSON.parse(raw) as SessionState) : null;
}

export function writeSession(next: SessionState) {
  window.localStorage.setItem("operations-hub-session", JSON.stringify(next));
}

export function clearSession() {
  window.localStorage.removeItem("operations-hub-session");
}

export async function apiFetch<T>(path: string, options: RequestInit = {}) {
  const session = readSession();
  const headers = new Headers(options.headers);
  headers.set("content-type", "application/json");
  if (session?.accessToken) headers.set("authorization", `Bearer ${session.accessToken}`);
  if (session?.tenantId) headers.set("x-tenant-id", session.tenantId);

  const response = await fetch(`${API_URL}${path}`, { ...options, headers, cache: "no-store" });
  const payload = (await response.json()) as ApiEnvelope<T> | { error: { message: string; code: string } };
  if (!response.ok) {
    const error = "error" in payload ? payload.error.message : "Request failed";
    throw new Error(error);
  }
  return payload as ApiEnvelope<T>;
}
