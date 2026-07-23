import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-teal-500 text-white font-semibold hover:bg-teal-600 active:bg-teal-700",
  secondary:
    "bg-slate-200 text-slate-600 hover:bg-teal-500 hover:text-white dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-teal-500 dark:hover:text-white",
  ghost:
    "border border-teal-400/40 text-teal-400 bg-teal-500/5 hover:bg-teal-500/15 hover:border-teal-400/70 hover:shadow-[0_0_16px_-4px_rgba(45,212,191,0.3)]",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-full",
  icon: "min-h-[48px] min-w-[48px] p-4 rounded-full",
  "icon-sm": "w-10 h-10 rounded-xl",
};

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  as: Tag = "button",
  ...props
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-300 touch-manipulation active:scale-[0.98]",
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
