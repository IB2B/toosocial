import type { Metadata } from "next";
import { en } from "@/i18n/en";
import { fontVars } from "../../fonts";
import "../../globals.css";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  alternates: { canonical: "/en", languages: { it: "/", en: "/en" } },
};

/** Root layout for the English site at "/en". */
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontVars} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
