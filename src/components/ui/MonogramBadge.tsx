import React from "react";

export interface MonogramBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function MonogramBadge({
  className = "",
  size = "md",
}: MonogramBadgeProps) {
  const sizeClasses =
    size === "sm"
      ? "w-8 h-8 text-[length:var(--fs-sm)] rounded-[8px]"
      : size === "lg"
      ? "w-14 h-14 text-[length:var(--fs-xl)] rounded-[16px]"
      : "w-10 h-10 text-[length:var(--fs-lg)] rounded-[10px]";

  return (
    <div
      aria-hidden="true"
      className={`dp-badge inline-flex items-center justify-center font-display font-extrabold bg-[var(--terracotta-light)] text-[var(--ink)] select-none transition-transform duration-200 hover:rotate-[-6deg] hover:scale-105 border-2 border-[var(--ink)] shadow-[2px_2px_0_0_var(--ink)] ${sizeClasses} ${className}`}
    >
      DP
    </div>
  );
}
