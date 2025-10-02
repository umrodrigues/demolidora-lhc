'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFixedHeader(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!mounted) {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videolhc.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-white text-center">
            <div className="text-4xl font-bold mb-4">DEMOLIDORA LHC</div>
            <div className="text-xl">Carregando...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header fixo que aparece no scroll */}
      <motion.div
        className={`lg:hidden fixed top-0 left-0 right-0 z-[100] bg-gray-800 shadow-lg ${
          showFixedHeader ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: showFixedHeader ? 1 : 0, 
          y: showFixedHeader ? 0 : -50 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-4">
          <motion.button
            onClick={toggleMenu}
            className="text-white hover:text-gold-400 transition-colors duration-300 p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
          
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.png"
              alt="Demolidora LHC"
              width={400}
              height={200}
              className="h-32 w-auto object-cover"
            />
          </motion.div>
          
          {/* Espaçador para equilibrar o layout */}
          <div className="w-10"></div>
        </div>
      </motion.div>

      <div className="relative w-full h-screen overflow-hidden" data-header-section>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
          crossOrigin="anonymous"
        >
          <source src="/videolhc.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <motion.header 
        className="relative z-50 flex items-center justify-center px-6 h-[300px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Selo 10 anos - canto superior esquerdo */}
        <motion.div
          className="absolute top-4 left-16 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            src="/selo10anos.png"
            alt="10 anos de experiência"
            width={80}
            height={80}
            className="drop-shadow-lg"
          />
        </motion.div>
        {/* Desktop Navigation - mantém layout original */}
        <motion.nav 
          className="hidden lg:flex space-x-4 mr-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a 
            href="/" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Início
          </motion.a>
          <motion.a 
            href="#servicos" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Serviços
          </motion.a>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Demolidora LHC"
              width={600}
              height={150}
              className="drop-shadow-2xl w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto"
            />
          </motion.a>
        </motion.div>

        <motion.nav 
          className="hidden lg:flex space-x-4 ml-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a 
            href="/contato" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contato
          </motion.a>
          <motion.a 
            href="#contato" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Orçamento
          </motion.a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden absolute top-8 left-4 text-white hover:text-gold-400 transition-colors duration-300 p-2 z-[100]"
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </motion.header>

      {/* Mobile Menu - Full Screen */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 w-full h-full z-[90] bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Botão de fechar */}
          <div className="absolute top-6 right-6 z-[100]">
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-gold-400 transition-colors duration-300 p-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
          
          {/* Menu centralizado */}
          <div className="flex flex-col justify-center items-center h-full px-8">
            <nav className="flex flex-col space-y-6 w-full max-w-xs">
              <motion.a 
                href="/" 
                className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-bold text-3xl py-4 px-6 rounded-xl text-center shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Início
              </motion.a>
              <motion.a 
                href="#servicos" 
                className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-bold text-3xl py-4 px-6 rounded-xl text-center shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Serviços
              </motion.a>
              <motion.a 
                href="/contato" 
                className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-bold text-3xl py-4 px-6 rounded-xl text-center shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Contato
              </motion.a>
              <motion.a 
                href="#contato" 
                className="bg-gold-400 text-white hover:bg-gold-500 transition-all duration-300 font-bold text-3xl py-4 px-6 rounded-xl text-center shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Orçamento
              </motion.a>
            </nav>
          </div>
        </motion.div>
      )}

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center pointer-events-none"
        style={{ marginTop: '-180px' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.a 
            href="#contato"
            className="btn-primary text-xl inline-block pointer-events-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(241, 196, 15, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            SOLICITAR ORÇAMENTO
          </motion.a>
        </motion.div>
      </motion.div>
      </div>
    </>
  );
}