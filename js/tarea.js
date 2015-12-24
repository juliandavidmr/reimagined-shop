var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//-------------- tareas
var tareas = new Schema({
  tarea: String,
  hasta: Date,
  fecha_registro: Date,
  realizado: Boolean
});

module.exports = mongoose.model('tareas', tareas);
