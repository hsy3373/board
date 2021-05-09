const express = require('express');
const router = express.Router();
const Board = require('../models/board');

router.get('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const border = await Board.findById(id, '-password');
    res.render('detail', { data: border });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.post('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const border = await Board.findOne({
      _id: id,
      password,
    });
    if (!border) return res.sendStatus(403);
    await Board.deleteOne({ _id: id });
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
