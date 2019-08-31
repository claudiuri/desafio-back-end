const express = require('express');
const { User } = require('../models/User');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', async(req, res, next) =>{
    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send({ message: 'User already registered.'});

        user = new User(_.pick(req.body, ['name', 'email', 'password']));

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        const token = user.generateAuthToken();
        res.header('x-auth-token', token).json(_.pick(user, ['_id', 'name', 'email']));
    }
     catch (error) {
        next(error)
    }
});


module.exports = router;