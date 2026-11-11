"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Rings } from "@/components/brand/Rings";
import { useI18n } from "@/i18n";
import { Kw } from "./Kw";

/* TODO(copy): all clients, numbers and quotes are PLACEHOLDERS.
   Replace with real case studies + vertical videos (9:16) before launch.
   Industry, period, unit, quote and person live in src/i18n (cases.items). */
const CASES = [
  {
    client: "Studio Riva",
    handle: "@studioriva.dental",
    before: "4",
    after: "31",
    length: "0:48",
    tint: "from-[#efe7da] to-[#e2d6c2]",
  },
  {
    client: "Ferro & Co.",
    handle: "@ferroandco",
    before: "€38",
    after: "€9",
    length: "0:32",
    tint: "from-[#ece9e3] to-[#d9d4ca]",
  },
  {
    client: "Casa Lume",
    handle: "@casalume",
    before: "12",
    after: "140",
    length: "0:41",
    tint: "from-[#f1e9dc] to-[#e5d3b8]",
  },
];

function ReelFrame({ c }: { c: (typeof CASES)[number] }) {
  return (
    <div
      className={`relative aspect-[9/14] overflow-hidden rounded-lg border bg-gradient-to-b ${c.tint}`}
    >
      <Rings
        className="pointer-events-none absolute -right-[18%] -bottom-[10%] w-[80%] opacity-[0.08]"
        strokeWidth={2}
      />

      <span className="absolute top-3 left-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase backdrop-blur">
        Reel · {c.length}
      </span>

      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
          <Play className="ml-0.5 size-5 fill-current" strokeWidth={0} />
        </span>
      </span>

      {/* reel footer, like the real thing */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-antracite/55 to-transparent p-3 pt-10 text-avorio">
        <span className="size-6 shrink-0 rounded-full border border-avorio/60 bg-avorio/30" />
        <span className="text-[12px] font-semibold">{c.handle}</span>
      </div>
    </div>
  );
}

export function Cases() {
  const reduce = useReducedMotion();
  const { t } = useI18n();
  const k = t.cases;
  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-10% 0px" },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section aria-labelledby="cases-title" className="border-t bg-avorio/45">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-8 sm:py-24">
        <motion.div
          {...reveal()}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-[640px]">
            <p className="eyebrow text-muted-foreground">{k.eyebrow}</p>
            <h2 id="cases-title" className="h2-section mt-4 text-balance">
              <Kw text={k.title} />
            </h2>
          </div>
          <p className="max-w-[36ch] text-body text-muted-foreground">
            {k.side}
          </p>
        </motion.div>

        {/* mobile: swipe row · desktop: 3 columns */}
        <ul className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mt-14 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {CASES.map((c, i) => (
            <motion.li
              key={c.client}
              {...reveal(0.1 + i * 0.1)}
              className="group w-[82%] shrink-0 snap-center sm:w-[60%] md:w-auto"
            >
              <article className="flex h-full flex-col rounded-xl border bg-background p-3">
                <button
                  type="button"
                  className="block w-full cursor-pointer rounded-lg text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  aria-label={k.watchAria(c.client, c.length)}
                >
                  <ReelFrame c={c} />
                </button>

                <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="rounded-full font-medium">
                      {k.items[i].industry}
                    </Badge>
                    <Badge variant="outline" className="rounded-full font-medium">
                      {k.items[i].period}
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-[22px] leading-[28px] font-semibold tracking-[-0.02em]">
                    {c.client}
                  </h3>

                  {/* before → after */}
                  <div className="mt-4 border-y py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[22px] font-semibold tracking-[-0.03em] text-muted-foreground/60 line-through decoration-1">
                        {c.before}
                      </span>
                      <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                      <span className="text-[40px] leading-none font-semibold tracking-[-0.04em]">
                        {c.after}
                      </span>
                    </div>
                    <p className="mt-2 text-small text-muted-foreground">{k.items[i].unit}</p>
                  </div>

                  <blockquote className="mt-4 flex-1 text-body text-foreground">
                    &ldquo;{k.items[i].quote}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-small text-muted-foreground">{k.items[i].person}</p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
