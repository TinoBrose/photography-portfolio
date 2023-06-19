/** @type {import('next').NextConfig} */
const nextConfig = {
  externals: {
    // You can use `false` or other values if you need something strange here,example will output `module.exports = {};`
    "node:path": "{}",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif"],
  },
  env: {
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY:
      "1KoLD_aqlZuQ9NDCco9XdynUoTOc9GARl0OnLTe95sQ",
    NEXT_PUBLIC_UNSPLASH_SECRET_KEY:
      "JMSHEc_gtA47UcYo3qkXlE21KrmmOwjXxqWzquUDDnw",
  },
};
