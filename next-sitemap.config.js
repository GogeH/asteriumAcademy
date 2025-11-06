/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'http://localhost:3000',
  generateRobotsTxt: true,
  exclude: ['/404', '/privacy', '/terms'],
  sitemapSize: 5000,
  // добавляем посты вручную  -  потом удалить
  additionalPaths: async (config) => [
    await config.transform(config, '/post/what-is-bitcoin'),
    await config.transform(
      config,
      '/post/pervaya-vertualnaya-kriptokarta-visa-i-kriptokarta-humo',
    ),
  ],

  // Ниже пример динамического добавления постов и языковых версий, пока закомментирован
  // transform: async (config, url) => {
  //   const posts = await getAllPosts(); // твой сервис получения постов
  //   const urls = posts.map(post => ({
  //     loc: `/post/${post.slug}`,
  //     lastmod: post.date_updated,
  //     changefreq: 'daily',
  //     priority: 0.7,
  //     links: [
  //       { lang: 'en', url: `/en/post/${post.slug}` },
  //       { lang: 'ru', url: `/ru/post/${post.slug}` },
  //       { lang: 'uz', url: `/uz/post/${post.slug}` },
  //     ],
  //   }));
  //   return urls;
  // },
};
