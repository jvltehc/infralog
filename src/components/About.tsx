import { Building2, TrendingUp, Shield, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Building2,
      title: 'Infraestrutura Moderna',
      description: 'Galpões equipados com tecnologia de ponta e estrutura robusta para operações logísticas eficientes.',
    },
    {
      icon: TrendingUp,
      title: 'Localização Estratégica',
      description: 'Unidades posicionadas em pontos estratégicos do Nordeste para otimizar sua distribuição.',
    },
    {
      icon: Shield,
      title: 'Segurança Máxima',
      description: 'Sistema completo de segurança 24h, monitoramento e controle de acesso rigoroso.',
    },
    {
      icon: Award,
      title: 'Excelência em Serviços',
      description: 'Equipe especializada e suporte dedicado para garantir a melhor experiência ao cliente.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a <span className="text-red-600">INFRALOG</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em soluções de infraestrutura logística, oferecendo galpões modernos
            e estrategicamente localizados para empresas que buscam excelência operacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-red-100 text-lg">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50k+</div>
              <div className="text-red-100 text-lg">m² de Área Locável</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-red-100 text-lg">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
