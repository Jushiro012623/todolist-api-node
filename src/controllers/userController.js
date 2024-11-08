const db = require("../models");
const {hashThis} = require("../helpers/hashing");
const internals = {}
internals.index = async (req, res) => {
  const users = await db.User.findAll();
  res.status(201).json({
    success: true,
    data: users,
    message: "Users retrieved successfully",
  });
  // res.render('index', { title: 'Hey', message: 'Hello there!' })
};
internals.show = async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
  if (user === null) return res.status(404).json({ message: "Not Found" });
  res.status(200).json({
    success: true,
    data: user,
    message: "User retrieved successfully",
  });
};
internals.create = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await hashThis(password);
    const user = await db.User.create({
      username,
      password: hashedPassword,
      email,
    });
    res.status(201).json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create User",
      error: error.message,
    });
  }
};
internals.update = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await hashThis(password);
    const user = await db.User.update(
      {
        username,
        password: hashedPassword,
        email,
      },
      { where: { id: req.params.id } }
    );
    if (user == 0) return res.status(404).json({ message: "Not Found" });
    res.status(200).json({
      success: true,
      data: user,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update User",
      error: error.message,
    });
  }
};
internals.remove = async (req, res) => {
  try {
    const user = await db.User.destroy({ where: { id: req.params.id } });
    if (user == 0) return res.status(404).json({ message: "Not Found" });
    res.status(204).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete User",
      error: error.message,
    });
  }
};
module.exports = internals
