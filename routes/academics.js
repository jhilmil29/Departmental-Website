const express = require('express');
const MCourse = require('../models/mcourse');
const router = express.Router();

//Root route
router.get('/', async (req, res) => {
    const mcourses = await MCourse.find({});
    res.render('academics/index', { mcourses });
});

router.get('/:id', async (req, res) => {
    const mcourse = await MCourse.findById(req.params.id);
    res.render('academics/showSub', { mcourse });
})

module.exports = router;