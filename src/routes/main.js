/* const express = require('express')
const router = express.Router() */
const router = require('express').Router()
const {index,contact,about,music,} = require('../controllers/mainController')

router
.get('/', index)
.get('/about', about)
.get('/music', music)
.get('/contact', contact)





module.exports = router