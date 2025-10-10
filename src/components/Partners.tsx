'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: '4t Construtora', logo: '/partners/4t Construtora.jpg' },
  { name: 'AutoGlass', logo: '/partners/autoglass.png' },
  { name: 'Banrisul', logo: '/partners/banrisul.png' },
  { name: 'Bourbon', logo: '/partners/bourbon.png' },
  { name: 'Cabanha Mapocho', logo: '/partners/cabanha mapocho.png' },
  { name: 'CIEE', logo: '/partners/CIEE.png' },
  { name: 'Ford', logo: '/partners/ford.png' },
  { name: 'Governo do Estado RS', logo: '/partners/Governo do estado RS.png' },
  { name: 'Ipiranga', logo: '/partners/ipiranga.png' },
  { name: 'Melnick', logo: '/partners/melnick.png' },
  { name: 'Ministério Público RS', logo: '/partners/Ministério Publico RS.png' },
  { name: 'Ramada', logo: '/partners/ramada.png' },
  { name: 'TGD', logo: '/partners/TGD.png' },
  { name: 'TV Pampa', logo: '/partners/tv pampa.png' },
  { name: 'Unimed', logo: '/partners/unimed.jpg' },
  { name: 'Zafarri', logo: '/partners/zafarri.png' },
];

export default function Partners() {
  // Duplicamos os logos para criar o efeito infinito
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="title-section text-4xl">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-gray-500 mt-4">
            Empresas que confiam em nosso trabalho
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradiente esquerdo */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* Gradiente direito */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Carrossel */}
          <div className="flex">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -1920], // Ajuste esse valor baseado na largura total dos logos
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Duração para completar um ciclo
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: '180px', height: '120px' }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={100}
                      className="object-contain max-w-full max-h-full"
                      unoptimized
                      style={{ filter: 'none' }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Linha decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-12 mx-auto max-w-md"
        />
      </div>
    </section>
  );
}

