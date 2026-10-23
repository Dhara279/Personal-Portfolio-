import React from "react";
import Image from "next/image";
import { Crown, GraduationCap } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Card } from "@/components/ui/Card";

export function Journey() {
  return (
    <section id="experience" className="w-full pb-[var(--section-space)]">
      <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)]">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-8 md:mb-10">
          <Eyebrow sectionId="experience">{siteConfig.experience.eyebrow}</Eyebrow>
          <SectionHeading>{siteConfig.experience.heading}</SectionHeading>
        </div>

        {/* Two Columns (≈ 64 / 36) with vertical divider on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Work Experience Accordion (64% / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4 min-w-0 reveal">
            <h3 className="font-display font-bold text-[length:var(--fs-lg)] text-[var(--ink)] tracking-tight">
              {siteConfig.experience.workHeading}
            </h3>

            <Accordion
              items={siteConfig.experience.items}
              defaultOpenId="exp-amazon"
            />
          </div>

          {/* Right Column: Education Cards (36% / 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:pl-4 lg:border-l lg:border-[var(--line)]/20 min-w-0">
            <h3 className="font-display font-bold text-[length:var(--fs-lg)] text-[var(--ink)] tracking-tight">
              {siteConfig.experience.educationHeading}
            </h3>

            <div className="flex flex-col gap-4">
              {siteConfig.experience.education.map((edu) => (
                <Card
                  key={edu.id}
                  variant="soft"
                  tone="blush-light"
                  className="education-card reveal p-5 md:p-6 border border-[var(--ink)]/15 flex items-start gap-4 transition-transform duration-200 hover:translate-x-[-1px] hover:translate-y-[-2px]"
                >
                  {/* University logo tile (Phase 7 §4.2); falls back to the icon. Fixed slot keeps names aligned. */}
                  <div aria-hidden="true" className="shrink-0 w-[104px] flex justify-center">
                    {edu.logo ? (
                      <div className="h-12 min-w-12 px-1.5 rounded-[10px] border-2 border-[var(--ink)] shadow-[2px_2px_0_0_var(--ink)] bg-[var(--white)] flex items-center justify-center">
                        <Image
                          src={edu.logo.src}
                          alt=""
                          width={edu.logo.width}
                          height={edu.logo.height}
                          unoptimized
                          className="object-contain"
                          style={{ width: edu.logo.width, height: edu.logo.height }}
                        />
                      </div>
                    ) : edu.icon === "Crown" ? (
                      <Crown className="w-8 h-8 mt-0.5 text-[var(--rust)]" strokeWidth={2.2} />
                    ) : (
                      <GraduationCap className="w-8 h-8 mt-0.5 text-[var(--rust)]" strokeWidth={2.2} />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-[length:var(--fs-body)] text-[var(--ink)] leading-snug mb-1">
                      {edu.institution}
                    </h4>
                    <p className="font-body text-[length:var(--fs-sm)] text-[var(--muted)] mb-0.5">
                      {edu.degree}
                    </p>
                    <p className="font-body text-[length:var(--fs-sm)] font-semibold text-[var(--terracotta-strong)]">
                      {edu.grade}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
