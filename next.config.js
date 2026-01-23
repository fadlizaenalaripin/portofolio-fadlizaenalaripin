/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ WAJIB untuk Netlify (static)

  images: {
    unoptimized: true, // ⬅️ WAJIB kalau pakai next/image di static
  },
}

module.exports = nextConfig
