const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  age: { type: Number, required: true },
  club: { type: String, required: true },
  league: { type: String, required: true },
  fifaRanking: { type: Number, required: true },
  previousWorldCups: { type: Number, required: true },
  worldCupGoals: { type: Number, required: true },
  hobbies: { type: [String], required: true },
  position: { type: String, required: true }
});

module.exports = mongoose.model('Player', playerSchema, 'players');
