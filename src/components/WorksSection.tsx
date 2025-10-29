'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const works = [
  {
    id: 'ford',
    slug: '1-ford',
    title: 'Ford',
    description: 'Demolição e terraplenagem completa do projeto Ford',
    thumbnail: '/obras/1 - Ford/inicio1.jpg',
    totalImages: 13,
    category: 'Demolição e Terraplenagem'
  },
  {
    id: 'unimed',
    slug: '2-unimed',
    title: 'Unimed',
    description: 'Projeto de escavação e preparação de terreno para Unimed',
    thumbnail: '/obras/2 - Unimed/01.jpg',
    totalImages: 6,
    category: 'Escavação'
  },
  {
    id: 'ciee',
    slug: '3-ciee',
    title: 'CIEE',
    description: 'Demolição controlada e remoção de estruturas do projeto CIEE',
    thumbnail: '/obras/3 - CIEE/01.jpg',
    totalImages: 5,
    category: 'Demolição'
  },
  {
    id: 'marcelo-gama',
    slug: '4-marcelo-gama',
    title: 'Marcelo Gama',
    description: 'Terraplenagem e preparação de terreno para construção',
    thumbnail: '/obras/4 - Marcelo Gama/01.jpg',
    totalImages: 12,
    category: 'Terraplenagem'
  },
  {
    id: 'arambare',
    slug: '5-arambare',
    title: 'Arambaré',
    description: 'Projeto de escavação e movimentação de terra em Arambaré',
    thumbnail: '/obras/5 - Arambare/01.jpg',
    totalImages: 9,
    category: 'Escavação'
  },
  {
    id: 'machopo',
    slug: '6-machopo',
    title: 'Machopo',
    description: 'Demolição e preparação de área para novo empreendimento',
    thumbnail: '/obras/6 - Machopo/01.jpg',
    totalImages: 5,
    category: 'Demolição'
  },
  {
    id: 'estrutura',
    slug: '7-estrutura',
    title: 'Estrutura',
    description: 'Demolição de estruturas complexas com segurança',
    thumbnail: '/obras/7 - Estrutura/01.jpg',
    totalImages: 4,
    category: 'Demolição'
  }
];

export default function WorksSection() {
  return (
    <section id="obras" className="section-padding bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="title-main">
            Obras Realizadas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/obras/${work.slug}`}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={work.thumbnail}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {work.totalImages} fotos
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-yellow-600 font-semibold">
                        {work.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {work.description}
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold group-hover:gap-2 transition-all">
                      Ver detalhes
                      <svg 
                        className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

