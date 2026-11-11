"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { useI18n } from "@/i18n";
import { Kw } from "./Kw";

/* step copy lives in src/i18n (method.steps) */
const stepNo = (i: number) => String(i + 1).padStart(2, "0");

/* ---------------------------------------------------------------
   Rings that travel towards each other and interlock on scroll.
   Final geometry = the logo (ring B up-right of ring A = growth).
   Interlace: B is drawn over A, then a short arc of A (with a
   background-coloured underlay) is redrawn on top where A must
   pass over B. While the rings are apart the underlay is invisible.
   --------------------------------------------------------------- */
const R = 36;
const SW = 3;

function arcPath(cx: number, cy: number, from: number, to: number) {
  const p = (d: number) => {
    const a = (d * Math.PI) / 180;
    return `${(cx + R * Math.cos(a)).toFixed(2)} ${(cy + R * Math.sin(a)).toFixed(2)}`;
  };
  return `M ${p(from)} A ${R} ${R} 0 0 1 ${p(to)}`;
}

// A's top crossing sits at ~263.5° in the interlocked position
const A_OVER = arcPath(0, 0, 245, 282);

function InterlockingRings({
  progress,
  labels,
}: {
  progress: MotionValue<number>;
  labels: { a: string; b: string; together: string };
}) {
  const ax = useTransform(progress, [0, 0.8], [52, 86]);
  const bx = useTransform(progress, [0, 0.8], [168, 116]);
  const by = useTransform(progress, [0, 0.8], [72, 48]);
  const ay = 72;
  const labelsOut = useTransform(progress, [0.6, 0.78], [1, 0]);
  const together = useTransform(progress, [0.8, 0.95], [0, 1]);
  const togetherY = useTransform(progress, [0.8, 0.95], [6, 0]);

  const aT = useTransform(ax, (x) => `translate(${x}px, ${ay}px)`);
  const bT = useTransform([bx, by] as MotionValue<number>[], ([x, y]) => `translate(${x}px, ${y}px)`);

  return (
    <svg viewBox="0 0 220 150" className="w-full" fill="none" aria-hidden>
      {/* ring A: your business */}
      <motion.g style={{ transform: aT }}>
        <circle r={R} stroke="var(--color-antracite)" strokeWidth={SW} />
        <motion.text
          y={R + 18}
          textAnchor="middle"
          className="fill-muted-foreground font-sans text-[8px]"
          style={{ opacity: labelsOut }}
        >
          {labels.a}
        </motion.text>
      </motion.g>

      {/* ring B: TooSocial, rising */}
      <motion.g style={{ transform: bT }}>
        <circle r={R} stroke="var(--color-bronzo)" strokeWidth={SW} />
        <motion.text
          y={R + 18}
          textAnchor="middle"
          className="fill-bronzo font-sans text-[8px]"
          style={{ opacity: labelsOut }}
        >
          {labels.b}
        </motion.text>
      </motion.g>

      {/* A passes over B at the top crossing */}
      <motion.g style={{ transform: aT }}>
        <path d={A_OVER} stroke="var(--background)" strokeWidth={SW + 5} />
        <path d={A_OVER} stroke="var(--color-antracite)" strokeWidth={SW} />
      </motion.g>

      <motion.text
        x={101}
        y={140}
        textAnchor="middle"
        className="fill-foreground font-serif text-[13px] italic"
        style={{ opacity: together, y: togetherY }}
      >
        {labels.together}
      </motion.text>
    </svg>
  );
}

export function Method() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.55", "end 0.75"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const progress = reduce ? scrollYProgress : smooth;
  const [active, setActive] = useState(0);
  const { t } = useI18n();
  const m = t.method;
  const STEPS = m.steps;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length * 1.05))));
  });

  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10% 0px" },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section ref={ref} aria-labelledby="method-title" className="relative border-t">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-8 sm:py-24">
        <motion.div {...reveal} className="max-w-[640px]">
          <p className="eyebrow text-muted-foreground">{m.eyebrow}</p>
          <h2 id="method-title" className="h2-section mt-4 text-balance">
            <Kw text={m.title} />
          </h2>
          <p className="mt-6 max-w-[52ch] text-[18px] leading-[28px] text-muted-foreground sm:text-lead">
            {m.lead}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* sticky visual */}
          <div className="sticky top-[72px] z-10 -mx-4 bg-background/95 px-4 py-3 backdrop-blur lg:top-28 lg:mx-0 lg:h-fit lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <div className="mx-auto max-w-[200px] sm:max-w-[260px] lg:max-w-none">
              <div className="lg:rounded-lg lg:border lg:p-10">
                <InterlockingRings
                  progress={progress}
                  labels={{ a: m.yourBusiness, b: "TooSocial", together: m.together }}
                />
                <div className="mt-2 hidden items-center justify-between lg:flex">
                  {STEPS.map((s, i) => (
                    <span
                      key={i}
                      className={`text-small transition-colors duration-300 ${
                        i <= active ? "text-foreground" : "text-muted-foreground/50"
                      }`}
                    >
                      {s.tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 hidden h-px bg-border lg:block">
                  <motion.div
                    className="h-px origin-left bg-bronzo"
                    style={{ scaleX: progress }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* steps */}
          <ol className="relative">
            {STEPS.map((s, i) => {
              const on = i === active;
              return (
                <li
                  key={i}
                  className={`flex gap-6 border-t py-10 transition-opacity duration-500 last:border-b lg:py-14 ${
                    on ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <span
                    className={`w-10 shrink-0 pt-1 font-serif text-[28px] leading-none italic transition-colors duration-500 ${
                      on ? "text-bronzo" : "text-muted-foreground"
                    }`}
                  >
                    {stepNo(i)}
                  </span>
                  <div>
                    <p className="eyebrow text-muted-foreground">{s.tag}</p>
                    <h3 className="mt-2 text-[26px] leading-[32px] font-semibold tracking-[-0.025em] sm:text-[30px] sm:leading-[36px]">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-[48ch] text-body text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <motion.div {...reveal} className="mt-12 flex flex-col items-center gap-3 lg:mt-16">
          <Button asChild size="xl">
            <a href="#book">
              <CalendarDays />
              {m.book}
            </a>
          </Button>
          <p className="text-small text-muted-foreground">{m.footnote}</p>
        </motion.div>
      </div>
    </section>
  );
}
