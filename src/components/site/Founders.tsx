"use client";

import { motion, useReducedMotion } from "motion/react";
import { Rings } from "@/components/brand/Rings";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { useI18n } from "@/i18n";
import { Kw } from "./Kw";

/* TODO(content): founder names, roles, story and photos are PLACEHOLDERS.
   Swap `photo` for real portraits (4:5, natural light, not stock).
   Roles, story and facts live in src/i18n (founders.*). */
const FOUNDERS = [
  {
    name: "Founder One",
    photo: undefined as string | undefined,
    tilt: "-rotate-3",
    offset: "lg:translate-y-6",
    tint: "from-[#1d2c44] to-[#132136]",
  },
  {
    name: "Founder Two",
    photo: undefined as string | undefined,
    tilt: "rotate-2",
    offset: "lg:-translate-y-4",
    tint: "from-[#22324b] to-[#16243a]",
  },
];

/* fact numbers; their labels are founders.facts in src/i18n */
const FACT_NUMBERS = ["1", "100%", "0"];

function Portrait({ f, i, role }: { f: (typeof FOUNDERS)[number]; i: number; role: string }) {
  return (
    <figure
      className={`group w-full max-w-[260px] ${f.tilt} ${f.offset} transition-transform duration-500 hover:rotate-0`}
    >
      <div className="rounded-lg bg-carta p-2.5 pb-4">
        <div
          className={`relative aspect-[4/5] overflow-hidden rounded-md bg-gradient-to-b ${f.tint}`}
        >
          {f.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={f.photo} alt={f.name} className="h-full w-full object-cover" />
          ) : (
            /* silhouette placeholder */
            <svg viewBox="0 0 100 125" className="absolute inset-0 h-full w-full" aria-hidden>
              <circle cx="50" cy="48" r="17" fill="var(--color-carta)" fillOpacity="0.12" />
              <path
                d="M14 125 C 16 92, 32 78, 50 78 S 84 92, 86 125 Z"
                fill="var(--color-carta)"
                fillOpacity="0.12"
              />
            </svg>
          )}
          {i === 1 && (
            <Rings
              className="absolute top-3 right-3 w-8 opacity-80"
              base="var(--color-carta)"
              accent="var(--color-champagne)"
              strokeWidth={5}
            />
          )}
        </div>
        <figcaption className="mt-3 px-1.5 text-antracite">
          <p className="text-[15px] font-semibold tracking-[-0.01em]">{f.name}</p>
          <p className="text-small text-antracite/60">{role}</p>
        </figcaption>
      </div>
    </figure>
  );
}

export function Founders() {
  const reduce = useReducedMotion();
  const { t } = useI18n();
  const fo = t.founders;
  const reveal = (delay = 0, y = 20) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-10% 0px" },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      aria-labelledby="founders-title"
      className="dark relative overflow-hidden bg-background text-foreground"
    >
      {/* hairline rings, like the identity-kit cover */}
      <svg
        aria-hidden
        viewBox="0 0 1000 900"
        fill="none"
        className="pointer-events-none absolute top-1/2 -left-[22%] h-[140%] -translate-y-1/2 opacity-60"
      >
        <circle cx="420" cy="520" r="320" stroke="var(--color-carta)" strokeOpacity="0.08" />
        <circle cx="700" cy="330" r="320" stroke="var(--color-champagne)" strokeOpacity="0.14" />
      </svg>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <motion.div {...reveal()}>
            <p className="eyebrow text-muted-foreground">{fo.eyebrow}</p>
            <h2 id="founders-title" className="h2-section mt-4 max-w-[18ch] text-balance">
              <Kw text={fo.title} className="text-champagne!" />
            </h2>
          </motion.div>

          <motion.div {...reveal(0.1)} className="mt-6 max-w-[56ch] space-y-4 text-body text-foreground/75">
            <p>{fo.p1}</p>
            <p>{fo.p2}</p>
          </motion.div>

          <motion.dl {...reveal(0.2)} className="mt-10 grid grid-cols-3 gap-4 border-y py-6">
            {fo.facts.map((label, i) => ({ k: FACT_NUMBERS[i], v: label })).map((f) => (
              <div key={f.v}>
                <dt className="sr-only">{f.v}</dt>
                <dd className="text-[32px] leading-none font-semibold tracking-[-0.04em] sm:text-[40px]">
                  {f.k}
                </dd>
                <dd className="mt-2 text-small text-muted-foreground">{f.v}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div
            {...reveal(0.3)}
            className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          >
            <Button asChild size="xl">
              <a href="#book">
                <Coffee />
                {fo.cta}
              </a>
            </Button>
            <p className="font-serif text-[26px] leading-none text-champagne italic">
              — Founder One &amp; Founder Two
            </p>
          </motion.div>
        </div>

        {/* polaroids */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {FOUNDERS.map((f, i) => (
            <motion.div key={f.name} {...reveal(0.15 + i * 0.15, 40)} className="flex flex-1 justify-center">
              <Portrait f={f} i={i} role={fo.roles[i]} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
