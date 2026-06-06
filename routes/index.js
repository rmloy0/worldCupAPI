const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
  res.send('Welcome to the WorldCupAPI');
});

router.use('/players', require('./players'));
router.use('/stadiums', require('./stadiums'));

module.exports = router;
