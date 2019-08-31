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
    done: {
        type:Boolean,
        required: true
    },
    canceled: {
        type:Boolean,
        required: true
    },
    user:{
        type: mongoose.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Task', TaskSchema);