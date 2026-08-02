"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "Is Liquid Gold argan oil 100% pure?",
    a: "Yes. Every bottle is 100% pure, cold-pressed Moroccan argan oil with no fillers, preservatives, or synthetic additives.",
  },
  {
    q: "Which oil should I start with?",
    a: "If you're new to argan oil, the Original Argan Oil is the best all-purpose introduction. Choose Rose for radiance, Tea Tree for a purifying scalp or skin routine, and Argan & Oud for a richer, more luxurious beard and body oil.",
  },
  {
    q: "Can I use it on my hair, skin, beard and nails?",
    a: "Yes — it's formulated to work across hair, skin, beard and nails. A small amount goes a long way.",
  },
  {
    q: "How is the oil sourced and produced?",
    a: "Our argan oil is hand-harvested and cold-pressed by women's cooperatives in Morocco, supporting fair trade and local livelihoods.",
  },
  {
    q: "Do you ship across the UK?",
    a: "Yes, we offer fast and secure UK delivery on all orders, including the Luxury Gift Box.",
  },
  {
    q: "What's inside the Luxury Gift Box?",
    a: "Four 8ml roller bottles — Original, Rose, Tea Tree, and Argan & Oud — presented in a black-and-gold keepsake box.",
  },
];

export function FAQ() {
  return (
    <section className="relative bg-obsidian py-28">
      <div className="container max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Questions</p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            Frequently <span className="italic text-shimmer">asked</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-gold-400/12 bg-obsidian-card"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left font-display text-lg text-ivory">
                    {f.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-gold-300 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden px-6 text-sm leading-relaxed text-ivory/60 data-[state=open]:pb-5 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out">
                  {f.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
