"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { MagneticButton } from "./magnetic-button";

const occasions = ["Weddings", "Birthdays", "Eid", "Anniversaries", "Father's Day", "Mother's Day"];

export function GiftBoxes() {
  return (
    <section id="gifting" className="relative overflow-hidden bg-obsidian-soft py-28">
      <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-3xl border border-gold-400/15 gold-border-glow"
          >
            <Image
              src="/images/gift-box-hero.jpeg"
              alt="Liquid Gold luxury gift box with four roller bottles"
              fill
              className="object-cover"
            />
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Gifting</p>
            <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
              A gift that feels like <span className="italic text-shimmer">liquid gold</span>
            </h2>
            <p className="mt-4 text-ivory/60">
              Four blends, hand-poured into 8ml roller bottles and set in a black-and-gold
              keepsake box — ready for the moments that call for something considered.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              {occasions.map((o) => (
                <span
                  key={o}
                  className="rounded-full border border-gold-400/25 px-4 py-2 text-xs uppercase tracking-[0.15em] text-gold-200/80"
                >
                  {o}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex items-center gap-6">
              <span className="font-display text-3xl text-gold-200">£30.00</span>
              <span className="text-sm text-ivory/40 line-through">£32.99</span>
              <MagneticButton
                onClick={() =>
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Shop the Gift Box
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
