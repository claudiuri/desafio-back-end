const express = require('express');
const validateObjectId = require('../middlewares/validateObjectId');
const auth = require('../middlewares/auth');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', auth,async(req, res, next) =>{
    try {
        let { userId } = req.session;

        const tasks = await Task.find({ user: userId });

        res.send(tasks);
    } catch (error) {
        next(error)
    }
});

router.get('/:id', [validateObjectId, auth], async(req, res, next) =>{
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return res.status(404).send({message: "Invalid task"})

        res.send(task);
    } catch (error) {
        next(error)
    }
});

router.post('/', auth,async(req, res, next) =>{
    try {
        
        req.body["user"] = req.session.userId;

        let task = await Task.create(req.body);

        res.send(task);
    } catch (error) {
        next(error)
    }
});

router.put('/:id', [validateObjectId, auth], async(req, res, next) =>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    
        if (!task) return res.status(404).send({message: "Invalid task"});

        res.send(task);

    } catch (error) {
        next(error)
    }
});

router.delete('/:id', [validateObjectId, auth], async(req, res) =>{
    try {
        const task = await Task.findByIdAndRemove(req.params.id);

        if(!task) return res.status(404).send({message: "Invalid task"});

        res.send({message: "Task deleted"});
    } catch (error) {
        next(error)
    }
});

module.exports = router;