import SimpleHeader from "@/components/SimpleHeader";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen">
      <SimpleHeader />
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-700 mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">1. Informações Gerais</h2>
            <p className="text-gray-600 mb-6">
              A Demolidora LHC, com sede em Porto Alegre, RS, está comprometida com a proteção da privacidade e dos dados pessoais de nossos clientes e visitantes do site.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">2. Coleta de Dados</h2>
            <p className="text-gray-600 mb-4">
              Coletamos informações pessoais quando você:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Preenche nosso formulário de contato</li>
              <li>Solicita um orçamento</li>
              <li>Entra em contato conosco via WhatsApp</li>
              <li>Navega em nosso site</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">3. Tipos de Dados Coletados</h2>
            <p className="text-gray-600 mb-4">
              Podemos coletar as seguintes informações:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Endereço residencial ou comercial</li>
              <li>Informações sobre o projeto</li>
              <li>Dados de navegação (cookies)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">4. Uso dos Dados</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Responder às suas solicitações</li>
              <li>Fornecer orçamentos e serviços</li>
              <li>Comunicar sobre nossos serviços</li>
              <li>Melhorar nosso atendimento</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-gray-600 mb-6">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para prestar nossos serviços ou quando exigido por lei.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">6. Segurança</h2>
            <p className="text-gray-600 mb-6">
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">7. Seus Direitos</h2>
            <p className="text-gray-600 mb-4">
              Você tem o direito de:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento</li>
              <li>Portabilidade dos dados</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">8. Cookies</h2>
            <p className="text-gray-600 mb-6">
              Nosso site pode usar cookies para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">9. Alterações</h2>
            <p className="text-gray-600 mb-6">
              Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mb-4">10. Contato</h2>
            <p className="text-gray-600 mb-4">
              Para questões sobre esta política de privacidade, entre em contato conosco:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>E-mail:</strong> luarodrigues1996@gmail.com</p>
              <p className="text-gray-600 mb-2"><strong>Telefone:</strong> (51) 9984-8887</p>
              <p className="text-gray-600"><strong>Endereço:</strong> Porto Alegre, RS</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
