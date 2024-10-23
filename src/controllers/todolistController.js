const db = require("../models");
const index = async (req, res) => {
  // return res.send({success:true})
  const todolists = await db.TodoList.findAll();
  res.status(201).json({
    success: true,
    data: todolists,
    message: "Todolist retrieved successfully",
  });
};
const show = async (req, res) => {
  const todolist = await db.TodoList.findByPk(req.params.id);
  if (todolist === null) return res.status(404).json({ message: "Not Found" });
  // console.log(todolist instanceof db.TodoList); // true
  res.status(200).json({
    success: true,
    data: todolist,
    message: "Todolist retrieved successfully",
  });
};
const create = async (req, res) => {
  try {
    const todolist = await db.TodoList.create(req.body);
    res.status(201).json({
      success: true,
      data: todolist,
      message: "Todolist created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create Todolist",
      error: error.message,
    });
  }
};
const update = async (req, res) => {
  try {
    const todolist = await db.TodoList.update(req.body, {
      where: { id: req.params.id },
    });
    if (todolist == 0) return res.status(404).json({ message: "Not Found" });
    res.status(200).json({
      success: true,
      data: todolist,
      message: "Todolist updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update Todolist",
      error: error.message,
    });
  }
};
const remove = async (req, res) => {
  try {
    const todolist = await db.TodoList.destroy({
      where: { id: req.params.id },
    });
    if (todolist == 0) return res.status(404).json({ message: "Not Found" });
    res.status(204).json({
      success: true,
      message: "Todolist deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete Todolist",
      error: error.message,
    });
  }
};

module.exports = { index, show, create, update, remove };
