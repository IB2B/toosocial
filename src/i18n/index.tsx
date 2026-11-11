"use client";

import { createContext, useContext } from "react";
import { en, type Dict } from "./en";
import { it } from "./it";

export type Locale = "it" | "en";
export const DEFAULT_LOCALE: Locale = "it";

export const dictionaries: Record<Locale, Dict> = { it, en };

/** Path of the landing page for each locale (Italian is the default at /). */
export const localePath: Record<Locale, string> = { it: "/", en: "/en" };

/** BCP-47 tag for number formatting. */
export const numberLocale: Record<Locale, string> = { it: "it-IT", en: "en-US" };

const I18nContext = createContext<{ locale: Locale; t: Dict }>({
  locale: DEFAULT_LOCALE,
  t: it,
});

/** Only the locale string crosses the server→client boundary; the
 *  dictionaries (which contain functions) are imported client-side. */
export function I18nProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <I18nContext.Provider value={{ locale, t: dictionaries[locale] }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
