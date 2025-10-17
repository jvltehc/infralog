import { Warehouse, Truck, Package, Clock, ThermometerSnowflake, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Warehouse,
      title: 'Locação de Galpões',
      description: 'Espaços amplos e versáteis com pé-direito alto, ideais para armazenagem e distribuição.',
      features: ['Áreas de 1.000 a 10.000 m²', 'Docas niveladas', 'Piso industrial'],
    },
    {
      icon: Truck,
      title: 'Cross-Docking',
      description: 'Infraestrutura preparada para operações de cross-docking com agilidade e eficiência.',
      features: ['Múltiplas docas', 'Áreas de separação', 'Fluxo otimizado'],
    },
    {
      icon: Package,
      title: 'Armazenagem',
      description: 'Soluções completas de armazenagem com gestão profissional e tecnologia avançada.',
      features: ['WMS integrado', 'Gestão de estoque', 'Inventário rotativo'],
    },
    {
      icon: Clock,
      title: 'Operação 24h',
      description: 'Funcionamento contínuo para atender às demandas do seu negócio sem interrupções.',
      features: ['Acesso irrestrito', 'Segurança 24h', 'Suporte constante'],
    },
    {
      icon: ThermometerSnowflake,
      title: 'Câmaras Frias',
      description: 'Ambientes climatizados para produtos que exigem temperatura controlada.',
      features: ['Temperatura regulável', 'Monitoramento contínuo', 'Backup de energia'],
    },
    {
      icon: Zap,
      title: 'Energia de Backup',
      description: 'Geradores de energia para garantir operação ininterrupta em qualquer situação.',
      features: ['Geradores potentes', 'Acionamento automático', 'Manutenção preventiva'],
    },
  ];

  return (
    <section id="serviços" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-red-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de soluções logísticas para atender todas as necessidades
            da sua operação com qualidade e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-red-200 group"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-700 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
