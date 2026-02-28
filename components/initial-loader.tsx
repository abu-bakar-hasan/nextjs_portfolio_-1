"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "./ui/Loader";

export function InitialLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if we've already shown the loader in this session to prevent it on hard reloads or subsequent visits if desired
    // For now, we'll just show it on every initial mount of the app (full page refresh)
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500); // 2.5 seconds allows the 2-second SVG path animation to complete 1 full cycle, plus a tiny buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="initial-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background pointer-events-none"
        >
          <div className="pointer-events-auto">
             <Loader />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
