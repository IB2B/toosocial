import { I18nProvider, type Locale } from "@/i18n";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Proof } from "./Proof";
import { Problem } from "./Problem";
import { Method } from "./Method";
import { Cases } from "./Cases";
import { Services } from "./Services";
import { FitCheck } from "./FitCheck";
import { Founders } from "./Founders";
import { Faq } from "./Faq";
import { Booking } from "./Booking";
import { Footer } from "./Footer";

/** The whole VSL page, rendered in the given language. */
export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <I18nProvider locale={locale}>
      <Header />
      <main className="flex-1">
        <Hero />
        <Proof />
        <Problem />
        <Method />
        <Cases />
        <Services />
        <FitCheck />
        <Founders />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </I18nProvider>
  );
}
