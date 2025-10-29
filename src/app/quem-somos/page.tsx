'use client';

import SimpleHeader from "@/components/SimpleHeader";
import Footer from "@/components/Footer";
import WhyChooseSection from "@/components/WhyChooseSection";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function QuemSomos() {
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
              Quem Somos
            </h1>
          </motion.div>

          {/* História */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                A Demolidora LHC foi fundada em 2014 com a missão de oferecer soluções completas e inovadoras na área de demolição, desmonte e preparação de terrenos. Ao longo desses 10 anos de trajetória, nos consolidamos como referência no mercado, unindo excelência técnica, segurança e respeito ao meio ambiente em cada projeto que realizamos.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Somos especialistas em demolições especiais, cortes estruturais, desmontes residenciais e industriais, terraplanagem, escavação, e reciclagem de resíduos, atendendo a uma ampla gama de setores como construção civil, indústria, infraestrutura e saneamento. O diferencial da LHC é a execução impecável e minuciosa de demolições com planejamento, precisão técnica, rapidez e cuidado com a sustentabilidade do meio ambiente, sempre priorizando a segurança em cada etapa do processo.
              </p>
            </div>
          </motion.div>

          {/* Imagem da Equipe */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/quemsomos.jpg"
                alt="Equipe Demolidora LHC"
                fill
                className="object-cover object-center"
                priority
                quality={90}
              />
            </div>
          </motion.div>

          {/* Equipe */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Equipe LHC
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              Nossa Equipe é composta por profissionais experientes e altamente capacitados, comprometidos em realizar demolições com precisão, segurança e respeito ao meio ambiente. Combinamos experiência e inovação para garantir demolições eficientes, sempre respeitando as normas de segurança e sustentabilidade. Nosso time é o pilar que sustenta a qualidade dos nossos serviços e excelência nos resultados.
            </p>
          </motion.div>

          {/* Abordagem */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Nossa Abordagem
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              Na Demolidora LHC, adotamos uma abordagem meticulosa que combina planejamento detalhado, tecnologia avançada e compromisso com a segurança. Cada projeto é gerido com precisão para garantir resultados eficientes e sustentáveis, sempre respeitando os prazos e minimizando o impacto ambiental.
            </p>
          </motion.div>

          {/* Sustentabilidade */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Compromisso com a Sustentabilidade
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              Além da excelência operacional, temos um compromisso firme com a sustentabilidade. Em todos os nossos projetos, buscamos soluções que minimizem os resíduos gerados e promovam a economia circular. Nossa meta é contribuir para um futuro mais sustentável, tanto no setor de construção civil quanto no meio ambiente em geral.
            </p>
          </motion.div>

          {/* Por que Escolher */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <WhyChooseSection 
              title="Por que Escolher a Demolidora LHC?"
              showTitle={true}
              fullSection={false}
            />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
