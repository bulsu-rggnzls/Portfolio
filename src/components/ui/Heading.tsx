import type { ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "@/components/ui/polymorphic";
import { cn } from "@/utils/cn";

const sizes = {
  h1: "text-5xl sm:text-6xl lg:text-7xl font-extrabold",
  h2: "text-3xl sm:text-4xl font-bold",
  h3: "text-base font-bold",
  h4: "text-sm font-semibold",
  "2xl": "text-4xl sm:text-5xl lg:text-6xl font-bold",
} as const;

export type HeadingSize = keyof typeof sizes;

type HeadingTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

type HeadingOwnProps = {
  size?: HeadingSize;
  className?: string;
  children?: ReactNode;
};

export type HeadingProps<E extends HeadingTag = "h2"> = PolymorphicProps<
  E,
  HeadingOwnProps
>;

export default function Heading<E extends HeadingTag = "h2">({
  as,
  size,
  className,
  children,
  ...props
}: HeadingProps<E>) {
  const Tag = (as ?? "h2") as ElementType;
  const tagKey = typeof Tag === "string" ? Tag : undefined;
  const sizeKey =
    size ?? (tagKey !== undefined && tagKey in sizes ? (tagKey as HeadingSize) : undefined);
  const sizeClass = sizeKey === undefined ? undefined : sizes[sizeKey];

  return (
    <Tag className={cn("tracking-tight text-ink", sizeClass, className)} {...props}>
      {children}
    </Tag>
  );
}
