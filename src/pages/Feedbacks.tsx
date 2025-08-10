import { motion } from 'framer-motion';
import { Play, Star, Users, MessageSquare, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Feedbacks() {
  const { theme } = useTheme();

  const stats = [
    {
      icon: Users,
      number: '2,500+',
      label: 'Happy Farmers',
      description: 'Farmers trust our products'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Average Rating',
      description: 'Based on customer reviews'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Success Rate',
      description: 'Customer satisfaction'
    },
    {
      icon: MessageSquare,
      number: '1,200+',
      label: 'Testimonials',
      description: 'Positive feedback received'
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
            <MessageSquare className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Feedbacks</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Hear what our customers have to say about our products and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <h2 className={`text-4xl font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Customer Stories
                </h2>
              </div>
              <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Watch real farmers share their experiences with Green Plant Technologies products
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/uploads/video-poster.jpg"
              >
                <source src="/uploads/feedback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Our Impact in Numbers
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              These numbers reflect the trust and satisfaction of our farming community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white'}`}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {stat.number}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {stat.label}
                  </h3>
                  <p className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className={`text-4xl font-bold mb-8 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Why Farmers Choose Us
            </h2>
            <div className="space-y-6 text-left">
              <div className={`p-6 rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  🌱 Proven Results
                </h3>
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our customers consistently report improved crop yields, better plant health, and increased profitability. 
                  The video testimonials showcase real farmers who have transformed their agricultural practices with our solutions.
                </p>
              </div>
              
              <div className={`p-6 rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  🤝 Trusted Partnership
                </h3>
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  We don't just sell products; we build lasting relationships with our farming community. 
                  Our technical support team works closely with farmers to ensure optimal results and sustainable practices.
                </p>
              </div>
              
              <div className={`p-6 rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  🔬 Scientific Innovation
                </h3>
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our products are developed through rigorous research and testing. Each formulation is designed to address 
                  specific agricultural challenges while maintaining environmental sustainability and crop safety.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Success Stories</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Experience the difference our products can make in your agricultural journey. 
              Connect with us to learn more about our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Products
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}