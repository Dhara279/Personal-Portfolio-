"use client";

import React from "react";
import { Rocket, Layers, Database, GraduationCap } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Card } from "@/components/ui/Card";

const iconMap = {
  Rocket,
  Layers,
  Database,
  GraduationCap,
};

export function Stats() {
  return (
    <section id="stats" className="w-full pb-8 md:pb-12">
      <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(4,minmax(0,1fr))] gap-3 sm:gap-4 md:gap-5">
          {siteConfig.stats.map((stat) => {
            const IconComponent = iconMap[stat.icon];
            const isRust = stat.iconColor === "rust";
            const isDistinction = stat.numericTarget === undefined; // word values ("AI Strategy", "MSc · Distinction") keep the existing word style

            return (
              <Card
                key={stat.id}
                data-intro="stats-card"
                variant="bordered"
                tone={stat.tone}
                className="stat-card flex flex-col p-3 sm:p-4 md:p-5 lg:p-6 min-w-0"
              >
                {/* Top Icon Block (A10: 28px in cards, rust, strokeWidth 1.75) */}
                <div className="mb-3 h-7 flex items-center">
                  <IconComponent
                    className="w-7 h-7 text-[var(--rust)] shrink-0"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Number Value Block with fixed height and baseline (A8 & A9) */}
                <div
                  className={`font-display font-extrabold text-[var(--ink)] tracking-tight leading-none mb-1.5 flex items-baseline tabular-nums ${
                    isDistinction
                      ? "text-[clamp(1.2rem,2.8vw,2rem)] min-h-[36px] sm:min-h-[44px] md:min-h-[48px]"
                      : "text-[length:var(--fs-xl)] max-[380px]:text-[1.5rem] h-[36px] sm:h-[44px] md:h-[48px] truncate"
                  }`}
                >
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <span
                    data-target={stat.numericTarget}
                    className="stat-number-value"
                  >
                    {stat.numericTarget !== undefined
                      ? stat.numericTarget.toLocaleString("en-GB")
                      : stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="stat-suffix ml-1">
                      {stat.suffix.trim()}
                    </span>
                  )}
                </div>

                {/* Stat Label sits close to number */}
                <p className="font-body text-[length:var(--fs-sm)] font-medium text-[var(--muted)] leading-snug">
                  {stat.label}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
