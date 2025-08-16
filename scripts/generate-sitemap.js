const { createGzip } = require('zlib');
const { createWriteStream, existsSync, mkdirSync } = require('fs');
const { resolve } = require('path');
const { SitemapStream } = require('sitemap');

// Ensure the public directory exists
const publicDir = resolve(__dirname, '../public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Define your site URL
const siteUrl = 'https://www.greenplanttechnologies.in';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/products', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/feedbacks', changefreq: 'weekly', priority: 0.7 },
  // Add more static routes here
];

// Function to generate sitemap
async function generateSitemap() {
  try {
    // Set up write stream
    const sitemapPath = resolve(publicDir, 'sitemap.xml');
    const writeStream = createWriteStream(sitemapPath);
    
    // Initialize sitemap
    const sitemap = new SitemapStream({
      hostname: siteUrl,
      lastmodDateOnly: true,
      xmlns: {
        news: false,
        xhtml: false,
        image: false,
        video: false
      }
    });

    // Add routes to sitemap
    routes.forEach(route => {
      sitemap.write({
        url: route.url,
        changefreq: route.changefreq,
        priority: route.priority,
        lastmod: new Date().toISOString()
      });
    });

    // If you have dynamic routes (like products), you would fetch them here
    // Example for dynamic products:
    // const products = await fetchProductsFromYourAPI();
    // products.forEach(product => {
    //   sitemap.write({
    //     url: `/products/${product.slug}`,
    //     changefreq: 'weekly',
    //     priority: 0.8,
    //     lastmod: product.updatedAt || new Date().toISOString()
    //   });
    // });

    // Finalize the sitemap
    sitemap.end();

    // Pipe the sitemap to the file
    sitemap
      .pipe(createGzip())
      .pipe(writeStream)
      .on('finish', () => {
        console.log('Sitemap generated successfully!');
      });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
