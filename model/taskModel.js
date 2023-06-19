const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    tag: {
        type: 'string',
        required: true,
    },
    author: {
        type: 'string',
        required: true,
    }
}, {timestamps: true})

const TASKS = mongoose.model('newTask', taskSchema);

module.exports = TASKS;