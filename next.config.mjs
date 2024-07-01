/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i*.imlmediahub.com",
      },
    ],
  },
};

export default nextConfig;
