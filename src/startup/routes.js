const express = require('express');
const taskRoutes = require('../routes/Tasks');
const userRoutes = require('../routes/Users');
const authRoutes = require('../routes/Auth');
const errorHandler = require('../middlewares/errorHandler');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/tasks', taskRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api', authRoutes);
    app.use(errorHandler);
}