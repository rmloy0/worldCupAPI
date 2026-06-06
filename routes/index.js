const express = require('express');
const router = express.Router();

router.use('/players', require('./players'));
router.use('/stadiums', require('./stadiums'));

module.exports = router;
