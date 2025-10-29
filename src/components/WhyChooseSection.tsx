'use client';

import { motion } from 'framer-motion';

const features = [
  {
    id: 'experience',
    title: 'Experiência e Credibilidade',
    description: 'Com uma década de atuação, a LHC Demolidora se destaca pela confiança e excelência técnica. Cada projeto é conduzido com segurança, planejamento e foco em resultados, consolidando a empresa como referência no setor.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  },
  {
    id: 'equipment',
    title: 'Estrutura e Tecnologia',
    description: 'A LHC dispõe de equipamentos modernos, equipe própria e frota completa, garantindo eficiência e controle total sobre cada etapa da obra. Isso reduz custos e aumenta a qualidade da execução.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 'commitment',
    title: 'Comprometimento com o Cliente',
    description: 'A LHC não entrega apenas demolição — entrega soluções completas. Prazos cumpridos, comunicação clara e atenção aos detalhes fazem parte do DNA da empresa.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 'environment',
    title: 'Responsabilidade Ambiental',
    description: 'Com foco na demolição sustentável, a LHC prioriza o reaproveitamento de materiais e o descarte correto dos resíduos. Assim, cada obra contribui para um ciclo de construção mais consciente e responsável com o meio ambiente.',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  }
];

interface WhyChooseSectionProps {
  title?: string;
  showTitle?: boolean;
  containerClassName?: string;
  wrapperClassName?: string;
  fullSection?: boolean;
}

export default function WhyChooseSection({ 
  title = 'Por que escolher a Demolidora LHC?',
  showTitle = true,
  containerClassName = '',
  wrapperClassName = '',
  fullSection = true
}: WhyChooseSectionProps) {
  const content = (
    <>
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="title-main">
            {title}
          </h2>
        </motion.div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 ${containerClassName}`}>
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="card p-8 lg:p-10 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 bg-gray-700 text-white rounded-xl flex items-center justify-center mx-auto mb-6"
            >
              {feature.icon}
            </motion.div>
            
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );

  if (fullSection) {
    return (
      <section className="section-padding section-bg">
        <div className="container-main">
          {content}
        </div>
      </section>
    );
  }

  return <div className={wrapperClassName}>{content}</div>;
}
