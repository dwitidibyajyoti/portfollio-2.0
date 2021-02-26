const express = require('express');
PORT = process.env.PORT || 5000;
const admin = require('./api/adminlogin');
const project = require('./api/project');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');

dotenv.config();

//connect  to mongo db

mongoose.connect(
  process.env.DB_CONNECT,
  {useNewUrlParser: true, useUnifiedTopology: true},
  () => console.log(`Mongo db is connecated`)
);

app.use(express.static('public'));
app.use(express.json());
app.use('/admin', admin);
app.use('/admin', project);

function errHandller(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.status(400).json({
      succass: 0,
      message: err.message,
    });
  }
}
app.use(errHandller);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
