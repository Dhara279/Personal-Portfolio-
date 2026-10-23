"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionManager() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    let deferTimer: NodeJS.Timeout | number;

    // 1. MOTION PREFERRED BRANCH (Full GSAP + ScrollTrigger Motion System)
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Setup initial hidden states for elements that will reveal
      gsap.set(".reveal", { y: 28, autoAlpha: 0 });
      gsap.set(".heading-line", { yPercent: 105 });

      // ==========================================
      // HERO INTRO TIMELINE (Brief §8.4)
      // ==========================================
      // Make data-intro elements visible so GSAP controls autoAlpha without CSS visibility delay
      gsap.set('[data-intro]', { visibility: "visible" });
      document.documentElement.classList.remove("js-motion");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Location, name, subtitle, tagline, portrait card, doodles and buttons
      // animate in CSS (globals.css, "Hero intro") so they paint before JS loads.
      // Same timings as before; GSAP keeps the blob, stat cards and count-up.

      // 0.30: Coral blob
      tl.fromTo(
        '[data-intro="blob"]',
        { scale: 0.85, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.8 },
        0.30
      );

      // 0.55: Stats cards
      tl.fromTo(
        ".stat-card",
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.06 },
        0.55
      );

      // 0.60: Stat numbers count-up (12, 7, 5,000)
      const countUpEls = document.querySelectorAll<HTMLElement>(
        ".stat-number-value[data-target]"
      );
      countUpEls.forEach((el) => {
        const target = Number(el.getAttribute("data-target"));
        if (!isNaN(target)) {
          const counter = { val: 0 };
          tl.to(
            counter,
            {
              val: target,
              duration: 0.8,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.round(counter.val).toLocaleString("en-GB");
              },
            },
            0.60
          );
        }
      });

      // ==========================================
      // HERO AMBIENT EFFECTS (Brief §8.5)
      // ==========================================
      // Coral blob slow breathing loop (13s sine.inOut yoyo)
      gsap.to(".hero-blob", {
        scale: 1.06,
        duration: 13,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Hero scroll-out parallax scrub
      gsap.to(".hero-content-wrapper", {
        yPercent: -12,
        autoAlpha: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Defer ScrollTrigger registrations so initial hydration task is instantaneous
      deferTimer = setTimeout(() => {
        // ==========================================
        // SCROLL REVEALS (Brief §8.6)
        // ==========================================
        // Batch reveal for all .reveal elements
        ScrollTrigger.batch(".reveal", {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
            });
          },
        });

        // Section headings masked line reveals
        const headings = document.querySelectorAll(".heading-line");
        headings.forEach((heading) => {
          ScrollTrigger.create({
            trigger: heading,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(heading, {
                yPercent: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            },
          });
        });

        // Tools bar: the card fades up with .reveal; its logo rows drift in CSS (ToolsMarquee).

        // Work card illustrations animation
        const workCards = document.querySelectorAll(".work-card");
        workCards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            once: true,
            onEnter: () => {
              // Bars grow
              const bars = card.querySelectorAll(".mock-bar");
              if (bars.length > 0) {
                gsap.fromTo(
                  bars,
                  { scaleY: 0, transformOrigin: "bottom" },
                  { scaleY: 1, duration: 0.7, stagger: 0.06, ease: "power3.out" }
                );
              }
            },
          });
        });

        // ==========================================
        // CONTACT PARALLAX (Brief §8.7)
        // ==========================================
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          gsap.to(".contact-parallax-bg", {
            yPercent: 14,
            ease: "none",
            scrollTrigger: {
              trigger: contactSection,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        // ==========================================
        // ACTIVE NAV HIGHLIGHT (Brief §8.3)
        // ==========================================
        const sections = ["about", "expertise", "work", "experience", "contact"];
        sections.forEach((id) => {
          const sec = document.getElementById(id);
          if (sec) {
            const isContact = id === "contact";
            const isAbout = id === "about";
            ScrollTrigger.create({
              trigger: sec,
              start: isContact ? "top 80%" : "top 55%",
              end: isContact ? "bottom bottom" : "bottom 55%",
              onEnter: () => setActiveNav(id),
              onEnterBack: () => setActiveNav(id),
              onLeaveBack: () => {
                if (isAbout) {
                  setActiveNav("");
                }
              },
            });
          }
        });

        // Hero safeguard: ensure no link is active while in the hero
        const heroSec = document.getElementById("hero");
        if (heroSec) {
          ScrollTrigger.create({
            trigger: heroSec,
            start: "top top",
            end: "bottom 55%",
            onEnter: () => setActiveNav(""),
            onEnterBack: () => setActiveNav(""),
          });
        }

        // Bottom-of-page safeguard: activate Contact when scrolled to the very bottom
        ScrollTrigger.create({
          trigger: "footer",
          start: "top bottom",
          onEnter: () => setActiveNav("contact"),
          onEnterBack: () => setActiveNav("contact"),
        });
      }, 60);

      function setActiveNav(activeId: string) {
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("nav-active-change", { detail: activeId })
          );
        }
        document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
          const href = link.getAttribute("href");
          if (activeId && href === `#${activeId}`) {
            link.setAttribute("data-on", "1");
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("data-on");
            link.removeAttribute("aria-current");
          }
        });
      }
    });

    // 2. REDUCED MOTION BRANCH (Instant presentation)
    mm.add("(prefers-reduced-motion: reduce)", () => {
      document.documentElement.classList.remove("js-motion");
      gsap.set(".reveal", { y: 0, autoAlpha: 1 });
      gsap.set(".heading-line", { yPercent: 0 });
      gsap.set('[data-intro="portrait-card"]', { rotate: -2, y: 0, autoAlpha: 1 });
      gsap.set(".hero-name-line", { yPercent: 0, autoAlpha: 1 });

      // Render stat numbers immediately
      document.querySelectorAll<HTMLElement>(".stat-number-value[data-target]").forEach((el) => {
        const target = Number(el.getAttribute("data-target"));
        if (!isNaN(target)) {
          el.textContent = target.toLocaleString("en-GB");
        }
      });
    });

    return () => {
      clearTimeout(deferTimer);
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
