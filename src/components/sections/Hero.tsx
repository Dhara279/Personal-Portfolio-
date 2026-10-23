"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, FileText } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Doodle } from "@/components/ui/Doodle";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  // Dhara's photo (public/portrait.jpg); set to false to fall back to the DP monogram tile
  const hasCustomPortrait = true;

  // Ambient cursor glow (Brief §8.5 / Phase 7 §1 - fine pointer only)
  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine || !heroRef.current || !glowRef.current) return;

    const hero = heroRef.current;
    const glow = glowRef.current;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;

      if (!isHovering) {
        isHovering = true;
        glow.style.opacity = "1";
      }
      startLoop();
    };

    const onMouseLeave = () => {
      isHovering = false;
      glow.style.opacity = "0";
    };

    let running = false;
    const startLoop = () => {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      glow.style.setProperty("--sx", `${currentX}px`);
      glow.style.setProperty("--sy", `${currentY}px`);

      if (isHovering && (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5)) {
        rafId = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    hero.addEventListener("mousemove", onMouseMove);
    hero.addEventListener("mouseleave", onMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", onMouseMove);
      hero.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workEl = document.querySelector("#work");
    if (workEl) {
      const targetPos = workEl.getBoundingClientRect().top + window.pageYOffset - 84;
      if ((window as unknown as { __lenis?: { scrollTo: (target: number) => void } }).__lenis) {
        (window as unknown as { __lenis: { scrollTo: (target: number) => void } }).__lenis.scrollTo(targetPos);
      } else {
        window.scrollTo({ top: targetPos, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-section relative w-full pt-4 md:pt-8 pb-10 md:pb-14 overflow-hidden"
    >
      {/* Ambient cursor glow layer (Brief §8.5) */}
      <div
        ref={glowRef}
        id="hero-glow"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 will-change-[opacity,transform]"
        style={{
          background:
            "radial-gradient(circle 260px at var(--sx, 50%) var(--sy, 50%), color-mix(in srgb, var(--terracotta) 22%, transparent) 0%, color-mix(in srgb, var(--terracotta) 7%, transparent) 50%, transparent 76%)",
        }}
      />

      <div className="hero-content-wrapper relative z-10 max-w-[var(--container)] mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column (≈ 58% on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 min-w-0 max-w-full">
            {/* Location Tag */}
            <div
              data-intro="location"
              className="inline-flex items-center gap-1.5 mb-3 text-[length:var(--fs-sm)] font-medium text-[var(--ink-soft)] font-body"
            >
              <MapPin className="w-4 h-4 text-[var(--rust)] shrink-0" strokeWidth={2.25} />
              <span>{siteConfig.hero.location}</span>
            </div>

            {/* Name Heading (H1) */}
            <h1
              data-intro="name"
              className="font-display font-extrabold text-[clamp(3.25rem,15vw,4.5rem)] sm:text-[length:var(--fs-hero)] leading-[0.92] tracking-[-0.035em] text-[var(--ink)] mb-5 select-none max-w-full break-words"
            >
              <span className="block overflow-hidden pb-1">
                <span className="hero-name-line inline-block will-change-transform">
                  {siteConfig.hero.nameLine1}
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-name-line inline-block will-change-transform">
                  {siteConfig.hero.nameLine2}
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <div data-intro="subtitle" className="overflow-hidden mb-2.5 max-w-full">
              <p className="hero-subtitle font-body font-bold text-[clamp(1.15rem,2vw,1.6rem)] text-[var(--ink-deep)] leading-tight tracking-tight">
                {siteConfig.hero.subtitle}
              </p>
            </div>

            {/* Tagline */}
            <div data-intro="tagline" className="overflow-hidden mb-7 max-w-[560px]">
              <p className="hero-tagline font-body text-[length:var(--fs-body)] text-[var(--muted)] leading-[1.65]">
                {siteConfig.hero.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              data-intro="buttons"
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <Button
                href="#work"
                onClick={scrollToWork}
                variant="primary"
                showArrow
                className="w-full sm:w-auto text-[length:var(--fs-base)] py-3.5 px-6 shadow-[3px_4px_0_0_var(--ink)] hover:shadow-[5px_7px_0_0_var(--ink)]"
              >
                {siteConfig.hero.primaryCta.label.replace(" →", "")}
              </Button>

              <Button
                href={siteConfig.hero.secondaryCta.href}
                target="_blank"
                variant="outline"
                leadingIcon={<FileText className="w-4 h-4 text-[var(--ink)]" strokeWidth={2.25} />}
                className="w-full sm:w-auto text-[length:var(--fs-base)] py-3.5 px-6"
              >
                {siteConfig.hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Right Column: Portrait Card & Solid Coral Blob (≈ 42% on desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center relative isolate py-6 md:py-10 max-w-full overflow-hidden sm:overflow-visible">
            {/* Solid, sharp-edged coral organic SVG blob behind the card (Brief §6.2) */}
            <svg
              data-intro="blob"
              viewBox="0 0 420 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hero-blob absolute z-0 w-[78%] max-w-[320px] sm:w-[360px] md:w-[410px] h-auto aspect-[420/480] pointer-events-none select-none -translate-x-3 translate-y-1 transition-transform duration-700"
              aria-hidden="true"
            >
              <path
                d="M 170 18 C 270 14, 380 40, 412 110 C 435 150, 420 210, 395 260 C 375 305, 365 375, 320 430 C 275 480, 190 475, 110 460 C 40 445, 0 395, 2 320 C 4 250, 30 200, 55 140 C 75 90, 95 22, 170 18 Z"
                style={{ fill: "var(--coral)" }}
              />
            </svg>

            {/* Sparkle Doodle (top-left of card, radiating separated strokes) */}
            <div
              data-intro="doodle-sparkle"
              className="absolute -top-4 left-4 sm:left-10 md:left-6 z-20 pointer-events-none"
            >
              <Doodle type="sparkle" color="rust" className="w-12 h-12 md:w-14 md:h-14" />
            </div>

            {/* Squiggle Doodle (bottom-right of card, looping spring coil) */}
            <div
              data-intro="doodle-squiggle"
              className="absolute -bottom-5 right-2 sm:right-6 md:right-4 z-20 pointer-events-none"
            >
              <Doodle type="squiggle" color="terracotta" className="w-10 h-16 md:w-11 md:h-18" />
            </div>

            {/* Portrait Card */}
            <div
              ref={cardRef}
              data-intro="portrait-card"
              className="portrait-card relative z-10 w-[62%] max-w-[260px] sm:w-[290px] md:w-[320px] aspect-[4/4.7] rounded-[18px] border-[3px] border-[var(--ink)] shadow-[5px_7px_0_0_var(--ink)] bg-[var(--portrait)] p-4 flex items-center justify-center overflow-hidden select-none will-change-transform"
              style={{ transform: "rotate(-2deg)" }}
            >
              {hasCustomPortrait ? (
                <div className="relative w-full h-full rounded-[12px] overflow-hidden">
                  <Image
                    src="/portrait.jpg"
                    alt="Dhara Patadia"
                    fill
                    sizes="(max-width: 768px) 290px, 320px"
                    className="object-cover object-[50%_30%]"
                    priority
                  />
                </div>
              ) : (
                <div className="relative w-full h-full rounded-[14px] bg-[var(--portrait)] flex items-center justify-center overflow-hidden">
                  {/* Subtle inner organic shapes matching mockup */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[var(--blush-light)] opacity-60"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[var(--sand)] opacity-70"
                  />

                  {/* Large DP Monogram in Rust */}
                  <span className="font-display font-extrabold text-[4.5rem] sm:text-[6.25rem] md:text-[7rem] text-[var(--rust)] tracking-tighter leading-none select-none z-10">
                    {siteConfig.monogram}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
