"use client";

import { motion } from "motion/react";

const TECHNOLOGIES = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Redux",
  "REST API",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Vercel",
  "Responsive Design",
  "Accessibility",
  "Performance",
  "Animation",
  "Clean Code",
];

function TechTrack() {
  // Rendered twice back-to-back; the track scrolls exactly -50% so the
  // seam between the two copies is invisible and the loop never resets.
  return (
    <div className="footer-marquee-track">
      {[0, 1].map((copy) => (
        <div
          className="footer-marquee-group"
          key={copy}
          aria-hidden={copy === 1}
        >
          {TECHNOLOGIES.map((tech, i) => (
            <span className="footer-marquee-word" key={`${copy}-${tech}-${i}`}>
              {tech}
              <span className="footer-marquee-dot" aria-hidden="true">
                •
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-(--bg-base)">
      {/* Animated gradient divider */}
      <div className="footer-divider" />

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="footer-glow" />
        <div className="footer-grid" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 py-10 md:py-8">
        {/* Flowing technology strip */}
        <div className="footer-marquee">
          <TechTrack />
        </div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm tracking-wide text-(--text-secondary)">
            © 2026 Mostafa Hadeer
          </p>
          <p className="mt-1 text-xs tracking-wide text-(--text-tertiary)">
            Built with React, Next.js &amp; lots of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
