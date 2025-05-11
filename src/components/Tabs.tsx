interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  const tabs = [
    { id: 'consulta', label: 'Equipamentos' },
    { id: 'inspeção', label: 'Inspeção' },
    { id: 'comunicacao', label: 'Comunicação' }
  ];

  return (
    <div className="flex border-b mb-4">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`py-2 px-4 font-medium ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;