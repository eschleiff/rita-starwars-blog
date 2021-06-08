const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/add', (req, res) => {
    res.render('add');
})

router.get('/story1', (req, res) => {
    res.render('story_one');
})

module.exports = router