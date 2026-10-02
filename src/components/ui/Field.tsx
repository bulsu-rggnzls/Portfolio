import type { ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "@/components/ui/polymorphic";
import { cn } from "@/utils/cn";

const control =
  "w-full rounded-xl border border-line-strong bg-canvas/60 px-4 py-3 text-sm text-ink-body placeholder:text-muted outline-none focus:border-brand transition-colors duration-200 disabled:opacity-50";

export type FieldElement = "input" | "textarea" | "select";

type FieldOwnProps = {
  label: ReactNode;
  id?: string;
  className?: string;
};

export type FieldProps<E extends FieldElement = "input"> = PolymorphicProps<
  E,
  FieldOwnProps
>;

export default function Field<E extends FieldElement = "input">({
  label,
  as,
  id,
  className,
  ...props
}: FieldProps<E>) {
  const Tag = (as ?? "input") as ElementType;
  const fieldName = (props as { name?: string }).name;
  const fieldId = id ?? fieldName;

  return (
    <div className="space-y-1">
      <label
        htmlFor={fieldId}
        className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-muted"
      >
        {label}
      </label>
      <Tag
        id={fieldId}
        className={cn(control, Tag === "textarea" && "resize-none", className)}
        {...props}
      />
    </div>
  );
}
