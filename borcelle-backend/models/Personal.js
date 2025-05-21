const mongoose = require('mongoose');
const PersonalSchema = new mongoose.Schema({
  nombre: String,
  especialidad: String
});
module.exports = mongoose.model('Personal', PersonalSchema);