import SimpleHeader from "@/components/SimpleHeader";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingBudgetButton from "@/components/FloatingBudgetButton";

export default function TermosUsoPage() {
  return (
    <div className="min-h-screen">
      <SimpleHeader />
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-700 mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 mb-6">
              Ao acessar e utilizar o site da Demolidora LHC, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">2. Sobre a Empresa</h2>
            <p className="text-gray-600 mb-6">
              A Demolidora LHC é uma empresa especializada em serviços de demolição, escavação e terraplenagem, localizada em Porto Alegre, RS.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">3. Serviços Oferecidos</h2>
            <p className="text-gray-600 mb-4">
              Nossos serviços incluem:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Demolições controladas e seguras</li>
              <li>Escavações mecanizadas</li>
              <li>Terraplenagem completa</li>
              <li>Remoção de entulhos</li>
              <li>Consultoria em projetos</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">4. Uso do Site</h2>
            <p className="text-gray-600 mb-4">
              Você concorda em usar o site apenas para fins legais e de acordo com estes termos. É proibido:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Usar o site para qualquer propósito ilegal</li>
              <li>Interferir no funcionamento do site</li>
              <li>Tentar obter acesso não autorizado</li>
              <li>Transmitir vírus ou códigos maliciosos</li>
              <li>Violar direitos de propriedade intelectual</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">5. Solicitação de Orçamentos</h2>
            <p className="text-gray-600 mb-6">
              Os orçamentos fornecidos são estimativas baseadas nas informações fornecidas. Preços finais podem variar conforme as condições específicas do projeto e serão confirmados em contrato.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">6. Propriedade Intelectual</h2>
            <p className="text-gray-600 mb-6">
              Todo o conteúdo do site, incluindo textos, imagens, logotipos e design, é propriedade da Demolidora LHC e está protegido por leis de direitos autorais.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-gray-600 mb-6">
              A Demolidora LHC não se responsabiliza por danos diretos ou indiretos resultantes do uso do site ou da impossibilidade de uso, incluindo perda de dados ou lucros.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">8. Links Externos</h2>
            <p className="text-gray-600 mb-6">
              Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou práticas desses sites externos.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">9. Modificações</h2>
            <p className="text-gray-600 mb-6">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">10. Lei Aplicável</h2>
            <p className="text-gray-600 mb-6">
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes de Porto Alegre, RS.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">11. Contato</h2>
            <p className="text-gray-600 mb-4">
              Para questões sobre estes termos de uso, entre em contato conosco:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>E-mail:</strong> demolidoralhc@gmail.com</p>
              <p className="text-gray-600 mb-2"><strong>Telefone:</strong> (51) 9984-8887</p>
              <p className="text-gray-600"><strong>Endereço:</strong> Porto Alegre, RS</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
      <FloatingBudgetButton />
    </div>
  );
}
