"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CalendarDays, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const FOR = [
  "You run a business with a real product or service people pay for.",
  "You (or your team) are happy to show your face on camera.",
  "You could handle more enquiries next month.",
  "You care about clients and revenue, not just pretty posts.",
  "You'd rather meet us in person than trade twenty emails.",
];

const NOT_FOR = [
  "You're looking for the cheapest posting service.",
  "You want to go viral, not to get clients.",
  "You can't give us an hour or two a month.",
  "You expect results in a week with no ad budget.",
  "You want someone to buy you followers.",
];

const ease = [0.22, 1, 0.36, 1] as const;

function verdict(n: number) {
  if (n === 0) return { line: "Tick what sounds like you.", fit: false };
  if (n <= 2) return { line: "A few boxes ticked. Let's see if it fits.", fit: false };
  if (n <= 4) return { line: "Sounds like a good fit.", fit: true };
  return { line: "You're exactly who we work best with.", fit: true };
}

export function FitCheck() {
  const reduce = useReducedMotion();
  const [checked, setChecked] = useState<boolean[]>(() => FOR.map(() => false));
  const n = checked.filter(Boolean).length;
  const v = verdict(n);
  const baseId = useId();

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
    <section aria-labelledby="fit-title" className="border-t">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-8 sm:py-24">
        <motion.div {...reveal()} className="mx-auto max-w-[680px] text-center">
          <p className="eyebrow text-muted-foreground">Is this for you?</p>
          <h2 id="fit-title" className="h2-section mt-4 text-balance">
            We don&apos;t work with <em className="kw">everyone</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[18px] leading-[28px] text-muted-foreground sm:text-lead">
            We take on a handful of clients at a time so each one gets a real team. Here&apos;s
            how to tell if we&apos;re a match.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:gap-5">
          {/* FOR: interactive fit check */}
          <motion.div {...reveal(0.05)} className="flex flex-col rounded-xl border bg-background p-6 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[24px] leading-[30px] font-semibold tracking-[-0.025em]">
                This is for you if…
              </h3>
              <span className="shrink-0 text-small text-muted-foreground tabular-nums" aria-live="polite">
                {n} of {FOR.length}
              </span>
            </div>

            {/* progress */}
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-avorio">
              <motion.div
                className="h-full rounded-full bg-bronzo"
                animate={{ width: `${(n / FOR.length) * 100}%` }}
                transition={{ duration: 0.5, ease }}
              />
            </div>

            <ul className="mt-6 flex-1 space-y-2">
              {FOR.map((item, i) => {
                const id = `${baseId}-for-${i}`;
                const on = checked[i];
                return (
                  <li key={item}>
                    <label
                      htmlFor={id}
                      className={`flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-colors ${
                        on ? "border-bronzo/50 bg-avorio" : "border-transparent hover:bg-avorio/60"
                      }`}
                    >
                      <Checkbox
                        id={id}
                        checked={on}
                        onCheckedChange={(c) =>
                          setChecked((prev) => prev.map((p, j) => (j === i ? c === true : p)))
                        }
                        className="mt-0.5 size-5 rounded-[5px] shadow-none"
                      />
                      <span className="text-body">{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>

            {/* live verdict */}
            <div className="mt-6 flex flex-col items-start gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
              {/* keyed so each new verdict remounts and fades in; no exit wait */}
              <motion.p
                key={v.line}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-body ${v.fit ? "font-semibold" : "text-muted-foreground"}`}
              >
                {v.line}
              </motion.p>
              <Button
                asChild
                size={v.fit ? "xl" : "lg"}
                variant={v.fit ? "default" : "outline"}
                className="shrink-0 shadow-none transition-all"
              >
                <a href="#book">
                  <CalendarDays />
                  {v.fit ? "Book your call" : "Book a call"}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* NOT FOR: dark panel (main brand version) */}
          <motion.div
            {...reveal(0.15)}
            className="dark flex flex-col rounded-xl bg-background p-6 text-foreground sm:p-8"
          >
            <h3 className="text-[24px] leading-[30px] font-semibold tracking-[-0.025em]">
              It&apos;s <em className="kw text-champagne!">not</em> for you if…
            </h3>
            <ul className="mt-6 flex-1 divide-y">
              {NOT_FOR.map((item) => (
                <li key={item} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border text-muted-foreground">
                    <X className="size-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-body text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t pt-6 text-small text-muted-foreground">
              Honest beats busy. If we&apos;re not the right partner, we&apos;ll tell you on the
              call and point you somewhere better.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
