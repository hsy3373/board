const express = require('express');
const router = express.Router();

router
  .get('/add', (req, res) => {
    res.render('main');
  })
  .post('/main', (req, res) => {});

module.exports = router;
