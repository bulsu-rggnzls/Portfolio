import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

const subtle = "bg-brand/10 text-brand-ink border border-brand/20";
const chip =
  "px-2.5 py-1 rounded-md text-ink-quiet bg-panel-raised/60 border border-line-strong";

const badgeVariants = {
  default: subtle,
  // Status pills: "Available for work", "Live Demo Ready"
  status: subtle,
  // Tech stack tags: Projects + Certifications
  tag: chip,
  // Alias of tag — skill pills in Certifications
  skill: chip,
} as const;

const badgeSizes = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1 text-xs",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-2.5 text-xs",
} as const;

export type BadgeVariant = keyof typeof badgeVariants;
export type BadgeSize = keyof typeof badgeSizes;

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  dot = false,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-ink opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-ink" />
        </span>
      )}
      {children}
    </span>
  );
}
