import { cn } from "../../lib/utils";

export default function Section({
  id,
  children,
  className,
  containerClass,
  glow = true,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex items-center px-4 sm:px-8 relative overflow-hidden bg-gradient-to-br from-teal-500/[0.04] to-purple-500/[0.04] dark:from-teal-500/[0.06] dark:to-purple-500/[0.06]",
        className
      )}
      {...props}
    >
      {glow && (
        <>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />
        </>
      )}
      <div className={cn("mx-auto w-full max-w-6xl py-20", containerClass)}>
        {children}
      </div>
    </section>
  );
}
