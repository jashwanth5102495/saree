import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Droplets, Shield, Sprout, Zap, FlaskConical } from 'lucide-react';
import { ProductShowcase } from '../components/ProductShowcase';
import { useTheme } from '../contexts/ThemeContext';
import backgroundImage from '../assets/background.png';
import '../assets/background.css';

export function Homepage() {
  const [showLightLogo, setShowLightLogo] = useState(false);
  const { theme } = useTheme();

  const features = [
    {
      icon: Leaf,
      title: 'Organic Solutions',
      description: 'Natural fertilizers that enhance soil health and promote sustainable growth'
    },
    {
      icon: Droplets,
      title: 'Water Efficient',
      description: 'Advanced formulations that reduce water usage while maximizing nutrient uptake'
    },
    {
      icon: Shield,
      title: 'Eco-Friendly',
      description: 'Environmentally safe products that protect ecosystems and biodiversity'
    },
    {
      icon: Sprout,
      title: 'Natural Biostimulants',
      description: 'Enhance plant growth and resilience with our natural biostimulant formulations'
    },
    {
      icon: Zap,
      title: 'Non Ionic Spray Adjuvants',
      description: 'Improve spray coverage and effectiveness with our specialized adjuvant solutions'
    },
    {
      icon: FlaskConical,
      title: 'Micronutrient Mixture Fertilizers',
      description: 'Complete micronutrient packages to address specific crop deficiencies and boost yields'
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`
          }}
        />
        
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
                Green Plant Technologies
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
                Advanced Agricultural Solutions
              </motion.p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-start justify-between px-6 md:px-8 pt-24 lg:pt-32">
            
            {/* Left Side - Hero Text First (Mobile) / Hero Text (Desktop) */}
            <div className="flex-1 max-w-2xl">
              {/* Mobile: Hero Text First */}
              <div className="lg:hidden">
                <motion.h1 
                  className="text-4xl font-light text-white leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span className="block">Sustainable</span>
                  <span className="block text-white/80">Growth</span>
                  <span className="block">Solutions</span>
                </motion.h1>
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
                  Green Plant Technologies
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
                  Advanced Agricultural Solutions
                </motion.p>
              </motion.div>

              {/* Mobile: Description and Rating - Last */}
              <div className="lg:hidden">
                <motion.p 
                  className="text-white/80 text-base mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Discover premium organic fertilizers and eco-friendly solutions. 
                  Transform your agriculture with innovative, sustainable products.
                </motion.p>
                
                {/* Rating - Simplified */}
                <motion.div 
                  className="flex items-center space-x-2 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="flex items-center space-x-1">
                    <Leaf className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold text-lg">4.8</span>
                  </div>
                  <span className="text-white/60">from 2,500+ farmers</span>
                </motion.div>
              </div>

              {/* Desktop: Hero Text - Simplified Animations */}
              <div className="hidden lg:block">
                <motion.h1 
                  className="text-5xl md:text-7xl font-light text-white leading-tight mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span className="block">Sustainable</span>
                  <span className="block text-white/80">Growth</span>
                  <span className="block">Solutions</span>
                </motion.h1>
                
                <motion.p 
                  className="text-white/80 text-lg mb-8 max-w-md leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Discover premium organic fertilizers and eco-friendly solutions. 
                  Transform your agriculture with innovative, sustainable products.
                </motion.p>
                
                {/* Rating - Simplified */}
                <motion.div 
                  className="flex items-center space-x-2 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="flex items-center space-x-1">
                    <Leaf className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold text-lg">4.8</span>
                  </div>
                  <span className="text-white/60">from 2,500+ farmers</span>
                </motion.div>
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
                  Featured Product<br />GREENGRO
                </h3>
                
                {/* Product Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-1">
                      <Leaf className="w-4 h-4" />
                      <span>Category</span>
                    </div>
                    <div className="text-white font-medium">Organic</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-1">
                      <Shield className="w-4 h-4" />
                      <span>Application</span>
                    </div>
                    <div className="text-white font-medium">All Crops</div>
                  </div>
                </div>
                
                {/* Usage Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-1">
                      <Droplets className="w-4 h-4" />
                      <span>Foliar Spray</span>
                    </div>
                    <div className="text-white font-medium">2-4 ml/litre</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-1">
                      <Droplets className="w-4 h-4" />
                      <span>Drip Irrigation</span>
                    </div>
                    <div className="text-white font-medium">500ml/acre</div>
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
                    to="/products/greengro"
                    className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors block text-center"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/products"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    Explore Products
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>



          {/* Minimal floating elements for better performance */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${30 + i * 15}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "easeInOut"
                }}
              >
                <Leaf className="w-6 h-6 text-green-400/50" />
              </motion.div>
            ))}
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
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Solutions?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge agricultural solutions that help farmers achieve better yields 
              while maintaining environmental sustainability.
            </p>
          </motion.div>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative text-center p-10 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-black dark:to-gray-900 hover:from-green-100 hover:to-emerald-100 dark:hover:from-gray-900 dark:hover:to-black transition-all duration-300 group shadow-xl hover:shadow-2xl border border-green-100 dark:border-gray-800 hover:-translate-y-2 cursor-pointer"
                >
                  <div 
                    className="relative w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.slice(3, 6).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative text-center p-10 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-black dark:to-gray-900 hover:from-green-100 hover:to-emerald-100 dark:hover:from-gray-900 dark:hover:to-black transition-all duration-300 group shadow-xl hover:shadow-2xl border border-green-100 dark:border-gray-800 hover:-translate-y-2 cursor-pointer"
                >
                  <div 
                    className="relative w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
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