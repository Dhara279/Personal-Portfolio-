"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { MonogramBadge } from "@/components/ui/MonogramBadge";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isStuck, setIsStuck] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 24);
    };

    const handleActiveChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setActiveSection(detail || "");
    };

    if (typeof window !== "undefined" && window.location.search.includes("drawer=open")) {
      setMobileDrawerOpen(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("nav-active-change", handleActiveChange);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("nav-active-change", handleActiveChange);
    };
  }, []);

  // Update sliding indicator position whenever activeSection changes
  useEffect(() => {
    if (!activeSection) {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const activeEl = linksRef.current[activeSection];
    if (activeEl && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  // Handle window resize for sliding indicator alignment
  useEffect(() => {
    const handleResize = () => {
      if (!activeSection) return;
      const activeEl = linksRef.current[activeSection];
      if (activeEl && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const elRect = activeEl.getBoundingClientRect();
        setIndicatorStyle({
          left: elRect.left - navRect.left,
          width: elRect.width,
          opacity: 1,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection]);

  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevOpenRef = useRef(false);

  // Handle mobile drawer keyboard escape, focus management and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }
    };

    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = "";
      if (prevOpenRef.current) {
        burgerRef.current?.focus();
      }
    }
    prevOpenRef.current = mobileDrawerOpen;

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileDrawerOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        setMobileDrawerOpen(false);
        const headerHeight = 72;
        const targetPosition =
          targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 12);
        
        // Trigger Lenis smooth scroll or native
        if ((window as unknown as { __lenis?: { scrollTo: (target: number) => void } }).__lenis) {
          (window as unknown as { __lenis: { scrollTo: (target: number) => void } }).__lenis.scrollTo(targetPosition);
        } else {
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }

        // Trigger arrival flash on section eyebrow
        const eyebrowEl = targetEl.querySelector("[data-eyebrow]");
        if (eyebrowEl) {
          eyebrowEl.setAttribute("data-flash", "1");
          setTimeout(() => {
            eyebrowEl.removeAttribute("data-flash");
          }, 2100);
        }
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <>
      <header
        data-stuck={isStuck ? "1" : "0"}
        className="sticky top-0 z-50 w-full transition-all duration-200 h-[72px] flex items-center bg-[var(--cream)]"
      >
        <div className="w-full max-w-[var(--container)] mx-auto px-[var(--gutter)] flex items-center justify-between">
          {/* Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:rounded-md"
            aria-label="Dhara Patadia - Home"
          >
            <MonogramBadge size="sm" />
            <span className="font-body font-bold text-[length:var(--fs-body)] text-[var(--ink)] tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation Links (>=900px) */}
          <nav
            ref={navRef}
            aria-label="Primary"
            className="nav-desktop relative items-center gap-1 md:gap-2 p-1"
          >
            {/* Sliding active highlight indicator (Brief §8.3 / Phase 7 §2.3) */}
            <span
              aria-hidden="true"
              className="absolute h-[34px] rounded-full bg-[var(--ink)]/[0.07] pointer-events-none transition-[transform,width,opacity] duration-350 ease-[var(--ease-out)]"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />

            {siteConfig.navItems.map((item) => {
              const secId = item.href.replace("#", "");
              const isActive = activeSection === secId;
              return (
                <a
                  key={item.label}
                  ref={(el) => {
                    linksRef.current[secId] = el;
                  }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? "true" : undefined}
                  className="relative z-10 px-3.5 py-1.5 rounded-full font-body font-semibold text-[length:var(--fs-sm)] text-[var(--ink)] transition-colors duration-200 hover:text-[var(--ink-deep)] focus-visible:bg-[var(--ink)]/[0.07]"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Desktop View CV button + Mobile Burger */}
          <div className="flex items-center gap-3">
            <div className="nav-desktop">
              <Button
                href={siteConfig.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="whitespace-nowrap text-[length:var(--fs-sm)] py-2 px-4 shadow-[2px_3px_0_0_var(--ink)] hover:shadow-[3px_4px_0_0_var(--ink)]"
              >
                <span className="inline-flex items-center">
                  View CV
                  <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" strokeWidth={2} />
                </span>
              </Button>
            </div>

            {/* Mobile Hamburger (<900px) */}
            <button
              ref={burgerRef}
              type="button"
              aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileDrawerOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setMobileDrawerOpen((prev) => !prev)}
              className="nav-mobile p-2 rounded-lg border-2 border-[var(--ink)] bg-[var(--cream-2)] text-[var(--ink)] shadow-[2px_2px_0_0_var(--ink)] active:translate-y-0.5 cursor-pointer"
            >
              {mobileDrawerOpen ? (
                <X className="w-5 h-5" strokeWidth={2.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay & Panel */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-50 overflow-hidden ${
          mobileDrawerOpen ? "block nav-mobile" : "hidden"
        }`}
      >
        {/* Scrim backdrop */}
        <div
          onClick={() => setMobileDrawerOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        />

        {/* Slide-over Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-[var(--cream)] border-l-2 border-[var(--ink)] p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--ink)]/15">
              <div className="flex items-center gap-2.5">
                <MonogramBadge size="sm" />
                <span className="font-body font-bold text-[length:var(--fs-body)] text-[var(--ink)]">
                  {siteConfig.name}
                </span>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                aria-label="Close navigation drawer"
                className="p-1.5 rounded-md border border-[var(--ink)] text-[var(--ink)] bg-[var(--cream-2)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation Links">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 rounded-lg font-body font-bold text-[length:var(--fs-body)] text-[var(--ink)] hover:bg-[var(--ink)]/[0.07] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[var(--ink)]/15 flex flex-col gap-3">
            <Button
              href={siteConfig.cvPath}
              target="_blank"
              variant="primary"
              className="w-full justify-center whitespace-nowrap"
            >
              <span className="inline-flex items-center">
                View CV
                <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" strokeWidth={2} />
              </span>
            </Button>
            <p className="text-center font-body text-[length:var(--fs-sm)] text-[var(--muted)]">
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
