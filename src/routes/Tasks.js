const express = require('express');
const validateObjectId = require('../middlewares/validateObjectId');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', async(req, res) =>{
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        next(error)
    }
});

router.get('/:id', validateObjectId, async(req, res) =>{
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return res.status(404).send({message: "Invalid task"})

        res.send(task);
    } catch (error) {
        next(error)
    }
});

router.post('/', async(req, res) =>{
    try {
        const task = await Task.create(req.body);

        res.send(task);
    } catch (error) {
        next(error)
    }
});

router.put('/:id', validateObjectId, async(req, res) =>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    
        if (!task) return res.status(404).send({message: "Invalid task"});

    } catch (error) {
        next(error)
    }
});

router.delete('/:id', validateObjectId, async(req, res) =>{
    try {
        const task = await Task.findByIdAndRemove(req.params.id);

        if(!task) return res.status(404).send({message: "Invalid task"});

        res.send({message: "Task deleted"});
    } catch (error) {
        next(error)
    }
});

module.exports = router;