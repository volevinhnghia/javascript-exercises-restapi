const express = require('express');
const router = express.Router();


const primeNumber = require('../controllers/prime');

router.get('/prime/:number', primeNumber.primeNumber);

module.exports = router;