const { body } = require('express-validator'); 
const checkIfNotEmpty = require('../middlewares/checkIfNotEmpty')
const internals = {}

internals.createTodolistValidation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('complete').notEmpty().withMessage('Status is required').isBoolean().withMessage('Complete Must be true or false'),
    checkIfNotEmpty
];
internals.updateTodolistValidation = [
    body('title').optional().notEmpty().withMessage('Title is required'),
    body('description').optional().notEmpty().withMessage('Description is required'),
    body('complete').optional().notEmpty().withMessage('Status is required').isBoolean().withMessage('Complete Must be true or false'),
    checkIfNotEmpty
];
module.exports = internals