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

const updateMatchSchema = require('../middlewares/ValidateMatches');
const isAuthenticated = require('../auth/isAuthenticated');

router.get('/', getAllMatches);

router.get('/:id', getMatchesById);

// POST create match
router.post('/', isAuthenticated, validateMatches, (req, res) => {
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
  createMatches(req, res);
});
router.put(
  '/:id',
  isAuthenticated,
  updateMatchSchema,

  (req, res) => {
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

    updateMatches(req, res);
  },
);

router.delete('/:id', isAuthenticated, deleteMatches);

module.exports = router;
