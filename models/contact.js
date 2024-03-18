const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  streetAddress: String,
  city: String,
  state: String,
  zipCode: String,
  telephoneNumber: String,
  comments: String,
});

module.exports = mongoose.model('Contact', ContactSchema);
