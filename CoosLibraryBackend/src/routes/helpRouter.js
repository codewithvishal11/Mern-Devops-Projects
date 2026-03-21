const express = require('express');
const { getHelp, addHelp } = require('../controllers/helpController');
const router = express.Router();

router.get('/',getHelp);
router.post('/',addHelp);

module.exports = router;