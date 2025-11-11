module.exports = {
  siteUrl: 'https://asterium-academy.uz',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/privacy', '/terms', '/admin'],
      },
    ],
    additionalSitemaps: ['https://asterium-academy.uz/sitemap.xml'],
  },
  exclude: ['/404', '/privacy', '/terms', '/admin'],
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,

  alternateRefs: [
    {
      href: 'https://asterium-academy.uz',
      hreflang: 'ru',
    },
    {
      href: 'https://asterium-academy.uz',
      hreflang: 'en',
    },
    {
      href: 'https://asterium-academy.uz',
      hreflang: 'uz',
    },
  ],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
