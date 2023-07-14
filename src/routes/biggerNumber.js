const express = require('express');
const router = express.Router();


const biggerNumber = require('../controllers/biggerNumber');

router.get('/biggernumber', biggerNumber.biggerNumber);

module.exports = router;