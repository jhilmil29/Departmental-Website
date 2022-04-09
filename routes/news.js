const express = require('express');
const router = express.Router();

//Root route
router.get('/', (req, res) => {
    res.render('news/index');
})

module.exports = router;