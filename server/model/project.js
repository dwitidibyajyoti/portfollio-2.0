const mongoose = require('mongoose');

const projectScheama = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  techonology: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
  },
  date: {
    type: Date,

    default: new Date(),
  },
});

module.exports = mongoose.model('project', projectScheama);
