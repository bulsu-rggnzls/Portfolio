import { cn } from "../../lib/utils";

export default function H1({ children, className, ...props }) {
  return (
    <h1
      className={cn(
        "text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
