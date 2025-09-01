/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? "/HBD_BUBUB" : "",
  assetPrefix: isProd ? "/HBD_BUBUB/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
