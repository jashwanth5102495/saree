import { motion } from 'framer-motion';
import { Users, Target, Globe, Leaf, Heart } from 'lucide-react';
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