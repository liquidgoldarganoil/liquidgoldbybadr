"use client";

import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "solid" | "outline";
};

export function MagneticButton({
  children,
  className,
  variant = "solid",
  ...props
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-[transform] duration-300 ease-out",
        variant === "solid"
          ? "bg-gold-shimmer bg-[length:200%_auto] text-obsidian shadow-[0_10px_40px_-10px_rgba(232,200,115,0.5)] hover:animate-shimmer"
          : "border border-gold-400/40 text-ivory hover:border-gold-200 hover:bg-gold-400/5",
        className
      )}
      {...(props as any)}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
