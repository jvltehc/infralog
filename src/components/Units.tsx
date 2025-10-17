import { useState } from "react";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import Modal from "./Modal";

export default function Units() {
  const [selectedUnit, setSelectedUnit] = useState<null | (typeof units)[0]>(
    null
  );

  const units = [
    {
      name: "Eusébio",
      state: "Ceará",
      address: "BR-116, KM 16 - 4 LADO ÍMPAR - Santo Antonio, Eusébio - CE, 61760-000",
      phone: "(85) 99444-6693",
      email: "eusebio@infralog.com.br",
      image:
        "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "25.000 m²",
      highlights: [
        "Próximo ao Porto de Pecém",
        "Acesso direto à BR-116",
        "Área de expansão disponível",
      ],
    },
    {
      name: "Caruaru",
      state: "Pernambuco",
      address: "Rod. Br Duzentos e Trinta e Dois, 632 - Agamenon Magalhães, Caruaru - PE, 55030-400",
      phone: "(85) 99444-6693",
      email: "caruaru@infralog.com.br",
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "28.000 m²",
      highlights: [
        "Centro de distribuição regional",
        "Fácil acesso à BR-232",
        "Infraestrutura completa",
      ],
    },
  ];

  return (
    <section id="unidades" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas <span className="text-red-600">Unidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Localização estratégica em pontos-chave do Nordeste para otimizar
            sua logística e reduzir custos operacionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {units.map((unit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={unit.image}
                  alt={`Unidade ${unit.name}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                  {unit.area}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {unit.name}
                  </h3>
                  <span className="text-red-600 font-semibold">
                    {unit.state}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>{unit.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{unit.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{unit.email}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Destaques:
                  </h4>
                  <ul className="space-y-2">
                    {unit.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedUnit(unit)}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  <span>Ver Localização</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedUnit && (
        <Modal
          isOpen={!!selectedUnit}
          onClose={() => setSelectedUnit(null)}
          title={`Localização - ${selectedUnit.name}`}
        >
          <div className="space-y-6">
            <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  selectedUnit.address
                )}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                className="absolute inset-0 border-0"
                style={{
                  filter: "grayscale(20%) contrast(95%) brightness(95%)",
                }}
              ></iframe>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Endereço
              </h3>
              <p className="text-gray-700">{selectedUnit.address}</p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                selectedUnit.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Abrir no Google Maps
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
}
