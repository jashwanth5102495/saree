import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigationLinks = [
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  // Force dark styling on homepage
  const isHomepage = location.pathname === '/';
  const useBlackNav = isHomepage || theme === 'dark';

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <motion.div
        className={`transition-all duration-300 rounded-2xl px-6 py-4 ${isHomepage
          ? 'bg-black/90 backdrop-blur-md shadow-xl'
          : theme === 'light'
            ? 'bg-black/90 backdrop-blur-md shadow-xl'
            : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={isHomepage ? '/uploads/dark logo.png' : (theme === 'light' ? '/uploads/dark logo.png' : '/uploads/light logo.png')}
              alt="Green Plant Technologies"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-lg text-white">
              Green Plant Technologies
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* Home Icon */}
            <Link
              to="/"
              className={`relative p-2 rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/10 ${location.pathname === '/' ? 'text-white bg-white/10' : ''}`}
              title="Home"
            >
              <Home className="w-5 h-5" />
              {location.pathname === '/' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                  layoutId="activeTab"
                />
              )}
            </Link>

            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-medium transition-all duration-200 text-gray-300 hover:text-white ${location.pathname === link.to ? 'text-white' : ''}`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between max-w-7xl mx-auto px-4">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img
              src={isHomepage ? '/uploads/dark logo.png' : (theme === 'light' ? '/uploads/dark logo.png' : '/uploads/light logo.png')}
              alt="Green Plant Technologies"
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold text-sm text-white whitespace-nowrap">GPT</span>
          </Link>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-600 mt-4 pt-4"
            >
              <div className="space-y-2">
                {/* Mobile Home Link */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                >
                  <Link
                    to="/"
                    className={`flex items-center space-x-2 px-3 py-2 font-medium transition-all duration-200 text-gray-300 hover:text-white ${location.pathname === '/' ? 'text-white' : ''}`}
                  >
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                </motion.div>

                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      className={`block px-3 py-2 font-medium transition-all duration-200 text-gray-300 hover:text-white ${location.pathname === link.to ? 'text-white' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}