"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./reveal";
import { BeforeAfterSlider } from "./before-after-slider";
import { cn } from "@/lib/utils";

const categories = [
  {
    key: "hair",
    label: "Hair",
    color: "#c9a24b",
    points: [
      "Deeply moisturises strands from root to tip",
      "Reduces frizz and adds a natural, glass-like shine",
      "Strengthens hair prone to breakage",
    ],
  },
  {
    key: "beard",
    label: "Beard",
    color: "#8a5a2b",
    points: [
      "Softens coarse or wiry facial hair",
      "Conditions the skin underneath to ease itchiness",
      "Promotes a fuller, healthier-looking beard",
    ],
  },
  {
    key: "face",
    label: "Face",
    color: "#a8394a",
    points: [
      "Absorbs quickly without a greasy after-feel",
      "Helps calm dryness, tightness and irritation",
      "Rich in vitamin E to support skin's natural barrier",
    ],
  },
  {
    key: "nails",
    label: "Nails",
    color: "#e8c873",
    points: [
      "Nourishes brittle nails and dry cuticles",
      "Softens rough skin around the nail bed",
      "Leaves hands feeling cared for, not just clean",
    ],
  },
  {
    key: "body",
    label: "Body",
    color: "#5f7a4f",
    points: [
      "Melts into skin for all-over hydration",
      "A little goes a long way — lightweight, not greasy",
      "Suitable for even the most sensitive areas",
    ],
  },
];

export function Benefits() {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="benefits" className="relative bg-obsidian-soft py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300">One Oil, Every Ritual</p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            Built for <span className="italic text-shimmer">hair, skin, beard & nails</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-xl flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors",
                active === c.key
                  ? "border-gold-200 bg-gold-400/10 text-gold-200"
                  : "border-gold-400/15 text-ivory/50 hover:border-gold-400/40"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.4 }}
            >
              <BeforeAfterSlider fromColor={current.color} toColor="#e8c873" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.ul
              key={current.key + "-list"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              {current.points.map((p) => (
                <li key={p} className="flex items-start gap-4">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: current.color }}
                  />
                  <span className="text-ivory/75">{p}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <p className="mx-auto mt-10 max-w-lg text-center text-xs text-ivory/35">
          Illustrative comparison. Individual results vary with regular use.
        </p>
      </div>
    </section>
  );
}
