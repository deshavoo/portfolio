"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <nav
          className="
          max-w-5xl
          mx-auto
          flex
          items-center
          justify-between
          px-6
          py-4
          rounded-2xl
          bg-black/40
          backdrop-blur-2xl
          border
          border-white/10
          shadow-xl
        "
        >
          {/* Logo */}

          <h1 className="text-xl font-bold text-white cursor-pointer">
            DESHAVOO<span className="text-blue-500">.</span>
          </h1>

          {/* Desktop */}

          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            {links.map((item) => (
              <li
                key={item}
                onClick={() => scrollTo(item)}
                className="cursor-pointer capitalize hover:text-blue-400 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Desktop Button */}

          <button
            onClick={() => scrollTo("contact")}
            className="
            hidden
            md:block
            px-5
            py-2
            rounded-xl
            bg-blue-500
            text-white
            font-medium
            hover:bg-blue-600
            transition
          "
          >
            Hire Me
          </button>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
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
        </nav>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
            fixed
            top-24
            left-4
            right-4
            z-40
            md:hidden
          "
          >
            <div
              className="
              rounded-2xl
              bg-[#111111]/95
              backdrop-blur-2xl
              border
              border-white/10
              overflow-hidden
              shadow-2xl
            "
            >
              {links.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="
                  w-full
                  text-left
                  px-6
                  py-4
                  text-white
                  capitalize
                  hover:bg-blue-500/10
                  transition
                  border-b
                  border-white/5
                "
                >
                  {item}
                </button>
              ))}

              <div className="p-4">
                <button
                  onClick={() => scrollTo("contact")}
                  className="
                  w-full
                  py-3
                  rounded-xl
                  bg-blue-500
                  text-white
                  font-semibold
                  hover:bg-blue-600
                  transition
                "
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
