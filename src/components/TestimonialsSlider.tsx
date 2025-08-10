import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'John Martinez',
      role: 'Organic Farm Owner',
      location: 'California, USA',
      rating: 5,
      content: 'Green Plant Technologies has revolutionized our farming operations. The organic fertilizers have increased our crop yield by 40% while maintaining soil health. Absolutely recommend!',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Chen',
      role: 'Agricultural Consultant',
      location: 'Texas, USA',
      rating: 5,
      content: 'As an agricultural consultant, I recommend Green Plant Technologies to all my clients. Their eco-friendly approach and proven results make them the best choice for sustainable farming.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Thompson',
      role: 'Greenhouse Manager',
      location: 'Florida, USA',
      rating: 5,
      content: 'We\'ve been using their liquid fertilizers for our greenhouse operations for 3 years now. The plants are healthier, growth is faster, and our environmental impact is minimal.',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Sustainable Agriculture Specialist',
      location: 'Oregon, USA',
      rating: 5,
      content: 'The innovation and quality of Green Plant Technologies products are unmatched. They\'ve helped us achieve our sustainability goals while improving productivity.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        className="cursor-grab active:cursor-grabbing"
        whileDrag={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-8 h-8 text-green-600 mb-4 mx-auto md:mx-0" />
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonials[currentSlide].content}"
                </p>
                
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonials[currentSlide].name}</h4>
                  <p className="text-green-600 dark:text-green-400 font-medium">{testimonials[currentSlide].role}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonials[currentSlide].location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white dark:bg-slate-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white dark:bg-slate-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-green-600 w-8' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Swipe or drag to navigate • Click dots to jump to specific testimonial
        </p>
      </div>
    </div>
  );
}