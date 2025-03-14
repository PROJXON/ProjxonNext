// generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Static pages that are part of your site
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'weekly' },
  { url: '/contact', priority: '0.7', changefreq: 'weekly' },
  { url: '/partnership', priority: '0.7', changefreq: 'weekly' },
  { url: '/careers', priority: '0.7', changefreq: 'weekly' },
  { url: '/research', priority: '0.8', changefreq: 'daily' }
];

// You can dynamically get your blog posts from a CMS or database here
const blogPosts = [
  { id: 'from-overwhelmed-to-empowered-how-projxons-internship-changed-my-life', lastModified: '2025-03-03' }
  // Add more blog posts here
];

// Generate sitemap XML
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Add static pages
staticPages.forEach(page => {
  sitemap += '  <url>\n';
  sitemap += `    <loc>https://www.projxon.com${page.url}</loc>\n`;
  sitemap += `    <lastmod>2025-03-03</lastmod>\n`;  // You can dynamically update lastmod based on your updates
  sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
  sitemap += `    <priority>${page.priority}</priority>\n`;
  sitemap += '  </url>\n';
});

// Add blog posts
blogPosts.forEach(post => {
  sitemap += '  <url>\n';
  sitemap += `    <loc>https://www.projxon.com/research/${post.id}</loc>\n`;
  sitemap += `    <lastmod>${post.lastModified}</lastmod>\n`;
  sitemap += '    <changefreq>weekly</changefreq>\n';
  sitemap += '    <priority>0.6</priority>\n';
  sitemap += '  </url>\n';
});

sitemap += '</urlset>';

// Write sitemap to public directory
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
