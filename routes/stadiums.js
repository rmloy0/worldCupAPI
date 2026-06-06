const express = require('express');
const router = express.Router();
const {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require('../controllers/players');
const validatePlayer = require('../middlewares/validatePlayers');

router.get('/', getAllPlayers);
router.get('/:id', getPlayerById);
router.post('/', validatePlayer, (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      stadiumName: 'Lusail Stadium',
      city: 'Lusail',
      location: 'North of Doha',
      country: 'Qatar',
      builtDate: '2021-11-19',
      capacity: 88966,
      amenities: ['VIP lounges', 'parking', 'food courts'],
      funFacts: ['Hosted the 2022 World Cup Final']
    }
  } */
  createStadium(req, res);
});
router.put('/:id', validateStadium, (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      stadiumName: 'Lusail Stadium',
      city: 'Lusail',
      location: 'North of Doha',
      country: 'Qatar',
      builtDate: '2021-11-19',
      capacity: 88966,
      amenities: ['VIP lounges', 'parking', 'food courts'],
      funFacts: ['Hosted the 2022 World Cup Final']
    }
  } */
  updateStadium(req, res);
});
router.delete('/:id', deleteStadium);

module.exports = router;
