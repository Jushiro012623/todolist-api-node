const express = require('express');
const path = require('path');
const {database} = require('../../database')
const { todolist} = require('../routes/todolistRoutes')
const { user } = require('../routes/userRoutes');
const { authentication } = require('../routes/authenticationRoutes');
const helmet = require('helmet')
const cors = require('cors')
const authenticateToken = require('../middlewares/authenticateToken');
const { log } = require('console');
const bootstrap = async (app) => {
    // boostrap DB
    await database();
    // Global Middlewares
    app.set('view engine', 'pug');
    // app.set('view engine', path.join(__dirname, 'views'))
    app.use(express.json());
    app.use(helmet());
    app.use(cors());
    // Routes
    app.use("/auth", authentication);
    // Apply middleware to all requests that start with /api/
    app.use("/users", user);   
    app.use(authenticateToken.isAuthenticated)
    app.use("/todolist", todolist);   
}

module.exports = bootstrap;