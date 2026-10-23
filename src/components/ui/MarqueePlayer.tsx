"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Play/pause wrapper for the tools marquee. The rows themselves are static
 * server-rendered markup; this only pauses them off-screen and on a tap.
 */
export function MarqueePlayer({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [offscreen, setOffscreen] = useState(false);

  // Pause while the tools bar is off-screen.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setOffscreen(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="tools-marquee"
      aria-hidden="true"
      data-paused={paused ? "true" : undefined}
      data-offscreen={offscreen ? "true" : undefined}
      // A tap toggles pause on touch screens (desktop pauses on hover in CSS).
      onPointerUp={(e) => {
        if (e.pointerType === "touch") setPaused((p) => !p);
      }}
    >
      {children}
    </div>
  );
}
