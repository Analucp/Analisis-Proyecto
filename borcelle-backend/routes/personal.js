const express = require('express');
const router = express.Router();
const Personal = require('../models/Personal');

router.get('/', async (req, res) => {
  const personal = await Personal.find();
  res.json(personal);
});

router.post('/', async (req, res) => {
  const nuevo = new Personal(req.body);
  const guardado = await nuevo.save();
  res.json(guardado);
});

module.exports = router;