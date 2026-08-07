export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  size: string;
  image: string;
  accent: string; // hex used for the glow/badge specific to this bottle
  notes: string[];
  rating: number;
  reviews: number;
  stock: number;
  shopifyVariantId: string;
};

export const products: Product[] = [
  {
    slug: "original-argan",
    name: "Original Argan Oil",
    tagline: "Pure & natural daily care",
    description:
      "Our founding elixir — cold-pressed, unrefined Moroccan argan oil in its most honest form. A single ingredient, worked by hand, for skin and hair that ask for nothing else.",
    price: 29.99,
    size: "30ml",
    image: "/images/product-original.jpg",
    accent: "#c9a24b",
    notes: ["Vitamin E", "Cold-pressed", "Unrefined"],
    rating: 5,
    reviews: 128,
    stock: 6,
    shopifyVariantId: "58064278225227",
  },
  {
    slug: "rose-argan",
    name: "Rose Argan Oil",
    tagline: "Nourishing & radiant care",
    description:
      "Argan oil infused with Moroccan rose for a veil of radiance. Softens fine lines, evens tone, and leaves the faintest trace of petals on the skin.",
    price: 29.99,
    size: "30ml",
    image: "/images/product-rose.jpg",
    accent: "#a8394a",
    notes: ["Moroccan rose", "Radiance", "Antioxidants"],
    rating: 5,
    reviews: 94,
    stock: 4,
    shopifyVariantId: "58064624124235",
  },
  {
    slug: "tea-tree-argan",
    name: "Tea Tree Argan Oil",
    tagline: "Purifying & revitalising care",
    description:
      "A clarifying blend for skin and scalp that needs balance. Tea tree's crisp purity meets argan's deep nourishment — revitalising without stripping.",
    price: 29.99,
    size: "30ml",
    image: "/images/product-tea-tree.jpg",
    accent: "#5f7a4f",
    notes: ["Tea tree", "Clarifying", "Scalp care"],
    rating: 5,
    reviews: 76,
    stock: 9,
    shopifyVariantId: "58064645423435",
  },
  {
    slug: "argan-oud",
    name: "Argan & Oud",
    tagline: "Deeply nourishing & luxurious care",
    description:
      "Our most opulent pairing. Rare oud meets pure argan for a heavier, richer oil built for beards, hands, and skin that has earned real recovery.",
    price: 34.99,
    size: "30ml",
    image: "/images/product-argan-oud.jpg",
    accent: "#8a5a2b",
    notes: ["Rare oud", "Deep nourishment", "For beard & body"],
    rating: 5,
    reviews: 61,
    stock: 3,
    shopifyVariantId: "58064917692747",
  },
  {
    slug: "luxury-gift-box",
    name: "The Luxury Gift Box",
    tagline: "All four, in 8ml roller bottles",
    description:
      "Every Liquid Gold blend, hand-poured into 8ml roller bottles and set in a black-and-gold keepsake box. The complete ritual, ready to give.",
    price: 30.0,
    size: "4 × 8ml",
    image: "/images/gift-box-hero.jpeg",
    accent: "#e8c873",
    notes: ["All 4 blends", "Gift-ready box", "Roller applicator"],
    rating: 5,
    reviews: 43,
    stock: 5,
    shopifyVariantId: "58064959897931",
  },
];
