const express = require('express')
const router = express.Router()
const control = require('./controller')

router.get('/', control.homeRoute)
router.post('/newContact', control.newContact)

module.exports = router
