import { Droplet, Leaf, FlaskConical, ShieldCheck, Sparkles, HandHeart, Users } from "lucide-react";
import { Reveal } from "./reveal";

const features = [
  { icon: Droplet, title: "100% Pure Moroccan Argan Oil", desc: "A single honest ingredient, nothing more." },
  { icon: Leaf, title: "Cold Pressed", desc: "Extracted slowly, to preserve every nutrient." },
  { icon: FlaskConical, title: "Chemical Free", desc: "No additives, no preservatives, no nasties." },
  { icon: Sparkles, title: "Rich in Vitamin E", desc: "Naturally rich in antioxidants that nourish and protect." },
  { icon: ShieldCheck, title: "Hair, Skin, Beard & Nails", desc: "One oil, suited to every ritual." },
  { icon: HandHeart, title: "Ethically Sourced", desc: "Traceable from Moroccan cooperative to bottle." },
  { icon: Users, title: "Supports Moroccan Women", desc: "Fair trade that funds real livelihoods." },
];

export function WhyChoose() {
  return (
    <section className="relative border-y border-gold-400/10 bg-obsidian-soft py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Why Liquid Gold</p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            Purity is not a claim. <span className="italic text-shimmer">It's a standard.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-gold-400/10 bg-gold-400/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group h-full bg-obsidian-soft p-8 transition-colors duration-500 hover:bg-obsidian-card">
                <f.icon className="h-6 w-6 text-gold-300 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-lg text-ivory">{f.title}</h3>
                <p className="mt-2 text-sm text-ivory/55">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
