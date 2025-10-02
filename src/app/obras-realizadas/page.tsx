'use client';

import SimpleHeader from "@/components/SimpleHeader";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ObrasRealizadas() {
  return (
    <div className="min-h-screen">
      <SimpleHeader />
      
      {/* Conteúdo Principal */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título Principal */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 text-center">
              Obras Realizadas
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Conheça alguns dos nossos projetos de sucesso, onde transformamos desafios em soluções eficientes e seguras.
            </p>
          </motion.div>

          {/* Obra Ford */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                  Demolição do Antigo Prédio da Ford
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8">
                  Porto Alegre/RS
                </p>
                
                {/* Timeline da Obra */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {/* Início */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gold-400 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Início</h3>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/obras/ford/inicio1.jpg"
                        alt="Início da obra Ford"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-600 mt-3">
                      Planejamento e preparação do terreno para início da demolição
                    </p>
                  </motion.div>

                  {/* Meio */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gold-400 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Meio</h3>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/obras/ford/meio1.jpg"
                        alt="Meio da obra Ford"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-600 mt-3">
                      Processo de demolição em andamento com segurança e precisão
                    </p>
                  </motion.div>

                  {/* Fim */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gold-400 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Fim</h3>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/obras/ford/fim1.jpg"
                        alt="Fim da obra Ford"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-600 mt-3">
                      Obra concluída com sucesso e terreno preparado para nova construção
                    </p>
                  </motion.div>
                </div>

                {/* Carrossel de Fotos Adicionais */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Mais Fotos da Obra
                  </h3>
                  
                  {/* Carrossel de Início */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">Fase Inicial</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/inicio1.jpg"
                          alt="Início da obra Ford 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/inicio2.jpg"
                          alt="Início da obra Ford 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/inicio3.jpg"
                          alt="Início da obra Ford 3"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Carrossel de Meio */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">Fase de Execução</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/meio1.jpg"
                          alt="Meio da obra Ford 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/meio2.jpg"
                          alt="Meio da obra Ford 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/meio3.jpg"
                          alt="Meio da obra Ford 3"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/meio4.jpg"
                          alt="Meio da obra Ford 4"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Carrossel de Fim */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">Fase Final</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/fim1.jpg"
                          alt="Fim da obra Ford 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/fim2.jpg"
                          alt="Fim da obra Ford 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/obras/ford/fim3.jpg"
                          alt="Fim da obra Ford 3"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* Seção para Futuras Obras */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mais Obras em Breve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos sempre trabalhando em novos projetos. Em breve, mais obras serão adicionadas ao nosso portfólio.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
