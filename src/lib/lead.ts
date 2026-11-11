import { z } from "zod";

/** Shared by the booking form (client) and /api/lead (server).
 *  Labels for each goal live in src/i18n (booking.form.goals). */
export const GOAL_VALUES = ["enquiries", "launch", "social", "unsure"] as const;
export type Goal = (typeof GOAL_VALUES)[number];

export type LeadErrors = {
  name: string;
  email: string;
  phone: string;
  goal: string;
  consent: string;
};

/** Build the schema with error messages in the visitor's language. */
export function makeLeadSchema(e: LeadErrors) {
  return z.object({
    name: z.string().trim().min(2, e.name),
    email: z.email(e.email),
    phone: z
      .string()
      .trim()
      .regex(/^[+\d][\d\s().-]{5,}$/, e.phone)
      .or(z.literal(""))
      .optional(),
    site: z.string().trim().max(200).optional(),
    goal: z.enum(GOAL_VALUES, { error: e.goal }),
    consent: z.literal(true, { error: e.consent }),
    /** honeypot: real people never fill this in (checked in the route) */
    company: z.string().optional(),
  });
}

export type Lead = z.infer<ReturnType<typeof makeLeadSchema>>;
