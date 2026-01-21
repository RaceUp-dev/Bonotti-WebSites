/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Optimisations pour la production
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
