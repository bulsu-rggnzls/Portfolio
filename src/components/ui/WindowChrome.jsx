import { cn } from "../../utils/cn";

const tones = {
  // Standard macOS-style traffic lights
  default: {
    dots: "w-2.5 h-2.5",
    colors: ["bg-red-500/80", "bg-yellow-500/80", "bg-green-500/80"],
  },
  // GitHub-dark chrome used by the dev-console modal
  github: {
    dots: "w-3 h-3",
    colors: ["bg-[#ff7b72]", "bg-[#d2a8ff]", "bg-[#79c0ff]"],
  },
};

export default function WindowChrome({
  title,
  tone = "default",
  right,
  className,
  titleClass,
  ...props
}) {
  const { dots, colors } = tones[tone];

  return (
    <div
      className={cn(
        "flex items-center justify-between bg-panel/90 border-b border-line px-4 py-2.5",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5">
        {colors.map((color) => (
          <span key={color} className={cn("rounded-full", dots, color)} />
        ))}
      </div>
      <span className={cn("text-[10px] font-mono text-muted", titleClass)}>
        {title}
      </span>
      {right}
    </div>
  );
}
