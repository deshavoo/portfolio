"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  const links = ["home", "about", "projects", "skills", "contact"];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`max-w-5xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl backdrop-blur-2xl border shadow-xl transition-all duration-500 ${
            scrolled
              ? "bg-black/60 border-white/15 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              : "bg-black/30 border-white/10 shadow-lg"
          }`}
        >
          <h1 className="text-xl font-bold text-white cursor-pointer tracking-tight">
            DESHAVOO<span className="text-blue-500">.</span>
          </h1>
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            {links.map((item) => (
              <li key={item} className="relative group">
                <button
                  onClick={() => scrollTo(item)}
                  className="cursor-pointer capitalize text-sm font-medium tracking-wide hover:text-white transition-colors duration-300"
                >
                  {item}
                </button>
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 24px rgba(37,99,235,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="hidden md:block px-5 py-2 rounded-xl bg-linear-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-900/40"
          >
            Hire Me
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </motion.nav>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="rounded-2xl bg-[#0d0d0d]/95 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl">
              {links.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => scrollTo(item)}
                  className="w-full text-left px-6 py-4 text-white capitalize hover:bg-blue-500/10 transition border-b border-white/5"
                >
                  {item}
                </motion.button>
              ))}

              <div className="p-4">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-400 transition shadow-md shadow-blue-900/40"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
