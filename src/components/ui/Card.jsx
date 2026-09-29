import { cn } from "../../utils/cn";

export default function Card({
  children,
  className,
  group = false,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-xl bg-surface backdrop-blur-md border border-line transition-all duration-300",
        group && "group",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
