import { useState } from 'react';
import type{ Communication } from '../types/types';

interface CommunicationFormProps {
  initialData?: Communication;
  onSubmit: (communication: Communication) => void;
  onCancel: () => void;
}

const CommunicationForm = ({ initialData, onSubmit, onCancel }: CommunicationFormProps) => {
  const [formData, setFormData] = useState<Communication>(initialData || {
    ip: '',
    dnp: '',
    usuario: '',
    tipoModem: '',
    modeloModem: '',
    chip: '',
    serieModem: '',
    tombamentoModem: '',
    wifi: 'SIM',
    ipWifi: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? 'Editar Comunicação' : 'Adicionar Nova Comunicação'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Seção Dados Básicos */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Dados Básicos</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">IP</label>
                <input
                  type="text"
                  name="ip"
                  value={formData.ip}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">DNP</label>
                <input
                  type="text"
                  name="dnp"
                  value={formData.dnp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Usuário</label>
                <input
                  type="text"
                  name="usuario"
                  value={formData.usuario}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Seção Modem */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Dados do Modem</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo Modem</label>
                <select
                  name="tipoModem"
                  value={formData.tipoModem}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="4G">4G</option>
                  <option value="3G">3G</option>
                  <option value="Fibra">Fibra</option>
                  <option value="Rádio">Rádio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Modelo Modem</label>
                <input
                  type="text"
                  name="modeloModem"
                  value={formData.modeloModem}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Chip</label>
                <input
                  type="text"
                  name="chip"
                  value={formData.chip}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Seção Identificação */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Identificação</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Série Modem</label>
                <input
                  type="text"
                  name="serieModem"
                  value={formData.serieModem}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tombamento Modem</label>
                <input
                  type="text"
                  name="tombamentoModem"
                  value={formData.tombamentoModem}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Seção Wi-Fi */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Configuração Wi-Fi</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wi-Fi</label>
                <select
                  name="wifi"
                  value={formData.wifi}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="SIM">SIM</option>
                  <option value="NÃO">NÃO</option>
                </select>
              </div>
              {formData.wifi === 'SIM' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">IP Wi-Fi</label>
                  <input
                    type="text"
                    name="ipWifi"
                    value={formData.ipWifi}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required={formData.wifi === 'SIM'}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommunicationForm;