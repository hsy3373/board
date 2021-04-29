const express = require('express');
const router = express.Router();

router
  .get('/detailadd', (req, res) => {
    res.render('detail');
  })
  .post('/detail', (req, res) => {});

module.exports = router;
