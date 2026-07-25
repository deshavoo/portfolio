"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "Git",
  ];

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-300 ease-out hidden md:block"
        style={{
          background: `radial-gradient(500px circle at ${glow.x}% ${glow.y}%, rgba(37,99,235,0.16), transparent 70%)`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 w-130 h-130 -translate-x-1/2 -translate-y-1/2 bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl w-full text-center"
      >
        <motion.div variants={fadeUp} className="mb-6 flex justify-center">
          <Logo />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-400/20 bg-green-400/10 text-green-400 text-xs uppercase tracking-[3px] font-semibold mb-8"
        >
          🚀 Open to Frontend Opportunities
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight"
        >
          Frontend
          <br />
          <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            React Developer
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8 mb-10"
        >
          I'm <span className="text-white font-semibold">Mostafa Hadeer</span>,
          a{" "}
          <span className="text-blue-400 font-semibold">
            Frontend React Developer
          </span>{" "}
          with{" "}
          <span className="text-white font-semibold">
            2+ years of experience
          </span>{" "}
          and a strong{" "}
          <span className="text-blue-400 font-semibold">Computer Science</span>{" "}
          background. I build fast, scalable, responsive, and user-friendly web
          applications using React, Next.js, TypeScript, and modern frontend
          technologies.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <motion.a
            href="mailto:mostafahadeer909@gmail.com"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(37,99,235,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-7 py-3 rounded-xl font-semibold text-black bg-linear-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/CV.pdf"
            download
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(37,99,235,1)",
              color: "#fff",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-7 py-3 rounded-xl border border-blue-600 text-blue-400"
          >
            Download CV
          </motion.a>
          <motion.a
            href="https://github.com/deshavoo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(96,165,250,1)",
              color: "#60a5fa",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-7 py-3 rounded-xl border border-white/10 text-white"
          >
            GitHub →
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-sm text-gray-300 hover:border-blue-400/60 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-3 max-w-xl mx-auto border border-white/10 rounded-2xl bg-white/4 backdrop-blur-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.35)]"
        >
          <div className="py-6 border-r border-white/10">
            <h3 className="text-3xl font-bold text-blue-400">2+</h3>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
              Years Experience
            </p>
          </div>
          <div className="py-6 border-r border-white/10">
            <h3 className="text-3xl font-bold text-blue-400">8+</h3>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
              Projects Completed
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-3xl font-bold text-blue-400">20+</h3>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
              Technologies
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 mt-2 rounded-full bg-blue-400"></div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-[#0a0a0a]" />
    </section>
  );
}
