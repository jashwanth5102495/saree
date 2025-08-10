export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'organic-fertilizer-benefits',
    title: 'The Complete Guide to Organic Fertilizer Benefits for Sustainable Agriculture',
    excerpt: 'Discover how organic fertilizers can transform your farming practices while protecting the environment and improving soil health for generations to come.',
    content: `
      <h2>Why Choose Organic Fertilizers?</h2>
      <p>Organic fertilizers have revolutionized modern agriculture by providing essential nutrients while maintaining environmental sustainability. Unlike synthetic alternatives, organic fertilizers work in harmony with natural soil ecosystems.</p>
      
      <h3>Key Benefits of Organic Fertilizers</h3>
      <ul>
        <li><strong>Soil Health Improvement:</strong> Organic fertilizers enhance soil structure, water retention, and microbial activity</li>
        <li><strong>Long-term Nutrition:</strong> Slow-release nutrients provide consistent feeding throughout the growing season</li>
        <li><strong>Environmental Safety:</strong> No harmful chemical runoff that can contaminate water sources</li>
        <li><strong>Biodiversity Support:</strong> Promotes beneficial insects, earthworms, and soil microorganisms</li>
      </ul>
      
      <h3>Application Best Practices</h3>
      <p>To maximize the benefits of organic fertilizers, timing and application methods are crucial. Apply organic fertilizers 4-6 weeks before planting to allow proper decomposition and nutrient availability.</p>
      
      <h3>Comparing Organic vs. Synthetic</h3>
      <p>While synthetic fertilizers provide immediate results, organic fertilizers build long-term soil fertility. The initial investment in organic fertilizers pays dividends through improved soil health, reduced need for pesticides, and higher-quality produce.</p>
      
      <h3>Getting Started with Organic Fertilizers</h3>
      <p>Begin by testing your soil to understand current nutrient levels. Choose organic fertilizers based on your specific crop needs and soil conditions. Start with a balanced organic fertilizer and adjust based on plant response and soil test results.</p>
    `,
    author: {
      name: 'Dr. Sarah Johnson',
      role: 'Agricultural Scientist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Organic Farming',
    tags: ['organic', 'sustainability', 'soil health', 'fertilizers'],
    publishDate: '2025-01-10',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/1435849/pexels-photo-1435849.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '2',
    slug: 'soil-testing-guide',
    title: 'Soil Testing 101: Understanding Your Garden\'s Foundation',
    excerpt: 'Learn the fundamentals of soil testing and how to interpret results to make informed decisions about fertilizer applications and soil amendments.',
    content: `
      <h2>The Importance of Soil Testing</h2>
      <p>Soil testing is the foundation of successful agriculture and gardening. Understanding your soil's composition, pH level, and nutrient content allows you to make informed decisions about fertilization and soil management.</p>
      
      <h3>What Soil Tests Reveal</h3>
      <ul>
        <li><strong>pH Levels:</strong> Determines nutrient availability and plant health</li>
        <li><strong>Nutrient Content:</strong> NPK levels and micronutrient availability</li>
        <li><strong>Organic Matter:</strong> Soil structure and water retention capacity</li>
        <li><strong>Soil Texture:</strong> Drainage and root penetration characteristics</li>
      </ul>
      
      <h3>When to Test Your Soil</h3>
      <p>Test soil in early spring before planting, or in fall after harvest. Avoid testing immediately after fertilizer application or during extremely wet or dry conditions.</p>
      
      <h3>Interpreting Results</h3>
      <p>Understanding soil test results helps you choose the right fertilizers and amendments. pH levels between 6.0-7.0 are ideal for most crops, while nutrient deficiencies can be addressed with targeted fertilizer applications.</p>
      
      <h3>Taking Action</h3>
      <p>Based on test results, develop a fertilization plan that addresses specific deficiencies while maintaining soil health. Regular testing every 2-3 years ensures optimal growing conditions.</p>
    `,
    author: {
      name: 'Michael Chen',
      role: 'Soil Specialist',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Soil Management',
    tags: ['soil testing', 'pH', 'nutrients', 'gardening'],
    publishDate: '2025-01-08',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '3',
    slug: 'seasonal-fertilizing-calendar',
    title: 'Seasonal Fertilizing Calendar: When and What to Apply',
    excerpt: 'Master the timing of fertilizer applications throughout the year to maximize plant health and productivity in every season.',
    content: `
      <h2>Seasonal Fertilization Strategy</h2>
      <p>Timing is everything in fertilizer application. Plants have different nutritional needs throughout the year, and understanding these cycles is key to optimal growth and productivity.</p>
      
      <h3>Spring Fertilization (March - May)</h3>
      <ul>
        <li>Apply balanced fertilizers to support new growth</li>
        <li>Focus on nitrogen-rich formulations for leafy vegetables</li>
        <li>Prepare soil with organic compost and slow-release fertilizers</li>
        <li>Begin liquid fertilizer applications for container plants</li>
      </ul>
      
      <h3>Summer Fertilization (June - August)</h3>
      <ul>
        <li>Maintain regular feeding with balanced formulations</li>
        <li>Increase potassium for fruit and flower development</li>
        <li>Apply foliar fertilizers during cooler morning hours</li>
        <li>Monitor for nutrient deficiencies in hot weather</li>
      </ul>
      
      <h3>Fall Fertilization (September - November)</h3>
      <ul>
        <li>Reduce nitrogen to prepare plants for dormancy</li>
        <li>Apply phosphorus and potassium for root development</li>
        <li>Fertilize cool-season crops and overseeding lawns</li>
        <li>Prepare soil amendments for winter composting</li>
      </ul>
      
      <h3>Winter Fertilization (December - February)</h3>
      <ul>
        <li>Minimal fertilization for dormant plants</li>
        <li>Indoor plant maintenance with reduced feeding</li>
        <li>Plan and prepare for spring applications</li>
        <li>Store fertilizers properly in climate-controlled areas</li>
      </ul>
    `,
    author: {
      name: 'Emily Rodriguez',
      role: 'Horticultural Expert',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Seasonal Care',
    tags: ['seasonal', 'timing', 'calendar', 'plant care'],
    publishDate: '2025-01-05',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false
  },
  {
    id: '4',
    slug: 'sustainable-farming-practices',
    title: 'Implementing Sustainable Farming Practices for Long-term Success',
    excerpt: 'Explore proven sustainable farming methods that improve productivity while protecting environmental resources for future generations.',
    content: `
      <h2>Building a Sustainable Agriculture System</h2>
      <p>Sustainable farming practices create resilient agricultural systems that maintain productivity while preserving natural resources. These methods benefit both farmers and the environment.</p>
      
      <h3>Core Principles of Sustainable Farming</h3>
      <ul>
        <li><strong>Soil Conservation:</strong> Protect and enhance soil health through organic matter and cover crops</li>
        <li><strong>Water Management:</strong> Efficient irrigation and water conservation techniques</li>
        <li><strong>Biodiversity:</strong> Promote beneficial insects and natural pest control</li>
        <li><strong>Integrated Pest Management:</strong> Reduce chemical pesticide dependence</li>
      </ul>
      
      <h3>Crop Rotation Benefits</h3>
      <p>Rotating crops breaks pest and disease cycles while improving soil nutrition. Legumes fix nitrogen naturally, reducing fertilizer requirements for subsequent crops.</p>
      
      <h3>Cover Crops and Green Manures</h3>
      <p>Cover crops prevent soil erosion, suppress weeds, and add organic matter. Green manures provide natural fertilization when incorporated into the soil.</p>
      
      <h3>Composting and Organic Matter</h3>
      <p>Composting agricultural waste creates valuable soil amendments. Organic matter improves soil structure, water retention, and nutrient availability.</p>
      
      <h3>Economic Benefits</h3>
      <p>Sustainable practices reduce input costs over time while potentially commanding premium prices for environmentally-friendly products.</p>
    `,
    author: {
      name: 'Robert Martinez',
      role: 'Sustainable Agriculture Consultant',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Sustainability',
    tags: ['sustainable', 'environment', 'practices', 'conservation'],
    publishDate: '2025-01-03',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '5',
    slug: 'indoor-plant-fertilization',
    title: 'Indoor Plant Fertilization: A Complete Care Guide',
    excerpt: 'Master the art of feeding houseplants with the right nutrients at the right time for thriving indoor gardens year-round.',
    content: `
      <h2>Feeding Your Indoor Garden</h2>
      <p>Indoor plants have unique nutritional needs compared to their outdoor counterparts. Understanding these requirements ensures healthy, vibrant houseplants throughout the year.</p>
      
      <h3>Understanding Indoor Plant Needs</h3>
      <ul>
        <li>Lower light conditions affect nutrient processing</li>
        <li>Container growing limits root expansion</li>
        <li>Controlled environment requires consistent feeding</li>
        <li>Seasonal adjustments for varying growth rates</li>
      </ul>
      
      <h3>Choosing the Right Fertilizer</h3>
      <p>Liquid fertilizers are ideal for houseplants, providing quick nutrient uptake. Balanced formulations work well for most plants, while specialized fertilizers benefit specific plant types.</p>
      
      <h3>Application Techniques</h3>
      <ul>
        <li>Dilute fertilizers to half strength for sensitive plants</li>
        <li>Apply during active growing season (spring/summer)</li>
        <li>Reduce feeding in winter months</li>
        <li>Water thoroughly after fertilizer application</li>
      </ul>
      
      <h3>Common Mistakes to Avoid</h3>
      <p>Over-fertilization is more harmful than under-fertilization. Signs of over-feeding include brown leaf tips, excessive foliage with poor flowering, and salt buildup on soil surface.</p>
      
      <h3>Seasonal Care Adjustments</h3>
      <p>Reduce fertilization frequency in winter when plant growth slows. Resume regular feeding in spring as daylight hours increase and growth resumes.</p>
    `,
    author: {
      name: 'Lisa Thompson',
      role: 'Indoor Gardening Specialist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Indoor Gardening',
    tags: ['houseplants', 'indoor', 'fertilization', 'care'],
    publishDate: '2025-01-01',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false
  },
  {
    id: '6',
    slug: 'vegetable-garden-nutrition',
    title: 'Vegetable Garden Nutrition: Feed Your Plants, Feed Your Family',
    excerpt: 'Optimize your vegetable garden\'s nutrition program to grow healthier, more nutritious produce for your family table.',
    content: `
      <h2>Growing Nutrient-Dense Vegetables</h2>
      <p>The nutritional quality of your vegetables depends significantly on soil health and fertilization practices. Proper nutrition produces more flavorful, nutrient-dense crops.</p>
      
      <h3>Vegetable-Specific Nutrition</h3>
      <ul>
        <li><strong>Leafy Greens:</strong> High nitrogen for robust leaf production</li>
        <li><strong>Root Vegetables:</strong> Balanced NPK with emphasis on phosphorus</li>
        <li><strong>Fruiting Crops:</strong> Higher potassium for fruit development</li>
        <li><strong>Legumes:</strong> Minimal nitrogen due to natural fixation ability</li>
      </ul>
      
      <h3>Soil Preparation</h3>
      <p>Begin with rich, organic soil amendments. Compost provides slow-release nutrients and improves soil structure, creating an ideal growing environment.</p>
      
      <h3>Feeding Schedule</h3>
      <ul>
        <li>Pre-planting soil preparation with organic matter</li>
        <li>Side-dressing during active growth periods</li>
        <li>Foliar feeding for quick nutrient correction</li>
        <li>End-of-season soil building for next year</li>
      </ul>
      
      <h3>Organic vs. Synthetic Approaches</h3>
      <p>Organic fertilizers build long-term soil health and produce vegetables with better flavor and nutritional profiles. The slow-release nature matches plant uptake patterns.</p>
      
      <h3>Maximizing Harvest Quality</h3>
      <p>Consistent nutrition throughout the growing season prevents stress-related issues like blossom end rot in tomatoes or bitter lettuce leaves.</p>
    `,
    author: {
      name: 'David Kim',
      role: 'Vegetable Production Expert',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    category: 'Vegetable Gardening',
    tags: ['vegetables', 'nutrition', 'harvest', 'quality'],
    publishDate: '2024-12-28',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false
  }
];

export const categories = [
  { id: 'all', name: 'All Posts', count: blogPosts.length },
  { id: 'organic-farming', name: 'Organic Farming', count: blogPosts.filter(p => p.category === 'Organic Farming').length },
  { id: 'soil-management', name: 'Soil Management', count: blogPosts.filter(p => p.category === 'Soil Management').length },
  { id: 'seasonal-care', name: 'Seasonal Care', count: blogPosts.filter(p => p.category === 'Seasonal Care').length },
  { id: 'sustainability', name: 'Sustainability', count: blogPosts.filter(p => p.category === 'Sustainability').length },
  { id: 'indoor-gardening', name: 'Indoor Gardening', count: blogPosts.filter(p => p.category === 'Indoor Gardening').length },
  { id: 'vegetable-gardening', name: 'Vegetable Gardening', count: blogPosts.filter(p => p.category === 'Vegetable Gardening').length }
];