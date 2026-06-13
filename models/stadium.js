const mongoose = require('mongoose');

const stadiumSchema = new mongoose.Schema({
  stadiumName: { type: String, required: true },
  city: { type: String, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  builtDate: { type: Date, required: true },
  capacity: { type: Number, required: true },
  amenities: { type: [String], required: true },
  funFacts: { type: [String], required: true },
});

module.exports = mongoose.model('Stadium', stadiumSchema, 'stadia');
