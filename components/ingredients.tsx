"use client";

import { motion } from "framer-motion";
import { Reveal } from "./reveal";

const process = [
  { title: "Sun-dried", copy: "Argan fruit is dried naturally before the flesh is removed by hand." },
  { title: "Cracked by hand", copy: "Each hard shell is cracked between stones to reveal the kernel inside." },
  { title: "Cold-pressed", copy: "Kernels are pressed without heat, preserving vitamin E and fatty acids." },
  { title: "Rested & filtered", copy: "The oil settles and is filtered — nothing added, nothing stripped away." },
];

export function Ingredients() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-28">
      <div className="pattern-zellige pattern-fade-mask absolute inset-0 opacity-[0.05]" />
      <div className="container relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative mx-auto flex h-[360px] w-full max-w-md items-center justify-center">
            <svg viewBox="0 0 240 300" className="h-full w-full">
              {/* nut */}
              <motion.ellipse
                cx="120"
                cy="90"
                rx="34"
                ry="42"
                fill="none"
                stroke="#c9a24b"
                strokeWidth="1.4"
                initial={{ opacity: 0.9 }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M120 50 L120 130"
                stroke="#8a6d2f"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.4 }}
              />

              {/* falling drop */}
              <motion.circle
                r="5"
                fill="#e8c873"
                initial={{ cy: 140, opacity: 0 }}
                animate={{ cy: [140, 230], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 0.6, ease: "easeIn" }}
                cx="120"
              />

              {/* pool */}
              <motion.ellipse
                cx="120"
                cy="255"
                rx="60"
                ry="14"
                fill="#e8c873"
                fillOpacity="0.18"
                stroke="#e8c873"
                strokeOpacity="0.5"
                strokeWidth="1"
                animate={{ rx: [56, 64, 56] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.ellipse
                cx="120"
                cy="253"
                rx="40"
                ry="8"
                fill="#e8c873"
                fillOpacity="0.4"
              />
            </svg>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-300">The Process</p>
            <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
              One ingredient. <span className="italic text-shimmer">Zero shortcuts.</span>
            </h2>
            <p className="mt-4 text-ivory/60">
              Every bottle begins the same way it has for generations — no solvents, no heat, no
              refining. Just the kernel, the press, and time.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex gap-5 border-b border-gold-400/10 pb-6">
                  <span className="font-display text-2xl text-gold-400/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ivory">{p.title}</h3>
                    <p className="mt-1 text-sm text-ivory/55">{p.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
