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
    }
});

const MCourse = mongoose.model('MCourse', courseSchema);
module.exports = MCourse;