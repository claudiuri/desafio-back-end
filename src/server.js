require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const taskRoutes = require('../src/routes/Tasks');
const userRoutes = require('../src/routes/Users');
const authRoutes = require('../src/routes/Auth');
const errorHandler = require('./middlewares/errorHandler')

const app = express();

app.use(session({ 
    name: process.env.SESSION_NAME, 
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false, 
    cookie: { 
        maxAge: 1000 * 60 * 60 * 2, 
        sameSite: false, 
        secure: false
    } 
}));
app.use(express.json());
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/users', userRoutes);
app.use('/api', authRoutes);
app.use(errorHandler);

mongoose.connect(process.env.DB, { useNewUrlParser: true, useFindAndModify:false, useCreateIndex: true })
.then(() => console.log("Database connected!"));

app.listen(process.env.PORT || 3000, () => {
    console.info("Server on!")
});