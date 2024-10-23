const { Router } = require("express");
const todolist = Router();
const todolistController = require('../controllers/todolistController') 

const {createTodolistValidation} = require('../validation/todolistValidation')

todolist.get('/', todolistController.index)
todolist.post('/', createTodolistValidation, todolistController.create)
todolist.get('/:id', todolistController.show)
todolist.put('/:id', createTodolistValidation, todolistController.update)
todolist.delete('/:id', todolistController.remove)
module.exports = { todolist };