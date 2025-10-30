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

          {/* Carrossel */}
          <div className="flex">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
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

