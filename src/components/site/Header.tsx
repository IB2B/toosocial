"use client";

import { CalendarDays, Languages } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { localePath, useI18n } from "@/i18n";

/** Minimal VSL header: logo, language switch, one action. No nav, no exits. */
export function Header() {
  const { locale, t } = useI18n();
  const other = locale === "it" ? "en" : "it";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-8">
        <a href="#top" aria-label={t.header.homeAria} className="shrink-0">
          <Logo draw />
        </a>

        <div className="flex items-center gap-2">
          {/* language switch: a real link, so each language is its own page */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-3 text-[14px] font-semibold tracking-[0.04em] shadow-none has-[>svg]:px-3"
          >
            <a href={localePath[other]} hrefLang={other} lang={other} aria-label={t.header.switchAria}>
              <Languages className="hidden sm:block" />
              {t.header.switchLabel}
            </a>
          </Button>

          <Button asChild size="lg" className="text-[15px] font-semibold">
            <a href="#book">
              <CalendarDays />
              <span className="sm:hidden">{t.header.bookShort}</span>
              <span className="hidden sm:inline">{t.header.book}</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
