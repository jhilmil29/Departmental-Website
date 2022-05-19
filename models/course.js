const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    cid: {
        type: String,
        required: true,
        unique:true
    },
    cname: {
        type: String,
        required: true,
        unique: true
    },
    credits: {
        type: Number,
        required: true
    },
    desc: {
        type: String
    },
    sem: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['subject', 'lab', 'pe']
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;