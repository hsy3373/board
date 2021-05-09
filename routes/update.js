const express = require('express');
const router = express.Router();
const Board = require('../models/board');

router.get('/:id', async function (req, res) {
  const { id } = req.params;
  const board = await Board.findById(id);

  res.render('update', { data: board });
});

router.post('/:id', async function (req, res) {
  const { password } = req.body;
  const { id } = req.params;

  const board = await Board.findOne({
    _id: id,
    password: password,
  });
  console.log(board);
  if (!board) {
    return res.sendStatus(403);
  }
  return res.sendStatus(200);
});

router.put('/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const { title, writer, content, password } = req.body;

    await Board.updateOne({ _id: id }, { title, writer, content, password });

    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
