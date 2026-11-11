"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Rings } from "@/components/brand/Rings";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GOALS, leadSchema, type Lead } from "@/lib/lead";

const ease = [0.22, 1, 0.36, 1] as const;

/* TODO(copy): confirm call length / format before launch */
const PROMISES = [
  "30 minutes, by video or in person",
  "Free, with no obligation",
  "You leave with ideas you can use either way",
];

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={id} className="text-[14px] font-semibold">
          {label}
        </Label>
        {hint && <span className="text-[13px] text-muted-foreground">{hint}</span>}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-[13px] text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls =
  "h-12 rounded-md px-4 text-[16px] shadow-none md:text-[16px] focus-visible:ring-[3px]";

function BookingForm({ onDone }: { onDone: (name: string) => void }) {
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Lead>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", email: "", phone: "", site: "", company: "" },
  });

  const onSubmit = async (data: Lead) => {
    setServerError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      onDone(data.name.split(" ")[0]);
    } catch {
      setServerError("Something went wrong. Try again, or message us on WhatsApp.");
    }
  };

  const aria = (k: keyof Lead) =>
    errors[k] ? { "aria-invalid": true, "aria-describedby": `lead-${k}-error` } : {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="lead-name" label="Your name" error={errors.name?.message}>
          <Input id="lead-name" autoComplete="name" className={inputCls} {...register("name")} {...aria("name")} />
        </Field>
        <Field id="lead-email" label="Email" error={errors.email?.message}>
          <Input
            id="lead-email"
            type="email"
            autoComplete="email"
            className={inputCls}
            {...register("email")}
            {...aria("email")}
          />
        </Field>
        <Field id="lead-phone" label="Phone" hint="Optional" error={errors.phone?.message}>
          <Input
            id="lead-phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
            {...register("phone")}
            {...aria("phone")}
          />
        </Field>
        <Field id="lead-site" label="Website or Instagram" hint="Optional">
          <Input id="lead-site" placeholder="@yourbusiness" className={inputCls} {...register("site")} />
        </Field>
      </div>

      {/* goal chips (radio group) */}
      <fieldset className="space-y-3">
        <legend className="text-[14px] font-semibold">What do you need most?</legend>
        <Controller
          control={control}
          name="goal"
          render={({ field }) => (
            <div role="radiogroup" aria-invalid={!!errors.goal} className="flex flex-wrap gap-2">
              {GOALS.map((g) => {
                const on = field.value === g.value;
                return (
                  <button
                    key={g.value}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => field.onChange(g.value)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 ${
                      on
                        ? "border-primary bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {on && <Check className="size-3.5" strokeWidth={3} />}
                    {g.label}
                  </button>
                );
              })}
            </div>
          )}
        />
        {errors.goal && (
          <p role="alert" className="text-[13px] text-destructive">
            {errors.goal.message}
          </p>
        )}
      </fieldset>

      {/* honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="lead-company">Company</label>
        <input id="lead-company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="space-y-2">
        <Controller
          control={control}
          name="consent"
          render={({ field }) => (
            <label htmlFor="lead-consent" className="flex cursor-pointer items-start gap-3">
              <Checkbox
                id="lead-consent"
                checked={field.value === true}
                onCheckedChange={(c) => field.onChange(c === true ? true : undefined)}
                aria-invalid={!!errors.consent}
                className="mt-0.5 size-5 rounded-[5px] shadow-none"
              />
              <span className="text-[14px] leading-[22px] text-muted-foreground">
                I agree to be contacted about my request, as described in the{" "}
                {/* TODO: link real privacy policy */}
                <a href="#privacy" className="underline underline-offset-2 hover:text-foreground">
                  privacy policy
                </a>
                .
              </span>
            </label>
          )}
        />
        {errors.consent && (
          <p role="alert" className="text-[13px] text-destructive">
            {errors.consent.message}
          </p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="rounded-md border border-destructive/40 px-4 py-3 text-[14px] text-destructive">
          {serverError}
        </p>
      )}

      <Button type="submit" size="xl" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Request my call <ArrowRight />
          </>
        )}
      </Button>
      <p className="text-center text-[13px] text-muted-foreground">
        We reply within 24 business hours. No spam, ever.
      </p>
    </form>
  );
}

function Success({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center py-10 text-center" role="status">
      <Rings
        draw
        className="w-28"
        base="var(--color-carta)"
        accent="var(--color-champagne)"
        strokeWidth={3.5}
      />
      <h3 className="mt-8 text-[30px] leading-[36px] font-semibold tracking-[-0.03em]">
        Thanks, {name}. <em className="kw text-champagne!">Talk soon</em>.
      </h3>
      <p className="mt-4 max-w-[38ch] text-body text-muted-foreground">
        Your request is in. One of us will get back to you within 24 business hours to
        set a time that works.
      </p>
    </div>
  );
}

export function Booking() {
  const reduce = useReducedMotion();
  const [doneName, setDoneName] = useState<string | null>(null);

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-10% 0px" },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section
      id="book"
      aria-labelledby="book-title"
      className="dark relative scroll-mt-[72px] overflow-hidden bg-background text-foreground"
    >
      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div {...reveal()} className="lg:pt-6">
          <p className="eyebrow text-muted-foreground">Book a call</p>
          <h2 id="book-title" className="h2-section mt-4 max-w-[13ch] text-balance">
            Your next client is one <em className="kw text-champagne!">call</em> away.
          </h2>
          <ul className="mt-8 space-y-4">
            {PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-3 text-body text-foreground/85">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-champagne text-notte">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-12 hidden items-center gap-5 lg:flex">
            <Rings
              draw
              className="w-20 shrink-0"
              base="var(--color-carta)"
              accent="var(--color-champagne)"
              strokeWidth={3}
            />
            <p className="max-w-[30ch] font-serif text-[22px] leading-[28px] text-foreground/80 italic">
              Every project starts with a conversation. This is ours.
            </p>
          </div>
        </motion.div>

        <motion.div {...reveal(0.1)} className="relative rounded-xl border bg-card p-6 sm:p-8">
          {doneName ? <Success name={doneName} /> : <BookingForm onDone={setDoneName} />}
        </motion.div>
      </div>
    </section>
  );
}
