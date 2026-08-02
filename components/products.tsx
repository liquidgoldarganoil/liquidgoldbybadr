import { products } from "@/data/products";
import { ProductCard } from "./product-card";
import { Reveal } from "./reveal";

export function Products() {
  return (
    <section id="products" className="relative bg-obsidian py-28">
      <div className="pattern-zellige pattern-fade-mask absolute inset-0 opacity-[0.06]" />
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300">The Collection</p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            Five ways to <span className="italic text-shimmer">wear</span> the gold
          </h2>
          <p className="mt-4 text-ivory/60">
            Hand-poured in small batches. Cold-pressed from Moroccan argan kernels, without
            additives, fillers, or shortcuts.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
