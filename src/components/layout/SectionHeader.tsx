import type { ComponentPropsWithoutRef, ReactNode } from "react";

import Heading, { type HeadingSize } from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { cn } from "@/utils/cn";

export interface SectionHeaderProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children" | "title"> {
  title: ReactNode;
  description?: ReactNode;
  titleSize?: HeadingSize;
}

export default function SectionHeader({
  title,
  description,
  className,
  titleSize = "h2",
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center", className)} {...props}>
      <Heading as="h2" size={titleSize}>
        {title}
      </Heading>
      {description && (
        <Text
          variant="muted"
          className="text-center text-sm sm:text-base max-w-xl mx-auto mt-2 mb-12"
        >
          {description}
        </Text>
      )}
    </div>
  );
}
