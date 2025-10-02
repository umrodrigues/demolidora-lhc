'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6"
          >
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src="/logo.png"
                alt="Demolidora LHC"
                width={400}
                height={240}
                className="sm:w-80 lg:w-96 h-60 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
          >
            {/* Menu de navegação */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <div className="flex items-center space-x-4">
                <motion.a
                  href="/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-gray-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Início
                </motion.a>
                <motion.a
                  href="/contato"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-gray-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Contato
                </motion.a>
              </div>
              <div className="flex items-center space-x-4">
                <motion.a
                  href="/politica-privacidade"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-gray-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Política de Privacidade
                </motion.a>
                <motion.a
                  href="/termos-uso"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-gray-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Termos de Uso
                </motion.a>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a 
                href="https://wa.me/555199848887?text=Olá! Gostaria de saber mais sobre os serviços da Demolidora LHC."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-gold-400 transition-colors duration-300"
              >
                (51) 9984-8887
              </a>
            </div>
            
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-small"
            >
              Orçamento
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-4 pt-3 text-center"
        >
          <p className="text-xs text-gray-400 mb-2">
            © 2024 Demolidora LHC. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400">
            Desenvolvido por{' '}
            <a 
              href="https://www.lunaristech.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors duration-300"
            >
              Lunaris Tech
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}