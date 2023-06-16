const express = require('express');
const router = express.Router();


const calcTwoNumber = require('../controllers/calc');

router.get('/calc', calcTwoNumber.calcTwoNumber);

module.exports = router;