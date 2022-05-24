const express = require('express');
const router = express.Router();

const broController = require('../Controller/broker');

var cors = require('cors')
router.use(cors())

router.get('/allbroker',broController.getAllBrokers);
router.post('/addbroker',broController.addBroker);
router.post('/brlogin',broController.brLogin);

module.exports = router;