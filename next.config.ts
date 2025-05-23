import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://tdckhawtang.blob.core.windows.net/**")],
  },
  output: "standalone",
};

export default nextConfig;
