import { useState } from 'react';
import type{ Communication } from '../types/types';
import CommunicationForm from './CommunicationForm';

interface CommunicationListProps {
  communicationList: Communication[];
  onAdd: (communication: Communication) => void;
  onUpdate: (communication: Communication, index: number) => void;
  onDelete: (index: number) => void;
}

const CommunicationList = ({ communicationList, onAdd, onUpdate, onDelete }: CommunicationListProps) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleSubmit = (communication: Communication) => {
    if (editingIndex !== null) {
      onUpdate(communication, editingIndex);
    } else {
      onAdd(communication);
    }
    setShowForm(false);
    setEditingIndex(null);
  };

  return (
    <div>
      <button 
        onClick={() => setShowForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Adicionar Comunicação
      </button>

      {showForm && (
        <CommunicationForm 
          initialData={editingIndex !== null ? communicationList[editingIndex] : undefined}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingIndex(null);
          }}
        />
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">IP</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tipo Modem</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Modelo</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Wi-Fi</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody>
            {communicationList.map((communication, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{communication.ip}</td>
                <td className="py-2 px-4 border-b border-gray-200">{communication.tipoModem}</td>
                <td className="py-2 px-4 border-b border-gray-200">{communication.modeloModem}</td>
                <td className="py-2 px-4 border-b border-gray-200">{communication.wifi}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button 
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => onDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommunicationList;