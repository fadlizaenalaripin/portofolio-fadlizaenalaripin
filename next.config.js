/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Gunakan remotePatterns jika kamu mengambil gambar dari URL luar di masa depan
    domains: ['localhost'],
  },
  // Bagian experimental: { appDir: true } DIHAPUS karena sudah default di Next.js 15
}

module.exports = nextConfig