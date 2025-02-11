const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodType: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: Boolean, default: true },
});

module.exports = mongoose.model('Donor', donorSchema);
