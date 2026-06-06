const express = require('express');
const router = express.Router();
const { getAllPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer } = require('../controllers/players');
const validatePlayer = require('../middlewares/validatePlayers');

router.get('/', getAllPlayers);
router.get('/:id', getPlayerById);
router.post('/', validatePlayer, (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      firstName: 'Lionel',
      lastName: 'Messi',
      country: 'Argentina',
      age: 36,
      club: 'Inter Miami',
      league: 'MLS',
      fifaRanking: 1,
      previousWorldCups: 5,
      worldCupGoals: 13,
      hobbies: ['football', 'family'],
      position: 'Forward'
    }
  } */
  createPlayer(req, res);
});
router.put('/:id', validatePlayer, (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      firstName: 'Lionel',
      lastName: 'Messi',
      country: 'Argentina',
      age: 36,
      club: 'Inter Miami',
      league: 'MLS',
      fifaRanking: 1,
      previousWorldCups: 5,
      worldCupGoals: 13,
      hobbies: ['football', 'family'],
      position: 'Forward'
    }
  } */
  updatePlayer(req, res);
});
router.delete('/:id', deletePlayer);

module.exports = router;
