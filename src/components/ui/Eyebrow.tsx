import React from "react";

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  sectionId?: string;
}

export function Eyebrow({
  children,
  className = "",
  id,
  sectionId,
}: EyebrowProps) {
  return (
    <span
      id={id}
      data-eyebrow={sectionId}
      className={`inline-block font-body text-[length:var(--fs-xs)] font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)] transition-colors ${className}`}
    >
      {children}
    </span>
  );
}
