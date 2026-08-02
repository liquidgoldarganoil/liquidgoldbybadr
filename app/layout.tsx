import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/cursor-glow";
import { LoadingScreen } from "@/components/loading-screen";
import { GrainOverlay } from "@/components/grain-overlay";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liquid Gold by Badr | 100% Pure Moroccan Argan Oil",
  description:
    "Liquid Gold — 100% pure, cold-pressed Moroccan argan oil. Ethically sourced and hand-produced by women's cooperatives in Morocco. The luxury your beauty deserves.",
  keywords: [
    "Moroccan argan oil",
    "Liquid Gold",
    "luxury argan oil",
    "pure argan oil UK",
    "rose argan oil",
    "argan oud",
  ],
  openGraph: {
    title: "Liquid Gold by Badr | 100% Pure Moroccan Argan Oil",
    description: "The luxury your beauty deserves.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-obsidian text-ivory font-body antialiased selection:bg-gold-400/30 selection:text-ivory">
        <LoadingScreen />
        <CursorGlow />
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
