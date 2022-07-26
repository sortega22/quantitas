/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = {
  nextConfig,
  redirects: async () => [
    {
      source: "/",
      destination: "/home",
      permanent: false,
    },
  ],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
