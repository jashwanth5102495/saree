import { motion } from 'framer-motion';
import { Users, Target, Globe, Leaf, Heart, Droplets, Shield, Sprout, Zap, FlaskConical } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function AboutUs() {
  const { theme } = useTheme();
  
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to developing products that support sustainable agricultural practices while protecting our planet for future generations.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuous research and development drive our mission to create cutting-edge solutions that meet the evolving needs of modern agriculture.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Every product undergoes rigorous testing to ensure the highest quality standards, providing farmers with reliable and effective solutions.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with farmers, researchers, and agricultural communities to understand needs and develop tailored solutions.'
    }
  ];



  return (
    <div className={`min-h-screen pt-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Pioneering sustainable agriculture through innovative, eco-friendly solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Solutions Section */}
      <section className={`py-32 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Our <span className="text-green-600">Solutions?</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              We provide cutting-edge agricultural solutions that help farmers achieve better yields while maintaining environmental sustainability.
            </p>
          </div>

          {/* First Row - 3 boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {/* Box 1: Organic Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Leaf className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-green-600'
                }`}>
                  Organic Solutions
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Natural fertilizers that enhance soil health and promote sustainable growth.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Water Efficient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Droplets className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-green-600'
                }`}>
                  Water Efficient
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Advanced formulations that reduce water usage while maximizing nutrient uptake.
                </p>
              </div>
            </motion.div>

            {/* Box 3: Eco-Friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Shield className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-green-600'
                }`}>
                  Eco-Friendly
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Environmentally safe products that protect ecosystems and biodiversity.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Second Row - 3 boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Box 4: Natural Biostimulants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Sprout className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-green-600'
                }`}>
                  Natural Biostimulants
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Organic constituents like humic and fulvic acids that enhance plant growth, stress tolerance, and nutrient availability.
                </p>
              </div>
            </motion.div>

            {/* Box 5: Non Ionic Spray Adjuvants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-green-600'
                }`}>
                  Non Ionic Spray Adjuvants
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Highly concentrated wetting agents that improve spray coverage and enhance agrochemical effectiveness.
                </p>
              </div>
            </motion.div>

            {/* Box 6: Micronutrient Mixture Fertilizers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 5 * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border border-gray-200'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <FlaskConical className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white group-hover:text-green-400' : 'text-gray-900 group-hover:text-green-600'
                }`}>
                  Micronutrient Mixture Fertilizers
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  Water-soluble formulations containing chelated microelements for complete plant nutrition and deficiency correction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Our Values</h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              These core values guide every decision we make and every product we develop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white'}`}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                  <p className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deficiency Chart Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Micronutrient Deficiency Guide</h2>
            <p className={`text-xl transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive chart showing plant nutrient deficiency symptoms and solutions
            </p>
          </div>

          <div className="flex justify-center">
            <img 
              src="/uploads/leaf.png" 
              alt="Micronutrient Deficiency Guide"
              className="w-full max-w-4xl h-auto rounded-lg shadow-lg border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              To empower farmers worldwide with innovative, sustainable agricultural solutions 
              that increase productivity, protect the environment, and contribute to global food security 
              while preserving our planet for future generations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}