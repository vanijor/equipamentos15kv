import { useState, useEffect } from 'react';
import type{ EquipmentData, Equipment, Communication, Inspection } from './types/types';
import EquipmentList from './components/EquipmentList';
import InspectionList from './components/InspectionList';
import CommunicationList from './components/CommunicationList';

import Tabs from './components/Tabs';

const App = () => {
  const [data, setData] = useState<EquipmentData>({
    consulta: [],
    inspeção: [],
    comunicacao: []
  });
  const [activeTab, setActiveTab] = useState('consulta');

  useEffect(() => {
    // Carregar dados iniciais (pode ser substituído por uma chamada API)
    const initialData: EquipmentData = {
      consulta: [
        {
          equipamento: "123590",
          alimentador: "PGR-35",
          fabricante: "TAVRIDA",
          cidade: "SÃO VICENTE",
          endereco: "SÃO JOÃO",
          referencia: "PERTO DA ESQUINA",
          gps: "-23.897988, -46.330598",
        }
      ],
      inspeção: [
        {
          tombamentoRele: "4545423590",
          serieRele: "4545423590",
          modeloRele: "ADVC-III",
          tombamentoChave: "4545423590",
          serieChave: "4545423590",
          modeloChave: "U27-12",
          desgaste: "100%",
          operacoes: "100",
          tp: "SIM",
          parafusoAterramento: "SIM",
          cvt: "SIM",
          calibracao: "SIM",
          bateria: "SIM",
          dataBateria: "15/02/2025",
          historicoBateria: "15/02/2025",
          dataVisita: "15/02/2025",
          observacao: "EQUIPAMENTO EM OPERAÇÃO DIA 02/02/2025"
        }
      ],
      comunicacao: [
        {
          ip: "10.43.125.625",
          dnp: "12125",
          usuario: "vivo3g12675",
          tipoModem: "4G",
          modeloModem: "ROBUSTEL",
          chip: "8955-1082-2570-4678",
          serieModem: "512047588541",
          tombamentoModem: "12574485",
          wifi: "SIM",
          ipWifi: "192.168.4.1:9002"
        }
      ]
    };
    setData(initialData);
  }, []);

  const handleAddEquipment = (newEquipment: Equipment) => {
    setData(prev => ({
      ...prev,
      consulta: [...prev.consulta, newEquipment]
    }));
  };

  const handleUpdateEquipment = (updatedEquipment: Equipment, index: number) => {
    const updatedData = {...data};
    updatedData.consulta[index] = updatedEquipment;
    setData(updatedData);
  };

  const handleDeleteEquipment = (index: number) => {
    const updatedData = {...data};
    updatedData.consulta.splice(index, 1);
    setData(updatedData);
  };

  // Funções similares para inspeção 
  const handleAddInspection = (newInspection: Inspection) => {
    setData(prev => ({
      ...prev,
      inspeção: [...prev.inspeção, newInspection]
    }));
  };

  const handleUpdateInspection = (updatedInspection: Inspection, index: number) => {
    const updatedData = {...data};
    updatedData.inspeção[index] = updatedInspection;
    setData(updatedData);
  };

  const handleDeleteInspection = (index: number) => {
    const updatedData = {...data};
    updatedData.inspeção.splice(index, 1);
    setData(updatedData);
  };

  /* Comunicação */
   const handleAddCommunication = (newCommunication: Communication) => {
    setData(prev => ({
      ...prev,
      comunicacao: [...prev.comunicacao, newCommunication]
    }));
  };

  const handleUpdateCommunication = (updatedCommunication: Communication, index: number) => {
    const updatedData = {...data};
    updatedData.comunicacao[index] = updatedCommunication;
    setData(updatedData);
  };

  const handleDeleteCommunication = (index: number) => {
    const updatedData = {...data};
    updatedData.comunicacao.splice(index, 1);
    setData(updatedData);
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