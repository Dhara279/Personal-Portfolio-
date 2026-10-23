"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Check if lenis is on window or use standard scroll
    if ((window as unknown as { __lenis?: { scrollTo: (target: number) => void } }).__lenis) {
      (window as unknown as { __lenis: { scrollTo: (target: number) => void } }).__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-12 h-12 rounded-full bg-[var(--cream-2)] text-[var(--ink)] border-2 border-[var(--ink)] shadow-[3px_4px_0_0_var(--ink)] flex items-center justify-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[5px_7px_0_0_var(--ink)] active:translate-y-0 cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}
