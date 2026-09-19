import { cn } from "../../lib/utils";

const badgeVariants = {
  default:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  // Status pills: "Available for work", "Live Demo Ready"
  status:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  // Tech stack tags: Projects + Certifications
  tag: "px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/60 rounded-md border border-slate-700/50",
  // Alias of tag — skill pills in Certifications
  skill:
    "px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/60 rounded-md border border-slate-700/50",
};

const badgeSizes = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1 text-xs",
  md: "px-3 py-1 text-xs",
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
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
      )}
      {children}
    </span>
  );
}
