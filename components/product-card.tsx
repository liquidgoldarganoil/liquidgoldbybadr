"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { StarRating } from "./star-rating";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { useCart } from "./cart-context";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const lowStock = product.stock <= 5;

  function handleAdd() {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-gold-400/10 bg-obsidian-card transition-shadow duration-500 hover:gold-border-glow"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-obsidian-soft">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

        {lowStock && (
          <span className="absolute left-4 top-4 rounded-full bg-wine/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory">
            Only {product.stock} left
          </span>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <button
              aria-label={`Quick view ${product.name}`}
              className="absolute right-4 top-4 flex h-10 w-10 translate-y-[-8px] items-center justify-center rounded-full bg-obsidian/70 text-gold-200 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <Eye className="h-4 w-4" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-obsidian-soft">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.25em] text-gold-300">
                  {product.size}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ivory">{product.name}</h3>
                <div className="mt-2">
                  <StarRating rating={product.rating} reviews={product.reviews} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ivory/70">
                  {product.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.notes.map((n) => (
                    <li
                      key={n}
                      className="rounded-full border border-gold-400/20 px-3 py-1 text-[11px] text-gold-200/80"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-display text-2xl text-gold-200">
                    £{product.price.toFixed(2)}
                  </span>
                  <Button onClick={handleAdd} size="lg">
                    {added ? <Check className="h-4 w-4" /> : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold-300/80">
          {product.tagline}
        </p>
        <h3 className="mt-2 font-display text-xl text-ivory">{product.name}</h3>
        <div className="mt-2">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <span className="font-display text-xl text-gold-200">
              £{product.price.toFixed(2)}
            </span>
            <span className="ml-2 text-xs text-ivory/40">/ {product.size}</span>
          </div>
        </div>

        <Button onClick={handleAdd} className="mt-5 w-full" size="lg">
          {added ? (
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4" /> Added
            </span>
          ) : (
            "Add to Cart"
          )}
        </Button>

        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-ivory/10">
          <div
            className="h-full rounded-full bg-gold-shimmer"
            style={{ width: `${Math.min(100, product.stock * 10)}%` }}
          />
        </div>
        <p className="mt-1.5 text-[11px] text-ivory/40">
          {lowStock ? `Hurry — only ${product.stock} in stock` : "In stock"}
        </p>
      </div>
    </motion.div>
  );
}
