/** @type {import('next').NextConfig} */

const imageHostnames = JSON.parse(process.env.NEXT_PUBLIC_IMAGE_HOSTNAMES);
const nextConfig = {
  images: {
    domains: [...imageHostnames],
  },
};

export default nextConfig;
