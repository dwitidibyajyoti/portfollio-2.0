const express = require('express');

const router = express.Router();
const user = require('../model/User');

router.get('/', (req, res) => {
  res.send('router is created');
});
module.exports = router;
