const express = require('express');
const router = express.Router();
const PuntoVenta = require('../models/PuntoVenta');

  //METODO POST
router.post('/', async (req, res) => {
  console.log('📦 Cuerpo recibido en la API:', req.body); // para debug

  try {
    const nuevoPunto = new PuntoVenta(req.body);
    await nuevoPunto.save();
    res.status(201).json(nuevoPunto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//GET
router.get('/', async (req, res) => {
  try {
    const puntos = await PuntoVenta.find();
    res.json(puntos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener puntos' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await PuntoVenta.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!actualizado) return res.status(404).json({ error: 'Punto no encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await PuntoVenta.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Punto no encontrado' });
    res.json({ mensaje: 'Punto eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
