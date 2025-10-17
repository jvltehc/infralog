import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-red-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades. Entre em contato e
            descubra como podemos ajudar seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Telefones
                    </h4>
                    <p className="text-gray-600">
                      Eusébio / Caruaru: (85) 99444-6693
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      E-mails
                    </h4>
                    <p className="text-gray-600">eusebio@infralog.com.br</p>
                    <p className="text-gray-600">caruaru@infralog.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Endereços
                    </h4>
                    <p className="text-gray-600 mb-2">
                      BR-116, KM 16 - 4 LADO ÍMPAR - Santo Antonio, Eusébio -
                      CE, 61760-000
                    </p>
                    <p className="text-gray-600">
                      Rod. Br Duzentos e Trinta e Dois, 632 - Agamenon
                      Magalhães, Caruaru - PE, 55030-400
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-red-50">
                <p className="flex justify-between">
                  <span>Segunda a Quinta:</span>
                  <span className="font-semibold">07:30 às 17:30</span>
                </p>
                <p className="flex justify-between">
                  <span>Sexta:</span>
                  <span className="font-semibold">07:30 às 17:30</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado e Domingo:</span>
                  <span className="font-semibold">Fechado</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                  placeholder="Como podemos ajudá-lo?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
