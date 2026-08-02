import { StarRating } from "./star-rating";
import { Reveal } from "./reveal";

const reviews = [
  {
    name: "Sara K.",
    location: "Manchester",
    text: "The rose oil has genuinely changed how my skin looks in the morning. The packaging alone feels like an event.",
  },
  {
    name: "Imran A.",
    location: "London",
    text: "Bought the Argan & Oud for my beard — the scent is incredible and it's not greasy at all. Repeat customer now.",
  },
  {
    name: "Fatima Z.",
    location: "Birmingham",
    text: "Ordered the gift box for my sister's birthday. She said it was the nicest thing anyone's given her in years.",
  },
  {
    name: "Daniel R.",
    location: "Leeds",
    text: "Train hard, recover naturally — that line sold me, but the tea tree oil is what kept me buying it.",
  },
  {
    name: "Yasmin H.",
    location: "Bristol",
    text: "You can tell this is the real thing. It absorbs in seconds and my hair hasn't been this soft in years.",
  },
];

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="relative bg-obsidian py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Loved, Widely</p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            Words from <span className="italic text-shimmer">our community</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-obsidian to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-obsidian to-transparent" />
        <div className="flex w-max animate-marquee gap-6 [animation-duration:50s] hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <div
              key={i}
              className="card-glass w-[320px] shrink-0 rounded-3xl p-7"
            >
              <StarRating rating={5} />
              <p className="mt-4 text-sm leading-relaxed text-ivory/75">“{r.text}”</p>
              <p className="mt-5 font-display text-sm text-gold-200">{r.name}</p>
              <p className="text-xs text-ivory/40">{r.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
