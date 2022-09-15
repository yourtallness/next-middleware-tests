/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/config-node',
        destination: '/api/node-config',
      },
      {
        source: '/config-edge',
        destination: '/api/edge-config',
      },
      {
        source: '/config-gssp',
        destination: '/gssp-config',
      },
    ]
  },
}

module.exports = nextConfig
