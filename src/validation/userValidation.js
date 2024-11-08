const { body } = require('express-validator'); 
const db = require('../models')
const checkIfNotEmpty = require('../middlewares/checkIfNotEmpty')
const createUserValidation = [
    body('username').notEmpty().withMessage('Username is required').isLength({min:5, max:25}).withMessage('Username must be between 5 and 25 characters long'),
    body('password').notEmpty().withMessage('Password is required').isLength({min:5, max:25}).withMessage('Password must be between 5 and 25 characters long'),
    body('email').isEmail().trim().withMessage('Please enter a valid email').custom( async value => {
        const user = await db.User.findOne({ where: { email: value } });
        if (user) {
            throw new Error('E-mail already in use');
        }
    }).notEmpty().withMessage('Email is required'),
    checkIfNotEmpty
];
const updateUserValidation = [
    body('username').optional().isLength({min:5, max:25}).withMessage('Username must be between 5 and 25 characters long'),
    body('password').optional().isLength({min:5, max:25}).withMessage('Password must be between 5 and 25 characters long'),
    body('passwordConfirmation').custom((confirmPassowrd, { req }) => {
        return confirmPassowrd === req.body.password;
    }).withMessage('Passwords must match'),
    body('email').optional().isEmail().trim().withMessage('Please enter a valid email').custom(async email => {
        const user =await db.User.findOne({ where: { email } });
        if (user && user.email === email) {
            return true;
        }
        const existingUser = await db.User.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('E-mail already in use');
        }
    }),
    checkIfNotEmpty
];
module.exports = {createUserValidation, updateUserValidation};