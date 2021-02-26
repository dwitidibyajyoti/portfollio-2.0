const mongoose = require('mongoose');

const exprienceScheama = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
  url: {
    type: String,
  },
  github: {
    type: String,
  },
});

module.exports = mongoose.model('exprience', exprienceScheama);
