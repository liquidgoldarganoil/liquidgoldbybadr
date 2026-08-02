"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { ParticleField } from "./particle-field";
import { MagneticButton } from "./magnetic-button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-obsidian"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/bottles-collection-1.jpeg"
          alt="Liquid Gold Moroccan argan oil bottle collection"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/70 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian" />
      </motion.div>

      <div className="pattern-zellige pattern-fade-mask absolute inset-0 opacity-30" />
      <ParticleField count={70} />

      <motion.div
        style={{ opacity }}
        className="container relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-gold-200/90"
        >
          Ethically sourced · Morocco
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-4xl font-light leading-[1.08] text-ivory sm:text-6xl md:text-7xl"
        >
          100% Pure <span className="text-shimmer italic">Moroccan</span> Argan Oil
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="mt-6 max-w-lg font-display text-lg italic text-ivory/70 sm:text-xl"
        >
          The luxury your beauty deserves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </MagneticButton>
          <MagneticButton
            variant="outline"
            onClick={() =>
              document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn Our Story
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gold-200/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
