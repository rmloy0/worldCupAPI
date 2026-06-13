const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  matchDate: {
    type: Date,
    required: true,
  },
  homeTeam: {
    type: String,
    required: true,
  },
  awayTeam: {
    type: String,
    required: true,
  },
  round: {
    type: String,
    required: true,
  },
  group: {
    type: String,
  },
  stadium: {
    type: String,
  },
  score: {
    home: {
      type: Number,
      required: true,
    },
    away: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model('Match', matchSchema, 'Matches');
