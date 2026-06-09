import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // يقفل الموبايل منيو
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div
          onClick={() => scrollTo("home")}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          deshavoo
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li
            onClick={() => scrollTo("home")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollTo("about")}
            className="hover:text-blue-600 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => scrollTo("projects")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => scrollTo("skills")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => scrollTo("contact")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Contact
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-4 gap-4 text-gray-700">
            <li onClick={() => scrollTo("home")} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => scrollTo("about")} className="cursor-pointer">
              About
            </li>
            <li onClick={() => scrollTo("projects")} className="cursor-pointer">
              Projects
            </li>
            <li onClick={() => scrollTo("skills")} className="cursor-pointer">
              Skills
            </li>
            <li onClick={() => scrollTo("contact")} className="cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
