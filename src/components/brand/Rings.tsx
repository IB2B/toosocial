"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The TooSocial symbol: two interlaced rings.
 * Ring A (client) sits low-left, ring B (TooSocial) sits higher-right = growth.
 * The interlace is made with real gaps in the strokes (A passes under B at the
 * lower-right crossing, B passes under A at the upper-left one), so it works on
 * any background without masking.
 */

const R = 30;
const A = { x: 40, y: 60 };
const B = { x: 65, y: 40 };
const GAP = 13; // half-gap in degrees around each crossing

const pt = (c: { x: number; y: number }, deg: number) => {
  const rad = (deg * Math.PI) / 180;
  return `${(c.x + R * Math.cos(rad)).toFixed(2)} ${(c.y + R * Math.sin(rad)).toFixed(2)}`;
};

// Crossing angles (SVG coords, y down): P1 on A at ~19.1°, P2 on B at ~199.1°
const arc = (c: { x: number; y: number }, crossDeg: number) =>
  `M ${pt(c, crossDeg + GAP)} A ${R} ${R} 0 1 1 ${pt(c, crossDeg - GAP)}`;

const PATH_A = arc(A, 19.1);
const PATH_B = arc(B, 199.1);

type RingsProps = {
  className?: string;
  /** colour of the "client" ring */
  base?: string;
  /** colour of the rising ring (accent) */
  accent?: string;
  strokeWidth?: number;
  /** draw the rings in on mount */
  draw?: boolean;
  delay?: number;
  title?: string;
};

export function Rings({
  className,
  base = "var(--color-antracite)",
  accent = "var(--color-bronzo)",
  strokeWidth = 4.4,
  draw = false,
  delay = 0,
  title,
}: RingsProps) {
  const reduce = useReducedMotion();
  const animate = draw && !reduce;

  const common = {
    fill: "none",
    strokeWidth,
    strokeLinecap: "butt" as const,
  };

  return (
    <svg
      viewBox="6 6 93 88"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <motion.path
        d={PATH_A}
        stroke={base}
        {...common}
        initial={animate ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.path
        d={PATH_B}
        stroke={accent}
        {...common}
        initial={animate ? { pathLength: 0, y: 6 } : false}
        animate={{ pathLength: 1, y: 0 }}
        transition={{ duration: 1.2, delay: delay + 0.35, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}
