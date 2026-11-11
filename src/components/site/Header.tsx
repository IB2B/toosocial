import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

/** Minimal VSL header: logo + one action. No nav, no exits. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-4 sm:px-8">
        <a href="#top" aria-label="TooSocial, back to top">
          <Logo draw />
        </a>
        <Button asChild size="lg" className="text-[15px] font-semibold">
          <a href="#book">
            <CalendarDays />
            Book a call
          </a>
        </Button>
      </div>
    </header>
  );
}
