import { cn } from "../../lib/utils";

const badgeVariants = {
  default:
    "border-teal-400/40 bg-teal-500/10 text-teal-400",
  tag: "bg-teal-500/10 text-teal-400 border border-teal-400/20",
  skill:
    "bg-slate-800/60 dark:bg-slate-800/80 text-teal-400 border border-teal-400/20",
  status: "border border-teal-400/30 bg-teal-500/5 text-teal-400",
};

const badgeSizes = {
  xs: "px-2 py-0.5 text-[10px]",
  sm: "px-3 py-1 text-xs",
  md: "px-5 py-2 text-sm",
  lg: "px-4 py-2.5 text-xs",
};

export default function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  dot = false,
  ...props
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium",
        badgeVariants[variant],
        badgeSizes[size],
        dot && "animate-pulse",
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
        </span>
      )}
      {children}
    </span>
  );
}
