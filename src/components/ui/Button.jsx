import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 active:scale-95",
  secondary:
    "bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-slate-800",
  ghost:
    "border border-slate-700/50 text-slate-300 bg-slate-900/60 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-slate-800/60",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-xl",
  icon: "min-h-[48px] min-w-[48px] p-3 rounded-xl",
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
        "inline-flex items-center justify-center gap-2 transition-all duration-200 touch-manipulation",
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
