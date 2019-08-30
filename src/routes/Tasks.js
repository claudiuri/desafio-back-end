const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', async(req, res) =>{
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/:id', async(req, res) =>{
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return res.status(404).send({message: "Invalid task"})

        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/', async(req, res) =>{
    try {
        const task = await Task.findById(req.params.id);

        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/:id', async(req, res) =>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    
        if (!task) return res.status(404).send({message: "Invalid task"});

    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:id', async(req, res) =>{
    try {
        const task = await Task.findByIdAndRemove(req.params.id);

        if(!task) return res.status(404).send({message: "Invalid task"});

        res.send({message: "Task deleted"});
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;