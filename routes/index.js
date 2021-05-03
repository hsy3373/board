const express = require('express');
const moment = require('moment');
const Board = require('../models/board');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const boards = await Board.find({}).sort({ createdAt: -1 });
  const result = boards.map((item) => {
    if (item.createdAt) {
      item.date = moment(item.createdAt).format('YYYY-MM-DD');
    }
    return item;
  });
  res.render('main', { data: result });
});

module.exports = router;
