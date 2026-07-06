"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiFetch, SessionState, writeSession } from "@/lib/api";

type LoginResponse = SessionState & {
  tenants: NonNullable<SessionState["tenants"]>;
};

type SelectTenantResponse = {
  accessToken: string;
  tenant: { id: string; name: string };
  membershipId: string;
};

function Field({
  id,
  label,
  children,
  hint,
  error
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  hint?: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-950" htmlFor={id}>
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs leading-5 text-slate-500">{hint}</p> : null}
      {error ? (
        <p className="text-sm text-red-700" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("owner@demo.example");
  const [password, setPassword] = useState("Password123!");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function safeReturnTo(value: string | null) {
    if (!value || !value.startsWith("/") || value.startsWith("//")) return null;
    return value;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const login = await apiFetch<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });
      const firstTenant = login.data.tenants[0];
      writeSession({
        accessToken: login.data.accessToken,
        refreshToken: remember ? login.data.refreshToken : undefined,
        user: login.data.user,
        tenants: login.data.tenants,
        tenantId: firstTenant?.tenant.id
      });
      if (firstTenant) {
        const selected = await apiFetch<SelectTenantResponse>("/auth/select-tenant", {
          method: "POST",
          body: JSON.stringify({ tenantId: firstTenant.tenant.id })
        });
        writeSession({
          accessToken: selected.data.accessToken,
          refreshToken: remember ? login.data.refreshToken : undefined,
          user: login.data.user,
          tenants: login.data.tenants,
          tenantId: selected.data.tenant.id
        });
        router.push(safeReturnTo(searchParams.get("returnTo")) ?? "/dashboard");
      } else {
        router.push("/start");
      }
    } catch {
      setError("Thông tin đăng nhập không hợp lệ hoặc dịch vụ tạm thời không khả dụng.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={submit}>
      <Field id="email" label="Email">
        <Input
          autoComplete="email"
          id="email"
          inputMode="email"
          onChange={(event) => setEmail(event.target.value)}
          required
          type="email"
          value={email}
        />
      </Field>
      <Field id="password" label="Mật khẩu">
        <Input
          autoComplete="current-password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          required
          type="password"
          value={password}
        />
      </Field>
      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input
          checked={remember}
          className="mt-1 h-4 w-4 rounded border-slate-300"
          onChange={(event) => setRemember(event.target.checked)}
          type="checkbox"
        />
        Ghi nhớ phiên trên thiết bị này nếu chính sách cho phép.
      </label>
      {error ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <Button className="w-full" disabled={loading} type="submit">
        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </Button>
      <div className="flex flex-wrap justify-between gap-3 text-sm">
        <Link className="text-blue-700 hover:underline" href="/auth/forgot-password">
          Quên mật khẩu?
        </Link>
        <Link className="text-blue-700 hover:underline" href="/auth/register">
          Tạo tài khoản
        </Link>
      </div>
    </form>
  );
}

export function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordHints = useMemo(
    () => [
      { label: "Ít nhất 8 ký tự", ok: password.length >= 8 },
      { label: "Mật khẩu xác nhận khớp", ok: password.length > 0 && password === confirmPassword }
    ],
    [confirmPassword, password]
  );

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận chưa khớp.");
      return;
    }
    if (!accepted) {
      setError("Bạn cần đồng ý điều khoản và chính sách bảo mật trước khi tạo tài khoản.");
      return;
    }
    setLoading(true);
    try {
      await apiFetch("/auth/register", { method: "POST", body: JSON.stringify({ fullName, email, password }) });
      setMessage("Tài khoản đã được tạo. Nếu hệ thống yêu cầu xác minh, hãy kiểm tra email trước khi đăng nhập.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không thể tạo tài khoản lúc này.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={submit}>
      <Field id="fullName" label="Họ tên">
        <Input id="fullName" onChange={(event) => setFullName(event.target.value)} required value={fullName} />
      </Field>
      <Field id="register-email" label="Email">
        <Input id="register-email" inputMode="email" onChange={(event) => setEmail(event.target.value)} required type="email" value={email} />
      </Field>
      <Field id="register-password" label="Mật khẩu" hint="Không dùng lại mật khẩu từ hệ thống khác.">
        <Input id="register-password" minLength={8} onChange={(event) => setPassword(event.target.value)} required type="password" value={password} />
      </Field>
      <Field id="confirmPassword" label="Xác nhận mật khẩu">
        <Input id="confirmPassword" minLength={8} onChange={(event) => setConfirmPassword(event.target.value)} required type="password" value={confirmPassword} />
      </Field>
      <ul className="grid gap-1 text-xs text-slate-600">
        {passwordHints.map((hint) => (
          <li className={hint.ok ? "text-green-700" : "text-slate-500"} key={hint.label}>
            {hint.ok ? "Đạt: " : "Cần: "}
            {hint.label}
          </li>
        ))}
      </ul>
      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input checked={accepted} className="mt-1 h-4 w-4 rounded border-slate-300" onChange={(event) => setAccepted(event.target.checked)} type="checkbox" />
        <span>
          Tôi đồng ý với{" "}
          <Link className="text-blue-700 hover:underline" href="/legal/terms">
            Điều khoản
          </Link>{" "}
          và{" "}
          <Link className="text-blue-700 hover:underline" href="/legal/privacy">
            Chính sách bảo mật
          </Link>
          .
        </span>
      </label>
      {error ? <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{error}</p> : null}
      {message ? <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800" role="status">{message}</p> : null}
      <Button className="w-full" disabled={loading} type="submit">
        {loading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
      </Button>
      <Link className="block text-center text-sm text-blue-700 hover:underline" href="/auth/login">
        Đã có tài khoản? Đăng nhập
      </Link>
    </form>
  );
}

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="space-y-5" onSubmit={submit}>
      <Field id="forgot-email" label="Email hoặc định danh được hỗ trợ" hint="Phản hồi được giữ trung tính để hạn chế dò tài khoản.">
        <Input id="forgot-email" inputMode="email" onChange={(event) => setEmail(event.target.value)} required value={email} />
      </Field>
      {sent ? (
        <p className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm leading-6 text-blue-900" role="status">
          Nếu thông tin phù hợp với một tài khoản hợp lệ, hệ thống sẽ gửi hướng dẫn đặt lại mật khẩu.
        </p>
      ) : null}
      <Button className="w-full" type="submit">
        Gửi hướng dẫn
      </Button>
    </form>
  );
}

export function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") ?? (searchParams.get("token") ? "valid" : "missing");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  if (status !== "valid") {
    const label: Record<string, string> = {
      missing: "Thiếu token đặt lại mật khẩu.",
      expired: "Token đặt lại mật khẩu đã hết hạn.",
      used: "Token này đã được sử dụng.",
      revoked: "Token này đã bị thu hồi.",
      invalid: "Token không hợp lệ."
    };
    return <TokenState title={label[status] ?? label.invalid} actionHref="/auth/forgot-password" actionLabel="Yêu cầu link mới" />;
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password.length < 8 || password !== confirmPassword) {
      setMessage("Mật khẩu cần ít nhất 8 ký tự và phần xác nhận phải khớp.");
      return;
    }
    setMessage("Mật khẩu mới đã được ghi nhận trong giao diện. Backend reset password sẽ xử lý ở bước tích hợp tiếp theo.");
  }

  return (
    <form className="space-y-5" onSubmit={submit}>
      <Field id="new-password" label="Mật khẩu mới" hint="Ít nhất 8 ký tự. Phiên cũ cần được thu hồi ở backend khi tích hợp endpoint.">
        <Input id="new-password" minLength={8} onChange={(event) => setPassword(event.target.value)} required type="password" value={password} />
      </Field>
      <Field id="confirm-new-password" label="Xác nhận mật khẩu mới">
        <Input id="confirm-new-password" minLength={8} onChange={(event) => setConfirmPassword(event.target.value)} required type="password" value={confirmPassword} />
      </Field>
      {message ? <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700" role="status">{message}</p> : null}
      <Button className="w-full" type="submit">
        Đặt lại mật khẩu
      </Button>
    </form>
  );
}

export function VerifyEmailState() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") ?? (searchParams.get("token") ? "success" : "missing");
  const map: Record<string, { title: string; description: string; href: string; label: string }> = {
    success: {
      title: "Email đã được xác minh.",
      description: "Bạn có thể đăng nhập để tiếp tục chọn hoặc tạo tổ chức.",
      href: "/auth/login",
      label: "Đăng nhập"
    },
    missing: {
      title: "Thiếu token xác minh.",
      description: "Đường dẫn xác minh cần token do hệ thống phát hành.",
      href: "/auth/resend-verification",
      label: "Gửi lại email"
    },
    invalid: {
      title: "Token xác minh không hợp lệ.",
      description: "Đường dẫn có thể đã bị thay đổi hoặc không còn được hệ thống chấp nhận.",
      href: "/auth/resend-verification",
      label: "Gửi lại email"
    },
    expired: {
      title: "Token xác minh đã hết hạn.",
      description: "Hãy yêu cầu email xác minh mới để tiếp tục.",
      href: "/auth/resend-verification",
      label: "Gửi lại email"
    },
    used: {
      title: "Token đã được sử dụng.",
      description: "Nếu tài khoản đã xác minh, bạn có thể đăng nhập.",
      href: "/auth/login",
      label: "Đăng nhập"
    },
    verified: {
      title: "Tài khoản đã xác minh trước đó.",
      description: "Không cần xác minh lại email này.",
      href: "/auth/login",
      label: "Đăng nhập"
    },
    service: {
      title: "Dịch vụ xác minh tạm thời không khả dụng.",
      description: "Vui lòng thử lại sau hoặc liên hệ hỗ trợ với mã tham chiếu công khai.",
      href: "/help",
      label: "Xem trợ giúp"
    }
  };
  const content = map[status] ?? map.invalid;
  return <TokenState actionHref={content.href} actionLabel={content.label} description={content.description} title={content.title} />;
}

export function ResendVerificationForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="space-y-5" onSubmit={submit}>
      <Field id="resend-email" label="Email">
        <Input id="resend-email" inputMode="email" onChange={(event) => setEmail(event.target.value)} required type="email" value={email} />
      </Field>
      {sent ? (
        <p className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm leading-6 text-blue-900" role="status">
          Nếu email phù hợp với một tài khoản cần xác minh, hệ thống sẽ gửi lại hướng dẫn. Bạn có thể thử lại sau thời gian chờ.
        </p>
      ) : null}
      <Button className="w-full" type="submit">
        Gửi lại email xác minh
      </Button>
    </form>
  );
}

export function TokenState({
  title,
  description = "Không có dữ liệu nội bộ nào được hiển thị từ token này.",
  actionHref,
  actionLabel
}: {
  title: string;
  description?: string;
  actionHref: string;
  actionLabel: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <Link className="mt-5 inline-flex min-h-11 items-center rounded-md bg-blue-700 px-4 text-sm font-medium text-white hover:bg-blue-800" href={actionHref}>
        {actionLabel}
      </Link>
    </div>
  );
}
