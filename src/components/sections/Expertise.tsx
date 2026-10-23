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
import { ToolsMarquee } from "@/components/ui/ToolsMarquee";

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
                {/* Decorative icon: 28px in cards, rust, strokeWidth 1.75 (A10) */}
                <div className="mb-4 shrink-0">
                  <IconComponent
                    className="w-7 h-7 text-[var(--rust)]"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Title: DM Sans 700, sized to fit on one line */}
                <h3 className="font-body font-bold text-[length:var(--fs-body)] text-[var(--ink)] tracking-tight leading-snug mb-3 truncate">
                  {card.title}
                </h3>

                {/* Plain lines without bullet dots */}
                <ul className="flex flex-col gap-2 font-body text-[length:var(--fs-sm)] text-[var(--muted)] leading-[1.5]">
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

        {/* Tools Bar (full-width bordered card in cream-2) with floating logo rows (Phase 7 §3) */}
        <Card
          variant="bordered"
          tone="cream-2"
          className="tools-bar reveal p-3.5 sm:p-4 md:p-5 flex flex-col min-[900px]:flex-row min-[900px]:items-center gap-3 min-[900px]:gap-5"
        >
          <div className="flex items-center gap-2 text-[var(--ink)] font-body font-bold text-[length:var(--fs-base)] shrink-0 mr-1">
            <Wrench className="w-5 h-5 text-[var(--rust)] shrink-0" strokeWidth={1.75} />
            <span>{siteConfig.expertise.toolsHeading}</span>
          </div>

          <ToolsMarquee tools={siteConfig.expertise.tools} />
        </Card>
      </div>
    </section>
  );
}
