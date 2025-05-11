import { useState } from 'react';
import type{ Equipment } from '../types/types';
import EquipmentForm from './EquipmentForm';

interface EquipmentListProps {
  equipmentList: Equipment[];
  onAdd: (equipment: Equipment) => void;
  onUpdate: (equipment: Equipment, index: number) => void;
  onDelete: (index: number) => void;
}

const EquipmentList = ({ equipmentList, onAdd, onUpdate, onDelete }: EquipmentListProps) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleSubmit = (equipment: Equipment) => {
    if (editingIndex !== null) {
      onUpdate(equipment, editingIndex);
    } else {
      onAdd(equipment);
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
        Adicionar Equipamento
      </button>

      {showForm && (
        <EquipmentForm 
          initialData={editingIndex !== null ? equipmentList[editingIndex] : undefined}
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
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Equipamento</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Alimentador</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Fabricante</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((equipment, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{equipment.equipamento}</td>
                <td className="py-2 px-4 border-b border-gray-200">{equipment.alimentador}</td>
                <td className="py-2 px-4 border-b border-gray-200">{equipment.fabricante}</td>
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

export default EquipmentList;