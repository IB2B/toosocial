"use client";

import { Logo } from "@/components/brand/Logo";
import { useI18n } from "@/i18n";
import { Year } from "./Year";

/* TODO(content): real contact details, social URLs, company data and legal pages. */
const SOCIAL = [
  { label: "Instagram", href: "#instagram" },
  { label: "TikTok", href: "#tiktok" },
  { label: "LinkedIn", href: "#linkedin" },
];

export function Footer() {
  const { t } = useI18n();
  const ft = t.footer;
  const LEGAL = [
    { label: ft.privacy, href: "#privacy" },
    { label: ft.cookies, href: "#cookies" },
  ];

  return (
    <footer className="dark relative overflow-hidden border-t bg-background text-foreground">
      <div className="mx-auto max-w-[1200px] px-4 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="notte" />
            <p className="mt-5 max-w-[34ch] text-body text-muted-foreground">
              {ft.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">{ft.talk}</p>
            <ul className="mt-4 space-y-2 text-body">
              <li>
                <a href="#book" className="hover:text-champagne">
                  {ft.book}
                </a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="hover:text-champagne">
                  hello@toosocial.example
                </a>
              </li>
              <li>
                <a href="#whatsapp" className="hover:text-champagne">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">{ft.follow}</p>
            <ul className="mt-4 space-y-2 text-body">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-champagne">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t py-6 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <Year /> TooSocial · {ft.vat} 00000000000
          </p>
          <ul className="flex gap-6">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* giant wordmark sign-off */}
      <p
        aria-hidden
        className="pointer-events-none -mb-[0.22em] text-center font-serif text-[27vw] leading-[0.8] tracking-[-0.03em] whitespace-nowrap select-none"
      >
        <span className="text-carta/[0.06]">too</span>
        <span className="text-champagne/[0.12] italic">social</span>
      </p>
    </footer>
  );
}
