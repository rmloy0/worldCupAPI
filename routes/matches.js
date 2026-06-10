const express = require('express');
const router = express.Router();

const {
  getAllMatches,
  getMatchesById,
  createMatches,
  updateMatches,
  deleteMatches,
} = require('../controllers/matches');

const validateMatches = require('../middlewares/ValidateMatches');

router.get('/', getAllMatches);

router.get('/:id', getMatchesById);

// POST create match
router.post('/', validateMatches, createMatches);

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

router.put('/:id', validateMatches, updateMatches);

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

router.delete('/:id', deleteMatches);

module.exports = router;
