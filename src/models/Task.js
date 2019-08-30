const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    done: Boolean,
    canceled: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);