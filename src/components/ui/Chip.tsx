import React from "react";

export interface ChipProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tone?: "cream" | "white" | "terracotta";
}

export function Chip({
  children,
  className = "",
  onClick,
  tone = "cream",
}: ChipProps) {
  const bgClass =
    tone === "white"
      ? "bg-white"
      : tone === "terracotta"
      ? "bg-[var(--terracotta-light)]/20 text-[var(--ink)]"
      : "bg-[var(--cream-2)]";

  return (
    <span
      onClick={onClick}
      className={`chip-pill inline-flex items-center justify-center px-4 py-1.5 text-[0.875rem] font-medium tracking-tight text-[var(--ink)] select-none ${bgClass} ${className}`}
    >
      {children}
    </span>
  );
}
