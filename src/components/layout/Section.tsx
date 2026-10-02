import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/utils/cn";

export interface SectionProps
  extends Omit<ComponentPropsWithoutRef<"section">, "id" | "children"> {
  id: string;
  children?: ReactNode;
  containerClass?: string;
  glow?: boolean;
}

export default function Section({
  id,
  children,
  className,
  containerClass,
  glow = true,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex items-center px-4 sm:px-8 relative overflow-hidden bg-gradient-to-br from-accent/[0.06] to-glow/[0.06]",
        className
      )}
      {...props}
    >
      {glow && (
        <>
          <div className="glow top-40 -left-40 bg-accent/15" />
          <div className="glow -bottom-40 -right-40 bg-glow/15" />
        </>
      )}
      <div className={cn("mx-auto w-full max-w-6xl py-20", containerClass)}>
        {children}
      </div>
    </section>
  );
}
