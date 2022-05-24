const express = require('express');
const router = express.Router();

const custController = require('../Controller/customer');

var cors = require('cors')
router.use(cors())

router.get('/allcustomer',custController.getAll);

router.post('/addcustomer',custController.addCustomer);

router.post('/login',custController.customerLogin);

router.post('/deal/:id',custController.deal);

module.exports = router;