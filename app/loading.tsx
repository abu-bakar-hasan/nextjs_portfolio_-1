"use client";

import { Loader } from "@/components/ui/Loader";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F9F8F6] dark:bg-[#111111]"
    >
      <Loader />
    </motion.div>
  );
}
