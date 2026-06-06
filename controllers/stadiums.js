const Stadium = require('../models/stadium');

const getAllStadiums = async (req, res) => {
  try {
    const stadiums = await Stadium.find();
    res.status(200).json(stadiums);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getStadiumById = async (req, res) => {
    try {
      const stadium = await Stadium.findById(req.params.id);
      if (!stadium) return res.status(404).json({ error: 'Stadium not found' });
      res.status(200).json(stadium);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };
  
  const createStadium = async (req, res) => {
    try {
      const stadium = new Stadium(req.body);
      const result = await stadium.save();
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };
  
const updateStadium = async (req, res) => {
    try {
      const result = await Stadium.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if (!result) return res.status(404).json({ error: 'Stadium not found' });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };
  
const deleteStadium = async (req, res) => {
    try {
      const result = await Stadium.findByIdAndDelete(req.params.id);
      if (!result) return res.status(404).json({ error: 'Stadium not found' });
      res.status(200).json({ message: 'Stadium deleted successfully' });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };
  
module.exports = { getAllStadiums, getStadiumById, createStadium, updateStadium, deleteStadium };