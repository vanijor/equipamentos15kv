import { useState } from 'react';
import type{ Inspection } from '../types/types';
import InspectionForm from './InspectionForm';

interface InspectionListProps {
  inspectionList: Inspection[];
  onAdd: (inspection: Inspection) => void;
  onUpdate: (inspection: Inspection, index: number) => void;
  onDelete: (index: number) => void;
}

const InspectionList = ({ inspectionList, onAdd, onUpdate, onDelete }: InspectionListProps) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleSubmit = (inspection: Inspection) => {
    if (editingIndex !== null) {
      onUpdate(inspection, editingIndex);
    } else {
      onAdd(inspection);
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
        Adicionar Inspeção
      </button>

      {showForm && (
        <InspectionForm 
          initialData={editingIndex !== null ? inspectionList[editingIndex] : undefined}
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
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tomb. Relé</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Modelo Relé</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Desgaste</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Data Visita</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody>
            {inspectionList.map((inspection, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{inspection.tombamentoRele}</td>
                <td className="py-2 px-4 border-b border-gray-200">{inspection.modeloRele}</td>
                <td className="py-2 px-4 border-b border-gray-200">{inspection.desgaste}</td>
                <td className="py-2 px-4 border-b border-gray-200">{inspection.dataVisita}</td>
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

export default InspectionList;