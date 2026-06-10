const express = require('express');
const router = express.Router();
const {
  getAllMatches,
  getMatchesById,
  createMatches,
  updateMatches,
  deleteMatches,
} = require('../controllers/matches');
const validateMatches = require('../middlewares/validateMatches');

router.get('/', getAllMatches);
router.get('/:id', getMatchesById);
router.post('/', createMatches, (req, res) => {
  /* #swagger.parameters['body'] = {
  in: 'body',
  required: true,
  schema: {
    matchDate: '2026-06-15T00:00:00.000Z',
    homeTeam: 'Brazil',
    awayTeam: 'Germany',
    round: 'Round of 16',
    group: 'B',
    stadium: 'Lusail Stadium',
    score: {
      home: 2,
      away: 1
    }
  }
} */

  createStadium(req, res);
});
router.put('/:id', validateMatches, (req, res) => {
  /* #swagger.parameters['body'] = {
  in: 'body',
  required: true,
  schema: {
    matchDate: '2026-06-15T00:00:00.000Z',
    homeTeam: 'Brazil',
    awayTeam: 'Germany',
    round: 'Round of 16',
    group: 'B',
    stadium: 'Lusail Stadium',
    score: {
      home: 2,
      away: 1
    }
  }
} */

  updateStadium(req, res);
});
router.delete('/:id', deleteStadium);

module.exports = router;
