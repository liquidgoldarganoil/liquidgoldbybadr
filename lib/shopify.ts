import type { CartItem } from "@/components/cart-context";

// Your Shopify store's .myshopify.com domain — update this if the store
// handle ever changes.
const SHOPIFY_STORE_DOMAIN = "liquid-gold-9423.myshopify.com";

// Builds a Shopify "cart permalink" that adds every line item straight into
// a real Shopify cart and lands the customer on Shopify's own secure
// checkout. Docs: https://help.shopify.com/en/manual/products/details/cart-permalinks
export function buildShopifyCheckoutUrl(items: CartItem[]): string {
  const line = items
    .map((i) => `${i.product.shopifyVariantId}:${i.qty}`)
    .join(",");
  return `https://${SHOPIFY_STORE_DOMAIN}/cart/${line}`;
}
