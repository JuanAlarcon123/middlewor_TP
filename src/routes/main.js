/* const express = require('express')
const router = express.Router() */
const router = require('express').Router()
const {index,contact,about,music,admin,login} = require('../controllers/mainController')
const accesAdmin = require('../middlewares/accesAdmin')

router
.get('/', index)
.get('/about', about)
.get('/music', music)
.get('/contact', contact)
.get('/admin',accesAdmin,admin)
.get('/login', login)





module.exports = router