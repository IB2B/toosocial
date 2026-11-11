import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Proof } from "@/components/site/Proof";
import { Problem } from "@/components/site/Problem";
import { Method } from "@/components/site/Method";
import { Cases } from "@/components/site/Cases";
import { Services } from "@/components/site/Services";
import { FitCheck } from "@/components/site/FitCheck";
import { Founders } from "@/components/site/Founders";
import { Faq } from "@/components/site/Faq";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
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
    </>
  );
}
