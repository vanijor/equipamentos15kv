const express = require('express');
const router = express.Router();
const Comunicacao = require('../models/Comunicacao');

// Get all comunicacao
router.get('/', async (req, res) => {
  try {
    const comunicacoes = await Comunicacao.find();
    res.json(comunicacoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one comunicacao by id
router.get('/:id', getComunicacao, (req, res) => {
  res.json(res.comunicacao);
});

// Create new comunicacao
router.post('/', async (req, res) => {
  const comunicacao = new Comunicacao(req.body);
  try {
    const newComunicacao = await comunicacao.save();
    res.status(201).json(newComunicacao);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update comunicacao by id
router.put('/:id', getComunicacao, async (req, res) => {
  Object.assign(res.comunicacao, req.body);
  try {
    const updatedComunicacao = await res.comunicacao.save();
    res.json(updatedComunicacao);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete comunicacao by id
router.delete('/:id', getComunicacao, async (req, res) => {
  try {
    await res.comunicacao.remove();
    res.json({ message: 'Comunicacao deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get comunicacao by ID
async function getComunicacao(req, res, next) {
  let comunicacao;
  try {
    comunicacao = await Comunicacao.findById(req.params.id);
    if (comunicacao == null) {
      return res.status(404).json({ message: 'Comunicacao not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.comunicacao = comunicacao;
  next();
}

module.exports = router;
