import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Mengaktifkan mode statis
  images: {
    unoptimized: true, // GitHub Pages tidak mendukung optimasi gambar otomatis Next.js
  }
};

export default nextConfig;
