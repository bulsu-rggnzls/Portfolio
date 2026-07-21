import { cn } from "../../lib/utils";

export default function Paragraph({ children, className, ...props }) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed text-gray-700 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
