const Matches = require('../models/matches');

const getAllMatches = async (req, res, next) => {
  try {
    const matches = await Matches.find();
    res.status(200).json(matches);
  } catch (error) {
    next(error);
  }
};

const getMatchesById = async (req, res, next) => {
  try {
    const match = await Matches.findById(req.params.id);
    if (!match) return res.status(404).json({ error: 'Match not found' });
    res.status(200).json(match);
  } catch (error) {
    next(error);
  }
};

const createMatches = async (req, res, next) => {
  try {
    const match = new Matches(req.body);
    const result = await match.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateMatches = async (req, res, next) => {
  try {
    const result = await Matches.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );

    if (!result) return res.status(404).json({ error: 'Match not found' });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteMatches = async (req, res, next) => {
  try {
    const result = await Matches.findByIdAndDelete(req.params.id);

    if (!result) return res.status(404).json({ error: 'Match not found' });
    res.status(200).json({ message: 'Match deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMatches,
  getMatchesById,
  createMatches,
  updateMatches,
  deleteMatches,
};