import React from "react";

export interface CardProps {
  children: React.ReactNode;
  variant?: "bordered" | "soft";
  tone?: "blush" | "blush-light" | "sage" | "sand" | "cream" | "cream-2" | "portrait" | "white";
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const toneStyles: Record<NonNullable<CardProps["tone"]>, string> = {
  blush: "bg-[var(--blush)]",
  "blush-light": "bg-[var(--blush-light)]",
  sage: "bg-[var(--sage)]",
  sand: "bg-[var(--sand)]",
  cream: "bg-[var(--cream)]",
  "cream-2": "bg-[var(--cream-2)]",
  portrait: "bg-[var(--portrait)]",
  white: "bg-white",
};

export function Card({
  children,
  variant = "bordered",
  tone = "cream",
  className = "",
  style,
  id,
}: CardProps) {
  const isBordered = variant === "bordered";
  const baseClass = isBordered ? "card-bordered" : "card-soft";
  const toneClass = toneStyles[tone] || "bg-[var(--cream)]";

  return (
    <div
      id={id}
      style={style}
      className={`${baseClass} ${toneClass} p-5 md:p-6 lg:p-7 relative ${className}`}
    >
      {children}
    </div>
  );
}
