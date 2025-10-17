import { useState } from 'react';
import { Receipt, CreditCard, FileText } from 'lucide-react';

interface BilletFormProps {
  onClose: () => void;
}

export default function BilletForm({ onClose }: BilletFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpfCnpj: '',
    unit: '',
    contractNumber: '',
    month: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Billet request:', formData);
    alert('Solicitação de 2ª via enviada! O boleto será enviado para o e-mail cadastrado em alguns minutos.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-gray-700 text-sm">
          Preencha os dados abaixo para solicitar a segunda via do seu boleto.
          O documento será enviado para o e-mail cadastrado.
        </p>
      </div>

      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Nome Completo / Razão Social *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          placeholder="Seu nome ou nome da empresa"
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
        <p className="text-xs text-gray-500 mt-1">
          A 2ª via será enviada para este e-mail
        </p>
      </div>

      <div>
        <label htmlFor="cpfCnpj" className="block text-gray-700 font-medium mb-2">
          <CreditCard className="w-4 h-4 inline mr-2" />
          CPF / CNPJ *
        </label>
        <input
          type="text"
          id="cpfCnpj"
          name="cpfCnpj"
          value={formData.cpfCnpj}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          placeholder="000.000.000-00 ou 00.000.000/0000-00"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
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

        <div>
          <label htmlFor="contractNumber" className="block text-gray-700 font-medium mb-2">
            <FileText className="w-4 h-4 inline mr-2" />
            Número do Contrato *
          </label>
          <input
            type="text"
            id="contractNumber"
            name="contractNumber"
            value={formData.contractNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="Ex: 2025001"
          />
        </div>
      </div>

      <div>
        <label htmlFor="month" className="block text-gray-700 font-medium mb-2">
          <Receipt className="w-4 h-4 inline mr-2" />
          Mês de Referência *
        </label>
        <select
          id="month"
          name="month"
          value={formData.month}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
        >
          <option value="">Selecione o mês</option>
          <option value="2025-01">Janeiro 2025</option>
          <option value="2025-02">Fevereiro 2025</option>
          <option value="2025-03">Março 2025</option>
          <option value="2025-04">Abril 2025</option>
          <option value="2025-05">Maio 2025</option>
          <option value="2025-06">Junho 2025</option>
          <option value="2025-07">Julho 2025</option>
          <option value="2025-08">Agosto 2025</option>
          <option value="2025-09">Setembro 2025</option>
          <option value="2025-10">Outubro 2025</option>
          <option value="2025-11">Novembro 2025</option>
          <option value="2025-12">Dezembro 2025</option>
        </select>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900 font-medium mb-2">Informações Importantes:</p>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• O boleto será enviado em até 15 minutos</li>
          <li>• Verifique sua caixa de spam caso não receba</li>
          <li>• Para boletos vencidos, entre em contato com nossa equipe</li>
        </ul>
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
          Solicitar 2ª Via
        </button>
      </div>
    </form>
  );
}
