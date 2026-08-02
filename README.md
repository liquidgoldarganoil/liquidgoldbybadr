# Liquid Gold by Badr — Luxury E-commerce Site

A production-ready Next.js 15 storefront for Liquid Gold's Moroccan argan oil range —
black-and-gold, Aesop/Dior/Tom-Ford-inspired, built with TypeScript, Tailwind CSS,
shadcn/ui primitives, and Framer Motion.

## Getting started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## What's included

- **Hero** — cinematic parallax hero with animated gold particles and gold-shimmer headline
- **Products** — 5 real products (Original, Rose, Tea Tree, Argan & Oud, Luxury Gift Box)
  with hover motion, quick view dialog, add-to-cart, star ratings, and stock indicators
- **Why Choose Liquid Gold** — 7-point trust grid
- **Our Story** — scroll-progress timeline of the harvest, using your cooperative photography
- **Product Benefits** — interactive Hair / Beard / Face / Nails / Body tabs with an
  illustrative before/after slider
- **Ingredients** — animated SVG (argan kernel → cold-pressed oil) plus process steps
- **Gifting** — floating gift box with occasion tags (weddings, Eid, anniversaries, etc.)
- **Testimonials** — auto-scrolling review marquee, pauses on hover
- **Instagram gallery** — masonry grid with a full lightbox
- **FAQ** — animated Radix accordion
- **Contact** — WhatsApp / Instagram / TikTok links, email form, Google Maps embed
- **Footer** — newsletter signup, sitemap, policy links
- Loading screen, ambient cursor glow, film-grain overlay, glassmorphism nav, magnetic
  buttons, gold-shimmer CTAs, and scroll-reveal animations throughout

## Where to edit things

- **Products & prices** → `data/products.ts`
- **Colors / fonts** → `tailwind.config.ts` and the `--font-display` / `--font-body`
  variables set in `app/layout.tsx`
- **Copy** in every section → each file under `components/`
- **Images** → `public/images/` (cropped from your uploaded product photography —
  swap in professional product photography here when available for best results)
- **Contact details** → `components/contact.tsx` and `components/footer.tsx`
  (WhatsApp number, Instagram handle, TikTok handle)
- **Google Maps** → replace the `q=Morocco` query in `components/contact.tsx` with your
  real business address once you have one

## Notes on this build

- The cart is a lightweight in-memory context (`components/cart-context.tsx`) — it
  is not wired to a real checkout/payment provider. Before launch you'll want to
  connect it to Stripe/Shopify or your payment processor of choice.
- The contact form currently only shows a success state client-side — wire its
  `onSubmit` in `components/contact.tsx` to an email service (Resend, Formspree,
  your own API route) to actually receive messages.
- The "before/after" comparisons in the Benefits section are illustrative gradient
  sliders, not photographic before/after claims — swap in real customer photography
  (with consent) if you'd like actual before/after imagery.
- Product images were cropped from your uploaded marketing posters as placeholders.
  For a true £10M-brand feel, commission clean studio product photography (plain
  background, consistent lighting) for each of the 5 products.
