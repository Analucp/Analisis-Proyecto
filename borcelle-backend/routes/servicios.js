const express = require('express');
const router = express.Router();
const Servicio = require('../models/Servicio');

router.get('/', async (req, res) => {
  const servicios = await Servicio.find();
  res.json(servicios);
});

router.post('/', async (req, res) => {
  const nuevo = new Servicio(req.body);
  const guardado = await nuevo.save();
  res.json(guardado);
});

module.exports = router;