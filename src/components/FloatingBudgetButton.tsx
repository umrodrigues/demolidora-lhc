'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingBudgetButton() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const handleScroll = () => {
      const headerElement = document.querySelector('[data-header-section]');
      if (headerElement) {
        const rect = headerElement.getBoundingClientRect();
        const isHeaderVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(!isHeaderVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    setTimeout(() => {
      const contactSection = document.querySelector('#contato') as HTMLElement;
      
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 100;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      } else {
        const retryContact = document.querySelector('#contato') as HTMLElement;
        if (retryContact) {
          const retryOffset = retryContact.offsetTop - 100;
          window.scrollTo({
            top: retryOffset,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.5
          }}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(241, 196, 15, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 
                     text-white font-bold py-4 px-6 sm:py-5 sm:px-8 rounded-full shadow-2xl 
                     transition-all duration-300 flex items-center gap-3 sm:gap-4
                     min-w-[180px] sm:min-w-[220px] justify-center text-sm sm:text-base
                     border-2 border-gold-300 hover:border-gold-200"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span>Solicitar Orçamento</span>
          </motion.button>

          <motion.div
            className="absolute inset-0 bg-gold-400 rounded-full opacity-40"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0, 0.4]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -inset-1 bg-gold-300 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.2, 0, 0.2]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
