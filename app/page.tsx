import { CartProvider } from "@/components/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { MarqueeBar } from "@/components/marquee-bar";
import { Products } from "@/components/products";
import { WhyChoose } from "@/components/why-choose";
import { Story } from "@/components/story";
import { Benefits } from "@/components/benefits";
import { Ingredients } from "@/components/ingredients";
import { GiftBoxes } from "@/components/gift-boxes";
import { Testimonials } from "@/components/testimonials";
import { InstagramGallery } from "@/components/instagram-gallery";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <CartProvider>
      <Nav />
      <CartDrawer />
      <main>
        <Hero />
        <MarqueeBar />
        <Products />
        <WhyChoose />
        <Story />
        <Benefits />
        <Ingredients />
        <GiftBoxes />
        <Testimonials />
        <InstagramGallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </CartProvider>
  );
}
