import { useState } from 'react';
import { Calendar, Clock, FileText } from 'lucide-react';

interface InspectionFormProps {
  onClose: () => void;
}

export default function InspectionForm({ onClose }: InspectionFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unit: '',
    date: '',
    time: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inspection request:', formData);
    alert('Solicitação de vistoria enviada com sucesso! Entraremos em contato para confirmar.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-gray-700 text-sm">
          Preencha o formulário abaixo para solicitar uma vistoria técnica.
          Nossa equipe entrará em contato para confirmar a data e horário.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div>
          <label htmlFor="unit" className="block text-gray-700 font-medium mb-2">
            Unidade *
          </label>
          <select
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            <option value="">Selecione a unidade</option>
            <option value="eusebio">Eusébio - CE</option>
            <option value="caruaru">Caruaru - PE</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Data Preferencial *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
            <Clock className="w-4 h-4 inline mr-2" />
            Horário Preferencial *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            <option value="">Selecione o horário</option>
            <option value="morning">Manhã (8h - 12h)</option>
            <option value="afternoon">Tarde (13h - 17h)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
          <FileText className="w-4 h-4 inline mr-2" />
          Descrição / Observações
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
          placeholder="Descreva o motivo da vistoria ou informações adicionais"
        />
      </div>

      <div className="flex space-x-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all"
        >
          Enviar Solicitação
        </button>
      </div>
    </form>
  );
}
