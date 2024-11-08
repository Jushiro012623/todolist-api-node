const { Router } = require("express");
const authentication = Router();
const authenticationController = require('../controllers/authenticationController')
const {loginValidation} = require('../validation/loginValidation')
authentication.post('/login', loginValidation,authenticationController.login)
authentication.post('/logout', authenticationController.logout)

module.exports = {authentication};
