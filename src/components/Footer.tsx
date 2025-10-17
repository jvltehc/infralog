import { Warehouse, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-2 rounded-lg">
                <Warehouse className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">INFRALOG</h3>
                <p className="text-xs text-gray-400">Soluções Logísticas</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em infraestrutura logística, oferecendo soluções completas
              para seu negócio no Nordeste brasileiro.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Unidade Eusébio</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-sm">BR-116, KM 16 - 4 LADO ÍMPAR - Santo Antonio, Eusébio - CE, 61760-000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">(85) 99444-6693</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">eusebio@infralog.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Unidade Caruaru</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-sm">Rod. Br Duzentos e Trinta e Dois, 632 - Agamenon Magalhães, Caruaru - PE, 55030-400</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">(85) 99444-6693</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">caruaru@infralog.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Sobre', 'Serviços', 'Unidades', 'Área do Cliente', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} INFRALOG. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                Política de Privacidade
              </button>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                Termos de Uso
              </button>
              <div className="text-gray-400 flex items-center gap-1">
                Desenvolvido por
                <a href="" className="hover:text-red-500 transition-colors">Cristiano Souza</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
