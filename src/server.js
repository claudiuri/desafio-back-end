require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB, { useNewUrlParser: true }).then(() => console.log("Database connected!"));

app.listen(process.env.PORT || 3000, () => {
    console.info("Server on!")
});