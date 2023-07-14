const express = require('express');
const router = express.Router();


const number = require('../controllers/number');

router.get('/factorial/:number', number.factorialNumber);
router.get('/fizzbuzz/:number', number.fizzbuzz);
router.get('/number-array', number.numberSort)

module.exports = router;