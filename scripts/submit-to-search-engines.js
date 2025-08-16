const { exec } = require('child_process');
const https = require('https');

// Configuration
const SITE_URL = 'https://www.greenplanttechnologies.in';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// Function to ping search engines
function submitSitemap() {
  // Ping Google
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  
  https.get(googlePingUrl, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('Successfully submitted sitemap to Google');
      } else {
        console.log('Google:', data || `Status Code: ${res.statusCode}`);
      }
    });
  }).on('error', (e) => {
    console.error('Error submitting to Google:', e.message);
  });

  // Add other search engines here (Bing, Yandex, etc.)
  // ...
}

// Add to package.json scripts
console.log('\nTo submit your sitemap to search engines, run:');
console.log('1. First, build your project:');
console.log('   npm run build\n');
console.log('2. Then submit your sitemap to Google Search Console:');
console.log(`   Visit: https://search.google.com/search-console`);
console.log('   - Add your property if not already added');
console.log(`   - Go to Sitemaps`);
console.log(`   - Enter 'sitemap.xml' and click 'Submit'\n`);
console.log('3. For automated submissions, you can run this after deployment:');
console.log('   node scripts/submit-to-search-engines.js\n');

// Uncomment the line below to enable automatic submission
// submitSitemap();
