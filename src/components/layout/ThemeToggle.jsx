import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../store/ThemeProvider";
import { cn } from "../../utils/cn";

export default function ThemeToggle({ className, ...props }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
      className={cn(
        "p-2 rounded-full transition-colors duration-200",
        "text-ink hover:bg-panel-raised",
        className
      )}
      {...props}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
