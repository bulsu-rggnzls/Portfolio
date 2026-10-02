import type { ComponentPropsWithoutRef } from "react";
import { Moon, Sun } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { useTheme } from "@/store/theme-context";

export type ThemeToggleProps = ComponentPropsWithoutRef<"button">;

export default function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="soft"
      size="icon-sm"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
      className={cn("rounded-full", className)}
      {...props}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
