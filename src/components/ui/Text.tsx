import type { ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "@/components/ui/polymorphic";
import { cn } from "@/utils/cn";

const variants = {
  default: "text-ink-body",
  muted: "text-muted",
  accent: "text-accent",
} as const;

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl sm:text-2xl",
  "2xl": "text-2xl sm:text-3xl lg:text-4xl",
} as const;

export type TextVariant = keyof typeof variants;
export type TextSize = keyof typeof sizes;

type TextTag = "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TextOwnProps = {
  variant?: TextVariant;
  size?: TextSize;
  className?: string;
  children?: ReactNode;
};

export type TextProps<E extends TextTag = "p"> = PolymorphicProps<E, TextOwnProps>;

export default function Text<E extends TextTag = "p">({
  as,
  className,
  variant = "default",
  size = "base",
  ...props
}: TextProps<E>) {
  const Tag = (as ?? "p") as ElementType;

  return (
    <Tag
      className={cn("leading-relaxed", variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
