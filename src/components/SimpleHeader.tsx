'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function SimpleHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gray-800 shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Layout Desktop */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
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
                  width={380}
                  height={304}
                  className="drop-shadow-lg"
                  style={{ 
                    objectFit: 'cover',
                    width: '380px',
                    height: '114px',
                  }}
                />
              </motion.a>
            </motion.div>

            {/* Menu de navegação Desktop */}
            <motion.nav 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a 
                href="/" 
                className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-lg px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Início
              </motion.a>
              <motion.a 
                href="/#servicos" 
                className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-lg px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Serviços
              </motion.a>
              <motion.a 
                href="/quem-somos" 
                className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-lg px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quem Somos
              </motion.a>
              <motion.a 
                href="/obras-realizadas" 
                className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-lg px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Obras Realizadas
              </motion.a>
              <motion.a 
                href="/contato" 
                className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-lg px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contato
              </motion.a>
              <motion.a 
                href="/#contato" 
                className="bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Orçamento
              </motion.a>
            </motion.nav>
          </div>

          {/* Layout Mobile */}
          <div className="md:hidden flex items-center justify-between">
            {/* Menu Hambúrguer na Esquerda */}
            <motion.button
              onClick={toggleMenu}
              className="text-white hover:text-gold-400 transition-colors duration-300 p-2 z-[100]"
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

            {/* Logo Centralizado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex justify-center"
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
                  width={300}
                  height={90}
                  className="drop-shadow-lg"
                  style={{ 
                    objectFit: 'cover',
                    width: '300px',
                    height: '90px',
                  }}
                />
              </motion.a>
            </motion.div>

            {/* Espaçador para equilibrar o layout */}
            <div className="w-10"></div>
          </div>
        </div>
      </header>

      {/* Menu Mobile - Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 right-0 z-[90] bg-white shadow-xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header do menu com botão de fechar */}
            <div className="flex items-center justify-between px-4 py-4 bg-gray-800">
              <span className="text-white font-bold text-lg">Menu</span>
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gold-400 transition-colors duration-300 p-2"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            
            {/* Menu items */}
            <div className="bg-white">
              <nav className="flex flex-col">
                <motion.a 
                  href="/" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Início
                </motion.a>
                <motion.a 
                  href="/#servicos" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Serviços
                </motion.a>
                <motion.a 
                  href="/quem-somos" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Quem Somos
                </motion.a>
                <motion.a 
                  href="/parceiros" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Parceiros
                </motion.a>
                <motion.a 
                  href="/obras-realizadas" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Obras Realizadas
                </motion.a>
                <motion.a 
                  href="/contato" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contato
                </motion.a>
                <motion.a 
                  href="/#contato" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Orçamento
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
