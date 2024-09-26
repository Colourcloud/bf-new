// next-sitemap.config.js

const fetchBlogSlugs = async () => {
  // Replace this with your API fetch logic (e.g., fetching WordPress slugs)
  const response = await fetch('https://blog.builtflat.co.nz/wp-json/wp/v2');
  const posts = await response.json();
  return posts.map(post => `/blog/${post.slug}`);
};

/** @type {import('next-sitemap').IConfig} */
const config = async () => {
  const dynamicPaths = await fetchBlogSlugs();

  return {
    siteUrl: 'https://builtflat.co.nz',  // Replace with your actual site URL
    generateRobotsTxt: true,             // Generates a robots.txt file
    changefreq: 'daily',
    priority: 1,
    exclude: ['/404'],
    additionalPaths: async (config) => {
      return dynamicPaths.map((path) => ({
        loc: path,         // The dynamic URL path
        changefreq: 'weekly', // Frequency of change for this specific page
        priority: 0.7,     // Priority for these pages
      }));
    },
  };
};

module.exports = config;
