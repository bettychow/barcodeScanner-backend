const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/upc')

router.get('/', ctrl.getAllUPC)
router.get('/:code', ctrl.getOneUPC)
router.post('/', ctrl.addUPC)

module.exports = router