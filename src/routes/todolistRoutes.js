const { Router } = require("express");
const todolist = Router();
const todolistController = require('../controllers/todolistController') 
const todolistValidation = require('../validation/todolistValidation')
const {isOwner} = require('../middlewares/isOwner')
todolist.get('/',  todolistController.index)
todolist.post('/', todolistValidation.createTodolistValidation, todolistController.create)
todolist.get('/:id', isOwner('TodoList'), todolistController.show)
todolist.put('/:id', isOwner('TodoList'), todolistValidation.updateTodolistValidation, todolistController.update)
todolist.delete('/:id', isOwner('TodoList'), todolistController.remove)
module.exports = { todolist };