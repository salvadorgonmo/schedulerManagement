const express = require('express')
const Router = express.Router()
const userController = require('../controllers/userController')

Router.get('/user', userController.testController)

module.exports = Router
