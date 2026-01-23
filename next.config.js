/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // Tambahkan ini agar library Spline diproses dengan benar saat export
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
  
  // Opsional: Jika masih ada isu webpack pada library 3D
  webpack: (config) => {
    config.externals.push({ canvas: 'canvas' });
    return config;
  },
}

module.exports = nextConfig