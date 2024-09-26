// next-sitemap.config.js
const fetchBlogSlugs = async () => {
  try {
    const response = await fetch('https://blog.builtflat.co.nz/wp-json/wp/v2/posts');
    const posts = await response.json();
    return posts.map(post => `/blog/${post.slug}`);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://builtflat.co.nz',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 1,
  exclude: ['/404'],
  additionalPaths: async (config) => {
    const dynamicPaths = await fetchBlogSlugs();
    return dynamicPaths.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
    }));
  },
};