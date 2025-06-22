import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://vgcxyitssuarpdrjfthb.supabase.co/storage/**')],
  },
};

export default nextConfig;
