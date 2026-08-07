"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "./cart-context";
import { Button } from "./ui/button";
import { buildShopifyCheckoutUrl } from "@/lib/shopify";

export function CartDrawer() {
  const { items, subtotal, isOpen, close, updateQty, remove } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[110] bg-obsidian/80 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="card-glass fixed right-0 top-0 z-[120] flex h-full w-full max-w-md flex-col border-l border-gold-400/15"
          >
            <div className="flex items-center justify-between border-b border-gold-400/10 px-6 py-5">
              <h2 className="font-display text-xl text-ivory">Your Bag</h2>
              <button
                aria-label="Close cart"
                onClick={close}
                className="rounded-full border border-gold-400/30 p-2 text-gold-200 transition-colors hover:border-gold-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <ShoppingBag className="h-8 w-8 text-gold-400/40" />
                <p className="text-ivory/50">Your bag is empty.</p>
                <Button onClick={close} size="default">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
                  {items.map((item) => (
                    <div key={item.product.slug} className="flex gap-4">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-obsidian-soft">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-display text-sm text-ivory">
                              {item.product.name}
                            </p>
                            <p className="mt-0.5 text-xs text-ivory/40">
                              {item.product.size}
                            </p>
                          </div>
                          <button
                            aria-label={`Remove ${item.product.name}`}
                            onClick={() => remove(item.product.slug)}
                            className="text-ivory/30 transition-colors hover:text-wine"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-3 rounded-full border border-gold-400/20 px-2 py-1">
                            <button
                              aria-label="Decrease quantity"
                              onClick={() =>
                                updateQty(item.product.slug, item.qty - 1)
                              }
                              className="text-gold-200 transition-colors hover:text-gold-100"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-4 text-center text-xs text-ivory">
                              {item.qty}
                            </span>
                            <button
                              aria-label="Increase quantity"
                              onClick={() =>
                                updateQty(item.product.slug, item.qty + 1)
                              }
                              className="text-gold-200 transition-colors hover:text-gold-100"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="font-display text-sm text-gold-200">
                            £{(item.product.price * item.qty).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gold-400/10 px-6 py-6">
                  <div className="flex items-center justify-between text-sm text-ivory/60">
                    <span>Subtotal</span>
                    <span className="font-display text-lg text-gold-200">
                      £{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ivory/35">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <Button
                    size="lg"
                    className="mt-5 w-full"
                    onClick={() => {
                      window.location.href = buildShopifyCheckoutUrl(items);
                    }}
                  >
                    Checkout
                  </Button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
