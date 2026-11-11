"use client";

import { motion, useReducedMotion } from "motion/react";
import { CalendarDays, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

/* TODO(copy): answers are a first draft. Confirm pricing model,
   contract terms and any guarantee before going live. */
const FAQ = [
  {
    q: "How much does it cost?",
    a: "Every plan is built around your goal, so we quote after the first meeting, not before. Most clients pay a monthly fee for our team plus a separate ad budget that goes straight to Meta or TikTok. You'll get a clear number on the call, with no surprises later.",
  },
  {
    q: "Do I really have to be on camera?",
    a: "It works best when you are, because people buy from people. But it can be anyone on your team. We write the scripts, coach you on set and keep each session short. Most people are comfortable by the second shoot.",
  },
  {
    q: "How much of my time will it take?",
    a: "One kick-off meeting, then a filming session of a couple of hours each month and a short monthly review. Everything else, from editing to publishing to ads, is on us.",
  },
  {
    q: "How fast will I see results?",
    a: "Content and ads start working in the first weeks, but we judge success over 90 days. Before we start, we agree on the one number that matters to you, usually enquiries or bookings.",
  },
  {
    q: "Will this work for my industry?",
    a: "We work best with businesses that sell a real product or service and can handle more clients: clinics, restaurants, showrooms, studios, shops and local brands. If we don't think we can help, we'll tell you on the call.",
  },
  {
    q: "Is there a long contract?",
    a: "No. We start with a three-month period, because that's how long it takes to read real results. After that it's month to month.",
  },
  {
    q: "Do you guarantee results?",
    a: "Nobody honest can guarantee a number for every business. What we guarantee is the work and the transparency: you see every figure, every month. If a target isn't moving, we change the plan at no extra cost.",
  },
  {
    q: "What happens on the call?",
    a: "Thirty minutes. We look at your business, your current content and what one new client is worth to you. You'll leave with ideas you can use whether you work with us or not.",
  },
];

function ContactCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border bg-avorio/60 p-6 ${className}`}>
      <p className="text-body font-semibold">Still not sure?</p>
      <p className="mt-1 text-body text-muted-foreground">
        Ask us directly. A real person replies, usually within the hour.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button asChild size="lg" className="text-[15px] font-semibold">
          <a href="#book">
            <CalendarDays />
            Book a call
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-[15px] font-semibold shadow-none">
          {/* TODO: real WhatsApp number (https://wa.me/...) */}
          <a href="#whatsapp">
            <MessageCircle />
            WhatsApp us
          </a>
        </Button>
      </div>
    </div>
  );
}

export function Faq() {
  const reduce = useReducedMotion();
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
    <section aria-labelledby="faq-title" className="border-t">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* left: heading + contact card (sticky on desktop) */}
        <motion.div {...reveal()} className="lg:sticky lg:top-28 lg:h-fit">
          <p className="eyebrow text-muted-foreground">Questions</p>
          <h2 id="faq-title" className="h2-section mt-4 max-w-[14ch] text-balance">
            Let&apos;s clear things <em className="kw">up</em>.
          </h2>
          <p className="mt-6 max-w-[40ch] text-[18px] leading-[28px] text-muted-foreground sm:text-lead">
            The things people ask us before they book. Straight answers, no agency talk.
          </p>

          <ContactCard className="mt-10 hidden lg:block" />
        </motion.div>

        {/* right: accordion */}
        <motion.div {...reveal(0.1)}>
          <Accordion type="single" collapsible defaultValue="q-0" className="border-t">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`q-${i}`} className="last:border-b">
                <AccordionTrigger className="items-center gap-6 py-6 text-[19px] leading-[26px] font-semibold tracking-[-0.015em] hover:no-underline sm:text-[21px] [&>svg]:size-5 [&>svg]:text-foreground [&[data-state=open]]:text-bronzo">
                  <span className="flex items-baseline gap-5">
                    <span className="w-6 shrink-0 font-serif text-[18px] font-normal text-muted-foreground italic">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-7 pl-11">
                  <p className="max-w-[60ch] text-body text-muted-foreground">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <ContactCard className="mt-10 lg:hidden" />
        </motion.div>
      </div>
    </section>
  );
}
