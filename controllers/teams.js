const Team = require('../models/team');

const getAllTeams = async (req, res, next) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    next(error);
  }
};

const getTeamById = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ error: 'Team not found' });
    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

const createTeam = async (req, res, next) => {
  try {
    const team = new Team(req.body);
    const result = await team.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateTeam = async (req, res, next) => {
  try {
    const result = await Team.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!result) return res.status(404).json({ error: 'Team not found' });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteTeam = async (req, res, next) => {
  try {
    const result = await Team.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Team not found' });
    res.status(200).json({ message: 'Team deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
};
