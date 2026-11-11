/** Headline with one serif-italic keyword (identity kit rule: one per title). */
export function Kw({
  text,
  className = "",
}: {
  text: { pre: string; kw: string; post: string };
  /** extra classes for the keyword, e.g. "text-champagne!" on dark */
  className?: string;
}) {
  return (
    <>
      {text.pre}
      <em className={`kw ${className}`}>{text.kw}</em>
      {text.post}
    </>
  );
}
