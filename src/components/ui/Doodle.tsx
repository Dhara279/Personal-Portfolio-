import React from "react";

export interface DoodleProps {
  type: "sparkle" | "squiggle";
  className?: string;
  color?: "rust" | "terracotta" | "ink";
}

export function Doodle({
  type,
  className = "",
  color = "rust",
}: DoodleProps) {
  const strokeColor =
    color === "terracotta"
      ? "var(--terracotta)"
      : color === "ink"
      ? "var(--ink)"
      : "var(--rust)";

  if (type === "sparkle") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`doodle doodle-sparkle pointer-events-none select-none ${className}`}
      >
        {/* Left radiating stroke */}
        <path
          d="M18 30L5 23"
          stroke={strokeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Middle radiating stroke */}
        <path
          d="M27 24L24 8"
          stroke={strokeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Right radiating stroke */}
        <path
          d="M36 28L49 18"
          stroke={strokeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 38 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`doodle doodle-squiggle pointer-events-none select-none ${className}`}
    >
      <path
        d="M16 6 C28 6 32 16 22 22 C10 26 6 16 16 12 C28 8 32 28 22 36 C10 42 6 30 16 26 C28 22 32 44 22 52 C10 58 6 46 16 42 C26 38 30 62 18 76"
        stroke={strokeColor}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
