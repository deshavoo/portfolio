/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-useless-assignment */
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "portfolio-theme";
const ThemeContext = createContext(null);

/**
 * Reads the theme that should be applied before React hydrates,
 * so there is no flash of the wrong theme on load.
 * Priority: saved theme -> system preference -> "dark" (default).
 */
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // localStorage unavailable (privacy mode, etc) — fall through
  }

  const prefersLight =
    window.matchMedia?.("(prefers-color-scheme: light)").matches ?? false;

  return prefersLight ? "light" : "dark";
}

export function ThemeProvider({ children }) {
  // Lazy init avoids a flash: the value is correct on the very first render.
  const [theme, setTheme] = useState(getInitialTheme);

  // Keep the <html data-theme="..."> attribute in sync.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore write failures
    }
  }, [theme]);

  // Follow system preference changes only if the user hasn't chosen explicitly.
  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: light)");
    if (!media) return;

    const handleChange = (e) => {
      let hasExplicitChoice = false;
      try {
        hasExplicitChoice = !!window.localStorage.getItem(STORAGE_KEY);
      } catch {
        hasExplicitChoice = false;
      }
      if (!hasExplicitChoice) {
        setTheme(e.matches ? "light" : "dark");
      }
    };

    media.addEventListener?.("change", handleChange);
    return () => media.removeEventListener?.("change", handleChange);
  }, []);

  const applyTheme = useCallback((next) => {
    // Respect prefers-reduced-motion: skip the animated view transition.
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (document.startViewTransition && !prefersReducedMotion) {
      document.startViewTransition(() => setTheme(next));
    } else {
      // Graceful fallback — plain state update, CSS transitions handle the rest.
      setTheme(next);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme, applyTheme]);

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme: applyTheme }),
    [theme, toggleTheme, applyTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
