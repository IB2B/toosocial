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
import { useI18n } from "@/i18n";
import { Kw } from "./Kw";

/* TODO(copy): answers are a first draft. Confirm pricing model,
   contract terms and any guarantee before going live. */
/* TODO(copy): questions + answers live in src/i18n (faq.items). Confirm pricing
   model, contract terms and any guarantee before going live. */

function ContactCard({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  return (
    <div className={`rounded-xl border bg-avorio/60 p-6 ${className}`}>
      <p className="text-body font-semibold">{t.faq.stillTitle}</p>
      <p className="mt-1 text-body text-muted-foreground">
        {t.faq.stillBody}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button asChild size="lg" className="text-[15px] font-semibold">
          <a href="#book">
            <CalendarDays />
            {t.faq.book}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-[15px] font-semibold shadow-none">
          {/* TODO: real WhatsApp number (https://wa.me/...) */}
          <a href="#whatsapp">
            <MessageCircle />
            {t.faq.whatsapp}
          </a>
        </Button>
      </div>
    </div>
  );
}

export function Faq() {
  const reduce = useReducedMotion();
  const { t } = useI18n();
  const fq = t.faq;
  const FAQ = fq.items;
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
          <p className="eyebrow text-muted-foreground">{fq.eyebrow}</p>
          <h2 id="faq-title" className="h2-section mt-4 max-w-[14ch] text-balance">
            <Kw text={fq.title} />
          </h2>
          <p className="mt-6 max-w-[40ch] text-[18px] leading-[28px] text-muted-foreground sm:text-lead">
            {fq.lead}
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
