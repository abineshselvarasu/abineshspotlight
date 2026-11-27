import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'abineshspotlight.online',
          },
        ],
        destination: 'https://www.abineshspotlight.online/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
