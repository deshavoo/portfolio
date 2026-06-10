import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

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
    <nav className="fixed top-0 left-0 w-full h-14 z-50 backdrop-blur-md bg-white/70 border-b border-black/10 flex items-center">
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between px-5">
        {/* 🔥 تم إضافة scale-[0.8] لتصغير حجم اللوجو بالتساوي مع المحافظة على التوسيط العمودي في مكانه */}
        <div
          onClick={() => scrollTo("home")}
          className="scale-y-55 cursor-pointer flex items-center justify-center"
        >
          <Logo />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-sm text-gray-700">
          {links.map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -1 }}
              className="cursor-pointer relative group capitalize hover:text-blue-500 transition-colors"
              onClick={() => scrollTo(item)}
            >
              {item}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔥 Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-14 left-0 w-full md:hidden bg-white shadow-lg border-b border-black/5"
          >
            <ul className="flex flex-col p-4 gap-4 text-sm font-medium">
              {links.map((item) => (
                <li
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="cursor-pointer capitalize hover:text-blue-500 p-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
