const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    writer: {
      type: String,
    },
    content: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: {},
  }
);

module.exports = mongoose.model('Board', boardSchema);
