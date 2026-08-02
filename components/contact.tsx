"use client";

import { useState } from "react";
import { MessageCircle, Instagram, Phone, Mail } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "./ui/button";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative bg-obsidian-soft py-28">
      <div className="container grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Get in Touch</p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            Order, ask, or <span className="italic text-shimmer">say hello</span>
          </h2>
          <p className="mt-4 max-w-md text-ivory/60">
            DM or WhatsApp to order directly, or send a message below and we'll reply within one
            business day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/447442512095"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-5 py-3 text-sm text-[#25D366] transition-colors hover:bg-[#25D366]/25"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="https://instagram.com/liquidgold_argan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 px-5 py-3 text-sm text-gold-200 transition-colors hover:border-gold-200"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href="https://tiktok.com/@liquidgoldbybadr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 px-5 py-3 text-sm text-gold-200 transition-colors hover:border-gold-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 5.82c-.9-.6-1.5-1.55-1.7-2.63h-3.02v13.3c0 1.4-1.14 2.53-2.55 2.53a2.54 2.54 0 0 1-2.55-2.53c0-1.4 1.14-2.53 2.55-2.53.28 0 .55.04.8.13V11c-.26-.03-.53-.05-.8-.05-3.15 0-5.7 2.53-5.7 5.65C3.63 19.7 6.18 22.2 9.33 22.2c3.15 0 5.7-2.5 5.7-5.6V9.4a7.6 7.6 0 0 0 4.34 1.35V7.7c-.98 0-1.9-.3-2.67-.85z" />
              </svg>
              TikTok
            </a>
            <a
              href="tel:07442512095"
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 px-5 py-3 text-sm text-gold-200 transition-colors hover:border-gold-200"
            >
              <Phone className="h-4 w-4" /> 07442 512095
            </a>
          </div>

          <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-gold-400/15 grayscale contrast-125 invert-[0.92] hue-rotate-180">
            <iframe
              title="Liquid Gold location"
              src="https://maps.google.com/maps?q=Morocco&t=&z=6&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="card-glass rounded-3xl p-8">
            <div className="grid gap-5">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-ivory/50">Name</label>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-gold-400/20 bg-obsidian px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-ivory/50">Email</label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-gold-400/20 bg-obsidian px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold-300"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-ivory/50">Message</label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-gold-400/20 bg-obsidian px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold-300"
                  placeholder="How can we help?"
                />
              </div>
              <Button type="submit" size="lg" className="mt-2 w-full">
                {sent ? (
                  "Message Sent"
                ) : (
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
              {sent && (
                <p className="text-center text-xs text-gold-300">
                  Thank you — we'll be in touch soon.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
