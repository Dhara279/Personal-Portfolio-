"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize smooth scroll if motion is preferred
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Attach to window so anchor clicks and back-to-top can access it
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    // Landing on /#section (e.g. from a case-study page's menu): the browser's own
    // jump is cut short when Lenis starts, so go to the section once the page is ready.
    const hash = window.location.hash;
    let userScrolled = false;
    const markScrolled = () => (userScrolled = true);
    window.addEventListener("wheel", markScrolled, { once: true, passive: true });
    window.addEventListener("touchstart", markScrolled, { once: true, passive: true });
    const jumpToHash = () => {
      if (hash.length < 2 || userScrolled) return;
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) lenis.scrollTo(target, { offset: -84, immediate: true, force: true });
    };
    requestAnimationFrame(jumpToHash);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger once fonts are fully ready
    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
        jumpToHash();
      });
    }

    return () => {
      window.removeEventListener("wheel", markScrolled);
      window.removeEventListener("touchstart", markScrolled);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
