/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://thelegacybygaurs.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,


  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};