require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
   
});

UserSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATEKEY);
    return token;
}

module.exports = mongoose.model('User', UserSchema);