import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext(undefined);

const isDark = true;

export function ThemeProvider({ children }) {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
