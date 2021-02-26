const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Project = require('../model/project');
const url = 'http://localhost:5000';

// storage engine

const storage = multer.diskStorage({
  destination: './public/images',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {fileSize: 10000000},
});

router.post('/project', upload.single('projectimg'), async (req, res) => {
  //   res.json({
  //     success: 200,
  //     profile_url: `http://localhost:5000/images/${req.file.filename}`,
  //   });
  const project = new Project({
    name: req.body.name,
    techonology: req.body.techonology,
    imageurl: `${url}/images/${req.file.filename}`,
  });
  try {
    const saved = await project.save();
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
