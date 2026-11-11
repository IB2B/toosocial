"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------- mini visuals (pure CSS/SVG, no images) ---------- */

function ReelsVisual() {
  // five reels fanned out; they spread further on hover
  const cards = [
    { pos: "-translate-x-[250%] translate-y-[-44%] -rotate-8", hover: "group-hover:-translate-x-[275%] group-hover:-rotate-12", t: "from-[#ece3d4] to-[#d9c9ad]" },
    { pos: "-translate-x-[150%] translate-y-[-48%] -rotate-4", hover: "group-hover:-translate-x-[165%] group-hover:-rotate-6", t: "from-[#efe9df] to-[#dcd4c6]" },
    { pos: "-translate-x-1/2 -translate-y-1/2 z-10", hover: "group-hover:-translate-y-[56%]", t: "from-[#e8dcc8] to-[#c9b28c]" },
    { pos: "translate-x-[50%] translate-y-[-48%] rotate-4", hover: "group-hover:translate-x-[65%] group-hover:rotate-6", t: "from-[#ece9e3] to-[#d6d0c4]" },
    { pos: "translate-x-[150%] translate-y-[-44%] rotate-8", hover: "group-hover:translate-x-[175%] group-hover:rotate-12", t: "from-[#f0e8db] to-[#dcc7a4]" },
  ];
  return (
    <div className="relative h-full">
      {cards.map((c, i) => (
        <div
          key={i}
          className={`absolute top-1/2 left-1/2 aspect-[9/16] h-[80%] rounded-md border-2 border-background bg-gradient-to-b ${c.t} ${c.pos} ${c.hover} transition-transform duration-500 ease-out ${
            i === 0 || i === 4 ? "hidden sm:block" : ""
          }`}
        >
          <span className="absolute top-2 left-2 size-3 rounded-full border border-background/80 bg-background/40" />
          <span className="absolute bottom-5 left-2 h-1.5 w-[60%] rounded-full bg-background/60" />
          <span className="absolute bottom-2 left-2 h-1.5 w-[38%] rounded-full bg-background/80" />
        </div>
      ))}
    </div>
  );
}

function CalendarVisual() {
  const posts = new Set([1, 3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26]);
  return (
    <div className="grid h-full place-items-center">
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className={`size-5 rounded-sm border transition-colors duration-300 sm:size-6 ${
              posts.has(i) ? "border-bronzo/40 bg-bronzo/80 group-hover:bg-bronzo" : "bg-background"
            }`}
            style={{ transitionDelay: `${i * 15}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function ChartVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full px-5 pt-6 pb-4">
      <svg viewBox="0 0 200 100" className="h-full w-full" fill="none" preserveAspectRatio="none">
        {[25, 50, 75].map((y) => (
          <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="var(--border)" strokeWidth="1" />
        ))}
        <motion.path
          d="M0 88 C 30 86, 45 80, 65 72 S 100 62, 120 48 S 160 22, 200 10"
          stroke="var(--color-bronzo)"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.6, ease }}
        />
      </svg>
      <span className="absolute top-3 right-4 rounded-full bg-background px-2.5 py-1 text-[11px] font-semibold">
        Enquiries ↑
      </span>
    </div>
  );
}

function LandingVisual() {
  return (
    <div className="grid h-full place-items-center px-6">
      <div className="w-full max-w-[360px] overflow-hidden rounded-md border bg-background transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-1.5 border-b px-3 py-2">
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="ml-3 h-2 w-28 rounded-full bg-avorio" />
        </div>
        <div className="flex flex-col items-center gap-1.5 px-4 py-4">
          <span className="h-1.5 w-14 rounded-full bg-avorio" />
          <span className="h-3 w-44 rounded-full bg-antracite/85" />
          <span className="h-3 w-28 rounded-full bg-antracite/85" />
          <span className="mt-1 aspect-video w-28 rounded-sm bg-avorio" />
          <span className="mt-1 h-4 w-16 rounded-[5px] bg-antracite transition-colors duration-300 group-hover:bg-bronzo" />
        </div>
      </div>
    </div>
  );
}

/* ---------- content ---------- */

const SERVICES = [
  {
    span: "md:col-span-4",
    tag: "Content",
    title: "Short-form video that sells",
    body: "Reels and TikToks built around your people, your offer and the questions your buyers actually ask.",
    points: ["Strategy & scripts", "On-site filming", "Editing & subtitles"],
    Visual: ReelsVisual,
  },
  {
    span: "md:col-span-2",
    tag: "Social",
    title: "Profiles that stay alive",
    body: "A steady calendar, replies handled, and a feed that looks like a business worth calling.",
    points: ["Content calendar", "Publishing", "Community replies"],
    Visual: CalendarVisual,
  },
  {
    span: "md:col-span-2",
    tag: "Ads",
    title: "Campaigns paid in clients",
    body: "Meta and TikTok ads optimised for enquiries and bookings, never for vanity reach.",
    points: ["Targeting & creative tests", "Tracking set-up", "Weekly optimisation"],
    Visual: ChartVisual,
  },
  {
    span: "md:col-span-4",
    tag: "Launches",
    title: "Landing pages & offer launches",
    body: "When you have something to sell, we build the page, the video and the campaign that fills it.",
    points: ["Landing page", "Offer & copy", "Launch campaign"],
    Visual: LandingVisual,
  },
];

const INCLUDED = [
  "Kick-off meeting in person",
  "Dedicated team",
  "Monthly results review",
  "No long lock-in",
  "WhatsApp line to the team",
];

export function Services() {
  const reduce = useReducedMotion();
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
    <section aria-labelledby="services-title" className="border-t">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-8 sm:py-24">
        <motion.div {...reveal()} className="mx-auto max-w-[680px] text-center">
          <p className="eyebrow text-muted-foreground">What you get</p>
          <h2 id="services-title" className="h2-section mt-4 text-balance">
            One team. Every piece that <em className="kw">sells</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-[54ch] text-[18px] leading-[28px] text-muted-foreground sm:text-lead">
            Content, social, ads and launch pages, planned together so each one pushes the
            same number: new clients.
          </p>
        </motion.div>

        {/* bento */}
        <ul className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-6 md:gap-5">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.title}
              {...reveal(0.05 + i * 0.08)}
              className={`group flex flex-col rounded-xl border bg-background p-3 ${s.span}`}
            >
              <div className="h-48 overflow-hidden rounded-lg bg-avorio sm:h-56">
                <s.Visual />
              </div>
              <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
                <Badge variant="outline" className="w-fit rounded-full font-medium">
                  {s.tag}
                </Badge>
                <h3 className="mt-3 text-[24px] leading-[30px] font-semibold tracking-[-0.025em]">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[52ch] text-body text-muted-foreground">{s.body}</p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-small">
                      <Check className="size-4 text-bronzo" strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* always included */}
        <motion.div
          {...reveal(0.1)}
          className="mt-10 flex flex-col items-center gap-4 sm:mt-12"
        >
          <p className="text-small text-muted-foreground">Always included</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {INCLUDED.map((x) => (
              <li key={x}>
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-[13px] font-medium">
                  {x}
                </Badge>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
