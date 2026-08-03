/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Don't fail production builds on lint warnings (e.g. unescaped
    // apostrophes in copy) -- lint issues are still visible in `next dev`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
