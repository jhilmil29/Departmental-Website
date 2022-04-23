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
        default: 'Department of Computer and Communiacation Engineering'
    },
    school: {
        type: String,
        default: 'School of Computing & Information Technology'
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: {
        type: Number,
        required: true,
        min: 1000000000,
        max: 9999999999,
        unique: true
    },
    workStn: {
        type: String
    }
});

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;