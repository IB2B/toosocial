import { z } from "zod";

/** Shared by the booking form (client) and /api/lead (server). */
export const GOALS = [
  { value: "enquiries", label: "More enquiries" },
  { value: "launch", label: "Launch an offer" },
  { value: "social", label: "Social that works" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  email: z.email("That email doesn't look right."),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s().-]{5,}$/, "That number doesn't look right.")
    .or(z.literal(""))
    .optional(),
  site: z.string().trim().max(200).optional(),
  goal: z.enum(["enquiries", "launch", "social", "unsure"], {
    error: "Pick the one that fits best.",
  }),
  consent: z.literal(true, { error: "We need your OK to contact you." }),
  /** honeypot: real people never fill this in (checked in the route) */
  company: z.string().optional(),
});

export type Lead = z.infer<typeof leadSchema>;
