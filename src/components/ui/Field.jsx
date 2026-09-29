import { cn } from "../../utils/cn";

const control =
  "w-full rounded-xl border border-line-strong bg-canvas/60 px-4 py-3 text-sm text-ink-body placeholder:text-muted outline-none focus:border-brand transition-colors duration-200 disabled:opacity-50";

export default function Field({
  label,
  as: Tag = "input",
  id,
  className,
  ...props
}) {
  const fieldId = id ?? props.name;

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
