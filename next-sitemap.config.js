// next-sitemap.config.js
const fetchBlogSlugs = async () => {
  try {
    const response = await fetch('https://blog.builtflat.co.nz/wp-json/wp/v2/posts?per_page=100');
    const posts = await response.json();
    return posts.map(post => `/blog/${post.slug}`);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
};

const fetchLocationSlugs = async () => {
  try {
    const response = await fetch('https://blog.builtflat.co.nz/wp-json/wp/v2/location?per_page=100');
    const locations = await response.json();
    return locations.map(location => `/locations/${location.slug}`);
  } catch (error) {
    console.error('Error fetching location slugs:', error);
    return [];
  }
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.builtflat.co.nz',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 1,
  exclude: ['/404'],
  additionalPaths: async (config) => {
    const [blogPaths, locationPaths] = await Promise.all([
      fetchBlogSlugs(),
      fetchLocationSlugs()
    ]);

    const allPaths = [...blogPaths, ...locationPaths];
    return allPaths.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
    }));
  },
};