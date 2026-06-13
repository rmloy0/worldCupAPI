const express = require('express');
const router = express.Router();

const {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} = require('../controllers/teams');

const validateTeams = require('../middlewares/validateTeams');
const isAuthenticated = require('../auth/isAuthenticated');

router.get('/', getAllTeams);

router.get('/:id', getTeamById);

router.post('/', isAuthenticated, validateTeams, (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      country: 'Brazil',
      worldCupTitles: 5,
      continent: 'South America',
      confederation: 'CONMEBOL',
      flagColors: ['green', 'yellow', 'blue'],
      fifaRanking: 1,
      coach: 'Dorival Junior'
    }
  } */
  createTeam(req, res);
});

router.put('/:id', isAuthenticated, validateTeams, (req, res) => {
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      country: 'Brazil',
      worldCupTitles: 5,
      continent: 'South America',
      confederation: 'CONMEBOL',
      flagColors: ['green', 'yellow', 'blue'],
      fifaRanking: 1,
      coach: 'Dorival Junior'
    }
  } */
  updateTeam(req, res);
});

router.delete('/:id', isAuthenticated, deleteTeam);

module.exports = router;
