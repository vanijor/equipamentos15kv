const mongoose = require('mongoose');

const ComunicacaoSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  dnp: { type: String, required: true },
  usuario: { type: String, required: true },
  tipoModem: { type: String, required: true },
  modeloModem: { type: String, required: true },
  chip: { type: String, required: true },
  serieModem: { type: String, required: true },
  tombamentoModem: { type: String, required: true },
  wifi: { type: String, required: true },
  ipWifi: { type: String, required: true }
});

module.exports = mongoose.model('Comunicacao', ComunicacaoSchema);
