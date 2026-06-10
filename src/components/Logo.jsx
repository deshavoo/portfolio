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
          "drop-shadow(0 0 0px #3b82f6)",
          "drop-shadow(0 0 15px #3b82f6)",
          "drop-shadow(0 0 5px #3b82f6)",
        ],
      }}
      transition={{
        duration: 1,
        filter: { duration: 2, repeat: Infinity, repeatType: "mirror" },
      }}
      className="mx-auto mb-6"
    >
      {/* D */}
      <motion.path
        d="M40 40 L40 160 Q120 160 120 100 Q120 40 40 40"
        stroke="#3b82f6"
        strokeWidth="4"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* V */}
      <motion.path
        d="M120 40 L160 160 L200 40"
        stroke="#60a5fa"
        strokeWidth="4"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </motion.svg>
  );
}
