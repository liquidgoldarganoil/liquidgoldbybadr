"use client";

import { useState } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const columns = [
  {
    title: "Shop",
    links: ["Original Argan Oil", "Rose Argan Oil", "Tea Tree Argan Oil", "Argan & Oud", "Luxury Gift Box"],
  },
  {
    title: "Company",
    links: ["Our Story", "Sustainability", "Wholesale", "Contact"],
  },
  {
    title: "Support",
    links: ["Shipping Policy", "Returns & Refunds", "Privacy Policy", "Terms of Service"],
  },
];

export function Footer() {
  const [joined, setJoined] = useState(false);

  return (
    <footer className="relative border-t border-gold-400/10 bg-obsidian pt-20">
      <div className="container">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-ivory">
              Liquid <span className="text-shimmer italic">Gold</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-ivory/50">
              100% pure, cold-pressed Moroccan argan oil. Ethically sourced, hand-produced by
              women's cooperatives in Morocco.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/liquidgold_argan"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/25 text-gold-200 transition-colors hover:border-gold-200"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/447442512095"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/25 text-gold-200 transition-colors hover:border-gold-200"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs uppercase tracking-[0.25em] text-gold-300">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ivory/50 transition-colors hover:text-gold-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gold-400/10 py-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <p className="font-display text-lg text-ivory">Join the inner circle</p>
              <p className="mt-1 text-sm text-ivory/45">
                New blends, founder's pricing, and early access to gift sets.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
              className="flex w-full max-w-sm gap-2"
            >
              <input
                required
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-full border border-gold-400/20 bg-obsidian-soft px-5 py-3 text-sm text-ivory outline-none focus:border-gold-300"
              />
              <Button type="submit" size="default">
                {joined ? "Joined" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-gold-400/10 py-8 text-xs text-ivory/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Liquid Gold by Badr. All rights reserved.</p>
          <p>Pure by nature. Powerful by purpose.</p>
        </div>
      </div>
    </footer>
  );
}
