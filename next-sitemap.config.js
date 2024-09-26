// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://builtflat.co.nz', // Replace with your site URL
    generateRobotsTxt: true,  // (optional) Generate a robots.txt file
    exclude: ['/404'],        // Exclude specific pages or paths
    changefreq: 'daily',
    priority: 0.7,
  };
  
  module.exports = config;
  