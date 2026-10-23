import React from "react";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)]">
        <div className="border-t border-[var(--line)]/25 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.875rem] text-[var(--muted)] font-body">
          <span className="font-bold text-[var(--ink)]">
            {siteConfig.footer.name}
          </span>
          <span className="text-center sm:text-right">
            {siteConfig.footer.meta}
          </span>
        </div>
      </div>
    </footer>
  );
}
