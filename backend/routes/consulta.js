const express = require('express');
const router = express.Router();
const Consulta = require('../models/Consulta');

// Get all consulta
router.get('/', async (req, res) => {
  try {
    const consultas = await Consulta.find();
    res.json(consultas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one consulta by id
router.get('/:id', getConsulta, (req, res) => {
  res.json(res.consulta);
});

// Create new consulta
router.post('/', async (req, res) => {
  const consulta = new Consulta(req.body);
  try {
    const newConsulta = await consulta.save();
    res.status(201).json(newConsulta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update consulta by id
router.put('/:id', getConsulta, async (req, res) => {
  Object.assign(res.consulta, req.body);
  try {
    const updatedConsulta = await res.consulta.save();
    res.json(updatedConsulta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete consulta by id
router.delete('/:id', getConsulta, async (req, res) => {
  try {
    await res.consulta.remove();
    res.json({ message: 'Consulta deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get consulta by ID
async function getConsulta(req, res, next) {
  let consulta;
  try {
    consulta = await Consulta.findById(req.params.id);
    if (consulta == null) {
      return res.status(404).json({ message: 'Consulta not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.consulta = consulta;
  next();
}

module.exports = router;
