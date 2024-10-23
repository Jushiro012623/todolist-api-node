const { validationResult } = require('express-validator')
const checkIfNotEmpty = (req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty() || Object.keys(req.body).length === 0) {
            const errorResponse = !errors.isEmpty() ? errors.array() : "Request not found";
            return res.status(400).json({
                success: false,
                errors: errorResponse,
            });
        }
    next();
}

module.exports = checkIfNotEmpty;