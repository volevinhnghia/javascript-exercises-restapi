const express = require('express');
const router = express.Router();


const string = require('../controllers/string');

router.get('/string/:string', string.reverseString);
router.get('/palindromestring/:string', string.palindromeString);
router.get('/string-element/:string', string.elementCount);

module.exports = router;