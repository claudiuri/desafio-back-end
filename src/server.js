require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('../src/routes/Tasks');
const userRoutes = require('../src/routes/Users');
const errorHandler = require('./middlewares/errorHandler')

const app = express();

app.use(express.json());
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler);

mongoose.connect(process.env.DB, { useNewUrlParser: true, useFindAndModify:false, useCreateIndex: true })
.then(() => console.log("Database connected!"));

app.listen(process.env.PORT || 3000, () => {
    console.info("Server on!")
});