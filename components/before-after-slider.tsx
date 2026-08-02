"use client";

import { useRef, useState } from "react";

export function BeforeAfterSlider({
  beforeLabel = "Before",
  afterLabel = "With Liquid Gold",
  fromColor,
  toColor,
}: {
  beforeLabel?: string;
  afterLabel?: string;
  fromColor: string;
  toColor: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  function update(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-gold-400/15"
      onMouseMove={(e) => e.buttons === 1 && update(e.clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      {/* "Before" texture — muted, dry */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${fromColor}22, #07060a)`,
        }}
      >
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:6px_6px]" />
        <span className="absolute bottom-3 left-3 rounded-full bg-obsidian/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory/60">
          {beforeLabel}
        </span>
      </div>

      {/* "After" texture — luminous, smooth */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
          background: `linear-gradient(135deg, ${toColor}55, #1a140a)`,
        }}
      >
        <div className="absolute inset-0 opacity-70 [background:linear-gradient(120deg,transparent_35%,rgba(232,200,115,0.25)_50%,transparent_65%)]" />
        <span className="absolute bottom-3 right-3 rounded-full bg-gold-400/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-obsidian">
          {afterLabel}
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 z-10 h-full w-[2px] bg-gold-200"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-200 bg-obsidian text-gold-200 shadow-lg">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 2L1 7L4 12M10 2L13 7L10 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <input
        aria-label="Compare before and after"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
