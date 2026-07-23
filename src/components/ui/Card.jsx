import { cn } from "../../lib/utils";

export default function Card({
  children,
  className,
  group = false,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white/70 backdrop-blur-md border border-black/5 dark:bg-slate-900/40 dark:backdrop-blur-md dark:border-white/10 transition-all duration-300",
        group && "group",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
