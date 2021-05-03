const express = require('express');
const Board = require('../models/board');

const router = express.Router();

router
  .get('/add', (req, res) => {
    res.render('postAdd');
  })
  .post('/add', async (req, res) => {
    try {
      const { title, writer, content, password } = req.body;
      const board = new Board({
        title,
        writer,
        content,
        password,
      });
      await board.save();
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  });

module.exports = router;
