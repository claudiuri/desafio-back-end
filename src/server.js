require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('../src/routes/Tasks');

const app = express();

app.use(express.json());
app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.DB, { useNewUrlParser: true }).then(() => console.log("Database connected!"));

app.listen(process.env.PORT || 3000, () => {
    console.info("Server on!")
});