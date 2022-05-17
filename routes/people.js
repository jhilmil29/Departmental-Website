const express = require('express');
const Faculty = require('../models/faculty');
const router = express.Router();

//Root route
router.get('/', async (req, res) => {
    const faculties = await Faculty.find({});
    res.render('people/index', { faculties });
});

router.get('/:id', async(req, res) => {
    const faculty = await Faculty.findById(req.params.id);
    res.render('people/show', { faculty });
});

router.get('/:id/edit', (req, res) => {
    res.render('people/edit');
});

module.exports = router;