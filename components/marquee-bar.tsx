const items = [
  "100% Pure Moroccan Argan Oil",
  "Cold-Pressed",
  "Chemical Free",
  "Rich in Vitamin E",
  "Ethically Sourced",
  "Supports Moroccan Women",
];

export function MarqueeBar() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold-400/10 bg-obsidian-soft py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ivory/50"
          >
            {item}
            <span className="text-gold-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
