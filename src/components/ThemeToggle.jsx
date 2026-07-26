"use client";

import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 20px rgba(37,99,235,0.45)",
      }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl
                 border border-[var(--border)] bg-[var(--surface)]
                 text-[var(--text-secondary)] hover:text-[var(--accent)]
                 hover:border-[var(--accent)]/50 transition-colors duration-300
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-[var(--accent)]/60 focus-visible:ring-offset-0"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
        className="relative w-5 h-5"
      >
        {/* Moon */}
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 w-5 h-5"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
            fill="currentColor"
          />
        </motion.svg>

        {/* Sun */}
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 w-5 h-5"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 2.5v2.4" />
            <path d="M12 19.1v2.4" />
            <path d="M4.2 4.2l1.7 1.7" />
            <path d="M18.1 18.1l1.7 1.7" />
            <path d="M2.5 12h2.4" />
            <path d="M19.1 12h2.4" />
            <path d="M4.2 19.8l1.7-1.7" />
            <path d="M18.1 5.9l1.7-1.7" />
          </g>
        </motion.svg>
      </motion.div>
    </motion.button>
  );
}
