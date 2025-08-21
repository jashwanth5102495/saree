import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Droplets, Shield, Sprout, Zap, FlaskConical } from 'lucide-react';
import { ProductShowcase } from '../components/ProductShowcase';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/background.css';

export function Homepage() {
  const [showLightLogo, setShowLightLogo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { theme } = useTheme();

  const carouselImages = [
    '/uploads/7.png',
    '/uploads/8.png',
    '/uploads/9.png'
  ];

  // Auto-rotate carousel every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const features = [
    {
      icon: Leaf,
      title: 'Silk Collections',
      description: 'Premium silk sarees that showcase elegance and traditional craftsmanship'
    },
    {
      icon: Droplets,
      title: 'Designer Wear',
      description: 'Exclusive designer sarees for special occasions and celebrations'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Premium quality materials and expert tailoring for perfect fit'
    },
    {
      icon: Sprout,
      title: 'Custom Designs',
      description: 'Personalized saree designs tailored to your measurements and preferences'
    },
    {
      icon: Zap,
      title: 'Bridal Collection',
      description: 'Stunning bridal sarees for your most special day'
    },
    {
      icon: FlaskConical,
      title: 'Party Wear',
      description: 'Glamorous party wear sarees for social gatherings and events'
    }
  ];



  return (
    <div className="min-h-screen dark:bg-black transition-colors duration-300">
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image - Static for Better Performance */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/uploads/bg.png')`
          }}
        />
        
        {/* Left Side Image Carousel */}
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            className="w-96 h-[32rem] overflow-hidden shadow-2xl"
          >
            <img
              src={carouselImages[currentImageIndex]}
              alt={`Saree Collection ${currentImageIndex + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          

        </div>

        {/* Glassmorphism Container */}
        <div className="relative z-10 min-h-screen backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl m-4">
          
          {/* Centered Logo with Alternating Flip Effect and Company Name - Hidden on Mobile */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
            <div className="flex flex-col items-center justify-center text-center">
              {/* Logo Container - Simplified Animation */}
              <motion.div
                className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-8"
                animate={{ rotateY: [0, 360] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                onAnimationComplete={() => {
                  setShowLightLogo(prev => !prev);
                }}
              >
                <img
                  src={showLightLogo ? '/uploads/light logo.png' : '/uploads/dark logo.png'}
                  alt="Green Plant Technologies"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>
              
              {/* Company Name - Simplified Animation */}
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                  fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '0.05em'
                }}
              >
                SOWRAASHI
              </motion.h1>
              
              {/* Tagline - Simplified Animation */}
              <motion.p
                className="text-white/90 text-base md:text-lg lg:text-xl mt-4 font-medium max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{
                  fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
                }}
              >
                Designer's Boutique & Sarees Collection
              </motion.p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-start justify-between px-6 md:px-8 pt-24 lg:pt-32">
            
            {/* Left Side - Hero Text First (Mobile) / Hero Text (Desktop) */}
            <div className="flex-1 max-w-2xl">
              {/* Mobile: Hero Text First */}
              <div className="lg:hidden">
                {/* Hero text removed */}
              </div>

              {/* Mobile: Logo and Company Name - In the middle */}
              <motion.div 
                className="lg:hidden flex flex-col items-center justify-center text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {/* Logo Container - Mobile */}
                <motion.div
                  className="relative w-32 h-32 mb-6"
                  animate={{ rotateY: [0, 360] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  onAnimationComplete={() => {
                    setShowLightLogo(prev => !prev);
                  }}
                >
                  <img
                    src={showLightLogo ? '/uploads/light logo.png' : '/uploads/dark logo.png'}
                    alt="Green Plant Technologies"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
                
                {/* Company Name - Mobile */}
                <motion.h1
                  className="text-2xl font-bold text-white tracking-wide leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{
                    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                    textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.05em'
                  }}
                >
                  SOWRAASHI
                </motion.h1>
                
                {/* Tagline - Mobile */}
                <motion.p
                  className="text-white/90 text-sm mt-2 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  style={{
                    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  Designer's Boutique & Sarees Collection
                </motion.p>
              </motion.div>

              {/* Mobile: Description and Rating - Last */}
              <div className="lg:hidden">
                {/* Description and rating removed */}
              </div>

              {/* Desktop: Hero Text - Simplified Animations */}
              <div className="hidden lg:block">
                {/* Hero text, description and rating removed */}
              </div>
            </div>

            {/* Right Side - Product Card (Desktop) */}
            <div className="w-full lg:w-96">

              {/* Desktop: Product Card */}
              <motion.div 
                className="hidden lg:block bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <h3 className="text-white text-xl font-semibold mb-4">
                  Featured Collection<br />Silk Sarees
                </h3>
                
                {/* Product Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-1">
                      <Leaf className="w-4 h-4" />
                      <span>Category</span>
                    </div>
                    <div className="text-white font-medium">Silk</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-1">
                      <Shield className="w-4 h-4" />
                      <span>Material</span>
                    </div>
                    <div className="text-white font-medium">Pure Silk</div>
                  </div>
                </div>
                
                {/* Usage Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-1">
                      <Droplets className="w-4 h-4" />
                      <span>Blouse Length</span>
                    </div>
                    <div className="text-white font-medium">24 inches</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-1">
                      <Droplets className="w-4 h-4" />
                      <span>Saree Length</span>
                    </div>
                    <div className="text-white font-medium">5.5 meters</div>
                  </div>
                </div>
                
                {/* Stock Status */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>In Stock</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    to="/workshop"
                    className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors block text-center"
                  >
                    Custom Designer
                  </Link>
                  <Link
                    to="/products"
                    className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center"
                  >
                    Explore Collections
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>




        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Collections?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We provide exquisite saree collections that help you achieve stunning looks 
              while maintaining traditional elegance and modern style.
            </p>
          </motion.div>

          {/* Single Row - Showing 3 Most Important Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[features[1], features[2], features[4]].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to="/products"
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative text-center p-10 rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-black dark:to-gray-900 hover:from-pink-100 hover:to-purple-100 dark:hover:from-gray-900 dark:hover:to-black transition-all duration-300 group shadow-xl hover:shadow-2xl border border-pink-100 dark:border-gray-800 hover:-translate-y-2 cursor-pointer"
                  >
                    <div 
                      className="relative w-20 h-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <ProductShowcase />




    </div>
  );
}