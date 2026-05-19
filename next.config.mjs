/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "desirediv-storage.blr1.cdn.digitaloceanspaces.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
