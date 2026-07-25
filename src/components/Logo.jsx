"use client";

import { motion } from "motion/react";

export default function Logo() {
  return (
    <motion.svg
      width="82"
      height="82"
      viewBox="0 0 200 200"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: [
          "drop-shadow(0 0 0px #1d4ed8)",
          "drop-shadow(0 0 18px #1d4ed8)",
          "drop-shadow(0 0 6px #1d4ed8)",
        ],
      }}
      whileHover={{ scale: 1.06 }}
      transition={{
        duration: 1,
        scale: { type: "spring", stiffness: 260, damping: 18 },
        filter: { duration: 2.4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
      }}
      className="mx-auto mb-6 cursor-pointer"
    >
      <motion.path
        d="M40 40 L40 160 Q120 160 120 100 Q120 40 40 40"
        stroke="#1d4ed8"
        strokeWidth="4"
        strokeLinecap="round"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M120 40 L160 160 L200 40"
        stroke="#60a5fa"
        strokeWidth="4"
        strokeLinecap="round"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
