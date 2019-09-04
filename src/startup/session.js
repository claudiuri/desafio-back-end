require('dotenv').config();
const session = require('express-session');

module.exports = function (app) {
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
}