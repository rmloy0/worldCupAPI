const Stadium = require('../models/stadium');

const getAllStadiums = async (req, res, next) => {
  try {
    const stadiums = await Stadium.find();
    res.status(200).json(stadiums);
  } catch (error) {
    next(error);
  }
};

const getStadiumById = async (req, res, next) => {
  try {
    const stadium = await Stadium.findById(req.params.id);
    if (!stadium) return res.status(404).json({ error: 'Stadium not found' });
    res.status(200).json(stadium);
  } catch (error) {
    next(error);
  }
};

const createStadium = async (req, res, next) => {
  try {
    const stadium = new Stadium(req.body);
    const result = await stadium.save();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateStadium = async (req, res, next) => {
  try {
    const result = await Stadium.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    if (!result) return res.status(404).json({ error: 'Stadium not found' });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteStadium = async (req, res, next) => {
  try {
    const result = await Stadium.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Stadium not found' });
    res.status(200).json({ message: 'Stadium deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStadiums,
  getStadiumById,
  createStadium,
  updateStadium,
  deleteStadium,
};
