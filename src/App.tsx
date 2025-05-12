import { useState, useEffect } from 'react';
import type { EquipmentData, Equipment, Communication, Inspection } from './types/types';
import EquipmentList from './components/EquipmentList';
import InspectionList from './components/InspectionList';
import CommunicationList from './components/CommunicationList';

import Tabs from './components/Tabs';

const API_BASE_URL = 'http://localhost:5000/api';

const App = () => {
  const [data, setData] = useState<EquipmentData>({
    consulta: [],
    inspeção: [],
    comunicacao: []
  });
  const [activeTab, setActiveTab] = useState('consulta');

  // Fetch data from backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [consultaRes, inspecaoRes, comunicacaoRes] = await Promise.all([
          fetch(`${API_BASE_URL}/consulta`),
          fetch(`${API_BASE_URL}/inspecao`),
          fetch(`${API_BASE_URL}/comunicacao`)
        ]);
        const [consultaData, inspecaoData, comunicacaoData] = await Promise.all([
          consultaRes.json(),
          inspecaoRes.json(),
          comunicacaoRes.json()
        ]);
        setData({
          consulta: consultaData,
          inspeção: inspecaoData,
          comunicacao: comunicacaoData
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Equipment handlers
  const handleAddEquipment = async (newEquipment: Equipment) => {
    try {
      const res = await fetch(`${API_BASE_URL}/consulta`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEquipment)
      });
      const savedEquipment = await res.json();
      setData(prev => ({
        ...prev,
        consulta: [...prev.consulta, savedEquipment]
      }));
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
  };

  const handleUpdateEquipment = async (updatedEquipment: Equipment, index: number) => {
    try {
      const id = data.consulta[index]._id;
      const res = await fetch(`${API_BASE_URL}/consulta/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEquipment)
      });
      const savedEquipment = await res.json();
      const updatedList = [...data.consulta];
      updatedList[index] = savedEquipment;
      setData(prev => ({
        ...prev,
        consulta: updatedList
      }));
    } catch (error) {
      console.error('Error updating equipment:', error);
    }
  };

  const handleDeleteEquipment = async (index: number) => {
    try {
      const id = data.consulta[index]._id;
      await fetch(`${API_BASE_URL}/consulta/${id}`, {
        method: 'DELETE'
      });
      const updatedList = [...data.consulta];
      updatedList.splice(index, 1);
      setData(prev => ({
        ...prev,
        consulta: updatedList
      }));
    } catch (error) {
      console.error('Error deleting equipment:', error);
    }
  };

  // Inspection handlers
  const handleAddInspection = async (newInspection: Inspection) => {
    try {
      const res = await fetch(`${API_BASE_URL}/inspecao`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInspection)
      });
      const savedInspection = await res.json();
      setData(prev => ({
        ...prev,
        inspeção: [...prev.inspeção, savedInspection]
      }));
    } catch (error) {
      console.error('Error adding inspection:', error);
    }
  };

  const handleUpdateInspection = async (updatedInspection: Inspection, index: number) => {
    try {
      const id = data.inspeção[index]._id;
      const res = await fetch(`${API_BASE_URL}/inspecao/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedInspection)
      });
      const savedInspection = await res.json();
      const updatedList = [...data.inspeção];
      updatedList[index] = savedInspection;
      setData(prev => ({
        ...prev,
        inspeção: updatedList
      }));
    } catch (error) {
      console.error('Error updating inspection:', error);
    }
  };

  const handleDeleteInspection = async (index: number) => {
    try {
      const id = data.inspeção[index]._id;
      await fetch(`${API_BASE_URL}/inspecao/${id}`, {
        method: 'DELETE'
      });
      const updatedList = [...data.inspeção];
      updatedList.splice(index, 1);
      setData(prev => ({
        ...prev,
        inspeção: updatedList
      }));
    } catch (error) {
      console.error('Error deleting inspection:', error);
    }
  };

  // Communication handlers
  const handleAddCommunication = async (newCommunication: Communication) => {
    try {
      const res = await fetch(`${API_BASE_URL}/comunicacao`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCommunication)
      });
      const savedCommunication = await res.json();
      setData(prev => ({
        ...prev,
        comunicacao: [...prev.comunicacao, savedCommunication]
      }));
    } catch (error) {
      console.error('Error adding communication:', error);
    }
  };

  const handleUpdateCommunication = async (updatedCommunication: Communication, index: number) => {
    try {
      const id = data.comunicacao[index]._id;
      const res = await fetch(`${API_BASE_URL}/comunicacao/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCommunication)
      });
      const savedCommunication = await res.json();
      const updatedList = [...data.comunicacao];
      updatedList[index] = savedCommunication;
      setData(prev => ({
        ...prev,
        comunicacao: updatedList
      }));
    } catch (error) {
      console.error('Error updating communication:', error);
    }
  };

  const handleDeleteCommunication = async (index: number) => {
    try {
      const id = data.comunicacao[index]._id;
      await fetch(`${API_BASE_URL}/comunicacao/${id}`, {
        method: 'DELETE'
      });
      const updatedList = [...data.comunicacao];
      updatedList.splice(index, 1);
      setData(prev => ({
        ...prev,
        comunicacao: updatedList
      }));
    } catch (error) {
      console.error('Error deleting communication:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Gerenciamento de Equipamentos</h1>
      
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'consulta' && (
          <EquipmentList 
            equipmentList={data.consulta} 
            onAdd={handleAddEquipment}
            onUpdate={handleUpdateEquipment}
            onDelete={handleDeleteEquipment}
          />
        )}
        {activeTab === 'inspeção' && (
          <InspectionList 
            inspectionList={data.inspeção} 
            onAdd={handleAddInspection}
            onUpdate={handleUpdateInspection}
            onDelete={handleDeleteInspection}
          />
        )}
        {activeTab === 'comunicacao' && (
          <CommunicationList 
            communicationList={data.comunicacao} 
            onAdd={handleAddCommunication}
            onUpdate={handleUpdateCommunication}
            onDelete={handleDeleteCommunication}
          />
        )}
      </div>
    </div>
  );
};

export default App;
