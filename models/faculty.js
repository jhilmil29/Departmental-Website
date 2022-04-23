const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    suffix: {
        type: String,
        enum: ['Dr.', 'Mr.', 'Mrs.', 'Ms.']
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    post: {
        type: String
    },
    dept: {
        type: String,
        enum: []
    },
    school: {
        type: String,
        enum: []
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        min: 1000000000,
        max: 9999999999
    },
    workStn: {
        type: String
    }
});

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;