const Player = require('../models/players');

const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ error: 'Player not found' });
    res.status(200).json(player);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    const result = await player.save();
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const result = await Player.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!result) return res.status(404).json({ error: 'Player not found' });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const result = await Player.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Player not found' });
    res.status(200).json({ message: 'Player deleted successfully' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { getAllPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer };
