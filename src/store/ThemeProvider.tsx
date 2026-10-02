import { useEffect, type ReactNode } from "react";

import { ThemeContext, type ThemeContextValue } from "@/store/theme-context";

const isDark = true;
const noop = (): void => {};

const themeValue: ThemeContextValue = { isDark, toggleTheme: noop };

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
}
