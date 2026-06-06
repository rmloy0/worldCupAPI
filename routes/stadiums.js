const express = require('express');
const router = express.Router();
const {
  getAllStadiums,
  getStadiumById,
  createStadium,
  updateStadium,
  deleteStadium,
} = require('../controllers/stadiums');
const validateStadium = require('../middlewares/validateStadiums');

router.get('/', getAllStadiums);
router.get('/:id', getStadiumById);
router.post('/', validateStadium, (req, res) => {
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
