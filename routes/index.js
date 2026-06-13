const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the WorldCupAPI');
});

router.use('/players', require('./players'));
router.use('/stadiums', require('./stadiums'));
router.use('/matches', require('./matches'));
router.use('/teams', require('./teams'));

module.exports = router;
