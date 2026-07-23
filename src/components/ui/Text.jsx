import { cn } from "../../lib/utils";

const variants = {
  default: "text-slate-600 dark:text-slate-200",
  muted: "text-slate-400 dark:text-slate-400",
  accent: "text-teal-400",
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
