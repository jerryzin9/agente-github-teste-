"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  show: boolean;
  onHide: () => void;
}

export default function Toast({ message, show, onHide }: ToastProps) {
  useEffect(() => {
    if (show) {
      const t = setTimeout(onHide, 2500);
      return () => clearTimeout(t);
    }
  }, [show, onHide]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]"
        >
          <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl font-medium flex items-center gap-2">
            ✅ {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
