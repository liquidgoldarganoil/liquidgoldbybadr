"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";

const shots = [
  { src: "/images/lifestyle-boxes-1.jpeg", span: "row-span-2" },
  { src: "/images/product-rose.jpg", span: "" },
  { src: "/images/athlete-campaign.jpeg", span: "row-span-2" },
  { src: "/images/product-tea-tree.jpg", span: "" },
  { src: "/images/lifestyle-boxes-2.jpeg", span: "" },
  { src: "/images/gift-box-hero.jpeg", span: "row-span-2" },
  { src: "/images/product-argan-oud.jpg", span: "" },
  { src: "/images/bottles-collection-2.jpeg", span: "" },
];

export function InstagramGallery() {
  const [active, setActive] = useState<number | null>(null);

  function go(delta: number) {
    if (active === null) return;
    setActive((active + delta + shots.length) % shots.length);
  }

  return (
    <section className="relative bg-obsidian-soft py-28">
      <div className="container">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Follow Along</p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            <span className="italic text-shimmer">@liquidgold_argan</span>
          </h2>
          <a
            href="https://instagram.com/liquidgold_argan"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-gold-200 transition-colors hover:border-gold-200"
          >
            <Instagram className="h-3.5 w-3.5" /> View Profile
          </a>
        </Reveal>

        <div className="mt-14 grid auto-rows-[140px] grid-cols-2 gap-3 sm:grid-cols-4">
          {shots.map((s, i) => (
            <motion.button
              key={s.src + i}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border border-gold-400/10 ${s.span}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Image
                src={s.src}
                alt="Liquid Gold Instagram"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-300 group-hover:bg-obsidian/30" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 p-6 backdrop-blur"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 rounded-full border border-gold-400/30 p-2 text-gold-200"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-4 rounded-full border border-gold-400/30 p-2 text-gold-200 sm:left-8"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.div
              key={active}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={shots[active].src} alt="Liquid Gold" fill className="object-cover" />
            </motion.div>
            <button
              aria-label="Next"
              className="absolute right-4 rounded-full border border-gold-400/30 p-2 text-gold-200 sm:right-8"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
