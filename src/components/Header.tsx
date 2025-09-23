'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      <motion.header 
        className="relative z-1000 flex items-center justify-center px-6 h-[300px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.nav 
          className="flex space-x-4 mr-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a 
            href="#servicos" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Serviços
          </motion.a>
          <motion.a 
            href="#servicos" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sobre
          </motion.a>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="Demolidora LHC"
            width={600}
            height={150}
            className="drop-shadow-2xl"
            style={{ 
              objectFit: 'cover',
              width: '500px !important',
              height: '150px !important',
              maxHeight: '150px !important',
            }}
          />
        </motion.div>

        <motion.nav 
          className="flex space-x-4 ml-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a 
            href="#contato" 
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
      </motion.header>

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center "
        style={{ marginTop: '-180px' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="block text-gold-400 drop-shadow-2xl mb-2">
            A DEMOLIÇÃO NÃO É O FIM,
          </span>
          <span className="block text-white drop-shadow-2xl">
            É O PRIMEIRO PASSO PARA UM NOVO COMEÇO
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A DEMOLIDORA LHC ENTREGA MAIS DO QUE UM SERVIÇO, ENTREGA CONFIANÇA E QUALIDADE
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.a 
            href="#contato"
            className="btn-primary text-xl inline-block"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(241, 196, 15, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            SOLICITAR ORÇAMENTO
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
