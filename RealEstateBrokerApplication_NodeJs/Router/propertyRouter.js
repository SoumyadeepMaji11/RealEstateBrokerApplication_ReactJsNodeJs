const express = require('express');
const router = express.Router();
const propertyController = require('../Controller/property');

var cors = require('cors')
router.use(cors())

router.get('/allproperty',propertyController.getAll)

router.get('/propertyByCity/:city',propertyController.getByCity)

router.get('/propertyByType/:prop_type',propertyController.getByType)

router.post('/insertproperty',propertyController.addProperty)

router.put('/updateproperty',propertyController.updateProperty)

router.delete('/deleteproperty/:id',propertyController.deleteProperty)

module.exports = router