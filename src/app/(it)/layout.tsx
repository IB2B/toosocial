import type { Metadata } from "next";
import { it } from "@/i18n/it";
import { fontVars } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: it.meta.title,
  description: it.meta.description,
  alternates: { canonical: "/", languages: { it: "/", en: "/en" } },
};

/** Root layout for the Italian (default) site at "/". */
export default function ItalianLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fontVars} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
