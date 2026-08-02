"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Reveal } from "./reveal";

const steps = [
  {
    n: "01",
    title: "Every kernel is rich in oil",
    image: "/images/story-1-kernels.jpg",
    copy:
      "Each argan kernel holds an oil-rich nut — the only part of the fruit used to produce Liquid Gold. Nothing is wasted; nothing is added.",
  },
  {
    n: "02",
    title: "Harvested only twice a year",
    image: "/images/story-2-harvest.jpg",
    copy:
      "The argan fruit is gathered from wild trees across southwestern Morocco in two short windows each year — June and August — when the fruit is at its ripest.",
  },
  {
    n: "03",
    title: "Hand-picked and processed by women's cooperatives",
    image: "/images/story-3-women.jpg",
    copy:
      "Every batch is cracked, sorted, and cold-pressed by hand by local women's cooperatives — a tradition that supports families and preserves a centuries-old craft.",
  },
  {
    n: "04",
    title: "Rare by nature, precious by result",
    image: "/images/story-4-rare.jpg",
    copy:
      "It takes roughly seven trees and 6–8kg of nuts to produce a single litre of pure argan oil — which is exactly why it's called liquid gold.",
  },
];

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  return (
    <section id="story" className="relative bg-obsidian py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Our Story</p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            From wild tree to <span className="italic text-shimmer">liquid gold</span>
          </h2>
          <p className="mt-4 text-ivory/60">
            A slow, honest process — unchanged for generations, carried out by the women of
            Morocco's argan cooperatives.
          </p>
        </Reveal>

        <div ref={ref} className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute left-6 top-0 h-full w-px bg-gold-400/15 sm:left-1/2 sm:-translate-x-1/2">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="h-full w-full origin-top bg-gradient-to-b from-gold-200 to-gold-600"
            />
          </div>

          <div className="flex flex-col gap-20">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={0.1}>
                <div
                  className={`relative flex flex-col gap-6 pl-16 sm:pl-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } items-center`}
                >
                  <div className="absolute left-6 top-1 -translate-x-1/2 sm:left-1/2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/40 bg-obsidian font-display text-sm text-gold-200">
                      {s.n}
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gold-400/10 sm:w-1/2">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>

                  <div className="sm:w-1/2 sm:px-10">
                    <h3 className="font-display text-2xl text-ivory">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/60">{s.copy}</p>
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
