require('dotenv').config();
const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect(process.env.DB, { useNewUrlParser: true, useFindAndModify:false, useCreateIndex: true })
        .then(() => console.log("Database connected!"));
}