const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({
  equipamento: { type: String, required: true },
  alimentador: { type: String, required: true },
  fabricante: { type: String, required: true },
  cidade: { type: String, required: true },
  endereco: { type: String, required: true },
  referencia: { type: String, required: true },
  gps: { type: String, required: true }
});

module.exports = mongoose.model('Consulta', ConsultaSchema);
