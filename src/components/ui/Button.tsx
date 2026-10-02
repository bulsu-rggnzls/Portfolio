import type { ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "@/components/ui/polymorphic";
import { cn } from "@/utils/cn";

const variants = {
  primary:
    "bg-brand hover:bg-brand-ink text-canvas font-semibold shadow-lg shadow-brand/20 active:scale-95",
  secondary:
    "bg-panel-raised/60 text-ink-quiet border border-line-strong hover:border-brand-ink/40 hover:text-brand-ink hover:bg-panel-raised",
  ghost:
    "border border-line-strong text-ink-quiet bg-panel/60 hover:border-brand-ink/40 hover:text-brand-ink hover:bg-panel-raised/60",
  soft: "bg-ink/5 border border-line text-ink-quiet hover:text-accent hover:bg-ink/10 hover:border-accent/40",
} as const;

const sizes = {
  sm: "px-3 py-1.5 text-xs rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-xl",
  icon: "min-h-[48px] min-w-[48px] p-3 rounded-xl",
  "icon-sm": "w-10 h-10 rounded-xl",
} as const;

const base =
  "inline-flex items-center justify-center gap-2 transition-all duration-200 touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
};

export type ButtonProps<E extends ElementType = "button"> = PolymorphicProps<
  E,
  ButtonOwnProps
>;

export default function Button<E extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps<E>) {
  const Tag = (as ?? "button") as ElementType;

  return (
    <Tag
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
