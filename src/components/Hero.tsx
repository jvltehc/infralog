import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="início" className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-950"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 205, 205, 0.85), rgba(165, 133, 133, 0.9)), url('https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Galpões Logísticos
            <span className="block text-red-700">de Alta Performance</span>
          </h2>
          <p className="text-xl md:text-2xl text-black-50 mb-8 max-w-2xl">
            Soluções estratégicas em infraestrutura logística para impulsionar seu negócio no Nordeste brasileiro.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-red-700 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Eusébio - CE</span>
            </div>
            <div className="flex items-center space-x-2 bg-red-700 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Caruaru - PE</span>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="group bg-white text-red-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-all duration-300 flex items-center space-x-2 shadow-2xl hover:shadow-red-500/50 hover:scale-105"
          >
            <span>Solicite uma Proposta</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
