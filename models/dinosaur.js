const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DinosaurSchema = new Schema({
  name: String,
  species: String,
  description: String,
  population: Number,
  flagged: Boolean,
  flag: {
    type: String,
    enum: ['NONE', 'BEHAVIOR', 'MEDICAL'],
  },
  status: {
    type: String,
    enum: ['GREEN', 'RED'],
  },
});

module.exports = mongoose.model('Dinosaur', DinosaurSchema);
