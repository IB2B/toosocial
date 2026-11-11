"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Rings } from "@/components/brand/Rings";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { VslPlayer } from "./VslPlayer";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Two huge hairline rings behind the hero, after the identity-kit cover.
 *  The bronze ring rises as you scroll: the "growth" in the symbol. */
function BackdropRings() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rise = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);

  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 2.6, delay, ease: [0.65, 0, 0.35, 1] as const },
        };

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1000 900"
        className="absolute top-[-8%] left-1/2 h-[118%] -translate-x-[8%] sm:-translate-x-[2%]"
        fill="none"
      >
        <motion.circle
          cx="420"
          cy="520"
          r="320"
          stroke="var(--color-antracite)"
          strokeOpacity="0.08"
          strokeWidth="1"
          {...draw(0.3)}
        />
        <motion.g style={{ y: rise }}>
          <motion.circle
            cx="700"
            cy="330"
            r="320"
            stroke="var(--color-bronzo)"
            strokeOpacity="0.3"
            strokeWidth="1"
            {...draw(0.7)}
          />
        </motion.g>
      </svg>
      {/* fade the rings out towards the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <BackdropRings />

      <div className="relative mx-auto max-w-[1200px] px-4 pt-16 pb-16 sm:px-8 sm:pt-24 sm:pb-24">
        <div className="mx-auto max-w-[880px] text-center">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Content · Ads · Consulting</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="h1-hero mt-5 text-balance text-foreground">
              <span className="block">You don&apos;t need more views.</span>
              <span className="block">
                You need <em className="kw">clients</em>.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[60ch] text-[18px] leading-[28px] text-muted-foreground sm:text-lead">
              In this video we show you how we turn short-form video, social media and ad
              campaigns into real enquiries. Every project starts with a real meeting, not an
              anonymous brief.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.28} className="relative mx-auto mt-12 max-w-[960px] sm:mt-14">
          {/* the TooSocial rings "linking" onto the video frame */}
          <Rings
            draw
            delay={0.9}
            strokeWidth={3}
            className="absolute -top-9 -right-2 z-10 w-16 sm:-top-12 sm:-right-6 sm:w-24 xl:-right-12"
          />
          <VslPlayer />
        </Reveal>

        <Reveal delay={0.4} className="mt-10 flex flex-col items-center gap-4">
          <Button asChild size="xl">
            <a href="#book">
              <CalendarDays />
              Book a call
            </a>
          </Button>
          <p className="text-small text-muted-foreground">We reply within 24 business hours.</p>
        </Reveal>
      </div>
    </section>
  );
}
