const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  worldCupTitles: {
    type: Number,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  confederation: {
    type: String,
    required: true,
  },
  flagColors: {
    type: [String],
    required: true,
  },
  fifaRanking: {
    type: Number,
    required: true,
  },
  coach: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Team', teamSchema);
