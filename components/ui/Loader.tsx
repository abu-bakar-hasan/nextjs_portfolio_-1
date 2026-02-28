"use client";

import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="flex items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="size-32 text-zinc-900 dark:text-zinc-100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
          fill="currentColor"
        />
      </motion.svg>
    </div>
  );
}
