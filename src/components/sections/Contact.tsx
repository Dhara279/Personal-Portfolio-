import React from "react";
import { Mail, FileText, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Doodle } from "@/components/ui/Doodle";

export function Contact() {
  return (
    <section id="contact" className="contact-section relative w-full pb-5 md:pb-7 overflow-hidden">
      {/* Soft radial field parallax background (Brief §8.7 / Phase 7 §1) */}
      <div
        aria-hidden="true"
        className="contact-parallax-bg absolute inset-0 pointer-events-none z-0 opacity-40 will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, var(--blush) 0%, var(--coral) 40%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-[var(--container)] mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Heading in exactly two lines (Item 15) */}
          <div className="lg:col-span-5 flex flex-col gap-2 min-w-0">
            <Eyebrow sectionId="contact">{siteConfig.contact.eyebrow}</Eyebrow>
            <div className="flex items-center gap-3">
              <h2 className="font-display font-extrabold text-[length:var(--fs-h2)] leading-[1.02] tracking-[-0.03em] text-[var(--ink)]">
                <span className="block">Let’s talk about</span>
                <span className="block">better AI strategies and products.</span>
              </h2>
              {/* Sparkle doodle beside heading (Item 5) */}
              <div className="shrink-0 -mt-2">
                <Doodle type="sparkle" color="rust" className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            </div>
          </div>

          {/* Right Column: All 3 buttons in ONE row (nowrap) with location aligned to left edge */}
          <div className="lg:col-span-7 flex flex-col items-start gap-3 min-w-0 reveal">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5 md:gap-3 w-full max-w-full">
              {/* Email Button */}
              <Button
                href={`mailto:${siteConfig.contact.email}`}
                variant="primary"
                leadingIcon={<Mail className="w-4 h-4 text-white shrink-0" strokeWidth={2.25} />}
                className="py-2.5 px-3.5 text-[length:var(--fs-sm)] shadow-[2px_3px_0_0_var(--ink)] shrink-0 whitespace-nowrap"
              >
                {siteConfig.contact.email}
              </Button>

              {/* LinkedIn Button */}
              <Button
                href={siteConfig.contact.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                leadingIcon={
                  <span className="font-bold text-[0.8125rem] leading-none bg-[var(--ink)] text-[var(--cream)] px-1 py-0.5 rounded-[3px] shrink-0">
                    in
                  </span>
                }
                className="py-2.5 px-3.5 text-[length:var(--fs-sm)] shrink-0 whitespace-nowrap"
              >
                {siteConfig.contact.linkedInLabel}
              </Button>

              {/* View CV Button */}
              <Button
                href={siteConfig.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                leadingIcon={<FileText className="w-4 h-4 text-[var(--ink)] shrink-0" strokeWidth={2.25} />}
                className="py-2.5 px-3.5 text-[length:var(--fs-sm)] shrink-0 whitespace-nowrap"
              >
                {siteConfig.contact.cvLabel}
              </Button>
            </div>

            {/* Location underneath aligned to email button left edge */}
            <div className="inline-flex items-center gap-1.5 text-[length:var(--fs-sm)] font-medium text-[var(--ink-soft)] font-body pl-0.5">
              <MapPin className="w-4 h-4 text-[var(--rust)] shrink-0" strokeWidth={2.25} />
              <span>{siteConfig.contact.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
