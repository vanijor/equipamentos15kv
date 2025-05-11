export interface Equipment {
  equipamento: string;
  alimentador: string;
  fabricante: string;
  cidade: string;
  endereco: string;
  referencia: string;
  gps: string;
}

export interface Inspection {
  tombamentoRele: string;
  serieRele: string;
  modeloRele: string;
  tombamentoChave: string;
  serieChave: string;
  modeloChave: string;
  desgaste: string;
  operacoes: string;
  tp: string;
  parafusoAterramento: string;
  cvt: string;
  calibracao: string;
  bateria: string;
  dataBateria: string;
  historicoBateria: string;
  dataVisita: string;
  observacao: string;
}

export interface Communication {
  ip: string;
  dnp: string;
  usuario: string;
  tipoModem: string;
  modeloModem: string;
  chip: string;
  serieModem: string;
  tombamentoModem: string;
  wifi: string;
  ipWifi: string;
}

export interface EquipmentData {
  consulta: Equipment[];
  inspeção: Inspection[];
  comunicacao: Communication[];
}