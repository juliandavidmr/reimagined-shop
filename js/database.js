/**
The permitted SchemaTypes are

String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
*/

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//---------------- Usuario
var usuario = new Schema({
  nombre1: String,
  nombre2: String,
  direccion: String,
  genero: {
    type: String,
    enum: ['Masculino', 'Femenino', 'Otro']
  }
});

module.exports = mongoose.model('usuario', usuario);

//-------------- tareas
var tareas = new Schema({
  tarea: String,
  hasta: Date,
  fecha_registro: Date,
  realizado: Boolean
});

module.exports = mongoose.model('tareas', tareas);


//-------------- factura
var factura = new Schema({
  tarea: String,
  hasta: Date,
  fecha_registro: Date,
  realizado: Boolean
});

module.exports = mongoose.model('factura', factura);
