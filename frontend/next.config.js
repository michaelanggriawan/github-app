/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  env: {
    API_URL: 'https://github-app-production-ecec.up.railway.app/v1/',
  },
}

module.exports = nextConfig
