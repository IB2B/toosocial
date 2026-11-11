"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Rings } from "@/components/brand/Rings";

type VslPlayerProps = {
  /** MP4/HLS source. Leave empty until the final video is uploaded. */
  src?: string;
  poster?: string;
  duration?: string;
};

export function VslPlayer({ src, poster, duration = "4 min" }: VslPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    if (src) videoRef.current?.play();
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border bg-avorio">
      {src && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls={started}
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {!started && (
        <button
          type="button"
          onClick={start}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-5 text-foreground outline-none"
          aria-label={`Watch the video, ${duration}`}
        >
          {/* poster texture: fine grid + soft rings watermark */}
          {!poster && (
            <>
              <span
                aria-hidden
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-antracite) 1px, transparent 1px), linear-gradient(90deg, var(--color-antracite) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <Rings
                className="pointer-events-none absolute -right-[6%] -bottom-[18%] w-[46%] opacity-[0.07]"
                strokeWidth={2}
              />
            </>
          )}

          <span className="relative grid size-20 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105 group-focus-visible:ring-[3px] group-focus-visible:ring-ring/50 sm:size-24">
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-bronzo/25 [animation-duration:2.4s]"
            />
            <Play className="relative ml-1 size-8 fill-current sm:size-9" strokeWidth={0} />
          </span>
          <span className="relative text-small text-muted-foreground">
            Watch before you book · {duration}
          </span>
        </button>
      )}

      {started && !src && (
        <div className="absolute inset-0 grid place-items-center p-6 text-center text-small text-muted-foreground">
          Your sales video (VSL) goes here.
        </div>
      )}
    </div>
  );
}
