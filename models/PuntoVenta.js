const mongoose = require('mongoose');

const PuntoVentaSchema = new mongoose.Schema({
  
  latitud: {
    type: Number,
    required: true,
    min: -90,
    max: 90
  },
  longitud: {
    type: Number,
    required: true,
    min: -180,
    max: 180
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  zona: {
    type: String,
    required: true,
    trim: true
  },
  venta: {
    type: Number,
    required: true,
    min: 0
  }
});


module.exports = mongoose.model('PuntoVenta', PuntoVentaSchema);
