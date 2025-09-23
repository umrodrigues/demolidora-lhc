'use client';

import { motion } from 'framer-motion';

export default function ContactInfo() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container-form">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="title-section text-4xl">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-500">
            Estamos prontos para atender você. Entre em contato conosco!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                {/* Telefone */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Telefone</h4>
                    <a 
                      href="https://wa.me/555199848887?text=Olá! Gostaria de saber mais sobre os serviços da Demolidora LHC."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-600 hover:text-gold-700 transition-colors duration-300"
                    >
                      (51) 9984-8887
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <a 
                      href="mailto:luarodrigues1996@gmail.com"
                      className="text-gold-600 hover:text-gold-700 transition-colors duration-300"
                    >
                      luarodrigues1996@gmail.com
                    </a>
                  </div>
                </div>

                {/* Horário de Funcionamento */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">Nossa Localização</h3>
              <div className="flex items-start space-x-4">
                <div className="bg-gold-500 p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Endereço</h4>
                  <p className="text-gray-600">
                    Porto Alegre, RS<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">Como Chegar</h3>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-500">Mapa será integrado aqui</p>
                  <p className="text-sm text-gray-400">Google Maps ou OpenStreetMap</p>
                </div>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <div className="card p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Fale Conosco Agora</h3>
              <p className="text-gray-600 mb-6">
                Prefere conversar pelo WhatsApp? Clique no botão abaixo!
              </p>
              <motion.a
                href="https://wa.me/555199848887?text=Olá! Gostaria de saber mais sobre os serviços da Demolidora LHC."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Conversar no WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
