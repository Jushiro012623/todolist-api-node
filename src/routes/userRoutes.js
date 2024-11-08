const { Router } = require("express");
const user = Router();
const userController = require('../controllers/userController')
const {createUserValidation, updateUserValidation} = require('../validation/userValidation')
const authenticateToken = require('../middlewares/authenticateToken')
const {isOwner} = require('../middlewares/isOwner')
user.get('/', authenticateToken.isAuthenticated, userController.index)
user.post('/', authenticateToken.isGuest, createUserValidation, userController.create)
user.get('/:id', authenticateToken.isAuthenticated, isOwner('User', 'id'),userController.show)
user.put('/:id', authenticateToken.isAuthenticated, isOwner('User', 'id'),updateUserValidation, userController.update)
user.delete('/:id', authenticateToken.isAuthenticated, isOwner('User', 'id'),userController.remove)
module.exports = {user};
