const express = require('express');
const {database} = require('../database')
const { todolist} = require('../routes/todolistRoutes')
const { user } = require('../routes/userRoutes');

const bootstrap = async (app) => {
    // boostrap DB
    await database();
    // Global Middlewares
    app.use(express.json());
    // Routes
    app.use("/todolist", todolist);   
    app.use("/users", user);   
}

module.exports = bootstrap;