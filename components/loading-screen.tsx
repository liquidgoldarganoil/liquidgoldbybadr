"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-obsidian"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } }}
        >
          <motion.svg
            width="72"
            height="92"
            viewBox="0 0 72 92"
            fill="none"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M36 4C36 4 8 40 8 60C8 75.464 20.536 88 36 88C51.464 88 64 75.464 64 60C64 40 36 4 36 4Z"
              stroke="#e8c873"
              strokeWidth="1.4"
              fill="transparent"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 1.6, ease: "easeInOut" },
                },
              }}
            />
            <motion.path
              d="M36 30C36 30 22 48 22 60C22 67.732 28.268 74 36 74C43.732 74 50 67.732 50 60C50 48 36 30 36 30Z"
              stroke="#c9a24b"
              strokeWidth="1"
              fill="rgba(232,200,115,0.08)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.svg>
          <motion.p
            className="mt-5 font-display italic text-sm tracking-[0.3em] text-gold-200/80 uppercase"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            Liquid Gold
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
