const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export type ApiEnvelope<T> = {
  data: T;
  meta?: { page: number; limit: number; total: number };
  traceId?: string;
};

export type TenantOption = {
  membershipId: string;
  tenant: {
    id: string;
    name: string;
    slug: string;
    brandColor: string;
    status?: string;
  };
  status: string;
};

export type SessionUser = {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string | null;
  isActive?: boolean;
  isVerified?: boolean;
  platformRole?: string | null;
};

export type SessionState = {
  accessToken: string;
  refreshToken?: string;
  tenantId?: string;
  membershipId?: string;
  user?: SessionUser;
  tenants?: TenantOption[];
};

export type SelectTenantResponse = {
  accessToken: string;
  tenant: {
    id: string;
    name: string;
    slug?: string;
    brandColor?: string;
    status?: string;
  };
  membershipId: string;
};

export type MeResponse = {
  user: SessionUser;
  tenants: TenantOption[];
};

export function readSession(): SessionState | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("operations-hub-session");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionState;
  } catch {
    window.localStorage.removeItem("operations-hub-session");
    return null;
  }
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
  const hasBody = options.body !== undefined && options.body !== null;
  const isFormData = typeof FormData !== "undefined" && options.body instanceof FormData;

  if (hasBody && !isFormData && !headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  if (session?.accessToken) headers.set("authorization", `Bearer ${session.accessToken}`);
  if (session?.tenantId) headers.set("x-tenant-id", session.tenantId);

  const response = await fetch(`${API_URL}${path}`, { ...options, headers, cache: "no-store" });
  const contentType = response.headers.get("content-type") ?? "";
  const payload = contentType.includes("application/json")
    ? ((await response.json()) as ApiEnvelope<T> | { error: { message: string; code: string } })
    : ({ error: { message: response.statusText || "Request failed", code: String(response.status) } } as const);

  if (!response.ok) {
    const error = "error" in payload ? payload.error.message : "Request failed";
    throw new Error(error);
  }
  return payload as ApiEnvelope<T>;
}

/**
 * Selects a tenant through the backend so the access token is re-issued with
 * tenantId + membershipId. Merely changing localStorage is not a security-safe
 * tenant switch because the JWT tenant context would remain stale.
 */
export async function selectTenant(tenantId: string) {
  const current = readSession();
  if (!current?.accessToken) throw new Error("Bạn cần đăng nhập trước khi chuyển tổ chức.");

  const response = await apiFetch<SelectTenantResponse>("/auth/select-tenant", {
    method: "POST",
    body: JSON.stringify({ tenantId })
  });

  const next: SessionState = {
    ...current,
    accessToken: response.data.accessToken,
    tenantId: response.data.tenant.id,
    membershipId: response.data.membershipId
  };
  writeSession(next);
  return next;
}

/** Refreshes the current user's tenant memberships without changing tenant context. */
export async function refreshSessionContext() {
  const current = readSession();
  if (!current?.accessToken) throw new Error("Bạn cần đăng nhập để làm mới ngữ cảnh.");
  const response = await apiFetch<MeResponse>("/auth/me");
  const stillAvailable = response.data.tenants.some((item) => item.tenant.id === current.tenantId);
  const next: SessionState = {
    ...current,
    user: response.data.user,
    tenants: response.data.tenants,
    tenantId: stillAvailable ? current.tenantId : undefined,
    membershipId: stillAvailable ? current.membershipId : undefined
  };
  writeSession(next);
  return next;
}
