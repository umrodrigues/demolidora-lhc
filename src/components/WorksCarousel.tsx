'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, PanInfo } from 'framer-motion';
import { useState, useEffect, useMemo, useCallback } from 'react';

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

export default function WorksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  // Memoizar o cálculo de itemsPerView para evitar re-renders desnecessários
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    const newItemsPerView = width < 1024 ? 1 : 3;
    setItemsPerView(newItemsPerView);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Memoizar maxIndex para evitar recálculos desnecessários
  const maxIndex = useMemo(() => Math.max(0, works.length - itemsPerView), [itemsPerView]);

  // Auto-play otimizado
  useEffect(() => {
    if (isDragging) return; // Pausar auto-play durante drag
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 8000); // Aumentado para 8s para dar mais tempo de leitura

    return () => clearInterval(interval);
  }, [maxIndex, isDragging]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Gestos de toque para mobile
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      if (offset > 0 || velocity > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

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

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Slide anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="carousel-container">
            <motion.div
              className={`carousel-track flex ${itemsPerView === 1 ? 'gap-0' : 'gap-6'}`}
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ 
                type: "tween", 
                duration: 0.4, 
                ease: "easeInOut" 
              }}
              drag={itemsPerView === 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              dragElastic={0.1}
              dragMomentum={false}
            >
              {works.map((work, index) => (
                <div
                  key={work.id}
                  className="carousel-item"
                  style={{ width: itemsPerView === 1 ? '100%' : `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                >
                  <Link href={`/obras/${work.slug}`}>
                    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer bg-white h-full">
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={work.thumbnail}
                          alt={work.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
                          quality={75}
                          loading={index < 3 ? 'eager' : 'lazy'}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          className="carousel-image group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                          {work.totalImages} fotos
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-sm text-yellow-600 font-semibold">
                            {work.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                          {work.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {work.description}
                        </p>
                        <div className="flex items-center text-yellow-600 font-semibold group-hover:gap-2 transition-all duration-200">
                          Ver detalhes
                          <svg 
                            className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
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
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Próximo slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`carousel-indicator ${
                currentIndex === index ? 'active' : 'inactive'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/obras-realizadas"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver todas as obras
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

