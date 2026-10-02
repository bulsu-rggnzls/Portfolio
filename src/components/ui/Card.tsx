import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/utils/cn";

export interface CardProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  group?: boolean;
  children?: ReactNode;
}

export default function Card({
  children,
  className,
  group = false,
  ...props
}: CardProps) {
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
