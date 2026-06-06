const Player = require('../models/players');

const getAllPlayers = async (req, res, next) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    next(error);
  }
};

const getPlayerById = async (req, res, next) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ error: 'Player not found' });
    res.status(200).json(player);
  } catch (error) {
    next(error);
  }
};

const createPlayer = async (req, res, next) => {
  try {
    const player = new Player(req.body);
    const result = await player.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updatePlayer = async (req, res, next) => {
  try {
    const result = await Player.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    if (!result) return res.status(404).json({ error: 'Player not found' });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    const result = await Player.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Player not found' });
    res.status(200).json({ message: 'Player deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
