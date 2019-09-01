const express = require('express');
const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const router = express.Router();

router.post('/login', async(req, res, next) =>{
    try {

         let { error } = validateLogin(req.body);
        if(error) return res.status(400).send({ message: error.details[0].message });

        let user = await User.findOne({ email: req.body.email });

        if (!user) return res.status(400).send({ message: 'Unregistered Email'});

        const passwordIsValid = await bcrypt.compare(req.body.password, user.password);

        if (!passwordIsValid) res.status(400).send({ message: 'Invalid password'})

        if(!req.session.userId) req.session.userId = user._id;  

        res.send({ message: "Logged" });
    }
     catch (error) {
        next(error)
    }
});

router.post('/logout', async(req, res, next) =>{
    req.session.destroy(err => {
        
        if(err){
            next(err)
        }

        res.clearCookie('sid');
        res.send({ message: "Disconnected" })

    });
});

const validateLogin = (login) => {

    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    
    return  Joi.validate(login, schema);
}


module.exports = router;