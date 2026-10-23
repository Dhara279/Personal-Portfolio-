import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  showArrow?: boolean;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  id?: string;
  download?: boolean | string;
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  leadingIcon,
  trailingIcon,
  showArrow = false,
  target,
  rel,
  onClick,
  type = "button",
  id,
  download,
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const baseClasses = isPrimary
    ? "btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 text-[1rem] font-bold tracking-tight text-white transition-all cursor-pointer select-none"
    : "btn-outline inline-flex items-center justify-center gap-2 px-5 py-3 text-[1rem] font-bold tracking-tight text-[var(--ink)] transition-all cursor-pointer select-none";

  const content = (
    <>
      {leadingIcon && <span className="inline-flex shrink-0">{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && <span className="inline-flex shrink-0">{trailingIcon}</span>}
      {showArrow && (
        <ArrowRight
          className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.25}
        />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.endsWith(".pdf") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          id={id}
          href={href}
          target={target || (href.endsWith(".pdf") ? "_blank" : undefined)}
          rel={rel || (href.endsWith(".pdf") ? "noopener noreferrer" : undefined)}
          download={download}
          className={`${baseClasses} ${className} group`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link id={id} href={href} className={`${baseClasses} ${className} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className} group`}
    >
      {content}
    </button>
  );
}
