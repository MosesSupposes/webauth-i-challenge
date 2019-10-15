const express = require('express')
const UsersController = require('../controllers/UsersController')
const requireAuthorization = require('../middleware/requireAuthorization')

const router = express.Router()

router.get('/', UsersController.index)
router.post('/register', requireAuthorization, UsersController.register)
router.post('/login', requireAuthorization,  UsersController.login)
router.get('/logout',  UsersController.logout)

module.exports = router