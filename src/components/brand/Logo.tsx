import { Rings } from "./Rings";

type LogoProps = {
  variant?: "notte" | "avorio";
  className?: string;
  draw?: boolean;
};

/** Horizontal lockup: symbol + "too" roman + "social" italic, Instrument Serif. */
export function Logo({ variant = "avorio", className = "", draw = false }: LogoProps) {
  const onDark = variant === "notte";
  const base = onDark ? "var(--color-carta)" : "var(--color-antracite)";
  const accent = onDark ? "var(--color-champagne)" : "var(--color-bronzo)";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Rings className="h-8 w-[34px] shrink-0"base={base} accent={accent} draw={draw} />
      <span className="font-serif text-[30px] leading-none tracking-[-0.01em]">
        <span style={{ color: base }}>too</span>
        <span className="italic" style={{ color: accent }}>
          social
        </span>
      </span>
    </span>
  );
}
