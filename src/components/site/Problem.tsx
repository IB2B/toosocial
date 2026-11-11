"use client";

import { motion, useReducedMotion } from "motion/react";
import { Eye, Heart, Inbox, MessageCircle, Minus, Share2, UserPlus } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const PAINS = [
  {
    title: "Views go up. Enquiries don't.",
    body: "Your reels reach thousands of people who were never going to buy.",
  },
  {
    title: "Agencies send reports, not results.",
    body: "Pages of likes and impressions, and no idea what any of it earned you.",
  },
  {
    title: "You don't have time to be a creator.",
    body: "Filming, editing, posting, replying, on top of running a business.",
  },
  {
    title: "Ads feel like burning money.",
    body: "You boosted a few posts. Nothing came back.",
  },
];

const NOTIFS = [
  { icon: Eye, text: "Your reel reached", strong: "48,210 accounts", time: "2m" },
  { icon: Heart, text: "", strong: "1,203 people", after: "liked your post", time: "9m" },
  { icon: MessageCircle, text: "", strong: "@giulia.m", after: "commented “so nice! 🔥”", time: "14m" },
  { icon: UserPlus, text: "", strong: "86 new followers", after: "this week", time: "1h" },
  { icon: Share2, text: "Your post was shared", strong: "214 times", time: "3h" },
];

function Phone() {
  const reduce = useReducedMotion();
  const item = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: -14, scale: 0.97 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, margin: "-20% 0px" },
          transition: { duration: 0.6, delay: 0.25 + i * 0.35, ease },
        };

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* device */}
      <div className="relative rounded-[44px] border bg-avorio p-3">
        <div className="relative overflow-hidden rounded-[34px] border bg-background px-4 pt-10 pb-5">
          <div className="absolute top-3 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-antracite" />

          <p className="px-1 text-small font-semibold">Notifications</p>

          <ul className="mt-3 space-y-2.5">
            {NOTIFS.map((n, i) => {
              const Icon = n.icon;
              return (
                <motion.li
                  key={i}
                  {...item(i)}
                  className="flex items-start gap-3 rounded-lg border bg-background p-3"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-avorio">
                    <Icon className="size-4" />
                  </span>
                  <p className="flex-1 text-[13px] leading-[18px] text-muted-foreground">
                    {n.text} <span className="font-semibold text-foreground">{n.strong}</span>{" "}
                    {n.after}
                  </p>
                  <span className="text-[11px] text-muted-foreground">{n.time}</span>
                </motion.li>
              );
            })}
          </ul>

          {/* the punchline */}
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 12 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-20% 0px" },
                  transition: { duration: 0.7, delay: 0.25 + NOTIFS.length * 0.35 + 0.3, ease },
                })}
            className="mt-4 flex items-center gap-3 rounded-lg bg-antracite p-4 text-avorio"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-avorio/10">
              <Inbox className="size-4" />
            </span>
            <div className="flex-1">
              <p className="text-[13px] leading-[18px] text-avorio/70">New client enquiries</p>
              <p className="text-[13px] leading-[18px] text-avorio/50">this month</p>
            </div>
            <span className="font-serif text-[44px] leading-none text-champagne">0</span>
          </motion.div>
        </div>
      </div>

      {/* hairline ring behind the device, echo of the symbol */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -top-10 -right-14 -z-10 w-56 sm:-right-20 sm:w-72"
        fill="none"
      >
        <circle cx="50" cy="50" r="49" stroke="var(--color-bronzo)" strokeOpacity="0.35" strokeWidth="0.4" />
      </svg>
    </div>
  );
}

export function Problem() {
  const reduce = useReducedMotion();
  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-10% 0px" },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section aria-labelledby="problem-title" className="overflow-hidden border-t">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <motion.div {...reveal()}>
            <p className="eyebrow text-muted-foreground">Sound familiar?</p>
            <h2
              id="problem-title"
              className="h2-section mt-4 max-w-[17ch] text-balance"
            >
              You post every day. The phone <em className="kw">still</em> doesn&apos;t
              ring.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[18px] leading-[28px] text-muted-foreground sm:text-lead">
              That&apos;s not an effort problem. It&apos;s that nobody built your content to
              bring in clients.
            </p>
          </motion.div>

          <ul className="mt-10 divide-y border-y">
            {PAINS.map((p, i) => (
              <motion.li key={p.title} {...reveal(0.1 + i * 0.08)} className="flex gap-4 py-5">
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full border text-bronzo">
                  <Minus className="size-3.5" strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-body font-semibold">{p.title}</p>
                  <p className="mt-1 text-body text-muted-foreground">{p.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <Phone />
      </div>
    </section>
  );
}
