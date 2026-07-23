import { cn } from "../../lib/utils";

const sizes = {
  h1: "text-5xl sm:text-6xl lg:text-7xl font-extrabold",
  h2: "text-3xl sm:text-4xl font-bold",
  h3: "text-base font-bold",
  h4: "text-sm font-semibold",
  "2xl": "text-4xl sm:text-5xl lg:text-6xl font-bold",
};

export default function Heading({
  children,
  className,
  as: Tag = "h2",
  size,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "tracking-tight text-slate-900 dark:text-white",
        sizes[size || Tag],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
