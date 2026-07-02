import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/ratelimit";

const MAX_BODY_BYTES = 20 * 1024;
const optionalStr = (max: number) => z.string().trim().max(max).optional();
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z
    .string()
    .trim()
    .refine((v) => emailRe.test(v), "Please enter a valid email address."),
  org: optionalStr(160),
  domain: optionalStr(160),
  message: optionalStr(4000),
  // honeypot: real users never fill this (hidden field)
  company_website: z.string().optional(),
});

// reject cross-site browser posts (csrf). browsers always send Origin on
// cross-origin requests; a missing Origin is a non-browser client, not a vector.
function sameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

type Inquiry = {
  name: string;
  email: string;
  org?: string;
  domain?: string;
  message?: string;
};

async function deliverInquiry(data: Inquiry) {
  // delivery provider not chosen yet. when it is (e.g. Resend), send the email here:
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({ from, to: process.env.CONTACT_TO, subject, text: format(data) });
  // until then, log to the function output so nothing is silently lost.
  console.log("[contact] inquiry received:", data);
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }
  if (!(req.headers.get("content-type") || "").includes("application/json")) {
    return NextResponse.json({ error: "Unsupported media type." }, { status: 415 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!(await checkRateLimit(ip))) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const msg =
      parsed.error.issues[0]?.message || "Please check the form and try again.";
    return NextResponse.json({ error: msg }, { status: 422 });
  }

  const { company_website, ...data } = parsed.data;
  // bot filled the honeypot: accept silently, drop the submission.
  if (company_website) return NextResponse.json({ ok: true });

  await deliverInquiry(data);
  return NextResponse.json({ ok: true });
}
