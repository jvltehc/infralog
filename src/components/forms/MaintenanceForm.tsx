import { useState } from 'react';
import { AlertCircle, Calendar, FileText } from 'lucide-react';

interface MaintenanceFormProps {
  onClose: () => void;
}

export default function MaintenanceForm({ onClose }: MaintenanceFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unit: '',
    type: '',
    priority: '',
    date: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Maintenance request:', formData);
    alert('Solicitação de manutenção enviada com sucesso! Nossa equipe entrará em contato em breve.');
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
          Descreva o problema ou serviço de manutenção necessário.
          Nossa equipe técnica irá avaliar e entrar em contato.
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
          <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
            Tipo de Manutenção *
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            <option value="">Selecione o tipo</option>
            <option value="eletrica">Elétrica</option>
            <option value="hidraulica">Hidráulica</option>
            <option value="estrutural">Estrutural</option>
            <option value="portoes">Portões e Acessos</option>
            <option value="climatizacao">Climatização</option>
            <option value="preventiva">Preventiva</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority" className="block text-gray-700 font-medium mb-2">
            <AlertCircle className="w-4 h-4 inline mr-2" />
            Prioridade *
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            <option value="">Selecione a prioridade</option>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
            <option value="urgente">Urgente</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
          <Calendar className="w-4 h-4 inline mr-2" />
          Data Preferencial
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
          <FileText className="w-4 h-4 inline mr-2" />
          Descrição do Problema *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
          placeholder="Descreva detalhadamente o problema ou serviço necessário"
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
