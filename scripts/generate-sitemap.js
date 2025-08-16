import { writeFile, mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Get the current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const publicDir = resolve(__dirname, '../public');
const siteUrl = 'https://www.greenplanttechnologies.in';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/products', changefreq: 'weekly', priority: '0.9' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/contact', changefreq: 'monthly', priority: '0.8' },
  { url: '/feedbacks', changefreq: 'weekly', priority: '0.7' },
];

// Generate XML for a single URL
function generateUrlEntry({ url, lastmod, changefreq, priority }) {
  return `
  <url>
    <loc>${siteUrl}${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority ? `<priority>${priority}</priority>` : ''}
  </url>`;
}

// Generate the complete sitemap
function generateSitemap() {
  const now = new Date().toISOString();
  const urls = routes.map(route => 
    generateUrlEntry({ ...route, lastmod: now })
  ).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
}

// Main function
async function main() {
  try {
    const sitemap = generateSitemap();
    const sitemapPath = resolve(publicDir, 'sitemap.xml');
    
    // Ensure public directory exists
    await mkdir(publicDir, { recursive: true });
    
    // Write the sitemap file
    await writeFile(sitemapPath, sitemap, 'utf8');
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
