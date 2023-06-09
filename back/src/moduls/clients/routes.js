const express = require('express');
const answers = require('../../network/answers');
const controllers = require('./controllers');

const router = express.Router();

router.get('/', (req, res) => {

    const all = controllers.getAlls()
    .then((items) => {

        answers.success(req, res, items, 200);
    })
});


module.exports = router;