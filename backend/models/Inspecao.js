const mongoose = require('mongoose');

const InspecaoSchema = new mongoose.Schema({
  tombamentoRele: { type: String, required: true },
  serieRele: { type: String, required: true },
  modeloRele: { type: String, required: true },
  tombamentoChave: { type: String, required: true },
  serieChave: { type: String, required: true },
  modeloChave: { type: String, required: true },
  desgaste: { type: String, required: true },
  operacoes: { type: String, required: true },
  tp: { type: String, required: true },
  parafusoAterramento: { type: String, required: true },
  cvt: { type: String, required: true },
  calibracao: { type: String, required: true },
  bateria: { type: String, required: true },
  dataBateria: { type: String, required: true },
  historicoBateria: { type: String, required: true },
  dataVisita: { type: String, required: true },
  observacao: { type: String, required: true }
});

module.exports = mongoose.model('Inspecao', InspecaoSchema);
