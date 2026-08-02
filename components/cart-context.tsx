"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";

export type CartItem = { product: Product; qty: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  add: (product: Product) => void;
  remove: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "liquid-gold-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load any previously saved cart once, on first mount in the browser
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore corrupted/inaccessible storage
    }
    setHydrated(true);
  }, []);

  // Persist on every change, once hydration has happened
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore write failures (e.g. private browsing)
    }
  }, [items, hydrated]);

  function add(product: Product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.slug === product.slug);
      if (existing) {
        return prev.map((i) =>
          i.product.slug === product.slug ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    setIsOpen(true);
  }

  function remove(slug: string) {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }

  function updateQty(slug: string, qty: number) {
    if (qty <= 0) {
      remove(slug);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.slug === slug ? { ...i, qty } : i))
    );
  }

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.product.price, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        subtotal,
        isOpen,
        add,
        remove,
        updateQty,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
