import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const links = ["home", "about", "projects", "skills", "contact"];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <nav
        className="flex items-center justify-between px-6 py-3 rounded-2xl
                      bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
      >
        {/* Links (Centered) */}
        <ul className="hidden md:flex items-center justify-center w-full gap-8 text-sm font-medium text-gray-200">
          {links.map((item) => (
            <li
              key={item}
              onClick={() => scrollTo(item)}
              className="cursor-pointer capitalize relative group"
            >
              {item}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 bg-black/90 backdrop-blur-xl rounded-2xl p-6 text-center space-y-4 border border-white/10 md:hidden"
          >
            {links.map((item) => (
              <p
                key={item}
                onClick={() => scrollTo(item)}
                className="cursor-pointer capitalize hover:text-blue-400 transition"
              >
                {item}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
