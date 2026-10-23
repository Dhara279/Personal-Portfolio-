import React from "react";

export interface SectionHeadingProps {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}

export function SectionHeading({
  children,
  as: Component = "h2",
  className = "",
  id,
}: SectionHeadingProps) {
  // Split lines if explicit linebreaks or long sentences
  const lines = children.includes("\n") ? children.split("\n") : [children];

  return (
    <Component
      id={id}
      className={`font-display font-extrabold text-[length:var(--fs-h2)] leading-[1.05] tracking-[-0.03em] text-[var(--ink)] max-w-full break-words ${className}`}
    >
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden pb-1 max-w-full">
          <span className="heading-line inline-block max-w-full break-words will-change-transform">
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}
