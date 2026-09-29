import { cn } from "../../utils/cn";

const variants = {
  default: "text-ink-body",
  muted: "text-muted",
  accent: "text-accent",
};

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl sm:text-2xl",
  "2xl": "text-2xl sm:text-3xl lg:text-4xl",
};

export default function Text({
  children,
  className,
  as: Tag = "p",
  variant = "default",
  size = "base",
  ...props
}) {
  return (
    <Tag
      className={cn(
        "leading-relaxed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
