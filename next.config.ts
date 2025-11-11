import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value:
  //     "default-src 'self'; " +
  //     "img-src 'self' data: blob: https:; " +
  //     "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com; " +
  //     "style-src 'self' 'unsafe-inline'; " +
  //     "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com; " +
  //     "object-src 'none'; " +
  //     "base-uri 'self';",
  // },
];

const nextConfig: NextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.json',
    ignoreBuildErrors: false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.asterium.uz',
      },
      {
        protocol: 'https',
        hostname: '**.asterium.uz',
      },
    ],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizeCss: true,
  },

  async rewrites() {
    return [
      {
        source: '/api/cms/:path*',
        destination: `https://cms.asterium.uz/:path*?access_token=BmM_BEzghdi0Cd9mZ2lKenn83Kvm3tJg`,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://asterium-academy.uz',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
