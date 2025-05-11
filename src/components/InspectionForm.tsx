import { useState } from 'react';
import type{ Inspection } from '../types/types';

interface InspectionFormProps {
  initialData?: Inspection;
  onSubmit: (inspection: Inspection) => void;
  onCancel: () => void;
}

const InspectionForm = ({ initialData, onSubmit, onCancel }: InspectionFormProps) => {
  const [formData, setFormData] = useState<Inspection>(initialData || {
    tombamentoRele: '',
    serieRele: '',
    modeloRele: '',
    tombamentoChave: '',
    serieChave: '',
    modeloChave: '',
    desgaste: '',
    operacoes: '',
    tp: 'SIM',
    parafusoAterramento: 'SIM',
    cvt: 'SIM',
    calibracao: 'SIM',
    bateria: 'SIM',
    dataBateria: '',
    historicoBateria: '',
    dataVisita: '',
    observacao: ''
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
        {initialData ? 'Editar Inspeção' : 'Adicionar Nova Inspeção'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Seção Relé */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Dados do Relé</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tombamento Relé</label>
                <input
                  type="text"
                  name="tombamentoRele"
                  value={formData.tombamentoRele}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Série Relé</label>
                <input
                  type="text"
                  name="serieRele"
                  value={formData.serieRele}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Modelo Relé</label>
                <input
                  type="text"
                  name="modeloRele"
                  value={formData.modeloRele}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Seção Chave */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Dados da Chave</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tombamento Chave</label>
                <input
                  type="text"
                  name="tombamentoChave"
                  value={formData.tombamentoChave}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Série Chave</label>
                <input
                  type="text"
                  name="serieChave"
                  value={formData.serieChave}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Modelo Chave</label>
                <input
                  type="text"
                  name="modeloChave"
                  value={formData.modeloChave}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Seção Estado */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Estado do Equipamento</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Desgaste</label>
                <input
                  type="text"
                  name="desgaste"
                  value={formData.desgaste}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Operações</label>
                <input
                  type="text"
                  name="operacoes"
                  value={formData.operacoes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Seção Verificações */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Verificações</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">TP</label>
                <select
                  name="tp"
                  value={formData.tp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="SIM">SIM</option>
                  <option value="NÃO">NÃO</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parafuso Aterramento</label>
                <select
                  name="parafusoAterramento"
                  value={formData.parafusoAterramento}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="SIM">SIM</option>
                  <option value="NÃO">NÃO</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CVT</label>
                <select
                  name="cvt"
                  value={formData.cvt}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="SIM">SIM</option>
                  <option value="NÃO">NÃO</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Calibração</label>
                <select
                  name="calibracao"
                  value={formData.calibracao}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="SIM">SIM</option>
                  <option value="NÃO">NÃO</option>
                </select>
              </div>
            </div>
          </div>

          {/* Seção Bateria */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Bateria</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bateria</label>
                <select
                  name="bateria"
                  value={formData.bateria}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="SIM">SIM</option>
                  <option value="NÃO">NÃO</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data Bateria</label>
                <input
                  type="date"
                  name="dataBateria"
                  value={formData.dataBateria}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Histórico Bateria</label>
                <input
                  type="date"
                  name="historicoBateria"
                  value={formData.historicoBateria}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Seção Visita */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium mb-2">Visita</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data Visita</label>
                <input
                  type="date"
                  name="dataVisita"
                  value={formData.dataVisita}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Observação</label>
                <input
                  type="text"
                  name="observacao"
                  value={formData.observacao}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
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

export default InspectionForm;