const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/hashtags', (req, res) => {
    db.queryDB('example').then((data) => {
        res.status(200).send(data);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

module.exports = router;