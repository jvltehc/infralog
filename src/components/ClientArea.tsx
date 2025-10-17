import { ClipboardCheck, Wrench, Receipt, User } from 'lucide-react';

interface ClientAreaProps {
  onOpenModal: (type: 'inspection' | 'maintenance' | 'billet', title: string) => void;
}

export default function ClientArea({ onOpenModal }: ClientAreaProps) {
  const services = [
    {
      icon: ClipboardCheck,
      title: 'Solicitar Vistoria',
      description: 'Agende uma vistoria técnica no seu galpão com nossa equipe especializada.',
      type: 'inspection' as const,
      color: 'from-red-600 to-red-700',
    },
    {
      icon: Wrench,
      title: 'Manutenção',
      description: 'Solicite serviços de manutenção preventiva ou corretiva para seu espaço.',
      type: 'maintenance' as const,
      color: 'from-red-700 to-red-800',
    },
    {
      icon: Receipt,
      title: '2ª Via de Boleto',
      description: 'Solicite a segunda via do seu boleto de forma rápida e prática.',
      type: 'billet' as const,
      color: 'from-red-800 to-red-900',
    },
  ];

  return (
    <section id="área-do-cliente" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-6">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Área do <span className="text-red-600">Cliente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acesse nossos serviços exclusivos e gerencie suas solicitações de forma
            simples e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-red-200"
            >
              <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <button
                onClick={() => onOpenModal(service.type, service.title)}
                className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                Solicitar Agora
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Precisa de Ajuda?
          </h3>
          <p className="text-red-50 text-lg mb-6">
            Nossa equipe está pronta para atendê-lo de segunda a sexta, das 8h às 18h.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:08532734500"
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300"
            >
              (85) 99444-6693
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
