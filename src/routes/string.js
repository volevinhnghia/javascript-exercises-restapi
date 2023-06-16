const express = require('express');
const router = express.Router();


const string = require('../controllers/string');

router.get('/string/:string', string.reverseString);

module.exports = router;