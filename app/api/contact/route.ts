import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function envOrThrow(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function safeErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const firstName = (payload.firstName ?? "").trim();
    const lastName = (payload.lastName ?? "").trim();
    const email = (payload.email ?? "").trim();
    const phone = (payload.phone ?? "").trim();
    const service = (payload.service ?? "").trim();
    const message = (payload.message ?? "").trim();

    if (!message && !email && !phone) {
      return NextResponse.json(
        { ok: false, error: "Informe pelo menos email/telefone ou uma mensagem." },
        { status: 400 }
      );
    }

    const host = envOrThrow("SMTP_HOST");
    const portRaw = envOrThrow("SMTP_PORT");
    const port = Number(portRaw);
    if (!Number.isFinite(port)) {
      throw new Error(`Invalid SMTP_PORT: ${portRaw}`);
    }
    const user = envOrThrow("SMTP_USER");
    const pass = envOrThrow("SMTP_PASS");
    const from = envOrThrow("SMTP_FROM");
    const to = envOrThrow("SMTP_TO");

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    // Helps surface connection/auth issues with clearer errors.
    await transporter.verify();

    const fullName = `${firstName} ${lastName}`.trim() || "(não informado)";

    const subject = `Contato via portfólio${service ? ` — ${service}` : ""}`;

    const text = [
      "Novo contato via portfólio",
      "",
      `Nome: ${fullName}`,
      `Email: ${email || "(não informado)"}`,
      `Telefone: ${phone || "(não informado)"}`,
      `Serviço: ${service || "(não informado)"}`,
      "",
      "Mensagem:",
      message || "(não informada)",
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const detail = safeErrorMessage(error);
    const isProd = process.env.NODE_ENV === "production";
    return NextResponse.json(
      {
        ok: false,
        // Front-end uses `error` to show the user. In dev, include a hint.
        error: isProd ? "Falha ao enviar email." : `Falha ao enviar email. (${detail})`,
        detail,
      },
      { status: 500 }
    );
  }
}
