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
    <>
      {/* 🔥 Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <nav
          className="flex items-center justify-between px-6 py-3 rounded-2xl
                        bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
        >
          {/* Desktop Links */}
          <ul className="hidden md:flex items-center justify-center w-full gap-8 text-sm font-medium text-gray-200">
            {links.map((item) => (
              <li
                key={item}
                onClick={() => scrollTo(item)}
                className="cursor-pointer capitalize relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      {/* 💀 Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((item, index) => (
              <motion.p
                key={item}
                onClick={() => scrollTo(item)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-semibold text-white capitalize cursor-pointer hover:text-blue-400 transition"
              >
                {item}
              </motion.p>
            ))}

            {/* 🔥 CTA Button */}
            <motion.button
              onClick={() => scrollTo("contact")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 px-8 py-3 bg-blue-500 text-black rounded-xl font-semibold hover:bg-blue-400 transition"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
