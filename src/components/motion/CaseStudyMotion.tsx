"use client";

import { useEffect } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function runCounter(el: HTMLElement) {
  const to = Number(el.dataset.countTo);
  const from = Number(el.dataset.countFrom ?? 0);
  const duration = Number(el.dataset.countDur ?? 0.8) * 1000;
  if (Number.isNaN(to) || Number.isNaN(from)) return;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    el.textContent = Math.round(from + (to - from) * easeOutCubic(t)).toLocaleString("en-GB");
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Case-study motion (Phase 7 §2.6). Each `[data-cs]` block plays once when it
 * scrolls into view: diagrams animate in CSS (globals.css, "Case-study motion")
 * and any `[data-count-to]` number inside counts up. The server-rendered page
 * already shows the final state, so nothing is hidden without JS, and nothing
 * moves when reduced motion is on.
 */
export function CaseStudyMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const blocks = Array.from(document.querySelectorAll<HTMLElement>("[data-cs]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const block = entry.target as HTMLElement;
          io.unobserve(block);
          void block.offsetWidth; // commit the start state so the transition runs
          block.setAttribute("data-cs-inview", "");
          block.querySelectorAll<HTMLElement>("[data-count-to]").forEach(runCounter);
        });
      },
      { threshold: 0.35 }
    );

    blocks.forEach((block) => {
      // Arm: move to the start state, then reveal when in view.
      block.setAttribute("data-cs-armed", "");
      block.querySelectorAll<HTMLElement>("[data-count-to]").forEach((el) => {
        el.textContent = Number(el.dataset.countFrom ?? 0).toLocaleString("en-GB");
      });
      io.observe(block);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
