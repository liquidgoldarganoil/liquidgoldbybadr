"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "./cart-context";

const links = [
  { href: "#products", label: "Shop" },
  { href: "#story", label: "Our Story" },
  { href: "#benefits", label: "Benefits" },
  { href: "#gifting", label: "Gifting" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count: cartCount, open: openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between rounded-full transition-all duration-500",
          scrolled && "card-glass px-6 py-2"
        )}
      >
        <a href="#top" className="font-display text-xl tracking-wide text-ivory">
          Liquid <span className="text-shimmer italic">Gold</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-gold-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="View cart"
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 text-gold-200 transition-colors hover:border-gold-200"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-400 text-[10px] font-semibold text-obsidian">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 text-gold-200 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="container mt-3 overflow-hidden rounded-3xl lg:hidden"
          >
            <div className="card-glass flex flex-col gap-1 p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] text-ivory/80 transition-colors hover:bg-gold-400/10 hover:text-gold-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
