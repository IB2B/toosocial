import { z } from "zod";
import { leadSchema } from "@/lib/lead";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, errors: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    );
  }

  const { company, ...lead } = parsed.data;
  // Bots fill the hidden field: pretend success, store nothing.
  if (company) return Response.json({ ok: true });

  // TODO(integration): send to CRM / email (HubSpot, Odoo, Resend…).
  // Until then, leads only appear in the server log.
  console.info("[lead]", { ...lead, receivedAt: new Date().toISOString() });

  return Response.json({ ok: true });
}
