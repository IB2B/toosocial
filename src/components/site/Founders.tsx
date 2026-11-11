"use client";

import { motion, useReducedMotion } from "motion/react";
import { Rings } from "@/components/brand/Rings";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

/* TODO(content): founder names, roles, story and photos are PLACEHOLDERS.
   Swap `photo` for real portraits (4:5, natural light, not stock). */
const FOUNDERS = [
  {
    name: "Founder One",
    role: "Strategy & ads",
    photo: undefined as string | undefined,
    tilt: "-rotate-3",
    offset: "lg:translate-y-6",
    tint: "from-[#1d2c44] to-[#132136]",
  },
  {
    name: "Founder Two",
    role: "Content & filming",
    photo: undefined as string | undefined,
    tilt: "rotate-2",
    offset: "lg:-translate-y-4",
    tint: "from-[#22324b] to-[#16243a]",
  },
];

const FACTS = [
  { k: "1", v: "team, start to finish" },
  { k: "100%", v: "projects kicked off in person" },
  { k: "0", v: "account managers in between" },
];

function Portrait({ f, i }: { f: (typeof FOUNDERS)[number]; i: number }) {
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
          <p className="text-small text-antracite/60">{f.role}</p>
        </figcaption>
      </div>
    </figure>
  );
}

export function Founders() {
  const reduce = useReducedMotion();
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
            <p className="eyebrow text-muted-foreground">The people behind TooSocial</p>
            <h2 id="founders-title" className="h2-section mt-4 max-w-[18ch] text-balance">
              You&apos;ll meet <em className="kw text-champagne!">us</em>, not an account
              manager.
            </h2>
          </motion.div>

          <motion.div {...reveal(0.1)} className="mt-6 max-w-[56ch] space-y-4 text-body text-foreground/75">
            <p>
              We started TooSocial because we were tired of agencies that sell reach and
              disappear behind dashboards. We&apos;d rather sit at your table, understand how
              your business really makes money, and then build content around that.
            </p>
            <p>
              The people who meet you are the people who film, edit and run your campaigns.
              No hand-offs, no juniors you&apos;ve never seen.
            </p>
          </motion.div>

          <motion.dl {...reveal(0.2)} className="mt-10 grid grid-cols-3 gap-4 border-y py-6">
            {FACTS.map((f) => (
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
                Meet us for a coffee
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
              <Portrait f={f} i={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
