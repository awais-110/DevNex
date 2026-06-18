import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

const attempts = new Map<string, { count: number; resetAt: number }>();
const HOUR = 60 * 60 * 1000;

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= 3) {
    return NextResponse.json({ error: "Too many submissions. Try again later." }, { status: 429 });
  }

  const body = await request.json();
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
  }

  attempts.set(ip, {
    count: current && current.resetAt > now ? current.count + 1 : 1,
    resetAt: current && current.resetAt > now ? current.resetAt : now + HOUR,
  });

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = parsed.data;
    await resend.emails.send({
      from: "DevNex Website <onboarding@resend.dev>",
      to: "hello@devnexsolution.com",
      subject: `New Project Inquiry from ${data.name} - ${data.service}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h1>New Project Inquiry</h1>
          ${Object.entries(data).map(([key, value]) => `<p><strong>${key}:</strong> ${value || "Not provided"}</p>`).join("")}
        </div>
      `,
    });
  }

  return NextResponse.json({ success: true });
}
