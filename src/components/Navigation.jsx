import { useState, useEffect } from "react";
import { Briefcase, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation({ onNavigate, showPostJobsButton = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  
  const handleNavigation = (page) => {
    setIsMenuOpen(false);
    onNavigate(page);
  };



  return (
    <>
     
      <motion.nav 
        className="bg-white shadow-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            
            <button 
              onClick={() => handleNavigation('home')} 
              className="flex items-center gap-2 z-50"
              aria-label="Go to homepage"
            >
              <Briefcase className="text-blue-600" size={28} />
              <span className="text-2xl font-bold text-gray-900">JobSearch</span>
            </button>

            
            {showPostJobsButton && (
              <div className="hidden md:flex gap-4 items-center">
                <button
                  onClick={() => handleNavigation('register')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Post Jobs
                </button>
              </div>
            )}

            
            {showPostJobsButton && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
               
                {isMenuOpen ? (
                  <X className="text-gray-900" size={24} />
                ) : (
                  <Menu className="text-gray-900" size={24} />
                )}
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      
      <AnimatePresence>
        {isMenuOpen && (
          <>
           
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

           
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-16 right-0 bottom-0 w-64 bg-white shadow-2xl z-40 md:hidden"
            >
              
              <div className="flex flex-col p-6 space-y-4">

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => handleNavigation('register')}
                  className="text-left bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                >
                  Post Jobs
                </motion.button>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}