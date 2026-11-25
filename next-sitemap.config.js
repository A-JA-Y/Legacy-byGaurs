/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://thelegacybygaurs.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // App Router icon files build as routes; keep them out of the sitemap.
  exclude: ["/apple-icon.png"],


  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};