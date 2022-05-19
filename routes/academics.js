const express = require('express');
const Course = require('../models/course');
const router = express.Router();

//Root route
router.get('/', async (req, res) => {
    const courses = await Course.find({});
    res.render('academics/index', { courses });
});

router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.render('academics/show', { course });
});

module.exports = router;