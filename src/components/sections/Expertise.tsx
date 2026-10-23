import React from "react";
import {
  Target,
  Settings,
  BarChart3,
  Users,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const iconMap = {
  Target,
  Settings,
  BarChart3,
  Users,
};

export function Expertise() {
  return (
    <section id="expertise" className="w-full pb-[var(--section-space)]">
      <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)]">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-8 md:mb-10">
          <Eyebrow sectionId="expertise">{siteConfig.expertise.eyebrow}</Eyebrow>
          <SectionHeading>{siteConfig.expertise.heading}</SectionHeading>
        </div>

        {/* 4 Bordered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-5 md:mb-6">
          {siteConfig.expertise.cards.map((card) => {
            const IconComponent = iconMap[card.icon];

            return (
              <Card
                key={card.id}
                variant="bordered"
                tone={card.tone}
                className="expertise-card reveal flex flex-col justify-start p-5 sm:p-6 min-w-0"
              >
                {/* Large (~40px) duotone icon without white circle */}
                <div className="mb-4 shrink-0">
                  <IconComponent
                    className="w-10 h-10 text-[var(--rust)] fill-[var(--coral)]/55"
                    strokeWidth={2.1}
                  />
                </div>

                {/* Title: DM Sans 700, sized to fit on one line */}
                <h3 className="font-body font-bold text-[1.0625rem] sm:text-[1.125rem] text-[var(--ink)] tracking-tight leading-snug mb-3 truncate">
                  {card.title}
                </h3>

                {/* Plain lines without bullet dots */}
                <ul className="flex flex-col gap-2 font-body text-[0.875rem] md:text-[0.9375rem] text-[var(--muted)] leading-[1.5]">
                  {card.lines.map((line, idx) => (
                    <li key={idx} className="leading-snug">
                      {line}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Tools Bar (full-width bordered card in cream-2) */}
        <Card
          variant="bordered"
          tone="cream-2"
          className="tools-bar reveal p-3.5 sm:p-4 md:p-5 flex flex-wrap items-center gap-3"
        >
          <div className="flex items-center gap-2 text-[var(--ink)] font-body font-bold text-[0.9375rem] md:text-[1rem] shrink-0 mr-1">
            <Wrench className="w-4 h-4 text-[var(--rust)] shrink-0" strokeWidth={2.25} />
            <span>{siteConfig.expertise.toolsHeading}</span>
          </div>

          {/* Tool chips as ~8px rounded rectangles */}
          <div className="flex flex-wrap items-center gap-2">
            {siteConfig.expertise.tools.map((tool) => (
              <span
                key={tool}
                className="chip-rect inline-flex items-center justify-center px-3.5 py-1.5 text-[0.875rem] font-medium tracking-tight text-[var(--ink)] bg-white select-none"
              >
                {tool}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
