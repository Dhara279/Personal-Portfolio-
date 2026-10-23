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
            const isDistinction = stat.value === "Distinction";

            return (
              <Card
                key={stat.id}
                data-intro="stats-card"
                variant="bordered"
                tone={stat.tone}
                className="stat-card flex flex-col p-3 sm:p-4 md:p-5 lg:p-6 min-w-0"
              >
                {/* Top Icon (~1.5x bigger, ~34-38px) */}
                <div className="mb-2 sm:mb-3">
                  <IconComponent
                    className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 ${
                      isRust ? "text-[var(--rust)]" : "text-[var(--ink)]"
                    }`}
                    strokeWidth={2.2}
                  />
                </div>

                {/* Number Value */}
                <div
                  className={`font-display font-extrabold text-[var(--ink)] tracking-tight leading-[1.0] mb-1.5 flex items-baseline gap-2 truncate ${
                    isDistinction
                      ? "text-[clamp(1.15rem,4.2vw,2.25rem)]"
                      : "text-[clamp(1.45rem,5.6vw,3rem)]"
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
                    <span className="stat-suffix">
                      {stat.suffix.trim()}
                    </span>
                  )}
                </div>

                {/* Stat Label sits close to number */}
                <p className="font-body text-[0.8125rem] sm:text-[0.875rem] font-medium text-[var(--muted)] leading-snug">
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
