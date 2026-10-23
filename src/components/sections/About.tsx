import React from "react";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Doodle } from "@/components/ui/Doodle";

export function About() {
  return (
    <section id="about" className="w-full pb-[var(--section-space)]">
      <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading & Editorial Body */}
          <div className="lg:col-span-7 flex flex-col gap-3 min-w-0">
            <Eyebrow sectionId="about">{siteConfig.about.eyebrow}</Eyebrow>
            <SectionHeading>{siteConfig.about.heading}</SectionHeading>
            <p className="reveal font-body text-[1.0625rem] md:text-[1.125rem] text-[var(--muted)] leading-[1.68] mt-2 max-w-[620px]">
              {siteConfig.about.paragraph}
            </p>
          </div>

          {/* Right Column: Soft Blush Card */}
          <div className="lg:col-span-5 min-w-0">
            <Card
              variant="soft"
              tone="blush"
              className="reveal relative p-6 md:p-8 flex flex-col justify-between min-h-[220px]"
            >
              {/* Sparkle Doodle (top-right, radiating strokes) */}
              <div className="absolute top-4 right-4 pointer-events-none">
                <Doodle type="sparkle" color="rust" className="w-10 h-10 md:w-11 md:h-11" />
              </div>

              <div>
                <h3 className="font-display font-bold text-[1.25rem] md:text-[1.375rem] text-[var(--ink)] tracking-tight mb-3 pr-10">
                  {siteConfig.about.cardTitle}
                </h3>
                <p className="font-body text-[0.9375rem] md:text-[1rem] text-[var(--muted)] leading-[1.62] mb-6">
                  {siteConfig.about.cardText}
                </p>
              </div>

              {/* Pills: Author · Tennis · Baking (stay as full rounded pills) */}
              <div className="flex flex-wrap items-center gap-2.5">
                {siteConfig.about.pills.map((pill) => (
                  <Chip key={pill} tone="white">
                    {pill}
                  </Chip>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
