const express = require('express');
const router = express.Router();
const Inspecao = require('../models/Inspecao');

// Get all inspecao
router.get('/', async (req, res) => {
  try {
    const inspecoes = await Inspecao.find();
    res.json(inspecoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one inspecao by id
router.get('/:id', getInspecao, (req, res) => {
  res.json(res.inspecao);
});

// Create new inspecao
router.post('/', async (req, res) => {
  const inspecao = new Inspecao(req.body);
  try {
    const newInspecao = await inspecao.save();
    res.status(201).json(newInspecao);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update inspecao by id
router.put('/:id', getInspecao, async (req, res) => {
  Object.assign(res.inspecao, req.body);
  try {
    const updatedInspecao = await res.inspecao.save();
    res.json(updatedInspecao);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete inspecao by id
router.delete('/:id', getInspecao, async (req, res) => {
  try {
    await res.inspecao.remove();
    res.json({ message: 'Inspecao deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get inspecao by ID
async function getInspecao(req, res, next) {
  let inspecao;
  try {
    inspecao = await Inspecao.findById(req.params.id);
    if (inspecao == null) {
      return res.status(404).json({ message: 'Inspecao not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.inspecao = inspecao;
  next();
}

module.exports = router;
