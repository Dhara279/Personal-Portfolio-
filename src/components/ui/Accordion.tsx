"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/content/site";

export interface AccordionProps {
  items: ExperienceItem[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId = "exp-amazon",
  className = "",
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggleItem = (id: string) => {
    // Single open item at a time: if clicking the active one, keep it or toggle
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      role="region"
      aria-label="Work experience list"
      className={`card-bordered bg-[var(--cream)] overflow-hidden divide-y-2 divide-[var(--ink)] ${className}`}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `panel-${item.id}`;
        const buttonId = `button-${item.id}`;

        return (
          <div
            key={item.id}
            className={`transition-colors duration-260 ${
              isOpen ? "bg-[var(--sage)]" : "bg-[var(--cream)] hover:bg-[var(--ink)]/[0.04]"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left cursor-pointer group select-none transition-colors"
            >
              <div className="flex items-center gap-3.5 md:gap-4 min-w-0">
                {/* Neutral letter tile in palette */}
                <div
                  aria-hidden="true"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-[10px] border-2 border-[var(--ink)] shadow-[2px_2px_0_0_var(--ink)] flex items-center justify-center font-display font-extrabold text-[1rem] md:text-[1.125rem] shrink-0 bg-[var(--cream-2)] text-[var(--ink)] group-hover:scale-105 transition-transform"
                >
                  {item.monogram}
                </div>

                <div className="min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="font-display font-bold text-[1.0625rem] md:text-[1.1875rem] text-[var(--ink)] truncate">
                    {item.company}
                  </span>
                  <span className="font-body text-[0.875rem] md:text-[0.9375rem] text-[var(--muted)] truncate">
                    {item.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-5 shrink-0 pl-2">
                <span className="font-body text-[0.8125rem] md:text-[0.875rem] font-medium text-[var(--muted)] hidden sm:inline">
                  {item.dates}
                </span>
                <div
                  className={`w-7 h-7 rounded-full border border-[var(--ink)]/20 flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[var(--ink)]/5" : "rotate-0 group-hover:translate-y-[2px]"
                  }`}
                >
                  <ChevronDown
                    className="w-4 h-4 text-[var(--ink)]"
                    strokeWidth={2.25}
                  />
                </div>
              </div>
            </button>

            {/* Mobile dates display if screen is narrow */}
            <div className="sm:hidden px-4 -mt-2 pb-2 text-[0.8125rem] font-medium text-[var(--muted)]">
              {item.dates}
            </div>

            {/* Accordion Content Panel with CSS grid-template-rows animation */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.45s var(--ease-out)",
              }}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-5 md:px-5 md:pb-6 pt-1 text-[var(--muted)] font-body text-[0.95rem] md:text-[1.03125rem] leading-[1.65] border-t border-[var(--ink)]/10">
                  <p>{item.expandedText}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
