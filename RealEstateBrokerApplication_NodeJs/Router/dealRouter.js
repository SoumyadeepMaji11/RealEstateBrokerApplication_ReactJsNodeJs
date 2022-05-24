const express = require('express');
const router = express.Router();

const dealController = require('../Controller/deal');

var cors = require('cors')
router.use(cors())

router.get('/alldeal',dealController.getAllDeal);
router.delete('/deletedeal/:id',dealController.deleteDeal);

module.exports = router;