const express = require('express');
const router = express.Router();
const { crearCita, obtenerCitas } = require('../controllers/citaController');

router.post('/', crearCita);
router.get('/', obtenerCitas);

module.exports = router;