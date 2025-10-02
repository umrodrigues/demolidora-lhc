'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SimpleHeader() {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
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
                width={200}
                height={160}
                className="drop-shadow-lg"
                style={{ 
                  objectFit: 'cover',
                  width: '200px',
                  height: '60px',
                }}
              />
            </motion.a>
          </motion.div>

          {/* Menu de navegação */}
          <motion.nav 
            className="hidden md:flex items-center space-x-6"
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

          {/* Menu mobile */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="text-white hover:text-gold-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
