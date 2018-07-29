const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/upc')

router.get('/')
router.get('/:code', ctrl.getOneUPC)

module.exports = router