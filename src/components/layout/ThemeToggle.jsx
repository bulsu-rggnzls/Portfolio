import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";
import { cn } from "../../lib/utils";

export default function ThemeToggle({ className, ...props }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
      className={cn(
        "p-2 rounded-full transition-colors duration-300",
        "text-slate-600 hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700",
        className
      )}
      {...props}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
