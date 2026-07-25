"use client";

import { motion } from "motion/react";

export default function About() {
  const info = [
    { label: "Location", value: "New Cairo, Egypt 🇪🇬" },
    { label: "Education", value: "CS — Thebes Academy" },
    { label: "Graduated", value: "2024" },
    { label: "Internship", value: "Contact Company" },
    { label: "Currently", value: "Concentrix (Tech Support)" },
    { label: "Email", value: "mostafahadeer909@gmail.com" },
  ];

  return (
    <section
      id="about"
      className="relative pt-24 pb-28 px-6  text-white overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 
                   w-125 h-125 
                   bg-blue-600/20 blur-[120px] rounded-full"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
            Who I am
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-gray-300 leading-relaxed text-lg"
          >
            <p>
              I'm{" "}
              <span className="text-white font-semibold">Mostafa Hadeer</span> —
              a Frontend Developer based in New Cairo, Egypt. I build modern,
              responsive, and high-performance web applications.
            </p>
            <p>
              I graduated in 2024 with a Computer Science degree and gained
              real-world experience through internship and hands-on projects
              using React, Next.js, and modern frontend tools.
            </p>
            <p>
              My focus is on crafting clean UI, smooth user experience, and
              scalable frontend architecture with production-level quality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.35)] hover:border-blue-500/40 hover:shadow-[0_8px_50px_rgba(37,99,235,0.15)] transition-all duration-500"
          >
            <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              Quick Info
            </h4>
            <div className="space-y-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between text-sm border-b border-white/10 pb-3 group"
                >
                  <span className="text-gray-400">{item.label}</span>
                  <span className="font-medium text-blue-400 text-right group-hover:text-blue-300 transition-colors duration-300">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
