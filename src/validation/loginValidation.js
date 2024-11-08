const { validationResult, body } = require('express-validator'); 
const checkIfNotEmpty = require('../middlewares/checkIfNotEmpty')
const loginValidation = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
    checkIfNotEmpty
];

module.exports = {loginValidation}