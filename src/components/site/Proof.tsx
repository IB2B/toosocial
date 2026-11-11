"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";

/* TODO(copy): every number, source and logo below is a PLACEHOLDER.
   Replace with real, attributable client results before going live. */
const STATS = [
  {
    value: 312,
    prefix: "+",
    suffix: "%",
    decimals: 0,
    label: "more enquiries in 90 days",
    source: "Dental clinic, Milan",
  },
  {
    value: 6.8,
    prefix: "",
    suffix: "×",
    decimals: 1,
    label: "return on ad spend",
    source: "Restaurant group, Q3 2026",
  },
  {
    value: 1240,
    prefix: "",
    suffix: "",
    decimals: 0,
    label: "qualified leads this year",
    source: "Across 18 active clients",
  },
] as const;

const LOGOS = [
  { name: "Casa Lume", style: "font-serif italic text-[26px]" },
  { name: "NORDVIK", style: "font-sans font-semibold tracking-[0.2em] text-[15px]" },
  { name: "Atelier Nove", style: "font-serif text-[25px]" },
  { name: "Ferro & Co.", style: "font-sans font-semibold text-[19px]" },
  { name: "Bottega 21", style: "font-serif italic text-[25px]" },
  { name: "VALMONTE", style: "font-serif tracking-[0.16em] text-[19px]" },
  { name: "Studio Riva", style: "font-sans text-[19px]" },
];

function CountUp({
  value,
  decimals,
  prefix,
  suffix,
}: {
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setN,
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  const formatted = n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      <span className="kw ml-0.5">{suffix}</span>
    </span>
  );
}

export function Proof() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="proof-title" className="border-t">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-8 sm:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[640px] text-center"
        >
          <p className="eyebrow text-muted-foreground">Results, not reach</p>
          <h2
            id="proof-title"
            className="h2-section mt-4"
          >
            Numbers you can <em className="kw">count</em>.
          </h2>
        </motion.div>

        {/* stats: hairline-divided, no shadows (kit §08) */}
        <dl className="mt-12 grid border-y sm:mt-16 sm:grid-cols-3 sm:divide-x">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-2 border-b px-6 py-10 text-center last:border-b-0 sm:border-b-0 sm:py-12"
            >
              <dt className="order-2 mt-2 text-body text-foreground">{s.label}</dt>
              <dd className="order-1 text-[52px] font-semibold leading-none tracking-[-0.04em] sm:text-[60px]">
                <CountUp {...s} />
              </dd>
              <dd className="order-3 text-small text-muted-foreground">{s.source}</dd>
            </motion.div>
          ))}
        </dl>

        {/* logo marquee */}
        <div className="mt-14 sm:mt-16">
          <p className="text-center text-small text-muted-foreground">
            Trusted by local businesses that would rather meet than email
          </p>
          <div
            className="group relative mt-8 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <ul className="marquee flex w-max items-center gap-16 group-hover:[animation-play-state:paused]">
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <li
                  key={i}
                  aria-hidden={i >= LOGOS.length}
                  className={`shrink-0 whitespace-nowrap text-foreground/45 transition-colors hover:text-foreground ${l.style}`}
                >
                  {l.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
