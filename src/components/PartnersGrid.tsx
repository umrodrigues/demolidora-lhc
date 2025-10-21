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

export default function PartnersGrid() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="title-section text-4xl lg:text-5xl">
            Nossos Parceiros
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Empresas que confiam em nosso trabalho e nos ajudam a entregar excelência em cada projeto
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 lg:p-6 flex items-center justify-center group border border-gray-100 hover:border-gold-200"
            >
              <div className="relative w-full h-20 lg:h-24 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300 filter brightness-100 group-hover:brightness-110 lg:w-32 lg:h-20"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>

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
