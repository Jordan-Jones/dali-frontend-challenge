/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.typeform.com', 'i.giphy.com', 'imgur.com']
  }
}

module.exports = nextConfig
