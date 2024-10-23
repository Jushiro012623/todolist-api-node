const { Router } = require("express");
const user = Router();
const userController = require('../controllers/userController')
const {createUserValidation, updateUserValidation} = require('../validation/userValidation')

user.get('/', userController.index)
user.post('/', createUserValidation, userController.create)
user.get('/:id', userController.show)
user.put('/:id', updateUserValidation, userController.update)
user.delete('/:id', userController.remove)

module.exports = {user};
