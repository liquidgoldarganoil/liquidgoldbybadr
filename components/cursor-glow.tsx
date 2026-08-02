"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;

    let x = 0,
      y = 0,
      cx = 0,
      cy = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    window.addEventListener("mousemove", move);

    let raf = 0;
    const tick = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.transform = `translate3d(${cx - 200}px, ${cy - 200}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[400px] w-[400px] rounded-full opacity-[0.12] blur-[90px] md:block"
      style={{
        background:
          "radial-gradient(circle, #e8c873 0%, rgba(232,200,115,0) 70%)",
      }}
    />
  );
}
