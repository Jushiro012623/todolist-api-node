const { validationResult, body } = require('express-validator'); 
const createTodolistValidation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    (req, res, next) => {
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({
                    success: false,
                    errors: errors.array(),
                });
                next(err);
            }
        next();
    }
];

module.exports = {createTodolistValidation}